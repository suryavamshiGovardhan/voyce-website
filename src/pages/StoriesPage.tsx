/**
 * Stories Page - Where trust is born
 * Quiet, human, no metrics, no pressure
 */

import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, BookOpen, PenLine } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  reflectionQuestion: string;
}

const stories: Story[] = [
  {
    id: "quiet-discomfort",
    title: "I felt fine, but something was off.",
    excerpt: "For months, I told everyone I was okay. I believed it too. I woke up, went to work, smiled at the right times. But late at night, when the world went quiet, I noticed it — a weight I couldn't name. Not sadness exactly. Not anxiety. Just... something off.",
    content: `For months, I told everyone I was okay. I believed it too. I woke up, went to work, smiled at the right times. But late at night, when the world went quiet, I noticed it — a weight I couldn't name. Not sadness exactly. Not anxiety. Just... something off.

I started paying attention. I noticed how I rushed through conversations, how I avoided being alone with my thoughts, how I filled every silence with noise. I was running from something I hadn't even identified yet.

One day, I stopped. I sat with the discomfort. I didn't try to fix it or understand it. I just let it exist. And slowly, it started to speak.

The off-ness wasn't a problem to solve. It was a signal. My body and mind were telling me something needed attention — not urgently, not dramatically, just gently.

That was the beginning of listening to myself.`,
    reflectionQuestion: "Where in your life do you feel this kind of quiet discomfort?"
  },
  {
    id: "invisible-weight",
    title: "Nobody knew I was carrying this.",
    excerpt: "From the outside, my life looked put together. Good job, nice apartment, friends who cared. But inside, I carried a weight nobody could see. I didn't even know how to describe it.",
    content: `From the outside, my life looked put together. Good job, nice apartment, friends who cared. But inside, I carried a weight nobody could see. I didn't even know how to describe it.

It wasn't depression — I'd felt that before, and this was different. It was more like exhaustion that sleep couldn't fix. A tiredness of pretending, of performing, of being who everyone expected me to be.

I started small. Instead of saying "I'm fine," I tried "I'm okay, just tired." It felt like a confession. Then I tried something harder: I stopped apologizing for needing space.

The weight didn't disappear. But it got lighter when I stopped pretending it wasn't there.`,
    reflectionQuestion: "What weight are you carrying that others can't see?"
  },
  {
    id: "permission-to-rest",
    title: "I finally gave myself permission.",
    excerpt: "For years, I believed rest was something you earned. You worked hard, then you deserved a break. But the work never ended, and neither did my exhaustion.",
    content: `For years, I believed rest was something you earned. You worked hard, then you deserved a break. But the work never ended, and neither did my exhaustion.

One Sunday morning, I woke up and did nothing. Not lazy nothing — intentional nothing. I sat by the window. I watched clouds. I let my thoughts wander without trying to capture them.

It felt wrong at first. Guilt crept in. Shouldn't I be productive? Useful? Better?

Then I realized: I was already useful. I was already enough. The world didn't need more from me in that moment. And neither did I.

That Sunday changed something. Not everything, but something.`,
    reflectionQuestion: "What would change if you gave yourself permission to rest?"
  }
];

