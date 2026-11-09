import { NextStep } from "@/components/site/value";
import SiteChrome from "@/components/site/SiteChrome";
import { useState } from "react";
import { SITE_ORIGIN } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Brain, Target, Mic, CheckCircle2, BookOpen, Sparkles, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { SEOHead } from "@/components/SEOHead";
import { ArticleSchema } from "@/components/StructuredData";
import { toast } from "sonner";
import heroImage from '@/assets/day1-journal-hero.jpg';

const Day1JournalPage = () => {
  const navigate = useNavigate();
  
  // Form state
  const [emotionState, setEmotionState] = useState<string[]>([]);
  const [emotionIntensity, setEmotionIntensity] = useState([5]);
  const [completedTasks, setCompletedTasks] = useState({
    identity: false,
    thinking: false,
    speaking: false,
    action: false,
  });
  const [hardestPart, setHardestPart] = useState("");
  const [whyHard, setWhyHard] = useState("");
  const [objectAnalyzed, setObjectAnalyzed] = useState("");
  const [insights, setInsights] = useState(["", "", ""]);
  const [prePoint, setPrePoint] = useState("");
  const [preReason, setPreReason] = useState("");
  const [preExample, setPreExample] = useState("");
  const [actionTask, setActionTask] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [satisfied, setSatisfied] = useState<boolean | null>(null);
  const [inputCategory, setInputCategory] = useState("");
  const [inputSource, setInputSource] = useState("");
  const [inputTakeaway, setInputTakeaway] = useState("");
  const [disciplineShown, setDisciplineShown] = useState("");
  const [struggled, setStruggled] = useState("");
  const [carryForward, setCarryForward] = useState("");
  const [selfCompassion, setSelfCompassion] = useState("");
  const [selfRating, setSelfRating] = useState([5]);
  const [signatureThought, setSignatureThought] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);

  const emotionOptions = ["Calm", "Stressed", "Confused", "Motivated", "Numb", "Hopeful", "Overwhelmed", "Balanced"];
  const inputCategories = ["Philosophy", "Psychology", "Spiritual/Vedic", "Technology", "Automobile/Bikes", "History", "Other"];

  const toggleEmotion = (emotion: string) => {
    setEmotionState(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const handleSubmit = async () => {
    setIsAnalyzing(true);
    setAiAnalysis(null);
    
    const journalData = {
      emotions: emotionState,
      emotionIntensity: emotionIntensity[0],
      completedTasks,
      hardestPart,
      whyHard,
      objectAnalyzed,
      insights,
      prePoint,
      preReason,
      preExample,
      actionTask,
      timeSpent,
      satisfied,
      inputCategory,
      inputSource,
      inputTakeaway,
      disciplineShown,
      struggled,
      carryForward,
      selfCompassion,
      selfRating: selfRating[0],
      signatureThought,
    };

    try {
      const { data, error } = await supabase.functions.invoke('analyze-journal', {
        body: { journalData }
      });

      if (error) {
        console.error("Error calling analyze-journal:", error);
        toast.error("Couldn't generate analysis", {
          description: "Your entry was saved. AI analysis temporarily unavailable.",
        });
        return;
      }

      if (data?.analysis) {
        setAiAnalysis(data.analysis);
        toast.success("Your reflection has been analyzed!", {
          description: "Scroll down to see your personalized insights.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <SiteChrome>
      <SEOHead
        title="Day 1: Installing a New Mental Operating System | VOYCE Journal"
        description="A personal journey of breaking the cycle of passive overthinking. Day 1 of a 21-day protocol to rebuild self-thinking ability through structured discipline."
        keywords="self improvement, mental health journal, 21 day challenge, discipline, overthinking, personal growth, VOYCE"
        ogImage={`${SITE_ORIGIN}/og-image.jpg`}
      />
      <ArticleSchema
        title="Day 1: Installing a New Mental Operating System"
        description="A personal journal documenting the first day of a 21-day self-improvement protocol, breaking free from overthinking through structured action."
        author="Suryavamshi Govardhan"
        datePublished="2025-12-05"
        dateModified="2025-12-05"
        image={heroImage}
        url="https://suryavamshigovardhan.github.io/voyce-website/article/day-1-journal"
      />

      <div className="bg-background">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={() => navigate("/blog")}
              className="gap-2 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </motion.div>

          {/* Hero Image */}
          <img src={heroImage} alt="Open journal notebook with pen on a desk, symbolizing a fresh start" className="w-full rounded-xl mb-8 shadow-lg" loading="eager" />

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">5th December 2025 • Day 1</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
              Installing a New Mental Operating System
            </h1>
            <p className="text-xl text-muted-foreground italic">
              The beginning of a 21-day protocol to rebuild self-thinking ability
            </p>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
          >
            <Card className="mb-8 border-l-4 border-primary bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-lg italic text-muted-foreground">
                  "Today wasn't about huge ideas; it was about defying mental fatigue. I realized recently that what I thought was laziness was actually a paralyzing fear of making wrong decisions, leading to 'thinking capacity' burnout."
                </p>
              </CardContent>
            </Card>

            <p className="text-lg leading-relaxed">
              So, today I started a <strong>21-day training protocol</strong>. A systematic rebuild of my own self-thinking ability.
            </p>
            
            <p className="text-lg leading-relaxed">
              The goal isn't motivation; it's <strong>proof of execution</strong>. Today involved three steps: resetting my identity narrative, running structured drills to force original thought and clear speech, and finally, executing one task I've been dreading under strict time constraints.
            </p>
          </motion.div>

          {/* Day 1 Completion Report */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8" />
              Day 1 Completion Report
            </h2>
            
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Brain className="w-5 h-5 text-primary" />
                    Object Analyzed
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A <strong>standard coffee mug</strong> — analyzed its shift from purely functional ceramic utility to a modern vessel for self-expression and branding. What was once just a container for hot beverages has become a statement piece, a conversation starter, a silent communicator of identity.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Mic className="w-5 h-5 text-primary" />
                    PRE Speaking Drill
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">
                    "Self-confidence matters to me because relying constantly on external validation is mentally exhausting and prevents genuine original work."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Target className="w-5 h-5 text-primary" />
                    Hard Section Task
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Set a <strong>20-minute timer</strong> and finally organized the chaotic "Downloads" folder on my laptop, deleting <strong>4GB of unnecessary files</strong>. The digital clutter was a mirror of mental clutter — clearing it felt like creating space for new thoughts.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/30 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Difficulty Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    The <strong>Medium section (Thinking Drill)</strong> felt hardest because forcing my brain to generate original future concepts for a simple object required more mental energy than expected. It's easier to consume ideas than create them.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Key Takeaway */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12 p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">The Biggest Takeaway</h3>
            <p className="text-xl leading-relaxed">
              <strong>Discipline feels lighter than procrastination.</strong>
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              By showing up and completing all three tiers, I've already broken the cycle of passive overthinking. I have proof that I can direct my own actions. The operating system is rebooting.
            </p>
          </motion.div>

          {/* Closing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16 text-center"
          >
            <p className="text-lg text-muted-foreground italic mb-4">
              "20 minutes of focused action beats 20 hours of thinking about it."
            </p>
            <p className="text-muted-foreground">
              Tomorrow, we increase the complexity slightly based on feedback that the thinking drill was the hardest part.
            </p>
          </motion.div>

          {/* Interactive Form Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-border pt-12"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Your Turn: Daily Progress Entry
              </h2>
              <p className="text-muted-foreground">
                Use this form to document your own journey. You're building consistency, not perfection.
              </p>
            </div>

            <div className="space-y-8">
              {/* 1. State Check-in */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    State Check-in
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="mb-3 block">Today I felt:</Label>
                    <div className="flex flex-wrap gap-2">
                      {emotionOptions.map((emotion) => (
                        <Button
                          key={emotion}
                          variant={emotionState.includes(emotion) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleEmotion(emotion)}
                        >
                          {emotion}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Emotion Intensity (0-10): {emotionIntensity[0]}</Label>
                    <Slider
                      value={emotionIntensity}
                      onValueChange={setEmotionIntensity}
                      max={10}
                      step={1}
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* 2. What I Completed */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    What I Completed Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { key: "identity", label: "Identity Routine" },
                      { key: "thinking", label: "Thinking Drill" },
                      { key: "speaking", label: "Speaking Exercise" },
                      { key: "action", label: "Action Challenge" },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center space-x-2">
                        <Checkbox
                          id={item.key}
                          checked={completedTasks[item.key as keyof typeof completedTasks]}
                          onCheckedChange={(checked) =>
                            setCompletedTasks((prev) => ({ ...prev, [item.key]: checked }))
                          }
                        />
                        <Label htmlFor={item.key}>{item.label}</Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor="hardest">Hardest part today:</Label>
                      <Input id="hardest" value={hardestPart} onChange={(e) => setHardestPart(e.target.value)} className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="whyHard">Why do I think it was hard?</Label>
                      <Textarea id="whyHard" value={whyHard} onChange={(e) => setWhyHard(e.target.value)} className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 3. Object Analyzed */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                    Object Analyzed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="object">Object:</Label>
                    <Input id="object" value={objectAnalyzed} onChange={(e) => setObjectAnalyzed(e.target.value)} className="mt-1" placeholder="e.g., Coffee mug, pen, phone..." />
                  </div>
                  <div>
                    <Label>Key insights (max 3 points):</Label>
                    {insights.map((insight, i) => (
                      <Input
                        key={i}
                        value={insight}
                        onChange={(e) => {
                          const newInsights = [...insights];
                          newInsights[i] = e.target.value;
                          setInsights(newInsights);
                        }}
                        className="mt-2"
                        placeholder={`Insight ${i + 1}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 4. Speaking Drill - PRE */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                    Speaking Drill — PRE Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="prePoint">Point:</Label>
                    <Input id="prePoint" value={prePoint} onChange={(e) => setPrePoint(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="preReason">Reason:</Label>
                    <Input id="preReason" value={preReason} onChange={(e) => setPreReason(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="preExample">Example:</Label>
                    <Input id="preExample" value={preExample} onChange={(e) => setPreExample(e.target.value)} className="mt-1" />
                  </div>
                </CardContent>
              </Card>

              {/* 5. Action Taken */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                    Action Taken
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="actionTask">Task I did today:</Label>
                    <Input id="actionTask" value={actionTask} onChange={(e) => setActionTask(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="timeSpent">Time spent (minutes):</Label>
                    <Input id="timeSpent" type="number" value={timeSpent} onChange={(e) => setTimeSpent(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label>Do I feel satisfied with the effort?</Label>
                    <div className="flex gap-4 mt-2">
                      <Button variant={satisfied === true ? "default" : "outline"} size="sm" onClick={() => setSatisfied(true)}>Yes</Button>
                      <Button variant={satisfied === false ? "default" : "outline"} size="sm" onClick={() => setSatisfied(false)}>No</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 6. Input of the Day */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                    Input of the Day
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Category:</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {inputCategories.map((cat) => (
                        <Button
                          key={cat}
                          variant={inputCategory === cat ? "default" : "outline"}
                          size="sm"
                          onClick={() => setInputCategory(cat)}
                        >
                          {cat}
                        </Button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="inputSource">Title/Source:</Label>
                    <Input id="inputSource" value={inputSource} onChange={(e) => setInputSource(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="inputTakeaway">One takeaway sentence:</Label>
                    <Textarea id="inputTakeaway" value={inputTakeaway} onChange={(e) => setInputTakeaway(e.target.value)} className="mt-1" />
                  </div>
                </CardContent>
              </Card>

              {/* 7. Self-Reflection */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">7</span>
                    Self-Reflection
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="discipline">Today, I showed discipline in:</Label>
                    <Input id="discipline" value={disciplineShown} onChange={(e) => setDisciplineShown(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="struggled">Today, I struggled with:</Label>
                    <Input id="struggled" value={struggled} onChange={(e) => setStruggled(e.target.value)} className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="carryForward">One thought I want to carry into tomorrow:</Label>
                    <Textarea id="carryForward" value={carryForward} onChange={(e) => setCarryForward(e.target.value)} className="mt-1" />
                  </div>
                </CardContent>
              </Card>

              {/* 8. Self-Compassion */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">8</span>
                    Self-Compassion
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="compassion">"Even if today wasn't perfect, I am proud that I...</Label>
                    <Textarea 
                      id="compassion" 
                      value={selfCompassion} 
                      onChange={(e) => setSelfCompassion(e.target.value)} 
                      className="mt-1" 
                      placeholder="...and I will continue tomorrow."
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Self Rating */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm">📈</span>
                    Self-Rating (0-10)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Label>How I feel about myself today: {selfRating[0]}</Label>
                  <Slider
                    value={selfRating}
                    onValueChange={setSelfRating}
                    max={10}
                    step={1}
                    className="mt-2"
                  />
                </CardContent>
              </Card>

              {/* Signature Thought */}
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    🕊️ Signature Thought
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Label htmlFor="signature">A line that captures your day in one sentence — poetic, sharp, or honest:</Label>
                  <Textarea 
                    id="signature" 
                    value={signatureThought} 
                    onChange={(e) => setSignatureThought(e.target.value)} 
                    className="mt-2" 
                    placeholder="The operating system is rebooting..."
                  />
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button size="lg" onClick={handleSubmit} disabled={isAnalyzing} className="gap-2">
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Analyzing Your Entry...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Get AI Analysis
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  You're building consistency, not perfection. That's the foundation warriors are made from. 💪
                </p>
              </div>

              {/* AI Analysis Result */}
              {aiAnalysis && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="p-2 rounded-full bg-primary/20">
                          <Sparkles className="w-6 h-6 text-primary" />
                        </div>
                        Your Personalized AI Analysis
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        {aiAnalysis.split('\n').map((paragraph, index) => (
                          paragraph.trim() && (
                            <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                              {paragraph}
                            </p>
                          )
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-border/50 text-center">
                        <p className="text-sm text-muted-foreground italic">
                          This analysis is generated based on your unique inputs. Keep journaling to track your growth over the 21 days.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </motion.section>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 text-center"
          >
            <Button
              onClick={() => navigate("/blog")}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Explore More Stories
            </Button>
          </motion.div>
        </div>
      </div>
      <NextStep
        title="Let what you read settle for a minute."
        body="A short private check-in helps you notice how it landed."
        primary={{ to: "/start-here", label: "Start a private check-in" }}
        secondary={{ to: "/blog", label: "More slow reads" }}
      />
    </SiteChrome>
  );
};

export default Day1JournalPage;
