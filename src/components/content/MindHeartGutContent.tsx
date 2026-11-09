import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Brain, Sprout, Wind } from 'lucide-react';

const MindHeartGutContent = () => (
  <div className="space-y-8">
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Heart className="h-6 w-6 text-primary" /> One Nervous System, Three Centres of Intelligence
        </CardTitle>
      </CardHeader>
      <CardContent className="text-foreground leading-relaxed space-y-3">
        <p>For most of Western medical history the brain was treated as the seat of thought and the rest of the body as machinery it drove. That model has been quietly dismantled over the last three decades. The heart has its own dense neural network. The gut has more neurons than the spinal cord and manufactures most of the body's serotonin. All three centres talk to each other constantly, largely via the vagus nerve, and mental health emerges from the conversation.</p>
        <p>This is not a mystical claim. It is a straightforward reading of the anatomy and physiology, and it changes what "self-care" actually means.</p>
      </CardContent>
    </Card>

    <Tabs defaultValue="vagus" className="w-full">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 bg-card">
        <TabsTrigger value="vagus">Vagus Nerve</TabsTrigger>
        <TabsTrigger value="gut">Gut-Brain</TabsTrigger>
        <TabsTrigger value="heart">Heart-Brain</TabsTrigger>
        <TabsTrigger value="practices">Practices</TabsTrigger>
      </TabsList>

      <TabsContent value="vagus" className="space-y-4">
        <Card><CardHeader><CardTitle className="flex items-center gap-2"><Wind className="h-5 w-5" /> The Vagus Nerve — The Body's Superhighway</CardTitle></CardHeader>
        <CardContent className="text-foreground leading-relaxed space-y-3">
          <p>The vagus (Latin for "wandering") is the tenth cranial nerve. It leaves the brainstem, threads through the neck, and branches out to the heart, lungs, and every major organ in the abdomen. Around 80% of its fibres are afferent — carrying information from the body up to the brain, not the other way around. The brain listens to the body far more than it speaks to it.</p>
          <p>The vagus is the principal channel of the parasympathetic nervous system — the "rest, digest, connect" branch. When vagal tone is high, heart rate variability is high, digestion works, inflammation stays low, and the social-engagement system (facial expression, prosody, eye contact) is online. When vagal tone is low, the body is stuck in mobilised sympathetic activation or, at the extreme, dorsal-vagal shutdown (freeze, collapse, dissociation).</p>
          <p>Stephen Porges's Polyvagal Theory reframed all of this in the late 1990s. The clinical and lay language of "regulated" and "dysregulated" nervous systems comes largely from his work. Not every specific claim has held up under scrutiny, but the core insight — that the autonomic nervous system has more than one gear and that social safety literally re-tunes it — has been broadly influential and clinically useful.</p>
          <p>Vagal tone is trainable. The evidence is strongest for slow breathing, cold exposure, singing and humming, gargling, gentle aerobic exercise, and sustained safe social contact.</p>
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="gut" className="space-y-4">
        <Card><CardHeader><CardTitle className="flex items-center gap-2"><Sprout className="h-5 w-5" /> The Second Brain in the Belly</CardTitle></CardHeader>
        <CardContent className="text-foreground leading-relaxed space-y-3">
          <p>The enteric nervous system lines the digestive tract with roughly 500 million neurons — more than the entire spinal cord. It can operate independently of the brain; a gut isolated from the central nervous system still coordinates peristalsis. Michael Gershon named it "the second brain" in his 1998 book of the same title, and the label has stuck because it is anatomically accurate.</p>
          <p>Two facts that change how one thinks about mood:</p>
          <p>First, around 90% of the body's serotonin is manufactured in the gut, not the brain. Gut serotonin does not cross the blood-brain barrier, but the systems that regulate it and the systems that regulate mood share machinery and communicate constantly via the vagus.</p>
          <p>Second, the gut microbiome — the trillions of bacteria, fungi, and viruses that live in the digestive tract — produces neurotransmitters and short-chain fatty acids that influence brain function measurably. Faecal transplant experiments in mice reliably transfer temperament-like traits; the same experiments in humans are ongoing and early findings suggest real effects on depression and anxiety.</p>
          <p>Chronic stress permeabilises the gut lining ("leaky gut"), which allows inflammatory molecules into circulation, which crosses (indirectly) into the brain and amplifies depressive and anxious presentations. The loop runs in both directions: gut inflammation worsens mood; poor mood worsens gut function. This is why treating depression with fibre, fermented foods, and reduced ultra-processed intake is no longer fringe advice — the SMILES trial (2017) demonstrated meaningful depression improvements from a Mediterranean-style dietary intervention.</p>
          <p>None of this replaces psychotherapy or medication where indicated. It sits alongside them.</p>
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="heart" className="space-y-4">
        <Card><CardHeader><CardTitle className="flex items-center gap-2"><Heart className="h-5 w-5" /> The Heart's Own Little Brain</CardTitle></CardHeader>
        <CardContent className="text-foreground leading-relaxed space-y-3">
          <p>The heart contains roughly 40,000 neurons — an "intrinsic cardiac nervous system" that processes information locally and communicates continuously with the brain. Signals from the heart influence emotional processing, attention, and perception; this is not metaphor, it is measured.</p>
          <p>The clinically important variable is <strong>heart rate variability (HRV)</strong> — the beat-to-beat variation in interval. High HRV signals a nervous system with flexibility, capable of shifting between activation and rest as needed. Low HRV correlates with anxiety, depression, chronic stress, cardiovascular disease, and all-cause mortality. It is one of the most-studied biomarkers of nervous-system health available today.</p>
          <p>HRV is trainable. Slow breathing at roughly six breaths per minute (a five-second inhale, a five-second exhale) synchronises heart rhythm with breath and reliably raises HRV within a single session. Sustained practice raises resting HRV over weeks.</p>
          <p>The HeartMath Institute has spent thirty years mapping the specific state of "cardiac coherence" — a smooth, sine-wave-like HRV pattern that emerges reliably with slow paced breathing combined with sustained positive emotion (gratitude, appreciation, warmth). Not every HeartMath claim has been independently replicated, but the core protocol is safe, cheap, and produces measurable physiological shifts, which is more than can be said for most stress interventions.</p>
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="practices" className="space-y-4">
        <Card><CardHeader><CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5" /> Practices That Actually Tune the System</CardTitle></CardHeader>
        <CardContent className="text-foreground leading-relaxed space-y-3">
          <p><strong>Slow paced breathing (5-6 breaths per minute).</strong> Roughly five seconds in, five seconds out, through the nose if possible. Ten minutes daily produces measurable HRV improvements within two weeks. Free apps (Breathwrk, Awesome Breathing) or simply a Time Timer are enough.</p>
          <p><strong>Physiological sigh.</strong> Two short inhales through the nose followed by a long exhale through the mouth. Andrew Huberman's lab has popularised this; a 2023 controlled study found it reduced stress more effectively than mindfulness meditation over four weeks. Useful in moments of acute activation.</p>
          <p><strong>Cold exposure.</strong> A 30-second cold face splash, or the end of a shower turned cold, activates the diving reflex and vagus nerve. Regular cold exposure raises baseline vagal tone.</p>
          <p><strong>Humming, chanting, and singing.</strong> Long-standing traditional practices that turn out to have specific physiology: they extend exhalation, vibrate the vocal cords near the vagus, and produce measurable HRV shifts. The Sanskrit "so-hum" and the humming bee breath (bhramari) both fall in this category.</p>
          <p><strong>Fermented and fibre-rich foods.</strong> Curd, kanji, kombucha, kimchi, pickles (fermented, not vinegar-quick), plus abundant vegetables and pulses. This is the diet most of India ate a generation ago and increasingly does not.</p>
          <p><strong>Adequate sleep and morning light.</strong> Circadian regulation drives autonomic regulation; the two systems are functionally inseparable.</p>
          <p><strong>Safe social contact.</strong> The single most powerful, most under-prescribed vagal intervention available. Fifteen minutes of face-to-face conversation with a trusted person does more for the nervous system than an hour of solitary breathwork.</p>
          <p className="text-xs italic text-muted-foreground mt-3">None of this substitutes for medical or psychiatric care where needed. It is scaffolding, not replacement.</p>
        </CardContent></Card>
      </TabsContent>
    </Tabs>
  </div>
);

export default MindHeartGutContent;