function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [showReflection, setShowReflection] = useState(false);
  const [reflectionText, setReflectionText] = useState("");

  const handleReflect = () => {
    setShowReflection(true);
  };

  const handleReadAnother = () => {
    setSelectedStory(null);
    setShowReflection(false);
    setReflectionText("");
  };

  return (
    <>
      <SEOHead 
        title="Stories | VOYCE"
        description="Read real, anonymous human stories about mental health, self-discovery, and quiet moments of truth. No judgement, no pressure."
        keywords="mental health stories, anonymous stories, self-reflection, personal growth, mindfulness"
      />
      
      <div className="v-legacy min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-4 py-12 max-w-3xl">
          {!selectedStory ? (
            <>
              {/* Stories List */}
              <header className="v-rise mb-12 text-center">
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary">Stories</p>
                <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-5xl">
                  You are not the only one <span className="text-primary">who feels this way.</span>
                </h1>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Short, anonymous stories about quiet moments of truth. Read one, then take a minute to reflect on what it stirred in you.
                </p>
              </header>

              <div className="space-y-6">
                {stories.map((story) => (
                  <Card 
                    key={story.id}
                    className="v-card v-card-hover group cursor-pointer border-l-4 border-l-primary/40 p-6 hover:border-l-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => setSelectedStory(story)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && setSelectedStory(story)}
                    aria-label={`Read story: ${story.title}`}
                  >
                    <h2 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary flex-shrink-0" aria-hidden="true" />
                      {story.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {story.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-primary text-sm font-medium">
                      Read more
                      <ArrowRight className="v-arrow h-4 w-4 ml-1" aria-hidden="true" />
                    </div>
                  </Card>
                ))}
              </div>
            </>
          ) : !showReflection ? (
            <>
              {/* Full Story View */}
              <article className="mb-12">
                <Button 
                  variant="ghost" 
                  onClick={handleReadAnother}
                  className="mb-6 text-muted-foreground"
                >
                  ← Back to stories
                </Button>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                  {selectedStory.title}
                </h1>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                  {selectedStory.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-foreground/80 leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Reflection Prompt */}
                <div className="mt-12 p-6 bg-muted/30 rounded-xl border border-border">
                  <p className="text-lg text-foreground font-medium mb-4 flex items-center gap-2">
                    <PenLine className="h-5 w-5 text-primary" aria-hidden="true" />
                    One question to sit with:
                  </p>
                  <p className="text-xl text-foreground/90 italic">
                    "{selectedStory.reflectionQuestion}"
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleReflect}
                    className="bg-primary hover:from-purple-700 hover:to-purple-800"
                  >
                    <PenLine className="h-4 w-4 mr-2" aria-hidden="true" />
                    Reflect privately
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={handleReadAnother}
                  >
                    Read another story
                  </Button>
                </div>
              </article>
            </>
          ) : (
            <>
              {/* Private Reflection */}
              <section className="max-w-2xl mx-auto">
                <Button 
                  variant="ghost" 
                  onClick={() => setShowReflection(false)}
                  className="mb-6 text-muted-foreground"
                >
                  ← Back to story
                </Button>

                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    This space is private.
                  </h2>
                  <p className="text-muted-foreground">
                    Nothing is analyzed. Nothing is judged.
                  </p>
                </div>

                <Card className="p-6 mb-8">
                  <p className="text-lg text-foreground/90 italic mb-6">
                    "{selectedStory.reflectionQuestion}"
                  </p>
                  
                  <textarea
                    value={reflectionText}
                    onChange={(e) => setReflectionText(e.target.value)}
                    placeholder="Write freely..."
                    className="w-full h-48 p-4 rounded-lg border border-border bg-background text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-green-500/50"
                    aria-label="Your private reflection"
                  />
                  
                  <p className="text-sm text-muted-foreground mt-3">
                    This stays on your device. If you want to save this later, you can create an account.
                  </p>
                </Card>

                {/* Optional Learning */}
                <div className="text-center p-6 bg-muted/30 rounded-xl">
                  <p className="text-foreground mb-4">
                    Would you like to understand this feeling a little better?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild variant="outline">
                      <Link to="/stress">
                        Learn more (gentle)
                      </Link>
                    </Button>
                    <Button 
                      variant="ghost"
                      onClick={handleReadAnother}
                    >
                      I'm done for now
                    </Button>
                  </div>
                </div>

                {/* Account Invite - Only here */}
                <div className="mt-12 text-center p-6 border border-border rounded-xl">
                  <p className="text-foreground mb-4">
                    Want to save reflections and come back later?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild>
                      <Link to="/signup">Create a private account</Link>
                    </Button>
                    <Button 
                      variant="ghost"
                      onClick={handleReadAnother}
                    >
                      Continue without saving
                    </Button>
                  </div>
                </div>
              </section>
            </>
          )}
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default memo(StoriesPage);
