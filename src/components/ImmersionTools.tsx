
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Headphones, Activity, Compass, Users, Brain, Heart, Eye } from "lucide-react";
import { PracticeModal } from "./PracticeModal";

const immersionTools = [
  {
    title: "Ego Death Meditations",
    description: "Guided journeys into the dissolution of the false self. Experience the space between thoughts.",
    fullDescription: "These aren't your typical mindfulness meditations. We're going to the places your mind doesn't want to go—the void, the space where 'you' dissolve and only awareness remains. Each session is designed to systematically deconstruct the ego's grip on identity.",
    sessions: "12 Progressive Sessions",
    icon: Play,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/20",
    japaneseIcon: "zen",
    features: ["Ego Dissolution", "Witness Training", "Non-Dual Awareness", "Death Practice"],
    intensity: "Advanced"
  },
  {
    title: "Shadow Work Journal", 
    description: "AI-guided prompts to meet the parts of yourself you've been running from your entire life.",
    fullDescription: "Your shadow contains everything you've rejected about yourself—and everything you need to become whole. Our AI companion asks the questions you're afraid to ask yourself, guiding you through the darkness with compassion and precision.",
    sessions: "∞ Daily Prompts",
    icon: BookOpen,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    japaneseIcon: "bamboo",
    features: ["Shadow Integration", "Projection Work", "Dream Analysis", "Trigger Mapping"],
    intensity: "Intermediate"
  },
  {
    title: "Trauma Simulators",
    description: "Experience different nervous system states safely. Understand anxiety, ADHD, PTSD from the inside.",
    fullDescription: "Knowledge without experience is just intellectual masturbation. These neural simulations let you safely experience different states of consciousness—what it feels like to live with trauma, anxiety, or neurodivergence. Empathy through embodiment.",
    sessions: "8 Neural States",
    icon: Activity,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/20",
    japaneseIcon: "wave",
    features: ["PTSD Simulation", "Anxiety States", "ADHD Experience", "Depression Depths"],
    intensity: "Advanced"
  },
  {
    title: "Somatic Healing Library",
    description: "Your body keeps the score. These practices help you rewrite the story written in your flesh.",
    fullDescription: "Trauma lives in the body, not just the mind. Through breathwork, movement, and somatic practices, we help your nervous system remember safety. Each practice is designed to complete incomplete stress cycles and restore natural regulation.",
    sessions: "40+ Practices",
    icon: Headphones,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    japaneseIcon: "crane",
    features: ["Breathwork", "Body Scanning", "Tension Release", "Energy Work"],
    intensity: "All Levels"
  },
  {
    title: "Inner Child Rescue",
    description: "Navigate the labyrinth of your psyche to find and heal the wounded child within.",
    fullDescription: "Your inner child holds both your deepest wounds and your greatest gifts. This guided journey helps you locate, befriend, and reparent the parts of yourself that got left behind in childhood. The child you were is still alive in you—and they need your love.",
    sessions: "Journey Mode",
    icon: Compass,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/20",
    japaneseIcon: "mountain",
    features: ["Age Regression", "Wound Healing", "Reparenting", "Inner Safety"],
    intensity: "Deep Work"
  },
  {
    title: "Anonymous Truth Circle",
    description: "Share your darkest truths with strangers who understand. Healing happens in community.",
    fullDescription: "Shame dies in the light of witness. Our anonymous circles create sacred space for sharing what you've never spoken aloud. No fixing, no advice—just presence and the radical act of being seen in your truth.",
    sessions: "24/7 Community",
    icon: Users,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    japaneseIcon: "lotus",
    features: ["Anonymous Sharing", "Witness Practice", "Peer Support", "Truth Telling"],
    intensity: "Vulnerable"
  },
  {
    title: "Neural Rewiring Lab",
    description: "Consciously reprogram your brain. Neuroplasticity meets ancient wisdom.",
    fullDescription: "Your brain is not fixed—it's a living, breathing, constantly rewiring network. Using cutting-edge neuroscience and ancient practices, we teach you to consciously reshape your neural pathways. Become the architect of your own consciousness.",
    sessions: "Ongoing Practice",
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/20",
    japaneseIcon: "torii",
    features: ["Neural Training", "Pattern Interruption", "Habit Hacking", "Consciousness Upgrade"],
    intensity: "Scientific"
  },
  {
    title: "Love Without Ego",
    description: "Learn to love without possession, attachment, or the need to be loved back.",
    fullDescription: "Most of what we call love is ego in disguise—need, attachment, possession, projection. True love has no opposite because it includes everything. We explore what love looks like when the ego isn't driving the bus.",
    sessions: "Heart Opening",
    icon: Heart,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-border",
    hoverBorder: "hover:border-border",
    japaneseIcon: "cherry",
    features: ["Unconditional Love", "Attachment Work", "Heart Opening", "Sacred Relating"],
    intensity: "Heart Work"
  },
  {
    title: "The Witness Training",
    description: "Develop the capacity to observe your own mind without being hijacked by it.",
    fullDescription: "The witness is the part of you that can watch your thoughts without being them, feel your emotions without drowning in them. This systematic training develops your capacity for metacognition—awareness of awareness itself.",
    sessions: "12 Week Program",
    icon: Eye,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/20",
    japaneseIcon: "zen",
    features: ["Meta-Awareness", "Thought Watching", "Emotional Regulation", "Presence Training"],
    intensity: "Foundation"
  }
];

