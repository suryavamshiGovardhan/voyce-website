import { Link } from "react-router-dom";
import { NextStep, LeaveWith } from "@/components/site/value";
import PageShell from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, QuietCard } from "@/components/site/primitives";
import {
  PhoneFrame,
  CheckInScreen,
  ReflectionScreen,
  PatternsScreen,
  SupportScreen,
  ResourcesScreen,
} from "@/components/site/ProductScreens";

const STEPS = [
  {
    n: "01",
    title: "Notice",
    line: "A thirty-second check-in that asks how you actually are, not how you're performing.",
    screen: <CheckInScreen />,
  },
  {
    n: "02",
    title: "Reflect",
    line: "One prompt at a time, until the feeling has words around it.",
    screen: <ReflectionScreen />,
  },
  {
    n: "03",
    title: "Understand",
    line: "Your own entries, gathered into a pattern you can read without a specialist.",
    screen: <PatternsScreen />,
  },
  {
    n: "04",
    title: "Support",
    line: "A practice, a piece of reading, or a route to a person who can help.",
    screen: <SupportScreen />,
  },
  {
    n: "05",
    title: "Grow",
    line: "Noticing becomes ordinary, so hard weeks are met earlier and with less panic.",
    screen: <ResourcesScreen />,
  },
];

export default function HowItWorksPage() {
  return (
    <PageShell
      title="How VOYCE works"
      description="Notice, reflect, understand, support, grow. A simple five-step wellbeing journey for students, teachers, parents and schools — with real product screens at every step."
      keywords="how voyce works, student wellbeing journey, emotional check-in, reflection tool"
      canonical="/how-it-works"
    >
      <Section hero className="pt-16 sm:pt-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <StatementHeading as="h1" className="text-4xl sm:text-5xl">
            Five steps. Nothing you have to prepare for.
          </StatementHeading>
          <Lede>
            VOYCE doesn&rsquo;t ask you to explain your whole life before it becomes useful. It asks one small question,
            then builds from your answers.
          </Lede>
        </Reveal>
        <Reveal delay={160}>
          <LeaveWith className="mt-14" items={["A clear picture of every step before you start", "What stays private, and what never leaves you", "Where VOYCE stops and real help begins"]} />
        </Reveal>
      </Section>

      {STEPS.map((step, i) => (
        <Section key={step.n} tone={i % 2 === 1 ? "muted" : "default"} className="py-24 sm:py-32">
          <div
            className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <Reveal>
              <span className="font-display text-sm text-primary">{step.n}</span>
              <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">{step.title}</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">{step.line}</p>
            </Reveal>
            <Reveal delay={100} className="flex justify-center lg:justify-start">
              <PhoneFrame>{step.screen}</PhoneFrame>
            </Reveal>
          </div>
        </Section>
      ))}

      <Section>
        <Reveal>
          <QuietCard className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-display text-2xl tracking-tight">Where this stops</h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                VOYCE is not emergency care and not a replacement for a qualified professional. When something needs a
                human, VOYCE says so and shows you where to go.
              </p>
            </div>
            <Button asChild variant="outline" className="h-11 shrink-0 rounded-full px-6">
              <Link to="/safety">Read our safety page</Link>
            </Button>
          </QuietCard>
        </Reveal>
      </Section>
      <NextStep
        title="Try the first step now."
        body="Two minutes, private by default, no account needed."
        primary={{ to: "/start-here", label: "Start with VOYCE" }}
        secondary={{ to: "/students", label: "What students get" }}
      />
    </PageShell>
  );
}
