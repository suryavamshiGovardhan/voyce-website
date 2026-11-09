
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Book, FileText, Video, Globe, Star, Calendar, User } from "lucide-react";
import { hapticFeedback } from "@/utils/hapticFeedback";

interface Resource {
  type: 'research' | 'book' | 'article' | 'video' | 'website' | 'organization';
  title: string;
  description: string;
  url: string;
  author?: string;
  year?: string;
  rating?: number;
  source: string;
  imageUrl?: string;
}

interface ComprehensiveContentProps {
  topic: string;
  resources: Resource[];
  statistics?: Array<{ label: string; value: string; source: string }>;
  keyFacts?: string[];
}

const getResourceIcon = (type: string) => {
  switch (type) {
    case 'research': return <FileText className="h-4 w-4" />;
    case 'book': return <Book className="h-4 w-4" />;
    case 'article': return <FileText className="h-4 w-4" />;
    case 'video': return <Video className="h-4 w-4" />;
    case 'website': return <Globe className="h-4 w-4" />;
    case 'organization': return <Globe className="h-4 w-4" />;
    default: return <ExternalLink className="h-4 w-4" />;
  }
};

const getResourceColor = (type: string) => {
  switch (type) {
    case 'research': return 'bg-muted text-primary border-border';
    case 'book': return 'bg-muted text-primary border-border';
    case 'article': return 'bg-muted text-primary border-border';
    case 'video': return 'bg-muted text-primary border-border';
    case 'website': return 'bg-muted text-primary border-border';
    case 'organization': return 'bg-muted text-primary border-border';
    default: return 'bg-primary/10 text-muted-foreground border-border/30';
  }
};

export default function ComprehensiveContent({ topic, resources, statistics, keyFacts }: ComprehensiveContentProps) {
  const handleResourceClick = (url: string) => {
    hapticFeedback.onNavigation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-12">
      {/* Statistics Section */}
      {statistics && (
        <Card className="bg-card border-border/20 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground flex items-center">
              📊 {topic} Statistics & Facts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {statistics.map((stat, index) => (
                <div key={index} className="bg-muted p-4 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-foreground font-medium mb-1">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">Source: {stat.source}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Key Facts */}
      {keyFacts && (
        <Card className="bg-card border-border/20 shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-2xl text-foreground">🔍 Key Facts About {topic}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFacts.map((fact, index) => (
                <div key={index} className="flex items-start space-x-3 bg-muted p-4 rounded-xl">
                  <div className="bg-primary w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground text-sm">{fact}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Resources Grid */}
      <Card className="bg-card border-border/20 shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl text-foreground">
            🌐 Comprehensive {topic} Resources
          </CardTitle>
          <p className="text-muted-foreground">
            Latest research, books, articles, and resources from trusted sources worldwide
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="cursor-pointer bg-muted border-border hover:bg-muted transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                onClick={() => handleResourceClick(resource.url)}
              >
                {resource.imageUrl && (
                  <div className="relative h-32 overflow-hidden rounded-t-lg">
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <Badge className={`${getResourceColor(resource.type)} text-xs`}>
                        {getResourceIcon(resource.type)}
                        <span className="ml-1 capitalize">{resource.type}</span>
                      </Badge>
                      {resource.rating && (
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-primary fill-current" />
                          <span className="text-muted-foreground text-xs">{resource.rating}</span>
                        </div>
                      )}
                    </div>
                    
                    <h4 className="text-foreground font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                      {resource.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-xs line-clamp-3">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="space-y-1">
                        {resource.author && (
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3 text-muted-foreground" />
                            <span className="text-muted-foreground text-xs">{resource.author}</span>
                          </div>
                        )}
                        {resource.year && (
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-3 w-3 text-muted-foreground" />
                            <span className="text-muted-foreground text-xs">{resource.year}</span>
                          </div>
                        )}
                        <span className="text-xs text-muted-foreground">{resource.source}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground text-sm mb-4">
              Resources are continuously updated from trusted global sources
            </p>
            <Button
              variant="outline"
              className="border-border text-primary hover:bg-muted"
              onClick={() => hapticFeedback.onClick()}
            >
              <Globe className="h-4 w-4 mr-2" />
              Explore More Resources
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