export default function ImmersionTools() {
  const [activeTool, setActiveTool] = useState<string | null>(null);
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-muted-foreground text-lg italic leading-relaxed max-w-3xl mx-auto">
          "These tools are not toys. They are surgical instruments for the soul, 
          designed to cut through the illusions that keep you suffering. Use them with reverence."
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {immersionTools.map((tool, index) => {
          const IconComponent = tool.icon;
          return (
            <Card 
              key={tool.title}
              className="v-card v-card-hover group min-h-[320px] border-border"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="v-chip h-12 w-12">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="rounded-full bg-muted px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground">{tool.intensity}</span>
                  </div>
                </div>
                
                <h3 className="font-display text-xl tracking-tight text-foreground mb-2">{tool.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed mb-3">
                  {tool.description}
                </p>
                
                <div className="flex-grow">
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">
                    {tool.fullDescription}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-primary text-xs font-medium mb-2 block">Core Features:</span>
                    <div className="grid grid-cols-2 gap-1">
                      {tool.features.map((feature) => (
                        <span key={feature} className="rounded-full border border-border px-2 py-1 text-center text-[0.7rem] text-muted-foreground">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-muted-foreground">
                    {tool.sessions}
                  </span>
                  <Button
                    size="sm"
                    className="v-sheen rounded-full px-4 text-xs"
                    onClick={() => setActiveTool(tool.title)}
                  >
                    Begin Practice
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <div className="mt-12">
        <div className="v-card p-8">
          <div className="text-center">
            <h3 className="text-foreground text-2xl font-light mb-4">The Path of No Path</h3>
            <p className="text-muted-foreground text-sm leading-relaxed italic max-w-3xl mx-auto mb-6">
              "These tools are fingers pointing at the moon. Don't mistake the finger for the moon. 
              The real work happens in the silence between practices, in the space between thoughts, 
              in the moment when you realize there was never anyone there to be enlightened."
            </p>
            <div className="flex items-center justify-center space-x-4">
              
              <span className="text-primary font-light">Begin Where You Are</span>
              
            </div>
          </div>
        </div>
      </div>

      <PracticeModal
        open={activeTool !== null}
        onOpenChange={(o) => { if (!o) setActiveTool(null); }}
        toolTitle={activeTool ?? ""}
      />
    </div>
  );
}
