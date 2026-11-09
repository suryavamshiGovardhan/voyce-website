
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import ShareStoryButton from "@/components/ShareStoryButton";
import TraumaContent from "@/components/content/TraumaContent";
import { CherryBlossomAccent, PagodaAccent } from "@/components/CulturalPatterns";
import { SEOHead } from "@/components/SEOHead";
import ReadingProgress from "@/components/engagement/ReadingProgress";
import ReflectPause from "@/components/engagement/ReflectPause";
import BreathWidget from "@/components/engagement/BreathWidget";
import ContinueJourney from "@/components/engagement/ContinueJourney";
import { LearnCheck } from "@/components/site/LearnCheck";

export default function TraumaPage() {
  return (
    <>
      <SEOHead 
        title="Understanding trauma and recovery"
        description="What trauma is, how it can show up, and what helps people recover — gently and in plain words. Educational, not a diagnosis."
        keywords="trauma recovery, PTSD treatment, healing trauma, resilience, trauma-informed care, emotional healing, VOYCE"
      />
      <div className="v-legacy min-h-screen bg-background">
        {/* Japanese/East Asian cultural overlay for healing themes */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <CherryBlossomAccent className="absolute top-20 right-20 w-32 h-32 animate-cherry-bloom" />
        <PagodaAccent className="absolute bottom-32 left-16 w-24 h-12 animate-pagoda-rise" />
        <CherryBlossomAccent className="absolute top-1/2 left-1/4 w-24 h-24 animate-cherry-bloom delay-1000" />
        <PagodaAccent className="absolute top-1/3 right-1/3 w-20 h-10 animate-pagoda-rise delay-2000" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        
        <PageHero
          eyebrow="Learn · Trauma & healing"
          title={<>Understanding trauma, <span className="text-primary">gently.</span></>}
          lede="What trauma is, how it can show up in the body and mind, and the paths people use to heal — written to inform, not to diagnose. Go at your own pace."
          note="Educational reading — not a diagnosis. Take what helps, leave the rest."
        />
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <LeaveWith className="mb-10" items={["The difference between acute, chronic and complex trauma", "Common signs in the body, mood and relationships", "Therapy approaches that are known to help", "Where to find support if this feels close to home"]} />

          <div className="v-learn-body">
            <TraumaContent />
          </div>

          <div className="mx-auto max-w-3xl">
            <ReflectPause prompt="Take a breath. Healing is not a race — what felt true for you here?" />
            <div className="mb-12">
              <BreathWidget />
            </div>
            <ContinueJourney
              links={[
                { to: "/aces", label: "ACEs impact", hint: "Understanding where some wounds begin." },
                { to: "/tools", label: "Calm practices", hint: "Gentle practices for hard days." },
                { to: "/stories", label: "Stories", hint: "You are not the only one walking this." },
              ]}
            />
          </div>

          <ShareStoryButton />
        </div>

        <LearnCheck topic="trauma" />
        <NextStep
          title="You don't have to carry this alone."
          body="If something here feels personal, talking to a trusted adult or a professional is a strong first step."
          primary={{ to: "/safety", label: "See support options" }}
          secondary={{ to: "/start-here", label: "Start a private check-in" }}
        />
        <Footer />
      </div>
    </div>
    </>
  );
}
