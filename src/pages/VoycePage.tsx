import SiteChrome from "@/components/site/SiteChrome";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Heart, Leaf, Waves, Mountain, Music, Mail, Instagram, Youtube, Share2, Clock, Users, BookOpen, Activity, Lightbulb, Target, TrendingUp, Shield, Globe, Microscope, Calculator } from "lucide-react";
import { PageHero, NextStep } from "@/components/site/value";
import AboutSection from "@/components/sections/AboutSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { SEOHead } from "@/components/SEOHead";

export default function VoycePage() {


  const comprehensiveStressGuide = [
    {
      title: "The Ancient Origins of Stress",
      icon: Clock,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=800&q=80",
      content: "Stress has been humanity's companion since the dawn of time. Archaeological evidence suggests our ancestors faced stress from predators, natural disasters, and survival challenges. The word 'stress' comes from the Latin 'strictus,' meaning 'drawn tight.' Ancient civilizations documented stress-related illnesses - Egyptian papyri from 3000 BCE describe symptoms we now recognize as anxiety and stress disorders. The human stress response evolved as a survival mechanism, preparing our ancestors to face immediate threats through the famous 'fight-or-flight' response."
    },
    {
      title: "Hans Selye: The Father of Stress Research",
      icon: Microscope,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
      content: "In 1936, Hans Selye, an Austrian-Canadian endocrinologist, coined the term 'stress' in its modern scientific context. His groundbreaking research revealed the General Adaptation Syndrome (GAS) - a three-stage response to stress: Alarm, Resistance, and Exhaustion. Selye's experiments with laboratory rats showed how chronic stress leads to physical deterioration, establishing the biological foundation of stress research. He distinguished between 'eustress' (positive stress) and 'distress' (negative stress), revolutionizing our understanding of stress as not inherently harmful but dependent on our response to it."
    },
    {
      title: "The Neuroscience of Stress: Your Brain Under Pressure",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
      content: "Modern neuroscience reveals stress as a complex orchestra of brain regions. The amygdala, our brain's alarm system, detects threats and triggers the stress response within milliseconds. The hypothalamus acts as the conductor, releasing CRH (Corticotropin-Releasing Hormone) to activate the HPA axis. The prefrontal cortex, our rational mind, attempts to assess and manage the threat. Chronic stress physically reshapes the brain - shrinking the prefrontal cortex while enlarging the amygdala, making us more reactive and less rational. Neuroplasticity research shows this damage is reversible through mindfulness and stress management techniques."
    },
    {
      title: "The Physiology: What Happens in Your Body",
      icon: Heart,
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
      content: "When stress hits, your body becomes a battlefield of hormones and physiological changes. Adrenaline and noradrenaline flood your system within seconds, increasing heart rate, blood pressure, and breathing. Cortisol, the 'stress hormone,' follows within minutes, mobilizing glucose for energy while suppressing non-essential functions like digestion and immune response. Your pupils dilate, muscles tense, and blood flow redirects to major muscle groups. This response, perfect for escaping a predator, becomes problematic when triggered by modern stressors like work deadlines or relationship conflicts."
    },
    {
      title: "Types of Stress: Acute vs. Chronic",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&q=80",
      content: "Acute stress is short-term and can enhance performance - the adrenaline rush before a presentation or athletic competition. It's characterized by rapid onset and quick recovery. Chronic stress, however, is the silent killer. It persists for weeks, months, or years, keeping your stress response system constantly activated. This leads to inflammation, weakened immunity, cardiovascular disease, and mental health disorders. Episodic acute stress occurs when someone frequently experiences acute stress, creating a pattern of constant tension and anxiety."
    },
    {
      title: "The Indian Context: Rural Youth and Modern Pressures",
      icon: Users,
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&q=80",
      content: "In rural India, stress manifests uniquely. Traditional joint family structures, while providing support, can create pressure for conformity. Educational competition intensifies as families invest everything in their children's success. Economic uncertainty, migration to urban areas, and changing social values create identity conflicts. Limited access to mental health resources means stress often goes unrecognized and untreated. VOYCE addresses these specific challenges by combining traditional wisdom with modern neuroscience, making mental health tools accessible and culturally relevant."
    },
    {
      title: "Digital Age Stress: Technology's Double-Edged Sword",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      content: "The digital revolution has created new forms of stress. Information overload, social media comparison, and constant connectivity disrupt our natural stress recovery cycles. The average person checks their phone 96 times daily, creating micro-stressors throughout the day. Blue light exposure disrupts sleep patterns, further compromising stress recovery. However, technology also offers solutions - meditation apps, online therapy, and stress monitoring devices. VOYCE leverages technology mindfully, using digital tools to enhance rather than replace human connection and self-awareness."
    },
    {
      title: "The Gut-Brain Connection in Stress",
      icon: Waves,
      image: "https://images.unsplash.com/photo-1469451670658-17fc0b14a22b?w=800&q=80",
      content: "Your gut houses the 'second brain' - the enteric nervous system with over 500 million neurons. Stress dramatically affects gut health, altering the microbiome and increasing intestinal permeability ('leaky gut'). This creates a vicious cycle: stress damages gut health, which in turn affects mood and stress resilience. Research shows that 90% of serotonin (the happiness neurotransmitter) is produced in the gut. Ancient practices like yoga and meditation, integral to VOYCE's approach, work through the vagus nerve to restore gut-brain harmony."
    },
    {
      title: "Stress and the Immune System: Friend or Foe?",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?w=800&q=80",
      content: "Acute stress temporarily boosts immune function, preparing your body to heal potential wounds from confronting a threat. However, chronic stress suppresses immunity by elevating cortisol levels. This makes you susceptible to infections, slows wound healing, and reduces vaccine effectiveness. Stress also triggers inflammation throughout the body, contributing to autoimmune disorders, heart disease, and cancer. The good news? Stress management techniques can rapidly restore immune function, with meditation showing measurable improvements in immune markers within weeks."
    },
    {
      title: "Cultural Perspectives on Stress Management",
      icon: Mountain,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      content: "Different cultures have developed unique approaches to stress. Eastern traditions emphasize harmony and balance - yoga from India, meditation from Buddhism, Tai Chi from China. Indigenous cultures often use community rituals, storytelling, and connection with nature. Western approaches tend to focus on individual techniques and medical interventions. VOYCE integrates these diverse wisdom traditions, recognizing that effective stress management must be culturally sensitive and personally meaningful."
    },
    {
      title: "The Economics of Stress: Global Impact",
      icon: Calculator,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      content: "Stress costs the global economy over $300 billion annually through healthcare costs, absenteeism, and reduced productivity. In India, workplace stress affects 89% of employees, costing the economy billions in lost productivity. The WHO estimates that for every $1 invested in mental health treatment, there's a $4 return in improved health and productivity. This economic reality drives the need for accessible, effective stress management solutions like VOYCE."
    },
    {
      title: "Future Frontiers: Stress Research and Innovation",
      icon: TrendingUp,
      image: "https://images.unsplash.com/photo-1559757175-6db7c2c2e1aa?w=800&q=80",
      content: "The future of stress research lies in personalized medicine, epigenetics, and AI-driven interventions. Scientists are developing stress vaccines, genetic tests for stress susceptibility, and real-time biomarker monitoring. Virtual reality therapy, biofeedback devices, and personalized meditation programs represent the cutting edge. VOYCE positions itself at this intersection of ancient wisdom and modern technology, preparing for a future where stress management is as personalized as our fingerprints."
    }
  ];

  const videoResources = [
    {
      title: "The Science of Stress",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80",
      description: "Understanding how stress affects your brain and body"
    },
    {
      title: "Rural India Mental Health",
      thumbnail: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&q=80",
      description: "Addressing mental health challenges in rural communities"
    },
    {
      title: "Mindfulness in Action",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
      description: "Practical meditation techniques for stress relief"
    }
  ];

  return (
    <SiteChrome>
      <SEOHead 
        title="The VOYCE guide to stress & wellbeing"
        description="Comprehensive guide to stress, mental health, and emotional wellbeing. Learn from ancient wisdom and modern neuroscience about managing stress, trauma, and building resilience."
        keywords="stress management, mental health education, neuroscience, trauma recovery, mindfulness, emotional wellbeing, VOYCE"
      />
      <div className="bg-background">

      <PageHero
        eyebrow="The VOYCE guide"
        title={<>Stress is a language. <span className="text-primary">Learn to read it.</span></>}
        lede="A long-form guide to stress and emotional wellbeing — where it comes from, what it does to the body and mind, and what helps. Read it in sections; nothing here is a diagnosis."
        primary={{ to: "#about-section", label: "Start reading" }}
        secondary={{ to: "/start-here", label: "Or start a private check-in" }}
      />

      {/* About VOYCE */}
      <AboutSection />

      {/* Comprehensive Stress Guide */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Brain className="h-16 w-16 text-primary mx-auto mb-6 float-3d" />
            <h2 className="text-4xl font-light text-foreground mb-8">Stress — The Complete Guide</h2>
            <div className="max-w-3xl mx-auto p-6 bg-muted rounded-2xl border border-border mb-12">
              <p className="text-lg italic text-amber-700 leading-relaxed">
                🧠 "You cannot heal what you cannot understand. Stress is a language, VOYCE is the translator."
              </p>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {comprehensiveStressGuide.map((section, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card backdrop-blur-sm border border-border rounded-2xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-muted transition-colors">
                  <div className="flex items-center space-x-4">
                    <section.icon className="h-6 w-6 text-primary" />
                    <span className="text-left text-lg font-medium text-foreground">{section.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                    <div className="relative">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="rounded-xl shadow-md w-full h-48 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Video Resources */}
          <div className="mt-16">
            <h3 className="text-2xl font-light text-foreground mb-8 text-center">Educational Videos</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {videoResources.map((video, index) => (
                <Card key={index} className="bg-card backdrop-blur-sm border-border shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Youtube className="h-12 w-12 text-foreground" />
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-foreground mb-2">{video.title}</h4>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mini-Series */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Instagram className="h-12 w-12 text-amber-700 mx-auto mb-6 float-3d" />
            <h2 className="text-4xl font-light text-foreground mb-8">Who Are You When...?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore identity, vulnerability, and truth through our Instagram mini-series
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                question: "...you fail?", 
                color: "green",
                image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80",
                description: "Finding strength in vulnerability and growth through setbacks"
              },
              { 
                question: "...you succeed?", 
                color: "orange",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
                description: "Staying grounded and authentic in moments of triumph"
              },
              { 
                question: "...you're unheard?", 
                color: "green",
                image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&q=80",
                description: "Finding your voice when the world seems to ignore you"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-card backdrop-blur-sm border-border shadow-lg rounded-2xl hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={`Who are you ${item.question}`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-medium text-foreground mb-2">Who are you{item.question}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              size="lg" 
              className="bg-primary hover:from-orange-600 hover:to-orange-700 text-foreground px-12 py-4 rounded-2xl text-lg haptic-btn shadow-lg"
            >
              <a href="https://www.instagram.com/suryavamshiiii" target="_blank" rel="noopener noreferrer">
                Follow VOYCE on Instagram
                <Instagram className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      <NextStep
        title="Try one thing from this guide today."
        body="A two-minute practice is enough to start."
        primary={{ to: "/tools", label: "Try a practice" }}
        secondary={{ to: "/stress", label: "Read the stress module" }}
      />

    </div>
    </SiteChrome>
  );
}
