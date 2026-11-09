import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ArticleSchema } from '@/components/StructuredData';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/search-meaning-hero.jpg';

export default function SearchForMeaningPage() {
  return (
    <>
      <SEOHead
        title="Why Humans Search for Meaning | VOYCE"
        description="A KATA-style essay on why humans need meaning even when life is simple. Existential curiosity, pattern-seeking, and consciousness."
        keywords="search for meaning, existential psychology, purpose of life, human consciousness, VOYCE-X, KATA essay"
        ogType="article"
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/article/search-for-meaning"
      />
      <ArticleSchema
        title="Why Humans Search for Meaning Even When Life Is Simple"
        description="A KATA-style essay on why humans need meaning even when life is simple. Existential curiosity, pattern-seeking, and consciousness."
        author="Suryavamshi Govardhan"
        datePublished="2025-02-21"
        image={heroImage}
        url="https://suryavamshigovardhan.github.io/voyce-website/article/search-for-meaning"
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
              <img src={heroImage} alt="Person standing alone under a vast starry sky, symbolizing the search for meaning" className="w-full rounded-xl mb-8 shadow-lg" loading="eager" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2">
                Why Humans Search for Meaning Even When Life Is Simple
              </h1>
              <p className="text-muted-foreground italic mb-8">
                A systems explanation of the most human question
              </p>

              {/* Introduction */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Why is comfort never enough?</h2>
                <p className="text-foreground/90 leading-relaxed">
                  You have food. You have shelter. You have safety.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  And yet, something inside asks: {`"`}But what is all this for?{`"`}
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Animals do not ask this question. A cat with food and warmth is content.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  But humans — even with everything they need — feel an ache. A pull. A quiet restlessness that whispers:
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  {`"`}There must be more than this.{`"`}
                </blockquote>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  This is not greed. This is not dissatisfaction. This is the most fundamental feature of human consciousness.
                </p>
              </section>

              {/* PART 1 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 1: The Brain Is a Pattern-Seeking Machine</h2>
                <p className="text-foreground/90 leading-relaxed">
                  The human brain evolved to find patterns.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Pattern recognition kept us alive: recognizing seasons, predicting danger, reading faces.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  But the brain does not stop at physical patterns. It searches for <strong>meaning patterns</strong> too.
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-1">
                  <li>Why did this happen to me?</li>
                  <li>What is the purpose of suffering?</li>
                  <li>What happens after death?</li>
                  <li>Why does anything exist at all?</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  These questions have no final answers. But the brain keeps asking — because <strong>it was built to search</strong>, not to arrive.
                </p>
              </section>

              {/* PART 2 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 2: Survival Is Not Enough for Humans</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Every other species on Earth exists to survive and reproduce. That is their entire program.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Humans are the only species that can survive perfectly — and still feel empty.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Viktor Frankl, a psychiatrist who survived the Holocaust, observed:
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  {`"`}Those who have a {`'`}why{`'`} to live can bear almost any {`'`}how.{`'`}{`"`}
                </blockquote>
                <p className="text-foreground/90 leading-relaxed">
                  People in the concentration camps who had a sense of purpose — a reason to survive — endured longer than those who had only physical strength.
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  Meaning is not a luxury. For humans, it is a survival need.
                </p>
              </section>

              {/* PART 3 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 3: The Comfort Trap</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Here is a paradox that confuses many people:
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  <strong>The more comfortable life becomes, the more the question of meaning intensifies.</strong>
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  When you are struggling to eat, you do not ask {`"`}Why am I here?{`"`} You are too busy surviving.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  But when survival is handled — when the bills are paid and the fridge is full — the brain has nothing left to solve except the deepest question of all:
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  {`"`}Now what?{`"`}
                </blockquote>
                <p className="text-foreground/90 leading-relaxed">
                  This is why depression rates are highest in wealthy nations. Not because wealth causes sadness, but because <strong>wealth removes the distractions that kept the question of meaning at bay</strong>.
                </p>
              </section>

              {/* PART 4 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 4: Religion, Philosophy, Science — All Attempts at the Same Answer</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Every civilization has tried to answer the meaning question.
                </p>
                <ul className="list-disc pl-6 text-foreground/90 space-y-2">
                  <li><strong>Religion</strong> says: {`"`}God has a plan. Trust it.{`"`}</li>
                  <li><strong>Philosophy</strong> says: {`"`}Create your own meaning. Choose it.{`"`}</li>
                  <li><strong>Science</strong> says: {`"`}There may be no meaning. Accept it.{`"`}</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed">
                  None of these answers is complete. But all of them serve the same function: they give the brain something to hold onto when the void feels too large.
                </p>
                <p className="text-foreground/90 leading-relaxed font-medium">
                  The search for meaning is not about finding the right answer. It is about the act of searching itself — which gives life direction.
                </p>
              </section>

              {/* PART 5 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 5: Awareness Is the Closest Thing to Meaning</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Perhaps meaning is not something you find.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Perhaps it is something you <strong>notice</strong>.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  The moment you are fully present — watching a sunset, holding a conversation, listening to rain — the question of meaning dissolves.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Not because you found the answer. But because <strong>the question no longer matters when you are fully alive</strong>.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">
                  Meaning is not a destination. It is the quality of attention you bring to each moment.
                </blockquote>
              </section>

              {/* PART 6 */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">Part 6: A Quiet Reflection</h2>
                <p className="text-foreground/90 leading-relaxed italic">
                  I have searched for meaning in books, in people, in achievements, in silence.
                </p>
                <p className="text-foreground/90 leading-relaxed italic">
                  And the closest I have ever come to finding it was in the moments I stopped searching — and simply paid attention.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  The search for meaning is what makes us human. But the ability to be present without needing meaning — that is what makes us free.
                </p>
              </section>

              {/* Conclusion */}
              <section className="mb-10 rounded-lg border border-primary/20 bg-primary/5 p-6">
                <h2 className="text-2xl font-semibold text-foreground">Conclusion: The Search Is the Meaning</h2>
                <p className="text-foreground/90 leading-relaxed">
                  You will never find a final answer to {`"`}Why am I here?{`"`}
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  But the fact that you ask — the fact that a pile of atoms arranged as a human being can look at the stars and wonder {`"`}Why?{`"`} — is itself extraordinary.
                </p>
                <p className="text-foreground/90 leading-relaxed font-semibold">
                  The search for meaning is not a problem to solve. It is the most beautiful proof that you are conscious, alive, and deeply human.
                </p>
              </section>

              {/* References */}
              <section className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground">References & Citations</h2>
                <ol className="list-decimal pl-6 text-foreground/80 space-y-2">
                  <li>Frankl, V. E. (1946). <em>Man{`'`}s Search for Meaning</em>. Beacon Press.</li>
                  <li>Camus, A. (1942). <em>The Myth of Sisyphus</em>. Gallimard.</li>
                  <li>Yalom, I. D. (1980). <em>Existential Psychotherapy</em>. Basic Books.</li>
                  <li>Maslow, A. H. (1954). <em>Motivation and Personality</em>. Harper & Row.</li>
                  <li>Csikszentmihalyi, M. (1990). <em>Flow: The Psychology of Optimal Experience</em>. Harper & Row.</li>
                  <li>Harari, Y. N. (2015). <em>Sapiens: A Brief History of Humankind</em>. Harper.</li>
                  <li>Tolle, E. (1997). <em>The Power of Now</em>. Namaste Publishing.</li>
                  <li>Seligman, M. E. P. (2011). <em>Flourish: A Visionary New Understanding of Happiness and Well-being</em>. Free Press.</li>
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
