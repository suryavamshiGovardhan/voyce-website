import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NextStep, LeaveWith } from "@/components/site/value";
import PageShell from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, QuietCard, StepRail } from "@/components/site/primitives";
import { BrowserFrame, SchoolDashboardScreen, PhoneFrame, ResourcesScreen } from "@/components/site/ProductScreens";

const FLOW = [
  { number: "01", title: "See the class, not the file", body: "Aggregated participation and mood trends for a group — never individual entries." },
  { number: "02", title: "Notice what shifted", body: "Exam weeks, term changes, a quiet fortnight. Context you'd otherwise miss." },
  { number: "03", title: "Start the conversation", body: "Prompts and scripts for opening a wellbeing conversation without interrogating." },
  { number: "04", title: "Hand over safely", body: "Clear escalation and referral steps when something needs a counsellor." },
];

const BOUNDARIES = [
  {
    title: "What teachers can see",
    points: [
      "Class-level participation and engagement",
      "Aggregated trends across a group over time",
      "Which resources and practices are being used",
      "Whether a class-wide dip needs a response",
    ],
  },
  {
    title: "What teachers cannot see",
    points: [
      "Individual journal entries or reflections",
      "A named student's mood history",
      "Any private text a student wrote",
      "Anything that would turn wellbeing into surveillance",
    ],
  },
];

export default function TeachersPage() {
  return (
    <PageShell
      title="VOYCE for teachers"
      description="Notice patterns, start better conversations, and know when to escalate — with class-level wellbeing insight that never exposes an individual student's private entries."
      keywords="teacher wellbeing tools, classroom wellbeing, student wellbeing signals, pastoral care tools"
      canonical="/teachers"
    >
      <Section hero className="pt-16 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Eyebrow>For teachers</Eyebrow>
            <StatementHeading as="h1" className="text-4xl sm:text-5xl">
              Notice patterns. Start better conversations.
            </StatementHeading>
            <Lede>
              You are not a clinician, and VOYCE will never ask you to be one. It gives you the earlier signal and the
              right words, so a quiet term doesn&rsquo;t become a crisis nobody saw coming.
            </Lede>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="v-sheen h-12 rounded-full px-7">
                <Link to="/contact">
                  Explore teacher tools
                  <ArrowRight className="v-arrow ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-7">
                <Link to="/schools">VOYCE for schools</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <BrowserFrame label="VOYCE · teachers (preview)">
              <SchoolDashboardScreen />
            </BrowserFrame>
          </Reveal>
        </div>
        <Reveal delay={160}>
          <LeaveWith className="mt-14" items={["Class-level trends that add context you would otherwise miss", "Prompts for opening a wellbeing conversation without interrogating", "Clear steps for handing over to a counsellor"]} />
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal className="max-w-3xl">
          <Eyebrow>How it fits a teaching week</Eyebrow>
          <StatementHeading>Four minutes, not a second job.</StatementHeading>
        </Reveal>
        <StepRail steps={FLOW} className="mt-14" />
      </Section>

      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>The privacy boundary</Eyebrow>
          <StatementHeading>Aggregated insight for you. Private words for them.</StatementHeading>
          <Lede>
            This line is the reason students use VOYCE honestly. We hold it firmly, and we state it plainly to every
            student on day one.
          </Lede>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {BOUNDARIES.map((b, i) => (
            <Reveal key={b.title} delay={i * 90}>
              <QuietCard className="h-full">
                <h3 className="text-lg font-medium tracking-tight">{b.title}</h3>
                <ul className="mt-5 space-y-3">
                  {b.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </QuietCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Teacher wellbeing</Eyebrow>
            <StatementHeading>You are also someone who carries the room.</StatementHeading>
            <Lede>
              The same check-in, reflection and practice tools are yours to use. Staff wellbeing is treated with the
              same privacy as student wellbeing — school leadership never sees your entries either.
            </Lede>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/resources" className="text-sm font-medium text-primary hover:underline">
                Teacher guides
              </Link>
              <Link to="/tools" className="text-sm font-medium text-primary hover:underline">
                Practices
              </Link>
              <Link to="/workbook" className="text-sm font-medium text-primary hover:underline">
                Workbook
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100} className="flex justify-center">
            <PhoneFrame>
              <ResourcesScreen />
            </PhoneFrame>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink" className="py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <StatementHeading className="text-ink-foreground">Bring VOYCE into your classroom.</StatementHeading>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-foreground/70">
            We&rsquo;ll walk you through what students see, what you see, and where the line sits.
          </p>
          <Button asChild size="lg" className="mt-9 h-12 rounded-full px-8">
            <Link to="/contact">Talk to VOYCE</Link>
          </Button>
        </Reveal>
      </Section>
    </PageShell>
  );
}
