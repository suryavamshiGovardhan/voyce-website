import { Link } from "react-router-dom";
import { ArrowRight, Wind, Moon, BookOpen, Lock, LifeBuoy } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Section, Eyebrow, StatementHeading, Lede, Reveal } from "@/components/site/primitives";
import { PageHero, FeatureGrid, NextStep } from "@/components/site/value";
import { AskReflect } from "@/components/site/Interactive";
import { episodes } from "@/data/unheardMindEpisodes";

const WEEK = [
  {
    label: "Tired",
    reply:
      "Tired often means you have been carrying more than you've said out loud. Rest counts as progress — even ten slower minutes tonight.",
    next: { to: "/tools", label: "Try a 1-minute breathing reset" },
  },
  {
    label: "Anxious",
    reply:
      "Anxiety is your body trying to protect you a little too hard. Slowing your breath is the fastest way to tell it you're safe right now.",
    next: { to: "/stress", label: "See what stress does in the body" },
  },
  {
    label: "Overthinking",
    reply:
      "When thoughts loop, writing one of them down usually makes it smaller. You don't have to solve it — just get it out of your head.",
    next: { to: "/article/overthinking-at-night", label: "Read: overthinking at night" },
  },
  {
    label: "Lonely",
    reply:
      "Feeling alone in a full classroom is more common than it looks. Reading someone else's story can be a quiet first reminder you aren't the only one.",
    next: { to: "/stories", label: "Read a short story" },
  },
  {
    label: "Okay, actually",
    reply:
      "Good — okay weeks are worth noticing too. What helped? Naming it makes it easier to find again on a harder day.",
    next: { to: "/start-here", label: "Note it in a private check-in" },
  },
  {
    label: "Not sure",
    reply:
      "Not knowing is a real answer. Many people only work out how they feel after a couple of questions — that's what Start here is for.",
    next: { to: "/start-here", label: "Take the 2-minute check-in" },
  },
];

export default function StudentsPage() {
  const picks = episodes.slice(0, 3);
  return (
    <PageShell
      title="VOYCE for students"
      description="A private place to check in, put a feeling into words and find one small next step. No account needed to start."
      keywords="student wellbeing, exam stress, overthinking, emotional awareness for students"
      canonical="/students"
    >
      <PageHero
        eyebrow="For students · no account needed"
        title={<>Had a heavy week? <span className="text-primary">Say it in one word first.</span></>}
        lede="You don't have to explain everything. Pick a word, get a gentle response, and take one small step — privately, in about two minutes."
        primary={{ to: "/start-here", label: "Try the 2-minute check-in" }}
        note="Nothing you pick here is saved or sent."
        aside={<AskReflect eyebrow="Right now" question="How has this week felt, in one word?" options={WEEK} allowOwnWords />}
      />

      <Section className="py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <Eyebrow>Stories that sound like you</Eyebrow>
          <StatementHeading>Someone else has felt this. Read their version.</StatementHeading>
          <Lede>Short episodes from The Unheard Mind — a story first, then the psychology, then one honest takeaway.</Lede>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {picks.map((ep, i) => (
            <Reveal key={ep.id} delay={i * 100} variant="up">
              <Link
                to={`/series/${ep.id}`}
                className="v-card v-card-hover group flex h-full flex-col p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{ep.number} · {ep.tag}</span>
                <h3 className="mt-3 font-display text-xl leading-snug tracking-tight">{ep.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{ep.hook}</p>
                <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                  Read · about 10 min <ArrowRight className="v-arrow ml-1.5 h-4 w-4" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="muted" className="py-16 sm:py-20">
        <Reveal className="mb-10 max-w-2xl">
          <Eyebrow>Fits between classes</Eyebrow>
          <StatementHeading>Small things you can do today.</StatementHeading>
        </Reveal>
        <FeatureGrid
          items={[
            { icon: <Wind className="h-5 w-5" />, title: "Breathe for one minute", body: "Follow a slow circle before an exam or after a hard conversation.", to: "/tools", cta: "Open practices" },
            { icon: <Moon className="h-5 w-5" />, title: "When your mind won't switch off", body: "Why thoughts get louder at night, and what quietens them.", to: "/article/overthinking-at-night", cta: "Read" },
            { icon: <BookOpen className="h-5 w-5" />, title: "Understand stress", body: "What actually happens in your body — and the tools that help.", to: "/stress", cta: "Learn" },
          ]}
        />
      </Section>

      <Section className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal variant="left">
            <Eyebrow>Who sees what you write?</Eyebrow>
            <p className="font-display text-6xl tracking-tight text-primary sm:text-7xl">Only you.</p>
            <Lede>Teachers and schools never see an individual entry. You can delete everything, any time.</Lede>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Start here works without an account — nothing is stored.",
              "If you sign up, your check-ins and journal stay private to you.",
              "Schools only ever see grouped, non-identifying activity.",
              "No data is sold. No adverts are built from your feelings.",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 90} variant="right">
                <div className="v-card flex h-full gap-3 p-5 text-sm leading-relaxed text-foreground/85">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> {t}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal className="mt-10">
          <div className="flex gap-3 rounded-2xl border border-destructive/20 bg-destructive/5 p-5 text-sm leading-relaxed">
            <LifeBuoy className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden />
            <p>
              VOYCE isn&rsquo;t emergency support. If you&rsquo;re in danger or thinking of harming yourself, call
              Tele MANAS on 14416 (India) or local emergency services, and tell one adult you trust.{" "}
              <Link to="/safety" className="v-link font-medium">All support routes</Link>
            </p>
          </div>
        </Reveal>
      </Section>

      <NextStep
        title="Two minutes. No account. Just you."
        body="Three small questions and a reflection that stays on your device."
        primary={{ to: "/start-here", label: "Start here" }}
        secondary={{ to: "/how-it-works", label: "How VOYCE works" }}
      />
    </PageShell>
  );
}
