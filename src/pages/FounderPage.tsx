import { NextStep } from "@/components/site/value";
import SiteChrome from "@/components/site/SiteChrome";
import { SEOHead } from "@/components/SEOHead";
import { FounderSchema, OrganizationSchema, FAQSchema } from "@/components/StructuredData";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Brain, Users, Sparkles, BookOpen, Target, Instagram, Mail, Phone } from "lucide-react";

const founderFaqs = [
  {
    question: "Who is Suryavamshi Govardhan?",
    answer:
      "Suryavamshi Govardhan is the founder of VOYCE, a mental health and wellness platform from India that bridges Eastern philosophy with modern psychology. He builds multilingual emotional-wellbeing education for Telugu, Hindi, English, Kannada and Tamil speakers."
  },
  {
    question: "What is VOYCE?",
    answer:
      "VOYCE is the mental health platform founded by Suryavamshi Govardhan. It offers DSM-5 and ICD-9 learning modules, essays on human behaviour, journaling, mood tracking, guided practices and the Invisible Inheritance relationship test."
  },
  {
    question: "How can I contact Suryavamshi Govardhan?",
    answer:
      "You can reach Suryavamshi Govardhan by email at voycexx@gmail.com or 4igroupss@gmail.com, by phone at +91 90104 81175, or on Instagram at @suryavamshiiii."
  },
  {
    question: "Why did Suryavamshi Govardhan build VOYCE?",
    answer:
      "He grew up watching mental health be treated as stigma rather than care, especially in rural and semi-urban India. VOYCE exists to make emotional understanding accessible in people's own language, free of clinical gatekeeping."
  }
];

