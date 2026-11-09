import PageShell from "@/components/site/PageShell";
import Newsletters from "@/components/Newsletters";
import { PageHero, NextStep } from "@/components/site/value";

export default function NewslettersPage() {
  return (
    <PageShell
      title="Newsletters & resources"
      description="Curated mental health newsletters and resources, shared by the VOYCE community."
      canonical="/newsletters"
      keywords="mental health newsletter, wellbeing resources, VOYCE newsletter"
    >
      <PageHero
        eyebrow="Resources · Newsletters"
        title={<>Good reading, <span className="text-primary">chosen by people who care.</span></>}
        lede="Newsletters and resources on mental health and wellbeing, collected in one place. Found something useful? Add it so the next student finds it too."
      />
      <Newsletters />
      <NextStep
        title="Looking for something shorter?"
        body="The library has quick, plain-language reads."
        primary={{ to: "/library", label: "Open the library" }}
        secondary={{ to: "/guides", label: "Guides for adults" }}
      />
    </PageShell>
  );
}
