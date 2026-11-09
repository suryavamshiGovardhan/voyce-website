
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building, Users, GraduationCap, Heart, ExternalLink } from "lucide-react";

export default function GovernmentSchemes() {
  const schemes = [
    {
      name: "National Mental Health Programme (NMHP)",
      category: "Mental Health",
      description: "Comprehensive mental health services including treatment and rehabilitation",
      eligibility: "All citizens",
      icon: Heart,
      link: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1043&lid=359"
    },
    {
      name: "District Mental Health Programme",
      category: "Mental Health",
      description: "Community-based mental health services at district level",
      eligibility: "Rural & Urban residents",
      icon: Building,
      link: "https://nhm.gov.in/"
    },
    {
      name: "Ayushman Bharat",
      category: "Healthcare",
      description: "Health insurance coverage including mental health services",
      eligibility: "Eligible families below poverty line",
      icon: Users,
      link: "https://pmjay.gov.in/"
    },
    {
      name: "Post Matric Scholarship",
      category: "Education",
      description: "Financial support for students from marginalized communities",
      eligibility: "SC/ST/OBC students",
      icon: GraduationCap,
      link: "https://scholarships.gov.in/"
    }
  ];

  const categoryColors = {
    "Mental Health": "bg-primary/10 text-foreground",
    "Healthcare": "bg-primary/10 text-foreground",
    "Education": "bg-primary/10 text-foreground"
  };

  return (
    <Card className="bg-card backdrop-blur-sm border-primary/20 shadow-lg">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center text-foreground">
          <Building className="h-6 w-6 mr-2 text-primary" />
          Government Support Schemes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {schemes.map((scheme, index) => (
          <div key={index} className="p-4 rounded-lg border bg-primary/10 border-border hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start space-x-3">
                <scheme.icon className="h-5 w-5 mt-1 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-medium text-foreground">{scheme.name}</h4>
                    <Badge className={categoryColors[scheme.category as keyof typeof categoryColors]}>
                      {scheme.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{scheme.description}</p>
                  <p className="text-xs text-muted-foreground">
                    <strong>Eligibility:</strong> {scheme.eligibility}
                  </p>
                </div>
              </div>
            </div>
            <Button 
              asChild 
              size="sm" 
              variant="outline"
              className="w-full border-primary/20 hover:bg-muted"
            >
              <a href={scheme.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                Learn More <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </Button>
          </div>
        ))}
        
        <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
          <p className="text-sm text-foreground">
            <strong>Note:</strong> Eligibility criteria may vary. Visit official websites or contact local offices for detailed information and application procedures.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
