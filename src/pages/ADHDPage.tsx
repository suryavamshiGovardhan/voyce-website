
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import ShareStoryButton from "@/components/ShareStoryButton";
import ADHDContent from "@/components/content/ADHDContent";
import { MandalaPattern, LotusAccent } from "@/components/CulturalPatterns";
import { SEOHead } from "@/components/SEOHead";
import ReadingProgress from "@/components/engagement/ReadingProgress";
import ReflectPause from "@/components/engagement/ReflectPause";
import ContinueJourney from "@/components/engagement/ContinueJourney";

export default function ADHDPage() {
  return (
    <>
      <SEOHead 
        title="ADHD Support & Management"
        description="Harness neurodiversity and transform ADHD into your superpower. Learn evidence-based strategies for focus, organization, and celebrating unique cognitive strengths."
        keywords="ADHD support, attention deficit, focus strategies, neurodiversity, ADHD management, executive function, VOYCE"
      />
      <div className="min-h-screen bg-background">
        {/* Subtle Indian/Vedic cultural overlay for ADHD focus themes */}
        <div className="absolute inset-0 pointer-events-none z-0">
        <MandalaPattern className="absolute top-10 right-10 w-64 h-64 animate-mandala-spin" />
        <LotusAccent className="absolute bottom-20 left-10 w-32 h-20 animate-lotus-bloom" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        <PageHero
          eyebrow="Learn · ADHD"
          title={<>ADHD: <span className="text-primary">strengths, struggles and systems.</span></>}
          lede="How ADHD shows up, how it is assessed and treated, and practical systems that work with an ADHD brain instead of against it."
          note="Educational reading — not a diagnosis. Take what helps, leave the rest."
        />
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <LeaveWith className="mb-10" items={["The main ADHD presentations and common signs", "How diagnosis and treatment usually work", "Study and daily-life strategies you can try", "The strengths that often come with ADHD"]} />

          <div className="v-learn-body">
            <ADHDContent />
          </div>

          <div className="mx-auto max-w-3xl">
            <ReflectPause prompt="Take a breath. What is one strength your mind already has?" />
            <ContinueJourney
              links={[
                { to: "/brain", label: "Brain & neuroscience", hint: "The wiring behind the wander." },
                { to: "/tools", label: "Immersion tools", hint: "Focus practices that meet you where you are." },
                { to: "/path", label: "VOYCE Path", hint: "A gentle 21-day rhythm to try." },
              ]}
            />
          </div>

          <ShareStoryButton />
        </div>

        <NextStep
          title="Try one focus strategy this week."
          body="Small systems beat big intentions. Start with one."
          primary={{ to: "/tools", label: "Explore practices" }}
          secondary={{ to: "/cds", label: "Read about CDS" }}
        />
        <Footer />
      </div>
    </div>
    </>
  );
}
