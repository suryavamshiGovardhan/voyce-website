import { Link } from "react-router-dom";
import { NextStep, LeaveWith } from "@/components/site/value";
import PageShell from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, QuietCard } from "@/components/site/primitives";

const STORY = [
  {
    label: "The observation",
    body: "Most young people who struggle are not silent because they lack words. They are silent because saying something has a cost — being managed, being labelled, being watched more closely afterwards.",
  },
  {
    label: "The frustration",
    body: "Existing systems mostly activate at the crisis end: a referral form, a waiting list, a diagnosis. Almost nothing supports the long, ordinary stretch before that, where noticing is still easy and cheap.",
  },
  {
    label: "The idea",
    body: "What if the first listener didn't need to be a person? Not a replacement for people — a place to get the sentence out, so that speaking to a person becomes possible.",
  },
  {
    label: "The prototypes",
    body: "It began as writing: essays, a journal, a series about the parts of ourselves we perform around. Readers replied with the same sentence — I thought I was the only one.",
  },
  {
    label: "What we learned",
    body: "Reflection works when it is short, private, and free of verdicts. The moment something scores you, you start performing for it. So VOYCE never scores anyone.",
  },
  {
    label: "VOYCE today",
    body: "A wellbeing space for students, teachers, parents and schools: check in, reflect, notice your own patterns, and find the next step — including the step of talking to a real person.",
  },
];

const BELIEFS = [
  { title: "Noticing is not weakness", body: "Paying attention early is the cheapest thing anyone can do for their own wellbeing." },
  { title: "Privacy makes honesty possible", body: "The moment a school can read an entry, the entry stops being true. So they can't." },
  { title: "AI organises, humans support", body: "AI helps shape thoughts into something readable. It doesn't diagnose, treat, or pretend to care." },
  { title: "No manufactured proof", body: "No invented statistics, testimonials, partner logos, or certifications. Ever." },
];

export default function AboutPage() {
  return (
    <PageShell
      title="About VOYCE"
      description="Why VOYCE exists: the observation, the frustration with existing systems, the prototypes, and what we refuse to compromise on. Founded by Suryavamshi Govardhan."
      keywords="about VOYCE, Suryavamshi Govardhan, why voyce exists, student wellbeing founder story"
      canonical="/about"
    >
      <Section hero className="pt-16 sm:pt-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>About</Eyebrow>
          <StatementHeading as="h1" className="text-4xl sm:text-5xl">
            VOYCE exists because most struggling happens quietly, and quietly is where help arrives last.
          </StatementHeading>
          <Lede>
            This isn&rsquo;t a mission statement wall. It&rsquo;s the actual sequence of events that led to the thing
            you&rsquo;re looking at.
          </Lede>
        </Reveal>
        <Reveal delay={160}>
          <LeaveWith className="mt-14" items={["Why VOYCE exists and who builds it", "What we believe about student wellbeing", "How we keep it honest and safe"]} />
        </Reveal>
      </Section>

      <Section tone="muted">
        <ol className="grid gap-6 md:grid-cols-2">
          {STORY.map((s, i) => (
            <li key={s.label}>
              <Reveal delay={i * 70} className="h-full">
                <QuietCard className="h-full">
                  <span className="font-display text-sm text-primary">{`0${i + 1}`}</span>
                  <h2 className="mt-3 text-lg font-medium tracking-tight">{s.label}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </QuietCard>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <Reveal>
            <Eyebrow>Founder</Eyebrow>
            <StatementHeading>Suryavamshi Govardhan</StatementHeading>
            <Lede>
              VOYCE was founded and is written by Suryavamshi Govardhan. The essays, the series, and the product
              decisions all come from the same place: an interest in the parts of people that rarely get said aloud.
            </Lede>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/suryavamshi-govardhan" className="text-sm font-medium text-primary hover:underline">
                Full founder profile
              </Link>
              <Link to="/article/why-i-built-voyce" className="text-sm font-medium text-primary hover:underline">
                Why I built VOYCE
              </Link>
              <a
                href="https://www.instagram.com/suryavamshiiii"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary hover:underline"
              >
                Instagram
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="font-display text-2xl tracking-tight">What we refuse to compromise on</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {BELIEFS.map((b) => (
                <QuietCard key={b.title} className="h-full">
                  <h3 className="text-base font-medium tracking-tight">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </QuietCard>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <Reveal className="max-w-3xl">
          <Eyebrow>Where this goes</Eyebrow>
          <StatementHeading>A wellbeing layer schools can actually run.</StatementHeading>
          <Lede>
            Deeper school deployment, regional-language support, better teacher materials, and continued honesty about
            the limits of what software can do for a human being who is struggling.
          </Lede>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="v-sheen h-12 rounded-full px-7">
              <Link to="/contact">Talk to VOYCE</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-7">
              <Link to="/partners">Partner with VOYCE</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
