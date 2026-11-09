import PageShell from "@/components/site/PageShell";
import ClearThoughts from "@/components/ClearThoughts";
import { PageHero, NextStep } from "@/components/site/value";

export default function ThoughtsPage() {
  return (
    <PageShell
      title="Clear thoughts"
      description="A calm space to put a thought into words and read what others have shared."
      canonical="/thoughts"
    >
      <PageHero
        eyebrow="Community · Clear thoughts"
        title={<>Put one thought into words. <span className="text-primary">It gets lighter.</span></>}
        lede="Writing a feeling down is one of the simplest ways to understand it. Read what others have shared, or add your own — kindly, and without using real names."
      />
      <ClearThoughts />
      <NextStep
        title="Want to reflect privately instead?"
        body="Start a check-in that only you can see."
        primary={{ to: "/start-here", label: "Start a private check-in" }}
        secondary={{ to: "/stories", label: "Read stories" }}
      />
    </PageShell>
  );
}
