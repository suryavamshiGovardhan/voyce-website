import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { useBlogPost } from '@/hooks/useBlog';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SafeHTML } from '@/components/text/SafeMarkdown';
import { SEOHead } from '@/components/SEOHead';
import ReadingProgress from '@/components/engagement/ReadingProgress';
import ReflectPause from '@/components/engagement/ReflectPause';
import ContinueJourney from '@/components/engagement/ContinueJourney';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = useBlogPost(slug || '');

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <AlertCircle className="mx-auto h-12 w-12 text-destructive mb-4" />
              <h2 className="text-xl font-semibold text-foreground mb-2">Post Not Found</h2>
              <p className="text-muted-foreground mb-4">{error}</p>
              <Button asChild variant="outline">
                <Link to="/blog">← Back to Blog</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      {post && (
        <SEOHead 
          title={post.title}
          description={post.content?.substring(0, 160) || 'VOYCE-X Blog Post'}
          keywords="mental health, mindfulness, wellbeing"
          canonicalUrl={`https://voyce-x.lovable.app/blog/${post.slug}`}
          ogType="article"
        />
      )}
      <div className="min-h-screen bg-background">
      <Navbar />
      <ReadingProgress />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {loading ? (
            <article>
              <header className="mb-8">
                <Skeleton className="h-12 w-3/4 mb-4" />
                <div className="flex items-center gap-4 mb-6">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-32" />
                </div>
                <Skeleton className="h-64 w-full rounded-lg" />
              </header>
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            </article>
          ) : post ? (
            <article>
              <header className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 mb-6">
                  <Badge variant="secondary">
                    {new Date(post.created_at!).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </Badge>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
                {post.hero_image && (
                  <div className="mb-8">
                    <img 
                      src={post.hero_image} 
                      alt={post.title}
                      className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </header>
              
              <div className="prose prose-lg max-w-none blog-content">
                {post.content ? (
                  <SafeHTML html={post.content} />
                ) : (
                  <p className="text-muted-foreground italic">No content available.</p>
                )}
              </div>

              <ReflectPause />
              <ContinueJourney
                links={[
                  { to: '/blog', label: 'More from the blog', hint: 'Other essays and reflections.' },
                  { to: '/series', label: 'The Unheard Mind', hint: 'Eight stories, told slowly.' },
                  { to: '/tools', label: 'Immersion tools', hint: 'Turn reading into practice.' },
                ]}
              />
            </article>
          ) : null}
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
}