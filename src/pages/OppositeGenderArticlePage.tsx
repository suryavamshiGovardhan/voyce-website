import { NextStep } from "@/components/site/value";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ArticleSchema } from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/opposite-gender-hero.jpg';

export default function OppositeGenderArticlePage() {
  return (
    <>
      <SEOHead
        title="Why We Behave Abnormally Around the Opposite Gender"
        description="A human systems explanation of why intelligence disappears near attraction. Biology, psychology, culture — decoded the KATA way."
        keywords="attraction psychology, opposite gender behavior, social anxiety, amygdala, self-focused attention, VOYCE-X"
        ogType="article"
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/article/opposite-gender-behavior"
      />
      <ArticleSchema
        title="Why We Behave So Abnormally Around the Opposite Gender"
        description="A human systems explanation of why intelligence disappears near attraction. Biology, psychology, culture — decoded the KATA way."
        author="Suryavamshi Govardhan"
        datePublished="2025-02-21"
        image={heroImage}
        url="https://suryavamshigovardhan.github.io/voyce-website/article/opposite-gender-behavior"
      />
      <div className="v-legacy min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <article className="prose prose-lg max-w-none dark:prose-invert">
              <img src={heroImage} alt="Two figures facing each other with visible tension, symbolizing attraction psychology" className="w-full rounded-xl mb-8 shadow-lg" loading="eager" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                Why We Behave So Abnormally Around the Opposite Gender
              </h1>
              <p className="text-muted-foreground italic mb-8">
                A human systems explanation, not a love story
              </p>

              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Why does intelligence disappear near attraction?</h2>
                <p className="text-foreground/90 leading-relaxed">
                  A strange thing happens to humans.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  A person can be confident, logical, articulate, funny.
                  Put them in front of someone from the opposite gender they are attracted to — and suddenly:
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li>words collapse</li>
                  <li>hands don{`'`}t know what to do</li>
                  <li>the brain feels like it{`'`}s buffering</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  This is not rare. This is not weakness. This is not {`"`}lack of confidence.{`"`}
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  This is human biology + psychology + culture colliding at once.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  And unless we understand <strong>why</strong> it happens, we keep blaming ourselves for something that was never a personal failure.
                </p>
              </section>

              {/* PART 1 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 1: The Brain Does Not Read Attraction as Romance — It Reads It as Risk</h2>
                <p className="text-foreground/90 leading-relaxed">Here{`'`}s a simple truth most people never hear:</p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  The human brain processes attraction before it processes love.
                </blockquote>
                <p className="text-foreground/90 leading-relaxed">
                  Attraction comes first. Love may or may not come later.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Attraction triggers the same systems as <strong>threat detection</strong>. Why? Because attraction creates stakes.
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-2">
                  <li><strong>When you are alone:</strong> Nothing is at risk.</li>
                  <li><strong>When you talk to a shopkeeper:</strong> Only money is at risk.</li>
                  <li><strong>When you talk to someone you{`'`}re attracted to:</strong> Self-worth is at risk. Identity is at risk. Rejection is possible.</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  The brain hates uncertainty. So it activates: increased heart rate, heightened awareness, self-monitoring, fear of mistakes.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  This is controlled by the <strong>amygdala</strong>, the same part of the brain that activates during fear and danger.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  So when your body reacts strongly near someone you like, it is not saying:
                </p>
                <blockquote className="border-l-4 border-destructive pl-4 italic text-muted-foreground my-4">
                  {`"`}I am weak.{`"`}
                </blockquote>
                <p className="text-foreground/90 leading-relaxed">It is saying:</p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  {`"`}Something important is happening. Be careful.{`"`}
                </blockquote>
              </section>

              {/* PART 2 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 2: Why Smart People Act the Dumbest</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Around the opposite gender, many people don{`'`}t become stupid. They start <strong>performing</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Performance mode is deadly for natural intelligence.
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li>Intelligence works best when attention is <strong>external</strong></li>
                  <li>Anxiety increases when attention turns <strong>internal</strong></li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  Near attraction, attention goes inward: {`"`}How am I looking?{`"`} {`"`}Did that sound stupid?{`"`} {`"`}What if they judge me?{`"`}
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Now the brain is doing two jobs at once: (1) managing the conversation and (2) managing self-image. Result: <strong>overload</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  That{`'`}s why jokes fall flat, simple sentences break, and confidence feels artificial.
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  You are not awkward. You are over-observing yourself.
                </p>
              </section>

              {/* PART 3 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 3: Culture Made This Worse (Especially for Us)</h2>
                <p className="text-foreground/90 leading-relaxed">
                  In many societies, especially ours:
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li>Interaction between genders is restricted early</li>
                  <li>Curiosity is framed as {`"`}wrong{`"`}</li>
                  <li>Expression is framed as {`"`}shameful{`"`}</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  So the brain learns one thing early:
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  {`"`}Opposite gender = danger zone.{`"`}
                </blockquote>
                <p className="text-foreground/90 leading-relaxed">
                  Then suddenly, adulthood arrives. Now interaction is expected — but the brain has no practice.
                  No exposure. No normalisation. Only pressure.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  In cultures where mixed interaction is normal from childhood, this abnormal behavior is far less intense.
                  Not because people are better. Because their brains are <strong>trained earlier</strong>.
                </p>
              </section>

              {/* PART 4 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 4: Desire + Ego = Internal Chaos</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Here is the most uncomfortable truth:
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Most abnormal behavior near the opposite gender is not about attraction. It is about <strong>validation hunger</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  We don{`'`}t just want the person. We want what the person{`'`}s approval means.
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li>{`"`}I am worthy{`"`}</li>
                  <li>{`"`}I am chosen{`"`}</li>
                  <li>{`"`}I am enough{`"`}</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  Now your identity is on trial. That{`'`}s why some people overtalk, some people show off, some people freeze completely.
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  Different reactions. Same root cause. Once ego enters attraction, authenticity leaves.
                </p>
              </section>

              {/* PART 5 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 5: A Personal Truth (Softly, Honestly)</h2>
                <p className="text-foreground/90 leading-relaxed">
                  There was a time in my life when interaction didn{`'`}t feel like conversation.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  It felt like examination.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Not because the other person was judging — but because <strong>I was</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Loss, silence, authority fear, emotional gaps — they don{`'`}t disappear in social situations.
                  They surface more strongly where validation feels important.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  This is true for many people, whether they admit it or not.
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  Attraction becomes a mirror. And mirrors can be uncomfortable.
                </p>
              </section>

              {/* PART 6 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 6: The Solution Is Not {`"`}Confidence{`"`}</h2>
                <p className="text-foreground/90 leading-relaxed">
                  This is important. Confidence advice is lazy advice.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  The solution is <strong>de-romanticisation</strong>.
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li>See the human before the gender</li>
                  <li>See the mind before the image</li>
                  <li>See interaction, not outcome</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  The moment you stop treating interaction as a judgment of your worth, the nervous system calms.
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  Connection begins where performance ends.
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-10 rounded-lg border border-primary/20 bg-primary/5 p-6">
                <h2 className="text-2xl font-semibold text-foreground">Conclusion: Abnormal Behavior Is Not a Flaw — It Is an Untrained System</h2>
                <p className="text-foreground/90 leading-relaxed">You are not broken.</p>
                <p className="text-foreground/90 leading-relaxed">
                  You were just never taught how to stay present when something matters emotionally.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Once you see this, self-hate disappears. Understanding replaces shame.
                </p>
                <p className="text-foreground/90 leading-relaxed font-semibold">
                  And that changes everything.
                </p>
              </section>

              {/* References */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">References & Citations</h2>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-2">
                  <li>LeDoux, J. (1996). <em>The Emotional Brain: The Mysterious Underpinnings of Emotional Life</em>. Simon & Schuster.</li>
                  <li>Sapolsky, R. (2017). <em>Behave: The Biology of Humans at Our Best and Worst</em>. Penguin Press.</li>
                  <li>Baumeister, R. F., & Leary, M. R. (1995). The Need to Belong: Desire for Interpersonal Attachments as a Fundamental Human Motivation. <em>Psychological Bulletin</em>, 117(3), 497–529.</li>
                  <li>Damasio, A. (1994). <em>Descartes{`'`} Error: Emotion, Reason, and the Human Brain</em>. Putnam.</li>
                  <li>Clark, D. M., & Wells, A. (1995). A Cognitive Model of Social Phobia. In R. G. Heimberg et al. (Eds.), <em>Social Phobia: Diagnosis, Assessment, and Treatment</em>. Guilford Press.</li>
                </ol>
              </section>
            </article>
          </div>
        </main>
      <NextStep
        title="Let what you read settle for a minute."
        body="A short private check-in helps you notice how it landed."
        primary={{ to: "/start-here", label: "Start a private check-in" }}
        secondary={{ to: "/blog", label: "More slow reads" }}
      />
        <Footer />
      </div>
    </>
  );
}
