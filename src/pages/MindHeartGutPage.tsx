
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { canonicalFor } from "@/components/SEOHead";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import MindHeartGutContent from "@/components/content/MindHeartGutContent";
import { mindHeartGutResources } from "@/data/mentalHealthResources";
import { LearnCheck } from "@/components/site/LearnCheck";

const mindHeartGutStatistics = [
  { label: 'Neurons in Gut', value: '500 Million', source: 'Nature Reviews Gastroenterology' },
  { label: 'Serotonin Made in Gut', value: '90%', source: 'Journal of Neurogastroenterology' },
  { label: 'Heart-Brain Connections', value: '40,000', source: 'HeartMath Institute' }
];

const mindHeartGutKeyFacts = [
  'The gut is often called the "second brain" due to its extensive neural network',
  'Heart rhythm patterns affect brain function and emotional processing',
  'Gut microbiota directly influences mood and mental health through the vagus nerve',
  'Stress affects gut permeability, leading to "leaky gut syndrome"',
  'Heart rate variability is a key indicator of stress resilience',
  'Breathing exercises can synchronize heart, brain, and gut functions'
];

export default function MindHeartGutPage() {
  return (
    <div className="v-legacy min-h-screen bg-background">
      <SEOHead title="Mind, heart and gut" description="How the vagus nerve, gut–brain axis and heart–brain signalling connect — with simple practices." canonicalUrl={canonicalFor("/mind-heart-gut")} />
      <Navbar />
      
      <PageHero
        eyebrow="Learn · Mind–heart–gut"
        title={<>How your mind, heart and gut <span className="text-primary">talk to each other.</span></>}
        lede="The vagus nerve, the gut–brain axis and heart–brain signalling — and simple practices that use these links to help you feel steadier."
        note="Educational reading — not a diagnosis. Take what helps, leave the rest."
      />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <LeaveWith className="mb-10" items={["What the vagus nerve does, in everyday terms", "How gut health and mood can influence each other", "Why slow breathing changes how you feel", "Practices you can try in under five minutes"]} />

        <div className="v-learn-body mb-12">
          <MindHeartGutContent />
        </div>

        <ComprehensiveContent 
          topic="Mind-Heart-Gut Connection"
          resources={mindHeartGutResources}
          statistics={mindHeartGutStatistics}
          keyFacts={mindHeartGutKeyFacts}
        />

        <ShareStoryButton />
      </div>

      <LearnCheck topic="mind-heart-gut" />
      <NextStep
        title="Try a slow-breathing practice now."
        body="It is the quickest way to feel the mind–body link for yourself."
        primary={{ to: "/tools", label: "Open practices" }}
        secondary={{ to: "/stress", label: "Read about stress" }}
      />
      <Footer />
    </div>
  );
}
