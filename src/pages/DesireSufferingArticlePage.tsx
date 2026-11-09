import { SEOHead } from "@/components/SEOHead";
import { ArticleSchema } from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import heroImage from '@/assets/desire-suffering-hero.jpg';

export default function DesireSufferingArticlePage() {
  return (
    <>
      <SEOHead
        title="Desire, Suffering & The Human Journey — The Debate Buddha Never Finished"
        description="VOYCE explores the philosophical debate between desire and suffering, questioning Buddha's teachings through modern psychology and existential truth."
        keywords="desire, suffering, Buddha, philosophy, psychology, human journey, mindfulness, existentialism, VOYCE"
        ogType="article"
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/article/desire-suffering-journey"
      />
      <ArticleSchema
        title="Desire, Suffering & The Human Journey — The Debate Buddha Never Finished"
        description="VOYCE explores the philosophical debate between desire and suffering, questioning Buddha's teachings through modern psychology and existential truth."
        author="Suryavamshi Govardhan"
        datePublished="2025-01-15"
        image={heroImage}
        url="https://suryavamshigovardhan.github.io/voyce-website/article/desire-suffering-journey"
      />
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto relative z-10">
            <img src={heroImage} alt="A lotus flower with flame emerging from dark water, symbolizing desire and suffering" className="w-full rounded-xl mb-8 shadow-lg" loading="eager" />
            <div className="text-center space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
                🌿 VOYCE Philosophy
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Desire, Suffering & The Human Journey
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
                The Debate Buddha Never Finished
              </p>
            </div>
          </div>
          
          {/* Decorative Buddha silhouette */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-5 text-9xl">
            🧘‍♂️
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 pb-20 space-y-16">
          
          {/* Intro Section */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🧘‍♂️</span>
              <h2 className="text-3xl font-bold mt-2">The Argument That Started Everything</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                For thousands of years, people have repeated one line as if it were the ultimate truth:
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground font-medium">
                "Desire is the root of suffering." — Buddha
              </blockquote>
              <p>But if that's really true… Why does the entire universe run on desire?</p>
              <div className="pl-6 space-y-2 text-base">
                <p>A seed desires sunlight.</p>
                <p>A bird desires flight.</p>
                <p>A child desires growth.</p>
                <p>A human desires meaning.</p>
              </div>
              <p className="font-medium text-foreground pt-4">
                So which is true?
              </p>
              <p>Is desire the villain? Or is desire the fuel? Or is the journey itself the real suffering?</p>
              <p className="font-bold text-primary pt-4">
                VOYCE isn't here to repeat old wisdom. VOYCE is here to question it.
              </p>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Section 1 */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🌑</span>
              <h2 className="text-3xl font-bold mt-2">What Buddha Actually Meant (And What He Didn't)</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">The world misquoted Buddha.</p>
              <p>He never said:</p>
              <ul className="pl-6 space-y-2 list-none">
                <li className="line-through opacity-60">ambition is bad</li>
                <li className="line-through opacity-60">goals are bad</li>
                <li className="line-through opacity-60">passion is bad</li>
                <li className="line-through opacity-60">purpose is bad</li>
              </ul>
              <p className="pt-4">
                He used the word <span className="font-semibold text-foreground">Tṛṣṇā</span> — craving, clinging, obsessive wanting.
              </p>
              <p>Not ambition. Not growth. Not dreams.</p>
              <p className="font-medium text-primary pt-4">
                Buddha attacked addiction. Not aspiration.
              </p>
              <p>That's where society misunderstood him. Not Buddha — society.</p>
            </div>
          </Card>

          {/* Section 2 */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🔥</span>
              <h2 className="text-3xl font-bold mt-2">The Human Brain Doesn't Care About Spiritual Grammar</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>Your brain doesn't differentiate:</p>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-muted/30 rounded-lg text-center">ambition</div>
                <div className="p-4 bg-muted/30 rounded-lg text-center">greed</div>
                <div className="p-4 bg-muted/30 rounded-lg text-center">desire</div>
                <div className="p-4 bg-muted/30 rounded-lg text-center">passion</div>
              </div>
              <p className="font-medium text-foreground">To the brain, everything is wanting.</p>
              <p>And wanting creates:</p>
              <ul className="pl-6 space-y-2">
                <li>• friction</li>
                <li>• pressure</li>
                <li>• expectation</li>
                <li>• fear of failure</li>
                <li>• emotional heaviness</li>
              </ul>
              <p className="font-medium text-primary pt-4">
                Which means… Even ambition — the "good desire" — creates suffering.
              </p>
              <p className="italic">This is where modern psychology meets raw honesty.</p>
            </div>
          </Card>

          {/* Section 3 */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🌋</span>
              <h2 className="text-3xl font-bold mt-2">The Journey Is Not Peace. The Journey IS Suffering.</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>People love saying:</p>
              <div className="pl-6 space-y-2 italic opacity-70">
                <p>"Trust the journey."</p>
                <p>"The journey is beautiful."</p>
                <p>"The journey is peace."</p>
              </div>
              <p className="font-medium pt-4">Cute lines. Instagram-friendly. Reality? Brutal.</p>
              <p className="font-bold text-foreground pt-4">The journey is:</p>
              <ul className="pl-6 space-y-2">
                <li>• uncertainty</li>
                <li>• self-doubt</li>
                <li>• emotional weight</li>
                <li>• identity shifts</li>
                <li>• discipline war</li>
                <li>• constant internal conflict</li>
              </ul>
              <p className="pt-4 font-medium text-primary">
                Growth hurts because you're killing old versions of yourself.
              </p>
              <p>That is suffering. And real suffering is not at the destination — it's in the path.</p>
            </div>
          </Card>

          {/* Chart Section */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-card to-card border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">📉</span>
              <h2 className="text-3xl font-bold mt-2">The Chart of Human Suffering (VOYCE Model)</h2>
            </div>
            <div className="space-y-6">
              <div className="bg-background/50 rounded-lg p-8 backdrop-blur-sm">
                <div className="relative h-64 flex items-end justify-between gap-2">
                  {[
                    { label: "Ignition", height: "20%", color: "bg-green-500/70" },
                    { label: "Discipline", height: "45%", color: "bg-yellow-500/70" },
                    { label: "Stress", height: "70%", color: "bg-orange-500/70" },
                    { label: "Progress", height: "85%", color: "bg-red-500/70" },
                    { label: "Hope", height: "60%", color: "bg-orange-500/70" },
                    { label: "Breakdowns", height: "90%", color: "bg-red-600/70" },
                    { label: "Growth", height: "35%", color: "bg-primary/70" },
                  ].map((stage, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                      <div 
                        className={`w-full ${stage.color} rounded-t-lg transition-all duration-500 hover:opacity-80`}
                        style={{ height: stage.height }}
                      />
                      <p className="text-xs text-center font-medium">{stage.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-center font-medium text-foreground">
                    X-axis: Stages of a Goal
                  </p>
                  <p className="text-center text-sm text-muted-foreground mt-1">
                    Y-axis: Emotional Pain Level
                  </p>
                </div>
              </div>
              <p className="text-center text-xl font-bold text-primary italic">
                "Journey = Pain that transforms."
              </p>
            </div>
          </Card>

          {/* Section 5 */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🧘‍♂️</span>
              <h2 className="text-3xl font-bold mt-2">So Who Is Right? Buddha or You?</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">Let's settle it.</p>
              
              <div className="space-y-4">
                <div className="p-6 bg-green-500/10 rounded-lg border-l-4 border-green-500">
                  <p className="font-bold text-foreground mb-2">✔ Spiritually:</p>
                  <p>Buddha is right. Craving creates suffering.</p>
                </div>
                
                <div className="p-6 bg-blue-500/10 rounded-lg border-l-4 border-blue-500">
                  <p className="font-bold text-foreground mb-2">✔ Psychologically:</p>
                  <p>You are right. Every desire — even the "good ones" — creates internal friction.</p>
                </div>
                
                <div className="p-6 bg-purple-500/10 rounded-lg border-l-4 border-purple-500">
                  <p className="font-bold text-foreground mb-2">✔ Existentially:</p>
                  <p>Life itself is a chain of desires. No desire = no movement. No movement = no life.</p>
                </div>
              </div>

              <div className="pt-6 text-center space-y-3">
                <p className="text-xl font-bold text-primary">So the deepest truth is:</p>
                <div className="space-y-2 text-foreground">
                  <p>Desire is not the enemy. Attachment is.</p>
                  <p>But the journey hurts anyway.</p>
                  <p className="font-bold">And that pain becomes meaning.</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Section 6 */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-card border-primary/30">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🪷</span>
              <h2 className="text-3xl font-bold mt-2">VOYCE'S POV: The Real Philosophy</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="font-bold text-foreground text-xl">
                Suffering is not a punishment. It's the sharpening stone of consciousness.
              </p>
              <p className="text-muted-foreground">
                If the journey didn't hurt, you wouldn't transform. You'd just continue.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-medium text-foreground">Pain pushes.</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-medium text-foreground">Desire pulls.</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-medium text-foreground">Attachment traps.</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-medium text-primary">Awareness frees.</p>
                </div>
              </div>
              <p className="font-bold text-foreground pt-4">
                This is VOYCE — questioning everything, including the "truths" the world blindly repeats.
              </p>
            </div>
          </Card>

          {/* Outro */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🌱</span>
              <h2 className="text-3xl font-bold mt-2">The Unfiltered Wisdom</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <blockquote className="text-2xl font-bold text-center py-6 text-primary">
                "Peace is not the journey. Peace is mastering the journey."
              </blockquote>
              <p className="text-muted-foreground">And that starts with understanding:</p>
              <div className="space-y-3 text-center font-medium text-foreground">
                <p>Wanting hurts.</p>
                <p>Growing hurts.</p>
                <p>Becoming hurts.</p>
              </div>
              <div className="pt-6 text-center space-y-3">
                <p className="text-muted-foreground">And yet… we keep walking.</p>
                <p className="text-muted-foreground">Because something inside us whispers:</p>
                <p className="text-3xl font-bold text-primary">"Become."</p>
              </div>
              <div className="pt-6 text-center space-y-2 text-muted-foreground">
                <p>This whisper is desire.</p>
                <p className="font-bold text-foreground text-xl">And that desire is life.</p>
              </div>
            </div>
          </Card>

        </div>

        <Footer />
      </div>
    </>
  );
}
