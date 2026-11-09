import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { sanitizeDbError } from '@/lib/errorHandler';
import { ArrowLeft, Save } from 'lucide-react';
import { z } from 'zod';

const blogSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
  summary: z.string().max(500, "Summary too long").optional(),
  content: z.string().min(1, "Content is required"),
  category: z.string().optional(),
  featured_image: z.string().url("Invalid URL").optional().or(z.literal("")),
  quotes: z.string().optional(),
  tips: z.string().optional(),
  blog_references: z.string().optional(),
});

export default function CreateBlogPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: '',
    category: 'General',
    featured_image: '',
    quotes: '',
    tips: '',
    blog_references: '',
    status: 'published'
  });

  useEffect(() => {
    if (!authLoading && !user) {
      toast.error('Please sign in to create blogs');
      navigate('/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (slug) {
      // Load existing blog for editing
      loadBlog(slug);
    }
  }, [slug]);

  const loadBlog = async (blogSlug: string) => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', blogSlug)
        .eq('author_id', user?.id)
        .single();

      if (error) throw error;
      if (data) {
        setFormData({
          title: data.title,
          summary: data.summary || '',
          content: data.content,
          category: data.category || 'General',
          featured_image: data.featured_image || '',
          quotes: data.quotes || '',
          tips: data.tips || '',
          blog_references: data.blog_references || '',
          status: data.status || 'published'
        });
      }
    } catch (error: any) {
      toast.error('Failed to load blog');
      navigate('/dashboard');
    }
  };

  const generateSlug = (title: string): string => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    try {
      // Validate form data
      blogSchema.parse(formData);
      setLoading(true);

      // Server-side HTML sanitization (defense-in-depth against stored XSS)
      const { data: sanitized, error: sanitizeError } = await supabase.functions.invoke(
        'sanitize-blog-content',
        {
          body: {
            content: formData.content,
            summary: formData.summary || '',
            footer: '',
          },
        }
      );
      if (sanitizeError) {
        throw new Error('Content sanitization failed. Please try again.');
      }
      const safeFormData = {
        ...formData,
        content: sanitized?.content ?? formData.content,
        summary: sanitized?.summary ?? formData.summary,
      };

      const slug = generateSlug(safeFormData.title);
      
      // Check for slug collision
      const { data: existing } = await supabase
        .from('blogs')
        .select('id')
        .eq('slug', slug)
        .neq('author_id', user.id);

      let finalSlug = slug;
      if (existing && existing.length > 0) {
        finalSlug = `${slug}-${Date.now()}`;
      }

      const blogData = {
        ...safeFormData,
        slug: finalSlug,
        author_id: user.id,
        author: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Anonymous',
        author_name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'Anonymous',
      };

      if (slug && slug === finalSlug) {
        // Update existing
        const { error } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('slug', slug)
          .eq('author_id', user.id);

        if (error) throw error;
        toast.success('Blog updated successfully!');
      } else {
        // Insert new
        const { error } = await supabase
          .from('blogs')
          .insert(blogData);

        if (error) throw error;
        toast.success('Blog created successfully!');
      }

      navigate(`/blog/${finalSlug}`);
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error(sanitizeDbError(error));
      }
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return <div className="v-legacy min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="v-legacy min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Button variant="ghost" onClick={() => navigate('/dashboard')} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">
                {slug ? 'Edit Blog Post' : 'Create New Blog Post'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter blog title"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="summary">Summary</Label>
                  <Textarea
                    id="summary"
                    value={formData.summary}
                    onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Brief summary of your blog post"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="General">General</SelectItem>
                      <SelectItem value="Mindfulness & Wellness">Mindfulness & Wellness</SelectItem>
                      <SelectItem value="Mental Health Awareness">Mental Health Awareness</SelectItem>
                      <SelectItem value="Student Mental Health">Student Mental Health</SelectItem>
                      <SelectItem value="Self-Care">Self-Care</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="featured_image">Featured Image URL</Label>
                  <Input
                    id="featured_image"
                    value={formData.featured_image}
                    onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                    type="url"
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content * (HTML supported)</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Write your blog content here. You can use HTML tags."
                    rows={15}
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Tip: Use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt; for formatting
                  </p>
                </div>

                <div>
                  <Label htmlFor="quotes">Quotes (separate with |)</Label>
                  <Textarea
                    id="quotes"
                    value={formData.quotes}
                    onChange={(e) => setFormData({ ...formData, quotes: e.target.value })}
                    placeholder="Quote 1 — Author | Quote 2 — Author"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="tips">Practical Tips (separate with |)</Label>
                  <Textarea
                    id="tips"
                    value={formData.tips}
                    onChange={(e) => setFormData({ ...formData, tips: e.target.value })}
                    placeholder="Tip 1 | Tip 2 | Tip 3"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="blog_references">References</Label>
                  <Textarea
                    id="blog_references"
                    value={formData.blog_references}
                    onChange={(e) => setFormData({ ...formData, blog_references: e.target.value })}
                    placeholder="Add references and sources"
                    rows={3}
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1"
                  >
                    <Save className="mr-2 h-4 w-4" />
                    {loading ? 'Saving...' : 'Publish Blog'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setFormData({ ...formData, status: 'draft' })}
                    disabled={loading}
                  >
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
