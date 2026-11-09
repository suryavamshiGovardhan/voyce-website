
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import ShareStoryButton from "@/components/ShareStoryButton";
import BrainContent from "@/components/content/BrainContent";
import { SEOHead } from "@/components/SEOHead";

export default function BrainPage() {
  return (
    <>
      <SEOHead 
        title="Brain Function & Neuroscience"
        description="Explore the magnificent architecture of consciousness and unlock your brain's infinite potential through ancient wisdom and cutting-edge neuroscience."
        keywords="brain function, neuroscience, consciousness, neuroplasticity, cognitive science, brain health, VOYCE"
      />
      <div className="v-legacy min-h-screen bg-background">
        <Navbar />
      
      <PageHero
        eyebrow="Learn · The brain"
        title={<>How your brain <span className="text-primary">learns, feels and changes.</span></>}
        lede="A guided tour of brain structure, networks, memory, emotion and neuroplasticity — so the way you think and feel makes a little more sense."
        note="Educational reading — not a diagnosis. Take what helps, leave the rest."
      />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <LeaveWith className="mb-10" items={["A simple map of the main brain regions and networks", "Why habits and practice physically reshape the brain", "How memory and emotion are linked", "Everyday habits that support focus and recovery"]} />

        <div className="v-learn-body">
          <BrainContent />
        </div>

        <ShareStoryButton />
      </div>

      <NextStep
        title="See the science in practice."
        body="Stress is where brain science meets daily life."
        primary={{ to: "/stress", label: "Read about stress" }}
        secondary={{ to: "/tools", label: "Try a calm practice" }}
      />
      <Footer />
    </div>
    </>
  );
}
