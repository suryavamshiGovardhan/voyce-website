import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
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
          "relative z-10 mx-auto grid w-full max-w-6xl gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-28",
          aside ? "lg:grid-cols-[1.25fr_1fr] lg:items-center" : "",
        )}
      >
        <div className={cn("v-rise", centered && !aside && "mx-auto max-w-3xl text-center")}>
          {eyebrow && (
            <p className="mb-4 text-base font-semibold tracking-tight text-primary sm:text-lg">
              {eyebrow}
            </p>
          )}
          <h1 className="a-headline text-balance text-[2.5rem] leading-[1.05] text-foreground sm:text-6xl md:text-[4.1rem]">
            {title}
          </h1>
          {lede && (
            <p className={cn("mt-6 max-w-2xl text-lg font-medium leading-[1.5] text-muted-foreground sm:text-[1.3rem]", centered && !aside && "mx-auto")}>
              {lede}
            </p>
          )}
          {(primary || secondary) && (
            <div className={cn("mt-9 flex flex-wrap items-center gap-x-7 gap-y-4", centered && !aside && "justify-center")}>
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
  const primary = variant === "primary";
  const inner = primary ? (
    <>{action.label}</>
  ) : (
    <>
      {action.label}
      <ChevronRight className="h-[1.05em] w-[1.05em] translate-y-px transition-transform group-hover:translate-x-0.5" aria-hidden />
    </>
  );
  const cls = primary
    ? "inline-flex h-12 items-center justify-center rounded-full bg-primary px-7 text-[1.0625rem] font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    : "group inline-flex items-center gap-0.5 text-[1.0625rem] font-medium text-primary underline-offset-4 hover:underline";
  if (action.to.startsWith("#")) {
    return (
      <a
        href={action.to}
        className={cls}
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
    );
  }
  if (action.external) {
    return (
      <a href={action.to} className={cls} target={action.to.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link to={action.to} className={cls}>
      {inner}
    </Link>
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
    <Section tone="ink" className="a-ink-plain relative isolate overflow-hidden py-28 sm:py-40">
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <StatementHeading className="text-ink-foreground sm:text-6xl md:text-[4rem]">{title}</StatementHeading>
        {body && <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink-foreground/65 sm:text-xl">{body}</p>}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <Button asChild size="lg" className="h-12 rounded-full px-7 text-[1.0625rem]">
            <Link to={primary.to}>{primary.label}</Link>
          </Button>
          {secondary && (
            <Link
              to={secondary.to}
              className="group inline-flex items-center gap-0.5 text-[1.0625rem] font-medium text-lilac underline-offset-4 hover:underline"
            >
              {secondary.label}
              <ChevronRight className="h-[1.05em] w-[1.05em] translate-y-px transition-transform group-hover:translate-x-0.5" aria-hidden />
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
    <div className={cn("grid gap-4", grid)}>
      {items.map((f, i) => {
        const body = (
          <>
            {f.icon && <span className="v-chip mb-5">{f.icon}</span>}
            <h3 className="a-headline text-[1.4rem] leading-tight text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            {f.to && (
              <span className="mt-6 inline-flex items-center gap-0.5 text-[1.0625rem] font-medium text-primary group-hover:underline underline-offset-4">
                {f.cta ?? "Open"}
                <ChevronRight className="h-[1.05em] w-[1.05em] translate-y-px" aria-hidden />
              </span>
            )}
          </>
        );
        return (
          <Reveal key={f.title} delay={(i % 3) * 80} className="h-full">
            {f.to ? (
              <Link to={f.to} className="v-card v-card-hover group flex h-full flex-col p-8 sm:p-9 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {body}
              </Link>
            ) : (
              <div className="v-card v-card-hover group flex h-full flex-col p-8 sm:p-9">{body}</div>
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
