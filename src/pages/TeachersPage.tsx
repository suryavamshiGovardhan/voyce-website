import { Link } from "react-router-dom";
import { Check, X, Hand, Mail, Users, MessageSquareQuote } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Section, Eyebrow, StatementHeading, Lede, Reveal } from "@/components/site/primitives";
import { PageHero, NextStep } from "@/components/site/value";
import { AskReflect } from "@/components/site/Interactive";

const FORMAT = [
  { min: "0–2 min", title: "Settle", body: "Lights a little lower, phones face down. One slow breath together." },
  { min: "2–5 min", title: "Private check-in", body: "Each student picks a word for today on their own device or paper. Nobody shares unless they want to." },
  { min: "5–8 min", title: "One prompt", body: "Read a single reflective prompt aloud — for example, “What helped you this week?” Silence is fine." },
  { min: "8–10 min", title: "Close & signpost", body: "Remind the class who they can talk to in school, and where the helpline is." },
];

const CAN = ["Class-level participation", "Grouped trends over time", "Which practices were used", "Whether a class-wide dip needs a response"];
const CANNOT = ["Any individual journal entry", "A named student's mood history", "Any private text a student wrote", "Anything that turns wellbeing into surveillance"];

const OPENERS = [
  "I noticed you seemed quieter today. No pressure — I'm around after class if you want to talk.",
  "That sounded like a lot. Do you want help with it, or just someone to listen for a minute?",
  "You don't have to explain everything. Would it help to talk to the counsellor together?",
];

const CLASS = [
  {
    label: "Exam season",
    reply:
      "A short settle at the start of a revision period can lower the temperature for everyone. Keep it optional and keep it brief.",
    next: { to: "/tools", label: "Pick a 1-minute practice to use" },
  },
  {
    label: "A quiet, withdrawn class",
    reply:
      "Quiet often means tired, not disengaged. A low-stakes prompt — read aloud, answered privately — gives students a way in without being put on the spot.",
    next: { to: "/guides", label: "Read the guide for teachers" },
  },
  {
    label: "One student worries me",
    reply:
      "Trust that instinct. Speak with your school counsellor or designated lead first, and follow your school's safeguarding steps. VOYCE is not a crisis tool.",
    next: { to: "/safety", label: "See escalation and support routes" },
  },
];

export default function TeachersPage() {
  return (
    <PageShell
      title="VOYCE for teachers"
      description="A calm 10-minute classroom format, clear privacy boundaries, consent built in, and words for opening a conversation — without becoming a counsellor."
      keywords="classroom wellbeing activity, teacher wellbeing tools India, SEL classroom, student check-in"
      canonical="/teachers"
    >
      <PageHero
        eyebrow="For teachers"
        title={<>Ten quiet minutes at the start of a period. <span className="text-primary">No forms, no scores.</span></>}
        lede="You are not a clinician and VOYCE will never ask you to be one. It gives you a simple classroom routine, the right words, and a clear line for when to hand over."
        primary={{ to: "/contact", label: "Ask about a classroom pilot" }}
        secondary={{ to: "/schools", label: "For school leaders" }}
        aside={
          <div className="v-card p-6 sm:p-7">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-primary">Suggested format · adapt freely</p>
            <ol className="mt-5 space-y-4">
              {FORMAT.map((f, i) => (
                <li key={f.title} className="v-pop flex gap-4" style={{ animationDelay: `${500 + i * 140}ms` }}>
                  <span className="w-16 shrink-0 pt-0.5 text-xs font-medium text-muted-foreground">{f.min}</span>
                  <div>
                    <p className="font-medium">{f.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        }
      />

      <Section className="py-16 sm:py-20">
        <Reveal className="mb-10 max-w-2xl">
          <Eyebrow>The privacy line</Eyebrow>
          <StatementHeading>Grouped insight for you. Private words for them.</StatementHeading>
          <Lede>This line is why students use VOYCE honestly. Say it to your class on day one.</Lede>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="v-card h-full p-7">
              <h3 className="font-medium">What teachers can see</h3>
              <ul className="mt-5 space-y-3">{CAN.map((t) => (<li key={t} className="flex gap-3 text-sm"><Check className="h-4 w-4 shrink-0 text-primary" aria-hidden />{t}</li>))}</ul>
            </div>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <div className="v-card h-full bg-surface p-7">
              <h3 className="font-medium">What teachers can never see</h3>
              <ul className="mt-5 space-y-3">{CANNOT.map((t) => (<li key={t} className="flex gap-3 text-sm"><X className="h-4 w-4 shrink-0 text-destructive" aria-hidden />{t}</li>))}</ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted" className="py-16 sm:py-20">
        <Reveal className="mb-10 max-w-2xl">
          <Eyebrow>Consent in the classroom</Eyebrow>
          <StatementHeading>Optional for every student, every time.</StatementHeading>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { icon: <Hand className="h-5 w-5" />, t: "Opt in, opt out", b: "Any student can skip any activity without explaining why. Nothing is graded." },
            { icon: <Mail className="h-5 w-5" />, t: "Families informed", b: "We recommend a short note home before you start, explaining what VOYCE is and isn't." },
            { icon: <Users className="h-5 w-5" />, t: "Accounts need consent", b: "Student accounts are 13+; for 13–17 a parent or guardian must know and agree." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <div className="v-card group h-full p-6">
                <span className="v-chip mb-4">{c.icon}</span>
                <h3 className="font-medium">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>Words that open, not interrogate</Eyebrow>
              <StatementHeading>Three ways to start the conversation.</StatementHeading>
            </Reveal>
            <div className="mt-8 space-y-4">
              {OPENERS.map((o, i) => (
                <Reveal key={o} delay={i * 100} variant="left">
                  <div className="v-card flex gap-3 p-5">
                    <MessageSquareQuote className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <p className="font-display text-lg leading-snug">&ldquo;{o}&rdquo;</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <AskReflect eyebrow="Your classroom" question="What does your class need most right now?" options={CLASS} allowOwnWords={false} />
        </div>
        <Reveal className="mt-10 text-sm text-muted-foreground">
          Want the bigger picture for your school? See <Link to="/schools#why-now" className="v-link font-medium text-primary">why schools matter</Link>.
        </Reveal>
      </Section>

      <NextStep
        title="Try it with one class first."
        body="Tell us your class and timetable — we'll help you plan a first session."
        primary={{ to: "/contact", label: "Ask about a classroom pilot" }}
        secondary={{ to: "/schools", label: "For school leaders" }}
      />
    </PageShell>
  );
}
