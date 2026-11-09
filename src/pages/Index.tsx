import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { SonarGrid } from "@/components/ui/sonar-grid";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, StepRail, QuietCard } from "@/components/site/primitives";
import {
  PhoneFrame,
  BrowserFrame,
  CheckInScreen,
  ReflectionScreen,
  PatternsScreen,
  SupportScreen,
  DashboardScreen,
  SchoolDashboardScreen,
} from "@/components/site/ProductScreens";
import { OrganizationSchema, WebSiteSchema, FounderSchema } from "@/components/StructuredData";

const PROGRESSION = [
  { label: "Feeling", body: "Something is off, but there is no word for it yet." },
  { label: "Reflection", body: "A quiet prompt turns the feeling into a sentence." },
  { label: "Understanding", body: "Sentences repeat. A pattern becomes visible." },
  { label: "Support", body: "The pattern points to a next step — or to a person." },
  { label: "Growth", body: "Noticing becomes a habit instead of an emergency." },
];

const EXPERIENCE = [
  { number: "01", title: "Notice", body: "Pause for thirty seconds and name where you actually are today." },
  { number: "02", title: "Reflect", body: "One gentle prompt at a time, until the feeling has words around it." },
  { number: "03", title: "Understand", body: "Your own entries, gathered into a pattern you can read without a specialist." },
  { number: "04", title: "Support", body: "A practice, a piece of reading, or a clear route to a real person." },
  { number: "05", title: "Grow", body: "Noticing becomes ordinary, so hard weeks are met earlier and calmer." },
];

const FIRST_VISIT = [
  {
    n: "01",
    title: "Read a real story",
    body: "A short, anonymous story from someone who felt something similar. You are not the only one.",
    cta: "Read a story",
    to: "/stories",
  },
  {
    n: "02",
    title: "Answer one private question",
    body: "Write one honest sentence about today. Nothing is saved unless you choose to save it.",
    cta: "Try a reflection",
    to: "/start-here",
  },
  {
    n: "03",
    title: "Take one small next step",
    body: "A two-minute practice you can use tonight — or a clear route to a person who can help.",
    cta: "See practices",
    to: "/tools",
  },
];

const AUDIENCES = [
  {
    title: "Students",
    line: "Understand yourself without having to explain everything at once.",
    cta: "Explore student experience",
    to: "/students",
  },
  {
    title: "Teachers",
    line: "Notice patterns. Start better conversations.",
    cta: "Explore teacher tools",
    to: "/teachers",
  },
  {
    title: "Schools",
    line: "Build a culture where wellbeing is noticed, supported, and followed through.",
    cta: "Explore VOYCE for Schools",
    to: "/schools",
  },
  {
    title: "Parents",
    line: "Understand the signals behind the silence.",
    cta: "Explore parent support",
    to: "/parents",
  },
];

const TRUST = [
  { title: "Private by default", body: "Your reflections belong to you. Nobody at a school sees an individual entry." },
  { title: "Safeguarding first", body: "Clear escalation routes and honest limits, written in plain language." },
  { title: "Human-centred", body: "VOYCE points towards people. It never pretends to be one." },
  { title: "Responsible AI", body: "AI helps organise and prompt. It does not diagnose, score, or label you." },
  { title: "School ready", body: "Built for classrooms with aggregated, non-identifying insight for staff." },
  { title: "Transparent", body: "No invented statistics, no borrowed logos, no claims we cannot stand behind." },
];

