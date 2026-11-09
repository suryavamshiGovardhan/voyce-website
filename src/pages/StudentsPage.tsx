import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, QuietCard, StepRail } from "@/components/site/primitives";
import { PhoneFrame, CheckInScreen, ReflectionScreen, PatternsScreen, SupportScreen } from "@/components/site/ProductScreens";

const JOURNEY = [
  { number: "01", title: "Check in", body: "Pick where you are today. No essay required." },
  { number: "02", title: "Write one line", body: "A private sentence nobody else reads." },
  { number: "03", title: "See your pattern", body: "Your own week, shown back to you plainly." },
  { number: "04", title: "Take one step", body: "A short practice, a read, or a person to talk to." },
];

const PRIVACY_POINTS = [
  "Your journal entries and check-ins are yours. Teachers and schools never see an individual entry.",
  "Schools only ever see aggregated, non-identifying activity — how many people used something, not who wrote what.",
  "You can delete your account and your data whenever you want.",
  "VOYCE does not sell data or build advertising profiles from what you feel.",
];

export default function StudentsPage() {
  return (
    <PageShell
      title="VOYCE for students"
      description="A private place to check in, reflect, and understand your own patterns — without having to explain everything at once. Built for students, free to explore."
      keywords="student wellbeing, student mental wellbeing platform, exam stress, emotional awareness for students"
      canonical="/students"
    >
      <Section className="pt-16 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow>For students</Eyebrow>
            <StatementHeading as="h1" className="text-4xl sm:text-5xl">
              Understand yourself without having to explain everything at once.
            </StatementHeading>
            <Lede>
              You don&rsquo;t need to wait until things become overwhelming to pay attention to yourself. VOYCE gives you
              a quiet, private space to notice what&rsquo;s going on — in your own words, at your own pace.
            </Lede>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-12 rounded-full px-7">
                <Link to="/start-here">
                  Start here — no account
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-7">
                <Link to="/how-it-works">See how it works</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex justify-center gap-4">
            <PhoneFrame className="translate-y-4">
              <CheckInScreen />
            </PhoneFrame>
            <PhoneFrame className="hidden sm:block">
              <ReflectionScreen />
            </PhoneFrame>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <Reveal className="max-w-3xl">
          <Eyebrow>Why this exists</Eyebrow>
          <StatementHeading>Most of what you carry never gets said out loud.</StatementHeading>
          <Lede>
            Not because it isn&rsquo;t serious, but because saying it takes energy, timing, and someone who will listen
            without turning it into a problem to be fixed. Writing it down first makes the saying easier.
          </Lede>
        </Reveal>
        <StepRail steps={JOURNEY} className="mt-14" />
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>Your patterns</Eyebrow>
            <StatementHeading>A week you can actually read.</StatementHeading>
            <Lede>
              VOYCE shows your own entries back to you — steadier days, harder days, what tended to come before each
              one. It&rsquo;s a pattern, not a diagnosis, and you decide what it means.
            </Lede>
          </Reveal>
          <Reveal delay={100} className="flex justify-center">
            <PhoneFrame>
              <PatternsScreen />
            </PhoneFrame>
          </Reveal>
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
            <Eyebrow>Practices and resources</Eyebrow>
            <StatementHeading>Small things that actually fit into a school day.</StatementHeading>
            <Lede>
              Grounding practices, guided reflections, and honest reading on sleep, overthinking, pressure, and
              friendship. Nothing takes longer than a break between classes.
            </Lede>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/resources" className="text-sm font-medium text-primary hover:underline">
                Browse guides
              </Link>
              <Link to="/series" className="text-sm font-medium text-primary hover:underline">
                Read The Unheard Mind
              </Link>
              <Link to="/tools" className="text-sm font-medium text-primary hover:underline">
                Try the tools
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>Privacy and safety</Eyebrow>
          <StatementHeading>Who can see what you write? Only you.</StatementHeading>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PRIVACY_POINTS.map((p, i) => (
            <Reveal key={p} delay={i * 70}>
              <QuietCard className="h-full text-sm leading-relaxed text-muted-foreground">{p}</QuietCard>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <QuietCard className="border-primary/25 bg-primary/5">
            <h2 className="text-base font-medium">If things feel urgent</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              VOYCE is not emergency support. If you are in danger or thinking about harming yourself, contact local
              emergency services or a crisis helpline, and tell one adult you trust. Our safety page lists the routes.
            </p>
            <Link to="/safety" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
              Open the safety page
            </Link>
          </QuietCard>
        </Reveal>
      </Section>

      <Section tone="ink" className="py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <StatementHeading className="text-ink-foreground">Start with one honest sentence.</StatementHeading>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-foreground/70">
            Two minutes. Private by default. You can stop at any point.
          </p>
          <Button asChild size="lg" className="mt-9 h-12 rounded-full px-8">
            <Link to="/start-here">Start with VOYCE</Link>
          </Button>
        </Reveal>
      </Section>
    </PageShell>
  );
}
