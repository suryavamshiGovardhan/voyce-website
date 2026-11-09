
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function ComprehensiveContent({ topic, resources, keyFacts }: ComprehensiveContentProps) {
  const handleResourceClick = (url: string) => {
    hapticFeedback.onNavigation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-12">
      {/* Figures are intentionally not rendered: only sourced, dated figures belong on VOYCE. */}
      {/* Key Facts */}
      {keyFacts && (
        <Card className="bg-card border-border/20 ">
          <CardHeader>
            <CardTitle className="font-display text-2xl font-medium text-foreground">A few things worth knowing</CardTitle>
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
      <Card className="bg-card border-border/20 ">
        <CardHeader>
          <CardTitle className="font-display text-2xl font-medium text-foreground">
            Further reading
          </CardTitle>
          <p className="text-muted-foreground">
            Books, research and organisations if you want to go deeper. Links open on other sites.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card
                key={index}
                className="v-card-hover cursor-pointer bg-card border-border transition-shadow group"
                onClick={() => handleResourceClick(resource.url)}
              >
                {resource.imageUrl && (
                  <div className="relative h-32 overflow-hidden rounded-t-lg">
                    <img 
                      src={resource.imageUrl} 
                      alt={resource.title}
                      className="w-full h-full object-cover" loading="lazy"
                    />
                    
                  </div>
                )}
                
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <Badge className={`${getResourceColor(resource.type)} text-xs`}>
                        {getResourceIcon(resource.type)}
                        <span className="ml-1 capitalize">{resource.type}</span>
                      </Badge>
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
          
        </CardContent>
      </Card>
    </div>
  );
}
