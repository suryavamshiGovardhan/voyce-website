
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
    <section id="newsletter-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white/80 backdrop-blur-sm border-green-200 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <Mail className="h-16 w-16 text-green-600 mx-auto mb-6 float-3d" />
              <h2 className="text-3xl font-light text-slate-800 mb-4">✉️ Join the VOYCE Letter</h2>
              <p className="text-xl text-slate-600">1 Insightful Email Every Week</p>
              <p className="text-sm text-slate-500 mt-2">Deep insights on mental health, stress management, and emotional intelligence</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button 
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-xl haptic-btn"
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
