import Navbar from "@/components/Navbar";
import { BASE_PATH } from "@/lib/site";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Instagram, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <SEOHead 
        title="Contact | VOYCE"
        description="Get in touch with the VOYCE team. We'd love to hear from you."
        keywords="contact VOYCE-X, support, feedback"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-center">Contact Us</h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Have questions, feedback, or just want to say hello? We'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  For general inquiries and support
                </p>
                <a 
                  href="mailto:voycexx@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  voycexx@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Instagram className="h-6 w-6 text-pink-500" />
                  Instagram
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Follow for updates and connect
                </p>
                <a 
                  href="https://www.instagram.com/suryavamshiiii" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  @suryavamshiiii
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-green-500" />
                Share Your Thoughts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                VOYCE is a community-driven space. Your stories, feedback, and ideas help shape what we build. 
                Visit our <a href={`${BASE_PATH}/thoughts`} className="text-primary hover:underline">Thoughts page</a> to share your voice.
              </p>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </>
  );
}
