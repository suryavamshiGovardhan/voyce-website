import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";
import ShareStoryButton from "@/components/ShareStoryButton";
import StressContent from "@/components/content/StressContent";
import { ModuleTracker } from "@/components/engagement/ModuleTracker";
import { SEOHead } from "@/components/SEOHead";
import ReadingProgress from "@/components/engagement/ReadingProgress";
import ReflectPause from "@/components/engagement/ReflectPause";
import ContinueJourney from "@/components/engagement/ContinueJourney";
import { LearnCheck } from "@/components/site/LearnCheck";

export default function StressPage() {
  return (
    <>
      <SEOHead
        title="Understanding stress"
        description="What stress does in your body, early signs to notice, and small things that help — in plain words. Educational, not a diagnosis."
        keywords="stress management, stress relief, mental health, resilience"
      />
      <div className="v-legacy min-h-screen bg-background">
        <Navbar />
        
        <PageHero
          eyebrow="Learn · Stress"
          title={<>Understand stress, <span className="text-primary">then lower it.</span></>}
          lede="What happens in your body when pressure builds, how to notice it early, and small techniques you can use the same day — before an exam, after a hard conversation, or at night."
          note="Educational reading — not a diagnosis. Take what helps, leave the rest."
        />
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <LeaveWith className="mb-10" items={["How the stress response (HPA axis) works, in plain words", "The early signs your body gives before stress peaks", "A handful of breathing and grounding techniques to try today", "When stress needs more than self-help \u2014 and who to talk to"]} />

          <div className="v-learn-body">
            <StressContent />
            <ModuleTracker 
              moduleId="understanding-stress"
              moduleTitle="Understanding Stress"
            />
          </div>

          <div className="mx-auto max-w-3xl">
            <ReflectPause prompt="Take a breath. Which one small tool here could you try today?" />
            <ContinueJourney
              links={[
                { to: "/tools", label: "Calm practices", hint: "Put what you read into practice." },
                { to: "/brain", label: "Brain & neuroscience", hint: "Why stress feels the way it does." },
                { to: "/series", label: "The Unheard Mind", hint: "Stories behind the science." },
              ]}
            />
          </div>

          <ShareStoryButton />
        </div>

        <LearnCheck topic="stress" />
        <NextStep
          title="Turn one idea into a two-minute practice."
          body="Pick a calm tool, try it once, and notice what shifts."
          primary={{ to: "/tools", label: "Try a practice" }}
          secondary={{ to: "/start-here", label: "Or start a private check-in" }}
        />
        <Footer />
      </div>
    </>
  );
}
