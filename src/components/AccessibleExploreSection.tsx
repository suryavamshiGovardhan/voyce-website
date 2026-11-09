/**
 * Accessible Explore Section Component
 * - WCAG 2.2 AA compliant
 * - Semantic HTML structure
 * - Keyboard navigation support
 * - Proper ARIA labels and roles
 * - Optimized for performance
 */

import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Heart, Zap, Users, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ExploreCategory {
  icon: typeof Brain;
  title: string;
  description: string;
  colorClass: string;
  iconColorClass: string;
  bgColorClass: string;
  borderColorClass: string;
  link: string;
}

const exploreCategories: ExploreCategory[] = [
  {
    icon: Brain,
    title: "Neuroscience",
    description: "Explore brain function, neuroplasticity, and cognitive science research",
    colorClass: "from-primary to-primary/70",
    iconColorClass: "text-primary",
    bgColorClass: "bg-primary/10",
    borderColorClass: "border-border",
    link: "/neuroscience"
  },
  {
    icon: Heart,
    title: "Emotional Wellness",
    description: "Build emotional resilience through evidence-based approaches",
    colorClass: "from-pink-500 to-rose-600",
    iconColorClass: "text-primary",
    bgColorClass: "bg-primary/10",
    borderColorClass: "border-border",
    link: "/trauma"
  },
  {
    icon: Zap,
    title: "ADHD & Focus",
    description: "Resources for attention and executive function challenges",
    colorClass: "from-amber-500 to-orange-600",
    iconColorClass: "text-amber-700",
    bgColorClass: "bg-amber-50",
    borderColorClass: "border-border",
    link: "/adhd"
  },
  {
    icon: Users,
    title: "Schools Program",
    description: "VOYCE framework for mental health in educational settings",
    colorClass: "from-purple-500 to-violet-600",
    iconColorClass: "text-primary",
    bgColorClass: "bg-primary/10",
    borderColorClass: "border-border",
    link: "/schools"
  },
  {
    icon: BookOpen,
    title: "DSM-5 Academy",
    description: "Professional diagnostic criteria training and resources",
    colorClass: "from-primary to-primary/70",
    iconColorClass: "text-primary",
    bgColorClass: "bg-primary/10",
    borderColorClass: "border-border",
    link: "/dsm5-academy"
  },
  {
    icon: Globe,
    title: "Resource Library",
    description: "Cultural wisdom integrated with modern psychology",
    colorClass: "from-primary to-primary/70",
    iconColorClass: "text-primary",
    bgColorClass: "bg-primary/10",
    borderColorClass: "border-border",
    link: "/library"
  }
];

// Memoized category card for performance
const CategoryCard = memo(({ category, index }: { category: ExploreCategory; index: number }) => {
  const Icon = category.icon;
  
  return (
    <Card 
      className={`group relative overflow-hidden border-2 ${category.borderColorClass} bg-card hover:bg-card/95 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary`}
      role="article"
      aria-labelledby={`category-title-${index}`}
    >
      {/* Hover gradient overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${category.colorClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        aria-hidden="true"
      />
      
      <CardContent className="relative z-10 p-6 text-center">
        {/* Icon */}
        <div 
          className={`inline-flex p-3 rounded-xl ${category.bgColorClass} mb-4 transition-transform duration-300 group-hover:scale-110`}
          aria-hidden="true"
        >
          <Icon className={`w-8 h-8 ${category.iconColorClass}`} />
        </div>

        {/* Title */}
        <h3 
          id={`category-title-${index}`}
          className={`text-xl font-semibold mb-3 ${category.iconColorClass}`}
        >
          {category.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {category.description}
        </p>

        {/* CTA Link */}
        <Button
          variant="outline"
          className={`w-full border-2 ${category.borderColorClass} ${category.iconColorClass} hover:bg-gradient-to-r ${category.colorClass} hover:text-primary-foreground hover:border-transparent transition-all duration-300 focus:ring-2 focus:ring-offset-2`}
          asChild
        >
          <Link 
            to={category.link}
            aria-label={`Learn more about ${category.title}`}
          >
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
});

CategoryCard.displayName = 'CategoryCard';

function AccessibleExploreSection() {
  return (
    <section 
      id="explore-section" 
      className="py-16 sm:py-24 px-4 bg-gradient-to-b from-background via-muted/30 to-background"
      aria-labelledby="explore-heading"
      role="region"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center mb-6 space-x-4" aria-hidden="true">
            <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
            <Globe className="w-12 h-12 sm:w-14 sm:h-14 text-accent-foreground" />
          </div>

          <h2 
            id="explore-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground"
          >
            Explore the VOYCE Universe
          </h2>
          
          {/* Decorative divider */}
          <div 
            className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mb-6 rounded-full"
            aria-hidden="true"
          />
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive guides blending{' '}
            <strong className="text-primary">neuroscience</strong>,{' '}
            <strong className="text-accent-foreground">ancient wisdom</strong>, and{' '}
            <strong className="text-secondary-foreground">cultural insights</strong>{' '}
            for holistic mental health.
          </p>
        </header>

        {/* Categories Grid */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
          role="list"
          aria-label="Explore categories"
        >
          {exploreCategories.map((category, index) => (
            <div key={category.title} role="listitem">
              <CategoryCard category={category} index={index} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div 
          className="bg-gradient-to-r from-primary via-accent to-secondary rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-primary-foreground"
          role="region"
          aria-labelledby="cta-heading"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 
              id="cta-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Transform Your Understanding?
            </h3>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              Explore integrated mental health wisdom at your own pace
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Button
                size="lg"
                className="bg-card backdrop-blur-sm border border-border hover:bg-muted text-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-white/50"
                asChild
              >
                <Link to="/path" aria-label="Start your mental wellness journey">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-foreground hover:bg-card hover:text-foreground px-8 py-4 text-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-white/50"
                asChild
              >
                <Link to="/library" aria-label="Browse the VOYCE resource library">
                  Browse Library
                  <BookOpen className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AccessibleExploreSection);
