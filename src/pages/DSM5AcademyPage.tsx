import SiteChrome from "@/components/site/SiteChrome";
import { useState } from "react";
import ReferenceNote from "@/components/site/ReferenceNote";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Brain, 
  BookOpen, 
  Users, 
  GraduationCap, 
  Award, 
  Search, 
  Play, 
  FileText, 
  Clock,
  CheckCircle,
  Star,
  Stethoscope,
  Library,
  Target,
  TrendingUp
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const DSM5AcademyPage = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const academyFacts = {
    totalModules: 26,
    levels: 6,
  };

  const trainingLevels = [
    {
      level: 1,
      title: "DSM-5 Fundamentals",
      description: "Master the foundation of DSM-5 structure and diagnostic principles",
      modules: 4,
      duration: "3-4 hours",
      color: "bg-primary",
      icon: BookOpen,
      status: "available",
      completion: 75,
      modules_list: [
        {
          id: "1.1",
          title: "Introduction to DSM-5 Structure and Organization",
          duration: "45 min",
          completed: true,
          objectives: [
            "Understand the historical development of DSM-5",
            "Navigate the DSM-5 organizational structure",
            "Identify key changes from DSM-IV to DSM-5",
            "Apply dimensional assessment approaches"
          ]
        },
        {
          id: "1.2", 
          title: "DSM-5-TR Updates and Changes from DSM-IV",
          duration: "60 min",
          completed: true,
          objectives: [
            "Compare DSM-IV and DSM-5 diagnostic criteria",
            "Understand rationale for major changes",
            "Apply new diagnostic specifiers",
            "Utilize severity measures effectively"
          ]
        },
        {
          id: "1.3",
          title: "Basic Diagnostic Principles and Criteria Sets", 
          duration: "50 min",
          completed: true,
          objectives: [
            "Apply diagnostic criteria systematically",
            "Understand differential diagnosis process",
            "Recognize comorbidity patterns",
            "Use clinical judgment appropriately"
          ]
        },
        {
          id: "1.4",
          title: "Cultural Formulation and Cross-Cutting Assessments",
          duration: "55 min", 
          completed: false,
          objectives: [
            "Conduct Cultural Formulation Interview",
            "Apply cross-cutting symptom measures",
            "Integrate cultural factors in diagnosis",
            "Address health disparities in assessment"
          ]
        }
      ]
    },
    {
      level: 2,
      title: "Neurodevelopmental & Psychotic Disorders",
      description: "Comprehensive training on early development and psychotic conditions",
      modules: 5,
      duration: "4-5 hours", 
      color: "bg-primary",
      icon: Brain,
      status: "available",
      completion: 60,
      modules_list: [
        {
          id: "2.1",
          title: "Intellectual Disabilities and Global Developmental Delay",
          duration: "50 min",
          completed: true,
          objectives: [
            "Assess intellectual functioning levels",
            "Evaluate adaptive behavior domains",
            "Apply severity specifiers accurately",
            "Plan appropriate interventions"
          ]
        },
        {
          id: "2.2",
          title: "Autism Spectrum Disorder (with severity levels 1-3)",
          duration: "60 min", 
          completed: true,
          objectives: [
            "Identify core ASD diagnostic criteria",
            "Apply severity level classifications",
            "Recognize developmental presentations",
            "Understand comorbidity patterns"
          ]
        },
        {
          id: "2.3",
          title: "ADHD and Specific Learning Disorders",
          duration: "55 min",
          completed: true,
          objectives: [
            "Diagnose ADHD presentations accurately",
            "Assess learning disorder impacts",
            "Apply developmental considerations",
            "Integrate assessment data effectively"
          ]
        },
        {
          id: "2.4",
          title: "Schizophrenia Spectrum and Psychotic Disorders",
          duration: "65 min",
          completed: false,
          objectives: [
            "Identify psychotic symptom dimensions",
            "Apply spectrum diagnostic criteria",
            "Assess functional impairment levels",
            "Plan treatment approaches"
          ]
        },
        {
          id: "2.5",
          title: "Communication and Motor Disorders", 
          duration: "45 min",
          completed: false,
          objectives: [
            "Evaluate communication impairments",
            "Assess motor skill development",
            "Apply developmental norms",
            "Plan intervention strategies"
          ]
        }
      ]
    },
    {
      level: 3,
      title: "Mood & Anxiety Disorders",
      description: "In-depth coverage of mood and anxiety disorder assessment and treatment",
      modules: 6,
      duration: "5-6 hours",
      color: "bg-primary", 
      icon: Target,
      status: "available",
      completion: 30,
      modules_list: [
        {
          id: "3.1",
          title: "Major Depressive Disorder and Persistent Depressive Disorder",
          duration: "60 min",
          completed: true,
          objectives: [
            "Apply MDD diagnostic criteria",
            "Assess depression severity levels",
            "Identify episode patterns",
            "Plan evidence-based treatments"
          ]
        },
        {
          id: "3.2",
          title: "Bipolar I and II Disorders, Cyclothymic Disorder",
          duration: "65 min",
          completed: true,
          objectives: [
            "Distinguish bipolar disorder types",
            "Identify manic/hypomanic episodes",
            "Assess mood episode patterns",
            "Apply mood stabilization strategies"
          ]
        },
        {
          id: "3.3",
          title: "Anxiety Disorders (GAD, Panic, Social Anxiety, Specific Phobias)",
          duration: "55 min", 
          completed: false,
          objectives: [
            "Diagnose specific anxiety disorders",
            "Assess avoidance behaviors",
            "Apply exposure-based interventions",
            "Manage comorbid conditions"
          ]
        },
        {
          id: "3.4",
          title: "Obsessive-Compulsive and Related Disorders",
          duration: "50 min",
          completed: false,
          objectives: [
            "Identify OCD symptom dimensions",
            "Assess compulsive behaviors",
            "Apply Y-BOCS measurements",
            "Plan exposure-response prevention"
          ]
        },
        {
          id: "3.5",
          title: "Trauma and Stressor-Related Disorders (PTSD, Acute Stress)",
          duration: "60 min",
          completed: false,
          objectives: [
            "Assess trauma exposure history",
            "Identify PTSD symptom clusters",
            "Apply trauma-informed care",
            "Plan evidence-based treatments"
          ]
        },
        {
          id: "3.6",
          title: "Dissociative Disorders",
          duration: "45 min",
          completed: false,
          objectives: [
            "Recognize dissociative symptoms",
            "Assess identity alterations",
            "Apply specialized assessments",
            "Plan phase-oriented treatment"
          ]
        }
      ]
    },
    {
      level: 4,
      title: "Trauma, Substance & Other Disorders",
      description: "Specialized training on complex disorders and substance-related conditions",
      modules: 7,
      duration: "6-7 hours",
      color: "bg-red-500",
      icon: Stethoscope,
      status: "available", 
      completion: 15,
      modules_list: [
        {
          id: "4.1",
          title: "Somatic Symptom and Related Disorders",
          duration: "50 min",
          completed: false,
          objectives: [
            "Assess somatic symptom presentations",
            "Identify illness behaviors",
            "Apply biopsychosocial model",
            "Plan integrated care approaches"
          ]
        },
        {
          id: "4.2",
          title: "Feeding and Eating Disorders",
          duration: "55 min", 
          completed: false,
          objectives: [
            "Diagnose eating disorder types",
            "Assess nutritional status",
            "Apply family-based interventions",
            "Manage medical complications"
          ]
        },
        {
          id: "4.3",
          title: "Sleep-Wake Disorders",
          duration: "45 min",
          completed: false,
          objectives: [
            "Evaluate sleep disturbances",
            "Apply sleep assessment tools",
            "Plan sleep hygiene interventions",
            "Manage circadian rhythm disorders"
          ]
        },
        {
          id: "4.4",
          title: "Substance-Related and Addictive Disorders",
          duration: "70 min",
          completed: false,
          objectives: [
            "Assess substance use patterns",
            "Apply severity specifiers",
            "Plan addiction treatments",
            "Manage withdrawal symptoms"
          ]
        },
        {
          id: "4.5",
          title: "Personality Disorders (Clusters A, B, C)",
          duration: "65 min",
          completed: true,
          objectives: [
            "Identify personality disorder patterns",
            "Apply dimensional assessments",
            "Plan long-term treatments",
            "Manage therapeutic relationships"
          ]
        },
        {
          id: "4.6", 
          title: "Disruptive, Impulse-Control, and Conduct Disorders",
          duration: "50 min",
          completed: false,
          objectives: [
            "Assess behavioral dysregulation",
            "Apply developmental considerations",
            "Plan behavioral interventions",
            "Address family system factors"
          ]
        },
        {
          id: "4.7",
          title: "Sexual Dysfunctions and Gender Dysphoria",
          duration: "55 min",
          completed: false,
          objectives: [
            "Assess sexual functioning",
            "Evaluate gender identity concerns",
            "Apply affirming care approaches",
            "Plan specialized treatments"
          ]
        }
      ]
    },
    {
      level: 5,
      title: "Advanced Assessment & Implementation",
      description: "Master advanced assessment techniques and clinical implementation",
      modules: 4,
      duration: "3-4 hours",
      color: "bg-primary",
      icon: Award,
      status: "available",
      completion: 0,
      modules_list: [
        {
          id: "5.1",
          title: "DSM-5-TR Assessment Measures (Level 1 & 2 Cross-Cutting)",
          duration: "60 min",
          completed: false,
          objectives: [
            "Administer cross-cutting measures",
            "Interpret severity assessments",
            "Apply dimensional approaches",
            "Integrate assessment data"
          ]
        },
        {
          id: "5.2",
          title: "Severity Measures and Clinical Utility", 
          duration: "55 min",
          completed: false,
          objectives: [
            "Apply disorder-specific severity measures",
            "Track treatment progress",
            "Make evidence-based decisions",
            "Optimize clinical outcomes"
          ]
        },
        {
          id: "5.3",
          title: "Differential Diagnosis and Comorbidity Assessment",
          duration: "65 min",
          completed: false,
          objectives: [
            "Conduct systematic differential diagnosis",
            "Assess comorbidity patterns",
            "Apply diagnostic hierarchies",
            "Manage complex presentations"
          ]
        },
        {
          id: "5.4",
          title: "Cultural Formulation Interview (CFI) and Implementation",
          duration: "50 min",
          completed: false,
          objectives: [
            "Conduct comprehensive CFI",
            "Integrate cultural factors",
            "Address health disparities",
            "Plan culturally responsive care"
          ]
        }
      ]
    }
  ];

  const assessmentTools = [
    {
      category: "Level 1 Cross-Cutting",
      tools: [
        "DSM-5 Self-Rated Level 1 Cross-Cutting Symptom Measure (Adult)",
        "Parent/Guardian-Rated Level 1 (Child Age 6–17)", 
        "Self-Rated Level 1 (Child Age 11–17)"
      ]
    },
    {
      category: "Level 2 Measures",
      tools: [
        "Depression Severity (PHQ-9)",
        "Anxiety Severity (GAD-7)",
        "Mania Severity (ASRM)",
        "Anger Assessment",
        "Substance Use Screening",
        "Sleep Disturbance",
        "Somatic Symptoms"
      ]
    },
    {
      category: "Disorder-Specific",
      tools: [
        "PTSD Checklist for DSM-5 (PCL-5)",
        "Panic Disorder Severity Scale",
        "Social Anxiety Severity Scale",
        "Yale-Brown Obsessive Compulsive Scale"
      ]
    },
    {
      category: "Specialized Tools",
      tools: [
        "Cultural Formulation Interview (CFI)",
        "WHODAS 2.0 Disability Assessment",
        "Personality Inventory for DSM-5 (PID-5)"
      ]
    }
  ];

  const quickStats = [
    { label: "Study modules", value: academyFacts.totalModules, icon: BookOpen },
    { label: "Levels", value: academyFacts.levels, icon: Library },
    { label: "Reference", value: "DSM-5-TR", icon: FileText },
    { label: "Pace", value: "Your own", icon: Clock },
  ];

  return (
    <SiteChrome>
    <div className="min-h-screen bg-background">
      <ReferenceNote />
      {/* Header */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-8xl mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl text-foreground">VOYCE DSM-5 Academy</h1>
                <p className="text-sm text-muted-foreground">Self-paced study material · not a clinical qualification</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-lg">
                <Star className="w-4 h-4 text-amber-700" />
                <span className="text-sm font-medium">{academyFacts.totalModules} modules · free</span>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/profile">
                  <Users className="w-4 h-4 mr-2" />
                  Profile
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <section className="mb-12">
          <div className="bg-card rounded-2xl shadow-sm border border-primary/10 p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Welcome to DSM-5 Academy</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A free, self-paced study companion for reading the DSM-5-TR: how the manual is organised, how
                  criteria are written, and how clinicians are trained to think. It is study material, not a
                  qualification, and nothing here diagnoses anyone.
                </p>
                <div className="rounded-xl border border-border bg-muted/40 p-5 mb-6 text-sm text-muted-foreground">
                  Progress is not tracked here — open any module in any order and come back whenever you like.
                </div>
                <Button size="lg" className="mr-4" asChild>
                  <Link to="/dsm5-academy/module/1.1">
                    <Play className="w-4 h-4 mr-2" />
                    Start with module 1.1
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#academy-resources">
                    <FileText className="w-4 h-4 mr-2" />
                    View resources
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="rounded-xl border border-border bg-card p-8">
                  <h3 className="font-display text-xl mb-3">How to use the academy</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                    <li>Start at Level 1 to learn how the manual is structured.</li>
                    <li>Read a module, then look up the same section in the DSM-5 guide.</li>
                    <li>Use the resource list below to find the source literature yourself.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Search Section */}
        <section className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search modules, assessments, or resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </section>

        {/* Training Levels */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Training Levels</h2>
            <Badge variant="secondary" className="px-3 py-1">Open Access - No Prerequisites</Badge>
          </div>
          
          <div className="grid gap-6">
            {trainingLevels.map((level) => (
              <Card 
                key={level.level} 
                className={`overflow-hidden border-l-4 ${level.color.replace('bg-', 'border-l-')} transition-all duration-200 hover:shadow-lg ${selectedLevel === level.level ? 'ring-2 ring-primary/50' : ''}`}
              >
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setSelectedLevel(selectedLevel === level.level ? null : level.level)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${level.color} rounded-xl flex items-center justify-center`}>
                        <level.icon className="w-6 h-6 text-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Level {level.level}: {level.title}</CardTitle>
                        <CardDescription className="text-base">{level.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-4 mb-2">
                        <Badge variant="outline">{level.modules} modules</Badge>
                        <Badge variant="outline">{level.duration}</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={level.completion} className="w-24" />
                        <span className="text-sm text-muted-foreground">{level.completion}%</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                {selectedLevel === level.level && (
                  <CardContent className="border-t border-border/50 bg-muted/20">
                    <div className="grid gap-4 mt-4">
                      {level.modules_list.map((module) => (
                        <div key={module.id} className="flex items-center justify-between p-4 bg-card rounded-lg border">
                          <div className="flex items-center gap-3">
                            {module.completed ? (
                              <CheckCircle className="w-5 h-5 text-primary" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-muted-foreground rounded-full" />
                            )}
                            <div>
                              <h4 className="font-medium">Module {module.id}: {module.title}</h4>
                              <p className="text-sm text-muted-foreground">Duration: {module.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <BookOpen className="w-4 h-4 mr-2" />
                              {module.completed ? 'Review' : 'Start'}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Assessment Tools */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Assessment Tools Library</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {assessmentTools.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-sm font-medium">{tool}</span>
                        <Button variant="ghost" size="sm">
                          <FileText className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resource reading list */}
        <section id="academy-resources">
          <h2 className="text-3xl font-bold mb-3">Resource reading list</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            These are the topics worth reading next. We don't host copyrighted DSM material, so look them up
            through your library, university access or the APA.
          </p>
          <Tabs defaultValue="research" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="research">Research Papers</TabsTrigger>
              <TabsTrigger value="clinical">Clinical Tools</TabsTrigger>
              <TabsTrigger value="educational">Educational Materials</TabsTrigger>
            </TabsList>
            
            <TabsContent value="research" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "DSM-5 Validation Studies and Reliability Research",
                  "Clinical Implementation Studies", 
                  "Cross-cutting Symptom Measure Validation",
                  "Cultural Formulation Research",
                  "Personality Assessment Validation",
                  "Neurodevelopmental Disorder Research"
                ].map((paper, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium mb-2">{paper}</h4>
                          <Badge variant="secondary" className="text-xs">Reading topic</Badge>
                        </div>
                        <FileText className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="clinical" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Complete DSM-5-TR Diagnostic Criteria Sheets",
                  "Assessment Measure PDFs with Scoring Guides",
                  "Quick Reference Diagnostic Flowcharts", 
                  "Cultural Formulation Templates"
                ].map((tool, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium mb-2">{tool}</h4>
                          <Badge variant="secondary" className="text-xs">Reading topic</Badge>
                        </div>
                        <FileText className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="educational" className="space-y-4">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "DSM-5 vs DSM-IV Comparison Charts",
                  "Severity Level Interpretation Guides",
                  "Case Study Collections with Solutions",
                  "Training Module Handouts"
                ].map((material, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-medium mb-2">{material}</h4>
                          <Badge variant="secondary" className="text-xs">Reading topic</Badge>
                        </div>
                        <FileText className="w-4 h-4 text-muted-foreground shrink-0" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
    </SiteChrome>
  );
};

export default DSM5AcademyPage;