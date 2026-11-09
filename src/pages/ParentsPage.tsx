import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NextStep, LeaveWith } from "@/components/site/value";
import PageShell from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, QuietCard, StepRail } from "@/components/site/primitives";
import { PhoneFrame, CheckInScreen, SupportScreen } from "@/components/site/ProductScreens";

const SIGNALS = [
  { number: "01", title: "Withdrawal", body: "Shorter answers, closed doors, plans quietly cancelled." },
  { number: "02", title: "Sleep drift", body: "Late nights that aren't about the phone, early waking that isn't about school." },
  { number: "03", title: "Irritation", body: "A short fuse over small things is often something larger with no name yet." },
  { number: "04", title: "Over-functioning", body: "Doing everything perfectly can be a way of not being asked how they are." },
];

const APPROACHES = [
  {
    title: "Ask smaller questions",
    body: "\"How was your day?\" invites \"fine\". \"What was the heaviest part of today?\" invites an answer.",
  },
  {
    title: "Let silence stay",
    body: "A pause is not refusal. Most honest sentences arrive after the second silence, not the first.",
  },
  {
    title: "Don't solve immediately",
    body: "Being understood once is worth more than three pieces of advice. Solutions can wait a day.",
  },
  {
    title: "Keep their privacy",
    body: "If your child uses VOYCE, their entries are theirs. Asking to read them usually closes the door you're trying to open.",
  },
];

export default function ParentsPage() {
  return (
    <PageShell
      title="VOYCE for parents"
      description="Understand the signals behind the silence. Practical, non-clinical guidance for parents who want to notice earlier and start conversations that don't shut down."
      keywords="parent guidance teenage wellbeing, how to talk to your teenager, signs of stress in students"
      canonical="/parents"
    >
      <Section hero className="pt-16 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow>For parents</Eyebrow>
            <StatementHeading as="h1" className="text-4xl sm:text-5xl">
              Understand the signals behind the silence.
            </StatementHeading>
            <Lede>
              Most young people aren&rsquo;t hiding something dramatic. They&rsquo;re waiting for a moment where saying
              something costs less than staying quiet. VOYCE helps you notice earlier and ask better.
            </Lede>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="v-sheen h-12 rounded-full px-7">
                <Link to="/resources">
                  Explore parent support
                  <ArrowRight className="v-arrow ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-7">
                <Link to="/how-it-works">See how VOYCE works</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex justify-center">
            <PhoneFrame>
              <CheckInScreen />
            </PhoneFrame>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <LeaveWith className="mt-14" items={["The quiet signs worth noticing earlier", "Better questions to open a conversation", "Guides written for parents, not clinicians", "Clarity on what VOYCE does — and doesn’t — do"]} />
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal className="max-w-3xl">
          <Eyebrow>What to look for</Eyebrow>
          <StatementHeading>Quiet signals, not warning sirens.</StatementHeading>
          <Lede>
            None of these mean something is wrong on their own. Together, over a few weeks, they&rsquo;re worth a
            gentler conversation.
          </Lede>
        </Reveal>
        <StepRail steps={SIGNALS} className="mt-14" />
      </Section>

      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>How to start</Eyebrow>
          <StatementHeading>Four things that keep the door open.</StatementHeading>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {APPROACHES.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <QuietCard interactive className="h-full">
                <h3 className="text-lg font-medium tracking-tight">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </QuietCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal delay={100} className="flex justify-center lg:order-2">
            <PhoneFrame>
              <SupportScreen />
            </PhoneFrame>
          </Reveal>
          <Reveal className="lg:order-1">
            <Eyebrow>Where VOYCE stops</Eyebrow>
            <StatementHeading>We point towards people, never away from them.</StatementHeading>
            <Lede>
              VOYCE does not diagnose, treat, or replace a counsellor, doctor or emergency service. If a situation looks
              serious, the honest answer is a person — and VOYCE says so clearly, with the routes to reach one.
            </Lede>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/safety" className="text-sm font-medium text-primary hover:underline">
                Safety and limits
              </Link>
              <Link to="/privacy" className="text-sm font-medium text-primary hover:underline">
                What a parent can and cannot see
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink" className="py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <StatementHeading className="text-ink-foreground">Start with the reading, not the intervention.</StatementHeading>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-foreground/70">
            Our guides for parents are short, non-clinical, and written to be used the same evening.
          </p>
          <Button asChild size="lg" className="mt-9 h-12 rounded-full px-8">
            <Link to="/resources">Open the guides</Link>
          </Button>
        </Reveal>
      </Section>
    </PageShell>
  );
}
