import PageShell from "@/components/site/PageShell";
import LibraryPreview from "@/components/LibraryPreview";
import { Reveal, Section } from "@/components/site/primitives";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";

export default function LibraryPage() {
  return (
    <PageShell
      title="Library"
      description="Short ideas on identity, the brain, relationships and meaning — each with one question to sit with and a link to read further."
      canonical="/library"
      keywords="psychology library, neuroscience reading, wellbeing articles, VOYCE library"
    >
      <PageHero
        eyebrow="Library"
        title={<>One idea at a time, <span className="text-primary">one question to sit with.</span></>}
        lede="Short ideas on how we think, feel and grow. Open anything — there is no order and no account needed."
        primary={{ to: "#shelf", label: "Browse the shelf" }}
        secondary={{ to: "/path", label: "Prefer a guided path?" }}
        aside={
          <LeaveWith
            compact
            items={[
              "Plain-language explanations of big ideas",
              "A question to sit with after each one",
              "A link to read further on VOYCE",
            ]}
          />
        }
      />
      <Section id="shelf" className="py-24 sm:py-32">
        <Reveal>
          <LibraryPreview />
        </Reveal>
      </Section>
      <NextStep
        title="Put a reading into practice."
        body="Pair what you read with a two-minute practice."
        primary={{ to: "/tools", label: "Try a practice" }}
        secondary={{ to: "/start-here", label: "Start a private check-in" }}
      />
    </PageShell>
  );
}
