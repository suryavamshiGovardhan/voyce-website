import { useEffect, useMemo, useRef, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Timer } from "lucide-react";
import { immersionToolsData } from "@/data/immersionToolsData";

interface PracticeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  toolTitle: string;
}

// Fallback minimal steps if a tool isn't in the data file
const fallbackSteps = [
  { step: 1, title: "Arrive", description: "Sit comfortably. Close your eyes if that feels right. Take three slow breaths to arrive in this moment." },
  { step: 2, title: "Ground", description: "Feel your body in contact with the seat or floor. Notice five points of contact between your body and your surroundings." },
  { step: 3, title: "Breathe", description: "Breathe naturally. Follow the breath in and out without trying to change it. When the mind wanders, gently return to the breath." },
  { step: 4, title: "Notice", description: "Observe whatever arises — thoughts, sensations, feelings — with kind attention. Nothing needs to be fixed." },
  { step: 5, title: "Close", description: "Take a final deep breath. Open your eyes slowly. Carry this quality of attention into your next activity." },
];

const DEFAULT_STEP_SECONDS = 90;

export function PracticeModal({ open, onOpenChange, toolTitle }: PracticeModalProps) {
  const tool = useMemo(
    () => immersionToolsData.find((t) => t.title === toolTitle),
    [toolTitle]
  );
  const steps = tool?.content.instructions?.length ? tool.content.instructions : fallbackSteps;

  const [stepIndex, setStepIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(DEFAULT_STEP_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Reset when opening / tool changes
  useEffect(() => {
    if (open) {
      setStepIndex(0);
      setSecondsLeft(DEFAULT_STEP_SECONDS);
      setIsRunning(false);
    }
  }, [open, toolTitle]);

  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          // advance step or stop
          setStepIndex((idx) => {
            if (idx + 1 < steps.length) return idx + 1;
            setIsRunning(false);
            return idx;
          });
          return DEFAULT_STEP_SECONDS;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isRunning, steps.length]);

  const current = steps[stepIndex];
  const totalProgress = ((stepIndex + (1 - secondsLeft / DEFAULT_STEP_SECONDS)) / steps.length) * 100;
  const mm = String(Math.floor(secondsLeft / 60)).padStart(1, "0");
  const ss = String(secondsLeft % 60).padStart(2, "0");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-muted border-border text-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl font-light text-foreground">{toolTitle}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            A guided practice. Move at your own pace — the timer is a suggestion, not a rule.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-2">
          <div>
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span>Step {stepIndex + 1} of {steps.length}</span>
              <span className="flex items-center gap-1"><Timer className="h-3 w-3" /> {mm}:{ss}</span>
            </div>
            <Progress value={totalProgress} className="h-2 bg-muted" />
          </div>

          <div className="rounded-lg border border-border bg-muted p-6 min-h-[180px]">
            <h3 className="text-lg font-medium text-foreground mb-2">{current.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{current.description}</p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent border-border text-foreground hover:bg-muted"
              onClick={() => {
                setStepIndex((i) => Math.max(0, i - 1));
                setSecondsLeft(DEFAULT_STEP_SECONDS);
              }}
              disabled={stepIndex === 0}
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>

            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() => setIsRunning((r) => !r)}
                className="bg-primary hover:bg-primary text-foreground"
              >
                {isRunning ? <><Pause className="h-4 w-4 mr-1" /> Pause</> : <><Play className="h-4 w-4 mr-1" /> Start</>}
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-transparent border-border text-foreground hover:bg-muted"
                onClick={() => {
                  setSecondsLeft(DEFAULT_STEP_SECONDS);
                  setIsRunning(false);
                }}
                aria-label="Reset timer"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            <Button
              size="sm"
              className="bg-primary hover:bg-primary text-primary-foreground"
              onClick={() => {
                if (stepIndex + 1 < steps.length) {
                  setStepIndex((i) => i + 1);
                  setSecondsLeft(DEFAULT_STEP_SECONDS);
                } else {
                  onOpenChange(false);
                }
              }}
            >
              {stepIndex + 1 < steps.length ? (<>Next <ChevronRight className="h-4 w-4 ml-1" /></>) : "Finish"}
            </Button>
          </div>

          {tool?.content.safetyGuidelines?.length ? (
            <details className="text-xs text-muted-foreground">
              <summary className="cursor-pointer hover:text-foreground">Safety notes</summary>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {tool.content.safetyGuidelines.slice(0, 5).map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </details>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
