import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Reveal — gentle scroll-in animation (respects reduced motion)       */
/* ------------------------------------------------------------------ */

const HIDDEN = {
  up: "opacity-0 translate-y-10",
  left: "opacity-0 -translate-x-10",
  right: "opacity-0 translate-x-10",
  scale: "opacity-0 scale-[0.94]",
  fade: "opacity-0",
} as const;

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
  variant = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  /** Direction the content arrives from. */
  variant?: "up" | "left" | "right" | "scale" | "fade";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-v-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] duration-[900ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
        shown ? "opacity-100 translate-x-0 translate-y-0 scale-100" : HIDDEN[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function Section({
  children,
  className,
  containerClassName,
  tone = "default",
  id,
  as: Tag = "section",
  ariaLabel,
  hero = false,
}: {
  /** Adds the slow-drifting hero atmosphere behind the content. */
  hero?: boolean;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  tone?: "default" | "muted" | "ink" | "primary";
  id?: string;
  as?: ElementType;
  ariaLabel?: string;
}) {
  const tones: Record<string, string> = {
    default: "bg-background text-foreground",
    muted: "bg-surface text-foreground",
    ink: "bg-ink text-ink-foreground",
    primary: "bg-primary/5 text-foreground",
  };
  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={cn("py-20 sm:py-28", tones[tone], hero && "relative isolate overflow-hidden", className)}
    >
      {hero && <div className="v-hero-glow" aria-hidden />}
      <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", hero && "relative z-10", containerClassName)}>
        {children}
      </div>
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Typography                                                          */
/* ------------------------------------------------------------------ */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mb-5 text-xs font-medium uppercase tracking-[0.22em] text-primary", className)}>
      {children}
    </p>
  );
}

export function StatementHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag
      className={cn(
        "font-display text-3xl leading-[1.12] tracking-tight sm:text-4xl md:text-[2.9rem]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", className)}>
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* StepRail — numbered sequence                                        */
/* ------------------------------------------------------------------ */

export type Step = { number: string; title: string; body: string };

export function StepRail({ steps, className }: { steps: Step[]; className?: string }) {
  return (
    <ol className={cn("grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-4", className)}>
      {steps.map((step, i) => (
        <li key={step.number} className="bg-background">
          <Reveal delay={i * 70} className="h-full">
            <div className="flex h-full flex-col gap-3 p-7">
              <span className="font-display text-sm text-primary">{step.number}</span>
              <h3 className="text-lg font-medium tracking-tight">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ */
/* Quiet card                                                          */
/* ------------------------------------------------------------------ */

export function QuietCard({
  children,
  className,
  interactive = false,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      className={cn(
        "v-card p-7",
        interactive && "v-card-hover group",
        className,
      )}
    >
      {children}
    </div>
  );
}
