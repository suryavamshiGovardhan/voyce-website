import { SEOHead } from "@/components/SEOHead";
import { ArticleSchema } from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import heroImage from '@/assets/atheism-doctrine-hero.jpg';

export default function AtheismDoctrinePage() {
  return (
    <>
      <SEOHead
        title="Doctrines of Atheism: The Rebel's Reason — A Philosophical Journey"
        description="VOYCE explores atheism not as disbelief, but as the pursuit of truth without excuses. A journey through philosophy, reason, and the courage to question."
        keywords="atheism, philosophy, reason, independent thinking, existentialism, critical thinking, VOYCE, rebellion, truth"
        ogType="article"
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/article/atheism-doctrines"
      />
      <ArticleSchema
        title="Doctrines of Atheism: The Rebel's Reason"
        description="VOYCE explores atheism not as disbelief, but as the pursuit of truth without excuses."
        author="Suryavamshi Govardhan"
        datePublished="2025-01-15"
        image={heroImage}
        url="https://suryavamshigovardhan.github.io/voyce-website/article/atheism-doctrines"
      />
      <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-32 pb-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto relative z-10">
            <img src={heroImage} alt="A lone figure standing at the edge of a cliff looking into the sky, symbolizing independent thought" className="w-full rounded-xl mb-8 shadow-lg" loading="eager" />
            <div className="text-center space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-4">
                💭 VOYCE Philosophy
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                Doctrines of Atheism: The Rebel's Reason
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
                The pursuit of truth without excuses
              </p>
            </div>
          </div>
          
          {/* Decorative icon */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-5 text-9xl">
            🧠
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 pb-20 space-y-16">
          
          {/* Intro Section */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🔥</span>
              <h2 className="text-3xl font-bold mt-2">The Wild Honesty of Human Thought</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                There's a wild honesty buried in human thought — a part of us that refuses blind obedience and demands clarity.
              </p>
              <p>Some call that rebellion.</p>
              <p>Some call it arrogance.</p>
              <p>Some call it <span className="font-bold text-foreground">atheism</span>.</p>
              <p className="pt-4">
                But at its root, atheism isn't the worship of disbelief.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground font-medium">
                It is the pursuit of truth without excuses.
              </blockquote>
              <p>
                It's a journey — philosophical, emotional, and sometimes painful — especially in a world built on inherited faiths, unquestioned rituals, and ancient fears.
              </p>
              <p className="font-bold text-primary pt-4">
                This isn't a war against belief. It's a call to think.
              </p>
            </div>
          </Card>

          <Separator className="my-12" />

          {/* Section 1: Poverty */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">⚖️</span>
              <h2 className="text-3xl font-bold mt-2">1. The Burden of Poverty</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <blockquote className="border-l-4 border-destructive pl-6 py-2 text-foreground font-medium">
                "Poverty is a sin. The greatest sin in this world is to be poor — and it is a punishment."
              </blockquote>
              <p>
                Not because someone chose it, but because society treats poverty like guilt.
              </p>
              <p>
                Systems built by the privileged pretend fairness exists, while the poor walk through life carrying the weight of someone else's design.
              </p>
              <p className="font-medium text-foreground pt-4">
                Atheist thought challenges the narrative that suffering is divine karma or destiny.
              </p>
              <p>It asks:</p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-primary font-medium">
                "If suffering is God's will, then whose comfort is being protected by that belief?"
              </blockquote>
            </div>
          </Card>

          {/* Section 2: Theories */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">📜</span>
              <h2 className="text-3xl font-bold mt-2">2. The Invention of Theories and Truths</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">
                "Truth" has always been a political property.
              </p>
              <p>
                From scriptures to constitutions, from monarchies to modern governments — theories have shaped morality, law, and meaning.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground font-medium">
                "Theories are inventions of the privileged ones."
              </blockquote>
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-muted/30 rounded-lg text-center font-medium text-foreground">
                  The powerful write history.
                </div>
                <div className="p-4 bg-muted/30 rounded-lg text-center font-medium text-foreground">
                  The powerless read it.
                </div>
              </div>
              <p className="pt-4">
                Atheism — in its purest intellectual form — refuses to accept a truth simply because it's ancient or inherited.
              </p>
              <p className="font-bold text-primary">It dares to ask:</p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-primary font-medium">
                "Who benefits from this belief?"
              </blockquote>
            </div>
          </Card>

          {/* Section 3: Fire of Thought */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">💡</span>
              <h2 className="text-3xl font-bold mt-2">3. The Fire of Thought: Criticism & Independent Thinking</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground font-medium">
                "Criticism and independent thinking are indispensable qualities of a revolutionary."
              </blockquote>
              <p className="pt-4">
                Revolution doesn't always mean tearing down cities — sometimes it means tearing down assumptions.
              </p>
              <div className="p-6 bg-primary/5 rounded-lg my-6">
                <p className="font-bold text-foreground mb-2">Independent thought isn't disrespectful.</p>
                <p className="text-foreground">It's <span className="text-primary font-bold">responsible</span>.</p>
              </div>
              <p className="font-medium text-foreground">
                A society without skepticism becomes obedient — and obedience is the fastest way to lose freedom.
              </p>
            </div>
          </Card>

          {/* Section 4: Price of Questioning */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">⚡</span>
              <h2 className="text-3xl font-bold mt-2">4. The Price of Questioning</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p className="font-medium text-foreground">Every person who asked:</p>
              <div className="pl-6 space-y-2 text-base italic">
                <p>Does God exist?</p>
                <p>Why should I believe this?</p>
                <p>Who created the idea of the divine?</p>
              </div>
              <p className="pt-4">…has been labeled:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
                <div className="p-3 bg-destructive/10 rounded-lg text-center text-sm font-medium border border-destructive/20">
                  Apostate
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg text-center text-sm font-medium border border-destructive/20">
                  Renegade
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg text-center text-sm font-medium border border-destructive/20">
                  Mad
                </div>
                <div className="p-3 bg-destructive/10 rounded-lg text-center text-sm font-medium border border-destructive/20">
                  Dangerous
                </div>
              </div>
              <p className="font-bold text-primary pt-4">
                Because questioning faith threatens power — not peace.
              </p>
              <p className="italic">
                People fear what destabilizes comfort.
              </p>
            </div>
          </Card>

          {/* Section 5: Reason */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-card border-primary/30">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">⭐</span>
              <h2 className="text-3xl font-bold mt-2">5. Reason — The Guiding Star</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <blockquote className="border-l-4 border-primary pl-6 py-2 text-xl font-bold text-primary">
                "Reason is the guiding star of life."
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-background/50 rounded-lg">
                  <p className="font-bold text-foreground mb-2">Faith demands surrender.</p>
                  <p className="text-sm text-muted-foreground">Accept without question.</p>
                </div>
                <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary/30">
                  <p className="font-bold text-primary mb-2">Reason demands effort.</p>
                  <p className="text-sm text-muted-foreground">Question everything.</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                One is easier — the other is heavier, slower, lonelier…
              </p>
              <p className="font-bold text-foreground text-xl pt-4">
                But infinitely more real.
              </p>
              <p className="text-muted-foreground pt-4">
                And the man who calls himself a realist must confront the foundations of belief — not because he hates faith, but because he seeks truth.
              </p>
            </div>
          </Card>

          {/* Section 6: Concept of God */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🌌</span>
              <h2 className="text-3xl font-bold mt-2">6. The Concept of God: Three Omnis</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>Three words define the divine in most religions:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-6 bg-muted/30 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary mb-2">Omnipresent</p>
                  <p className="text-sm">Everywhere</p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary mb-2">Omniscient</p>
                  <p className="text-sm">All knowing</p>
                </div>
                <div className="p-6 bg-muted/30 rounded-lg text-center">
                  <p className="text-2xl font-bold text-primary mb-2">Omnipotent</p>
                  <p className="text-sm">All powerful</p>
                </div>
              </div>
              <p className="pt-4">
                If one being controls everything, knows everything, and sees everything — then human freedom is illusion, and morality becomes obedience instead of choice.
              </p>
              <p className="font-bold text-primary pt-4">Atheism asks:</p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-primary font-medium">
                "If the universe is governed by law, why add a ruler?"
              </blockquote>
            </div>
          </Card>

          {/* Section 7: Psychological Role */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🧩</span>
              <h2 className="text-3xl font-bold mt-2">7. The Psychological Role of God</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground font-medium">
                "The idea of God is helpful to man in distress."
              </blockquote>
              <p className="pt-4">
                Yes. Humans created stories before they created science.
              </p>
              <p className="font-medium text-foreground">God became:</p>
              <ul className="pl-6 space-y-2 text-base">
                <li>• <span className="font-medium text-foreground">Hope</span> when life was uncertain</li>
                <li>• <span className="font-medium text-foreground">Comfort</span> when death was terrifying</li>
                <li>• <span className="font-medium text-foreground">Explanation</span> when knowledge was scarce</li>
              </ul>
              <p className="pt-6 italic">
                Atheism acknowledges this — not as mockery, but as anthropology.
              </p>
            </div>
          </Card>

          {/* Section 8: Books & Thinkers */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-card to-card border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">📚</span>
              <h2 className="text-3xl font-bold mt-2">8. Books & Thinkers That Shaped These Ideas</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>Your notes reference key thinkers:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-bold text-foreground">Mikhail Bakunin</p>
                  <p className="text-sm">The anarchist who argued that belief is a chain</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-bold text-foreground">Karl Marx</p>
                  <p className="text-sm">Who saw religion as a tool of social control</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-bold text-foreground">Lenin & Trotsky</p>
                  <p className="text-sm">Political revolutionaries</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg">
                  <p className="font-bold text-foreground">Charles Darwin</p>
                  <p className="text-sm">Whose biology shook theology</p>
                </div>
              </div>
              <p className="pt-4 font-medium text-primary">
                These ideas didn't destroy religion — they expanded human understanding.
              </p>
            </div>
          </Card>

          {/* Section 9: VOYCE Connection */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-card border-primary/30">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🎯</span>
              <h2 className="text-3xl font-bold mt-2">Connecting This to VOYCE</h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                VOYCE isn't about atheism.
              </p>
              <p className="font-bold text-foreground text-xl pt-2">
                It's about awareness, identity, mental clarity, and challenging inherited psychological patterns.
              </p>
              <p className="text-muted-foreground pt-4">This doctrine aligns with VOYCE because:</p>
              <div className="space-y-3 my-6">
                <div className="p-4 bg-background/50 rounded-lg border-l-4 border-primary">
                  <p className="text-foreground">It teaches people to <span className="font-bold text-primary">think</span> instead of repeat.</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border-l-4 border-primary">
                  <p className="text-foreground">It encourages <span className="font-bold text-primary">self-inquiry</span> instead of blind acceptance.</p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border-l-4 border-primary">
                  <p className="text-foreground">It replaces <span className="font-bold text-primary">fear with clarity</span>, tradition with curiosity, and helplessness with autonomy.</p>
                </div>
              </div>
              <p className="text-muted-foreground pt-4">
                In a world where most minds are conditioned before they are conscious, VOYCE becomes a platform for mental rebellion — with compassion.
              </p>
            </div>
          </Card>

          {/* Outro */}
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-4xl">🌅</span>
              <h2 className="text-3xl font-bold mt-2">Conclusion: The Quiet Revolution</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-muted-foreground">
                Being an atheist isn't about rejecting God.
              </p>
              <p className="font-bold text-foreground text-xl">
                It's about refusing to stop asking questions.
              </p>
              <p className="text-muted-foreground">
                It's about choosing honesty over comfort, evidence over assumption, courage over conformity.
              </p>
              <div className="py-8 space-y-4 text-center">
                <p className="text-muted-foreground">Some will call it rebellion.</p>
                <p className="text-muted-foreground">Some will call it arrogance.</p>
                <p className="text-muted-foreground">But history has a softer word for it:</p>
                <p className="text-4xl font-bold text-primary">Awakening.</p>
              </div>
              <div className="pt-6 text-center space-y-2 text-muted-foreground">
                <p className="text-sm italic">Messy handwriting, sharp mind.</p>
                <p className="text-2xl">✊🔥</p>
              </div>
            </div>
          </Card>

        </div>

        <Footer />
      </div>
    </>
  );
}
