import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal, Section, StatementHeading } from "@/components/site/primitives";

/* ------------------------------------------------------------------ */
/* PageHero — one promise, one line of context, one or two next steps  */
/* ------------------------------------------------------------------ */

export type HeroAction = { to: string; label: string; external?: boolean };

export function PageHero({
  eyebrow,
  title,
  lede,
  primary,
  secondary,
  note,
  aside,
  align = "left",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  primary?: HeroAction;
  secondary?: HeroAction;
  note?: ReactNode;
  aside?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <section className={cn("relative isolate overflow-hidden border-b border-border/60 bg-background", className)}>
      <div className="v-hero-glow" aria-hidden />
      <div
        className={cn(
          "relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20",
          aside ? "lg:grid-cols-[1.25fr_1fr] lg:items-center" : "",
        )}
      >
        <div className={cn("v-rise", centered && !aside && "mx-auto max-w-3xl text-center")}>
          {eyebrow && (
            <p className="mb-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-primary">
              <span className="v-breathe inline-block h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl leading-[1.06] tracking-tight text-foreground sm:text-5xl md:text-[3.6rem]">
            {title}
          </h1>
          {lede && (
            <p className={cn("mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", centered && !aside && "mx-auto")}>
              {lede}
            </p>
          )}
          {(primary || secondary) && (
            <div className={cn("mt-9 flex flex-col gap-3 sm:flex-row", centered && !aside && "sm:justify-center")}>
              {primary && <ActionButton action={primary} variant="primary" />}
              {secondary && <ActionButton action={secondary} variant="secondary" />}
            </div>
          )}
          {note && <p className="mt-5 text-sm text-muted-foreground">{note}</p>}
        </div>
        {aside && (
          <Reveal variant="scale" delay={200}>
            {aside}
          </Reveal>
        )}
      </div>
    </section>
  );
}

function ActionButton({ action, variant }: { action: HeroAction; variant: "primary" | "secondary" }) {
  const inner = (
    <>
      {action.label}
      <ArrowRight className="v-arrow ml-2 h-4 w-4" aria-hidden />
    </>
  );
  const cls =
    variant === "primary"
      ? "v-sheen h-12 rounded-full px-7 text-[0.95rem]"
      : "h-12 rounded-full border-foreground/15 bg-background/70 px-7 text-[0.95rem] backdrop-blur";
  return (
    <Button asChild size="lg" variant={variant === "primary" ? "default" : "outline"} className={cls}>
      {action.to.startsWith("#") ? (
        <a
          href={action.to}
          onClick={(e) => {
            const el = document.getElementById(action.to.slice(1));
            if (!el) return;
            e.preventDefault();
            const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
          }}
        >
          {inner}
        </a>
      ) : action.external ? (
        <a href={action.to} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      ) : (
        <Link to={action.to}>{inner}</Link>
      )}
    </Button>
  );
}

/* ------------------------------------------------------------------ */
/* LeaveWith — "what you leave with", so every page feels like a gain  */
/* ------------------------------------------------------------------ */

export function LeaveWith({
  items,
  title = "What you leave with",
  className,
  compact = false,
}: {
  items: string[];
  title?: string;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div className={cn("v-card relative overflow-hidden p-6 sm:p-8", className)}>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" aria-hidden />
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{title}</p>
      <ul className={cn("mt-5 grid gap-4", !compact && "sm:grid-cols-2")}>
        {items.map((item, i) => (
          <Reveal as="li" key={item} delay={i * 80} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Check className="h-3.5 w-3.5" aria-hidden />
            </span>
            <span className="text-[0.95rem] leading-relaxed text-foreground/85">{item}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* NextStep — a calm closing band with an obvious next action          */
/* ------------------------------------------------------------------ */

export function NextStep({
  title,
  body,
  primary,
  secondary,
}: {
  title: ReactNode;
  body?: ReactNode;
  primary: HeroAction;
  secondary?: HeroAction;
}) {
  return (
    <Section tone="ink" className="relative isolate overflow-hidden py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/25 blur-3xl v-float" aria-hidden />
      <Reveal className="relative mx-auto max-w-2xl text-center">
        <StatementHeading className="text-ink-foreground">{title}</StatementHeading>
        {body && <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-foreground/70">{body}</p>}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="v-sheen h-12 rounded-full px-8">
            <Link to={primary.to}>
              {primary.label}
              <ArrowRight className="v-arrow ml-2 h-4 w-4" aria-hidden />
            </Link>
          </Button>
          {secondary && (
            <Link
              to={secondary.to}
              className="v-link inline-flex h-12 items-center px-4 text-sm font-medium text-ink-foreground/85 hover:text-ink-foreground"
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* FeatureGrid — icon + title + line cards with soft hover              */
/* ------------------------------------------------------------------ */

export type Feature = { icon?: ReactNode; title: string; body: string; to?: string; cta?: string };

export function FeatureGrid({ items, cols = 3 }: { items: Feature[]; cols?: 2 | 3 | 4 }) {
  const grid = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <div className={cn("grid gap-5", grid)}>
      {items.map((f, i) => {
        const body = (
          <>
            {f.icon && <span className="v-chip mb-5">{f.icon}</span>}
            <h3 className="text-lg font-medium tracking-tight text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            {f.to && (
              <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                {f.cta ?? "Open"}
                <ArrowRight className="v-arrow ml-1.5 h-4 w-4" aria-hidden />
              </span>
            )}
          </>
        );
        return (
          <Reveal key={f.title} delay={(i % 3) * 80} className="h-full">
            {f.to ? (
              <Link to={f.to} className="v-card v-card-hover group flex h-full flex-col p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {body}
              </Link>
            ) : (
              <div className="v-card v-card-hover group flex h-full flex-col p-7">{body}</div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
