import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero, NextStep, LeaveWith } from "@/components/site/value";

import { hapticFeedback } from "@/utils/hapticFeedback";
import { Heart, Send, FileText, MessageSquare, Loader2 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

export default function WorkbookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    story: "",
    link: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    if (formData.story.trim().length < 20) {
      toast({
        title: "A little more, please",
        description: "Share at least a couple of sentences so we can understand your story.",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("submit-story", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          story: formData.story.trim(),
          link: formData.link.trim()
        }
      });
      if (error) throw error;

      hapticFeedback.onSuccess();
      toast({
        title: "Your story has reached us",
        description: "Thank you for trusting VOYCE with it. We read every submission."
      });
      setFormData({ name: "", email: "", story: "", link: "" });
    } catch (err) {
      console.error("Story submission failed:", err);
      toast({
        title: "We couldn't send that",
        description: "Something went wrong on our side. Please try again in a moment.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SEOHead 
        title="Interactive Workbook"
        description="Share your personal story and engage with interactive mental health workbook exercises. Your voice matters in building a supportive community."
        keywords="mental health workbook, personal story, therapy exercises, self-reflection, VOYCE community"
      />
      <div className="v-legacy min-h-screen bg-background">
        <Navbar />
      
      <PageHero eyebrow="Workbook" title={<>Reflect, write, <span className="text-primary">and see yourself more clearly.</span></>} lede="Guided prompts that help you slow down and put your experience into words — and, if you want, share your story with the community." />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <LeaveWith className="mb-12" items={["Guided prompts to reflect at your own pace", "A clearer picture of what you are carrying", "The option to share — or keep it to yourself"]} />
        {/* Tabbed Interface */}
        <Tabs defaultValue="workbook" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-card">
            <TabsTrigger value="workbook" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span>Workshop Workbook</span>
            </TabsTrigger>
            <TabsTrigger value="form" className="flex items-center space-x-2">
              <MessageSquare className="h-4 w-4" />
              <span>VOYCE Form</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="workbook">
            {/* Embedded Google Doc */}
            <Card className="bg-card border-border shadow-xl rounded-2xl mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-foreground text-center">Workshop Workbook</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg bg-card">
                  <iframe
                    src="https://docs.google.com/document/d/1BQt0KYI80v0zOzGQrDgVwA9Dqqxz98v8iKCb7eB4Tj0/preview"
                    width="100%"
                    height="100%"
                    className="border-0 rounded-xl"
                    title="VOYCE Workshop Workbook"
                    loading="lazy"
                    allow="fullscreen"
                  />
                </div>
                <div className="text-center mt-4 space-y-2">
                  <p className="text-muted-foreground text-sm">
                    Scroll within the document to explore the full workbook.
                  </p>
                  <a
                    href="https://docs.google.com/document/d/1BQt0KYI80v0zOzGQrDgVwA9Dqqxz98v8iKCb7eB4Tj0/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary hover:text-primary underline text-sm"
                  >
                    Open the workbook in a new tab
                  </a>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="form">
            {/* Embedded Google Form */}
            <Card className="bg-card border-border shadow-xl rounded-2xl mb-16">
              <CardHeader>
                <CardTitle className="text-3xl text-foreground text-center flex items-center justify-center space-x-3">
                  <MessageSquare className="h-8 w-8 text-primary" />
                  <span>VOYCE Community Form</span>
                </CardTitle>
                <p className="text-muted-foreground text-center mt-4">
                  Connect with the VOYCE community and share your journey
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="w-full h-[700px] rounded-xl overflow-hidden shadow-lg bg-card">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfRfrRKJsrX9P8E3kzV4rpsjaWa3nDTiaZbR5XZgJbN6qoamg/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    className="border-0 rounded-xl"
                    title="VOYCE Community Form"
                    loading="lazy"
                  >
                    Loading…
                  </iframe>
                </div>
                <p className="text-center text-muted-foreground text-sm mt-4">
                  Your responses help us build a stronger VOYCE community
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Story Submission Form */}
        <Card className="bg-card border-border shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-foreground text-center flex items-center justify-center space-x-3">
              <Heart className="h-8 w-8 text-primary" />
              <span>Share Your VOYCE Story</span>
            </CardTitle>
            <p className="text-muted-foreground text-center mt-4">
              Your story matters. Share your journey, insights, or transformation with the VOYCE community.
            </p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="bg-card border-border text-foreground placeholder-slate-400"
                    placeholder="Enter your name"
                    maxLength={120}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="bg-card border-border text-foreground placeholder-slate-400"
                    placeholder="your@email.com"
                    maxLength={200}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="story" className="text-foreground">Your VOYCE Story</Label>
                <Textarea
                  id="story"
                  value={formData.story}
                  onChange={(e) => handleInputChange('story', e.target.value)}
                  className="bg-card border-border text-foreground placeholder-slate-400 min-h-32"
                  placeholder="Share your journey, insights, transformation, or how VOYCE has impacted your life..."
                  maxLength={20000}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="link" className="text-foreground">Optional: Link to audio or a document</Label>
                <Input
                  id="link"
                  type="url"
                  value={formData.link}
                  onChange={(e) => handleInputChange('link', e.target.value)}
                  className="bg-card border-border text-foreground placeholder-slate-400"
                  placeholder="https://drive.google.com/..."
                  maxLength={500}
                />
                <p className="text-xs text-muted-foreground">
                  Paste a shareable link (Google Drive, Dropbox, a voice note). We don't host uploads yet.
                </p>
              </div>
              
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary/90 text-foreground py-3 rounded-xl text-lg font-medium disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Sending your story…
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Share My VOYCE Story
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      <NextStep title="Prefer something quicker?" body="A two-minute private check-in works too." primary={{ to: "/start-here", label: "Start a check-in" }} secondary={{ to: "/tools", label: "Try a practice" }} />
      <Footer />
    </div>
    </>
  );
}
