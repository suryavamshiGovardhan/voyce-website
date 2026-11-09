import { Link } from "react-router-dom";
import PageShell from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, QuietCard } from "@/components/site/primitives";
import { BrowserFrame, DashboardScreen } from "@/components/site/ProductScreens";

const GROUPS = [
  {
    outcome: "Understand yourself",
    promise: "Turn a vague feeling into something you can look at.",
    features: [
      { name: "Daily check-ins", helps: "Notice where you are before the day decides for you.", to: "/journal" },
      { name: "Private reflection", helps: "Write one honest line without an audience.", to: "/journal" },
      { name: "Journal history", helps: "Read your own weeks back and spot what repeats.", to: "/journal/history" },
      { name: "Emotional patterns", helps: "See your steadier and harder days side by side.", to: "/dashboard" },
    ],
  },
  {
    outcome: "Build better habits",
    promise: "Small, repeatable practices that survive a real school week.",
    features: [
      { name: "Guided practices", helps: "Finish a grounding or breathing practice in under five minutes.", to: "/tools" },
      { name: "The VOYCE path", helps: "Move through stages at your pace, unlocking as you go.", to: "/path" },
      { name: "Workbook exercises", helps: "Work through a hard period with structure instead of willpower.", to: "/workbook" },
      { name: "Progress you can see", helps: "Real tracking of what you've actually done — no fake bars.", to: "/dashboard" },
    ],
  },
  {
    outcome: "Connect with support",
    promise: "A short route from noticing to a person who can help.",
    features: [
      { name: "Resource library", helps: "Find reading that matches what you're carrying today.", to: "/resources" },
      { name: "Support pathways", helps: "Know which next step fits which situation.", to: "/safety" },
      { name: "Surya, the AI guide", helps: "Ask questions in plain language, without being diagnosed.", to: "/start-here" },
      { name: "Crisis routes", helps: "Helplines and escalation steps, always one tap away.", to: "/safety" },
    ],
  },
  {
    outcome: "Help schools understand",
    promise: "Insight for staff that never costs a student their privacy.",
    features: [
      { name: "Aggregated class insight", helps: "See engagement and trends without reading anyone's words.", to: "/teachers" },
      { name: "Conversation support", helps: "Open a wellbeing conversation without interrogating.", to: "/teachers" },
      { name: "School programmes", helps: "Run VOYCE across year groups with training and materials.", to: "/schools" },
      { name: "Safeguarding pathways", helps: "Clear escalation routes documented for staff.", to: "/safety" },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <PageShell
      title="Features grouped by what they help you do"
      description="VOYCE features organised by human outcome: understand yourself, build better habits, connect with support, and help schools understand — with honest limits stated throughout."
      keywords="voyce features, wellbeing check-in, reflection journal, school wellbeing dashboard"
      canonical="/features"
    >
      <Section className="pt-16 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Eyebrow>Features</Eyebrow>
            <StatementHeading as="h1" className="text-4xl sm:text-5xl">
              Not a list of thirty cards. Four things you can actually accomplish.
            </StatementHeading>
            <Lede>
              Every feature below is grouped by the outcome it serves. If a feature can&rsquo;t answer &ldquo;what does
              this help someone do?&rdquo;, it doesn&rsquo;t belong in VOYCE.
            </Lede>
          </Reveal>
          <Reveal delay={120}>
            <BrowserFrame label="VOYCE · dashboard (preview)">
              <DashboardScreen />
            </BrowserFrame>
          </Reveal>
        </div>
      </Section>

      {GROUPS.map((group, gi) => (
        <Section key={group.outcome} tone={gi % 2 === 0 ? "muted" : "default"}>
          <Reveal className="max-w-2xl">
            <Eyebrow>{`0${gi + 1}`}</Eyebrow>
            <StatementHeading>{group.outcome}</StatementHeading>
            <Lede>{group.promise}</Lede>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {group.features.map((f, i) => (
              <Reveal key={f.name} delay={i * 70}>
                <Link to={f.to} className="block h-full">
                  <QuietCard interactive className="h-full">
                    <h3 className="text-lg font-medium tracking-tight">{f.name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{f.helps}</p>
                  </QuietCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Section tone="ink" className="py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <StatementHeading className="text-ink-foreground">See it working, not described.</StatementHeading>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-8">
              <Link to="/start-here">Start with VOYCE</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-ink-foreground/25 bg-transparent px-8 text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
            >
              <Link to="/how-it-works">How it works</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
