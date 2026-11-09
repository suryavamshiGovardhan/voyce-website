
import { ArrowRight, BookOpen, Brain, Heart, Microscope, Users, Zap, Sparkles, Globe, TreePine } from 'lucide-react';
import { BASE_PATH } from "@/lib/site";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const exploreCategories = [
  {
    icon: Brain,
    title: "Neuroscience",
    description: "Dive deep into brain function, neuroplasticity, and the latest research in cognitive science",
    color: "from-blue-500 to-indigo-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-border",
    link: "/neuroscience"
  },
  {
    icon: Heart,
    title: "Emotional Wellness",
    description: "Understanding trauma, stress, and building emotional resilience through evidence-based approaches",
    color: "from-pink-500 to-rose-600",
    textColor: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-border",
    link: "/trauma"
  },
  {
    icon: TreePine,
    title: "Mind-Body Connection",
    description: "Explore the intricate relationship between mind, heart, and gut through holistic wisdom",
    color: "from-green-500 to-emerald-600",
    textColor: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-border",
    link: "/mind-heart-gut"
  },
  {
    icon: Zap,
    title: "ADHD & Focus",
    description: "Comprehensive resources for attention, hyperactivity, and executive function challenges",
    color: "from-yellow-500 to-orange-600",
    textColor: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-border",
    link: "/adhd"
  },
  {
    icon: Users,
    title: "Educational Impact",
    description: "VOYCE framework for schools, transforming mental health support in educational settings",
    color: "from-purple-500 to-violet-600",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-border",
    link: "/schools"
  },
  {
    icon: Globe,
    title: "Cultural Wisdom",
    description: "Ancient healing practices from around the world integrated with modern psychology",
    color: "from-teal-500 to-cyan-600",
    textColor: "text-teal-600",
    bgColor: "bg-teal-50",
    borderColor: "border-border",
    link: "/library"
  }
];

const FloatingIcon = ({ icon: Icon, delay, position }: { icon: any, delay: number, position: string }) => (
  <div 
    className={`absolute ${position} opacity-10 animate-float pointer-events-none`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${8 + Math.random() * 4}s`
    }}
  >
    <Icon className="w-12 h-12 text-muted-foreground transform hover:scale-150 transition-transform duration-500" />
  </div>
);

export default function ExploreSection() {
  return (
    <section id="explore-section" className="relative py-32 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden">
      {/* Floating Background Icons */}
      <div className="absolute inset-0">
        <FloatingIcon icon={Sparkles} delay={0} position="top-20 left-20" />
        <FloatingIcon icon={Brain} delay={2} position="top-32 right-24" />
        <FloatingIcon icon={Heart} delay={4} position="bottom-32 left-32" />
        <FloatingIcon icon={Microscope} delay={1} position="bottom-20 right-20" />
        <FloatingIcon icon={BookOpen} delay={3} position="top-1/2 left-10" />
        <FloatingIcon icon={Zap} delay={5} position="top-1/3 right-16" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
               backgroundSize: '60px 60px',
               animation: 'grid-pulse 15s ease-in-out infinite'
             }} />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Header Section with 3D Effects */}
        <div className="mb-20 transform hover:scale-105 transition-all duration-700">
          <div className="flex items-center justify-center mb-8 space-x-6">
            <div className="relative">
              <BookOpen className="w-16 h-16 text-blue-500 animate-bounce transform hover:rotate-12 transition-all duration-500" />
              <div className="absolute inset-0 bg-muted rounded-full blur-xl animate-pulse" />
            </div>
            <div className="relative">
              <Globe className="w-20 h-20 text-green-500 animate-spin-slow transform hover:scale-125 transition-all duration-700" />
              <div className="absolute inset-0 bg-muted rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            <div className="relative">
              <Sparkles className="w-16 h-16 text-purple-500 animate-pulse transform hover:-rotate-12 transition-all duration-500" />
              <div className="absolute inset-0 bg-muted rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-green-800 bg-clip-text text-transparent leading-tight">
            Explore the VOYCE Universe
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 mx-auto mb-8 rounded-full transform hover:scale-150 transition-all duration-500" />
          
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-4xl mx-auto font-light">
            Dive deep into the science of mind, body, and well-being. Our comprehensive guides blend 
            <span className="font-semibold text-blue-600"> cutting-edge neuroscience</span>, 
            <span className="font-semibold text-green-600"> ancient wisdom</span>, and 
            <span className="font-semibold text-purple-600"> cultural insights</span> for holistic mental health understanding.
          </p>
        </div>

        {/* Enhanced Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {exploreCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`group relative overflow-hidden border-2 ${category.borderColor} bg-white/80 backdrop-blur-sm hover:bg-white/95 transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 shadow-xl hover:shadow-2xl cursor-pointer`}
              style={{
                animationDelay: `${index * 0.1}s`,
                boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-card transform scale-0 group-hover:scale-100 rounded-full transition-transform duration-700 origin-center" />
              </div>

              <CardContent className="relative z-10 p-8 text-center">
                {/* Icon with 3D Effect */}
                <div className={`relative mb-6 inline-flex p-4 rounded-2xl ${category.bgColor} group-hover:scale-110 transition-all duration-500`}>
                  <category.icon className={`w-12 h-12 ${category.textColor} transform group-hover:rotate-12 transition-all duration-500`} />
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-bold mb-4 ${category.textColor} group-hover:scale-105 transition-transform duration-300`}>
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-800 transition-colors duration-300">
                  {category.description}
                </p>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className={`group/btn w-full border-2 ${category.borderColor} ${category.textColor} hover:bg-gradient-to-r ${category.color} hover:text-primary-foreground hover:border-transparent transform hover:scale-105 transition-all duration-300`}
                  asChild
                >
                  <a href={category.link} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </a>
                </Button>

                {/* Floating Sparkles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <Sparkles 
                      key={i}
                      className="absolute w-3 h-3 text-foreground/60 animate-ping"
                      style={{
                        left: `${15 + i * 12}%`,
                        top: `${10 + (i % 3) * 30}%`,
                        animationDelay: `${i * 100}ms`
                      }}
                    />
                  ))}
                </div>
              </CardContent>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className={`w-8 h-8 border-2 ${category.borderColor} rounded-full animate-spin-slow`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-12 text-primary-foreground overflow-hidden transform hover:scale-105 transition-all duration-700">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          
          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float opacity-20"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${8 + Math.random() * 6}s`
                }}
              >
                <div className="w-2 h-2 bg-white rounded-full transform hover:scale-300 transition-transform duration-500" />
              </div>
            ))}
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Understanding?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Explore the power of integrated mental health wisdom at your own pace
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="bg-card backdrop-blur-sm border border-border hover:bg-muted text-foreground px-10 py-4 text-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
                asChild
              >
                <a href={`${BASE_PATH}/path`}>
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white/50 text-foreground hover:bg-white hover:text-slate-800 px-10 py-4 text-lg transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
                asChild
              >
                <a href={`${BASE_PATH}/library`}>
                  Browse Library
                  <BookOpen className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
