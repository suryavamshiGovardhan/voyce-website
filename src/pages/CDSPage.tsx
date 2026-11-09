
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { canonicalFor } from "@/components/SEOHead";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import ShareStoryButton from "@/components/ShareStoryButton";
import CDSContent from "@/components/content/CDSContent";

export default function CDSPage() {
  return (
    <div className="v-legacy min-h-screen bg-background">
      <SEOHead title="Cognitive Disengagement Syndrome (CDS)" description="What CDS is, how it differs from ADHD, and what current research says." canonicalUrl={canonicalFor("/cds")} />
      <Navbar />
      
      <PageHero
        eyebrow="Learn · Attention"
        title={<>Cognitive Disengagement Syndrome, <span className="text-primary">explained clearly.</span></>}
        lede="CDS (once called sluggish cognitive tempo) describes heavy daydreaming and mental fog. Here is what researchers know so far, how it differs from ADHD, and where to go for an assessment."
        note="Educational reading — not a diagnosis. Take what helps, leave the rest."
      />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <LeaveWith className="mb-10" items={["What CDS is \u2014 and what it is not", "How it differs from ADHD", "What current research says, without the hype", "Questions worth bringing to a qualified professional"]} />

        <div className="v-learn-body">
          <CDSContent />
        </div>

        <ShareStoryButton />
      </div>

      <NextStep
        title="Curious how attention differs from person to person?"
        body="ADHD is the closest relative to CDS — and the better known one."
        primary={{ to: "/adhd", label: "Read about ADHD" }}
        secondary={{ to: "/start-here", label: "Start a private check-in" }}
      />
      <Footer />
    </div>
  );
}
