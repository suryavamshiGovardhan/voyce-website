import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, Compass, Mountain, TreeDeciduous, Gem, Church, Crown, Shield, Flower } from 'lucide-react';

const BrainContent = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-surface border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl japanese-heading">
            <Brain className="h-6 w-6 text-primary" aria-hidden="true" />
            Your brain, in plain words
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-foreground leading-relaxed mb-2 japanese-text">
            How the parts of your brain work together, how it keeps changing as you learn, and why sleep, movement and
            people around you matter so much. Open any section — there is no order.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="structure" className="w-full">
        <TabsList className="v-tabs">
          <TabsTrigger value="structure" className="japanese-text">Structure</TabsTrigger>
          <TabsTrigger value="networks" className="japanese-text">Networks</TabsTrigger>
          <TabsTrigger value="plasticity" className="japanese-text">Plasticity</TabsTrigger>
          <TabsTrigger value="development" className="japanese-text">Development</TabsTrigger>
          <TabsTrigger value="consciousness" className="japanese-text">Consciousness</TabsTrigger>
          <TabsTrigger value="memory" className="japanese-text">Memory</TabsTrigger>
          <TabsTrigger value="emotions" className="japanese-text">Emotions</TabsTrigger>
          <TabsTrigger value="optimization" className="japanese-text">Looking after it</TabsTrigger>
        </TabsList>

        <TabsContent value="structure" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Brain className="h-6 w-6 text-primary" />
                  Cerebral Cortex Regions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      region: "Frontal Lobe",
                      functions: ["Executive functions", "Planning", "Decision making", "Personality", "Motor control"],
                      color: "blue"
                    },
                    {
                      region: "Parietal Lobe", 
                      functions: ["Sensory processing", "Spatial awareness", "Attention", "Language", "Mathematics"],
                      color: "green"
                    },
                    {
                      region: "Temporal Lobe",
                      functions: ["Memory formation", "Language comprehension", "Auditory processing", "Emotion", "Recognition"],
                      color: "purple"
                    },
                    {
                      region: "Occipital Lobe",
                      functions: ["Visual processing", "Pattern recognition", "Color perception", "Motion detection", "Depth perception"],
                      color: "orange"
                    }
                  ].map((lobe, index) => (
                    <div key={index} className={`v-tint-plum p-4 rounded-lg border border-border`}>
                      <h4 className={`font-semibold text-foreground mb-2 japanese-heading`}>{lobe.region}</h4>
                      <div className="flex flex-wrap gap-1">
                        {lobe.functions.map((func, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs japanese-text">{func}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="edu-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 japanese-heading">
                  <Church className="h-6 w-6 text-foreground" />
                  Ancient Brain Wisdom
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="v-tint-apricot p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Flower className="h-4 w-4" />
                      Sanskrit: मनस् (Manas) - Mind Principle
                    </h4>
                    <p className="text-sm text-foreground japanese-text">
                      Vedic understanding of mind as subtle matter coordinating sensory experience, thought, and consciousness through chakra energy centers.
                    </p>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Crown className="h-4 w-4" />
                      Greek: Ψυχή (Psyche) - Soul-Mind
                    </h4>
                    <p className="text-sm text-primary japanese-text">
                      Platonic three-part soul theory: rational (logos), spirited (thymos), and appetitive (epithymia) - precursor to modern brain structure understanding.
                    </p>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Arabic: عقل (Aql) - Intellect
                    </h4>
                    <p className="text-sm text-primary japanese-text">
                      Islamic philosophical concept of intellect as divine faculty enabling understanding, moral reasoning, and spiritual insight.
                    </p>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Mountain className="h-4 w-4" />
                      Japanese: 心 (Kokoro) - Heart-Mind
                    </h4>
                    <p className="text-sm text-primary japanese-text">
                      Unified concept of heart-mind including emotion, thought, will, and spiritual essence - holistic brain-body understanding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plasticity" className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Structural Plasticity",
                icon: Mountain,
                color: "blue",
                mechanisms: [
                  "Neurogenesis - new neuron formation",
                  "Synaptogenesis - new connection creation", 
                  "Dendritic branching expansion",
                  "Myelin sheath strengthening",
                  "Glial cell multiplication"
                ]
              },
              {
                title: "Functional Plasticity",
                icon: Compass,
                color: "green", 
                mechanisms: [
                  "Synaptic strength modification",
                  "Network reorganization",
                  "Compensatory activation",
                  "Cross-modal recruitment",
                  "Homeostatic scaling"
                ]
              },
              {
                title: "Activity-Dependent",
                icon: TreeDeciduous,
                color: "purple",
                mechanisms: [
                  "Use-it-or-lose-it principle",
                  "Hebbian learning rules",
                  "Experience-driven changes",
                  "Environmental enrichment",
                  "Skill-specific adaptations"
                ]
              }
            ].map((type, index) => (
              <Card key={index} className="edu-card hover-lift">
                <CardHeader>
                  <CardTitle className={`flex items-center gap-2 text-foreground japanese-heading`}>
                    <type.icon className="h-5 w-5" />
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {type.mechanisms.map((mechanism, idx) => (
                      <li key={idx} className={`text-sm text-foreground/80 flex items-start gap-2 japanese-text`}>
                        <Gem className="w-3 h-3 mt-1 flex-shrink-0" />
                        <span>{mechanism}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="consciousness" className="space-y-8">
          <Card className="edu-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 japanese-heading">
                <Crown className="h-6 w-6 text-primary" />
                Theories of Consciousness
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    theory: "Global Workspace Theory",
                    description: "Consciousness emerges when information becomes globally available across brain networks",
                    key_points: ["Neural global workspace", "Attention and awareness", "Information integration", "Broadcast mechanism"]
                  },
                  {
                    theory: "Integrated Information Theory",
                    description: "Consciousness corresponds to integrated information (Φ) in a system",
                    key_points: ["Information integration", "Phi (Φ) measurement", "Causal structure", "Consciousness quantification"]
                  },
                  {
                    theory: "Orchestrated Objective Reduction",
                    description: "Quantum processes in microtubules generate consciousness",
                    key_points: ["Quantum coherence", "Microtubule structures", "Objective reduction", "Non-computational process"]
                  },
                  {
                    theory: "Predictive Processing",
                    description: "Consciousness arises from predictive models of sensory input",
                    key_points: ["Prediction errors", "Hierarchical processing", "Bayesian brain", "Active inference"]
                  }
                ].map((theory, index) => (
                  <div key={index} className="bg-surface p-4 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2 japanese-heading">{theory.theory}</h4>
                    <p className="text-sm text-primary mb-3 japanese-text">{theory.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {theory.key_points.map((point, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs japanese-text">{point}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="networks" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">The Brain's Three Great Networks</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>For most of the 20th century, neuroscience mapped the brain as regions with jobs — Broca's area for speech, hippocampus for memory. The last two decades of fMRI research have redrawn the picture. The brain is better understood as overlapping <em>networks</em> — distributed sets of regions that fire together to accomplish something. Three networks matter most for daily mental life.</p>
              <h4 className="font-semibold text-foreground">Default Mode Network (DMN)</h4>
              <p>Active when you are not doing anything in particular — daydreaming, remembering, imagining the future, thinking about other people, telling yourself the story of you. The DMN spans the medial prefrontal cortex, posterior cingulate, and angular gyrus. It is the substrate of the "wandering mind" and of the sense of self. Overactive DMN correlates with rumination and depression; under-active DMN with dissociation and derealisation. Meditation practices measurably quiet it.</p>
              <h4 className="font-semibold text-foreground">Salience Network</h4>
              <p>Centred on the anterior insula and dorsal anterior cingulate. Its job is a switchboard: deciding, moment by moment, what deserves your attention. A car horn, a hunger pang, a passing thought, the face of your partner — the salience network tags what is important and hands control to the appropriate downstream network. When this network mis-fires (as in some anxiety and psychotic conditions), the world feels either full of urgent threats or eerily flat.</p>
              <h4 className="font-semibold text-foreground">Central Executive (Frontoparietal) Network</h4>
              <p>The deliberate, goal-directed system — dorsolateral prefrontal cortex, posterior parietal cortex. This is what runs a working-memory task, holds a plan, inhibits an impulse, keeps six steps of an equation in mind. It is metabolically expensive and easily depleted, which is why decision fatigue is real.</p>
              <p className="italic text-sm text-muted-foreground">Good mental health is not any one network being "strong" — it is fluid switching between them. Rest without rumination, focus without rigidity, awareness without hypervigilance. Every meditation tradition, in different language, teaches the same skill: flexible network switching.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="development" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">A Brain Across a Lifetime</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>The human brain does not arrive finished. It arrives radically unfinished — and that is our species' great advantage. The 25-year construction project shapes who you become far more than any single event within it.</p>
              <h4 className="font-semibold text-foreground">In utero and infancy</h4>
              <p>Neurons are generated at a rate of roughly 250,000 per minute during peak prenatal development. By birth, most of the roughly 86 billion neurons you will ever have are already present. What is not yet built is the wiring — the synaptic web that determines what those neurons can do together.</p>
              <h4 className="font-semibold text-foreground">Early childhood — synaptic exuberance</h4>
              <p>Between birth and age three, the brain builds synapses at astonishing speed, roughly one million new connections per second at peak. A three-year-old has almost twice as many synapses as an adult. This is why children learn language, music, and physical skills with an ease adults find alien — and why early relational safety and stimulation matter so much.</p>
              <h4 className="font-semibold text-foreground">Childhood into adolescence — pruning and myelination</h4>
              <p>From roughly age four onwards, the brain begins removing synapses it isn't using and reinforcing the ones it is. This is <em>synaptic pruning</em>. Simultaneously, axons are wrapped in myelin — the fatty insulation that speeds signals up a hundredfold. Pruning and myelination together turn a diffuse, plastic brain into a specialised, efficient one.</p>
              <h4 className="font-semibold text-foreground">Adolescence</h4>
              <p>The limbic system (emotion, reward, social) matures years before the prefrontal cortex (judgement, restraint, long-term thinking). This is not a bug — it evolved to push young humans to take the risks needed to leave the family group. But it explains why teenage decisions can look inexplicable: the accelerator matured on schedule; the brakes are still under construction.</p>
              <h4 className="font-semibold text-foreground">The mid-twenties threshold</h4>
              <p>Full prefrontal maturation lands somewhere between 24 and 27 for most people. The nervous system you take into your late twenties is, in a real sense, the first fully-installed version of yourself.</p>
              <h4 className="font-semibold text-foreground">Middle age and beyond</h4>
              <p>The old story — "brain declines after 30" — is largely wrong. Processing speed does slow. But crystallised intelligence, vocabulary, emotional regulation, and pattern recognition often peak in the 50s or 60s. Neurogenesis continues in the hippocampus throughout life. What matters most for a well-ageing brain is what was already known to Hippocrates: sleep, movement, social connection, novelty, and purpose.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="memory" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">How Memory Actually Works</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>Memory is not a recording. It is a reconstruction — every time. Understanding this changes how you learn, how you grieve, and how much you trust the vividness of your own past.</p>
              <h4 className="font-semibold text-foreground">Sensory memory</h4>
              <p>The first, briefest layer — a fraction of a second of raw visual, auditory, or tactile trace. Most is discarded before you notice it existed. This is the layer that makes a sparkler drawing a shape in the dark possible.</p>
              <h4 className="font-semibold text-foreground">Working memory</h4>
              <p>The cognitive workbench — around four items held actively for seconds to a minute. It lives largely in the dorsolateral prefrontal cortex and parietal areas. Working memory is what lets you follow this sentence to its end. It is fragile: interruption, stress, and sleep debt all shrink it.</p>
              <h4 className="font-semibold text-foreground">Long-term memory</h4>
              <p>Split into two broad kinds: <em>declarative</em> (facts and events, hippocampus-dependent) and <em>procedural</em> (skills — cycling, typing — dependent on the basal ganglia and cerebellum). Declarative memory subdivides further into episodic (your personal past) and semantic (general knowledge). Damage to the hippocampus wipes episodic recall while leaving procedural skill perfectly intact — a fact that has taught neuroscience most of what it knows.</p>
              <h4 className="font-semibold text-foreground">Encoding versus retrieval</h4>
              <p>Most of what people call "bad memory" is actually poor encoding — you never really formed the trace. Deep processing (meaning, connection to what you already know, elaboration) encodes far better than repetition. Testing yourself is a more powerful learning tool than re-reading, because retrieval strengthens the pathway.</p>
              <h4 className="font-semibold text-foreground">Sleep and consolidation</h4>
              <p>Learning happens while awake. <em>Remembering</em> happens during sleep. Slow-wave sleep consolidates declarative memory; REM sleep consolidates procedural and emotional memory. A student who studies until 3am and takes the test at 8am is not smarter; they are a student who did the encoding but skipped the consolidation.</p>
              <h4 className="font-semibold text-foreground">Reconsolidation</h4>
              <p>Each time you recall a memory, it becomes briefly malleable before being re-stored. This is why eyewitness testimony is unreliable and why therapies like EMDR can genuinely change the emotional charge of a traumatic memory — the window during retrieval is real.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emotions" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">The Emotional Brain</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>Emotion is not the opposite of reason. It is faster reason — a rapid, body-based appraisal system that evolved long before language and still runs beneath every "logical" decision you make.</p>
              <h4 className="font-semibold text-foreground">The limbic system, briefly</h4>
              <p>The amygdala tags salience and threat; the hippocampus contextualises with memory; the hypothalamus triggers the body's response; the insula reads the body's internal state; the anterior cingulate weighs conflict and pain (physical and social use overlapping circuits — social rejection genuinely hurts).</p>
              <h4 className="font-semibold text-foreground">The amygdala hijack</h4>
              <p>Under acute threat — real or perceived — the amygdala can trigger a full sympathetic response in around 100 milliseconds, before the slower prefrontal cortex has finished evaluating whether the threat is real. This is the neurological basis of "I don't know why I said that" and of every panic response that arrives before thought. It is not a personal failing; it is design.</p>
              <h4 className="font-semibold text-foreground">Top-down regulation</h4>
              <p>The prefrontal cortex can inhibit the amygdala, but only when it has bandwidth. Sleep debt, low blood sugar, chronic stress, and cognitive overload all weaken the inhibitory pathway. This is why the same person can be composed at breakfast and reactive at 10pm.</p>
              <h4 className="font-semibold text-foreground">What actually helps</h4>
              <p>Naming the emotion ("this is anger") measurably reduces amygdala activation — a finding known as "affect labelling." Slow exhalation activates the parasympathetic branch via the vagus nerve. Physical movement discharges the mobilisation the sympathetic system prepared for. Social co-regulation with a safe person is the fastest, most reliable down-regulator humans have — which is why isolation makes almost every mental-health condition worse.</p>
              <p className="italic text-sm text-muted-foreground">The traditions had the intuition right. The Stoics called it prosoche — continuous mindful attention. The Buddhists called it sati. Modern neuroscience calls it prefrontal-limbic regulation. The vocabulary changes; the skill is the same.</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-6">
          <Card className="edu-card">
            <CardHeader><CardTitle className="japanese-heading">What Actually Improves the Brain</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-foreground leading-relaxed">
              <p>The wellness industry sells complexity because complexity sells. The evidence base for what actually improves brain function over months and years is short, unglamorous, and largely free.</p>
              <h4 className="font-semibold text-foreground">Sleep, non-negotiable</h4>
              <p>Seven to nine hours for most adults. Consistent timing matters as much as duration. During deep sleep the glymphatic system flushes metabolic waste — including beta-amyloid, the protein implicated in Alzheimer's — at rates ten times higher than during waking. Chronic sleep restriction is not a productivity strategy; it is accelerated cognitive ageing.</p>
              <h4 className="font-semibold text-foreground">Aerobic exercise</h4>
              <p>The most robust intervention we have for brain health across the lifespan. Aerobic exercise increases BDNF (brain-derived neurotrophic factor) — a molecule that promotes neuron survival and synaptic plasticity. It grows the hippocampus in older adults, slows white-matter decline, and produces measurable improvements in mood within a single session.</p>
              <h4 className="font-semibold text-foreground">Learning as maintenance</h4>
              <p>Learning something genuinely new — a language, an instrument, an unfamiliar physical skill — drives plasticity in a way that scrolling never does. The novelty and effort matter more than the topic.</p>
              <h4 className="font-semibold text-foreground">Spaced repetition</h4>
              <p>Reviewing material at expanding intervals — one day, three days, a week, three weeks — produces dramatically better retention than massed practice. Anki, Quizlet, and similar tools implement this; the principle predates them by a century (Ebbinghaus, 1885).</p>
              <h4 className="font-semibold text-foreground">Social connection</h4>
              <p>Loneliness has a mortality effect comparable to smoking fifteen cigarettes a day. Brains evolved in bands of 30 to 150 people; quality of contact matters more than volume. Two or three real friendships buffer more than a thousand digital acquaintances.</p>
              <h4 className="font-semibold text-foreground">Diet — the honest version</h4>
              <p>Mediterranean-pattern eating (fish, vegetables, olive oil, nuts, whole grains, minimal ultra-processed food) has the strongest observational evidence for long-term cognitive health. Most "brain supplements" do not survive rigorous trials. Omega-3s, adequate B12, vitamin D, and iron matter; the rest is largely marketing.</p>
              <h4 className="font-semibold text-foreground">Meditation and breathwork</h4>
              <p>Eight weeks of daily mindfulness practice produces measurable changes in prefrontal-amygdala connectivity. Slow-breathing practices (roughly six breaths per minute) shift heart-rate variability and vagal tone. These are not mystical claims; they are replicated findings.</p>
              <p className="italic text-sm text-muted-foreground">Almost every "brain hack" is a rediscovery of one of the above, dressed in newer clothes.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BrainContent;
