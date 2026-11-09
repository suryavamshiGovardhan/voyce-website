import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { Lock } from "lucide-react";

const STORAGE_KEY = "voyce_admin_blueprint_passkey";

interface AdminAuthValue {
  unlocked: boolean;
  blueprint: { embed_url: string; view_url: string; edit_url: string } | null;
  lock: () => void;
}

const AdminAuthContext = createContext<AdminAuthValue>({
  unlocked: false,
  blueprint: null,
  lock: () => {},
});

export function useAdminAuth() {
  return useContext(AdminAuthContext);
}

interface AdminGateProps {
  children: ReactNode;
  title?: string;
}

/**
 * Shared passkey gate for every /admin page.
 * Verifies against the existing `admin-blueprint` edge function and keeps the
 * key in sessionStorage so one unlock covers the whole admin area.
 */
export function AdminGate({ children, title = "Admin access" }: AdminGateProps) {
  const [passkey, setPasskey] = useState("");
  const [blueprint, setBlueprint] = useState<AdminAuthValue["blueprint"]>(null);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  const verify = useCallback(async (key: string, silent = false) => {
    setLoading(true);
    const { data, error } = await supabase.functions.invoke("admin-blueprint", {
      body: { action: "verify", passkey: key },
    });
    setLoading(false);
    setChecking(false);
    if (error || !data?.ok) {
      if (!silent) toast.error("Invalid passkey");
      sessionStorage.removeItem(STORAGE_KEY);
      setBlueprint(null);
      return false;
    }
    sessionStorage.setItem(STORAGE_KEY, key);
    setBlueprint({ embed_url: data.embed_url, view_url: data.view_url, edit_url: data.edit_url });
    if (!silent) toast.success("Access granted");
    return true;
  }, []);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      setPasskey(stored);
      verify(stored, true);
    } else {
      setChecking(false);
    }
  }, [verify]);

  async function sendPasskeyEmail() {
    const { error } = await supabase.functions.invoke("admin-blueprint", {
      body: { action: "send_passkey" },
    });
    if (error) toast.error("Could not send passkey");
    else toast.success("Passkey sent to the registered admin inbox");
  }

  function lock() {
    sessionStorage.removeItem(STORAGE_KEY);
    setBlueprint(null);
    setPasskey("");
  }

  if (checking) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-background">
        <p className="text-sm text-muted-foreground">Checking access…</p>
      </div>
    );
  }

  if (!blueprint) {
    return (
      <div className="min-h-[70vh] bg-background flex items-center justify-center px-4">
        <Card className="p-6 w-full max-w-md">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold">{title}</h1>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Enter the admin passkey to continue.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              verify(passkey);
            }}
            className="space-y-4"
          >
            <div>
              <Label htmlFor="passkey">Passkey</Label>
              <Input
                id="passkey"
                type="password"
                autoComplete="off"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder="Enter admin passkey"
              />
            </div>
            <Button type="submit" disabled={loading || !passkey} className="w-full">
              {loading ? "Verifying…" : "Unlock"}
            </Button>
            <button
              type="button"
              onClick={sendPasskeyEmail}
              className="text-xs text-muted-foreground hover:text-primary underline w-full text-center"
            >
              Email the passkey to 4igroupss@gmail.com
            </button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <AdminAuthContext.Provider value={{ unlocked: true, blueprint, lock }}>
      {children}
    </AdminAuthContext.Provider>
  );
}
