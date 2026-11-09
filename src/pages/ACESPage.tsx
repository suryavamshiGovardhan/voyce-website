
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { canonicalFor } from "@/components/SEOHead";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import ComprehensiveContent from "@/components/ComprehensiveContent";
import ShareStoryButton from "@/components/ShareStoryButton";
import ACESContent from "@/components/content/ACESContent";
import ReadingProgress from "@/components/engagement/ReadingProgress";
import ReflectPause from "@/components/engagement/ReflectPause";
import BreathWidget from "@/components/engagement/BreathWidget";
import ContinueJourney from "@/components/engagement/ContinueJourney";
import { LearnCheck } from "@/components/site/LearnCheck";

const acesResources = [
  {
    type: 'research' as const,
    title: 'Adverse Childhood Experiences and Adult Health',
    description: 'Landmark study on the relationship between childhood trauma and adult health outcomes.',
    url: 'https://www.cdc.gov/violenceprevention/aces/index.html',
    author: 'CDC',
    year: '2024',
    source: 'Centers for Disease Control',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
  },
  {
    type: 'book' as const,
    title: 'Childhood Disrupted',
    description: 'How your biography becomes your biology, and how you can heal.',
    url: 'https://www.amazon.com/Childhood-Disrupted-Biography-Becomes-Biology/dp/1476748365',
    author: 'Donna Jackson Nakazawa',
    year: '2015',
    rating: 4.6,
    source: 'Amazon',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
  }
];

const acesStatistics = [
  { label: 'Adults with 1+ ACEs', value: '61%', source: 'CDC' },
  { label: 'Adults with 4+ ACEs', value: '16%', source: 'CDC' },
  { label: 'Increased Risk of Depression', value: '460%', source: 'ACE Study' }
];

const acesKeyFacts = [
  'ACEs are linked to chronic health problems, mental illness, and substance misuse',
  'Toxic stress from ACEs can affect brain development and immune system',
  'ACEs are preventable through supportive relationships and community programs',
  'Resilience can be built even after experiencing multiple ACEs',
  'Early intervention and trauma-informed care improve outcomes significantly'
];

export default function ACESPage() {
  return (
    <div className="v-legacy min-h-screen bg-background">
      <SEOHead title="Adverse childhood experiences (ACEs)" description="What ACEs are, how early stress can affect health later, and what builds resilience and healing." canonicalUrl={canonicalFor("/aces")} />
      <Navbar />
      <ReadingProgress />
      
      <PageHero
        eyebrow="Learn · Childhood experiences"
        title={<>Adverse childhood experiences, <span className="text-primary">and the way forward.</span></>}
        lede="What ACEs are, how early stress can affect health and behaviour later, what the Indian context looks like, and — most importantly — what builds resilience and healing."
        note="Educational reading — not a diagnosis. Take what helps, leave the rest."
      />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <LeaveWith className="mb-10" items={["The categories researchers use for ACEs", "How early stress can affect the body over time", "The protective factors that build resilience", "Healing paths for young people and families"]} />

        <div className="v-learn-body mb-12">
          <ACESContent />
        </div>

        <ComprehensiveContent 
          topic="ACEs"
          resources={acesResources}
          statistics={acesStatistics}
          keyFacts={acesKeyFacts}
        />

        <div className="mx-auto max-w-3xl">
          <ReflectPause prompt="Take a breath. This is heavy ground — how are you feeling right now?" />
          <div className="mb-12">
            <BreathWidget />
          </div>
          <ContinueJourney
            links={[
              { to: "/trauma", label: "Trauma recovery", hint: "From understanding to healing, gently." },
              { to: "/stress", label: "Stress management", hint: "Calm the body's alarm system." },
              { to: "/series", label: "The Unheard Mind", hint: "Stories that make the science human." },
            ]}
          />
        </div>

        <ShareStoryButton />
      </div>

      <LearnCheck topic="aces" />
      <NextStep
        title="Resilience is built, not born."
        body="If this topic feels heavy, please pause — and reach out to someone you trust."
        primary={{ to: "/safety", label: "See support options" }}
        secondary={{ to: "/trauma", label: "Read about healing" }}
      />
      <Footer />
    </div>
  );
}
