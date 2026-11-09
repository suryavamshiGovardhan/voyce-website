import PageShell from "@/components/site/PageShell";
import ImmersionTools from "@/components/ImmersionTools";
import BreathWidget from "@/components/engagement/BreathWidget";
import { Reveal, Section, Eyebrow, StatementHeading, Lede } from "@/components/site/primitives";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import { LearnCheck } from "@/components/site/LearnCheck";

export default function ToolsPage() {
  return (
    <PageShell
      title="Calm practices & tools"
      description="Short, guided practices — breathing, grounding, focus and reflection — you can use in a few minutes. No account needed."
      canonical="/tools"
      keywords="breathing exercise, grounding, mindfulness for students, calm practices, VOYCE tools"
    >
      <PageHero
        eyebrow="Practices · no account needed"
        title={<>Small practices that <span className="text-primary">change how the next hour feels.</span></>}
        lede="Each tool takes between one and ten minutes. Try one now, notice what shifts, and come back when you need it — before an exam, after a hard day, or when your mind won't slow down."
        primary={{ to: "#breathe", label: "Try one breath cycle" }}
        secondary={{ to: "/start-here", label: "Start a private check-in" }}
        aside={
          <LeaveWith
            compact
            items={[
              "A breathing rhythm you can use anywhere",
              "A quick way to notice what you are feeling",
              "One focus or grounding exercise to keep",
            ]}
          />
        }
      />

      <Section id="breathe" className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal variant="left">
            <Eyebrow>Start here · 1 minute</Eyebrow>
            <StatementHeading>Breathe with the circle.</StatementHeading>
            <Lede>
              Slow, even breathing is one of the quickest ways to tell your body it is safe. Follow the circle for
              four or five rounds and notice your shoulders drop.
            </Lede>
          </Reveal>
          <Reveal variant="scale" delay={120}>
            <BreathWidget />
          </Reveal>
        </div>
      </Section>

      <Section tone="muted" className="py-16 sm:py-20">
        <Reveal className="mb-10 max-w-2xl">
          <Eyebrow>More practices</Eyebrow>
          <StatementHeading>Pick what fits the moment.</StatementHeading>
          <Lede>
            Start with the gentle ones. The deeper reflections are clearly marked and entirely optional. Everything here
            works without signing in, and nothing you do is saved or scored.
          </Lede>
        </Reveal>
        <Reveal>
          <ImmersionTools />
        </Reveal>
      </Section>

      <LearnCheck topic="tools" />
      <NextStep
        title="Want to understand why these work?"
        body="Read the short science behind stress and the mind–body link."
        primary={{ to: "/stress", label: "Read about stress" }}
        secondary={{ to: "/mind-heart-gut", label: "Mind, heart and gut" }}
      />
    </PageShell>
  );
}
