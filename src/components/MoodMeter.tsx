import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Smile, Frown, Angry, Meh, Brain, Heart, Zap } from 'lucide-react';

const moodReflections = {
  happy: {
    icon: Smile,
    reflection: "Gratitude magnifies happiness. Take a moment to think of three things you're grateful for right now. This activates your prefrontal cortex and releases dopamine.",
    color: "text-primary",
    bgGradient: "from-primary/20 to-primary/70/20",
    borderColor: "border-primary/40",
    glowColor: "shadow-emerald-500/20",
  },
  sad: {
    icon: Frown,
    reflection: "It's okay to feel sad. Acknowledge the feeling without judgment. Try the 4-7-8 breathing technique or connect with someone who understands. Your limbic system needs compassion.",
    color: "text-primary",
    bgGradient: "from-primary/20 to-primary/70/20",
    borderColor: "border-primary/40",
    glowColor: "shadow-blue-500/20",
  },
  angry: {
    icon: Angry,
    reflection: "Anger is energy seeking expression. Channel it constructively through the STOP technique: Stop, Take a breath, Observe your thoughts, Proceed mindfully. Your amygdala is activated—give it time to calm.",
    color: "text-red-500",
    bgGradient: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    glowColor: "shadow-red-500/20",
  },
  meh: {
    icon: Meh,
    reflection: "Emotional numbness can signal your nervous system is protecting you. Try a small, novel activity to activate your reward pathways. Even 5 minutes in nature can shift your neurochemistry.",
    color: "text-muted-foreground",
    bgGradient: "from-gray-500/20 to-slate-500/20",
    borderColor: "border-border/30",
    glowColor: "shadow-gray-500/20",
  },
};

type Mood = keyof typeof moodReflections;

export default function MoodMeter() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMoodSelect = (mood: Mood) => {
    if (selectedMood === mood) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedMood(mood);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="relative py-16 px-4 bg-surface rounded-2xl overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-center mb-4 space-x-3">
            <Brain className="w-8 h-8 text-primary" />
            <Heart className="w-10 h-10 text-primary" />
            <Zap className="w-8 h-8 text-amber-700" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-slate-800 via-primary/80 to-primary/70 bg-clip-text text-transparent">
            How are you feeling right now?
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Select an emotion to see a short reflection based on neuroscience and mindfulness
          </p>
        </div>

        {/* Mood Icons */}
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-10 flex-wrap">
          {(Object.keys(moodReflections) as Mood[]).map((mood) => {
            const CurrentIcon = moodReflections[mood].icon;
            const isSelected = selectedMood === mood;
            
            const baseClasses = "group relative p-5 md:p-6 rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 cursor-pointer";
            const selectedClasses = `bg-gradient-to-br ${moodReflections[mood].bgGradient} border-2 ${moodReflections[mood].borderColor} scale-105 shadow-xl ${moodReflections[mood].glowColor}`;
            const unselectedClasses = "bg-card backdrop-blur-sm hover:bg-card border-2 border-white/50 shadow-lg hover:shadow-xl";
            
            return (
              <button
                key={mood}
                onClick={() => handleMoodSelect(mood)}
                className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
                aria-label={`Select ${mood} mood`}
              >
                <CurrentIcon className={`${moodReflections[mood].color} w-10 h-10 md:w-12 md:h-12 relative z-10 transition-all duration-300`} />
                
                <div className="mt-2 text-sm font-medium capitalize text-foreground transition-colors duration-300">
                  {mood}
                </div>

                {isSelected && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${moodReflections[mood].bgGradient} rounded-2xl blur-xl opacity-50 -z-10`} />
                )}
              </button>
            );
          })}
        </div>
        
        {/* Reflection Display */}
        <div className="min-h-[160px] flex items-center justify-center">
          {selectedMood && (
            <Card className={`relative bg-card backdrop-blur-lg border-2 ${moodReflections[selectedMood].borderColor} text-center transition-all duration-500 w-full shadow-xl overflow-hidden ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${moodReflections[selectedMood].bgGradient} opacity-30`} />
              
              <CardContent className="relative z-10 p-6 md:p-8">
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${moodReflections[selectedMood].bgGradient} border ${moodReflections[selectedMood].borderColor}`}>
                    {React.createElement(moodReflections[selectedMood].icon, {
                      className: `${moodReflections[selectedMood].color} w-6 h-6`
                    })}
                  </div>
                </div>
                
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  {moodReflections[selectedMood].reflection}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
