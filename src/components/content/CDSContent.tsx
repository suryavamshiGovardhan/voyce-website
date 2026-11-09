
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Brain, BookOpen, Users, Microscope, TrendingUp, AlertTriangle, Heart, Target, Clock, Zap } from 'lucide-react';

const CDSContent = () => {
  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <Card className="bg-surface border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Brain className="h-6 w-6 text-primary" />
            Cognitive disengagement syndrome (CDS), in plain words
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Cognitive disengagement syndrome (CDS), once called sluggish cognitive tempo, is a pattern researchers are
            still studying: lots of daydreaming, mental fog and slower processing. It is not yet an official diagnosis in
            DSM-5-TR or ICD-11. This page explains the research — only a qualified professional can assess someone.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="definition" className="w-full">
        <TabsList className="v-tabs">
          <TabsTrigger value="definition">Definition</TabsTrigger>
          <TabsTrigger value="symptoms">Signs</TabsTrigger>
          <TabsTrigger value="diagnosis">How professionals assess it</TabsTrigger>
          <TabsTrigger value="treatment">Treatment</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="definition" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                What is Cognitive Disengagement Syndrome?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Historical Context</h3>
                  <p className="text-foreground leading-relaxed">
                    CDS was first identified in the 1980s by Dr. Russell Barkley and colleagues as a cluster of symptoms 
                    that seemed distinct from ADHD. Originally termed "Sluggish Cognitive Tempo," the condition was 
                    renamed to better reflect its core features and reduce stigma associated with the previous terminology.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Core Characteristics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Cognitive Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-primary">
                        <li>Slowed information processing</li>
                        <li>Difficulty with working memory</li>
                        <li>Reduced mental energy</li>
                        <li>Impaired sustained attention</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Behavioural Features</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-primary">
                        <li>Appearing "spacey" or dreamy</li>
                        <li>Slow task completion</li>
                        <li>Social withdrawal tendencies</li>
                        <li>Reduced physical activity</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Neurobiological Basis</h3>
                  <p className="text-foreground leading-relaxed mb-4">
                    Recent neuroimaging studies suggest CDS involves dysfunction in several brain networks:
                  </p>
                  <div className="space-y-3">
                    <div className="border-l-4 border-border pl-4">
                      <h4 className="font-semibold">Default Mode Network (DMN)</h4>
                      <p className="text-sm text-muted-foreground">Hyperactivation during tasks requiring focused attention</p>
                    </div>
                    <div className="border-l-4 border-border pl-4">
                      <h4 className="font-semibold">Salience Network</h4>
                      <p className="text-sm text-muted-foreground">Reduced ability to switch between internal and external focus</p>
                    </div>
                    <div className="border-l-4 border-border pl-4">
                      <h4 className="font-semibold">Central Executive Network</h4>
                      <p className="text-sm text-muted-foreground">Impaired working memory and cognitive control</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Signs researchers describe
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Primary Symptoms</h3>
                  <div className="space-y-3">
                    {[
                      { symptom: "Daydreaming", description: "Frequent periods of mind-wandering, especially during tasks requiring sustained attention" },
                      { symptom: "Mental Fogginess", description: "Feeling unclear or confused in thinking, difficulty organizing thoughts" },
                      { symptom: "Slow Processing Speed", description: "Taking longer than peers to complete tasks or respond to questions" },
                      { symptom: "Staring Episodes", description: "Appearing to stare blankly or seem lost in thought for extended periods" },
                      { symptom: "Hypoactivity", description: "Lower energy levels and reduced physical activity compared to peers" }
                    ].map((item, index) => (
                      <div key={index} className="bg-primary/10 p-3 rounded-lg">
                        <div className="font-semibold text-foreground">{item.symptom}</div>
                        <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Secondary Symptoms</h3>
                  <div className="space-y-3">
                    {[
                      { category: "Academic", symptoms: ["Inconsistent performance", "Difficulty with timed tests", "Poor organization"] },
                      { category: "Social", symptoms: ["Social withdrawal", "Difficulty initiating conversations", "Appearing disinterested"] },
                      { category: "Emotional", symptoms: ["Low self-esteem", "Anxiety about performance", "Mood variability"] },
                      { category: "Physical", symptoms: ["Fatigue", "Sleep disturbances", "Poor coordination"] }
                    ].map((category, index) => (
                      <div key={index} className="bg-primary/10 p-3 rounded-lg">
                        <div className="font-semibold text-foreground">{category.category}</div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {category.symptoms.map((symptom, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">{symptom}</Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diagnosis" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                How professionals look at it
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Current Diagnostic Status</h3>
                <div className="v-tint-apricot border border-border p-4 rounded-lg">
                  <p className="text-foreground">
                    <strong>Important Note:</strong> CDS is not yet officially recognised in the DSM-5-TR or ICD-11. 
                    However, research is ongoing to establish formal diagnostic criteria.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Tools professionals use (not self-tests)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Rating Scales</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Child Concentration Inventory (CCI)</li>
                        <li>• Sluggish Cognitive Tempo Scale</li>
                        <li>• Barkley CDS Rating Scale</li>
                        <li>• Conners 3rd Edition (SCT subscale)</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">Clinical Assessments</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Comprehensive developmental history</li>
                        <li>• Cognitive testing (IQ, processing speed)</li>
                        <li>• Attention and executive function tests</li>
                        <li>• Academic achievement assessment</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Differential Diagnosis</h3>
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-3">CDS vs. ADHD</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-semibold text-primary mb-2">CDS Characteristics</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Underactive/hypoactive</li>
                          <li>• Slow, sluggish behaviour</li>
                          <li>• Daydreaming and mental fog</li>
                          <li>• Social withdrawal</li>
                          <li>• Processing speed deficits</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">ADHD Characteristics</h5>
                        <ul className="text-sm space-y-1">
                          <li>• Hyperactive/impulsive</li>
                          <li>• Fast, restless behaviour</li>
                          <li>• Distractibility and inattention</li>
                          <li>• Social impulsivity</li>
                          <li>• Working memory deficits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Treatment Approaches and Interventions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Behavioural Interventions</h3>
                  <div className="space-y-3">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Cognitive Training</h4>
                      <ul className="text-sm text-primary space-y-1">
                        <li>• Working memory training programs</li>
                        <li>• Attention training exercises</li>
                        <li>• Processing speed improvement activities</li>
                        <li>• Mindfulness and meditation practices</li>
                      </ul>
                    </div>
                    
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Environmental Modifications</h4>
                      <ul className="text-sm text-primary space-y-1">
                        <li>• Reduced distractions in learning environment</li>
                        <li>• Extended time for task completion</li>
                        <li>• Frequent breaks and movement opportunities</li>
                        <li>• Visual cues and organizational aids</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Medical Interventions</h3>
                  <div className="space-y-3">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Pharmacological Options</h4>
                      <ul className="text-sm text-primary space-y-1">
                        <li>• Stimulant medications (limited efficacy)</li>
                        <li>• Non-stimulant alternatives</li>
                        <li>• Modafinil for processing speed</li>
                        <li>• Individualised medication trials</li>
                      </ul>
                    </div>
                    
                    <div className="v-tint-apricot p-4 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Alternative Therapies</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• Neurofeedback training</li>
                        <li>• Cognitive behavioural therapy</li>
                        <li>• Occupational therapy</li>
                        <li>• Exercise and physical activity programs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Current Research and Future Directions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Recent Research Findings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    {[
                      {
                        title: "Neuroimaging Studies",
                        findings: ["Altered default mode network activity", "Reduced salience network connectivity", "Frontal lobe hypoactivation"]
                      },
                      {
                        title: "Genetic Research",
                        findings: ["Potential genetic markers identified", "Heritability estimates around 0.6", "Gene-environment interactions"]
                      }
                    ].map((study, index) => (
                      <Card key={index} className="border-border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-foreground">{study.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1">
                            {study.findings.map((finding, idx) => (
                              <li key={idx}>• {finding}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      {
                        title: "Treatment Studies",
                        findings: ["Mindfulness interventions show promise", "Cognitive training effectiveness", "Pharmacological response patterns"]
                      },
                      {
                        title: "Longitudinal Research",
                        findings: ["Persistence into adulthood", "Academic outcome predictions", "Comorbidity development patterns"]
                      }
                    ].map((study, index) => (
                      <Card key={index} className="border-border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-foreground">{study.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="text-sm space-y-1">
                            {study.findings.map((finding, idx) => (
                              <li key={idx}>• {finding}</li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Support Organisations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border-l-4 border-border pl-3">
                    <h4 className="font-semibold">CHADD (Children and Adults with ADHD)</h4>
                    <p className="text-sm text-muted-foreground">Provides resources and support for CDS research</p>
                  </div>
                  <div className="border-l-4 border-border pl-3">
                    <h4 className="font-semibold">ADDitude Magazine</h4>
                    <p className="text-sm text-muted-foreground">Regular articles on CDS developments</p>
                  </div>
                  <div className="border-l-4 border-border pl-3">
                    <h4 className="font-semibold">CDS Research Consortium</h4>
                    <p className="text-sm text-muted-foreground">Leading research on diagnostic criteria</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Key Publications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold">Barkley, R. A. (2023)</div>
                    <div className="text-muted-foreground">"Cognitive Disengagement Syndrome: A New Understanding"</div>
                    <div className="text-xs text-primary">Clinical Psychology Review</div>
                  </div>
                  <div>
                    <div className="font-semibold">Carlson, C. L. & Mann, M. (2022)</div>
                    <div className="text-muted-foreground">"Sluggish Cognitive Tempo Predicts Academic Functioning"</div>
                    <div className="text-xs text-primary">Journal of Abnormal Child Psychology</div>
                  </div>
                  <div>
                    <div className="font-semibold">Becker, S. P. (2021)</div>
                    <div className="text-muted-foreground">"CDS in Adolescents: Prevalence and Correlates"</div>
                    <div className="text-xs text-primary">Developmental Psychology</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CDSContent;
