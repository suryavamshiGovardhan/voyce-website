import PageShell from "@/components/site/PageShell";
import { Reveal } from "@/components/site/primitives";
import { Headline, MoreLink, PillLink, ScaleIn, ScrollWords, StickyStory, Tile, type TileTone } from "@/components/site/apple";
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
import type { ReactNode } from "react";
import { OrganizationSchema, WebSiteSchema, FounderSchema } from "@/components/StructuredData";

const EXPERIENCE: { number: string; title: string; body: string }[] = [
  { number: "01", title: "Notice", body: "Pause for thirty seconds and name where you actually are today." },
  { number: "02", title: "Reflect", body: "One gentle prompt at a time, until the feeling has words around it." },
  { number: "03", title: "Understand", body: "Your own entries, gathered into a pattern you can read without a specialist." },
  { number: "04", title: "Support", body: "A practice, a piece of reading, or a clear route to a real person." },
  { number: "05", title: "Grow", body: "Noticing becomes ordinary, so hard weeks are met earlier and calmer." },
];

const FIRST_VISIT = [
  {
    n: "01",
    title: "Read a short story",
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

const STORY_SCREENS: ReactNode[] = [
  <CheckInScreen key="c" />,
  <ReflectionScreen key="r" />,
  <PatternsScreen key="p" />,
  <SupportScreen key="s" />,
  <DashboardScreen key="d" />,
];

const AUDIENCE_TONES: TileTone[] = ["plum", "apricot", "sage", "ink"];

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

      {/* 01 — HERO: one idea, huge type, product below */}
      <section data-v-reveal className="relative overflow-hidden bg-background pt-16 sm:pt-24">
        <div className="v-rise relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-base font-semibold tracking-tight text-primary sm:text-lg">Student &amp; school wellbeing</p>
          <Headline as="h1" size="hero" className="mt-3">
            Understand what you&rsquo;re feeling.
            <span className="a-gradient block">Find what comes next.</span>
          </Headline>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-[1.5] text-muted-foreground sm:text-[1.35rem]">
            Put a feeling into words in two minutes. Free, private and no account needed.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <PillLink to="/start-here">Start here</PillLink>
            <MoreLink to="/how-it-works">How it works</MoreLink>
          </div>
        </div>

        <ScaleIn className="relative mx-auto mt-14 max-w-5xl px-6 sm:mt-16" from={0.92} minOpacity={0.9}>
          <div className="a-glow pointer-events-none absolute inset-x-10 top-10 bottom-0" aria-hidden />
          <div className="relative flex items-end justify-center gap-4 sm:gap-7">
            <PhoneFrame className="hidden translate-y-10 md:block">
              <ReflectionScreen />
            </PhoneFrame>
            <PhoneFrame className="relative z-10 w-[290px] sm:w-[300px]">
              <CheckInScreen />
            </PhoneFrame>
            <PhoneFrame className="hidden translate-y-10 md:block">
              <PatternsScreen />
            </PhoneFrame>
          </div>
        </ScaleIn>
        <p className="relative mx-auto max-w-5xl px-6 pb-16 pt-14 text-center text-xs text-muted-foreground sm:pb-20">
          Illustrative preview screens.
        </p>
      </section>

      {/* 02 — THE INSIGHT: words light up as you scroll */}
      <section data-v-reveal aria-label="The insight behind VOYCE" className="bg-ink a-ink-plain py-32 text-ink-foreground sm:py-44">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <p className="mb-6 text-lg font-semibold tracking-tight text-apricot">The insight</p>
          <ScrollWords
            className="text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.12] md:text-[3.4rem]"
            dimClass="opacity-[0.18]"
            text="Not every struggle looks like a crisis. Most of it is quiet — tiredness, avoidance, irritation, silence — long before anyone thinks to ask for help. VOYCE lives in that gap, where noticing is still easy."
          />
        </div>
      </section>

      {/* 03 — THE EXPERIENCE: pinned story, screen changes per step */}
      <StickyStory
        intro={
          <Reveal className="text-center">
            <p className="text-lg font-semibold tracking-tight text-primary">The VOYCE experience</p>
            <Headline className="mt-3">Five small steps. Repeated gently.</Headline>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-[1.5] text-muted-foreground sm:text-xl">
              VOYCE doesn&rsquo;t replace psychologists, doctors, counsellors, teachers, parents or emergency services.
              It helps you reach them sooner, with clearer words.
            </p>
          </Reveal>
        }
        steps={EXPERIENCE.map((step, i) => ({
          kicker: step.number,
          title: step.title,
          body: step.body,
          visual: <PhoneFrame>{STORY_SCREENS[i]}</PhoneFrame>,
        }))}
      />

      {/* 04 — BENTO: your first two minutes */}
      <section aria-label="What you get in your first two minutes" className="bg-background py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Headline>Your first two minutes.</Headline>
            <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-muted-foreground sm:text-xl">
              Three small things you leave with.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Reveal className="md:col-span-2">
              <Tile tone="plum" className="h-full min-h-[380px] justify-between">
                <span
                  className="a-headline pointer-events-none absolute -bottom-24 right-6 select-none text-[22rem] leading-none text-primary-foreground/10"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <div className="relative">
                  <p className="text-base font-semibold text-primary-foreground/70">{FIRST_VISIT[0].n}</p>
                  <h3 className="a-headline mt-2 text-4xl leading-[1.05] sm:text-5xl">{FIRST_VISIT[0].title}.</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed text-primary-foreground/80">{FIRST_VISIT[0].body}</p>
                </div>
                <MoreLink to={FIRST_VISIT[0].to} className="relative mt-10 text-primary-foreground">
                  {FIRST_VISIT[0].cta}
                </MoreLink>
              </Tile>
            </Reveal>
            {FIRST_VISIT.slice(1).map((item, i) => (
              <Reveal key={item.title} delay={(i + 1) * 90}>
                <Tile tone={i === 0 ? "apricot" : "sage"} className="h-full">
                  <p className="text-base font-semibold text-primary">{item.n}</p>
                  <h3 className="a-headline mt-2 text-[1.75rem] leading-[1.1]">{item.title}.</h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-foreground/75">{item.body}</p>
                  <MoreLink to={item.to} className="mt-6">
                    {item.cta}
                  </MoreLink>
                </Tile>
              </Reveal>
            ))}
            <Reveal delay={90}>
              <Tile tone="surface" className="h-full">
                <h3 className="a-headline text-[2.2rem] leading-[1.05]">
                  No diagnosis.
                  <span className="block text-foreground/35">No scores.</span>
                </h3>
                <p className="mt-4 text-base text-muted-foreground">Patterns are yours to read. Nobody ranks you.</p>
              </Tile>
            </Reveal>
            <Reveal delay={180} className="md:col-span-2 lg:col-span-1">
              <Tile tone="ink" className="h-full">
                <h3 className="a-headline text-[2.2rem] leading-[1.05]">
                  <span className="a-gradient-dark">Private</span> by default.
                </h3>
                <p className="mt-4 flex-1 text-base text-ink-foreground/70">
                  Nothing is saved unless you choose to save it. Nobody at a school sees an individual entry.
                </p>
                <MoreLink to="/privacy" className="mt-6 text-lilac">
                  Read the privacy page
                </MoreLink>
              </Tile>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 05 — SCHOOLS: dark chapter, product scales in */}
      <section aria-label="Inside VOYCE for schools" className="bg-ink a-ink-plain overflow-hidden py-28 text-ink-foreground sm:py-40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-lg font-semibold tracking-tight text-apricot">VOYCE for Schools</p>
            <Headline className="mt-3">
              The whole picture. <span className="a-gradient-dark">Never one student.</span>
            </Headline>
            <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-[1.5] text-ink-foreground/65 sm:text-xl">
              Staff see grouped participation and patterns. Individual entries stay private, always.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <PillLink to="/schools" tone="light">Explore VOYCE for Schools</PillLink>
              <MoreLink to="/teachers" className="text-lilac">For teachers</MoreLink>
            </div>
          </Reveal>
          <ScaleIn className="mx-auto mt-16 max-w-4xl sm:mt-20" from={0.84}>
            <BrowserFrame label="VOYCE · schools (preview)" className="border-ink-foreground/10 text-foreground">
              <div className="w-[560px] [zoom:0.54] min-[400px]:[zoom:0.6] sm:[zoom:0.94] md:w-auto md:[zoom:1]">
                <SchoolDashboardScreen />
              </div>
            </BrowserFrame>
          </ScaleIn>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-foreground/55">
            Sample numbers for illustration only. VOYCE has no school case studies yet.
          </p>
        </div>
      </section>

      {/* 06 — AUDIENCES: bento, one accent per tile */}
      <section aria-label="Who VOYCE is for" className="bg-surface py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Headline>Made for everyone in the room.</Headline>
            <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-muted-foreground sm:text-xl">
              Four people. Different needs. One calm place.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {AUDIENCES.map((a, i) => {
              const tone = AUDIENCE_TONES[i];
              const onDark = tone === "plum" || tone === "ink";
              return (
                <Reveal key={a.title} delay={(i % 2) * 90}>
                  <Tile tone={tone} className="h-full min-h-[300px] justify-between">
                    <div>
                      <p className={onDark ? "text-base font-semibold text-ink-foreground/65" : "text-base font-semibold text-primary"}>
                        For {a.title.toLowerCase()}
                      </p>
                      <h3 className="a-headline mt-3 max-w-md text-[2rem] leading-[1.1] sm:text-[2.3rem]">{a.line}</h3>
                    </div>
                    <MoreLink to={a.to} className={onDark ? "mt-10 text-lilac" : "mt-10"}>
                      {a.cta}
                    </MoreLink>
                  </Tile>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 07 — TRUST */}
      <section aria-label="Trust and safety" className="bg-background py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-lg font-semibold tracking-tight text-primary">Trust</p>
            <Headline className="mt-3">What we will and won&rsquo;t do with your inner life.</Headline>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-[1.5] text-muted-foreground sm:text-xl">
              No fabricated statistics. No partner logos we haven&rsquo;t earned. No promises of anonymity we
              can&rsquo;t technically keep.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {TRUST.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 70} className="border-t border-border pt-6">
                <h3 className="a-headline text-[1.4rem] leading-tight">{t.title}</h3>
                <p className="mt-2.5 text-base leading-relaxed text-muted-foreground">{t.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 flex flex-wrap gap-x-8 gap-y-3">
            <MoreLink to="/privacy">Read the privacy page</MoreLink>
            <MoreLink to="/safety">Read the safety page</MoreLink>
          </Reveal>
        </div>
      </section>

      {/* 08 — CLOSING */}
      <section className="bg-ink a-ink-plain py-32 text-ink-foreground sm:py-44">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <Headline>
            Start with one <span className="a-gradient-dark">honest sentence.</span>
          </Headline>
          <p className="mx-auto mt-6 max-w-xl text-lg font-medium leading-relaxed text-ink-foreground/65 sm:text-xl">
            Two minutes is enough to begin. Nothing you write is shared, scored or shown to your school.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <PillLink to="/start-here" tone="light">Start here</PillLink>
            <MoreLink to="/schools" className="text-lilac">Talk to VOYCE about your school</MoreLink>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
