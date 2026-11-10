import { Link } from "react-router-dom";
import { Mail, Instagram, CheckCircle2 } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, StepRail } from "@/components/site/primitives";
import { PageHero, NextStep } from "@/components/site/value";
import { SchoolAwareness } from "@/components/site/Awareness";

const PILOT_MAIL =
  "mailto:voycexx@gmail.com?subject=" + encodeURIComponent("VOYCE pilot conversation") +
  "&body=" + encodeURIComponent("School name:\nCity:\nClass / year group for a pilot:\nYour role:\nWhat you are seeing:\n");

const HOW = [
  { number: "01", title: "A conversation first", body: "We talk with your leadership team about what you are actually seeing — exam weeks, withdrawal, staff load." },
  { number: "02", title: "One class, one term", body: "Students check in privately. Nothing is graded, scored, or diagnosed." },
  { number: "03", title: "Staff orientation", body: "A short session for teachers and counsellors on what VOYCE shows, what it never shows, and when to involve a human." },
  { number: "04", title: "An honest review", body: "We look at what happened together. Nothing about your school is published without written consent." },
];

const NEEDS = [
  "A named staff lead (counsellor, wellbeing lead or class teacher)",
  "One class or year group to start with",
  "A short information note to families before day one",
  "Time for a brief staff orientation",
  "Your existing safeguarding and escalation steps — VOYCE follows them",
];

const BOUNDARIES = [
  "Schools never see an individual student's journal entry or check-in.",
  "Staff see grouped, non-identifying activity only.",
  "VOYCE does not diagnose, score, screen, or risk-rank students.",
  "VOYCE is not a crisis service. Escalation goes to a named person in your school and to local services.",
  "No student data is sold or used for advertising.",
];

export default function SchoolsPage() {
  return (
    <PageShell
      title="VOYCE for schools"
      description="Start with one class, review honestly, then decide. A privacy-first student wellbeing pilot with no diagnosis, no scoring and no student surveillance."
      keywords="school wellbeing programme India, student mental wellbeing pilot, SEL school India"
      canonical="/schools"
    >
      <PageHero
        eyebrow="For school leaders"
        title={<>Start with one class. <span className="text-primary">Review honestly. Then decide.</span></>}
        lede="VOYCE is a private check-in and reflection space for students, with grouped — never individual — insight for staff. A pilot is small, low-risk and shaped around your school."
        primary={{ to: PILOT_MAIL, label: "Request a pilot conversation", external: true }}
        secondary={{ to: "#why-now", label: "Why this matters now" }}
        aside={
          <div className="v-card p-6 sm:p-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">What a pilot needs from you</p>
            <ul className="mt-5 space-y-3">
              {NEEDS.map((n, i) => (
                <li key={n} className="v-pop flex gap-3 text-sm leading-relaxed" style={{ animationDelay: `${500 + i * 120}ms` }}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> {n}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <Section className="py-24 sm:py-32">
        <Reveal className="mb-12 max-w-2xl">
          <Eyebrow>How a pilot runs</Eyebrow>
          <StatementHeading>Four steps, no long contract.</StatementHeading>
        </Reveal>
        <StepRail steps={HOW} />
      </Section>

      <SchoolAwareness />

      <Section className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>Boundaries</Eyebrow>
            <StatementHeading>What VOYCE will never do to your students.</StatementHeading>
            <ul className="mt-8 space-y-4">
              {BOUNDARIES.map((b) => (
                <li key={b} className="flex gap-3 text-base leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Detail: <Link to="/safety" className="v-link text-primary">safety</Link> ·{" "}
              <Link to="/privacy" className="v-link text-primary">privacy policy</Link> ·{" "}
              <Link to="/teachers" className="v-link text-primary">classroom format for teachers</Link>
            </p>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="v-card p-7">
              <h3 className="font-display text-2xl tracking-tight">Speak to the founder directly.</h3>
              <Lede className="text-base">There is no sales team. Suryavamshi Govardhan answers school enquiries himself.</Lede>
              <div className="mt-6 flex flex-col gap-3">
                <a href="mailto:voycexx@gmail.com" className="v-card v-card-hover inline-flex items-center gap-3 px-5 py-4">
                  <Mail className="h-4 w-4 text-primary" aria-hidden /> voycexx@gmail.com
                </a>
                <a href="https://www.instagram.com/suryavamshiiii" target="_blank" rel="noopener noreferrer" className="v-card v-card-hover inline-flex items-center gap-3 px-5 py-4">
                  <Instagram className="h-4 w-4 text-primary" aria-hidden /> @suryavamshiiii
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <NextStep
        title="One class. One term. An honest look at what helped."
        body="Write to us with your school and the class you have in mind."
        primary={{ to: "/contact", label: "Request a pilot conversation" }}
        secondary={{ to: "/teachers", label: "See the classroom format" }}
      />
    </PageShell>
  );
}
