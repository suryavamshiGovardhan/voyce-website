import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Heart, Users, Sprout, BookOpen } from 'lucide-react';

const ACESContent = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Shield className="h-6 w-6 text-primary" /> Adverse Childhood Experiences — The Full Picture
          </CardTitle>
        </CardHeader>
        <CardContent className="text-foreground leading-relaxed space-y-3">
          <p>The Adverse Childhood Experiences (ACE) study, published in 1998 by Felitti and Anda at Kaiser Permanente, is one of the most important pieces of public-health research of the last fifty years. It surveyed over 17,000 adults about ten specific categories of childhood adversity and correlated the count with adult health outcomes. The findings were startling: ACEs were common (roughly two-thirds of respondents had at least one), and they had a dose-response relationship with almost every negative adult outcome — depression, heart disease, alcoholism, suicide attempts, autoimmune disease, even reduced lifespan.</p>
          <p>The point of teaching this material is not to make anyone feel doomed. It is the opposite. Toxic stress in childhood shapes the developing brain and immune system, but that shaping is not destiny. Understanding what happened, and why the body responds the way it does now, is the first step in undoing what can be undone.</p>
        </CardContent>
      </Card>

      <Tabs defaultValue="categories" className="w-full">
        <TabsList className="v-tabs">
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="biology">Biology</TabsTrigger>
          <TabsTrigger value="resilience">Resilience</TabsTrigger>
          <TabsTrigger value="india">India Context</TabsTrigger>
          <TabsTrigger value="healing">Healing Paths</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-4">
          <Card><CardHeader><CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> The Ten Original ACEs</CardTitle></CardHeader>
          <CardContent className="text-foreground leading-relaxed space-y-3">
            <p>The original ACE questionnaire covered ten categories, grouped into three families. These are not the only forms of childhood adversity — the research world now widely acknowledges expanded ACEs that include community violence, discrimination, poverty, and forced migration — but the original ten remain the most-studied.</p>
            <p><strong>Abuse (three items):</strong> physical abuse, emotional abuse, sexual abuse.</p>
            <p><strong>Neglect (two items):</strong> physical neglect (basic needs not met), emotional neglect (feelings dismissed, no one to turn to).</p>
            <p><strong>Household dysfunction (five items):</strong> a parent with mental illness, a parent with substance dependence, a parent incarcerated, witnessing violence toward a caregiver, parental separation or divorce.</p>
            <p>An ACE score is simply a count from 0 to 10. Four or more is considered high risk; researchers found that adults with four or more ACEs had roughly double the risk of heart disease, four times the risk of depression, and twelve times the risk of a suicide attempt compared to those with none. The specific ACEs matter less than the cumulative load — the developing nervous system does not distinguish neatly between kinds of stress; it registers total dose.</p>
            <p>An important nuance: the presence of an ACE does not mean a broken life, and its absence does not guarantee a well one. What the score reliably predicts is the <em>weight the nervous system carries into adulthood</em> — not what that person will do with it.</p>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="biology" className="space-y-4">
          <Card><CardHeader><CardTitle className="flex items-center gap-2"><Heart className="h-5 w-5" /> How Toxic Stress Rewires the Body</CardTitle></CardHeader>
          <CardContent className="text-foreground leading-relaxed space-y-3">
            <p>Stress in itself is not harmful. The body has an elegant emergency system — the HPA axis — that mobilises cortisol and adrenaline, resolves the threat, and then returns to baseline. Bruce McEwen coined the term <em>allostatic load</em> for the wear and tear that accumulates when this system is activated too often or does not recover.</p>
            <p>In childhood, when stress is chronic and there is no protective adult to buffer it, three things happen. First, the HPA axis becomes dysregulated — either hyper-reactive (small stressors produce large responses) or blunted (the system stops responding at all, correlated with dissociation and later depression). Second, the developing brain reprioritises resources toward survival circuits (amygdala, brainstem) and away from the prefrontal cortex that would normally regulate them. Third, chronic cortisol exposure and inflammation begin quiet damage — to the hippocampus, to the immune system, to insulin regulation, to cardiovascular tissue.</p>
            <p>This is why the ACE-to-adult-disease connection is not a metaphor. It is the same body, following the same rules, playing out a stress response that was appropriate in a childhood environment and is now embedded in physiology. Cardiologists and endocrinologists increasingly ask about childhood — because it changes what they are treating.</p>
            <p>The critical distinction: <em>tolerable stress</em> (buffered by a safe adult) builds resilience. <em>Toxic stress</em> (chronic, unbuffered) does the damage. The presence or absence of one steady, attuned adult in a child's life is the single largest modifier of ACE outcomes in the entire literature.</p>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="resilience" className="space-y-4">
          <Card><CardHeader><CardTitle className="flex items-center gap-2"><Sprout className="h-5 w-5" /> Protective Factors and Post-Traumatic Growth</CardTitle></CardHeader>
          <CardContent className="text-foreground leading-relaxed space-y-3">
            <p>The ACE literature is often taught as a story of damage. It is also, quietly, a story of what protects. Researchers have identified a parallel set of protective childhood experiences (PCEs) with measurable, dose-dependent buffering effects: feeling able to talk to family about feelings, feeling family stood by during hard times, enjoying participation in community traditions, feeling a sense of belonging in school, feeling supported by non-parent adults, having friends to rely on, having at least one adult believe in you.</p>
            <p>Adults with high ACE scores who also had high PCE scores showed markedly lower rates of adult depression than would be predicted by ACE score alone. This is not mysticism. Every one of those experiences is a nervous system learning that other humans can be safe — laying down the templates that make later co-regulation possible.</p>
            <p>Post-traumatic growth (Tedeschi &amp; Calhoun) is a related and well-replicated phenomenon: a substantial minority of trauma survivors report positive changes across five domains — new priorities, deeper relationships, increased personal strength, spiritual development, and appreciation for life. Growth does not erase pain; it grows alongside it. Understanding this prevents the false binary that says a person is either "healed" or "still traumatised."</p>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="india" className="space-y-4">
          <Card><CardHeader><CardTitle className="flex items-center gap-2"><Users className="h-5 w-5" /> ACEs in the Indian Context</CardTitle></CardHeader>
          <CardContent className="text-foreground leading-relaxed space-y-3">
            <p>Most ACE research has been conducted in Western populations. The picture in India has some overlap and some important local specificity that the standard ten-item questionnaire misses.</p>
            <p><strong>Corporal punishment</strong> is common enough in Indian childhoods — homes, schools, tuition centres — to be normalised, which is precisely why it often goes unnamed as abuse. Normalisation does not neutralise the biological effect.</p>
            <p><strong>Academic pressure</strong> functioning as chronic toxic stress is under-recognised. The developing nervous system does not distinguish between a threat to physical safety and a sustained, inescapable threat to worth. High-stakes examination culture, comparison within extended family, and the load carried by first-generation aspirational students all show up in adult presentations that Western instruments would not code as ACE-related.</p>
            <p><strong>Caste, communal violence, and displacement</strong> are structural ACEs the original questionnaire does not capture. Community-level trauma transmits intergenerationally through parenting patterns, silence, and inherited vigilance.</p>
            <p><strong>Joint family dynamics</strong> can be strongly protective (multiple attuned adults) or strongly harmful (nowhere to escape a dysregulated relative). The structure itself is neutral; the relational quality inside it is everything.</p>
            <p><strong>Gender-specific ACEs</strong> — witnessing violence toward mothers, differential treatment of daughters, early marriage, restrictions on movement — remain widespread and are only slowly entering local mental-health frameworks.</p>
            <p>A culturally honest ACE screen for India would extend the original ten to include at least academic-pressure toxicity, caste-based experiences, community violence, and gendered restrictions. The healing paths are the same; the naming has to be local.</p>
          </CardContent></Card>
        </TabsContent>

        <TabsContent value="healing" className="space-y-4">
          <Card><CardHeader><CardTitle>What Actually Helps Adults with High ACE Scores</CardTitle></CardHeader>
          <CardContent className="text-foreground leading-relaxed space-y-3">
            <p>The evidence base for healing childhood trauma has strengthened enormously in the last twenty years. No single modality is a universal answer; different people meet themselves through different doors.</p>
            <p><strong>Trauma-informed therapy</strong> — EMDR, Internal Family Systems (IFS), Somatic Experiencing, Sensorimotor Psychotherapy, and trauma-focused CBT all have solid evidence for ACE-related presentations. What matters most is a clinician who understands the body-based nature of trauma; talk therapy alone often plateaus.</p>
            <p><strong>Body-based practices</strong> — yoga (Bessel van der Kolk's team demonstrated measurable PTSD reduction), tai chi, breathwork, safe touch through massage or physiotherapy. The nervous system that learned dysregulation in a body has to relearn regulation through the body.</p>
            <p><strong>Safe relationships</strong> as therapy — chronic loneliness is a maintaining factor; earned secure attachment, whether through therapy, partnership, or long-term friendship, is a genuinely curative force.</p>
            <p><strong>Practical scaffolding</strong> — sleep, nutrition, movement, reduced alcohol, and treatment of any comorbid ADHD, thyroid, or sleep-disordered breathing. Adults with high ACE scores often have measurable physical health issues that need addressing in parallel with psychological work.</p>
            <p>Read Bessel van der Kolk's <em>The Body Keeps the Score</em>, Gabor Maté's <em>The Myth of Normal</em>, and Nakazawa's <em>Childhood Disrupted</em> if you want to go deeper. In India, iCall (9152987821) offers free counsellor support; Sangath, NIMHANS, and Vandrevala (1860-2662-345) all take trauma work seriously.</p>
            <p className="text-xs italic text-muted-foreground mt-3">VOYCE is educational. Trauma work benefits from a qualified professional; please seek one if this material stirs anything you cannot hold alone.</p>
          </CardContent></Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ACESContent;