export default function Index() {
  return (
    <PageShell
      title="VOYCE — Student & school wellbeing. Understand what you're feeling."
      description="VOYCE is a calm, private wellbeing space for students, teachers, parents and schools. Check in, reflect, notice patterns, and find the next small step. Not therapy, not diagnosis."
      keywords="student wellbeing platform, school mental health platform, emotional wellbeing, teacher wellbeing tools, reflection app"
      canonical="/"
    >
      <OrganizationSchema />
      <WebSiteSchema />
      <FounderSchema />

      {/* 01 — HERO */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 15% 0%, hsl(var(--primary)/0.10) 0%, transparent 70%), radial-gradient(50% 40% at 90% 10%, hsl(var(--accent)/0.10) 0%, transparent 70%)",
          }}
        />
        {/* Dot grid stays on the visual side only, faded out behind the copy */}
        <SonarGrid
          className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent_0%,transparent_45%,black_75%)] max-lg:[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_60%,black_90%)]"
          spacing={30}
          baseOpacity={0.14}
          pingEvery={3.4}
          speed={220}
          ringWidth={110}
          amplitude={1.6}
          interactive
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-3xl bg-background/90 p-1 backdrop-blur-sm sm:p-2">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
                Student &amp; school wellbeing · free · no account needed
              </p>
              <h1 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Understand what you&rsquo;re feeling. Find what comes next.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
                VOYCE helps students put a feeling into words in two minutes &mdash; read a real story, answer one
                private question, and leave with one small next step.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 rounded-full px-7 text-base">
                  <Link to="/start-here">
                    Start here &mdash; no account
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 rounded-full bg-background px-7 text-base">
                  <Link to="/how-it-works">How it works</Link>
                </Button>
              </div>
              <ul className="mt-7 grid gap-2 text-sm text-foreground/75 sm:grid-cols-3">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />No diagnosis</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />No scores</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />Private by default</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="flex items-start justify-center gap-4 sm:gap-6">
              <PhoneFrame className="translate-y-6">
                <CheckInScreen />
              </PhoneFrame>
              <PhoneFrame className="hidden sm:block">
                <PatternsScreen />
              </PhoneFrame>
            </div>
            <p className="mt-10 text-center text-xs text-muted-foreground">Illustrative preview screens.</p>
          </Reveal>
        </div>
      </section>

      {/* 01b — WHAT YOU GET IN TWO MINUTES */}
      <Section className="py-14 sm:py-20" ariaLabel="What you get in your first two minutes">
        <Reveal className="max-w-3xl">
          <Eyebrow>Your first two minutes</Eyebrow>
          <StatementHeading>Three small things you leave with.</StatementHeading>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {FIRST_VISIT.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <Link
                to={item.to}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-primary/40"
              >
                <span className="font-display text-sm text-primary">{item.n}</span>
                <h3 className="mt-3 text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                  {item.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 02 — THE INSIGHT */}
      <Section tone="ink" ariaLabel="The insight behind VOYCE">
        <Reveal className="max-w-3xl">
          <Eyebrow className="text-primary-foreground/60">The insight</Eyebrow>
          <StatementHeading className="text-ink-foreground">
            Not every struggle looks like a crisis.
          </StatementHeading>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/70 sm:text-lg">
            Most emotional difficulty is quiet. It shows up as tiredness, avoidance, irritation, silence — long before
            anyone thinks to ask for help. By the time it looks serious enough to name, months have usually passed.
            VOYCE exists in that gap: the long, ordinary stretch where noticing is still cheap.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-4 md:grid-cols-5">
          {PROGRESSION.map((step, i) => (
            <li key={step.label}>
              <Reveal delay={i * 80}>
                <div className="h-full rounded-2xl border border-ink-foreground/12 bg-ink-foreground/5 p-6">
                  <div className="mb-4 flex items-center gap-2" aria-hidden="true">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="h-px flex-1 bg-ink-foreground/20" />
                  </div>
                  <h3 className="font-display text-lg text-ink-foreground">{step.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-foreground/60">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* 03 — THE EXPERIENCE */}
      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>The VOYCE experience</Eyebrow>
          <StatementHeading>Five small steps, repeated gently.</StatementHeading>
          <Lede>
            VOYCE is a support and wellbeing platform. It does not replace psychologists, doctors, counsellors,
            teachers, parents, or emergency services — it helps you reach them sooner and with clearer words.
          </Lede>
        </Reveal>
        <StepRail steps={EXPERIENCE} className="mt-14 lg:grid-cols-5" />
      </Section>

      {/* 04 — REAL PRODUCT */}
      <Section tone="muted" ariaLabel="Inside VOYCE">
        <Reveal className="max-w-3xl">
          <Eyebrow>Inside VOYCE</Eyebrow>
          <StatementHeading>The product, not a metaphor for it.</StatementHeading>
          <Lede>
            These screens show what VOYCE is designed to do: check-ins, private reflection, personal patterns, guided
            practices, and an aggregated view for schools that never exposes an individual. All names and numbers in
            these previews are sample data for illustration — not real users or real schools.
          </Lede>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            { screen: <CheckInScreen />, title: "Daily check-in", body: "Thirty seconds. One honest line." },
            { screen: <ReflectionScreen />, title: "Private reflection", body: "Prompts that ask, never judge." },
            { screen: <SupportScreen />, title: "Next steps", body: "Practices and routes to real support." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 90}>
              <QuietCard interactive className="flex h-full flex-col items-center text-center">
                <PhoneFrame className="w-full max-w-[248px]">{item.screen}</PhoneFrame>
                <h3 className="mt-7 text-lg font-medium tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </QuietCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <BrowserFrame label="VOYCE · dashboard (preview)">
              <DashboardScreen />
            </BrowserFrame>
            <p className="mt-4 text-sm text-muted-foreground">
              Your dashboard — today, your patterns, one suggestion. Never a scoreboard. (Illustrative preview.)
            </p>
          </Reveal>
          <Reveal delay={100}>
            <BrowserFrame label="VOYCE · schools (preview)">
              <SchoolDashboardScreen />
            </BrowserFrame>
            <p className="mt-4 text-sm text-muted-foreground">
              The school view — aggregated participation and patterns, with individual entries kept private.
              Sample numbers for illustration only; VOYCE has no school case studies yet.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* 05 — AUDIENCES */}
      <Section>
        <Reveal className="max-w-3xl">
          <Eyebrow>Who VOYCE is for</Eyebrow>
          <StatementHeading>Four people in the same room, needing different things.</StatementHeading>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {AUDIENCES.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <QuietCard interactive className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl tracking-tight">{a.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{a.line}</p>
                </div>
                <Link
                  to={a.to}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  {a.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </QuietCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 06 — TRUST */}
      <Section tone="muted" ariaLabel="Trust and safety">
        <Reveal className="max-w-3xl">
          <Eyebrow>Trust architecture</Eyebrow>
          <StatementHeading>What we will and won&rsquo;t do with your inner life.</StatementHeading>
          <Lede>
            We make no claims we cannot support. No fabricated statistics, no partner logos we haven&rsquo;t earned, no
            promises of anonymity we can&rsquo;t technically keep.
          </Lede>
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
          {TRUST.map((t, i) => (
            <div key={t.title} className="bg-background">
              <Reveal delay={i * 60} className="h-full">
                <div className="h-full p-7">
                  <h3 className="text-base font-medium tracking-tight">{t.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        <Reveal className="mt-10 flex flex-wrap gap-4">
          <Link to="/privacy" className="text-sm font-medium text-primary hover:underline">
            Read the privacy page
          </Link>
          <Link to="/safety" className="text-sm font-medium text-primary hover:underline">
            Read the safety page
          </Link>
        </Reveal>
      </Section>

      {/* 07 — CLOSING CTA */}
      <Section tone="ink" className="py-24 sm:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <StatementHeading className="text-ink-foreground">
            Start with one honest sentence.
          </StatementHeading>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-foreground/70">
            Two minutes is enough to begin. Nothing you write is shared, scored, or shown to your school.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-8 text-base">
              <Link to="/start-here">Start here — no account</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-ink-foreground/25 bg-transparent px-8 text-base text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
            >
              <Link to="/schools">Talk to VOYCE about your school</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
