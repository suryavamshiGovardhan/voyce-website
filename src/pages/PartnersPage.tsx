import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { NextStep, LeaveWith } from "@/components/site/value";
import PageShell from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Section, Eyebrow, StatementHeading, Lede, Reveal } from "@/components/site/primitives";

const WHO = [
  { title: "Schools and colleges", body: "Run a small, honest pilot with one year group. No procurement theatre, no dashboards that surveil students." },
  { title: "Counsellors and clinicians", body: "Help us keep the language non-clinical and the escalation paths real." },
  { title: "Writers and educators", body: "Contribute to the resource library — essays, practices, and translations." },
  { title: "Community organisations", body: "Bring VOYCE to groups who would not otherwise have a private place to reflect." },
];

export default function PartnersPage() {
  return (
    <PageShell
      title="Partner with VOYCE"
      description="Work with VOYCE: school pilots, clinical review, contributed writing, and community partnerships. Early-stage, honest about it, and open to collaborators."
      keywords="partner with VOYCE, school wellbeing partnership, contribute writing wellbeing"
      canonical="/partners"
    >
      <Section hero className="pt-16 sm:pt-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>Partners</Eyebrow>
          <StatementHeading as="h1" className="text-4xl sm:text-5xl">
            We would rather have four honest partners than forty logos.
          </StatementHeading>
          <Lede>
            VOYCE is early. We have not run large deployments, and we do not claim to have. If you want to
            build this properly with us, there is room.
          </Lede>
        </Reveal>
        <Reveal delay={160}>
          <LeaveWith className="mt-14" items={["How partnerships with VOYCE work", "Who we are looking to work with", "A direct line to the team"]} />
        </Reveal>
      </Section>

      <Section tone="muted">
        <div className="grid gap-6 md:grid-cols-2">
          {WHO.map((w, i) => (
            <Reveal key={w.title} delay={i * 60} className="rounded-2xl border border-border bg-background p-7">
              <h2 className="font-display text-xl">{w.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="max-w-2xl">
          <StatementHeading>Start a conversation.</StatementHeading>
          <Lede>Email voycexx@gmail.com, or use the contact page. The founder replies.</Lede>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full px-7">
              <Link to="/contact">
                Contact VOYCE <ArrowRight className="v-arrow ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <Link to="/schools">VOYCE for schools</Link>
            </Button>
          </div>
        </Reveal>
      </Section>
    </PageShell>
  );
}
