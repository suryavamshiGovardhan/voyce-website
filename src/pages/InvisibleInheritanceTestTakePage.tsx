import { useEffect, useMemo, useState } from "react";
import { appUrl } from "@/lib/site";
import { useNavigate, useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { SEOHead } from "@/components/SEOHead";
import QuestionStage from "@/components/iit/QuestionStage";
import DimensionIntro from "@/components/iit/DimensionIntro";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AuroraBackground from "@/components/iit/AuroraBackground";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import {
  IIT_DIMENSIONS,
  IIT_QUESTIONS,
  TOTAL_QUESTIONS,
} from "@/data/invisibleInheritanceQuestions";

const introSchema = z.object({
  name: z.string().trim().max(50, "Keep it under 50 characters").optional().or(z.literal("")),
  email: z.string().trim().email("That doesn't look like a valid email").max(255).optional().or(z.literal("")),
});

type Step = { kind: "intro"; dimensionIndex: number } | { kind: "question"; questionIndex: number };

function buildSteps(): Step[] {
  const steps: Step[] = [];
  let lastDim = "";
  IIT_QUESTIONS.forEach((qq, i) => {
    if (qq.dimension !== lastDim) {
      const dimIndex = IIT_DIMENSIONS.findIndex((d) => d.id === qq.dimension);
      steps.push({ kind: "intro", dimensionIndex: dimIndex });
      lastDim = qq.dimension;
    }
    steps.push({ kind: "question", questionIndex: i });
  });
  return steps;
}

export default function InvisibleInheritanceTestTakePage() {
  const { sessionCode = "", partner = "a" } = useParams();
  const navigate = useNavigate();
  const partnerKey = partner === "b" ? "b" : "a";

  const [sessionId, setSessionId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [introName, setIntroName] = useState("");
  const [introEmail, setIntroEmail] = useState("");
  const [introError, setIntroError] = useState<string | null>(null);
  const [savingIntro, setSavingIntro] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [saving, setSaving] = useState(false);

  const steps = useMemo(buildSteps, []);
  const current = steps[stepIdx];
  const questionStepsTotal = TOTAL_QUESTIONS;
  const questionNumber = steps.slice(0, stepIdx + 1).filter((s) => s.kind === "question").length;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data, error } = await supabase.rpc("iit_session_status", {
        p_code: sessionCode.toUpperCase(),
      });
      if (cancelled) return;
      const row = Array.isArray(data) ? data[0] : null;
      if (error || !row) {
        toast.error("Session not found.");
        navigate("/invisible-inheritance/test");
        return;
      }
      setSessionId(row.id);
      const done = partnerKey === "a" ? !!row.partner_a_completed_at : !!row.partner_b_completed_at;
      setAlreadyDone(done);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [sessionCode, partnerKey, navigate]);

  const handleAnswer = async (value: number) => {
    if (!sessionId || current.kind !== "question") return;
    const q = IIT_QUESTIONS[current.questionIndex];
    setSaving(true);
    try {
      const { error } = await supabase.rpc("iit_upsert_response", {
        p_code: sessionCode.toUpperCase(),
        p_partner: partnerKey,
        p_dimension: q.dimension,
        p_question_id: q.id,
        p_value: value,
      });
      if (error) throw error;

      const isLast = stepIdx === steps.length - 1;
      if (isLast) {
        await supabase.rpc("iit_mark_complete", {
          p_code: sessionCode.toUpperCase(),
          p_partner: partnerKey,
        });
        supabase.functions.invoke("notify-test-event", {
          body: {
            event: "Partner completed test",
            sessionCode: sessionCode.toUpperCase(),
            partner: partnerKey,
            reportUrl: appUrl(`/invisible-inheritance/test/${sessionCode.toUpperCase()}/report`),
            answersCount: TOTAL_QUESTIONS,
          },
        }).catch((e) => console.error("notify failed", e));
        navigate(`/invisible-inheritance/test/${sessionCode.toUpperCase()}/report`);
      } else {
        setStepIdx((i) => i + 1);
      }
    } catch (err) {
      console.error(err);
      toast.error("Couldn't save that answer. Try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AuroraBackground>
        <div className="min-h-screen flex items-center justify-center text-sm text-muted-foreground ii-serif italic">
          Opening your session…
        </div>
      </AuroraBackground>
    );
  }

  if (alreadyDone) {
    return (
      <AuroraBackground>
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          <SEOHead title="Already Completed — The Invisible Inheritance Test" description="You've already completed this test." canonicalUrl={`https://suryavamshigovardhan.github.io/voyce-website/invisible-inheritance/test/${sessionCode}`} />
          <p className="ii-eyebrow mb-6">ALREADY COMPLETED</p>
          <h1 className="ii-display text-4xl sm:text-5xl mb-5">
            <span className="ii-text-gradient">You've finished your half.</span>
          </h1>
          <p className="ii-serif text-muted-foreground italic max-w-md mb-10 text-lg">
            When your partner finishes theirs, the shared reflection opens.
          </p>
          <Link to={`/invisible-inheritance/test/${sessionCode.toUpperCase()}/report`}>
            <Button size="lg" className="ii-cta ii-pill">Open the report</Button>
          </Link>
        </div>
      </AuroraBackground>
    );
  }

  const handleIntroSubmit = async (skip: boolean) => {
    setIntroError(null);
    const name = skip ? "" : introName;
    const email = skip ? "" : introEmail;
    const parsed = introSchema.safeParse({ name, email });
    if (!parsed.success) {
      setIntroError(parsed.error.issues[0]?.message ?? "Please check your details");
      return;
    }
    setSavingIntro(true);
    try {
      if (sessionId && !skip && (name || email)) {
        const { error } = await supabase.rpc("iit_save_partner_info", {
          p_code: sessionCode.toUpperCase(),
          p_partner: partnerKey,
          p_name: name || null,
          p_email: email || null,
        });
        if (error) throw error;
      }
      supabase.functions.invoke("notify-test-event", {
        body: {
          event: skip ? "Partner started test (anonymous)" : "Partner started test",
          sessionCode: sessionCode.toUpperCase(),
          partner: partnerKey,
          name,
          email,
          reportUrl: appUrl(`/invisible-inheritance/test/${sessionCode.toUpperCase()}/report`),
        },
      }).catch((e) => console.error("notify failed", e));
      setShowIntro(false);
    } catch (err) {
      console.error(err);
      toast.error("Couldn't save that. You can still continue.");
      setShowIntro(false);
    } finally {
      setSavingIntro(false);
    }
  };

  if (showIntro) {
    return (
      <AuroraBackground>
        <SEOHead
          title={`Partner ${partnerKey.toUpperCase()} — The Invisible Inheritance Test`}
          description="Optional: leave your name and email before you begin."
          canonicalUrl={`https://suryavamshigovardhan.github.io/voyce-website/invisible-inheritance/test/${sessionCode}/${partnerKey}`}
        />
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
          <div className="ii-glass max-w-lg w-full p-8 sm:p-10 rounded-2xl">
            <p className="ii-eyebrow mb-4">BEFORE WE BEGIN — OPTIONAL</p>
            <h1 className="ii-display text-3xl sm:text-4xl mb-4">
              <span className="ii-text-gradient">A name to hold the silence.</span>
            </h1>
            <p className="ii-serif text-muted-foreground italic mb-8 text-base leading-relaxed">
              Leave a first name and email — only if you want us to be able to send you your reflection later, or help you find your code if you lose it. Skip to stay completely anonymous. We never share this.
            </p>

            <div className="space-y-5">
              <div>
                <Label htmlFor="ii-name" className="ii-marginalia">FIRST NAME</Label>
                <Input
                  id="ii-name"
                  value={introName}
                  onChange={(e) => setIntroName(e.target.value)}
                  maxLength={50}
                  placeholder="Riya"
                  className="mt-2 bg-white/5 border-white/10"
                />
              </div>
              <div>
                <Label htmlFor="ii-email" className="ii-marginalia">EMAIL</Label>
                <Input
                  id="ii-email"
                  type="email"
                  value={introEmail}
                  onChange={(e) => setIntroEmail(e.target.value)}
                  maxLength={255}
                  placeholder="you@example.com"
                  className="mt-2 bg-white/5 border-white/10"
                />
              </div>
              {introError && (
                <p className="text-sm text-rose-300 ii-serif italic">{introError}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button
                onClick={() => handleIntroSubmit(false)}
                disabled={savingIntro}
                size="lg"
                className="ii-cta ii-pill flex-1"
              >
                {savingIntro ? "Saving…" : "Continue"}
              </Button>
              <Button
                onClick={() => handleIntroSubmit(true)}
                disabled={savingIntro}
                size="lg"
                variant="ghost"
                className="ii-pill flex-1 text-muted-foreground hover:text-foreground"
              >
                Skip — stay anonymous
              </Button>
            </div>
          </div>
        </div>
      </AuroraBackground>
    );
  }

  const progressPct = (questionNumber / questionStepsTotal) * 100;

  return (
    <AuroraBackground>
      <SEOHead
        title={`Partner ${partnerKey.toUpperCase()} — The Invisible Inheritance Test`}
        description="Sixty quiet questions. Ten dimensions. Take your half privately."
        canonicalUrl={`https://suryavamshigovardhan.github.io/voyce-website/invisible-inheritance/test/${sessionCode}/${partnerKey}`}
      />

      {/* progress */}
      <div className="h-[3px] w-full bg-white/5">
        <div
          className="h-[3px] transition-all"
          style={{
            width: `${progressPct}%`,
            background: "linear-gradient(90deg, hsl(var(--ii-aurora-1)), hsl(var(--ii-aurora-2)), hsl(var(--ii-aurora-3)))",
            boxShadow: "0 0 14px hsl(var(--ii-glow) / 0.6)",
          }}
        />
      </div>

      <div className="px-4 py-5 flex items-center justify-between max-w-2xl mx-auto">
        <span className="ii-marginalia font-mono">{sessionCode.toUpperCase()} · PARTNER {partnerKey.toUpperCase()}</span>
        <span className="ii-marginalia">{String(questionNumber).padStart(2, "0")} / {String(questionStepsTotal).padStart(2, "0")}</span>
      </div>

      {current.kind === "intro" ? (
        <DimensionIntro
          dimension={IIT_DIMENSIONS[current.dimensionIndex]}
          number={current.dimensionIndex + 1}
          total={IIT_DIMENSIONS.length}
          onContinue={() => setStepIdx((i) => i + 1)}
        />
      ) : (
        <QuestionStage
          key={IIT_QUESTIONS[current.questionIndex].id}
          question={IIT_QUESTIONS[current.questionIndex]}
          index={questionNumber - 1}
          total={questionStepsTotal}
          onAnswer={handleAnswer}
        />
      )}

      {saving && (
        <p className="text-center text-xs text-muted-foreground py-4 italic ii-serif">saving…</p>
      )}
    </AuroraBackground>
  );
}
