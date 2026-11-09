
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Heart, Brain, Zap, Eye, Sparkles, Skull, Crown, Target } from "lucide-react";
import JapaneseIcon from "./JapaneseIcon";
import { useState } from "react";
import LibraryArticleDialog, { type LibraryArticle } from "@/components/LibraryArticleDialog";

const libraryContent = [
  {
    title: "The Ego's Last Stand",
    category: "Ego Death",
    preview: "When you finally see through the illusion of the separate self, the ego doesn't go quietly into that good night. It fights. It screams. It convinces you that you're losing your mind. But you're not losing your mind—you're losing the story about who you think you are...",
    fullContent: "The death of ego is not the death of personality or individuality. It's the death of the illusion that you are separate, that you are the voice in your head, that you are the story you tell yourself about yourself.",
    tags: ["Shadow Work", "Non-Duality", "Advanced", "Death Practice"],
    icon: Skull,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/20",
    japaneseIcon: "zen",
    level: "L7",
    readTime: "12 min",
    author: "The Void"
  },
  {
    title: "Trauma as Teacher",
    category: "Sacred Wounds", 
    preview: "Your wounds are not punishments. They are not mistakes. They are not evidence of your brokenness. Your wounds are invitations—invitations to depth, to wisdom, to becoming more human than you ever thought possible...",
    fullContent: "Every wound carries medicine. Every trauma holds the seeds of transformation. The very experiences that broke you open are the same ones that can awaken you to your true nature.",
    tags: ["Trauma Healing", "Integration", "Somatic", "Wisdom"],
    icon: Heart,
    color: "text-amber-700",
    bgColor: "bg-primary",
    borderColor: "border-amber-300",
    hoverBorder: "hover:border-amber-300",
    japaneseIcon: "lotus",
    level: "L2",
    readTime: "8 min",
    author: "The Wounded Healer"
  },
  {
    title: "The Neuroscience of Ego Death",
    category: "Consciousness Research",
    preview: "What happens in the default mode network when the self-story dissolves? New research using psilocybin and meditation shows that ego dissolution corresponds to decreased activity in the brain's 'selfing' network...",
    fullContent: "The DMN—default mode network—is the brain's selfing system. When it goes offline, so does your sense of being a separate self. This is the neuroscience of enlightenment.",
    tags: ["Neuroscience", "Research", "PhD Level", "DMN", "Consciousness"],
    icon: Brain,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/20",
    japaneseIcon: "crane",
    level: "L6",
    readTime: "15 min",
    author: "Dr. Neural Networks"
  },
  {
    title: "Masculine Shadow Integration",
    category: "Sacred Masculinity",
    preview: "The warrior who never learned to feel. The king who never learned to serve. The lover who never learned to surrender. The magician who never learned to be vulnerable. Modern masculinity is a shadow of its potential...",
    fullContent: "True masculinity is not about dominance or suppression of emotion. It's about conscious strength, emotional intelligence, and the courage to be vulnerable.",
    tags: ["Masculinity", "Shadow", "Integration", "Archetypes"],
    icon: Zap,
    color: "text-amber-700",
    bgColor: "bg-primary",
    borderColor: "border-amber-300",
    hoverBorder: "hover:border-amber-300",
    japaneseIcon: "mountain",
    level: "L3",
    readTime: "10 min",
    author: "The Conscious Warrior"
  },
  {
    title: "The Myth of Mental Illness",
    category: "Paradigm Shift",
    preview: "What if depression isn't a disorder but a response to a disordered world? What if anxiety isn't pathology but intelligence? What if your 'mental illness' is actually spiritual emergence trying to break through...",
    fullContent: "The medical model treats symptoms, not souls. True healing happens when we understand that many 'mental illnesses' are actually spiritual emergencies—the psyche's attempt to heal itself.",
    tags: ["Alternative Medicine", "Spiritual Emergency", "Paradigm Shift"],
    icon: Eye,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/20",
    japaneseIcon: "wave",
    level: "L4",
    readTime: "20 min",
    author: "The Paradigm Shifter"
  },
  {
    title: "Love Without Attachment",
    category: "Sacred Relating",
    preview: "Most of what we call love is need, possession, projection, and attachment wearing the mask of love. True love has no opposite because it excludes nothing. It loves what is, not what it wants things to be...",
    fullContent: "Attachment is the ego's version of love. True love is freedom—the freedom to be yourself and the freedom to let others be themselves.",
    tags: ["Love", "Attachment", "Relationships", "Non-Dual"],
    icon: Heart,
    color: "text-amber-700",
    bgColor: "bg-primary",
    borderColor: "border-amber-300",
    hoverBorder: "hover:border-amber-300",
    japaneseIcon: "cherry",
    level: "L5",
    readTime: "12 min",
    author: "The Loving Witness"
  },
  {
    title: "The Technology of Enlightenment",
    category: "Modern Mysticism",
    preview: "Enlightenment is not a state to achieve but a technology to embody. Ancient wisdom meets modern neuroscience in the laboratory of consciousness. Each meditation is an experiment, each insight a data point...",
    fullContent: "We are living through the democratization of enlightenment. What once took lifetimes in monasteries can now be accelerated through understanding the technology of consciousness.",
    tags: ["Technology", "Consciousness", "Acceleration", "Modern"],
    icon: Target,
    color: "text-primary",
    bgColor: "bg-primary",
    borderColor: "border-primary/20",
    hoverBorder: "hover:border-primary/20",
    japaneseIcon: "torii",
    level: "L6",
    readTime: "18 min",
    author: "The Tech Mystic"
  },
  {
    title: "Death Before Death",
    category: "Ultimate Teaching",
    preview: "The ego must die before the body dies. This is the great work, the opus magnum, the reason you incarnated. Not to succeed, not to be happy, not to be loved—but to remember what you are before you forget again...",
    fullContent: "Physical death is optional—ego death is mandatory. The question is whether you'll die consciously or unconsciously, willingly or kicking and screaming.",
    tags: ["Death", "Ego Death", "Ultimate", "Mysticism"],
    icon: Crown,
    color: "text-amber-700",
    bgColor: "bg-primary",
    borderColor: "border-amber-300",
    hoverBorder: "hover:border-amber-300",
    japaneseIcon: "lotus",
    level: "L7",
    readTime: "25 min",
    author: "The Death Walker"
  }
];

