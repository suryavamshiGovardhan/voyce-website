import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Apple-style building blocks for VOYCE (Dusk palette).               */
/* Every scroll-linked effect settles to its final state when the      */
/* visitor prefers reduced motion.                                     */
/* ------------------------------------------------------------------ */

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Scroll progress for an element.
 * mode "through": 0 when the element's top reaches the viewport top, 1 when its bottom reaches the viewport bottom
 * (what a pinned / sticky story needs).
 * mode "enter": 0 when the element's top touches the viewport bottom, 1 when its top is at `end` of the viewport.
 */
export function useScrollProgress<T extends HTMLElement>(mode: "through" | "enter" = "through", end = 0.35) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(prefersReducedMotion() ? 1 : 0);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const measure = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      let p: number;
      if (mode === "through") {
        const span = Math.max(1, r.height - vh);
        p = -r.top / span;
      } else {
        p = (vh - r.top) / (vh * (1 - end));
      }
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [mode, end]);

  return [ref, progress] as const;
}

/* ------------------------------------------------------------------ */
/* MoreLink — "Learn more >" text link                                 */
/* ------------------------------------------------------------------ */

export function MoreLink({
  to,
  children,
  className,
  external,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const cls = cn(
    "a-more group inline-flex items-center gap-0.5 text-[1.0625rem] font-medium text-primary hover:underline underline-offset-4",
    className,
  );
  const inner = (
    <>
      {children}
      <ChevronRight className="h-[1.05em] w-[1.05em] translate-y-px transition-transform group-hover:translate-x-0.5" aria-hidden />
    </>
  );
  if (external || /^(https?:|mailto:)/.test(to)) {
    return (
      <a href={to} className={cls} target={to.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {inner}
    </Link>
  );
}

/** Solid pill call-to-action. */
export function PillLink({ to, children, className, tone = "primary" }: { to: string; children: ReactNode; className?: string; tone?: "primary" | "light" }) {
  const cls = cn(
    "inline-flex h-11 items-center justify-center rounded-full px-6 text-[1.0625rem] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    tone === "primary" ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-ink-foreground text-ink hover:bg-ink-foreground/90",
    className,
  );
  if (/^(https?:|mailto:)/.test(to)) {
    return (
      <a href={to} className={cls} target={to.startsWith("mailto:") ? undefined : "_blank"} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Headline — huge, tight, confident                                   */
/* ------------------------------------------------------------------ */

export function Headline({
  children,
  className,
  as: Tag = "h2",
  size = "xl",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  size?: "hero" | "xl" | "lg";
}) {
  const sizes = {
    hero: "text-[2.75rem] leading-[1.04] sm:text-7xl md:text-[5rem]",
    xl: "text-[2.4rem] leading-[1.06] sm:text-6xl md:text-[4.25rem]",
    lg: "text-3xl leading-[1.1] sm:text-[2.6rem]",
  } as const;
  return <Tag className={cn("a-headline text-balance", sizes[size], className)}>{children}</Tag>;
}

/* ------------------------------------------------------------------ */
/* ScaleIn — visual grows into place as it scrolls into view           */
/* ------------------------------------------------------------------ */

export function ScaleIn({
  children,
  className,
  from = 0.86,
  minOpacity = 0.35,
}: {
  children: ReactNode;
  className?: string;
  from?: number;
  minOpacity?: number;
}) {
  const [ref, p] = useScrollProgress<HTMLDivElement>("enter", 0.4);
  const scale = from + (1 - from) * p;
  return (
    <div ref={ref} data-v-reveal className={className}>
      <div
        style={{ transform: `scale(${scale.toFixed(4)})`, opacity: minOpacity + (1 - minOpacity) * p }}
        className="origin-top will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollWords — words light up one after another as you scroll        */
/* ------------------------------------------------------------------ */

export function ScrollWords({ text, className, dimClass = "opacity-20" }: { text: string; className?: string; dimClass?: string }) {
  const [ref, p] = useScrollProgress<HTMLParagraphElement>("enter", 0.25);
  const words = text.split(" ");
  const lit = Math.round(p * words.length);
  return (
    <p ref={ref} data-v-reveal className={cn("a-headline text-balance", className)}>
      {words.map((w, i) => (
        <span key={i} className={cn("transition-opacity duration-300", i < lit ? "opacity-100" : dimClass)}>
          {w}{i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* StickyStory — pinned visual that changes as the steps scroll by     */
/* ------------------------------------------------------------------ */

export type StoryStep = { kicker?: string; title: string; body: string; visual: ReactNode };

export function StickyStory({
  steps,
  intro,
  tone = "light",
  className,
}: {
  steps: StoryStep[];
  intro?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const [ref, p] = useScrollProgress<HTMLDivElement>("through");
  // Reduced motion: no pinning, every step shown in a calm stacked list at all widths.
  const [still] = useState(prefersReducedMotion);
  const active = Math.min(steps.length - 1, Math.floor(p * steps.length));
  const dark = tone === "dark";

  return (
    <section
      data-v-reveal
      className={cn(dark ? "bg-ink text-ink-foreground a-ink-plain" : "bg-surface text-foreground", className)}
    >
      {intro && <div className="mx-auto w-full max-w-5xl px-6 pt-28 sm:px-8 sm:pt-36">{intro}</div>}

      {/* Desktop: pinned */}
      <div ref={ref} className={cn("relative hidden", !still && "lg:block")} style={{ height: `${steps.length * 80 + 20}vh` }}>
        <div className="sticky top-12 flex h-[calc(100vh-3rem)] items-center">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-[1fr_auto] items-center gap-16 px-8">
            <ol className="space-y-7">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className={cn(
                    "transition-[opacity,transform] duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
                    i === active ? "opacity-100" : "opacity-25",
                  )}
                  aria-current={i === active ? "step" : undefined}
                >
                  {s.kicker && (
                    <p className={cn("mb-1 text-sm font-semibold", dark ? "text-apricot" : "text-primary")}>{s.kicker}</p>
                  )}
                  <h3 className="a-headline text-[2rem] leading-tight">{s.title}</h3>
                  <p
                    className={cn(
                      "max-w-md overflow-hidden text-lg leading-relaxed transition-[max-height,opacity,margin] duration-500",
                      dark ? "text-ink-foreground/70" : "text-muted-foreground",
                      i === active ? "mt-2 max-h-40 opacity-100" : "mt-0 max-h-0 opacity-0",
                    )}
                  >
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
            <div className="relative h-[520px] w-[300px]" aria-hidden>
              <div className="a-glow absolute -inset-16 rounded-full" />
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
                    i === active ? "scale-100 opacity-100" : i < active ? "-translate-y-6 scale-95 opacity-0" : "translate-y-6 scale-95 opacity-0",
                  )}
                >
                  {s.visual}
                </div>
              ))}
            </div>
          </div>
          {/* progress dots */}
          <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 gap-2" aria-hidden>
            {steps.map((s, i) => (
              <span
                key={s.title}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === active ? "w-6 bg-primary" : cn("w-1.5", dark ? "bg-ink-foreground/30" : "bg-foreground/20"),
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile / tablet: stacked */}
      <ol className={cn("mx-auto max-w-xl space-y-20 px-6 pb-24 pt-14 sm:px-8", !still && "lg:hidden")}>
        {steps.map((s) => (
          <li key={s.title} className="text-center">
            <div className="flex justify-center" aria-hidden>{s.visual}</div>
            {s.kicker && <p className={cn("mt-8 text-sm font-semibold", dark ? "text-apricot" : "text-primary")}>{s.kicker}</p>}
            <h3 className="a-headline mt-1 text-3xl leading-tight">{s.title}</h3>
            <p className={cn("mx-auto mt-3 max-w-sm text-base leading-relaxed", dark ? "text-ink-foreground/70" : "text-muted-foreground")}>
              {s.body}
            </p>
          </li>
        ))}
      </ol>
      <div className={cn("hidden pb-16", !still && "lg:block")} />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Bento tiles                                                         */
/* ------------------------------------------------------------------ */

const TILE_TONES = {
  white: "bg-card text-foreground",
  surface: "bg-surface text-foreground",
  ink: "bg-ink text-ink-foreground a-ink-plain",
  plum: "bg-primary text-primary-foreground",
  apricot: "bg-apricot-soft text-foreground",
  sage: "bg-sage-soft text-foreground",
} as const;

export type TileTone = keyof typeof TILE_TONES;

export function Tile({
  children,
  tone = "white",
  className,
}: {
  children: ReactNode;
  tone?: TileTone;
  className?: string;
}) {
  return (
    <div className={cn("a-tile relative flex flex-col overflow-hidden rounded-[1.75rem] p-8 sm:p-10", TILE_TONES[tone], className)}>
      {children}
    </div>
  );
}
