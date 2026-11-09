import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageHero, NextStep, LeaveWith } from "@/components/site/value";

import { hapticFeedback } from "@/utils/hapticFeedback";
import { psychologyTheories, searchTheories, getTheoriesByCategory, getTheoriesByDifficulty } from "@/data/psychologyTheories";
import { 
  Brain, Search, Filter, Book, Users, Lightbulb, Heart, 
  GraduationCap, Microscope, TreePine, Target, Star, Clock,
  User, Award, AlertTriangle, CheckCircle, ArrowRight
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

const categoryIcons = {
  developmental: <User className="h-4 w-4" />,
  cognitive: <Brain className="h-4 w-4" />,
  behavioral: <Target className="h-4 w-4" />,
  humanistic: <Heart className="h-4 w-4" />,
  social: <Users className="h-4 w-4" />,
  clinical: <Microscope className="h-4 w-4" />,
  educational: <GraduationCap className="h-4 w-4" />,
  positive: <Star className="h-4 w-4" />,
  neuroscience: <TreePine className="h-4 w-4" />,
  philosophical: <Lightbulb className="h-4 w-4" />
};

const difficultyColors = {
  basic: "bg-primary/10 text-primary dark:bg-green-900 dark:text-primary",
  intermediate: "bg-amber-50 text-amber-700 dark:bg-yellow-900 dark:text-primary",
  advanced: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-primary"
};

export default function TheoriesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [expandedTheory, setExpandedTheory] = useState<string | null>(null);

  const filteredTheories = useMemo(() => {
    let theories = psychologyTheories;
    
    if (searchTerm) {
      theories = searchTheories(searchTerm);
    }
    
    if (selectedCategory !== "all") {
      theories = theories.filter(theory => theory.category === selectedCategory);
    }
    
    if (selectedDifficulty !== "all") {
      theories = theories.filter(theory => theory.difficulty === selectedDifficulty);
    }
    
    return theories;
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const toggleExpanded = (theoryId: string) => {
    setExpandedTheory(expandedTheory === theoryId ? null : theoryId);
    hapticFeedback.onClick();
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedDifficulty("all");
    hapticFeedback.onClick();
  };

  return (
    <>
      <SEOHead 
        title="Psychology Theories"
        description="Comprehensive guide to over 100 psychology theories from developmental to neuroscience. Search, filter, and explore theories from basic to advanced levels."
        keywords="psychology theories, cognitive psychology, behavioral psychology, developmental psychology, psychotherapy theories, VOYCE"
      />
      <div className="v-legacy min-h-screen bg-background">
        <Navbar />
      
      <PageHero eyebrow="Learn · Theories" title={<>The ideas behind <span className="text-primary">how people grow.</span></>} lede="A searchable library of psychology, education and human-development theories — each explained in plain language, from basic to advanced." />
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <LeaveWith className="mb-12" items={["Plain-language summaries of major theories", "Who proposed each idea, and when", "Filters from beginner to advanced", "Ideas you can use in class, workshops or your own life"]} />
        <div className="mb-12 text-center">
          <div className="flex justify-center mt-8">
            <Badge className="bg-muted text-primary text-lg px-6 py-2">
              <Book className="h-5 w-5 mr-2" />
              {psychologyTheories.length}+ Theories Available
            </Badge>
          </div>
        </div>

        {/* Search and Filter Section */}
        <Card className="bg-card border-border shadow-xl rounded-2xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              <Search className="h-6 w-6 mr-3 text-primary" />
              Explore & Filter Theories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search theories, originators, or concepts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border text-foreground placeholder-slate-400"
              />
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-card border-border text-foreground">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-muted border-border">
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="developmental">Developmental</SelectItem>
                  <SelectItem value="cognitive">Cognitive</SelectItem>
                  <SelectItem value="behavioral">Behavioral</SelectItem>
                  <SelectItem value="humanistic">Humanistic</SelectItem>
                  <SelectItem value="social">Social</SelectItem>
                  <SelectItem value="clinical">Clinical</SelectItem>
                  <SelectItem value="educational">Educational</SelectItem>
                  <SelectItem value="positive">Positive Psychology</SelectItem>
                  <SelectItem value="neuroscience">Neuroscience</SelectItem>
                  <SelectItem value="philosophical">Philosophical</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger className="bg-card border-border text-foreground">
                  <SelectValue placeholder="Select Difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-muted border-border">
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="basic">Basic</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>

              <Button 
                onClick={clearFilters}
                variant="outline" 
                className="border-border text-primary hover:bg-muted"
              >
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                {filteredTheories.length} theories found
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Theories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTheories.map((theory) => (
            <Card 
              key={theory.id}
              className="cursor-pointer bg-muted border-border hover:bg-muted transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => toggleExpanded(theory.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge className={`${difficultyColors[theory.difficulty]} capitalize`}>
                    {theory.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {categoryIcons[theory.category]}
                    <span className="ml-1 capitalize">{theory.category}</span>
                  </Badge>
                </div>
                <CardTitle className="text-foreground text-lg line-clamp-2">
                  {theory.name}
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  {theory.originators.split(' - ')[0]} • {theory.yearOrigin}
                </p>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {theory.coreIdea}
                </p>
                
                {expandedTheory === theory.id && (
                  <div className="space-y-4 animate-fade-in">
                    <div>
                      <h4 className="text-foreground font-medium text-sm mb-2 flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        Historical Context
                      </h4>
                      <p className="text-muted-foreground text-xs">{theory.historicalContext}</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-medium text-sm mb-2 flex items-center">
                        <Lightbulb className="h-4 w-4 mr-2 text-primary" />
                        Key Concepts
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {theory.keyConcepts.slice(0, 4).map((concept, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {concept}
                          </Badge>
                        ))}
                        {theory.keyConcepts.length > 4 && (
                          <Badge variant="secondary" className="text-xs">
                            +{theory.keyConcepts.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-foreground font-medium text-sm mb-2 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-primary" />
                        VOYCE Connection
                      </h4>
                      <p className="text-muted-foreground text-xs">{theory.voyceConnection}</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-medium text-sm mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-primary" />
                        Practical Applications
                      </h4>
                      <ul className="text-muted-foreground text-xs space-y-1">
                        {theory.practicalApplications.slice(0, 3).map((app, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-3 w-3 mr-1 mt-0.5 text-primary flex-shrink-0" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground font-medium text-sm mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-primary" />
                        Limitations & Criticisms
                      </h4>
                      <ul className="text-muted-foreground text-xs space-y-1">
                        {theory.criticisms.slice(0, 2).map((criticism, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-3 w-3 mr-1 mt-0.5 text-primary flex-shrink-0" />
                            {criticism}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full mt-4 text-primary hover:text-primary"
                >
                  {expandedTheory === theory.id ? "Show Less" : "Learn More"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Educational Resources Section */}
        <Card className="bg-card border-border shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl text-foreground text-center">
              Using This Library for VOYCE Programs
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Tabs defaultValue="workshops" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-card">
                <TabsTrigger value="workshops">Workshop Design</TabsTrigger>
                <TabsTrigger value="schools">School Programs</TabsTrigger>
                <TabsTrigger value="rural">Rural Outreach</TabsTrigger>
              </TabsList>

              <TabsContent value="workshops" className="space-y-4">
                <h3 className="text-xl text-foreground mb-4">VOYCE Workshop Integration</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-lg text-primary">Basic Level Workshops</h4>
                    <p className="text-muted-foreground text-sm">Start with foundational theories like Maslow's Hierarchy, Growth Mindset, and Positive Psychology for accessible mental health education.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg text-primary">Advanced Programs</h4>
                    <p className="text-muted-foreground text-sm">Incorporate complex theories like Polyvagal Theory and Internal Family Systems for deeper therapeutic understanding.</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="schools" className="space-y-4">
                <h3 className="text-xl text-foreground mb-4">Educational Institution Programs</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">Adapt theories by age group and educational level, focusing on practical applications for student mental health and learning.</p>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Elementary: Basic emotional intelligence and resilience concepts</li>
                    <li>• Middle School: Social learning theory and peer relationships</li>
                    <li>• High School: Identity development and stress management</li>
                    <li>• University: Advanced psychological concepts and self-actualization</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="rural" className="space-y-4">
                <h3 className="text-xl text-foreground mb-4">Rural & Community Outreach</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">Simplify complex theories for community education, focusing on practical mental health tools and cultural sensitivity.</p>
                  <div className="bg-muted rounded-lg p-4">
                    <h4 className="text-primary mb-2">Cultural Adaptation Guidelines</h4>
                    <p className="text-muted-foreground text-sm">Consider local customs, languages, and belief systems when presenting psychological theories. Focus on universal human experiences while respecting cultural diversity.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <NextStep title="Want the ideas in story form?" body="The Unheard Mind explains eight concepts through real stories." primary={{ to: "/series", label: "Read the series" }} secondary={{ to: "/library", label: "Open the library" }} />
      <Footer />
    </div>
    </>
  );
}