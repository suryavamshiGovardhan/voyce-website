import { NextStep } from "@/components/site/value";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { ArticleSchema } from '@/components/StructuredData';
import selfCareHero from '@/assets/self-care-selfishness-hero.jpg';

export default function SelfCareSelfishnessPage() {
  return (
    <>
      <SEOHead
        title="Self-Care is Selfishness — And I Stand By It"
        description="A reflective essay on why self-care is a form of constructive selfishness — and why that's not a flaw but clarity."
        keywords="self-care, selfishness, boundaries, mental health, people pleasing, VOYCE, philosophy"
        ogType="article"
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/article/self-care-selfishness"
      />
      <ArticleSchema
        title="Self-Care is Selfishness — And I Stand By It"
        description="A reflective essay on why self-care is a form of constructive selfishness — and why that's not a flaw but clarity."
        author="Suryavamshi Govardhan"
        datePublished="2025-03-18"
        image={selfCareHero}
        url="https://suryavamshigovardhan.github.io/voyce-website/article/self-care-selfishness"
      />
      <div className="v-legacy min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <article className="max-w-3xl mx-auto prose prose-lg dark:prose-invert">

            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
              Self-Care is Selfishness — And I Stand By It
            </h1>

            <img
              src={selfCareHero}
              alt="A silhouette sitting alone on a bench in warm golden light, symbolizing self-care and introspection"
              className="w-full rounded-xl my-8 shadow-lg"
            />

            <p className="text-lg text-muted-foreground leading-relaxed">
              Somewhere along the way, we romanticized exhaustion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We started glorifying people who give everything away—time, energy, attention, identity—until there's nothing left but a hollow version of themselves. And then we clap for them. We call them "kind," "selfless," "good."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But let me ask you something first—<br />
              If a man keeps pouring water from his pot without ever refilling it… what exactly is he offering after a point?
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              Dryness disguised as generosity?
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-bold text-foreground">The Lie We Were Taught</h2>
            <p className="text-muted-foreground leading-relaxed">
              From childhood, many of us were trained—subtly, quietly—to equate self-care with selfishness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              "Think about others first."<br />
              "Don't be so self-centered."<br />
              "Sacrifice is noble."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sounds beautiful. Almost poetic.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But look closer.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That same conditioning creates people who:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>Struggle to say no</li>
              <li>Fear disappointing others</li>
              <li>Stay silent even when they should speak</li>
              <li>Feel guilty for choosing themselves</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              And here's the twist—<br />
              <strong>they don't even realize they're slowly disappearing.</strong>
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-bold text-foreground">My Uncomfortable Truth</h2>
            <p className="text-muted-foreground leading-relaxed">
              I believe self-care is selfishness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              And I don't see that as a flaw. I see it as clarity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Because at its core, <strong>self-care is choosing yourself</strong>—your peace, your growth, your boundaries—over constant external validation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              That is selfish.
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              But maybe… selfish isn't the villain we think it is.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-bold text-foreground">The Two Faces of Selfishness</h2>
            <p className="text-muted-foreground leading-relaxed">
              Let's break it honestly.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              There are two kinds:
            </p>
            <h3 className="text-xl font-semibold text-foreground">1. Destructive selfishness</h3>
            <p className="text-muted-foreground leading-relaxed">
              This one ignores others, manipulates, takes without giving.
            </p>
            <h3 className="text-xl font-semibold text-foreground">2. Constructive selfishness</h3>
            <p className="text-muted-foreground leading-relaxed">
              This one protects your energy, builds your identity, and makes sure you don't lose yourself while trying to hold everyone else together.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Most people confuse the second for the first.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>And that confusion? It costs them their voice.</strong>
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-bold text-foreground">Why I Choose "Selfishness"</h2>
            <p className="text-muted-foreground leading-relaxed">
              Because I've seen what happens otherwise.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you constantly adapt to others:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>You forget what you actually want</li>
              <li>You hesitate to take decisions</li>
              <li>You wait for approval like it's oxygen</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              And slowly, your life becomes a reaction… not a direction.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Self-care breaks that pattern.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
              "I matter too."<br />
              Not more than others.<br />
              But definitely not less.
            </blockquote>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-bold text-foreground">The Real Question</h2>
            <p className="text-muted-foreground leading-relaxed">
              Let me flip this on you—
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If you don't prioritize your mind, your clarity, your growth…<br />
              <strong>who will?</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              And even if someone tries—<br />
              can they ever understand your inner chaos better than you?
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-bold text-foreground">The Silent Power of Choosing Yourself</h2>
            <p className="text-muted-foreground leading-relaxed">
              Self-care isn't spa days and aesthetic routines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It's harder than that.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It's:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>Saying no when it feels uncomfortable</li>
              <li>Walking away when attachment begs you to stay</li>
              <li>Sitting alone and facing your own thoughts without distraction</li>
              <li>Building discipline when excuses feel easier</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              It's not pretty. It's not always peaceful.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>But it's real.</strong>
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-bold text-foreground">The Paradox No One Talks About</h2>
            <p className="text-muted-foreground leading-relaxed">
              Here's the irony—
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong>The people who take care of themselves properly are often the ones who can actually show up for others… without resentment, without burnout, without losing themselves.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              So is self-care selfish?
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Yes.
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              And that's exactly why it works.
            </p>

            <hr className="my-8 border-border" />

            <h2 className="text-2xl font-bold text-foreground">Final Thought</h2>
            <p className="text-muted-foreground leading-relaxed">
              Maybe the goal isn't to avoid selfishness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Maybe the goal is to <strong>refine it</strong>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              To be selfish enough to protect your mind,<br />
              but wise enough to not harm others.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground my-6">
              Because in the end—<br />
              a person who abandons themselves for the world<br />
              eventually has nothing left to offer it.
            </blockquote>
            <p className="text-muted-foreground leading-relaxed">
              So yeah…<br />
              I choose selfishness.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But not the kind that destroys.
            </p>
            <p className="text-muted-foreground leading-relaxed italic">
              The kind that builds me—<br />
              quietly, steadily, unapologetically.
            </p>

            <hr className="my-8 border-border" />

            <div className="mt-12 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">Written by</p>
              <p className="font-semibold text-foreground">Suryavamshi Govardhan</p>
              <p className="text-sm text-muted-foreground">Founder – VOYCE (Mental Health & Human Awareness Initiative)</p>
            </div>
          </article>
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
