import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, RotateCcw, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export type AskOption = {
  label: string;
  /** A short, reflective reply. Never a verdict, score or diagnosis. */
  reply: string;
  next: { to: string; label: string };
};

/**
 * Two-way, on-page learning moment: ask one question, reflect the visitor's
 * answer back, offer one next step. Answers live only in this tab's memory.
 */
export function AskReflect({
  eyebrow = "Your turn",
  question,
  options,
  className,
  allowOwnWords = true,
  tone = "default",
}: {
  eyebrow?: string;
  question: string;
  options: AskOption[];
  className?: string;
  allowOwnWords?: boolean;
  tone?: "default" | "soft";
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const [own, setOwn] = useState("");
  const [ownSaid, setOwnSaid] = useState(false);
  const replyRef = useRef<HTMLDivElement>(null);
  const qid = useId();

  useEffect(() => {
    if (picked !== null) replyRef.current?.focus({ preventScroll: true });
  }, [picked]);

  const choice = picked !== null ? options[picked] : null;

  return (
    <section
      aria-labelledby={qid}
      className={cn(
        "v-card v-ask relative overflow-hidden p-6 sm:p-8",
        tone === "soft" && "bg-surface",
        className,
      )}
      data-v-reveal
    >
      <div className="v-ask-glow" aria-hidden />
      <p className="relative text-xs font-medium uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
      <h2 id={qid} className="relative mt-3 font-display text-2xl leading-snug tracking-tight text-foreground sm:text-[1.7rem]">
        {question}
      </h2>

      <div className="relative mt-6 flex flex-wrap gap-2.5" role="group" aria-label="Choose the answer closest to you">
        {options.map((o, i) => (
          <button
            key={o.label}
            type="button"
            aria-pressed={picked === i}
            onClick={() => setPicked(i)}
            style={{ animationDelay: `${120 + i * 70}ms` }}
            className={cn(
              "v-pop min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,color,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring motion-reduce:hover:translate-y-0",
              picked === i
                ? "border-primary bg-primary text-primary-foreground shadow-[0_8px_20px_-10px_hsl(var(--primary)/0.7)]"
                : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-[hsl(var(--apricot-soft))]",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="relative">
        {choice && (
          <div
            key={picked}
            ref={replyRef}
            tabIndex={-1}
            className="v-reply mt-6 rounded-2xl border border-primary/20 bg-[hsl(var(--apricot-soft)/0.55)] p-5 focus:outline-none sm:p-6"
          >
            <p className="text-[0.95rem] leading-relaxed text-foreground/90">{choice.reply}</p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                to={choice.next.to}
                onClick={(e) => {
                  if (choice.next.to.startsWith("#")) {
                    e.preventDefault();
                    document.querySelector(choice.next.to)?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className="v-sheen inline-flex h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                {choice.next.label}
                <ArrowRight className="v-arrow ml-2 h-4 w-4" aria-hidden />
              </Link>
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("voyce:open-guide"))}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium text-primary hover:bg-primary/5"
              >
                <MessageCircle className="h-4 w-4" aria-hidden /> Talk it through with the VOYCE AI guide
              </button>
              <button
                type="button"
                onClick={() => setPicked(null)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-4 text-sm text-muted-foreground hover:text-foreground"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Pick another
              </button>
            </div>
          </div>
        )}
      </div>

      {allowOwnWords && (
        <div className="relative mt-6 border-t border-border/70 pt-5">
          <label htmlFor={`${qid}-own`} className="text-sm font-medium text-foreground">
            Or say it in your own words
          </label>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row">
            <input
              id={`${qid}-own`}
              value={own}
              onChange={(e) => {
                setOwn(e.target.value);
                setOwnSaid(false);
              }}
              maxLength={200}
              placeholder="One line is enough…"
              className="h-11 flex-1 rounded-full border border-input bg-background px-4 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
            <button
              type="button"
              disabled={!own.trim()}
              onClick={() => setOwnSaid(true)}
              className="h-11 rounded-full border border-primary/40 px-5 text-sm font-medium text-primary transition-colors hover:bg-primary/5 disabled:opacity-40"
            >
              Reflect it back
            </button>
          </div>
          {ownSaid && own.trim() && (
            <p className="v-reply mt-4 text-sm leading-relaxed text-foreground/85" aria-live="polite">
              You wrote: <span className="font-medium text-foreground">&ldquo;{own.trim()}&rdquo;</span>. Naming it is
              already a step — many people never get this far. If you want, carry this line into{" "}
              <Link to="/start-here" className="v-link font-medium text-primary">a private check-in</Link>, or read it
              again tomorrow and notice whether it has shifted.
            </p>
          )}
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" aria-hidden /> Stays on this device. Nothing is sent or saved.
          </p>
        </div>
      )}
    </section>
  );
}
