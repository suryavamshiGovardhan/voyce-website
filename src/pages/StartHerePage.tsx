/**
 * Start Here — the first-time visitor's page.
 * No account, nothing saved, three small steps, in the calm site design.
 */
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, PenLine, Leaf, Lock, ShieldCheck } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, QuietCard } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";

const PROMPTS = [
  "What is one thing that took more energy than usual today?",
  "If today had a weather, what would it be — and why?",
  "What is something you didn't say today, but wanted to?",
];

const STEPS = [
  {
    n: "01",
    icon: BookOpen,
    title: "Read a real story",
    body: "A short, anonymous story from someone your age. Most people find one that sounds a little like them.",
    cta: "Read a story",
    to: "/stories",
  },
  {
    n: "02",
    icon: PenLine,
    title: "Answer one private question",
    body: "Right here on this page. It stays on your screen — nothing is sent or saved.",
    cta: "Answer below",
    to: "#reflect",
  },
  {
    n: "03",
    icon: Leaf,
    title: "Take one small next step",
    body: "A two-minute practice you can use tonight, or a clear route to a real person if you need one.",
    cta: "See practices",
    to: "/tools",
  },
];

export default function StartHerePage() {
  const [promptIndex, setPromptIndex] = useState(0);
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  return (
    <PageShell
      title="Start here — your first two minutes"
      description="New to VOYCE? Read a real story, answer one private question, and leave with one small next step. No account, nothing saved, no diagnosis."
      keywords="start here, student wellbeing, private reflection, no account"
      canonical="/start-here"
    >
      {/* Intro */}
      <Section className="pb-10 pt-16 sm:pb-14 sm:pt-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>Start here</Eyebrow>
          <StatementHeading as="h1" className="text-4xl sm:text-5xl">
            Two minutes. Three small steps. No account.
          </StatementHeading>
          <Lede>
            VOYCE is a calm place to put a feeling into words. You don&rsquo;t have to explain your whole life, and you
            don&rsquo;t have to sign up. Nothing is saved unless you choose to save it.
          </Lede>
          <ul className="mt-7 flex flex-wrap gap-2 text-sm text-foreground/75">
            {["No account", "Nothing saved", "No diagnosis", "No scores"].map((t) => (
              <li key={t} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Three steps */}
      <Section tone="muted" className="py-14 sm:py-20" ariaLabel="Three small steps">
        <ol className="grid gap-5 md:grid-cols-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const inner = (
              <>
                <div className="flex items-center gap-3">
                  <span className="font-display text-sm text-primary">{step.n}</span>
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
                <h2 className="mt-4 text-xl font-medium tracking-tight">{step.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                  {step.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </>
            );
            return (
              <li key={step.n}>
                <Reveal delay={i * 80} className="h-full">
                  {step.to.startsWith("#") ? (
                    <a href={step.to} className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40">
                      {inner}
                    </a>
                  ) : (
                    <Link to={step.to} className="group flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40">
                      {inner}
                    </Link>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Inline private reflection */}
      <Section id="reflect" className="scroll-mt-20 py-16 sm:py-24" ariaLabel="One private question">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <Eyebrow>One private question</Eyebrow>
            <QuietCard className="p-6 sm:p-8">
              {!done ? (
                <>
                  <label htmlFor="reflection" className="block font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                    {PROMPTS[promptIndex]}
                  </label>
                  <textarea
                    id="reflection"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    rows={4}
                    placeholder="One honest sentence is enough."
                    className="mt-6 w-full resize-y rounded-xl border border-border bg-background p-4 text-base leading-relaxed outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  />
                  <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                    This stays on your screen. It is not sent, saved or shown to anyone.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button type="button" className="h-11 rounded-full px-6" disabled={!text.trim()} onClick={() => setDone(true)}>
                      I&rsquo;ve written it
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="h-11 rounded-full px-6"
                      onClick={() => setPromptIndex((i) => (i + 1) % PROMPTS.length)}
                    >
                      Try a different question
                    </Button>
                  </div>
                </>
              ) : (
                <div aria-live="polite">
                  <p className="font-display text-2xl leading-snug tracking-tight sm:text-3xl">
                    That&rsquo;s the whole skill: noticing, then naming.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    You just turned a feeling into a sentence. Doing that a little earlier, a little more often, is what
                    makes hard weeks easier to handle. Your words were not sent anywhere.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="h-11 rounded-full px-6">
                      <Link to="/tools">
                        Try a two-minute practice <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 rounded-full px-6">
                      <Link to="/stories">Read a story</Link>
                    </Button>
                  </div>
                  <button
                    type="button"
                    className="mt-5 text-sm text-primary underline-offset-4 hover:underline"
                    onClick={() => {
                      setText("");
                      setDone(false);
                      setPromptIndex((i) => (i + 1) % PROMPTS.length);
                    }}
                  >
                    Clear it and answer another
                  </button>
                </div>
              )}
            </QuietCard>
          </Reveal>
        </div>
      </Section>

      {/* Safety + what this is not */}
      <Section tone="muted" className="py-14 sm:py-20" ariaLabel="What VOYCE is and is not">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <QuietCard className="h-full">
              <ShieldCheck className="h-6 w-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-lg font-medium tracking-tight">What VOYCE is — and isn&rsquo;t</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                VOYCE is a reflection and learning space. It is not therapy, not a medical service and not a diagnosis.
                If you are in danger or thinking about hurting yourself, please talk to a trusted adult or a local
                emergency service now.
              </p>
              <Link to="/safety" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Read the safety page <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </QuietCard>
          </Reveal>
          <Reveal delay={80}>
            <QuietCard className="h-full">
              <h2 className="text-lg font-medium tracking-tight">Want to keep your reflections?</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Only if you want to. A free account lets you save private journal entries and see your own patterns
                over time. You can explore everything else without one.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <Link to="/signup">Create a free account</Link>
                </Button>
                <Button asChild variant="ghost" className="rounded-full">
                  <Link to="/login">Sign in</Link>
                </Button>
              </div>
            </QuietCard>
          </Reveal>
        </div>
      </Section>

      {/* Schools / parents / teachers */}
      <Section className="py-14 sm:py-20" ariaLabel="For schools, parents and teachers">
        <Reveal className="max-w-3xl">
          <Eyebrow>Not a student?</Eyebrow>
          <StatementHeading>Start from where you stand.</StatementHeading>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { title: "Parents", line: "Understand the signals behind the silence.", to: "/parents" },
            { title: "Teachers", line: "Notice patterns, start better conversations.", to: "/teachers" },
            { title: "Schools", line: "VOYCE for Schools — student wellbeing, kept private.", to: "/schools" },
          ].map((a) => (
            <Link key={a.title} to={a.to} className="group rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40">
              <h3 className="font-display text-xl tracking-tight">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.line}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
                Explore <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Looking for AI, robotics or coding programmes? That&rsquo;s{" "}
          <Link to="/ai4schools" className="text-primary underline-offset-4 hover:underline">
            AI4Schools
          </Link>
          , a separate programme from the same team.
        </p>
      </Section>
    </PageShell>
  );
}
