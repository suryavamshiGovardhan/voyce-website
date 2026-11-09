import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Frames                                                              */
/* ------------------------------------------------------------------ */

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative w-[272px] shrink-0 rounded-[2.2rem] border border-border bg-card p-2 shadow-[0_40px_80px_-40px_hsl(var(--foreground)/0.4)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-[1.7rem] bg-background">
        <div className="flex items-center justify-between px-4 pt-3 text-[10px] text-muted-foreground">
          <span>9:41</span>
          <span className="h-1.5 w-16 rounded-full bg-border" />
          <span>VOYCE</span>
        </div>
        <div className="px-4 pb-5 pt-4">{children}</div>
      </div>
    </div>
  );
}

export function BrowserFrame({
  children,
  label = "VOYCE",
  className,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-[0_40px_90px_-50px_hsl(var(--foreground)/0.45)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="ml-3 truncate rounded-full bg-background px-3 py-1 text-[10px] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="bg-background p-5">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Screens — each mirrors a real VOYCE feature                         */
/* ------------------------------------------------------------------ */

const MOODS = ["Low", "Heavy", "Okay", "Steady", "Light"];

export function CheckInScreen() {
  return (
    <div className="space-y-4">
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Today</p>
      <p className="font-display text-lg leading-snug">How are you, honestly?</p>
      <div className="flex justify-between gap-1.5">
        {MOODS.map((m, i) => (
          <div
            key={m}
            className={cn(
              "flex-1 rounded-xl border px-1 py-2.5 text-center text-[9px]",
              i === 3 ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground",
            )}
          >
            <span className="mb-1 block text-sm">{"·".repeat(i + 1)}</span>
            {m}
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border p-3">
        <p className="text-[11px] text-muted-foreground">One line about today</p>
        <p className="mt-1.5 text-xs leading-relaxed">Tired, but the walk after class helped.</p>
      </div>
      <div className="rounded-full bg-primary px-4 py-2.5 text-center text-xs text-primary-foreground">Save check-in</div>
    </div>
  );
}

export function ReflectionScreen() {
  return (
    <div className="space-y-3">
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Reflection</p>
      <p className="font-display text-base leading-snug">What were you carrying today that nobody saw?</p>
      <div className="min-h-[92px] rounded-xl border border-border bg-surface p-3 text-xs leading-relaxed text-muted-foreground">
        I kept saying yes when I wanted to say not today…
      </div>
      <div className="flex gap-2 text-[10px]">
        <span className="rounded-full border border-border px-2.5 py-1">Private</span>
        <span className="rounded-full border border-border px-2.5 py-1">Only you can read this</span>
      </div>
    </div>
  );
}

export function PatternsScreen() {
  const bars = [40, 55, 35, 62, 48, 70, 66];
  return (
    <div className="space-y-3">
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Last 7 days</p>
      <p className="font-display text-base leading-snug">Steadier on days you slept before midnight.</p>
      <div className="flex h-24 items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t-md bg-primary/25" style={{ height: `${h}%` }}>
            <div className="h-1 w-full rounded-t-md bg-primary" />
          </div>
        ))}
      </div>
      <p className="text-[11px] leading-relaxed text-muted-foreground">
        A pattern, not a diagnosis. You decide what it means.
      </p>
    </div>
  );
}

export function SupportScreen() {
  return (
    <div className="space-y-3">
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Next steps</p>
      <div className="space-y-2">
        {[
          "A 4-minute grounding practice",
          "Read: when saying no feels impossible",
          "Talk to someone you trust",
          "Crisis helplines, always one tap away",
        ].map((item, i) => (
          <div key={item} className="flex items-center gap-2.5 rounded-xl border border-border px-3 py-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[10px] text-primary">
              {i + 1}
            </span>
            <span className="text-[11px] leading-snug">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashboardScreen() {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-lg">Today</p>
        <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-foreground/70">Sample data</span>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { k: "Check-ins", v: "18" },
          { k: "Reflections", v: "9" },
          { k: "Practices", v: "6" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl border border-border p-3">
            <p className="font-display text-lg leading-none">{s.v}</p>
            <p className="mt-1.5 text-[10px] text-muted-foreground">{s.k}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-border bg-surface p-3">
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">One suggestion</p>
        <p className="mt-1.5 text-xs leading-relaxed">
          You reflect most honestly at night. Try a two-line check-in before bed.
        </p>
      </div>
      <div className="rounded-xl border border-border p-3">
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Your journey</p>
        <div className="mt-2.5 flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={cn("h-1.5 flex-1 rounded-full", i <= 3 ? "bg-primary" : "bg-border")} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function SchoolDashboardScreen() {
  return (
    <div className="space-y-4">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-lg">Class wellbeing overview</p>
        <span className="rounded-full border border-border px-2.5 py-1 text-[10px] text-muted-foreground">
          Sample data · aggregated · no individual entries
        </span>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[
          { k: "Participation", v: "78%" },
          { k: "Check-ins", v: "241" },
          { k: "Practices used", v: "63" },
          { k: "Resources opened", v: "112" },
        ].map((s) => (
          <div key={s.k} className="rounded-xl border border-border p-3">
            <p className="font-display text-xl leading-none">{s.v}</p>
            <p className="mt-1.5 text-[10px] text-muted-foreground">{s.k}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-border p-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Patterns this month</p>
          <div className="mt-3 flex h-20 items-end gap-1.5">
            {[30, 44, 38, 56, 50, 62, 58, 66, 61, 70].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-primary/30" style={{ height: `${h}%` }} />
            ))}
          </div>
          <p className="mt-3 text-[10px] text-muted-foreground">Exam weeks show a dip in reported steadiness.</p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Support pathways</p>
          <ul className="mt-3 space-y-2 text-[11px] leading-snug">
            <li className="rounded-lg bg-surface px-3 py-2">Counsellor referral guide</li>
            <li className="rounded-lg bg-surface px-3 py-2">Conversation starters for tutors</li>
            <li className="rounded-lg bg-surface px-3 py-2">Safeguarding escalation steps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ResourcesScreen() {
  return (
    <div className="space-y-3">
      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Library</p>
      {[
        { t: "Why you overthink at night", c: "Emotional awareness · 7 min" },
        { t: "When silence feels safer", c: "Student wellbeing · 6 min" },
        { t: "Starting a wellbeing conversation", c: "Teachers · 5 min" },
      ].map((r) => (
        <div key={r.t} className="rounded-xl border border-border p-3">
          <p className="text-xs font-medium leading-snug">{r.t}</p>
          <p className="mt-1 text-[10px] text-muted-foreground">{r.c}</p>
        </div>
      ))}
    </div>
  );
}
