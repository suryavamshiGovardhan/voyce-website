import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Shield, Heart, Brain, Flower, Mountain, Gem, Church, TreeDeciduous, Compass, Crown } from 'lucide-react';

const TraumaContent = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-surface border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl japanese-heading">
            <Shield className="h-6 w-6 text-primary" aria-hidden="true" />
            Trauma and recovery, gently
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground leading-relaxed mb-2 japanese-text">
            What trauma is, how it can show up in the body and mind, and what helps people recover. Go slowly — you can
            stop at any point. If reading this stirs something up, please talk to someone you trust.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="understanding" className="w-full">
        <TabsList className="v-tabs">
          <TabsTrigger value="understanding" className="japanese-text">Understanding</TabsTrigger>
          <TabsTrigger value="types" className="japanese-text">Types</TabsTrigger>
          <TabsTrigger value="symptoms" className="japanese-text">How it can show up</TabsTrigger>
          <TabsTrigger value="healing" className="japanese-text">Healing</TabsTrigger>
          <TabsTrigger value="therapies" className="japanese-text">Therapies</TabsTrigger>
          <TabsTrigger value="resilience" className="japanese-text">Resilience</TabsTrigger>
          <TabsTrigger value="support" className="japanese-text">Support</TabsTrigger>
          <TabsTrigger value="resources" className="japanese-text">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="understanding" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Brain className="h-6 w-6 text-primary" />
                  Neurobiological Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                    <h4 className="font-semibold text-foreground mb-2 japanese-heading">Amygdala Hyperactivation</h4>
                    <ul className="text-sm text-primary space-y-2 japanese-text">
                      <li>• Fear centre becomes overactive</li>
                      <li>• Heightened threat detection</li>
                      <li>• Emotional dysregulation</li>
                      <li>• Fight-flight-freeze responses</li>
                      <li>• Memory consolidation disruption</li>
                    </ul>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                    <h4 className="font-semibold text-foreground mb-2 japanese-heading">Hippocampus Changes</h4>
                    <ul className="text-sm text-primary space-y-2 japanese-text">
                      <li>• Volume reduction in chronic trauma</li>
                      <li>• Memory formation difficulties</li>
                      <li>• Contextual memory impairment</li>
                      <li>• Spatial navigation issues</li>
                      <li>• Neurogenesis disruption</li>
                    </ul>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                    <h4 className="font-semibold text-foreground mb-2 japanese-heading">Prefrontal Cortex Impact</h4>
                    <ul className="text-sm text-primary space-y-2 japanese-text">
                      <li>• Executive function impairment</li>
                      <li>• Decision-making difficulties</li>
                      <li>• Attention and concentration issues</li>
                      <li>• Emotional regulation challenges</li>
                      <li>• Working memory deficits</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Heart className="h-6 w-6 text-primary" />
                  Cultural Wisdom Traditions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="v-tint-apricot p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Flower className="h-4 w-4" />
                      Sanskrit: त्राण (Trana) - Protection
                    </h4>
                    <p className="text-sm text-foreground japanese-text">
                      Ancient Vedic understanding of trauma as disruption of dharma (life purpose) and the path to restoration through yoga, meditation, and spiritual practices.
                    </p>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Church className="h-4 w-4" />
                      Greek: Κάθαρσις (Katharsis) - Purification
                    </h4>
                    <p className="text-sm text-primary japanese-text">
                      Aristotelian concept of emotional purification through experiencing and expressing deep emotions, foundational to modern trauma therapy.
                    </p>
                  </div>

                  <div className="v-tint-apricot p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      Arabic: صبر (Sabr) - Patient Perseverance
                    </h4>
                    <p className="text-sm text-foreground japanese-text">
                      Islamic concept of patient endurance through hardship as a path to spiritual growth and inner strength.
                    </p>
                  </div>

                  <div className="v-tint-apricot p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Latin: Virtus - Virtue Through Adversity
                    </h4>
                    <p className="text-sm text-foreground japanese-text">
                      Roman Stoic philosophy teaching that virtue and strength emerge through facing challenges with courage and wisdom.
                    </p>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      Japanese: 金継ぎ (Kintsugi) - Golden Repair
                    </h4>
                    <p className="text-sm text-primary japanese-text">
                      Art of repairing broken pottery with gold, symbolizing that brokenness and healing are part of beauty, not something to hide.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="healing" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Somatic Approaches",
                icon: TreeDeciduous,
                color: "green",
                methods: [
                  "Body-based trauma release",
                  "Nervous system regulation",
                  "Breathwork and movement",
                  "Sensory integration",
                  "Polyvagal theory application"
                ]
              },
              {
                title: "Cognitive Processing",
                icon: Brain,
                color: "blue",
                methods: [
                  "Trauma-focused CBT",
                  "Cognitive restructuring",
                  "Memory processing",
                  "Meaning-making",
                  "Narrative therapy"
                ]
              },
              {
                title: "Expressive Therapies",
                icon: Heart,
                color: "pink",
                methods: [
                  "Art and music therapy",
                  "Dance/movement therapy",
                  "Creative writing",
                  "Drama therapy",
                  "Sand tray therapy"
                ]
              }
            ].map((approach, index) => (
              <Card key={index} className="edu-card">
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 text-foreground`}>
                    <approach.icon className="h-5 w-5" />
                    {approach.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {approach.methods.map((method, idx) => (
                      <li key={idx} className={`text-sm text-foreground/80 flex items-center gap-2`}>
                        <div className={`w-2 h-2 rounded-full bg-primary`}></div>
                        {method}
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
            <CardHeader>
              <CardTitle className="flex items-center gap-2 japanese-heading">
                <Compass className="h-6 w-6 text-foreground" />
                The Many Shapes of Trauma
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed japanese-text">
                Trauma is not one thing. It is the nervous system's response to more than it could hold, at a time when it could not fully process what
                happened. Sometimes it arrives in a single moment. Sometimes it accumulates so slowly that we mistake it for personality. Naming the shape of it
                is often the first act of relief — because you cannot heal what you cannot see.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Acute Trauma", body: "A single, time-bound event — an accident, an assault, a sudden loss. The mind keeps replaying it because it has not yet been fully processed.", color: "amber" },
                  { name: "Chronic Trauma", body: "Repeated exposure — long illness, ongoing violence, financial precarity. The body learns to live in a state of low, constant alarm.", color: "orange" },
                  { name: "Complex Trauma (C-PTSD)", body: "Prolonged, interpersonal, and often inescapable — childhood abuse, coercive relationships, captivity. Affects identity, relationships, and the sense of self, not just memory.", color: "red" },
                  { name: "Developmental Trauma", body: "Occurs during formative years and shapes the nervous system's baseline. Often invisible because it feels like 'just how I am.'", color: "rose" },
                  { name: "Vicarious / Secondary Trauma", body: "Carried by those who witness or hold others' pain — carers, first responders, therapists, journalists, activists.", color: "purple" },
                  { name: "Collective & Intergenerational Trauma", body: "Trauma that lives in a community and passes through families — war, displacement, caste violence, systemic oppression. The body remembers what the ancestors survived.", color: "indigo" },
                  { name: "Medical Trauma", body: "Diagnoses, procedures, ICU stays, or medical betrayal. The body was in a place of extremity and it did not forget.", color: "teal" },
                  { name: "Betrayal Trauma", body: "When harm comes from someone we depended on for safety. The wound is not just the event, but the collapse of trust itself.", color: "pink" }
                ].map((t, i) => (
                  <div key={i} className={`v-tint-plum p-4 rounded-lg border border-border`}>
                    <h4 className={`font-semibold text-foreground mb-2 japanese-heading`}>{t.name}</h4>
                    <p className={`text-sm text-foreground japanese-text`}>{t.body}</p>
                  </div>
                ))}
              </div>

              <div className="v-tint-apricot p-4 rounded-lg border-l-4 border-border">
                <p className="text-sm text-foreground italic japanese-text">
                  You may recognise more than one of these. That is common, not broken. Trauma layers. Healing does too.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symptoms" className="space-y-6">
          <Card className="edu-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 japanese-heading">
                <Heart className="h-6 w-6 text-primary" />
                What Trauma Feels Like from the Inside
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed japanese-text">
                Trauma responses are not defects. They are old strategies that once kept you alive — the flinch, the freeze, the fawn, the fog. Reading these
                may be uncomfortable. It may also be the first time you feel less alone in your own body.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="v-tint-apricot p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">Re-experiencing</h4>
                  <ul className="text-sm text-foreground space-y-1 japanese-text">
                    <li>• Intrusive memories, flashbacks, nightmares</li>
                    <li>• A sound or smell that yanks you back in time</li>
                    <li>• Physical waves — chest, throat, gut — with no clear trigger</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">Avoidance</h4>
                  <ul className="text-sm text-primary space-y-1 japanese-text">
                    <li>• Steering around places, people, conversations</li>
                    <li>• Overworking, over-scrolling, over-caring for others</li>
                    <li>• A quiet, persistent "I don't want to talk about it"</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">Mood & cognition shifts</h4>
                  <ul className="text-sm text-primary space-y-1 japanese-text">
                    <li>• Persistent shame or guilt, often without an object</li>
                    <li>• A sense that the world is unsafe and people cannot be trusted</li>
                    <li>• Trouble remembering parts of the event, or entire periods of life</li>
                    <li>• Losing interest in things that used to matter</li>
                  </ul>
                </div>
                <div className="v-tint-apricot p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">Hyperarousal</h4>
                  <ul className="text-sm text-foreground space-y-1 japanese-text">
                    <li>• Easily startled; sleep that never quite deepens</li>
                    <li>• Anger that surprises even you</li>
                    <li>• Constantly scanning for what could go wrong</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">Dissociation</h4>
                  <ul className="text-sm text-primary space-y-1 japanese-text">
                    <li>• Feeling far away from your own body</li>
                    <li>• "Losing time" during hard conversations</li>
                    <li>• A dreamlike quality that comes and goes</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">Somatic signs</h4>
                  <ul className="text-sm text-primary space-y-1 japanese-text">
                    <li>• Chronic pain, unexplained gut trouble, autoimmune flare-ups</li>
                    <li>• A body that flinches at touch, or craves it desperately</li>
                    <li>• Fatigue that sleep does not fix</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="therapies" className="space-y-6">
          <Card className="edu-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 japanese-heading">
                <Gem className="h-6 w-6 text-primary" />
                Therapies That Actually Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed japanese-text">
                No single therapy fits everyone. What matters most is the relationship with the therapist and the sense that your nervous system feels safer,
                not more overwhelmed, over time. Here are the approaches with the strongest evidence for trauma — described in plain language, so you can walk
                into a first session with less mystery.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "EMDR (Eye Movement Desensitisation & Reprocessing)", body: "Uses side-to-side eye movements, tapping, or sound while recalling the memory. Helps the brain re-file the memory as past instead of present. Often faster than talk therapy for single-incident trauma.", suits: "Suits: PTSD, phobias, distressing memories with clear imagery." },
                  { name: "Somatic Experiencing", body: "Works with body sensations rather than the story. Slowly discharges the trapped fight/flight/freeze energy the body did not get to complete at the time.", suits: "Suits: those who feel stuck in their body, freeze responses, medical trauma." },
                  { name: "Internal Family Systems (IFS)", body: "Treats the psyche as a system of 'parts' — the protector, the exile, the manager. Rather than fighting the parts, you get to know them. Deeply gentle.", suits: "Suits: complex trauma, inner-critic patterns, self-abandonment." },
                  { name: "Trauma-Focused CBT", body: "Structured, short-term, evidence-heavy. You gradually re-approach the memory in a safe frame and reshape the beliefs that grew around it ('it was my fault,' 'I am unsafe').", suits: "Suits: children and teens, single-incident trauma, those who like structure." },
                  { name: "Sensorimotor Psychotherapy", body: "Combines body awareness with talk. You notice posture, gesture, breath as you speak — the body speaks first, and it is heard.", suits: "Suits: developmental trauma, chronic dissociation." },
                  { name: "Group Therapy & Peer Support", body: "Being witnessed by others who understand can undo the isolation trauma builds. Not a replacement for individual work, but often a powerful companion.", suits: "Suits: grief, addiction recovery, shared identity trauma." }
                ].map((t, i) => (
                  <div key={i} className="bg-primary/10 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 japanese-heading">{t.name}</h4>
                    <p className="text-sm text-primary japanese-text mb-2">{t.body}</p>
                    <p className="text-xs text-primary italic">{t.suits}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                <h4 className="font-semibold text-foreground mb-1 japanese-heading">On medication</h4>
                <p className="text-sm text-primary japanese-text">
                  Medication does not "cure" trauma, but it can turn the volume down enough for therapy to reach you. SSRIs (like sertraline), prazosin for
                  nightmares, and short-term anti-anxiety support are common. This is a conversation with a psychiatrist, not a search engine.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resilience" className="space-y-6">
          <Card className="edu-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 japanese-heading">
                <Mountain className="h-6 w-6 text-primary" />
                Post-Traumatic Growth
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed japanese-text">
                Resilience is not the absence of suffering. It is what grows through it, slowly, when the wound is tended rather than hidden. Researchers
                Tedeschi and Calhoun found that survivors often report growth in five specific domains — not despite what happened, but because of how they met
                it.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "1. Renewed appreciation for life", body: "Small things — morning light, a warm cup, a friend's voice — begin to matter more, not less." },
                  { title: "2. Deeper relationships", body: "You learn who really shows up. You become more able to be that person for others." },
                  { title: "3. Personal strength", body: "A quiet knowing: 'I survived that. I can meet more than I thought.'" },
                  { title: "4. New possibilities", body: "Old paths lose their grip. New callings — creative, vocational, spiritual — often emerge." },
                  { title: "5. Spiritual or existential deepening", body: "Not necessarily religious. A larger sense of meaning, or a more honest one." }
                ].map((d, i) => (
                  <div key={i} className="bg-primary/10 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-1 japanese-heading">{d.title}</h4>
                    <p className="text-sm text-primary japanese-text">{d.body}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-primary/10 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1 japanese-heading">Window of tolerance</h4>
                  <p className="text-sm text-primary japanese-text">
                    The zone where you can feel without being flooded. Healing widens the window — through breath, rhythm, and slowly-titrated exposure.
                  </p>
                </div>
                <div className="v-tint-apricot p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1 japanese-heading">Co-regulation</h4>
                  <p className="text-sm text-foreground japanese-text">
                    Nervous systems calm each other. A trusted person's steady presence is not a luxury — it is neurobiology.
                  </p>
                </div>
                <div className="v-tint-apricot p-4 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-1 japanese-heading">Ritual & rhythm</h4>
                  <p className="text-sm text-foreground japanese-text">
                    Morning tea. Sunday walks. Lighting a candle for someone lost. Small repeatable acts rebuild a sense of order the trauma disrupted.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="space-y-6">
          <Card className="edu-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 japanese-heading">
                <Church className="h-6 w-6 text-primary" />
                Building the Circle That Holds You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed japanese-text">
                Trauma often teaches us that people are unsafe. Healing asks us to test that lesson, gently, with the right people. This is not about opening
                everything to everyone. It is about learning who deserves your story, and what kind of holding you actually need.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">Signs of a safe person</h4>
                  <ul className="text-sm text-primary space-y-1 japanese-text">
                    <li>• They listen without rushing to fix</li>
                    <li>• They believe you the first time</li>
                    <li>• They can hold their own emotions while you have yours</li>
                    <li>• They respect a "no" without punishment</li>
                    <li>• You feel calmer, not smaller, after being with them</li>
                  </ul>
                </div>
                <div className="v-tint-apricot p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">Boundary language you can borrow</h4>
                  <ul className="text-sm text-foreground space-y-2 japanese-text">
                    <li>• "I'm not ready to talk about that part."</li>
                    <li>• "I need you to just listen right now, not solve it."</li>
                    <li>• "I love you and this topic is off-limits for me."</li>
                    <li>• "I need to leave this conversation. We can come back to it."</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-5 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2 japanese-heading">Choosing a therapist — a short checklist</h4>
                <ul className="text-sm text-primary space-y-1 japanese-text">
                  <li>• Are they trained specifically in trauma (EMDR, SE, IFS, TF-CBT)?</li>
                  <li>• Do they explain their approach in plain language?</li>
                  <li>• Do they welcome your questions about consent, pace, and safety?</li>
                  <li>• After three sessions, do you feel a little more resourced — or more overwhelmed?</li>
                  <li>• Do they know when to refer you to a psychiatrist, doctor, or specialist?</li>
                </ul>
              </div>

              <div className="v-tint-apricot p-4 rounded-lg border-l-4 border-border">
                <p className="text-sm text-foreground italic japanese-text">
                  If the first therapist is not the right one, this is information — not failure. Fit matters more than credentials.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card className="edu-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 japanese-heading">
                <Gem className="h-6 w-6 text-foreground" />
                Where to Turn Next
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="v-tint-apricot p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">India — support lines & services</h4>
                  <ul className="text-sm text-foreground space-y-2 japanese-text">
                    <li>• <strong>iCall</strong> — +91 9152987821, Mon–Sat 8 AM–10 PM, free & confidential</li>
                    <li>• <strong>Vandrevala Foundation</strong> — +91 9999 666 555, 24×7</li>
                    <li>• <strong>Tele MANAS (Govt of India)</strong> — 14416 or 1-800-891-4416, free, 24×7</li>
                    <li>• <strong>NIMHANS Bengaluru</strong> — public research & tertiary care</li>
                    <li>• <strong>Sangath</strong> — community mental health, Goa/Delhi/Bhopal</li>
                    <li>• <strong>The Live Love Laugh Foundation</strong> — awareness and access</li>
                  </ul>
                </div>
                <div className="bg-primary/10 p-5 rounded-lg border border-border">
                  <h4 className="font-semibold text-foreground mb-2 japanese-heading">Global directories</h4>
                  <ul className="text-sm text-primary space-y-2 japanese-text">
                    <li>• <strong>findahelpline.com</strong> — local crisis lines by country</li>
                    <li>• <strong>ISSTD</strong> — International Society for the Study of Trauma & Dissociation</li>
                    <li>• <strong>EMDRIA</strong> — find a certified EMDR therapist</li>
                    <li>• <strong>IFS Institute</strong> — Internal Family Systems practitioners</li>
                    <li>• <strong>Somatic Experiencing International</strong> — practitioner directory</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/10 p-5 rounded-lg border border-border">
                <h4 className="font-semibold text-foreground mb-2 japanese-heading">Books that have helped many</h4>
                <ul className="text-sm text-primary space-y-1 japanese-text">
                  <li>• <em>The Body Keeps the Score</em> — Bessel van der Kolk</li>
                  <li>• <em>What Happened to You?</em> — Bruce Perry & Oprah Winfrey</li>
                  <li>• <em>The Myth of Normal</em> — Gabor Maté</li>
                  <li>• <em>Waking the Tiger</em> — Peter Levine</li>
                  <li>• <em>No Bad Parts</em> — Richard Schwartz (IFS)</li>
                  <li>• <em>Complex PTSD: From Surviving to Thriving</em> — Pete Walker</li>
                  <li>• <em>My Grandmother's Hands</em> — Resmaa Menakem (racialised trauma & the body)</li>
                </ul>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg border-l-4 border-border">
                <p className="text-sm text-foreground italic japanese-text">
                  VOYCE is a companion, not a clinician. If any of this stirs something that feels too big to carry alone, please reach out to a professional or
                  one of the lines above. You do not have to earn the right to ask for help.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TraumaContent;
