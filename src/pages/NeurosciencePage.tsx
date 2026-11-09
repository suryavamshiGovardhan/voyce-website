
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { canonicalFor } from "@/components/SEOHead";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import NeuroscienceContent from "@/components/content/NeuroscienceContent";
import { neuroscienceResources } from "@/data/mentalHealthResources";
import { LearnCheck } from "@/components/site/LearnCheck";

const neuroscienceKeyFacts = [
  'Modern brain imaging (CT, then MRI and fMRI) developed from the 1970s onwards',
  'fMRI can measure brain activity in real-time by detecting blood flow changes',
  'Optogenetics lets scientists switch specific neurons on or off with light in lab studies',
  'Brain organoids grown in labs help researchers study neurological diseases',
    'The Human Connectome Project is mapping how brain regions connect'
];

export default function NeurosciencePage() {
  return (
    <div className="v-legacy min-h-screen bg-background">
      <SEOHead title="Neuroscience timeline" description="A short history of neuroscience, its methods and frontiers, and labs in India." canonicalUrl={canonicalFor("/neuroscience")} />
      <Navbar />
      
      <PageHero
        eyebrow="Learn · Neuroscience"
        title={<>A short history of <span className="text-primary">how we came to understand the brain.</span></>}
        lede="From early brain studies to modern imaging and AI — the methods, the frontiers and the labs in India doing this work."
        note="Educational reading — not a diagnosis. Take what helps, leave the rest."
      />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <LeaveWith className="mb-10" items={["Key moments in the history of neuroscience", "How brain imaging and research methods work", "Where the field is heading next", "Indian labs and researchers to know"]} />

        <div className="v-learn-body mb-12">
          <NeuroscienceContent />
        </div>

        <ComprehensiveContent 
          topic="Neuroscience"
          resources={neuroscienceResources}
          keyFacts={neuroscienceKeyFacts}
        />

        <ShareStoryButton />
      </div>

      <LearnCheck topic="neuroscience" />
      <NextStep
        title="Go from history to your own brain."
        body="See how structure, memory and emotion fit together."
        primary={{ to: "/brain", label: "Explore the brain" }}
        secondary={{ to: "/library", label: "Browse the library" }}
      />
      <Footer />
    </div>
  );
}
