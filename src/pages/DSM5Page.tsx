import { useState } from "react";
import ReferenceNote from "@/components/site/ReferenceNote";
import SiteHeader from "@/components/site/SiteHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Brain, Heart, Users, AlertTriangle, BookOpen, Search, FileText, Stethoscope, TrendingUp } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const DSM5Page = () => {
  const [activeCategory, setActiveCategory] = useState("overview");

  const diagnosticCategories = [
    {
      id: "neurodevelopmental",
      title: "Neurodevelopmental Disorders",
      icon: Brain,
      color: "bg-primary",
      description: "Disorders typically manifesting early in development",
      subcategories: [
        {
          name: "Intellectual Disabilities",
          disorders: ["Intellectual Developmental Disorder", "Global Developmental Delay", "Unspecified Intellectual Developmental Disorder"],
          criteria: "Deficits in intellectual and adaptive functioning with onset during developmental period"
        },
        {
          name: "Communication Disorders", 
          disorders: ["Language Disorder", "Speech Sound Disorder", "Childhood-Onset Fluency Disorder", "Social Communication Disorder"],
          criteria: "Persistent difficulties in acquisition and use of language across modalities"
        },
        {
          name: "Autism Spectrum Disorders",
          disorders: ["Autism Spectrum Disorder"],
          criteria: "Persistent deficits in social communication and restricted, repetitive behaviors"
        },
        {
          name: "ADHD",
          disorders: ["Attention-Deficit/Hyperactivity Disorder", "Other Specified ADHD", "Unspecified ADHD"],
          criteria: "Persistent pattern of inattention and/or hyperactivity-impulsivity"
        },
        {
          name: "Learning Disorders",
          disorders: ["Specific Learning Disorder"],
          criteria: "Difficulties in learning academic skills below expected level"
        },
        {
          name: "Motor Disorders",
          disorders: ["Developmental Coordination Disorder", "Stereotypic Movement Disorder", "Tic Disorders"],
          criteria: "Motor skills substantially below expected level for chronological age"
        }
      ]
    },
    {
      id: "schizophrenia",
      title: "Schizophrenia Spectrum & Other Psychotic Disorders",
      icon: AlertTriangle,
      color: "bg-red-500",
      description: "Disorders involving psychotic symptoms",
      subcategories: [
        {
          name: "Primary Psychotic Disorders",
          disorders: ["Schizophrenia", "Schizophreniform Disorder", "Brief Psychotic Disorder", "Schizoaffective Disorder"],
          criteria: "Two or more psychotic symptoms (delusions, hallucinations, disorganized speech) for significant time"
        },
        {
          name: "Substance-Induced",
          disorders: ["Substance/Medication-Induced Psychotic Disorder"],
          criteria: "Psychotic symptoms due to intoxication, withdrawal, or medication effects"
        },
        {
          name: "Medical Condition",
          disorders: ["Psychotic Disorder Due to Another Medical Condition"],
          criteria: "Direct physiological consequence of another medical condition"
        }
      ]
    },
    {
      id: "bipolar",
      title: "Bipolar & Related Disorders",
      icon: TrendingUp,
      color: "bg-primary",
      description: "Disorders involving manic episodes",
      subcategories: [
        {
          name: "Bipolar Disorders",
          disorders: ["Bipolar I Disorder", "Bipolar II Disorder", "Cyclothymic Disorder"],
          criteria: "Distinct periods of abnormally elevated, expansive, or irritable mood"
        },
        {
          name: "Substance-Induced",
          disorders: ["Substance/Medication-Induced Bipolar Disorder"],
          criteria: "Mood disturbance due to physiological effects of substance"
        }
      ]
    },
    {
      id: "depressive",
      title: "Depressive Disorders",
      icon: Heart,
      color: "bg-primary",
      description: "Disorders characterized by sad, empty, or irritable mood",
      subcategories: [
        {
          name: "Major Depressive Disorders",
          disorders: ["Major Depressive Disorder", "Persistent Depressive Disorder", "Premenstrual Dysphoric Disorder"],
          criteria: "Five or more depressive symptoms during 2-week period representing change from functioning"
        },
        {
          name: "Substance-Induced",
          disorders: ["Substance/Medication-Induced Depressive Disorder"],
          criteria: "Prominent and persistent period of depressed mood"
        }
      ]
    },
    {
      id: "anxiety",
      title: "Anxiety Disorders", 
      icon: AlertTriangle,
      color: "bg-primary",
      description: "Disorders characterized by excessive fear and anxiety",
      subcategories: [
        {
          name: "Specific Anxiety Disorders",
          disorders: ["Generalized Anxiety Disorder", "Panic Disorder", "Agoraphobia", "Specific Phobia", "Social Anxiety Disorder"],
          criteria: "Excessive anxiety and worry occurring more days than not for at least 6 months"
        },
        {
          name: "Separation Anxiety",
          disorders: ["Separation Anxiety Disorder", "Selective Mutism"],
          criteria: "Developmentally inappropriate excessive anxiety concerning separation"
        }
      ]
    },
    {
      id: "trauma",
      title: "Trauma & Stressor-Related Disorders",
      icon: AlertTriangle,
      color: "bg-red-600",
      description: "Disorders following exposure to traumatic or stressful events",
      subcategories: [
        {
          name: "Trauma-Related",
          disorders: ["PTSD", "Acute Stress Disorder", "Adjustment Disorders"],
          criteria: "Exposure to actual or threatened death, serious injury, or sexual violence"
        },
        {
          name: "Attachment Disorders",
          disorders: ["Reactive Attachment Disorder", "Disinhibited Social Engagement Disorder"],
          criteria: "Markedly disturbed and developmentally inappropriate attachment behaviors"
        }
      ]
    },
    {
      id: "dissociative",
      title: "Dissociative Disorders",
      icon: Brain,
      color: "bg-primary",
      description: "Disruption of consciousness, memory, identity, or perception",
      subcategories: [
        {
          name: "Identity Disorders",
          disorders: ["Dissociative Identity Disorder", "Dissociative Amnesia", "Depersonalization/Derealization Disorder"],
          criteria: "Disruption of identity characterized by two or more distinct personality states"
        }
      ]
    },
    {
      id: "somatic",
      title: "Somatic Symptom & Related Disorders",
      icon: Stethoscope,
      color: "bg-primary",
      description: "Physical symptoms causing significant distress",
      subcategories: [
        {
          name: "Somatic Disorders",
          disorders: ["Somatic Symptom Disorder", "Illness Anxiety Disorder", "Conversion Disorder", "Factitious Disorder"],
          criteria: "One or more somatic symptoms that are distressing or cause impairment"
        }
      ]
    },
    {
      id: "feeding",
      title: "Feeding & Eating Disorders",
      icon: Heart,
      color: "bg-primary", 
      description: "Persistent disturbance of eating behavior",
      subcategories: [
        {
          name: "Eating Disorders",
          disorders: ["Anorexia Nervosa", "Bulimia Nervosa", "Binge-Eating Disorder", "Pica", "Rumination Disorder", "Avoidant/Restrictive Food Intake Disorder"],
          criteria: "Persistent disturbance of eating or eating-related behavior"
        }
      ]
    },
    {
      id: "elimination",
      title: "Elimination Disorders",
      icon: FileText,
      color: "bg-primary",
      description: "Inappropriate elimination of urine or feces",
      subcategories: [
        {
          name: "Elimination Issues",
          disorders: ["Enuresis", "Encopresis"],
          criteria: "Repeated voiding of urine or passage of feces in inappropriate places"
        }
      ]
    },
    {
      id: "sleep",
      title: "Sleep-Wake Disorders",
      icon: Brain,
      color: "bg-primary",
      description: "Dissatisfaction regarding quality, timing, and amount of sleep",
      subcategories: [
        {
          name: "Sleep Disorders",
          disorders: ["Insomnia Disorder", "Hypersomnolence Disorder", "Narcolepsy", "Sleep Apnea", "Parasomnias", "Restless Legs Syndrome"],
          criteria: "Dissatisfaction with sleep quality, timing, amount, or duration"
        }
      ]
    },
    {
      id: "sexual",
      title: "Sexual Dysfunctions",
      icon: Heart,
      color: "bg-rose-500",
      description: "Clinically significant disturbance in sexual response or pleasure",
      subcategories: [
        {
          name: "Sexual Disorders",
          disorders: ["Erectile Disorder", "Female Orgasmic Disorder", "Delayed Ejaculation", "Premature Ejaculation", "Female Sexual Interest/Arousal Disorder", "Male Hypoactive Sexual Desire Disorder", "Genito-Pelvic Pain/Penetration Disorder"],
          criteria: "Clinically significant disturbance in ability to respond sexually or experience sexual pleasure"
        }
      ]
    },
    {
      id: "gender",
      title: "Gender Dysphoria",
      icon: Users,
      color: "bg-primary",
      description: "Distress accompanying incongruence between gender identity and assigned gender",
      subcategories: [
        {
          name: "Gender Identity",
          disorders: ["Gender Dysphoria in Children", "Gender Dysphoria in Adolescents and Adults"],
          criteria: "Marked incongruence between experienced/expressed gender and assigned gender"
        }
      ]
    },
    {
      id: "disruptive",
      title: "Disruptive, Impulse-Control & Conduct Disorders",
      icon: AlertTriangle,
      color: "bg-red-400",
      description: "Problems in emotional and behavioral self-control",
      subcategories: [
        {
          name: "Behavioral Disorders",
          disorders: ["Oppositional Defiant Disorder", "Intermittent Explosive Disorder", "Conduct Disorder", "Antisocial Personality Disorder", "Pyromania", "Kleptomania"],
          criteria: "Problems in self-control of emotions and behaviors"
        }
      ]
    },
    {
      id: "substance",
      title: "Substance-Related & Addictive Disorders",
      icon: AlertTriangle,
      color: "bg-primary",
      description: "Disorders related to substance use and behavioral addictions",
      subcategories: [
        {
          name: "Substance Use Disorders",
          disorders: ["Alcohol Use Disorder", "Cannabis Use Disorder", "Stimulant Use Disorder", "Opioid Use Disorder", "Sedative Use Disorder"],
          criteria: "Problematic pattern of substance use leading to impairment or distress"
        },
        {
          name: "Substance-Induced Disorders", 
          disorders: ["Intoxication", "Withdrawal", "Substance-Induced Mental Disorders"],
          criteria: "Reversible substance-specific syndrome due to recent ingestion"
        },
        {
          name: "Non-Substance Addictions",
          disorders: ["Gambling Disorder"],
          criteria: "Persistent and recurrent problematic gambling behavior"
        }
      ]
    },
    {
      id: "neurocognitive",
      title: "Neurocognitive Disorders",
      icon: Brain,
      color: "bg-muted-foreground",
      description: "Disorders affecting cognitive functioning",
      subcategories: [
        {
          name: "Cognitive Impairment",
          disorders: ["Delirium", "Major Neurocognitive Disorder", "Mild Neurocognitive Disorder"],
          criteria: "Significant cognitive decline from previous level of performance"
        }
      ]
    },
    {
      id: "personality",
      title: "Personality Disorders",
      icon: Users,
      color: "bg-muted-foreground",
      description: "Enduring patterns of inner experience and behavior",
      subcategories: [
        {
          name: "Cluster A (Odd/Eccentric)",
          disorders: ["Paranoid Personality Disorder", "Schizoid Personality Disorder", "Schizotypal Personality Disorder"],
          criteria: "Pervasive distrust and suspiciousness or social detachment"
        },
        {
          name: "Cluster B (Dramatic/Emotional)",
          disorders: ["Antisocial Personality Disorder", "Borderline Personality Disorder", "Histrionic Personality Disorder", "Narcissistic Personality Disorder"],
          criteria: "Dramatic, emotional, or erratic behavior patterns"
        },
        {
          name: "Cluster C (Anxious/Fearful)",
          disorders: ["Avoidant Personality Disorder", "Dependent Personality Disorder", "Obsessive-Compulsive Personality Disorder"],
          criteria: "Anxious or fearful behavior patterns"
        }
      ]
    },
    {
      id: "paraphilic",
      title: "Paraphilic Disorders",
      icon: AlertTriangle,
      color: "bg-red-800",
      description: "Recurrent intense sexual arousal to atypical objects or situations",
      subcategories: [
        {
          name: "Paraphilias",
          disorders: ["Voyeuristic Disorder", "Exhibitionistic Disorder", "Frotteuristic Disorder", "Sexual Masochism Disorder", "Sexual Sadism Disorder", "Pedophilic Disorder", "Fetishistic Disorder", "Transvestic Disorder"],
          criteria: "Intense sexual arousal from atypical objects, situations, fantasies, behaviors, or individuals"
        }
      ]
    },
    {
      id: "other",
      title: "Other Mental Disorders",
      icon: BookOpen,
      color: "bg-muted-foreground",
      description: "Mental disorders not fitting other categories",
      subcategories: [
        {
          name: "Residual Categories",
          disorders: ["Other Specified Mental Disorder", "Unspecified Mental Disorder"],
          criteria: "Clinically significant distress or impairment not meeting criteria for specific disorders"
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead 
        title="DSM-5-TR Diagnostic Manual"
        description="Professional reference: an overview of how DSM-5-TR classifies mental health conditions, for adults, students of psychology and clinicians. Not a self-test or diagnosis."
        keywords="DSM-5, diagnostic manual, mental disorders, psychiatric diagnosis, mental health classification, clinical psychology"
      />
      <SiteHeader />
      <ReferenceNote />
      <div id="main-content" className="v-legacy min-h-screen bg-surface">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-border/60 py-20 px-4">
        <div className="v-hero-glow" aria-hidden />
        <div className="v-rise relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-6 py-2 mb-6">
            <Stethoscope className="w-5 h-5 text-foreground" />
            <span className="text-sm font-medium text-foreground">DSM-5-TR Comprehensive Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl mb-6 text-foreground">
            Diagnostic & Statistical Manual
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Complete guide to mental health disorders classification, diagnostic criteria, and clinical applications for healthcare professionals and students
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-sm py-2 px-4">DSM-5-TR (2022)</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">{diagnosticCategories.length} Categories</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">500+ Disorders</Badge>
            <Badge variant="secondary" className="text-sm py-2 px-4">Evidence-Based</Badge>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 gap-2 h-auto p-2 bg-card backdrop-blur-sm">
              <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
              <TabsTrigger value="assessment" className="text-sm">Assessment</TabsTrigger>
              <TabsTrigger value="categories" className="text-sm">Categories</TabsTrigger>
              <TabsTrigger value="clinical" className="text-sm">Clinical Use</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8 mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-primary" />
                      What is DSM-5-TR?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR) is the authoritative guide for diagnosing mental health conditions.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Published by American Psychiatric Association</li>
                      <li>• Updated in 2022 with text revisions</li>
                      <li>• International standard for mental health diagnosis</li>
                      <li>• Used by clinicians, researchers, and insurers</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Search className="w-5 h-5 text-secondary" />
                      Diagnostic Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      DSM-5-TR provides systematic criteria for accurate mental health diagnosis through structured assessment.
                    </p>
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Key Components:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Diagnostic criteria sets</li>
                        <li>• Severity specifiers</li>
                        <li>• Cultural formulations</li>
                        <li>• Dimensional assessments</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-accent" />
                      Clinical Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Essential tool for treatment planning, research, and communication among healthcare professionals.
                    </p>
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs">Treatment Planning</Badge>
                      <Badge variant="outline" className="text-xs">Research Standards</Badge>
                      <Badge variant="outline" className="text-xs">Insurance Coverage</Badge>
                      <Badge variant="outline" className="text-xs">Legal Proceedings</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* DSM-5-TR Structure Flowchart */}
              <Card>
                <CardHeader>
                  <CardTitle>DSM-5-TR Structure & Organization</CardTitle>
                  <CardDescription>Understanding the systematic organization of diagnostic categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                    <div className="mermaid-diagram">
                      <div className="text-center text-sm font-mono bg-card p-4 rounded border">
                        <div className="space-y-4">
                          <div className="text-lg font-bold text-primary">DSM-5-TR Organization</div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                            <div className="bg-primary/10 p-3 rounded">
                              <div className="font-semibold text-foreground">Section I</div>
                              <div className="text-sm">DSM-5-TR Basics</div>
                              <div className="text-xs text-primary">Use & Structure</div>
                            </div>
                            <div className="bg-primary/10 p-3 rounded">
                              <div className="font-semibold text-foreground">Section II</div>
                              <div className="text-sm">Diagnostic Criteria</div>
                              <div className="text-xs text-primary">20 Disorder Classes</div>
                            </div>
                            <div className="bg-primary/10 p-3 rounded">
                              <div className="font-semibold text-foreground">Section III</div>
                              <div className="text-sm">Emerging Measures</div>
                              <div className="text-xs text-primary">Assessment Tools</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Assessment Tab */}
            <TabsContent value="assessment" className="space-y-8 mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Diagnostic Assessment Process</CardTitle>
                    <CardDescription>Systematic approach to mental health evaluation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Multi-Axial Assessment Framework</h4>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-primary text-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <div>
                              <div className="font-medium">Clinical Interview</div>
                              <div className="text-sm text-muted-foreground">Detailed history and symptom assessment</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-secondary text-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <div>
                              <div className="font-medium">Criteria Evaluation</div>
                              <div className="text-sm text-muted-foreground">Match symptoms to DSM-5-TR criteria</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-accent text-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <div>
                              <div className="font-medium">Differential Diagnosis</div>
                              <div className="text-sm text-muted-foreground">Rule out alternative explanations</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-muted text-foreground rounded-full flex items-center justify-center text-sm font-bold">4</div>
                            <div>
                              <div className="font-medium">Specifiers & Severity</div>
                              <div className="text-sm text-muted-foreground">Determine course and severity markers</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <div className="text-sm font-semibold text-foreground mb-2">Cultural Considerations</div>
                          <ul className="text-xs text-primary space-y-1">
                            <li>• Cultural formulation</li>
                            <li>• Language barriers</li>
                            <li>• Religious beliefs</li>
                            <li>• Social context</li>
                          </ul>
                        </div>
                        <div className="bg-primary/10 p-4 rounded-lg">
                          <div className="text-sm font-semibold text-foreground mb-2">Assessment Tools</div>
                          <ul className="text-xs text-primary space-y-1">
                            <li>• Standardized interviews</li>
                            <li>• Rating scales</li>
                            <li>• Psychological tests</li>
                            <li>• Behavioral observations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Diagnostic Decision Tree</CardTitle>
                    <CardDescription>Systematic approach to differential diagnosis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-surface p-6 rounded-lg">
                      <div className="text-center space-y-4">
                        <div className="bg-card p-3 rounded-lg border-2 border-primary/20">
                          <div className="font-semibold text-primary">Initial Assessment</div>
                          <div className="text-sm text-muted-foreground">Chief complaint & history</div>
                        </div>
                        <div className="text-2xl text-muted-foreground">↓</div>
                        <div className="bg-card p-3 rounded-lg border-2 border-secondary/20">
                          <div className="font-semibold text-secondary">Rule Out Medical Causes</div>
                          <div className="text-sm text-muted-foreground">Physical exam & lab tests</div>
                        </div>
                        <div className="text-2xl text-muted-foreground">↓</div>
                        <div className="bg-card p-3 rounded-lg border-2 border-accent/20">
                          <div className="font-semibold text-accent">Substance Use Assessment</div>
                          <div className="text-sm text-muted-foreground">Current & historical use</div>
                        </div>
                        <div className="text-2xl text-muted-foreground">↓</div>
                        <div className="bg-card p-3 rounded-lg border-2 border-muted/40">
                          <div className="font-semibold">Primary Mental Health Diagnosis</div>
                          <div className="text-sm text-muted-foreground">Match DSM-5-TR criteria</div>
                        </div>
                        <div className="text-2xl text-muted-foreground">↓</div>
                        <div className="bg-card p-3 rounded-lg border-2 border-success/20">
                          <div className="font-semibold text-primary">Comorbidity Assessment</div>
                          <div className="text-sm text-muted-foreground">Additional conditions</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Categories Tab */}
            <TabsContent value="categories" className="space-y-8 mt-8">
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">DSM-5-TR Diagnostic Categories</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Comprehensive overview of all {diagnosticCategories.length} diagnostic categories with detailed subcategories, criteria, and clinical applications
                  </p>
                </div>

                <div className="grid gap-6">
                  {diagnosticCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <Card key={category.id} className="border-l-4 border-l-primary/30 hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <div className={`${category.color} p-3 rounded-lg text-foreground`}>
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">{String(index + 1).padStart(2, '0')}</Badge>
                                <CardTitle className="text-xl">{category.title}</CardTitle>
                              </div>
                              <CardDescription className="text-base">{category.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <Accordion type="single" collapsible className="space-y-4">
                            {category.subcategories.map((subcategory, subIndex) => (
                              <AccordionItem key={subIndex} value={`item-${index}-${subIndex}`} className="border border-muted/30 rounded-lg px-4">
                                <AccordionTrigger className="text-left hover:no-underline">
                                  <div className="flex items-center gap-3">
                                    <Badge variant="secondary" className="text-xs">{subcategory.disorders.length}</Badge>
                                    <span className="font-semibold">{subcategory.name}</span>
                                  </div>
                                </AccordionTrigger>
                                <AccordionContent className="space-y-4 pt-4">
                                  <div className="bg-muted/30 p-4 rounded-lg">
                                    <h5 className="font-semibold text-sm mb-2 text-primary">Diagnostic Criteria:</h5>
                                    <p className="text-sm text-muted-foreground">{subcategory.criteria}</p>
                                  </div>
                                  <div>
                                    <h5 className="font-semibold text-sm mb-3">Specific Disorders:</h5>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                      {subcategory.disorders.map((disorder, disIndex) => (
                                        <div key={disIndex} className="flex items-center gap-2 p-3 bg-background border rounded-lg hover:shadow-sm transition-shadow">
                                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                                          <span className="text-sm font-medium">{disorder}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            {/* Clinical Use Tab */}
            <TabsContent value="clinical" className="space-y-8 mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Clinical Applications</CardTitle>
                    <CardDescription>How DSM-5-TR is used in professional practice</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-l-blue-500 pl-4">
                        <h4 className="font-semibold text-primary">Clinical Settings</h4>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li>• Psychiatric hospitals and clinics</li>
                          <li>• Primary care practices</li>
                          <li>• Community mental health centers</li>
                          <li>• Private practice psychology/psychiatry</li>
                          <li>• Emergency departments</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-l-green-500 pl-4">
                        <h4 className="font-semibold text-primary">Treatment Planning</h4>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li>• Evidence-based treatment selection</li>
                          <li>• Medication management guidelines</li>
                          <li>• Therapy modality recommendations</li>
                          <li>• Progress monitoring criteria</li>
                        </ul>
                      </div>
                      
                      <div className="border-l-4 border-l-purple-500 pl-4">
                        <h4 className="font-semibold text-primary">Research Applications</h4>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li>• Clinical trial participant selection</li>
                          <li>• Epidemiological studies</li>
                          <li>• Treatment outcome research</li>
                          <li>• Biomarker investigations</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Limitations & Considerations</CardTitle>
                    <CardDescription>Important factors to consider when using DSM-5-TR</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-amber-50 border border-border p-4 rounded-lg">
                      <h4 className="font-semibold text-amber-700 mb-2">⚠️ Key Limitations</h4>
                      <ul className="text-sm text-amber-700 space-y-1">
                        <li>• Categorical vs. dimensional approach debate</li>
                        <li>• Cultural bias and Western-centric focus</li>
                        <li>• Comorbidity complexity</li>
                        <li>• Limited biological markers</li>
                        <li>• Potential for over-diagnosis</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 border border-border p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">🎯 Best Practices</h4>
                      <ul className="text-sm text-primary space-y-1">
                        <li>• Use as clinical guide, not rigid rules</li>
                        <li>• Consider cultural formulation</li>
                        <li>• Integrate multiple assessment methods</li>
                        <li>• Regular diagnostic review and updates</li>
                        <li>• Collaborative approach with patients</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 border border-border p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">✅ Quality Assurance</h4>
                      <ul className="text-sm text-primary space-y-1">
                        <li>• Peer consultation for complex cases</li>
                        <li>• Regular training and updates</li>
                        <li>• Inter-rater reliability checks</li>
                        <li>• Documentation standards</li>
                        <li>• Ethical considerations priority</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>DSM-5-TR Updates & Future Directions</CardTitle>
                  <CardDescription>Recent changes and anticipated developments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <BookOpen className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="font-semibold">2022 Text Revision</h4>
                      <p className="text-sm text-muted-foreground">Updated diagnostic text, prevalence data, and cultural considerations without changing criteria</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                        <TrendingUp className="w-8 h-8 text-secondary" />
                      </div>
                      <h4 className="font-semibold">Dimensional Approach</h4>
                      <p className="text-sm text-muted-foreground">Growing emphasis on severity specifiers and dimensional assessments for more personalized diagnosis</p>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                        <Brain className="w-8 h-8 text-accent" />
                      </div>
                      <h4 className="font-semibold">Biological Integration</h4>
                      <p className="text-sm text-muted-foreground">Future versions may incorporate neurobiological markers and genetic factors more prominently</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
    </>
  );
};

export default DSM5Page;