import { Link } from "react-router-dom";
import { ArrowRight, Mail, Instagram } from "lucide-react";
import { NextStep, LeaveWith } from "@/components/site/value";
import PageShell from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, StepRail } from "@/components/site/primitives";

const HOW = [
  { number: "01", title: "A conversation first", body: "We talk with your leadership team about what you are actually seeing — attendance, exam weeks, withdrawal, staff load." },
  { number: "02", title: "A small pilot", body: "One year group or one class. Students check in privately. Nothing is graded, scored, or diagnosed." },
  { number: "03", title: "Staff orientation", body: "A short session for teachers and counsellors on what VOYCE shows, what it never shows, and when to involve a human." },
  { number: "04", title: "An honest review", body: "At the end of the pilot we look at what happened together, and publish nothing about your school without written consent." },
];

const BOUNDARIES = [
  "Schools never see an individual student's journal entry or check-in.",
  "Staff see aggregated, non-identifying activity only — for example how many students opened a wellbeing resource in a week.",
  "VOYCE does not diagnose, score, screen, or risk-rank students.",
  "VOYCE is not a crisis service. Escalation always goes to a named human in your school and to local services.",
  "No student data is sold, and nothing is used to build advertising profiles.",
];

export default function SchoolsPage() {
  return (
    <PageShell
      title="VOYCE for schools"
      description="An honest, privacy-first wellbeing check-in space for schools. No diagnosis, no scoring, no student surveillance — a pilot conversation you can hold your leadership team to."
      keywords="school wellbeing, student wellbeing programme, school mental wellbeing pilot, privacy-first student check-in"
      canonical="/schools"
    >
      <Section hero className="pt-16 sm:pt-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>For schools</Eyebrow>
          <StatementHeading as="h1" className="text-4xl sm:text-5xl">
            A quiet place for students to notice how they are — before it becomes a crisis.
          </StatementHeading>
          <Lede>
            VOYCE is a private check-in and reflection space. It is not a diagnostic tool, not a screening
            instrument, and not a monitoring dashboard. It helps students put language to what they feel and
            points them toward a human when that is what they need.
          </Lede>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">
                Talk to us about a pilot <ArrowRight className="v-arrow ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <Link to="/how-it-works">See how it works</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={160}>
          <LeaveWith className="mt-14" items={["A small, low-risk pilot shaped around your school", "Aggregated, non-identifying trends — never individual entries", "A short orientation for teachers and counsellors", "Clear escalation and safety boundaries"]} />
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal>
          <Eyebrow>Where we are</Eyebrow>
          <StatementHeading>We have no case studies to show you yet.</StatementHeading>
          <Lede>
            VOYCE is early. We would rather say that plainly than publish percentages we cannot evidence.
            When a school pilot runs, we will publish what actually happened — named, dated, and with the
            school's written permission. Until then, this page contains no statistics, no testimonials, and no
            partner logos.
          </Lede>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Eyebrow>How a pilot works</Eyebrow>
          <StatementHeading>Four steps, no procurement theatre.</StatementHeading>
        </Reveal>
        <div className="mt-12">
          <StepRail steps={HOW} />
        </div>
      </Section>

      <Section tone="muted">
        <Reveal className="max-w-3xl">
          <Eyebrow>Boundaries</Eyebrow>
          <StatementHeading>What VOYCE will never do to your students.</StatementHeading>
          <ul className="mt-8 space-y-4">
            {BOUNDARIES.map((b) => (
              <li key={b} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Read the full detail on our <Link to="/safety" className="text-primary underline underline-offset-4">safety page</Link> and{" "}
            <Link to="/privacy" className="text-primary underline underline-offset-4">privacy policy</Link>.
          </p>
        </Reveal>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <Eyebrow>Contact</Eyebrow>
          <StatementHeading>Speak to the founder directly.</StatementHeading>
          <Lede>
            There is no sales team. Suryavamshi Govardhan answers school enquiries himself.
          </Lede>
          <div className="mt-8 flex flex-col gap-3">
            <a
              href="mailto:voycexx@gmail.com"
              className="inline-flex items-center gap-3 rounded-2xl border border-border px-5 py-4 transition-colors hover:border-primary/40"
            >
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              voycexx@gmail.com
            </a>
            <a
              href="https://www.instagram.com/suryavamshiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border border-border px-5 py-4 transition-colors hover:border-primary/40"
            >
              <Instagram className="h-4 w-4 text-primary" aria-hidden="true" />
              @suryavamshiiii
            </a>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            VOYCE is a reflective, educational wellbeing space. It does not provide therapy, diagnosis, or
            emergency support. If a student is in immediate danger, contact local emergency services or a
            crisis helpline such as Tele MANAS (14416) in India.
          </p>
        </Reveal>
      </Section>
      <NextStep
        title="See whether VOYCE fits your school."
        body="Write to us and we will walk you through a pilot."
        primary={{ to: "/contact", label: "Talk to us" }}
        secondary={{ to: "/teachers", label: "For teachers" }}
      />
    </PageShell>
  );
}