const categories = [
  { name: "Ego Death", count: 24, color: "text-primary" },
  { name: "Trauma Healing", count: 18, color: "text-amber-700" },
  { name: "Neuroscience", count: 15, color: "text-primary" },
  { name: "Shadow Work", count: 21, color: "text-amber-700" },
  { name: "Consciousness", count: 33, color: "text-primary" },
  { name: "Sacred Relating", count: 12, color: "text-amber-700" }
];

export default function LibraryPreview() {
  const [activeArticle, setActiveArticle] = useState<LibraryArticle | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <Sparkles className="h-8 w-8 text-amber-700 float-3d" />
          <span className="text-white text-2xl font-light">The Archive of Truth</span>
          <Sparkles className="h-8 w-8 text-primary float-3d" />
        </div>
        <p className="text-slate-300 text-lg italic leading-relaxed max-w-4xl mx-auto">
          "This is not a library of books but a library of souls. Each piece of wisdom here
          has been earned through blood, tears, and the fire of transformation. Read with reverence."
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((category) => (
          <Badge
            key={category.name}
            variant="outline"
            className={`border-slate-600 ${category.color} hover:bg-slate-700/50 haptic-btn cursor-pointer`}
          >
            {category.name} ({category.count})
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {libraryContent.map((content) => {
          const IconComponent = content.icon;
          return (
            <Card
              key={content.title}
              className={`bg-black/40 backdrop-blur-sm ${content.borderColor} ${content.hoverBorder} zen-transition card-3d haptic-btn group cursor-pointer min-h-[300px]`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`h-12 w-12 rounded-lg bg-gradient-to-br from-slate-800/50 to-slate-600/50 flex items-center justify-center group-hover:scale-105 transition-transform border ${content.borderColor}`}
                    >
                      <IconComponent className={`h-6 w-6 ${content.color}`} />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Badge variant="outline" className={`${content.borderColor} ${content.color} text-xs`}>
                          {content.level}
                        </Badge>
                        <span className="text-muted-foreground text-xs">{content.readTime}</span>
                      </div>
                      <h3 className="text-white font-medium text-lg">{content.title}</h3>
                      <p className="text-muted-foreground text-xs">{content.category}</p>
                    </div>
                  </div>
                  <JapaneseIcon
                    type={content.japaneseIcon as any}
                    className={`${content.color} w-6 h-6 float-3d`}
                  />
                </div>

                <div className="flex-grow">
                  <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">"{content.preview}"</p>

                  <p className="text-muted-foreground text-xs leading-relaxed mb-4">{content.fullContent}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    {content.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-xs italic">by {content.author}</span>
                    <Button
                      size="sm"
                      className={`${content.bgColor} hover:${content.bgColor}/80 text-white haptic-btn text-xs px-4`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveArticle({
                          title: content.title,
                          category: content.category,
                          preview: content.preview,
                          fullContent: content.fullContent,
                          tags: content.tags,
                          level: content.level,
                          readTime: content.readTime,
                          author: content.author,
                        });
                        setIsOpen(true);
                      }}
                      aria-label={`Read full article: ${content.title}`}
                    >
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12">
        <div className="bg-black/30 backdrop-blur-sm border border-amber-300 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-white text-2xl font-light mb-4">The Living Library</h3>
            <p className="text-slate-300 text-sm leading-relaxed italic max-w-4xl mx-auto mb-6">
              "This archive grows with each soul that dares to look into the abyss of themselves and report back.
              Every piece of wisdom here was purchased with suffering and paid for with truth.
              Take what serves you, leave what doesn't, but honor the courage it took to write it."
            </p>
          </div>
        </div>
      </div>

      <LibraryArticleDialog
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) setActiveArticle(null);
        }}
        article={activeArticle}
      />
    </div>
  );
}

