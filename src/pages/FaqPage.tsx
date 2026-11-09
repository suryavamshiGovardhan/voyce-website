import { Link } from "react-router-dom";
import { NextStep, LeaveWith } from "@/components/site/value";
import PageShell from "@/components/site/PageShell";
import { Section, Eyebrow, StatementHeading, Lede, Reveal } from "@/components/site/primitives";

const FAQS = [
  {
    q: "Is VOYCE therapy?",
    a: "No. VOYCE is a reflective, educational wellbeing space. It does not diagnose, treat, or replace a therapist, counsellor, or doctor.",
  },
  {
    q: "Can my school or my parents read what I write?",
    a: "No. Journal entries and check-ins are private to your account. Schools only ever see aggregated, non-identifying activity — never an individual entry.",
  },
  {
    q: "Does VOYCE score or rank me?",
    a: "No. There is no risk score, no diagnosis label, and no leaderboard of feelings. You see your own patterns; nobody else grades them.",
  },
  {
    q: "What happens if I write something that worries you?",
    a: "VOYCE is not monitored in real time and is not an emergency service. If you are in danger, contact local emergency services or a helpline such as Tele MANAS (14416) in India.",
  },
  {
    q: "How old do I need to be?",
    a: "13 or older, with a parent or guardian's knowledge if you are under 18.",
  },
  {
    q: "Can I delete my data?",
    a: "Yes. You can delete your account and everything stored with it at any time from your profile, or by emailing voycexx@gmail.com.",
  },
  {
    q: "Is VOYCE free?",
    a: "The student check-in, reflection, and resource library are free to use. School pilots are arranged directly with us.",
  },
  {
    q: "Who built VOYCE?",
    a: "VOYCE was founded by Suryavamshi Govardhan. There is no anonymous team behind it — you can reach the founder directly.",
  },
];

export default function FaqPage() {
  return (
    <PageShell
      title="FAQ"
      description="Real questions about VOYCE, answered plainly: privacy, age limits, what schools can see, and what VOYCE deliberately does not do."
      keywords="VOYCE FAQ, student wellbeing questions, privacy, is VOYCE therapy"
      canonical="/faq"
    >
      <Section hero className="pt-16 sm:pt-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>FAQ</Eyebrow>
          <StatementHeading as="h1" className="text-4xl sm:text-5xl">
            Real questions, plain answers.
          </StatementHeading>
          <Lede>
            If your question is not here, email{" "}
            <a href="mailto:voycexx@gmail.com" className="text-primary underline underline-offset-4">
              voycexx@gmail.com
            </a>
            .
          </Lede>
        </Reveal>
        <Reveal delay={160}>
          <LeaveWith className="mt-14" items={["Straight answers on privacy, age and cost", "What VOYCE is not", "Who to contact when you are unsure"]} />
        </Reveal>
      </Section>

      <Section tone="muted">
        <dl className="grid gap-6 md:grid-cols-2">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 40} className="rounded-2xl border border-border bg-background p-6">
              <dt className="font-display text-lg leading-snug">{f.q}</dt>
              <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
            </Reveal>
          ))}
        </dl>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <StatementHeading>Still unsure?</StatementHeading>
          <Lede>
            Read the <Link to="/safety" className="text-primary underline underline-offset-4">safety boundaries</Link>{" "}
            or <Link to="/contact" className="text-primary underline underline-offset-4">get in touch</Link>.
          </Lede>
        </Reveal>
      </Section>
      <NextStep
        title="Still have a question?"
        body="Write to us — a person on the team will reply."
        primary={{ to: "/contact", label: "Get in touch" }}
        secondary={{ to: "/safety", label: "Read safety boundaries" }}
      />
    </PageShell>
  );
}
