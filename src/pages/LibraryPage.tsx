import PageShell from "@/components/site/PageShell";
import LibraryPreview from "@/components/LibraryPreview";
import { Reveal, Section } from "@/components/site/primitives";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";

export default function LibraryPage() {
  return (
    <PageShell
      title="Library"
      description="A curated library of readings on psychology, neuroscience and wellbeing — from ancient philosophy to current research."
      canonical="/library"
      keywords="psychology library, neuroscience reading, wellbeing articles, VOYCE library"
    >
      <PageHero
        eyebrow="Library"
        title={<>Read one idea that <span className="text-primary">makes your mind make sense.</span></>}
        lede="Short, carefully chosen readings on how we think, feel and grow — from old philosophy to current neuroscience. Open anything; there is no order and no account needed."
        primary={{ to: "#shelf", label: "Browse the shelf" }}
        secondary={{ to: "/path", label: "Prefer a guided path?" }}
        aside={
          <LeaveWith
            compact
            items={[
              "Plain-language explanations of big ideas",
              "Sources and context, not slogans",
              "A question to sit with after each read",
            ]}
          />
        }
      />
      <Section id="shelf" className="py-16 sm:py-20">
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
