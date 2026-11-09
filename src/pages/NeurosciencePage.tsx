
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { canonicalFor } from "@/components/SEOHead";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import NeuroscienceContent from "@/components/content/NeuroscienceContent";
import { neuroscienceResources } from "@/data/mentalHealthResources";

const neuroscienceStatistics = [
  { label: 'Neuroscience Papers Published Annually', value: '50,000+', source: 'PubMed' },
  { label: 'Brain Imaging Studies Growth', value: '300%', source: 'Nature Neuroscience' },
  { label: 'Neuroscience Research Funding', value: '$7.6B', source: 'NIH' }
];

const neuroscienceKeyFacts = [
  'Modern neuroscience began in the 1950s with the development of brain imaging technologies',
  'fMRI can measure brain activity in real-time by detecting blood flow changes',
  'Optogenetics allows scientists to control neurons with light, revolutionizing research',
  'Brain organoids grown in labs help researchers study neurological diseases',
  'AI and machine learning are accelerating neuroscience discoveries',
  'The Human Connectome Project mapped the brain\'s neural connections'
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
          statistics={neuroscienceStatistics}
          keyFacts={neuroscienceKeyFacts}
        />

        <ShareStoryButton />
      </div>

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
