import { Link } from "react-router-dom";
import { Check, X, ShieldCheck, UserCheck, Trash2, EyeOff } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Section, Eyebrow, StatementHeading, Lede, Reveal } from "@/components/site/primitives";
import { PageHero, NextStep } from "@/components/site/value";
import { AskReflect } from "@/components/site/Interactive";

const IS = [
  "A private place for your child to check in and put feelings into words",
  "Plain-language reading on stress, sleep, overthinking and friendship",
  "Short practices that fit between classes",
  "Clear signposts to real people when something is serious",
];
const IS_NOT = [
  "A diagnosis, a screening test or a score of your child",
  "A way for parents or schools to read your child's entries",
  "Therapy, or a replacement for a counsellor or doctor",
  "An emergency service",
];

const SWAPS = [
  { instead: "How was school?", tryThis: "What was the heaviest part of today?" },
  { instead: "Why are you always on your phone?", tryThis: "What's been taking up your head lately?" },
  { instead: "You'll be fine, don't worry.", tryThis: "That sounds hard. Do you want ideas, or just someone to listen?" },
  { instead: "What's wrong with you?", tryThis: "I've noticed you seem quieter. I'm here whenever you want to talk." },
];

const SIGNALS = [
  { title: "Pulling away", body: "Shorter answers, closed doors, plans quietly cancelled." },
  { title: "Sleep changes", body: "Late nights or early waking that isn't about exams or the phone." },
  { title: "A shorter fuse", body: "Irritation over small things can be something bigger with no name yet." },
  { title: "Over-functioning", body: "Doing everything perfectly can be a way of not being asked how they are." },
];

const WORRY = [
  {
    label: "They've gone quiet",
    reply:
      "Quiet is often protective, not hostile. A low-pressure moment — a drive, a walk, cooking together — tends to open more than a sit-down talk.",
    next: { to: "/guides", label: "Read the guide on starting a conversation" },
  },
  {
    label: "Exam pressure",
    reply:
      "Pressure lands harder when a young person feels their worth is the result. Saying out loud that you care how they are, not just how they score, helps.",
    next: { to: "/stress", label: "Understand stress in plain words" },
  },
  {
    label: "Phone & sleep",
    reply:
      "Screens and sleep are often a symptom as much as a cause. Ask what keeps them up before setting rules — the answer may surprise you.",
    next: { to: "/article/overthinking-at-night", label: "Read: overthinking at night" },
  },
  {
    label: "Something feels serious",
    reply:
      "Trust that feeling. Please talk to a counsellor, doctor or Tele MANAS (14416). If anyone is in immediate danger, contact emergency services now.",
    next: { to: "/safety", label: "See support routes" },
  },
];

export default function ParentsPage() {
  return (
    <PageShell
      title="VOYCE for parents"
      description="What VOYCE is and isn't, how your child's privacy is protected, and simple ways to start a conversation at home. No diagnosis, no scoring."
      keywords="how to talk to your teenager, teenage wellbeing India, parent guide student stress"
      canonical="/parents"
    >
      <PageHero
        align="center"
        eyebrow="For parents & guardians"
        title={<>Your child doesn&rsquo;t need a diagnosis <span className="text-primary">to need a conversation.</span></>}
        lede="VOYCE gives young people a private place to notice how they feel — and gives you plain, practical ways to talk at home. Here is exactly what it does, and what it never does."
        primary={{ to: "/guides", label: "Read the parent guides" }}
        secondary={{ to: "#privacy", label: "How privacy & consent work" }}
      />

      <Section className="py-16 sm:py-20">
        <Reveal className="mb-10 max-w-2xl">
          <Eyebrow>Straight answers</Eyebrow>
          <StatementHeading>What VOYCE is — and what it is not.</StatementHeading>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="v-card h-full p-7">
              <h3 className="text-lg font-medium">VOYCE is</h3>
              <ul className="mt-5 space-y-3">
                {IS.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="v-card h-full bg-surface p-7">
              <h3 className="text-lg font-medium">VOYCE is not</h3>
              <ul className="mt-5 space-y-3">
                {IS_NOT.map((t) => (
                  <li key={t} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" aria-hidden /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted" className="py-16 sm:py-20">
        <Reveal className="mb-10 max-w-2xl">
          <Eyebrow>Talking at home</Eyebrow>
          <StatementHeading>Small swaps that keep the door open.</StatementHeading>
          <Lede>Most honest answers come from smaller, kinder questions — and from not fixing things straight away.</Lede>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {SWAPS.map((s, i) => (
            <Reveal key={s.instead} delay={i * 90}>
              <div className="v-card v-card-hover h-full p-6">
                <p className="text-sm text-muted-foreground line-through decoration-destructive/50">&ldquo;{s.instead}&rdquo;</p>
                <p className="mt-3 font-display text-xl leading-snug text-foreground">&ldquo;{s.tryThis}&rdquo;</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>Quiet signals</Eyebrow>
              <StatementHeading>Worth noticing over a few weeks — not a checklist.</StatementHeading>
              <Lede>None of these mean something is wrong on their own. Together, they are a reason for a gentler conversation.</Lede>
            </Reveal>
            <ol className="mt-8 space-y-4 border-l-2 border-primary/20 pl-6">
              {SIGNALS.map((s, i) => (
                <Reveal as="li" key={s.title} delay={i * 90} variant="left" className="relative">
                  <span className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background" aria-hidden />
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
          <AskReflect
            eyebrow="What's on your mind?"
            question="What are you most worried about right now?"
            options={WORRY}
            allowOwnWords={false}
          />
        </div>
      </Section>

      <Section id="privacy" tone="muted" className="py-16 sm:py-20">
        <Reveal className="mb-10 max-w-2xl">
          <Eyebrow>Privacy & consent</Eyebrow>
          <StatementHeading>Your child&rsquo;s words stay theirs.</StatementHeading>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: <UserCheck className="h-5 w-5" />, t: "Age & consent", b: "Accounts are for 13+. For 13–17, a parent or guardian must know and agree. Under 13 can't sign up." },
            { icon: <EyeOff className="h-5 w-5" />, t: "No reading entries", b: "Parents and schools can't read a young person's journal or check-ins." },
            { icon: <ShieldCheck className="h-5 w-5" />, t: "No scoring", b: "VOYCE doesn't diagnose, score or risk-rank anyone." },
            { icon: <Trash2 className="h-5 w-5" />, t: "Delete any time", b: "An account and everything in it can be deleted whenever they choose." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 90}>
              <div className="v-card group h-full p-6">
                <span className="v-chip mb-4">{c.icon}</span>
                <h3 className="font-medium">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-sm text-muted-foreground">
          Full detail in the <Link to="/privacy" className="v-link font-medium text-primary">privacy policy</Link> and{" "}
          <Link to="/safety" className="v-link font-medium text-primary">safety page</Link>.
        </Reveal>
      </Section>

      <NextStep
        title="Start with the reading, not the intervention."
        body="Short, non-clinical guides written to be used the same evening."
        primary={{ to: "/guides", label: "Open the parent guides" }}
        secondary={{ to: "/faq", label: "Read the FAQ" }}
      />
    </PageShell>
  );
}
