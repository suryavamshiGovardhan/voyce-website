import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ArticleSchema } from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/overthinking-night-hero.jpg';

export default function OverthinkingAtNightPage() {
  return (
    <>
      <SEOHead
        title="Why Humans Overthink More at Night | VOYCE"
        description="A KATA-style explanation of why your brain spirals at night. Brain fatigue, cortisol, dopamine, and the silence that reveals everything."
        keywords="overthinking at night, night anxiety, cortisol cycle, brain fatigue, VOYCE-X, KATA essay"
        ogType="article"
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/article/overthinking-at-night"
      />
      <ArticleSchema
        title="Why Humans Overthink More at Night"
        description="A KATA-style explanation of why your brain spirals at night. Brain fatigue, cortisol, dopamine, and the silence that reveals everything."
        author="Suryavamshi Govardhan"
        datePublished="2025-02-21"
        image={heroImage}
        url="https://suryavamshigovardhan.github.io/voyce-website/article/overthinking-at-night"
      />
      <div className="min-h-screen bg-background">
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
              <img src={heroImage} alt="Person silhouetted against moonlight at a window, symbolizing overthinking at night" className="w-full rounded-xl mb-8 shadow-lg" loading="eager" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                Why Humans Overthink More at Night
              </h1>
              <p className="text-muted-foreground italic mb-8">
                A systems explanation of why your brain spirals after sunset
              </p>

              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Why do thoughts get louder when the world gets quieter?</h2>
                <p className="text-foreground/90 leading-relaxed">
                  You had a normal day. Nothing terrible happened.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  But the moment you lie down at night, something shifts.
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li>Old memories return uninvited</li>
                  <li>Small worries become enormous</li>
                  <li>The brain replays conversations from weeks ago</li>
                  <li>You question decisions you were fine with during the day</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  This is not madness. This is not depression (not always).
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  This is your brain doing exactly what it was designed to do — at the worst possible time.
                </p>
              </section>

              {/* PART 1 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 1: The Brain Has a Day Mode and a Night Mode</h2>
                <p className="text-foreground/90 leading-relaxed">
                  During the day, your brain is in <strong>task mode</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  It processes actions: walk here, eat this, reply to that message, finish that work.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  At night, when tasks stop, the brain switches to <strong>processing mode</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Processing mode is when the brain sorts through everything it collected during the day — emotions, impressions, unresolved problems.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  The brain does not stop working when you stop working. It simply changes what it works on.
                </blockquote>
                <p className="text-foreground/90 leading-relaxed">
                  This is controlled by the <strong>Default Mode Network (DMN)</strong> — the part of the brain that activates when you are not focused on the outside world.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  The DMN is responsible for self-reflection, memory consolidation, and future planning. At night, it runs at full power.
                </p>
              </section>

              {/* PART 2 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 2: Cortisol Drops, and the Guard Goes Down</h2>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Cortisol</strong> is your stress hormone. But it also serves as your emotional shield.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  During the day, cortisol is high. It keeps you alert, focused, and emotionally regulated.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  At night, cortisol drops to its lowest level — preparing your body for sleep.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  But here is the problem:
                </p>
                <blockquote className="border-l-4 border-destructive pl-4 italic text-muted-foreground my-4">
                  When cortisol drops, emotional suppression weakens. Feelings you managed to push aside all day now surface freely.
                </blockquote>
                <p className="text-foreground/90 leading-relaxed">
                  That sadness you ignored at lunch? It arrives at midnight.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  That anxiety you distracted yourself from? It knocks at 2 AM.
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  You are not weaker at night. Your defenses are simply lower.
                </p>
              </section>

              {/* PART 3 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 3: The Dopamine Tank Is Empty</h2>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>Dopamine</strong> is the chemical that makes things feel interesting, rewarding, and worth doing.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Throughout the day, you use dopamine constantly — every notification, every meal, every small achievement releases a tiny amount.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  By night, the tank is running low.
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li>Nothing feels exciting anymore</li>
                  <li>The future feels unclear</li>
                  <li>Motivation disappears</li>
                  <li>Everything feels slightly pointless</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  This is not existential crisis. This is <strong>neurochemical depletion</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  The same thought that feels manageable at 10 AM feels catastrophic at 10 PM — not because it changed, but because <strong>your brain chemistry changed</strong>.
                </p>
              </section>

              {/* PART 4 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 4: Silence Is the Amplifier</h2>
                <p className="text-foreground/90 leading-relaxed">
                  During the day, the world is noisy. People talk. Screens flash. Work demands attention.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  At night, the noise stops. And when external noise stops, <strong>internal noise gets louder</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  This is why many people cannot fall asleep without a podcast, music, or a video playing.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  They are not addicted to content. They are <strong>afraid of silence</strong> — because silence brings thoughts they have been avoiding all day.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  Silence does not create overthinking. It reveals the overthinking that was already there, hidden under noise.
                </blockquote>
              </section>

              {/* PART 5 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 5: The Brain Replays to Protect</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Ever wonder why the brain replays embarrassing moments at night?
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  It is not trying to torture you. It is trying to <strong>learn</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  The brain treats social mistakes like survival threats. When it replays them, it is running simulations:
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li>{`"`}What could I have said differently?{`"`}</li>
                  <li>{`"`}How can I avoid this in the future?{`"`}</li>
                  <li>{`"`}Was I in danger of being rejected?{`"`}</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  This is an ancient survival mechanism. In early human groups, social rejection meant death — isolation from the tribe.
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  Your brain replays because it cares about your survival. It just does not know the difference between a tribal exile and a slightly awkward text message.
                </p>
              </section>

              {/* PART 6 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 6: A Quiet Reflection</h2>
                <p className="text-foreground/90 leading-relaxed italic">
                  There have been nights where the ceiling became a screen — and every mistake, every loss, every unsaid word played on repeat.
                </p>
                <p className="text-foreground/90 leading-relaxed italic">
                  Not because I wanted to think about them. But because the world finally went quiet enough for them to be heard.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Many people carry an entire day of unprocessed emotion into the night. Then blame themselves for not being able to sleep.
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  The problem is not that you think too much at night. The problem is that you feel too little during the day.
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-10 rounded-lg border border-primary/20 bg-primary/5 p-6">
                <h2 className="text-2xl font-semibold text-foreground">Conclusion: Night Thinking Is Not a Disorder — It Is Delayed Processing</h2>
                <p className="text-foreground/90 leading-relaxed">You are not broken.</p>
                <p className="text-foreground/90 leading-relaxed">
                  Your brain is simply doing at night what you did not allow it to do during the day.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  The solution is not to fight the thoughts. It is to <strong>process emotions earlier</strong> — through journaling, reflection, or simply sitting with silence before it forces itself upon you.
                </p>
                <p className="text-foreground/90 leading-relaxed font-semibold">
                  Those who learn to sit with silence during the day are rarely haunted by it at night.
                </p>
              </section>

              {/* References */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">References & Citations</h2>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-2">
                  <li>Raichle, M. E. (2015). The Brain{`'`}s Default Mode Network. <em>Annual Review of Neuroscience</em>, 38, 433–447.</li>
                  <li>Walker, M. (2017). <em>Why We Sleep: Unlocking the Power of Sleep and Dreams</em>. Scribner.</li>
                  <li>Nolen-Hoeksema, S. (1991). Responses to Depression and Their Effects on the Duration of Depressive Episodes. <em>Journal of Abnormal Psychology</em>, 100(4), 569–582.</li>
                  <li>Sapolsky, R. (2004). <em>Why Zebras Don{`'`}t Get Ulcers</em>. Holt Paperbacks.</li>
                  <li>Ehlers, A., & Clark, D. M. (2000). A Cognitive Model of Posttraumatic Stress Disorder. <em>Behaviour Research and Therapy</em>, 38(4), 319–345.</li>
                  <li>Goldstein, A. N., & Walker, M. P. (2014). The Role of Sleep in Emotional Brain Function. <em>Annual Review of Clinical Psychology</em>, 10, 679–708.</li>
                  <li>Buckner, R. L., Andrews-Hanna, J. R., & Schacter, D. L. (2008). The Brain{`'`}s Default Network. <em>Annals of the New York Academy of Sciences</em>, 1124(1), 1–38.</li>
                </ol>
              </section>

              {/* Author Credit */}
              <section className="mb-10 text-center border-t border-border pt-6">
                <p className="text-muted-foreground text-sm">Written by</p>
                <p className="text-foreground font-semibold text-lg">Suryavamshi Govardhan</p>
                <p className="text-muted-foreground text-sm">Founder – VOYCE (Mental Health & Human Awareness Initiative)</p>
              </section>
            </article>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
