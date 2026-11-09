
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { hapticFeedback } from "@/utils/hapticFeedback";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      window.open('https://mailchi.mp/7027ec706d26/on-a-purpose', '_blank');
      hapticFeedback.onClick();
    }
  };

  return (
    <section id="newsletter-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card backdrop-blur-sm border-primary/20 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <Mail className="h-16 w-16 text-primary mx-auto mb-6 float-3d" />
              <h2 className="text-3xl font-light text-foreground mb-4">✉️ Join the VOYCE Letter</h2>
              <p className="text-xl text-muted-foreground">1 Insightful Email Every Week</p>
              <p className="text-sm text-muted-foreground mt-2">Deep insights on mental health, stress management, and emotional intelligence</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-primary/20 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button 
                onClick={handleSubscribe}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl haptic-btn"
              >
                Subscribe Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
