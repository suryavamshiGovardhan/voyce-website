import PageShell from "@/components/site/PageShell";
import LearningPath from "@/components/LearningPath";
import { Reveal, Section } from "@/components/site/primitives";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";

export default function PathPage() {
  return (
    <PageShell
      title="Learning path"
      description="A step-by-step learning path through self-awareness, psychology and emotional wellbeing — each stage builds on the last."
      canonical="/path"
      keywords="learning path, self-awareness, psychology for students, VOYCE path"
    >
      <PageHero
        eyebrow="Guided path"
        title={<>One stage at a time, <span className="text-primary">from basics to depth.</span></>}
        lede="If you don't know where to begin, follow the path. Each stage builds on the last — start with the simple ideas and go deeper only when you want to."
        primary={{ to: "#stages", label: "See the stages" }}
        secondary={{ to: "/library", label: "Or browse freely" }}
        aside={
          <LeaveWith
            compact
            items={[
              "A clear order to learn in",
              "A sense of progress as you go",
              "Links to the deeper reading when you are ready",
            ]}
          />
        }
      />
      <Section id="stages" className="py-16 sm:py-20">
        <Reveal>
          <LearningPath />
        </Reveal>
      </Section>
      <NextStep
        title="Ready for the first stage?"
        body="Stress is the most common place students start."
        primary={{ to: "/stress", label: "Begin with stress" }}
        secondary={{ to: "/tools", label: "Try a practice first" }}
      />
    </PageShell>
  );
}
