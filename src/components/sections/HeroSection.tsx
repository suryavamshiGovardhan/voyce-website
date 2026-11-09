
import { useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Leaf, Mail } from "lucide-react";
import JapaneseIcon from "@/components/JapaneseIcon";
import { hapticFeedback } from "@/utils/hapticFeedback";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = heroRef.current;
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/50 via-white/80 to-orange-100/50" />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-30 sakura-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            <JapaneseIcon type="cherry" className="text-green-400 w-4 h-4" animate={false} />
          </div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <JapaneseIcon type="lotus" className="text-green-500 w-20 h-20 mx-auto mb-6 float-3d" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-light text-slate-800 mb-6 slide-3d-enter">
          <span className="text-green-600">V</span>
          <span className="text-orange-500">O</span>
          <span className="text-green-600">Y</span>
          <span className="text-orange-500">C</span>
          <span className="text-green-600">E</span>
          <span className="text-purple-600">-X</span>
        </h1>
        
        <div className="flex items-center justify-center space-x-4 mb-8">
          <JapaneseIcon type="wave" className="text-green-400" />
          <p className="text-2xl md:text-3xl text-slate-600 italic font-light">
            A whisper to the soul, a voice to the mind
          </p>
          <JapaneseIcon type="bamboo" className="text-orange-400" />
        </div>
        
        <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          Mental Clarity, Emotional Freedom – Healing starts with hearing your own voice
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-12 py-4 rounded-2xl text-lg haptic-btn shadow-lg"
            onClick={() => {
              document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
              hapticFeedback.onClick();
            }}
          >
            Explore VOYCE
            <Leaf className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-orange-400 text-orange-600 hover:bg-orange-50 px-12 py-4 rounded-2xl text-lg haptic-btn"
            onClick={() => {
              document.getElementById('newsletter-section')?.scrollIntoView({ behavior: 'smooth' });
              hapticFeedback.onClick();
            }}
          >
            Join Newsletter
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
