
import { Button } from "@/components/ui/button";
import JapaneseIcon from "@/components/JapaneseIcon";

export default function CallToActionSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <JapaneseIcon type="lotus" className="text-primary w-16 h-16 mx-auto mb-8 float-3d" />
        <h2 className="text-4xl md:text-5xl font-light text-foreground mb-12 leading-relaxed">
          Before you heal the world,<br />
          you must hear your own VOYCE
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-12 py-4 rounded-2xl text-lg haptic-btn shadow-lg"
          >
            Start Today
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-amber-300 text-amber-700 hover:bg-amber-50 px-12 py-4 rounded-2xl text-lg haptic-btn"
          >
            Contact Us
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/40 text-primary hover:bg-muted px-12 py-4 rounded-2xl text-lg haptic-btn"
          >
            Join the Movement
          </Button>
        </div>
        
        <div className="border-t border-primary/20 pt-8">
          <p className="text-muted-foreground italic">
            Website built for VOYCE – founded by S. Suryavamshi<br />
            Inspired by rural narratives, brain science, emotional healing, and personal truth
          </p>
        </div>
      </div>
    </section>
  );
}
