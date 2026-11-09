import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useBlogs } from '@/hooks/useBlogs';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, PenSquare } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { initializeSampleBlogs } from '@/utils/initializeSampleBlogs';
import { SEOHead } from '@/components/SEOHead';
import { PageHero, NextStep, LeaveWith } from "@/components/site/value";


export default function BlogPage() {
  const { blogs, loading, error, refetch } = useBlogs();
  const { user } = useAuth();

  useEffect(() => {
    // Initialize sample blogs if none exist
    initializeSampleBlogs().then(() => {
      refetch();
    });
  }, []);

  if (error) {
    return (
      <div className="v-legacy min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <AlertCircle className="mx-auto h-12 w-12 text-destructive mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">Error Loading Posts</h2>
              <p className="text-muted-foreground">{error}</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="Mental Health Blog"
        description="Read insightful articles on mental health, mindfulness, psychology, and emotional wellbeing from the VOYCE community."
        keywords="mental health blog, psychology articles, mindfulness tips, emotional wellbeing, mental health resources"
      />
      <div className="min-h-screen bg-background">
      <Navbar />
      <PageHero
        eyebrow="VOYCE Journal"
        title={<>Slow reads <span className="text-primary">for an unquiet mind.</span></>}
        lede="Essays, stories and ideas on psychology, philosophy and growing up — each one short enough to finish, and leaves you with one question worth keeping."
        primary={{ to: "/series", label: "Start with The Unheard Mind" }}
        secondary={{ to: "/library", label: "Browse the library" }}
      />
      <main className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {user && (
              <Button asChild size="lg">
                <Link to="/blog/create">
                  <PenSquare className="mr-2 h-5 w-5" />
                  Write a Blog
                </Link>
              </Button>
            )}

          {/* Featured: The Unheard Mind series */}
          <Card className="v-card v-card-hover overflow-hidden mb-8 border-border bg-background">
            <CardHeader>
              <Badge className="w-fit mb-2 bg-muted text-primary border border-border hover:bg-muted">VOYCE Original Series</Badge>
              <CardTitle className="font-display text-3xl md:text-4xl text-foreground">
                <Link to="/series" className="hover:text-primary transition-colors">
                  The Unheard Mind
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4 leading-relaxed">
                8 episodes. Psychology, philosophy, and ancient wisdom — explained slowly, without filter.
              </p>
              <Button asChild variant="outline" className="border-border text-primary hover:bg-muted hover:text-emerald-100">
                <Link to="/series">Read the series →</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Featured Philosophy Articles */}
          <div className="space-y-6 mb-8">
            <Card className="v-card v-card-hover overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="outline">Featured Philosophy</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/desire-suffering-journey" className="hover:text-primary transition-colors">
                    Desire, Suffering & The Human Journey
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">The Debate Buddha Never Finished</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  For thousands of years, people have repeated: "Desire is the root of suffering." But if that's really true... why does the entire universe run on desire? VOYCE questions the wisdom the world blindly repeats.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/desire-suffering-journey">
                    Read Full Article
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="v-card v-card-hover overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="outline">Featured Philosophy</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/atheism-doctrines" className="hover:text-primary transition-colors">
                    Doctrines of Atheism: The Rebel's Reason
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">The pursuit of truth without excuses</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Atheism isn't the worship of disbelief. It is the pursuit of truth without excuses — a journey through philosophy, reason, and the courage to question everything we've been taught to accept.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/atheism-doctrines">
                    Read Full Article
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="v-card v-card-hover overflow-hidden border-border bg-primary">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-muted text-primary border-border">21-Day Protocol</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/day-1-journal" className="hover:text-primary transition-colors">
                    Day 1: Installing a New Mental Operating System
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">5th December 2025 - Personal Journal</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Breaking the cycle of passive overthinking through structured discipline. A 21-day protocol to rebuild self-thinking ability with proof of execution over motivation.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/day-1-journal">
                    Read & Start Your Journey
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="v-card v-card-hover overflow-hidden border-border bg-primary">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-muted text-primary border-border">KATA Essay</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/opposite-gender-behavior" className="hover:text-primary transition-colors">
                    Why We Behave So Abnormally Around the Opposite Gender
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">A human systems explanation, not a love story</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Why does intelligence disappear near attraction? This is human biology + psychology + culture colliding at once. The brain reads attraction as risk, not romance.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/opposite-gender-behavior">
                    Read Full Essay
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="v-card v-card-hover overflow-hidden border-border bg-primary">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-muted text-amber-700 border-border">KATA Essay</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/second-child-intelligence" className="hover:text-primary transition-colors">
                    Why the Second Child Often Appears More Intelligent
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">A systems + environment explanation</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Almost every family notices it. The first child is careful, the second is bold. This is not magic — this is environmental psychology. Change the environment, and outcomes change.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/second-child-intelligence">
                    Read Full Essay
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="v-card v-card-hover overflow-hidden border-border bg-primary">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-muted text-primary border-border">KATA Essay</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/overthinking-at-night" className="hover:text-primary transition-colors">
                    Why Humans Overthink More at Night
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">A systems explanation of why your brain spirals after sunset</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Your brain switches from task mode to processing mode at night. Cortisol drops, dopamine depletes, silence amplifies — and every unprocessed emotion arrives uninvited.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/overthinking-at-night">
                    Read Full Essay
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="v-card v-card-hover overflow-hidden border-border/20 bg-gradient-to-br from-slate-500/5 to-gray-500/5">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-muted-foreground/10 text-muted-foreground border-border/20">KATA Essay</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/silence-discomfort" className="hover:text-primary transition-colors">
                    Why Silence Makes People Uncomfortable
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">A systems explanation of the noise inside</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Silence removes the mask. It reveals what you have been avoiding. People do not fear silence — they fear what silence will make them feel.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/silence-discomfort">
                    Read Full Essay
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="v-card v-card-hover overflow-hidden border-border bg-gradient-to-br from-rose-500/5 to-pink-500/5">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-muted text-rose-600 border-border">KATA Essay</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/cannot-say-no" className="hover:text-primary transition-colors">
                    Why Some People Cannot Say "No"
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">A systems explanation of the invisible chains of approval</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  People-pleasing is not generosity — it is fear management. The inability to say no was trained in childhood, and it runs silently for decades.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/cannot-say-no">
                    Read Full Essay
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="v-card v-card-hover overflow-hidden border-border bg-primary">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-muted text-primary border-border">KATA Essay</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/search-for-meaning" className="hover:text-primary transition-colors">
                    Why Humans Search for Meaning Even When Life Is Simple
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">A systems explanation of the most human question</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Comfort is never enough for humans. The brain is a pattern-seeking machine that cannot stop asking "Why?" — and the search itself may be the answer.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/search-for-meaning">
                    Read Full Essay
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="v-card v-card-hover overflow-hidden border-border bg-primary">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-muted text-amber-700 border-border">Personal Essay</Badge>
                <CardTitle className="text-2xl">
                  <Link to="/article/self-care-selfishness" className="hover:text-primary transition-colors">
                    Self-Care is Selfishness — And I Stand By It
                  </Link>
                </CardTitle>
                <p className="text-sm text-muted-foreground">A reflective essay on choosing yourself without guilt</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We romanticized exhaustion and glorified people who give everything away. But maybe selfish isn't the villain we think it is — maybe it's the clarity we need.
                </p>
                <Button asChild variant="outline">
                  <Link to="/article/self-care-selfishness">
                    Read Full Essay
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {loading ? (
            <div className="grid gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-foreground mb-2">No Posts Yet</h2>
              <p className="text-muted-foreground">Check back soon for new content!</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {blogs.map((blog) => (
                <Card key={blog.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {blog.featured_image && (
                    <div className="w-full h-48 overflow-hidden">
                      <img 
                        src={blog.featured_image} 
                        alt={blog.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <CardTitle className="text-xl hover:text-primary transition-colors flex-1">
                        <Link to={`/blog/${blog.slug}`}>
                          {blog.title}
                        </Link>
                      </CardTitle>
                      <div className="flex gap-2">
                        <Badge variant="secondary">
                          {new Date(blog.date).toLocaleDateString()}
                        </Badge>
                        {blog.category && (
                          <Badge variant="outline">{blog.category}</Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">By {blog.author}</p>
                  </CardHeader>
                  {blog.summary && (
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{blog.summary}</p>
                      <Link 
                        to={`/blog/${blog.slug}`}
                        className="text-primary hover:underline font-medium"
                      >
                        Read more
                      </Link>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <NextStep
        title="Read something that stayed with you?"
        body="Take a minute to notice how it landed — privately."
        primary={{ to: "/start-here", label: "Start a private check-in" }}
        secondary={{ to: "/stories", label: "Read real stories" }}
      />
      <Footer />
    </div>
    </>
  );
}
