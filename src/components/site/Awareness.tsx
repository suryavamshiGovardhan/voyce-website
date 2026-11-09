import { ExternalLink, Phone } from "lucide-react";
import { Reveal, Section, Eyebrow, StatementHeading, Lede } from "@/components/site/primitives";

/**
 * Sourced awareness block for school leaders and teachers.
 * Every figure below was checked against the official source linked in its footnote.
 * Keep wording calm and non-graphic; do not add figures without an official source.
 */
const FACTS = [
  {
    figure: "1 in 7",
    text: "young people aged 10–19 worldwide experience a mental disorder.",
    source: "WHO, Mental health of adolescents fact sheet (updated 1 Sept 2025)",
    href: "https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health",
  },
  {
    figure: "7.3%",
    text: "of adolescents aged 13–17 surveyed in India had a diagnosable mental disorder.",
    source: "NIMHANS, National Mental Health Survey of India 2015–16 (adolescent sample, 4 states)",
    href: "https://indianmhs.nimhans.ac.in/phase1/nmhs-results.php",
  },
  {
    figure: "14,488",
    text: "students in India died by suicide in 2024 — 8.5% of all suicides recorded that year.",
    source: "NCRB, Accidental Deaths & Suicides in India 2024, Table 2.6",
    href: "https://www.ncrb.mha.gov.in/uploads/files/1ADSIPublication-2024.pdf",
  },
  {
    figure: "Preventable",
    text: "WHO lists fostering socio-emotional life skills in adolescents as a key, evidence-based way to prevent suicide.",
    source: "WHO, Suicide fact sheet — LIVE LIFE approach (updated 3 Nov 2026)",
    href: "https://www.who.int/news-room/fact-sheets/detail/suicide",
  },
];

export function SchoolAwareness() {
  return (
    <Section id="why-now" tone="muted" className="py-16 sm:py-24">
      <Reveal className="max-w-3xl">
        <Eyebrow>Why schools matter</Eyebrow>
        <StatementHeading>Protecting students starts with awareness — and it can be taught.</StatementHeading>
        <Lede>
          Most young people who struggle are never asked. The official figures below are a reason for calm, early,
          everyday teaching: naming feelings, asking for help, and knowing who to go to. Wellbeing is much more than any
          one statistic.
        </Lede>
      </Reveal>
      <ol className="mt-12 grid gap-5 sm:grid-cols-2">
        {FACTS.map((f, i) => (
          <Reveal as="li" key={f.figure} delay={i * 100}>
            <div className="v-card h-full p-7">
              <p className="font-display text-4xl tracking-tight text-primary sm:text-5xl">{f.figure}</p>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/85">{f.text}</p>
              <a
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="v-link mt-5 inline-flex items-start gap-1.5 text-xs leading-relaxed text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="mt-0.5 h-3 w-3 shrink-0" aria-hidden />
                Source: {f.source}
              </a>
            </div>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-8">
        <p className="text-xs leading-relaxed text-muted-foreground">
          NCRB figures are police-recorded cases and are widely understood to under-count. NIMHANS adolescent estimates come
          from a pilot sample. We show these to support prevention, not to alarm.
        </p>
        <div className="mt-6 flex gap-3 rounded-2xl border border-primary/20 bg-card p-5 text-sm leading-relaxed">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
          <p>
            If a student — or you — needs to talk now, <strong>Tele MANAS</strong> is the Government of India&rsquo;s free,
            24×7 mental health helpline: call <a href="tel:14416" className="font-medium text-primary">14416</a> or{" "}
            <a href="tel:18008914416" className="font-medium text-primary">1-800-891-4416</a>.{" "}
            <a href="https://telemanas.mohfw.gov.in/about" target="_blank" rel="noopener noreferrer" className="v-link text-muted-foreground">
              (MoHFW)
            </a>{" "}
            In an emergency, contact local emergency services.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
