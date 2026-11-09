
import { Card, CardContent } from "@/components/ui/card";
import { Waves, Heart, Shield } from "lucide-react";
import JapaneseIcon from "@/components/JapaneseIcon";

export default function AboutSection() {
  return (
    <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <JapaneseIcon type="zen" className="text-primary w-12 h-12 mx-auto mb-6" />
          <h2 className="text-4xl font-light text-foreground mb-8">The VOYCE Story</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-foreground">Rural India's Silent Crisis</h3>
            <p className="text-muted-foreground leading-relaxed">
              In the villages and small towns of India, young minds carry burdens too heavy for their hearts. 
              Educational pressure, economic uncertainty, family expectations, and limited mental health resources 
              create a perfect storm of emotional distress.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Founded by S. Suryavamshi, VOYCE emerges from personal experience and deep understanding of 
              rural narratives, brain science, and emotional healing through immersive soundscapes.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&q=80" 
              alt="Rural landscape representing youth challenges"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <Card className="bg-card backdrop-blur-sm border-primary/20 shadow-lg rounded-2xl mb-16">
          <CardContent className="p-8">
            <h4 className="text-xl font-medium text-primary mb-6 text-center">Core Pillars of VOYCE</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="h-8 w-8 text-primary" />
                </div>
                <h5 className="font-medium text-foreground mb-2">Voice</h5>
                <p className="text-sm text-muted-foreground">Expression without judgment, authentic self-communication</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-amber-700" />
                </div>
                <h5 className="font-medium text-foreground mb-2">Vulnerability</h5>
                <p className="text-sm text-muted-foreground">Strength found in openness and emotional honesty</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <h5 className="font-medium text-foreground mb-2">Validation</h5>
                <p className="text-sm text-muted-foreground">Acceptance and recognition of your authentic truth</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
