import { useState } from "react";
import { appUrl } from "@/lib/site";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import PageShell from "@/components/site/PageShell";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordPage() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSending(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: appUrl("/reset-password"),
    });
    setSending(false);
    if (error) {
      toast({
        title: "Could not send the link",
        description: error.message,
        variant: "destructive",
      });
      return;
    }
    setSent(true);
  };

  return (
    <PageShell
      title="Reset your password | VOYCE"
      description="Ask VOYCE to email you a secure link so you can set a new password."
      canonical="/forgot-password"
      noindex
    >
      <div className="mx-auto w-full max-w-md px-6 py-20">
        <Link
          to="/login"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to sign in
        </Link>

        <h1 className="font-display text-3xl font-normal tracking-tight text-foreground">
          Reset your password
        </h1>
        <p className="mt-3 text-muted-foreground">
          Enter the email you signed up with. If an account exists, we'll send a link to set a new password.
        </p>

        {sent ? (
          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <CheckCircle2 className="h-6 w-6 text-primary" aria-hidden="true" />
            <p className="mt-3 text-foreground">
              If an account exists for <span className="font-medium">{email}</span>, a reset link is on its way.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              The link works once and expires after a short while. Check your spam folder if you don't see it.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reset-email">Email</Label>
              <Input
                id="reset-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </div>
            <Button type="submit" className="w-full gap-2" disabled={sending}>
              <Mail className="h-4 w-4" />
              {sending ? "Sending link..." : "Send reset link"}
            </Button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
