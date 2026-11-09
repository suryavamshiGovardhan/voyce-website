import { SEOHead } from "@/components/SEOHead";
import { ArticleSchema, FounderSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Calendar, User } from "lucide-react";

/**
 * SEO-optimized article page for external authority content
 * Designed for cross-posting to Medium/LinkedIn with backlinks
 */
export default function WhyIBuiltVoycePage() {
  const publishDate = "2025-12-14";
  
  return (
    <>
      <SEOHead
        title="Why I Built VOYCE | By Suryavamshi Govardhan"
        description="Suryavamshi Govardhan shares the personal journey and vision behind creating VOYCE, a mental health platform bridging ancient wisdom with modern psychology."
        keywords="Suryavamshi Govardhan, VOYCE-X, mental health platform, why I built, founder story, wellness entrepreneur, psychology, mindfulness"
        ogImage="https://voyce-x.lovable.app/og-image.png"
        canonicalUrl="https://voyce-x.lovable.app/article/why-i-built-voyce"
      />
      <ArticleSchema
        title="Why I Built VOYCE"
        description="Suryavamshi Govardhan shares the personal journey and vision behind creating VOYCE, a mental health platform bridging ancient wisdom with modern psychology."
        author="Suryavamshi Govardhan"
        datePublished={publishDate}
        url="https://voyce-x.lovable.app/article/why-i-built-voyce"
      />
      <FounderSchema />

      <main className="min-h-screen bg-background">
        <article className="py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Article Header */}
            <header className="mb-12 text-center">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Founder's Story
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Why I Built VOYCE
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <Link 
                    to="/suryavamshi-govardhan" 
                    className="text-primary hover:underline font-medium"
                  >
                    Suryavamshi Govardhan
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime={publishDate}>December 14, 2025</time>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-xl leading-relaxed mb-8">
                There's a moment in every founder's journey when purpose becomes undeniable. For me, that moment 
                arrived not in a boardroom or a classroom, but in the quiet spaces where I witnessed the silent 
                struggles of people around me — friends, family, strangers — all battling invisible battles with 
                their minds.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Problem I Couldn't Ignore</h2>
              <p>
                Growing up in India, I observed a troubling pattern: mental health was either ignored entirely or 
                treated as a stigma. Young people in rural and semi-urban areas had virtually no access to mental 
                health resources. When someone struggled with anxiety, depression, or stress, the common response 
                was to "just deal with it" or "be strong."
              </p>
              <p>
                But strength isn't about suppression. True strength comes from understanding ourselves — our minds, 
                our emotions, our patterns. And that understanding requires access to knowledge that was, for many, 
                completely out of reach.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Bridge Between Worlds</h2>
              <p>
                As I studied psychology and human behavior, I discovered something remarkable: the ancient wisdom 
                of Eastern philosophy — Buddhist concepts of suffering, mindfulness practices, the understanding 
                of desire and attachment — aligned beautifully with modern psychological research. The insights 
                from neuroscience validated what meditation practitioners had known for centuries.
              </p>
              <p>
                This realization became the foundation of <Link to="/" className="text-primary hover:underline font-medium">VOYCE</Link>. 
                I wanted to create a platform that didn't just offer clinical information but wove together the 
                threads of science, philosophy, and practical wisdom into something accessible, engaging, and 
                genuinely helpful.
              </p>

              <Card className="my-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                    "I believe mental health is not a luxury reserved for those who can afford therapy or live in 
                    metropolitan cities. It is a fundamental right, and technology can be the great equalizer."
                    <footer className="mt-2 text-sm text-muted-foreground not-italic">
                      — Suryavamshi Govardhan
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Building for Real People</h2>
              <p>
                VOYCE isn't built for metrics or vanity numbers. Every feature exists because it serves a real 
                need. The DSM-5 Academy helps aspiring mental health professionals and curious minds understand 
                diagnostic frameworks. The mood tracking and journaling features give users tools for self-reflection. 
                The philosophical articles explore the deeper questions of existence and meaning.
              </p>
              <p>
                And critically, everything is available in multiple languages — Telugu, Hindi, English, Kannada, 
                Tamil — because language should never be a barrier to understanding one's own mind.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">The Vision Ahead</h2>
              <p>
                VOYCE is just beginning. With AI-powered insights, community features, and continuously expanding 
                educational content, the platform will grow to serve more people in more meaningful ways. But the 
                core mission remains unchanged: to make emotional wellbeing accessible, understandable, and 
                achievable for everyone.
              </p>
              <p>
                If you're reading this and have ever felt alone in your struggles, know that you're not. 
                <Link to="/" className="text-primary hover:underline font-medium"> VOYCE</Link> exists because 
                I believe every person deserves the tools to understand themselves and navigate their inner world 
                with clarity and compassion.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">Join the Journey</h2>
              <p>
                I invite you to explore VOYCE, share your story, and become part of a community that values 
                authentic growth over superficial fixes. Together, we can redefine what mental health support 
                looks like — not as a clinical intervention, but as a continuous journey of understanding, 
                acceptance, and transformation.
              </p>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-muted/30 rounded-lg">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    About{" "}
                    <Link to="/suryavamshi-govardhan" className="text-primary hover:underline">
                      Suryavamshi Govardhan
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    Suryavamshi Govardhan is the founder of VOYCE, a mental health and wellness platform 
                    that bridges ancient wisdom with modern psychology. As a student of psychology and an 
                    aspiring entrepreneur from India, he is committed to making emotional wellbeing accessible 
                    to everyone regardless of their background.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link to="/suryavamshi-govardhan">
                      <Button variant="outline" size="sm">
                        View Full Profile
                      </Button>
                    </Link>
                    <a 
                      href="https://www.instagram.com/suryavamshiiii" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="ghost" size="sm">
                        Follow on Instagram
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 text-center">
              <Link to="/">
                <Button size="lg" className="gap-2">
                  Explore VOYCE
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
