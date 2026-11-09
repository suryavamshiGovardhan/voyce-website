import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

export interface Stage {
  level: string;
  name: string;
  description: string;
  deepContent: string;
  tools: string[];
  duration: string;
}

interface StageDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  stage: Stage | null;
  isCompleted: boolean;
  onCompleted: () => void;
}

export function StageDetailModal({ open, onOpenChange, stage, isCompleted, onCompleted }: StageDetailModalProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [saving, setSaving] = useState(false);
  const [startedAt, setStartedAt] = useState<string | null>(null);

  useEffect(() => {
    if (!open || !stage || !user) return;
    // Record started_at if this is the first time opening the stage
    (async () => {
      const { data } = await supabase
        .from("user_stage_progress")
        .select("started_at, completed_at")
        .eq("user_id", user.id)
        .eq("stage_level", stage.level)
        .maybeSingle();
      if (data) {
        setStartedAt(data.started_at);
      } else {
        const { data: inserted } = await supabase
          .from("user_stage_progress")
          .insert({ user_id: user.id, stage_level: stage.level })
          .select("started_at")
          .maybeSingle();
        setStartedAt(inserted?.started_at ?? null);
      }
    })();
  }, [open, stage, user]);

  const handleComplete = async () => {
    if (!user || !stage) return;
    setSaving(true);
    const { error } = await supabase
      .from("user_stage_progress")
      .upsert(
        { user_id: user.id, stage_level: stage.level, completed_at: new Date().toISOString() },
        { onConflict: "user_id,stage_level" }
      );
    setSaving(false);
    if (error) {
      toast({ title: "Could not save", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Stage complete", description: `${stage.level} — ${stage.name}` });
    onCompleted();
    onOpenChange(false);
  };

  if (!stage) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-muted border-border text-foreground max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <span className="text-primary font-mono text-sm">{stage.level}</span>
            <span className="text-xs text-muted-foreground">· {stage.duration}</span>
          </div>
          <DialogTitle className="text-2xl font-light text-foreground">{stage.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground italic">"{stage.description}"</DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-2">
          <p className="text-muted-foreground text-sm leading-relaxed">{stage.deepContent}</p>

          <div>
            <p className="text-primary text-xs font-medium mb-2">Core tools for this stage</p>
            <div className="flex flex-wrap gap-2">
              {stage.tools.map((t) => (
                <span key={t} className="bg-muted border border-border text-muted-foreground text-xs px-3 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {!user ? (
            <div className="text-sm text-muted-foreground border border-border rounded p-4">
              Sign in to track your progress and mark this stage complete.
            </div>
          ) : (
            <div className="flex items-center justify-between border-t border-border pt-4">
              <div className="text-xs text-muted-foreground">
                {startedAt ? `Started ${new Date(startedAt).toLocaleDateString()}` : "Just started"}
              </div>
              <Button
                onClick={handleComplete}
                disabled={saving || isCompleted}
                className={isCompleted ? "bg-primary hover:bg-primary" : "bg-primary hover:bg-primary"}
              >
                {isCompleted ? (
                  <><CheckCircle2 className="h-4 w-4 mr-2" /> Completed</>
                ) : (
                  <><Circle className="h-4 w-4 mr-2" /> Mark stage complete</>
                )}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
