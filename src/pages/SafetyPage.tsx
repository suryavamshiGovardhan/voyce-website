import { Link } from "react-router-dom";
import { NextStep, LeaveWith } from "@/components/site/value";
import PageShell from "@/components/site/PageShell";
import { Section, Eyebrow, StatementHeading, Lede, Reveal } from "@/components/site/primitives";

const IS = [
  "A private space to check in with how you feel.",
  "A place to write one honest line and see your own patterns over time.",
  "Short practices and readings that help you slow down.",
  "A signpost toward real people — a trusted adult, a counsellor, a helpline.",
];

const IS_NOT = [
  "Not therapy, and not a replacement for a therapist or doctor.",
  "Not a diagnosis engine. VOYCE does not label you with a condition.",
  "Not a scoring or ranking system for students.",
  "Not an emergency service. It cannot respond in a crisis.",
];

const HELPLINES = [
  { name: "Tele MANAS (India, 24/7)", value: "14416 or 1-800-891-4416" },
  { name: "KIRAN mental health helpline (India)", value: "1800-599-0019" },
  { name: "Emergency services (India)", value: "112" },
];

export default function SafetyPage() {
  return (
    <PageShell
      title="Safety"
      description="What VOYCE is, what it is not, and what to do in a crisis. Plain-English safety boundaries for students, parents, teachers, and schools."
      keywords="VOYCE safety, mental wellbeing safety, crisis helplines India, not a diagnosis"
      canonical="/safety"
    >
      <Section hero className="pt-16 sm:pt-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>Safety</Eyebrow>
          <StatementHeading as="h1" className="text-4xl sm:text-5xl">
            What VOYCE is, and what it is not.
          </StatementHeading>
          <Lede>
            Being clear about our limits is part of the product. Here is the whole boundary, in plain language.
          </Lede>
        </Reveal>
        <Reveal delay={160}>
          <LeaveWith className="mt-14" items={["What VOYCE will and won’t do", "How your data is protected", "Where to go for urgent help"]} />
        </Reveal>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl">VOYCE is</h2>
            <ul className="mt-6 space-y-4">
              {IS.map((t) => (
                <li key={t} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-2xl">VOYCE is not</h2>
            <ul className="mt-6 space-y-4">
              {IS_NOT.map((t) => (
                <li key={t} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>In a crisis</Eyebrow>
          <StatementHeading>If you or someone else is in immediate danger, contact a human now.</StatementHeading>
          <ul className="mt-8 space-y-4">
            {HELPLINES.map((h) => (
              <li key={h.name} className="rounded-2xl border border-border p-5">
                <p className="text-sm font-medium">{h.name}</p>
                <p className="mt-1 text-lg font-display">{h.value}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Outside India, contact your local emergency number or a national crisis line.
          </p>
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal className="max-w-3xl">
          <Eyebrow>Age and consent</Eyebrow>
          <StatementHeading>If you are under 18.</StatementHeading>
          <Lede>
            VOYCE can be used from age 13 with a parent or guardian's knowledge. We ask for as little
            information as possible, and you can delete your account and everything in it at any time. Read the{" "}
            <Link to="/privacy" className="text-primary underline underline-offset-4">privacy policy</Link> for
            exactly what we store and why.
          </Lede>
        </Reveal>
      </Section>
      <NextStep
        title="Feel safe enough to try it?"
        body="Start with a private check-in. Nothing is shared unless you choose."
        primary={{ to: "/start-here", label: "Start here" }}
        secondary={{ to: "/faq", label: "Read the FAQ" }}
      />
    </PageShell>
  );
}
