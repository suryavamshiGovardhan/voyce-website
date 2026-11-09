import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { Brain, Eye, Zap, Heart, Target, Microscope, Infinity, Crown, Lock } from "lucide-react";
import JapaneseIcon from "./JapaneseIcon";
import { StageDetailModal, Stage } from "./StageDetailModal";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const learningStages: (Stage & {
  icon: any;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverBorder: string;
  japaneseIcon: string;
})[] = [
  { level: "L0", name: "Nursery of the Mind", description: "What is ego? What is the brain? Your first steps into understanding the architecture of suffering.", deepContent: "The ego is not your enemy—it's a confused child who thinks it's protecting you. We begin here, in the nursery of awareness, learning the basic vocabulary of consciousness. You'll discover why your mind creates stories, how emotions are messengers, and why pain is your greatest teacher.", tools: ["Basic Breathing", "Emotion Naming", "Body Awareness"], duration: "2-3 weeks", icon: Brain, color: "text-primary", bgColor: "bg-primary", borderColor: "border-primary/20", hoverBorder: "hover:border-primary/20", japaneseIcon: "cherry" },
  { level: "L1", name: "The Cracks Appear", description: "Trauma isn't what happened to you—it's what you believed about yourself when it happened.", deepContent: "Here we meet the wounded child within. Every trigger is a doorway, every reaction a revelation. You'll learn to read the language of your nervous system, understand how childhood programming runs your adult life, and begin the sacred work of reparenting yourself.", tools: ["Inner Child Work", "Trigger Mapping", "Safe Space Creation"], duration: "3-4 weeks", icon: Eye, color: "text-primary", bgColor: "bg-primary", borderColor: "border-border", hoverBorder: "hover:border-border", japaneseIcon: "wave" },
  { level: "L2", name: "The Inner War", description: "Your nervous system doesn't know the difference between a saber-tooth tiger and your boss.", deepContent: "Fight, flight, freeze, fawn—the four horsemen of your autonomic apocalypse. We dive deep into the battlefield of your nervous system, understanding why your body keeps the score and how chronic stress rewires your brain for survival instead of thriving.", tools: ["Nervous System Mapping", "Somatic Tracking", "Regulation Techniques"], duration: "4-5 weeks", icon: Zap, color: "text-primary", bgColor: "bg-primary", borderColor: "border-primary/20", hoverBorder: "hover:border-primary/20", japaneseIcon: "mountain" },
  { level: "L3", name: "The False Self", description: "You are not who you think you are. You are not even who others think you are.", deepContent: "The ego's greatest trick is convincing you it IS you. Here we deconstruct the false self—the mask, the persona, the character you've been playing. Shadow work begins in earnest as we meet the parts of yourself you've been running from.", tools: ["Shadow Integration", "Persona Deconstruction", "Projection Work"], duration: "5-6 weeks", icon: Heart, color: "text-primary", bgColor: "bg-primary", borderColor: "border-border", hoverBorder: "hover:border-border", japaneseIcon: "bamboo" },
  { level: "L4", name: "The Witness", description: "You are not your thoughts. You are the awareness that observes them.", deepContent: "The birth of the witness consciousness—the part of you that can observe your own mind. Through mindfulness and metacognition, you learn to step back from the drama of your thoughts and emotions. Neuroplasticity becomes your ally in rewiring decades of conditioning.", tools: ["Witness Meditation", "Metacognitive Training", "Neuroplasticity Exercises"], duration: "6-8 weeks", icon: Target, color: "text-primary", bgColor: "bg-primary", borderColor: "border-primary/20", hoverBorder: "hover:border-primary/20", japaneseIcon: "zen" },
  { level: "L5", name: "The Architect", description: "You are both the sculptor and the sculpture, the architect and the building.", deepContent: "Active reconstruction begins. You learn to consciously rewire thought patterns, build new neural pathways, and architect your internal world. Somatic practices integrate body wisdom as you become the deliberate creator of your consciousness.", tools: ["Neural Rewiring", "Somatic Integration", "Conscious Creation"], duration: "8-10 weeks", icon: Microscope, color: "text-primary", bgColor: "bg-primary", borderColor: "border-border", hoverBorder: "hover:border-border", japaneseIcon: "torii" },
  { level: "L6", name: "PhD Lab", description: "The brain is not who you are, but it's the hardware running the software of consciousness.", deepContent: "Deep dive into neuroscience: brain anatomy, neurotransmitter systems, the default mode network, and the biological basis of consciousness. Understanding the hardware enhances your ability to upgrade the software.", tools: ["Brain Mapping", "Neurotransmitter Analysis", "Consciousness Studies"], duration: "12-16 weeks", icon: Infinity, color: "text-primary", bgColor: "bg-primary", borderColor: "border-primary/20", hoverBorder: "hover:border-primary/20", japaneseIcon: "crane" },
  { level: "L7", name: "The Void / Godhead", description: "In the end, there is no end. There is no ego to kill, no self to find. There is only this.", deepContent: "The final dissolution—or perhaps the beginning. Philosophy, mysticism, and the direct experience of non-dual awareness. Integration of all previous work into a lived understanding that transcends concepts and enters pure being.", tools: ["Non-Dual Inquiry", "Mystical Integration", "Being Practices"], duration: "Lifetime Practice", icon: Crown, color: "text-primary", bgColor: "bg-primary", borderColor: "border-border", hoverBorder: "hover:border-border", japaneseIcon: "lotus" },
];

