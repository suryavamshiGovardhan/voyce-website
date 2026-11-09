import SiteChrome from "@/components/site/SiteChrome";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  BookOpen, 
  Target, 
  FileText, 
  Users, 
  CheckCircle,
  Clock,
  Play,
  Download,
  Star,
  AlertCircle,
  Brain,
  Stethoscope
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SafeMarkdown } from "@/components/text/SafeMarkdown";

const DSM5ModulePage = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  // Mock module data - in real app this would come from API/database
  const moduleData = {
    "1.1": {
      level: 1,
      title: "Introduction to DSM-5 Structure and Organization",
      duration: "45 min",
      difficulty: "Beginner",
      completionRate: 85,
      description: "Master the foundational knowledge of DSM-5 structure, organization, and key changes from previous editions.",
      objectives: [
        "Understand the historical development and evolution of DSM-5",
        "Navigate the DSM-5 organizational structure and diagnostic framework",
        "Identify key changes and improvements from DSM-IV to DSM-5",
        "Apply dimensional assessment approaches in clinical practice"
      ],
      sections: [
        {
          title: "Historical Development of DSM-5",
          content: `
            The Diagnostic and Statistical Manual of Mental Disorders (DSM) has evolved significantly since its first publication in 1952. The DSM-5, published in 2013, represents a major milestone in psychiatric diagnosis.

            **Key Historical Points:**
            - DSM-I (1952): 106 disorders, psychoanalytic approach
            - DSM-II (1968): Removed psychoanalytic terminology
            - DSM-III (1980): Introduced multiaxial system
            - DSM-IV (1994): Evidence-based approach
            - DSM-5 (2013): Dimensional assessments, neuroscience integration
            - DSM-5-TR (2022): Text revisions and updated criteria

            The development of DSM-5 involved over 13 years of research, with input from hundreds of international experts, extensive literature reviews, and field trials involving thousands of patients.
          `,
          keyPoints: [
            "13-year development process with international collaboration",
            "Integration of neuroscience research and genetic findings", 
            "Shift from categorical to dimensional approaches",
            "Enhanced cultural sensitivity and global applicability"
          ]
        },
        {
          title: "Organizational Structure",
          content: `
            DSM-5 is organized into three main sections, representing a significant restructuring from DSM-IV:

            **Section I: DSM-5 Basics**
            - Introduction and use of the manual
            - Cautionary statement for forensic use
            - Definition of mental disorder

            **Section II: Diagnostic Criteria and Codes**
            - 20 diagnostic classes organized by developmental lifespan
            - Specific diagnostic criteria for each disorder
            - Severity measures and specifiers

            **Section III: Emerging Measures and Models**
            - Assessment measures for clinical use
            - Cultural formulation guidelines
            - Dimensional models for personality disorders
            - Conditions for further study

            This structure reflects a more developmental approach, grouping disorders by their typical onset and manifestation patterns.
          `,
          keyPoints: [
            "Three-section organization improves clinical utility",
            "Developmental lifespan approach to disorder classification",
            "Integration of severity measures and cultural considerations",
            "Inclusion of emerging research and assessment tools"
          ]
        },
        {
          title: "Key Changes from DSM-IV",
          content: `
            DSM-5 introduced numerous significant changes that impact clinical practice:

            **Structural Changes:**
            - Eliminated multiaxial system
            - Reorganized chapters by developmental/neurobiological relationships
            - Added severity measures and dimensional assessments

            **Diagnostic Changes:**
            - Autism Spectrum Disorder (replaced Asperger's)
            - Removed bereavement exclusion for Major Depression
            - Added Binge Eating Disorder as standalone diagnosis
            - Introduced Disruptive Mood Dysregulation Disorder

            **Assessment Enhancements:**
            - Cross-cutting symptom measures
            - Severity rating scales
            - Cultural Formulation Interview
            - WHODAS disability assessment

            These changes reflect advances in neuroscience, genetics, and clinical research while maintaining compatibility with ICD systems.
          `,
          keyPoints: [
            "Elimination of multiaxial system for simplified coding",
            "Enhanced dimensional assessments complement categorical diagnoses",
            "New disorders reflect refined understanding of psychopathology",
            "Improved cultural sensitivity and global applicability"
          ]
        }
      ],
      caseStudies: [
        {
          title: "Case Study 1: Applying DSM-5 Structure in Clinical Assessment",
          scenario: `
            Maria, a 28-year-old teacher, presents with persistent sadness, anxiety, and difficulty concentrating that began 3 months after her father's death. She reports sleep difficulties, appetite changes, and feelings of guilt about not spending more time with her father before he died.

            Previous DSM-IV approach would have excluded Major Depressive Disorder diagnosis due to bereavement exclusion. How does DSM-5 approach this differently?
          `,
          analysis: `
            **DSM-5 Approach:**
            1. **Removed Bereavement Exclusion:** DSM-5 recognizes that grief and depression can co-occur
            2. **Dimensional Assessment:** Use severity measures to assess symptom intensity
            3. **Cultural Formulation:** Consider cultural aspects of grief and mourning
            4. **Cross-cutting Measures:** Assess anxiety, sleep, and functional impairment

            **Clinical Decision Making:**
            - Evaluate symptom severity and functional impairment
            - Distinguish normal grief from major depressive episode
            - Consider cultural and individual factors
            - Apply appropriate severity specifiers
          `,
          learningPoints: [
            "DSM-5 allows more nuanced understanding of grief and depression",
            "Dimensional assessments provide richer clinical information",
            "Cultural factors must be considered in diagnosis",
            "Severity measures guide treatment planning"
          ]
        },
        {
          title: "Case Study 2: Neurodevelopmental Spectrum Approach",
          scenario: `
            Alex, a 7-year-old child, shows difficulties with social communication, repetitive behaviors, and sensory sensitivities. However, symptoms are mild and don't significantly impair daily functioning. Parents are concerned about autism but child functions well in school with minor accommodations.

            How does DSM-5's spectrum approach help with this assessment?
          `,
          analysis: `
            **DSM-5 Spectrum Approach:**
            1. **Autism Spectrum Disorder:** Single diagnosis with severity specifiers
            2. **Severity Levels:** Level 1 (requiring support) to Level 3 (requiring very substantial support)
            3. **Dimensional Assessment:** Considers range of presentations
            4. **Functional Impact:** Emphasizes current level of functioning

            **Assessment Process:**
            - Evaluate core symptom domains (social communication, restricted/repetitive behaviors)
            - Determine severity level based on support needs
            - Consider developmental history and current functioning
            - Apply appropriate specifiers (with/without intellectual impairment)
          `,
          learningPoints: [
            "Spectrum approach captures broader range of presentations",
            "Severity levels guide intervention planning",
            "Functional assessment is crucial for diagnosis",
            "Early identification enables appropriate support"
          ]
        }
      ],
      assessmentTools: [
        {
          name: "DSM-5 Cross-Cutting Symptom Measure - Level 1 (Adult)",
          description: "Brief screening tool for mental health symptoms across multiple domains",
          usage: "Initial assessment to identify symptom areas requiring further evaluation"
        },
        {
          name: "Cultural Formulation Interview (CFI)",
          description: "Semi-structured interview to assess cultural factors in diagnosis", 
          usage: "Comprehensive cultural assessment for diverse populations"
        },
        {
          name: "WHODAS 2.0 Disability Assessment Schedule",
          description: "Measures functional impairment across six life domains",
          usage: "Assess disability and functional impact of mental health conditions"
        }
      ],
      quiz: [
        {
          id: "q1",
          question: "What is the primary organizational principle of DSM-5 diagnostic classes?",
          options: [
            "Alphabetical order by disorder name",
            "Developmental lifespan and neurobiological relationships", 
            "Severity of functional impairment",
            "Treatment response categories"
          ],
          correct: 1,
          explanation: "DSM-5 organizes diagnostic classes based on developmental lifespan patterns and underlying neurobiological relationships, reflecting current understanding of mental disorders."
        },
        {
          id: "q2", 
          question: "Which of the following was eliminated in DSM-5?",
          options: [
            "Severity specifiers",
            "Cultural formulation",
            "Multiaxial system",
            "Dimensional assessments"
          ],
          correct: 2,
          explanation: "The multiaxial system was eliminated in DSM-5 to simplify the diagnostic process while maintaining important clinical information through other means."
        },
        {
          id: "q3",
          question: "What is the main purpose of DSM-5 Section III?",
          options: [
            "Provide diagnostic criteria for all mental disorders",
            "Present emerging measures and models for further research",
            "List all approved medications for mental health treatment", 
            "Explain the history and development of psychiatric diagnosis"
          ],
          correct: 1,
          explanation: "Section III contains emerging measures and models, including assessment tools, cultural formulation guidelines, and conditions for further study."
        },
        {
          id: "q4",
          question: "How does DSM-5 approach the relationship between grief and depression?",
          options: [
            "Maintains bereavement exclusion for major depression",
            "Completely separates grief from depression diagnosis",
            "Removes bereavement exclusion and allows co-occurrence assessment",
            "Only allows depression diagnosis 6 months after loss"
          ],
          correct: 2,
          explanation: "DSM-5 removed the bereavement exclusion, recognizing that grief and major depression can co-occur and require clinical evaluation."
        },
        {
          id: "q5",
          question: "What is a key feature of DSM-5's dimensional approach?",
          options: [
            "Replaces all categorical diagnoses",
            "Only applies to personality disorders",
            "Provides severity measures and cross-cutting assessments",
            "Eliminates the need for clinical judgment"
          ],
          correct: 2,
          explanation: "DSM-5's dimensional approach complements categorical diagnoses by providing severity measures and cross-cutting symptom assessments for more comprehensive evaluation."
        }
      ],
      resources: [
        {
          title: "DSM-5-TR Diagnostic Criteria Quick Reference",
          type: "PDF",
          description: "Condensed version of diagnostic criteria for clinical reference"
        },
        {
          title: "Cultural Formulation Interview Template", 
          type: "PDF",
          description: "Structured template for conducting cultural assessments"
        },
        {
          title: "DSM-5 Assessment Measures Collection",
          type: "PDF",
          description: "Complete collection of cross-cutting and severity measures"
        }
      ]
    }
  };

  const currentModule = moduleData[moduleId as keyof typeof moduleData];

  if (!currentModule) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">Module Not Found</h2>
            <p className="text-muted-foreground mb-4">The requested module could not be found.</p>
            <Button onClick={() => navigate('/dsm5-academy')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Academy
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleQuizSubmit = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    currentModule.quiz.forEach((question) => {
      if (parseInt(quizAnswers[question.id]) === question.correct) {
        correct++;
      }
    });
    return (correct / currentModule.quiz.length) * 100;
  };

  return (
    <SiteChrome>
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-surface">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={() => navigate('/dsm5-academy')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Academy
              </Button>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline">Level {currentModule.level}</Badge>
                  <Badge variant="outline">{currentModule.difficulty}</Badge>
                </div>
                <h1 className="text-xl font-bold">Module {moduleId}: {currentModule.title}</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{currentModule.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={currentModule.completionRate} className="w-20" />
                  <span className="text-xs text-muted-foreground">{currentModule.completionRate}% complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Module Overview */}
        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                Module Overview
              </CardTitle>
              <CardDescription>{currentModule.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-primary" />
                  Learning Objectives
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {currentModule.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                      <span className="text-sm">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-4">
                <Button>
                  <Play className="w-4 h-4 mr-2" />
                  Start Module
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download Materials
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Module Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Content</TabsTrigger>
            <TabsTrigger value="cases">Case Studies</TabsTrigger>
            <TabsTrigger value="assessment">Assessment</TabsTrigger>
            <TabsTrigger value="quiz">Knowledge Check</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          {/* Content Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="space-y-6">
              {currentModule.sections.map((section, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <SafeMarkdown 
                      content={section.content} 
                      className="prose max-w-none"
                    />
                    
                    <div className="mt-6">
                      <h5 className="font-semibold mb-3 flex items-center gap-2">
                        <Star className="w-4 h-4 text-amber-700" />
                        Key Points
                      </h5>
                      <div className="grid md:grid-cols-2 gap-2">
                        {section.keyPoints.map((point, pointIndex) => (
                          <div key={pointIndex} className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                            <span className="text-sm">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Case Studies Tab */}
          <TabsContent value="cases" className="space-y-6">
            <div className="space-y-6">
              {currentModule.caseStudies.map((caseStudy, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      {caseStudy.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      <AccordionItem value="scenario">
                        <AccordionTrigger>Clinical Scenario</AccordionTrigger>
                        <AccordionContent>
                          <div className="p-4 bg-primary/10 rounded-lg mb-4">
                            <p className="text-sm leading-relaxed">{caseStudy.scenario}</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="analysis">
                        <AccordionTrigger>Clinical Analysis</AccordionTrigger>
                        <AccordionContent>
                          <SafeMarkdown 
                            content={caseStudy.analysis} 
                            className="prose max-w-none"
                          />
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="learning">
                        <AccordionTrigger>Learning Points</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            {caseStudy.learningPoints.map((point, pointIndex) => (
                              <div key={pointIndex} className="flex items-start gap-2 p-3 bg-primary/10 rounded-lg">
                                <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                                <span className="text-sm">{point}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Assessment Tools Tab */}
          <TabsContent value="assessment" className="space-y-6">
            <div className="grid gap-6">
              {currentModule.assessmentTools.map((tool, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Stethoscope className="w-5 h-5 text-primary" />
                      {tool.name}
                    </CardTitle>
                    <CardDescription>{tool.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h5 className="font-semibold mb-2">Clinical Usage:</h5>
                      <p className="text-sm text-muted-foreground">{tool.usage}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <FileText className="w-4 h-4 mr-2" />
                        View Tool
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Quiz Tab */}
          <TabsContent value="quiz" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Knowledge Check Quiz
                </CardTitle>
                <CardDescription>
                  Test your understanding of the module content. You need 80% to pass.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!showResults ? (
                  <div className="space-y-6">
                    {currentModule.quiz.map((question, index) => (
                      <div key={question.id} className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-4">
                          Question {index + 1}: {question.question}
                        </h4>
                        <RadioGroup
                          value={quizAnswers[question.id]}
                          onValueChange={(value) => 
                            setQuizAnswers(prev => ({ ...prev, [question.id]: value }))
                          }
                        >
                          {question.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center space-x-2">
                              <RadioGroupItem value={optionIndex.toString()} id={`${question.id}-${optionIndex}`} />
                              <Label htmlFor={`${question.id}-${optionIndex}`} className="text-sm">
                                {option}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>
                    ))}
                    
                    <Button onClick={handleQuizSubmit} className="w-full">
                      Submit Quiz
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {calculateScore().toFixed(0)}%
                      </div>
                      <p className="text-lg">
                        {calculateScore() >= 80 ? "Congratulations! You passed!" : "Please review and try again."}
                      </p>
                    </div>
                    
                    {currentModule.quiz.map((question, index) => (
                      <div key={question.id} className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">
                          Question {index + 1}: {question.question}
                        </h4>
                        <div className="mb-3">
                          <p className="text-sm">
                            <strong>Your answer:</strong> {question.options[parseInt(quizAnswers[question.id]) || 0]}
                          </p>
                          <p className="text-sm">
                            <strong>Correct answer:</strong> {question.options[question.correct]}
                          </p>
                        </div>
                        <div className="p-3 bg-primary/10 rounded">
                          <p className="text-sm"><strong>Explanation:</strong> {question.explanation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resources Tab */}
          <TabsContent value="resources" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {currentModule.resources.map((resource, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold mb-2">{resource.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{resource.description}</p>
                        <Badge variant="secondary">{resource.type}</Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </SiteChrome>
  );
};

export default DSM5ModulePage;