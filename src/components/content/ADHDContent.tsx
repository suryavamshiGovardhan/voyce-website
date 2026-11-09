import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, Compass, Flower, Gem, TreeDeciduous, Mountain, Church, Crown, Shield } from 'lucide-react';

const ADHDContent = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-surface border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl japanese-heading">
            <Brain className="h-6 w-6 text-primary" aria-hidden="true" />
            ADHD, in plain words
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground leading-relaxed mb-2 japanese-text">
            ADHD is a difference in how the brain manages attention, energy and getting started. It comes with real
            challenges and real strengths. This page helps you understand it — only a qualified professional can say
            whether someone has ADHD.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="neuroscience" className="w-full">
        <TabsList className="v-tabs">
          <TabsTrigger value="neuroscience" className="japanese-text">The brain science</TabsTrigger>
          <TabsTrigger value="types" className="japanese-text">Types</TabsTrigger>
          <TabsTrigger value="symptoms" className="japanese-text">What it can feel like</TabsTrigger>
          <TabsTrigger value="diagnosis" className="japanese-text">Getting assessed</TabsTrigger>
          <TabsTrigger value="treatment" className="japanese-text">Treatment</TabsTrigger>
          <TabsTrigger value="strategies" className="japanese-text">Strategies</TabsTrigger>
          <TabsTrigger value="strengths" className="japanese-text">Strengths</TabsTrigger>
          <TabsTrigger value="resources" className="japanese-text">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="neuroscience" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Brain className="h-6 w-6 text-primary" />
                  Executive Function Networks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                    <h4 className="font-semibold text-foreground mb-2 japanese-heading">Prefrontal Cortex</h4>
                    <ul className="text-sm text-primary space-y-1 japanese-text">
                      <li>• Working memory deficits</li>
                      <li>• Impulse control challenges</li>
                      <li>• Planning and organization issues</li>
                      <li>• Attention regulation difficulties</li>
                      <li>• Delayed cortical maturation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                    <h4 className="font-semibold text-foreground mb-2 japanese-heading">Dopamine System</h4>
                    <ul className="text-sm text-primary space-y-1 japanese-text">
                      <li>• Reward processing alterations</li>
                      <li>• Motivation and drive issues</li>
                      <li>• Novelty-seeking behaviours</li>
                      <li>• Delayed gratification challenges</li>
                      <li>• Addiction vulnerability</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                    <h4 className="font-semibold text-foreground mb-2 japanese-heading">Default Mode Network</h4>
                    <ul className="text-sm text-primary space-y-1 japanese-text">
                      <li>• Mind-wandering tendencies</li>
                      <li>• Internal attention issues</li>
                      <li>• Task-switching difficulties</li>
                      <li>• Hyperactive introspection</li>
                      <li>• Meditation benefits</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Flower className="h-6 w-6 text-foreground" />
                  Ancient Wisdom & Modern Understanding
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="v-tint-apricot p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      Zen: 一心不乱 (Isshin-furan)
                    </h4>
                    <p className="text-sm text-foreground japanese-text">
                      Single-minded focus without distraction - traditional meditation practices for cultivating sustained attention and mental clarity.
                    </p>
                  </div>

                  <div className="v-tint-apricot p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <TreeDeciduous className="h-4 w-4" />
                      Ayurveda: वात (Vata) Imbalance
                    </h4>
                    <p className="text-sm text-foreground japanese-text">
                      Air and space elements causing mental restlessness, treated through grounding practices, routine, and specific herbs and foods.
                    </p>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Church className="h-4 w-4" />
                      Greek: Ἀκρασία (Akrasia)
                    </h4>
                    <p className="text-sm text-primary japanese-text">
                      Aristotelian concept of acting against one's better judgment due to weakness of will - foundational to understanding ADHD impulsivity.
                    </p>
                  </div>

                  <div className="v-tint-apricot p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Stoic: Προσοχή (Prosoche)
                    </h4>
                    <p className="text-sm text-foreground japanese-text">
                      Continuous attention to the present moment and one's thoughts - Roman practice of mindful awareness and self-regulation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="strengths" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Creative Thinking",
                icon: Crown,
                color: "purple",
                traits: [
                  "Out-of-the-box solutions",
                  "Innovative approaches",
                  "Artistic expression",
                  "Imaginative storytelling",
                  "Unique perspectives"
                ]
              },
              {
                title: "Hyperfocus Ability",
                icon: Gem,
                color: "blue",
                traits: [
                  "Deep concentration states",
                  "Exceptional productivity",
                  "Mastery of interests",
                  "Flow state access",
                  "Intense learning phases"
                ]
              },
              {
                title: "High Energy",
                icon: Mountain,
                color: "orange",
                traits: [
                  "Enthusiasm and passion",
                  "Physical vitality",
                  "Motivational presence",
                  "Dynamic leadership",
                  "Inspiring others"
                ]
              },
              {
                title: "Quick Processing",
                icon: Compass,
                color: "green",
                traits: [
                  "Rapid idea generation",
                  "Fast problem-solving",
                  "Quick adaptability",
                  "Multi-tasking ability",
                  "Information synthesis"
                ]
              },
              {
                title: "Emotional Intensity",
                icon: Heart,
                color: "red",
                traits: [
                  "Deep empathy",
                  "Passionate connections",
                  "Emotional intelligence",
                  "Authentic expression",
                  "Inspiring advocacy"
                ]
              },
              {
                title: "Risk-Taking",
                icon: TreeDeciduous,
                color: "teal",
                traits: [
                  "Entrepreneurial spirit",
                  "Adventure seeking",
                  "Bold decisions",
                  "Innovation courage",
                  "Change leadership"
                ]
              }
            ].map((strength, index) => (
              <Card key={index} className="edu-card hover-lift">
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 text-foreground japanese-heading`}>
                    <strength.icon className="h-5 w-5" />
                    {strength.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {strength.traits.map((trait, idx) => (
                      <li key={idx} className={`text-sm text-foreground/80 flex items-center gap-2 japanese-text`}>
                        <Flower className="w-3 h-3" />
                        {trait}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="types" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">The Three Presentations of ADHD</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>ADHD is not one thing. The DSM-5 recognises three presentations, and most people move between them across a lifetime. The label matters less than understanding your own pattern — because the daily strategies that help each presentation are quite different.</p>
              <div className="bg-primary/10 p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Predominantly Inattentive</h4>
                <p className="text-sm">Historically called ADD. The interior world is loud; the exterior looks quiet. You lose track mid-sentence, misplace keys, start six tabs and finish none. Deadlines catch you by surprise even when they were on the calendar for weeks. This presentation is chronically under-diagnosed in girls and adults because the classroom disruption isn't there — the disruption is inside the head.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Predominantly Hyperactive-Impulsive</h4>
                <p className="text-sm">A body that cannot settle, a mouth that speaks before the sentence has finished forming, decisions made in the second between want and act. In adults, the visible hyperactivity often converts into inner restlessness — the leg that won't stop bouncing, the compulsive scrolling, the inability to sit through a meal without reaching for the phone.</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2">Combined</h4>
                <p className="text-sm">The most common presentation. Both dimensions are present, though usually one is dominant on any given day. Sleep, stress, hormones, and how interesting the task is all shift the mix. This is why an ADHD person can look "cured" during a passion project and "hopeless" the following Monday morning.</p>
              </div>
              <p className="text-sm italic text-muted-foreground">The lived-experience translation: ADHD isn't a deficit of attention. It's a difficulty regulating where attention lands. Boring but important always loses to novel but pointless — unless you build a system that changes what "boring" feels like to the brain.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">What ADHD Actually Feels Like</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>Textbook symptom lists — "difficulty sustaining attention," "often interrupts" — miss the texture. Here is what the pattern feels like from inside.</p>
              <h4 className="font-semibold text-foreground">Executive function, in plain language</h4>
              <p>Executive function is the brain's project manager: it decides what to do, in what order, keeps the plan in mind while doing it, and switches when circumstances change. In ADHD the manager is present but under-staffed. You know exactly what needs doing. You cannot start. Or you start and cannot finish. Or you finish the wrong thing brilliantly at 2am.</p>
              <h4 className="font-semibold text-foreground">Time-blindness</h4>
              <p>There are two times for the ADHD brain: now, and not-now. A dentist appointment in three weeks feels no more real than one in three years — until it becomes now, at which point it feels catastrophic. This is why "just plan ahead" is unhelpful advice. Planning tools that convert not-now into visible-now (physical timers, sticky notes at eye level, alarms that speak the task aloud) work; abstract calendars do not.</p>
              <h4 className="font-semibold text-foreground">Rejection sensitive dysphoria (RSD)</h4>
              <p>An outsized emotional response to real or perceived criticism, rejection, or failure. A neutral email from a manager can trigger hours of dread. This isn't fragility — it's a nervous system that reads social threat at high gain. Naming it reduces its power.</p>
              <h4 className="font-semibold text-foreground">The hyperfocus paradox</h4>
              <p>The same brain that cannot open a boring PDF can lose ten hours to a Wikipedia rabbit hole. Hyperfocus is not the opposite of ADHD; it is the same regulation problem in the other direction. The dopamine system latches onto whatever is intensely interesting and refuses to release. Meals, water, sleep, and other humans become invisible.</p>
              <h4 className="font-semibold text-foreground">Somatic and sleep signals</h4>
              <p>Delayed sleep phase (bed at 2am even when tired at 10pm), restless legs, difficulty regulating hunger and thirst, sensory over-load in crowded rooms, and the well-documented "revenge bedtime procrastination" — staying up because it's the only time the day feels like yours.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diagnosis" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">Getting Assessed — Especially in India</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>Diagnosis in India is uneven. The DSM-5 criteria are internationally standard, but the availability of clinicians trained in adult ADHD is limited outside major cities. Here is what a real, honest assessment looks like — and how to advocate for yourself.</p>
              <h4 className="font-semibold text-foreground">DSM-5 criteria, translated</h4>
              <p>Five or more inattention symptoms <em>or</em> five or more hyperactive-impulsive symptoms (for those 17 and older), present for at least six months, causing meaningful impairment in two or more settings (work, home, relationships), with at least some symptoms present before age 12. That last point trips people up — many high-masking adults are told "you can't have ADHD, you got through school." Getting through school with panic-fuelled all-nighters and a permanent sense of underperformance is not the same as not having ADHD.</p>
              <h4 className="font-semibold text-foreground">What a proper assessment includes</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>A structured clinical interview covering childhood, school, work, relationships, sleep, and mood.</li>
                <li>Standardised rating scales — DIVA-5 or CAARS for adults, Conners for children, plus an informant scale (parent, partner, or long-term friend).</li>
                <li>Screening for the conditions that look like ADHD or travel with it: anxiety, depression, trauma, thyroid dysfunction, sleep apnoea, iron deficiency, autism.</li>
                <li>Enough time. A 20-minute consultation is not enough to diagnose or rule out ADHD.</li>
              </ul>
              <h4 className="font-semibold text-foreground">India-specific navigation</h4>
              <p>NIMHANS (Bengaluru) has a dedicated adult ADHD clinic. Fortis, Apollo, Manas, and several private practitioners in metro cities offer assessment. Telepsychiatry has widened access considerably since 2020 — verify that the practitioner specifically works with adult ADHD, not only childhood cases. Iodex-your-way-through-it culture and academic pressure mean many Indian adults have masked symptoms for decades; a good clinician will take that seriously rather than dismissing it.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="treatment" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">Treatment — What Actually Helps</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>ADHD treatment is honestly more effective than most people expect, when the right combination is found. It is also more individualised than any headline suggests. Nothing here is medical advice — it is a map of what the evidence base and lived experience point toward.</p>
              <h4 className="font-semibold text-foreground">Medication classes</h4>
              <p><strong>Stimulants</strong> — methylphenidate (Ritalin, Concerta) and amphetamine-based (Adderall, Vyvanse; availability varies by country). Clinical guidelines such as NICE NG87 (UK, 2018) list them as a first option for many people, after a proper assessment. They do not "give you focus" like caffeine; they quiet the noise so the focus you already have can land where you point it. Correct dose feels like nothing dramatic — just a normal day where things get done.</p>
              <p><strong>Non-stimulants</strong> — atomoxetine (Strattera), guanfacine, bupropion. Slower onset, no controlled-substance restrictions, useful when stimulants are unavailable, intolerated, or contraindicated (cardiac issues, certain anxiety presentations, history of substance use).</p>
              <p>The right medication is the one that helps you at a dose that does not steal sleep, appetite, or personality. Titration takes weeks. A good prescriber revisits and adjusts.</p>
              <h4 className="font-semibold text-foreground">Therapy and coaching</h4>
              <p>CBT adapted for ADHD (Safren protocol) has strong evidence for adults — it targets the specific cognitive traps of ADHD (all-or-nothing planning, avoidance loops, RSD spirals) rather than treating it as generic anxiety. ADHD coaching is not therapy; it's practical executive-function scaffolding — someone helping you build the systems your brain won't build on its own.</p>
              <h4 className="font-semibold text-foreground">Lifestyle levers with real evidence</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Aerobic exercise raises baseline dopamine and noradrenaline — 20–30 minutes most days is the closest thing to a natural stimulant.</li>
                <li>Sleep is non-negotiable. Delayed sleep phase is treatable — morning light within 30 minutes of waking, dim evenings, sometimes low-dose melatonin under medical guidance.</li>
                <li>Protein at breakfast, stable blood sugar, adequate iron and vitamin D (both common deficiencies in India, both worsen focus).</li>
                <li>Mindfulness training — not to "cure" ADHD but to shorten the gap between distraction and noticing.</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategies" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">Daily Strategies That Actually Stick</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>The trap: reading productivity books written by neurotypical people, feeling energised, buying a planner, using it for three days, feeling worse. ADHD strategies work when they externalise the executive function you don't have internally — not when they demand more of it.</p>
              <h4 className="font-semibold text-foreground">Externalise everything</h4>
              <p>If a task is not visible, it does not exist. Physical whiteboards beat digital notes. Alarms beat calendars. Sticky notes at eye level beat to-do apps buried three swipes deep. The goal is to make the not-now become now by turning it into a physical object in your line of sight.</p>
              <h4 className="font-semibold text-foreground">Body-doubling</h4>
              <p>Working alongside another person — in the same room, on a call, even a silent video — makes hard tasks measurably easier. Focusmate, study-with-me streams, or a friend on WhatsApp video all count. This is not weakness; it's using social presence as a co-regulator for a nervous system that struggles to self-start.</p>
              <h4 className="font-semibold text-foreground">Time made visible</h4>
              <p>A Time Timer (physical countdown showing a red disk shrinking) does more for time-blindness than any digital countdown. Pomodoro (25 minutes work, 5 minutes rest) works for many; some ADHD brains need 10/2 or 45/15. Experiment; don't inherit rules.</p>
              <h4 className="font-semibold text-foreground">Dopamine menus and task-stacking</h4>
              <p>Pair low-dopamine tasks (admin, email) with high-dopamine anchors (favourite podcast, walk, coffee ritual). Never do laundry without an audiobook. Never open the tax file without the specific playlist that makes it bearable. This is not childish; it is neurologically sound.</p>
              <h4 className="font-semibold text-foreground">Environment design</h4>
              <p>Willpower is finite; friction is permanent. Move the phone to another room instead of promising not to look. Delete social apps and use browsers so a five-second friction breaks the reflex. Set the workspace up the night before so morning-you doesn't have to negotiate with itself.</p>
              <h4 className="font-semibold text-foreground">The three-item rule</h4>
              <p>Each day, three things. Not ten. Three. If those three get done, the day counts. This retrains a brain that has spent decades ending days feeling like a failure despite doing plenty.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">Where to Go Next</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <h4 className="font-semibold text-foreground">Trusted global resources</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>ADDitude Magazine</strong> (additudemag.com) — the most reliable free adult-ADHD library on the web.</li>
                <li><strong>CHADD</strong> (chadd.org) — evidence-based information, peer support directory.</li>
                <li><strong>How to ADHD</strong> (YouTube, Jessica McCabe) — accessible, honest, science-referenced.</li>
                <li><strong>Dr Russell Barkley</strong> — free lecture series on YouTube; the foundational adult-ADHD researcher.</li>
                <li><strong>Books</strong>: <em>Driven to Distraction</em> (Hallowell &amp; Ratey), <em>Taking Charge of Adult ADHD</em> (Barkley), <em>ADHD 2.0</em> (Hallowell &amp; Ratey), <em>Scattered Minds</em> (Gabor Maté).</li>
              </ul>
              <h4 className="font-semibold text-foreground">India-specific</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li><strong>NIMHANS Bengaluru</strong> — adult ADHD clinic, low-cost assessment.</li>
                <li><strong>ADHD India</strong> (adhdindia.org) — parent and adult community.</li>
                <li><strong>Mpower, Fortis, Nimhans, Apollo, Manas</strong> — private assessment routes.</li>
                <li><strong>iCall</strong> 9152987821 — free psychosocial helpline for immediate mental-health support.</li>
                <li>Verify any private psychiatrist specifically works with <em>adult</em> ADHD before booking.</li>
              </ul>
              <p className="text-xs italic text-muted-foreground mt-4">VOYCE is not a clinical service. Diagnosis and medication decisions belong with a qualified clinician. Everything here is educational.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ADHDContent;
