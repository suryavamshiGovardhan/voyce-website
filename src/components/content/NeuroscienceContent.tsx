import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Microscope, Brain, Cpu, MapPin } from 'lucide-react';

const NeuroscienceContent = () => (
  <div className="space-y-8">
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Microscope className="h-6 w-6 text-primary" /> A Field That Rewrites Itself Every Decade
        </CardTitle>
      </CardHeader>
      <CardContent className="text-foreground leading-relaxed space-y-3">
        <p>Neuroscience is unusual among sciences in how fast it moves. The dominant model of the brain in 1990 (hard-wired regions with fixed functions) was substantially revised by 2005 (distributed networks, adult plasticity), revised again by 2015 (the primacy of connectivity and rhythm), and is being revised now by AI, single-cell sequencing, and dense electrode arrays. Any textbook you read is a snapshot.</p>
        <p>What follows is a short, honest map — the history that got us here, the tools that opened new territory, the questions still open, and the labs in India doing serious work.</p>
      </CardContent>
    </Card>

    <Tabs defaultValue="history" className="w-full">
      <TabsList className="v-tabs">
        <TabsTrigger value="history">History</TabsTrigger>
        <TabsTrigger value="methods">Methods</TabsTrigger>
        <TabsTrigger value="frontiers">Frontiers</TabsTrigger>
        <TabsTrigger value="india">India Labs</TabsTrigger>
      </TabsList>

      <TabsContent value="history" className="space-y-4">
        <Card><CardHeader><CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5" /> Cajal to Connectome — A Compressed Timeline</CardTitle></CardHeader>
        <CardContent className="text-foreground leading-relaxed space-y-3">
          <p><strong>1890s — Santiago Ramón y Cajal.</strong> Using Golgi's silver staining, Cajal drew the neuron doctrine into existence: the brain is made of discrete cells, not a continuous web. His hand-drawn plates are still among the most accurate depictions of neural morphology ever produced. Nobel, 1906.</p>
          <p><strong>1920s — Hans Berger</strong> records the first human EEG, opening the door to studying brain electrical activity non-invasively.</p>
          <p><strong>1949 — Donald Hebb</strong> proposes what becomes shorthand as "cells that fire together wire together" — the foundational principle of learning and plasticity, and, decades later, of the artificial neural networks powering modern AI.</p>
          <p><strong>1953 — Patient HM.</strong> A surgical resection of the hippocampus to treat epilepsy eliminates his ability to form new declarative memories while leaving procedural learning intact. Fifty years of memory research follow from this one case.</p>
          <p><strong>1970s–80s — fMRI and PET emerge</strong>, letting researchers watch living brains at work. The first fMRI human study lands in 1991. Whole subfields (social neuroscience, affective neuroscience) become possible.</p>
          <p><strong>1998 — Fred Gage's lab</strong> demonstrates that adult humans grow new neurons in the hippocampus. The dogma that "you're born with all the neurons you'll ever have" is retired.</p>
          <p><strong>2005 — Karl Deisseroth and colleagues</strong> demonstrate optogenetics — using light to switch specific neurons on and off in living animals. Causal, not just correlational, neuroscience becomes possible.</p>
          <p><strong>2010s — The BRAIN Initiative and Human Connectome Project</strong> systematically map neural circuits and connections at scales previously impossible. The concept of the brain as a network becomes central rather than peripheral.</p>
          <p><strong>2020s — Neuropixels probes, dense recording, single-cell transcriptomics, and large-scale machine-learning models of neural activity</strong> are producing the current wave of surprises. Brain-computer interfaces have moved from proof-of-concept to restoring communication in people with paralysis.</p>
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="methods" className="space-y-4">
        <Card><CardHeader><CardTitle className="flex items-center gap-2"><Cpu className="h-5 w-5" /> The Tools That Made Modern Neuroscience Possible</CardTitle></CardHeader>
        <CardContent className="text-foreground leading-relaxed space-y-3">
          <p><strong>Electrophysiology</strong> — single-unit recording, EEG, and now high-density Neuropixels probes that can record from hundreds of neurons at once. Gives millisecond temporal resolution; the price is invasiveness or spatial coverage.</p>
          <p><strong>fMRI (functional magnetic resonance imaging)</strong> — measures blood-oxygenation changes as a proxy for neural activity. Whole-brain coverage, non-invasive, but seconds of temporal resolution and no direct causal claims. Overhyped in the 2000s; now used with much more statistical rigor.</p>
          <p><strong>PET (positron emission tomography)</strong> — traces radioactive markers to study neurotransmitter systems and metabolism. Still essential for understanding dopamine, serotonin, and receptor distributions in living humans.</p>
          <p><strong>Optogenetics</strong> — inserts light-sensitive ion channels into specific neurons, then uses fibre optics to switch them on or off. Turned much of neuroscience from correlational to causal in a decade.</p>
          <p><strong>Chemogenetics (DREADDs)</strong> — similar goal, chemical trigger rather than light; slower but less invasive.</p>
          <p><strong>Brain organoids</strong> — three-dimensional clusters of neural tissue grown from stem cells. Now used to model neurodevelopmental disorders and, controversially, to ask whether such systems can support any kind of experience.</p>
          <p><strong>Machine learning models of neural data</strong> — decoding intended speech from motor cortex activity, predicting behaviour from population activity, generating hypotheses about function from connectivity patterns. This is where much of the current excitement lives.</p>
          <p><strong>Brain-computer interfaces (BCIs)</strong> — Neuralink is the loud example, but academic groups at Stanford, UCSF, BrainGate, and elsewhere have been steadily improving performance for over a decade. As of 2025, paralysed users can type at conversational speed by imagining handwriting.</p>
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="frontiers" className="space-y-4">
        <Card><CardHeader><CardTitle>Open Questions and Live Debates</CardTitle></CardHeader>
        <CardContent className="text-foreground leading-relaxed space-y-3">
          <p><strong>Consciousness</strong> — no theory currently commands consensus. Global Workspace Theory, Integrated Information Theory (Tononi), Higher-Order Theories, and Predictive Processing accounts each capture something; none is complete. Adversarial collaborations (structured experiments designed to distinguish competing theories) are producing real data for the first time.</p>
          <p><strong>Memory reconsolidation</strong> — the finding that recalled memories become briefly malleable is opening new therapeutic possibilities but also raising uncomfortable questions about what "the past" really is.</p>
          <p><strong>Psychedelics and neuroplasticity</strong> — psilocybin, MDMA, and ketamine are producing durable therapeutic effects in trials for treatment-resistant depression and PTSD. The mechanism appears to involve a temporary widening of the brain's plastic window. The regulatory landscape is shifting fast.</p>
          <p><strong>The gut-brain axis</strong> — the vagus nerve, enteric nervous system, and gut microbiome influence mood and cognition in ways that were dismissed a generation ago and now command whole conferences.</p>
          <p><strong>Neurodegeneration</strong> — the amyloid hypothesis for Alzheimer's is under serious pressure; alternative accounts involving inflammation, glymphatic clearance, vascular contributions, and microbial triggers are all being pursued.</p>
          <p><strong>AI and biological brains</strong> — the surprising success of transformer architectures is prompting a two-way conversation: what can artificial networks teach us about biological ones, and vice versa? The answer is still very much being worked out.</p>
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="india" className="space-y-4">
        <Card><CardHeader><CardTitle className="flex items-center gap-2"><MapPin className="h-5 w-5" /> Indian Neuroscience — Where the Work is Happening</CardTitle></CardHeader>
        <CardContent className="text-foreground leading-relaxed space-y-3">
          <p>Serious neuroscience in India happens across a small number of well-resourced institutions and a growing number of newer labs. If you are a student thinking about the field, here is the honest map.</p>
          <p><strong>NBRC (National Brain Research Centre, Manesar)</strong> — India's dedicated neuroscience institute, doing strong work in cognitive neuroscience, neuroimaging, and computational modelling.</p>
          <p><strong>NIMHANS (Bengaluru)</strong> — clinical neuroscience powerhouse, with major work in psychiatry, neurology, addiction medicine, and one of the country's few adult ADHD clinics.</p>
          <p><strong>NCBS (National Centre for Biological Sciences, Bengaluru)</strong> — molecular and cellular neuroscience of very high international standard; strong work on autism, memory, and neural circuits.</p>
          <p><strong>IISc (Bengaluru), IITs, IISERs</strong> — several labs with excellent work in computational neuroscience, brain-computer interfaces, and neuroengineering.</p>
          <p><strong>Sangath</strong> — global-standard research on scalable mental-health interventions, particularly for low-resource settings.</p>
          <p>Publishing is still concentrated in a handful of institutions, but the pipeline of Indian neuroscience graduates going into strong international labs is one of the most robust in the world. The community is small enough that most senior researchers reply to a well-written email; a determined student can find a mentor.</p>
        </CardContent></Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default NeuroscienceContent;
