
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Zap, Heart, Brain, Shield, Target, TrendingUp, AlertTriangle, Clock, Users, BookOpen } from 'lucide-react';

const StressContent = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-surface border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Zap className="h-6 w-6 text-primary" aria-hidden="true" />
            Stress, in plain words
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            Stress is your body getting ready to cope. A little of it can help you focus; too much for too long wears you
            down. Open any section below — start with whatever feels most useful today. Nothing here is a test or a diagnosis.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="symptoms" className="w-full">
        <TabsList className="v-tabs">
          <TabsTrigger value="symptoms">Signs to notice</TabsTrigger>
          <TabsTrigger value="techniques">Things that help</TabsTrigger>
          <TabsTrigger value="assessment">Questions to ask yourself</TabsTrigger>
          <TabsTrigger value="lifestyle">Sleep, food &amp; movement</TabsTrigger>
          <TabsTrigger value="physiology">What happens in your body</TabsTrigger>
          <TabsTrigger value="types">Kinds of stress</TabsTrigger>
          <TabsTrigger value="workplace">Work &amp; burnout</TabsTrigger>
          <TabsTrigger value="emergency">If it feels too much</TabsTrigger>
        </TabsList>

        <TabsContent value="physiology" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                The Stress Response System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">HPA Axis (Hypothalamic-Pituitary-Adrenal)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                    <h4 className="font-semibold text-foreground mb-2">Hypothalamus</h4>
                    <ul className="text-sm text-primary space-y-1">
                      <li>• Releases CRH (Corticotropin-releasing hormone)</li>
                      <li>• Activates sympathetic nervous system</li>
                      <li>• Controls circadian rhythms</li>
                      <li>• Regulates body temperature</li>
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                    <h4 className="font-semibold text-foreground mb-2">Pituitary Gland</h4>
                    <ul className="text-sm text-primary space-y-1">
                      <li>• Releases ACTH (Adrenocorticotropic hormone)</li>
                      <li>• Controls other endocrine glands</li>
                      <li>• Regulates growth hormone</li>
                      <li>• Manages reproductive hormones</li>
                    </ul>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                    <h4 className="font-semibold text-foreground mb-2">Adrenal Glands</h4>
                    <ul className="text-sm text-primary space-y-1">
                      <li>• Produces cortisol and adrenaline</li>
                      <li>• Regulates blood sugar</li>
                      <li>• Controls inflammation</li>
                      <li>• Manages electrolyte balance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Neurotransmitter Systems</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Norepinephrine",
                      function: "Alertness and arousal",
                      effects: ["Increased heart rate", "Enhanced focus", "Elevated blood pressure", "Muscle tension"],
                      color: "red"
                    },
                    {
                      name: "Serotonin",
                      function: "Mood regulation",
                      effects: ["Mood stability", "Sleep regulation", "Appetite control", "Pain modulation"],
                      color: "blue"
                    },
                    {
                      name: "GABA",
                      function: "Calming and inhibition",
                      effects: ["Anxiety reduction", "Muscle relaxation", "Sleep promotion", "Seizure prevention"],
                      color: "green"
                    },
                    {
                      name: "Dopamine",
                      function: "Reward and motivation",
                      effects: ["Pleasure response", "Motor control", "Attention regulation", "Goal-directed behaviour"],
                      color: "purple"
                    }
                  ].map((neurotransmitter, index) => (
                    <div key={index} className={`v-tint-plum p-4 rounded-lg border border-border`}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className={`font-semibold text-foreground text-lg`}>{neurotransmitter.name}</h4>
                          <p className={`text-sm text-foreground/80`}>{neurotransmitter.function}</p>
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex flex-wrap gap-2">
                            {neurotransmitter.effects.map((effect, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">{effect}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="types" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Types and Categories of Stress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Acute vs. Chronic Stress</h3>
                  <div className="space-y-3">
                    <div className="v-tint-apricot p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Acute Stress</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• Short-term response to immediate threats</li>
                        <li>• Fight-or-flight activation</li>
                        <li>• Usually resolves quickly</li>
                        <li>• Can be beneficial for performance</li>
                        <li>• Examples: Public speaking, exams, emergencies</li>
                      </ul>
                    </div>
                    
                    <div className="v-tint-apricot p-4 rounded-lg border border-border">
                      <h4 className="font-semibold text-foreground mb-2">Chronic Stress</h4>
                      <ul className="text-sm text-foreground space-y-1">
                        <li>• Long-term exposure to stressors</li>
                        <li>• Persistent activation of stress systems</li>
                        <li>• Leads to health complications</li>
                        <li>• Impairs immune function</li>
                        <li>• Examples: Work pressure, financial problems, relationship issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Stress Categories</h3>
                  <div className="space-y-3">
                    {[
                      {
                        category: "Physical Stress",
                        description: "Bodily demands and environmental factors",
                        examples: ["Exercise", "Illness", "Heat/Cold", "Noise", "Pollution"]
                      },
                      {
                        category: "Psychological Stress",
                        description: "Mental and emotional pressures",
                        examples: ["Anxiety", "Depression", "Perfectionism", "Low self-esteem", "Trauma"]
                      },
                      {
                        category: "Social Stress",
                        description: "Interpersonal and societal pressures",
                        examples: ["Relationships", "Work conflicts", "Social isolation", "Discrimination", "Family issues"]
                      },
                      {
                        category: "Environmental Stress",
                        description: "External environmental factors",
                        examples: ["Urban living", "Technology overload", "Natural disasters", "Economic instability", "Political unrest"]
                      }
                    ].map((type, index) => (
                      <div key={index} className="bg-primary/10 p-3 rounded-lg border border-border">
                        <h4 className="font-semibold text-foreground">{type.category}</h4>
                        <p className="text-sm text-primary mb-2">{type.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {type.examples.map((example, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">{example}</Badge>
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

        <TabsContent value="techniques" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Immediate Stress Relief Techniques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">4-7-8 Breathing</h4>
                    <ol className="text-sm text-primary space-y-1 list-decimal list-inside">
                      <li>Inhale through nose for 4 counts</li>
                      <li>Hold breath for 7 counts</li>
                      <li>Exhale through mouth for 8 counts</li>
                      <li>Repeat 4-8 cycles</li>
                    </ol>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Progressive Muscle Relaxation</h4>
                    <ul className="text-sm text-primary space-y-1">
                      <li>• Tense muscle groups for 5-10 seconds</li>
                      <li>• Release tension suddenly</li>
                      <li>• Notice the contrast between tension and relaxation</li>
                      <li>• Work through all major muscle groups</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">5-4-3-2-1 Grounding</h4>
                    <ul className="text-sm text-primary space-y-1">
                      <li>• 5 things you can see</li>
                      <li>• 4 things you can touch</li>
                      <li>• 3 things you can hear</li>
                      <li>• 2 things you can smell</li>
                      <li>• 1 thing you can taste</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Long-term Stress Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="v-tint-apricot p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Cognitive Restructuring</h4>
                    <ul className="text-sm text-foreground space-y-1">
                      <li>• Identify negative thought patterns</li>
                      <li>• Challenge unrealistic beliefs</li>
                      <li>• Replace with balanced thinking</li>
                      <li>• Practice positive self-talk</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Mindfulness Meditation</h4>
                    <ul className="text-sm text-primary space-y-1">
                      <li>• Daily meditation practice (10-20 minutes)</li>
                      <li>• Body scan techniques</li>
                      <li>• Mindful breathing exercises</li>
                      <li>• Present-moment awareness</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Social Support Systems</h4>
                    <ul className="text-sm text-primary space-y-1">
                      <li>• Build strong relationships</li>
                      <li>• Join support groups</li>
                      <li>• Seek professional counseling</li>
                      <li>• Maintain family connections</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                How Stress Actually Shows Up in the Body and Mind
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Stress rarely announces itself. It leaks out sideways — through a stiff neck you keep blaming on your pillow, a short fuse with people you love, a
                strange fog that makes even simple decisions feel heavy. Learning to recognise these signals early is the first act of self-respect. What follows
                is not a diagnostic checklist — it is a map. If several of these have been quietly true for weeks, your nervous system is asking for care, not
                judgment.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="v-tint-apricot p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Physical Signals</h4>
                  <ul className="text-sm text-foreground space-y-2">
                    <li>• Tension headaches, jaw clenching, teeth grinding at night</li>
                    <li>• Shoulders creeping toward your ears; low back tightness</li>
                    <li>• Digestion turning unreliable — bloating, cramps, appetite swings</li>
                    <li>• Falling asleep fine but waking at 3 AM with a racing mind</li>
                    <li>• Getting sick more often; small colds that linger</li>
                    <li>• Shallow, chest-based breathing you only notice when you stop</li>
                    <li>• Skin flare-ups, hair thinning, missed or heavier cycles</li>
                  </ul>
                </div>
                <div className="v-tint-apricot p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Emotional Signals</h4>
                  <ul className="text-sm text-foreground space-y-2">
                    <li>• Irritability at things that never used to bother you</li>
                    <li>• A low hum of dread, especially on Sunday evenings</li>
                    <li>• Feeling numb or disconnected — "watching your life from outside"</li>
                    <li>• Tearfulness that arrives without a clear reason</li>
                    <li>• Guilt for resting; guilt for not resting enough</li>
                    <li>• A sense of urgency even when nothing is actually urgent</li>
                  </ul>
                </div>
                <div className="v-tint-apricot p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Cognitive Signals</h4>
                  <ul className="text-sm text-foreground space-y-2">
                    <li>• Racing thoughts, especially before sleep</li>
                    <li>• Forgetting small things — names, appointments, why you walked into a room</li>
                    <li>• Trouble finishing sentences or holding attention on one thing</li>
                    <li>• Catastrophising — the mind sprinting to worst-case outcomes</li>
                    <li>• Decision fatigue on choices that used to feel easy</li>
                    <li>• A loop of "what if…" that never resolves</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-3">Behavioural Signals</h4>
                  <ul className="text-sm text-primary space-y-2">
                    <li>• Cancelling plans you were once looking forward to</li>
                    <li>• Scrolling for hours to postpone the day</li>
                    <li>• Eating past fullness or forgetting to eat at all</li>
                    <li>• Reaching more often for caffeine, sugar, alcohol, nicotine</li>
                    <li>• Procrastinating on tasks that used to feel routine</li>
                    <li>• Snapping at people, then feeling terrible about it afterwards</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-5 rounded-lg border-l-4 border-border">
                <p className="text-sm text-foreground italic">
                  A single symptom on a hard week is human. A cluster of them, week after week, is a message. The point of noticing is not to diagnose yourself —
                  it is to stop gaslighting yourself. Something real is happening. You are allowed to respond to it.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assessment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Questions to sit with — not a test
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed">
                This is not a diagnostic tool. It is a mirror. Answer each prompt honestly for the past two weeks. There are no right answers and no scores that
                define you. The goal is to get out of your head and see the pattern clearly, so you can act on it with more compassion than criticism.
              </p>

              <div className="bg-primary/10 p-5 rounded-lg border border-border space-y-3">
                <h4 className="font-semibold text-foreground">Ten questions to sit with</h4>
                <ol className="text-sm text-primary space-y-2 list-decimal list-inside">
                  <li>In the last two weeks, how often have you felt unable to control the important things in your life?</li>
                  <li>How often did you feel nervous, on edge, or unable to slow down your mind?</li>
                  <li>How often did you feel that difficulties were piling up faster than you could handle them?</li>
                  <li>Are you sleeping through the night? Do you wake up feeling rested?</li>
                  <li>Is your body carrying tension you can locate — jaw, shoulders, stomach, chest?</li>
                  <li>Are you still doing the small rituals that usually keep you steady (walks, meals, calls with people you love)?</li>
                  <li>Have you laughed genuinely in the past week?</li>
                  <li>Is there a task you keep avoiding? What makes it feel too big?</li>
                  <li>Who do you talk to when things get hard — and have you talked to them recently?</li>
                  <li>If a close friend described your last two weeks to you, what would you tell them to do?</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Signs your system is coping</h4>
                  <ul className="text-sm text-primary space-y-1">
                    <li>• Sleep is broadly restorative</li>
                    <li>• You still enjoy at least a few small things</li>
                    <li>• You can name what you're feeling</li>
                    <li>• You can rest without heavy guilt</li>
                    <li>• You still reach out to people</li>
                  </ul>
                </div>
                <div className="v-tint-apricot p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Signs it's time for more support</h4>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• Symptoms persist for more than 2–3 weeks</li>
                    <li>• Sleep, appetite, or focus are meaningfully disrupted</li>
                    <li>• You've stopped doing the things that keep you well</li>
                    <li>• Substances are quietly becoming a coping tool</li>
                    <li>• You feel numb, hopeless, or unlike yourself</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Journaling prompts</h4>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• What is the smallest kind thing I can do for myself today?</li>
                  <li>• If my body could speak in words right now, what would it say?</li>
                  <li>• What am I carrying that isn't actually mine?</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lifestyle" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                The Ordinary Practices That Change Everything
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Stress management is not built inside a therapist's office. It is built in the small, boring choices of a Tuesday afternoon — the walk you take
                instead of the fourth coffee, the phone you put in another room, the meal you actually chew. These practices are unglamorous. That is precisely
                why they work.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Sleep as the foundation</h4>
                  <p className="text-sm text-primary mb-2">
                    Nothing else works if this is broken. Aim for a consistent sleep and wake time — the body craves rhythm more than duration.
                  </p>
                  <ul className="text-sm text-primary space-y-1">
                    <li>• Morning sunlight within 30 minutes of waking</li>
                    <li>• Caffeine cutoff by 2 PM (its half-life is roughly six hours)</li>
                    <li>• Dim, warm light after sunset; screens off 60 minutes before bed</li>
                    <li>• A cool, dark, boring bedroom — reserved only for sleep</li>
                    <li>• A wind-down ritual: a page of a book, a slow shower, one stretch</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Nutrition and the gut-brain axis</h4>
                  <p className="text-sm text-primary mb-2">
                    Blood sugar spikes and crashes feel almost identical to anxiety. Feed the nervous system steadily.
                  </p>
                  <ul className="text-sm text-primary space-y-1">
                    <li>• Protein at every meal to keep glucose stable</li>
                    <li>• Fibre-rich plants — the gut microbiome makes most of your serotonin</li>
                    <li>• Water first, coffee second</li>
                    <li>• Notice, without shame, how alcohol affects your sleep and mood the next day</li>
                    <li>• Eat sitting down, off a plate, for at least one meal a day</li>
                  </ul>
                </div>
                <div className="v-tint-apricot p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Movement as medicine</h4>
                  <p className="text-sm text-foreground mb-2">
                    You do not need a gym. You need a body that gets used regularly. Cortisol has to be metabolised, not just endured.
                  </p>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• A brisk 20-minute walk most days — the single most researched stress intervention</li>
                    <li>• Two short strength sessions a week (bodyweight is fine)</li>
                    <li>• Slow, nasal-breathing walks after meals</li>
                    <li>• Stretch after long sitting — hips and thoracic spine</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Digital hygiene</h4>
                  <p className="text-sm text-primary mb-2">
                    The phone is not neutral. It is designed to keep your stress system slightly activated all day.
                  </p>
                  <ul className="text-sm text-primary space-y-1">
                    <li>• Charge your phone outside the bedroom</li>
                    <li>• No screens for the first and last 30 minutes of the day</li>
                    <li>• Batch email and messages into two or three windows</li>
                    <li>• Grayscale your phone for a week — notice how much less pull it has</li>
                    <li>• One meal a day with no screen, no music, no company but yourself</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                <h4 className="font-semibold text-foreground mb-1">Nature — even small doses</h4>
                <p className="text-sm text-primary">
                  Twenty minutes in a park, three times a week, has measurable effects on cortisol. If a park isn't accessible, a tree outside a window, a pot of
                  basil on a sill, birdsong through open air — the nervous system responds to all of it. This is not aesthetic. It is biology.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workplace" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                Working Without Burning Out
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed">
                Most people don't burn out from the work itself. They burn out from the guilt of resting, the inability to say no, and the slow erosion of
                boundaries no one else was going to protect. Workplace stress is rarely solved by a productivity hack. It is solved by permission — permission to
                be a whole human at work, not a permanently available resource.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Early warning signs of burnout</h4>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• Dreading Mondays by Saturday afternoon</li>
                    <li>• Cynicism where curiosity used to be</li>
                    <li>• Weekends spent recovering, not living</li>
                    <li>• Feeling that no matter how much you do, it is not enough</li>
                    <li>• Losing your sense of humour about work</li>
                    <li>• Physical symptoms that vanish on holiday</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Boundary scripts you can actually use</h4>
                  <ul className="text-sm text-primary space-y-2">
                    <li>• "I can't take that on this week — can we look at next?"</li>
                    <li>• "To do this well, I'll need to move X. Which matters more?"</li>
                    <li>• "I'll respond tomorrow morning" (instead of at 10 PM)</li>
                    <li>• "That's outside my scope — the right person is…"</li>
                    <li>• "I'm going offline for the weekend. Back Monday."</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Meeting overload</h4>
                  <ul className="text-sm text-primary space-y-1">
                    <li>• Default meetings to 25 or 50 minutes</li>
                    <li>• Ask: could this be a message?</li>
                    <li>• Protect one "no-meeting" morning a week</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Email triage</h4>
                  <ul className="text-sm text-primary space-y-1">
                    <li>• Two check-ins a day, not constant</li>
                    <li>• Reply, delegate, defer, delete</li>
                    <li>• Turn off desktop notifications</li>
                  </ul>
                </div>
                <div className="v-tint-apricot p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Remote-work traps</h4>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• A defined start and end time</li>
                    <li>• A "commute" walk to bookend the day</li>
                    <li>• Leave the laptop closed after hours</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                <p className="text-sm text-foreground italic">
                  You are not a bad employee for being tired. You are a person, doing a job, in a body that requires rest. The workplace will always want more.
                  Your job is to decide, with intention, how much of yourself you are willing to give.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emergency" className="space-y-6">
          <Card className="border-border">
            <CardHeader className="v-tint-apricot">
              <CardTitle className="flex items-center gap-2 text-foreground">
                <AlertTriangle className="h-5 w-5" />
                If You Are in Crisis Right Now
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="v-tint-apricot p-5 rounded-lg border border-border">
                <p className="text-foreground leading-relaxed mb-4">
                  If you are thinking about ending your life, or you cannot keep yourself safe right now, please reach out. You do not have to have the right
                  words. You do not have to explain yourself well. Just call.
                </p>
                <div className="space-y-3 text-foreground">
                  <div>
                    <strong>Tele MANAS (Govt. of India, free, 24×7):</strong> 14416 · 1-800-891-4416
                  </div>
                  <div>
                    <strong>iCall (India, free, confidential):</strong> +91 9152987821 · Mon–Sat, 8 AM–10 PM
                  </div>
                  <div>
                    <strong>Vandrevala Foundation (India, 24×7):</strong> +91 9999 666 555
                  </div>
                  <div>
                    <strong>AASRA (India, 24×7):</strong> +91 9820466726
                  </div>
                  <div>
                    <strong>International (findahelpline.com):</strong> global directory of local crisis lines
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="v-tint-apricot p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">A safety plan you can build in ten minutes</h4>
                  <ol className="text-sm text-foreground space-y-1 list-decimal list-inside">
                    <li>My personal warning signs (thoughts, moods, situations)</li>
                    <li>Things I can do alone to feel a little safer (a shower, a walk, one song)</li>
                    <li>People or places that distract me from the pain</li>
                    <li>People I can call — with their numbers written down</li>
                    <li>Professionals and helplines I can reach</li>
                    <li>Making my environment safer — removing means of harm</li>
                    <li>One reason, however small, to stay another day</li>
                  </ol>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2">Grounding for a panic wave</h4>
                  <ul className="text-sm text-primary space-y-1">
                    <li>• Feet flat on the floor. Press them down.</li>
                    <li>• Cold water on your wrists, or an ice cube in your palm</li>
                    <li>• Exhale twice as long as you inhale (in for 4, out for 8)</li>
                    <li>• Name five things you can see, out loud</li>
                    <li>• Remind yourself: this is a wave. It peaks. It passes.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                <p className="text-sm text-foreground italic">
                  VOYCE is not a substitute for a therapist, a doctor, or an emergency service. If you are unsafe right now, please contact one of the numbers
                  above or go to your nearest emergency department. You are worth the call.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StressContent;