export default function FounderPage() {
  return (
    <SiteChrome>
      <SEOHead
        title="Suryavamshi Govardhan — Founder of VOYCE | Contact & Profile"
        description="Suryavamshi Govardhan is the founder of VOYCE, a mental health platform from India bridging ancient wisdom with modern psychology. Instagram @suryavamshiiii, voycexx@gmail.com, +91 90104 81175."
        keywords="Suryavamshi Govardhan, Suryavamshi Govardhan VOYCE-X, VOYCE-X founder, suryavamshiiii, Suryavamshi Govardhan contact, mental health founder India, wellness entrepreneur, psychology"
        ogImage="https://suryavamshigovardhan.github.io/voyce-website/og-image.jpg"
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/suryavamshi-govardhan"
      />
      <FounderSchema />
      <OrganizationSchema />
      <FAQSchema faqs={founderFaqs} />


      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                Founder & Visionary
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Suryavamshi Govardhan
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                Founder of VOYCE — Bridging Ancient Wisdom with Modern Psychology
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link to="/" aria-label="Visit VOYCE Homepage">
                <Button variant="default" size="lg" className="gap-2">
                  <Heart className="w-4 h-4" />
                  Explore VOYCE
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a 
                href="https://www.instagram.com/suryavamshiiii" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Follow Suryavamshi Govardhan on Instagram"
              >
                <Button variant="outline" size="lg">
                  Connect on Instagram
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-background" aria-labelledby="about-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              The Journey Behind VOYCE
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                <strong className="text-foreground">Suryavamshi Govardhan</strong> is the founder and visionary behind 
                <Link to="/" className="text-primary hover:underline font-medium"> VOYCE</Link>, 
                a transformative mental health and wellness platform designed to make emotional wellbeing accessible to everyone. 
                As a student and aspiring entrepreneur from India, Suryavamshi Govardhan recognized the pressing need for 
                culturally sensitive, scientifically grounded mental health resources in underserved communities.
              </p>

              <p>
                Growing up in an environment where mental health conversations were often stigmatized, Suryavamshi Govardhan 
                witnessed firsthand the struggles of young people who lacked access to proper emotional support and guidance. 
                This personal experience became the catalyst for creating VOYCE — a platform that combines the timeless 
                wisdom of Eastern philosophy with evidence-based psychological practices.
              </p>

              <Card className="my-8 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <blockquote className="text-lg italic text-foreground border-l-4 border-primary pl-4">
                    "Mental health is not a luxury — it is a fundamental human right. Through VOYCE, I aim to create 
                    a space where every individual, regardless of their background, can find the tools and support they 
                    need for their emotional journey."
                    <footer className="mt-2 text-sm text-muted-foreground not-italic">
                      — Suryavamshi Govardhan, Founder of VOYCE
                    </footer>
                  </blockquote>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                A Vision Rooted in Purpose
              </h3>
              <p>
                The vision of Suryavamshi Govardhan extends beyond creating just another wellness app. 
                VOYCE represents a comprehensive ecosystem for mental health education, featuring DSM-5 training modules, 
                ICD-9 diagnostic references, philosophical exploration, mood tracking, and personalized journaling experiences. 
                Each feature has been thoughtfully designed to serve users across multiple languages including Telugu, Hindi, 
                English, Kannada, and Tamil.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Education and Expertise
              </h3>
              <p>
                As a dedicated student of psychology and human behavior, Suryavamshi Govardhan has immersed himself in 
                the study of neuroscience, cognitive behavioral patterns, and the intersection of spirituality with mental 
                wellness. His approach to VOYCE reflects this multidisciplinary understanding — integrating insights from 
                Buddhist philosophy, modern psychology, and neuroscientific research to create content that resonates on 
                both intellectual and emotional levels.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Building for the Future
              </h3>
              <p>
                Under the leadership of Suryavamshi Govardhan, VOYCE continues to evolve with new features including 
                AI-powered journal analysis, gamification elements for sustained engagement, and community-driven content 
                creation. The platform serves as a testament to what can be achieved when technology is wielded with 
                compassion and purpose.
              </p>

              <p>
                The journey of Suryavamshi Govardhan with VOYCE is just beginning. With a commitment to continuous 
                learning, authentic connection, and unwavering dedication to mental health advocacy, he envisions a world 
                where emotional wellbeing is not just understood but actively nurtured by every individual and community.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-muted/30" aria-labelledby="values-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Core Values of VOYCE
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Compassion First",
                  description: "Every feature and piece of content is crafted with genuine care for user wellbeing."
                },
                {
                  icon: Brain,
                  title: "Science-Backed",
                  description: "Integrating evidence-based psychology with proven therapeutic approaches."
                },
                {
                  icon: Users,
                  title: "Inclusive Access",
                  description: "Breaking down barriers to mental health resources across languages and cultures."
                },
                {
                  icon: Sparkles,
                  title: "Ancient Wisdom",
                  description: "Honoring the timeless insights of Eastern philosophy and mindfulness traditions."
                },
                {
                  icon: BookOpen,
                  title: "Continuous Learning",
                  description: "Fostering growth through education, reflection, and self-discovery."
                },
                {
                  icon: Target,
                  title: "Purpose-Driven",
                  description: "Building with intention, always keeping the user's journey at the center."
                }
              ].map((value, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-background" aria-labelledby="contact-heading">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Contact Suryavamshi Govardhan
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              For collaborations, school programmes, speaking, press or simply to share your story.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Instagram className="w-6 h-6 mx-auto mb-3 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                  <a
                    href="https://www.instagram.com/suryavamshiiii"
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="text-primary hover:underline break-words"
                  >
                    @suryavamshiiii
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Mail className="w-6 h-6 mx-auto mb-3 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:voycexx@gmail.com" className="block text-primary hover:underline break-words">
                    voycexx@gmail.com
                  </a>
                  <a href="mailto:4igroupss@gmail.com" className="block text-primary hover:underline break-words">
                    4igroupss@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardContent className="p-6 text-center">
                  <Phone className="w-6 h-6 mx-auto mb-3 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+919010481175" className="text-primary hover:underline">
                    +91 90104 81175
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30" aria-labelledby="faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {founderFaqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


      </main>
      <NextStep
        title="Want to see what VOYCE is building?"
        body="Start with the no-account check-in, or read why it exists."
        primary={{ to: "/start-here", label: "Start a private check-in" }}
        secondary={{ to: "/article/why-i-built-voyce", label: "Why I built VOYCE" }}
      />
    </SiteChrome>
  );
}