export default function LearningPath() {
  const { user, loading: authLoading } = useAuth();
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [progressLoading, setProgressLoading] = useState(false);
  const [selected, setSelected] = useState<Stage | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const loadProgress = async () => {
    if (!user) {
      setCompleted(new Set());
      return;
    }
    setProgressLoading(true);
    const { data } = await supabase
      .from("user_stage_progress")
      .select("stage_level, completed_at")
      .eq("user_id", user.id);
    setCompleted(new Set((data ?? []).filter((r) => r.completed_at).map((r) => r.stage_level)));
    setProgressLoading(false);
  };

  useEffect(() => { loadProgress(); /* eslint-disable-next-line */ }, [user?.id]);

  const percent = useMemo(
    () => Math.round((completed.size / learningStages.length) * 100),
    [completed]
  );

  const isUnlocked = (index: number) => {
    if (index === 0) return true;
    return completed.has(learningStages[index - 1].level);
  };

  return (
    <div className="space-y-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-foreground text-sm">Your Journey Progress</span>
          {user ? (
            <span className="text-primary text-sm">
              {progressLoading ? "…" : `${percent}% complete · ${completed.size}/${learningStages.length} stages`}
            </span>
          ) : (
            <Link to="/login" className="text-primary text-sm underline hover:text-primary">
              Sign in to track progress
            </Link>
          )}
        </div>
        <Progress value={user ? percent : 0} className="h-3 bg-muted" />
        <p className="text-muted-foreground text-xs mt-2 italic">
          "The path is not about becoming someone else. It's about unbecoming everything you're not."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {learningStages.map((stage, index) => {
          const IconComponent = stage.icon;
          const unlocked = isUnlocked(index);
          const done = completed.has(stage.level);
          return (
            <Card
              key={stage.level}
              className={`bg-black/40 backdrop-blur-sm ${stage.borderColor} ${stage.hoverBorder} zen-transition card-3d haptic-btn ${!unlocked ? 'opacity-70' : ''} min-h-[400px]`}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`${stage.color} font-mono text-lg font-bold`}>{stage.level}</span>
                  <JapaneseIcon type={stage.japaneseIcon as any} className={`${stage.color} w-6 h-6`} />
                </div>

                <div className="flex items-center mb-4">
                  <IconComponent className={`h-8 w-8 ${stage.color} mr-3`} />
                  <h3 className="text-foreground font-medium text-lg">{stage.name}</h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{stage.description}"</p>

                <div className="mb-4">
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3">{stage.deepContent}</p>

                  <div className="mb-3">
                    <span className="text-primary text-xs font-medium">Core Tools:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {stage.tools.map((tool) => (
                        <span key={tool} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <span>Duration: {stage.duration}</span>
                    <span>{done ? "Completed" : unlocked ? "Available" : "Locked"}</span>
                  </div>
                </div>

                <Button
                  size="sm"
                  className={`w-full haptic-btn text-sm ${unlocked ? `${stage.bgColor} hover:opacity-90 text-foreground` : 'bg-muted text-muted-foreground cursor-not-allowed'}`}
                  disabled={!unlocked || authLoading}
                  onClick={() => {
                    if (!unlocked) return;
                    setSelected(stage);
                    setModalOpen(true);
                  }}
                >
                  {!unlocked ? (<><Lock className="h-4 w-4 mr-2" /> Complete previous stage</>)
                    : done ? "Revisit stage" : "Enter stage"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-black/30 backdrop-blur-sm border border-border rounded-lg p-6">
          <h3 className="text-foreground text-xl font-light mb-3">The Journey Never Ends</h3>
          <p className="text-muted-foreground text-sm leading-relaxed italic max-w-2xl mx-auto">
            "Each stage is not a destination but a deepening. You don't graduate from consciousness—you fall deeper into it.
            The ego you're killing is the one that thinks it knows, that thinks it's separate, that thinks it's in control."
          </p>
        </div>
      </div>

      <StageDetailModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        stage={selected}
        isCompleted={selected ? completed.has(selected.level) : false}
        onCompleted={loadProgress}
      />
    </div>
  );
}
