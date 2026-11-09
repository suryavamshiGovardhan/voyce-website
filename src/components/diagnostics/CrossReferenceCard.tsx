import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import { ICD9ToDSM5CrossReference } from "@/data/icd9ToDsm5Mapping";
import { useNavigate } from "react-router-dom";

interface CrossReferenceCardProps {
  reference: ICD9ToDSM5CrossReference;
  showFrom?: "icd9" | "dsm5";
}

export function CrossReferenceCard({ reference, showFrom = "icd9" }: CrossReferenceCardProps) {
  const navigate = useNavigate();

  const getRelationshipColor = (relationship: string) => {
    switch (relationship) {
      case "exact":
        return "bg-primary/10 text-primary border-primary/40";
      case "approximate":
        return "bg-primary/10 text-amber-700 border-amber-300";
      case "broader":
        return "bg-primary/10 text-primary border-primary/40";
      case "narrower":
        return "bg-primary/10 text-primary border-primary/40";
      default:
        return "bg-muted-foreground/10 text-foreground border-border/20";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {showFrom === "icd9" ? (
              <>
                <CardTitle className="text-lg mb-1">
                  {reference.icd9Code} - {reference.icd9Title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  Maps to: <span className="font-medium">{reference.dsm5Disorder}</span>
                </CardDescription>
              </>
            ) : (
              <>
                <CardTitle className="text-lg mb-1">
                  {reference.dsm5Disorder}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4" />
                  ICD-9 Code: <span className="font-mono font-medium">{reference.icd9Code}</span>
                </CardDescription>
              </>
            )}
          </div>
          <Badge className={getRelationshipColor(reference.relationship)} variant="outline">
            {reference.relationship}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {showFrom === "icd9" && (
            <Badge variant="secondary">
              DSM-5: {reference.dsm5Category}
            </Badge>
          )}
          {showFrom === "dsm5" && (
            <Badge variant="secondary">
              ICD-9: {reference.icd9Title}
            </Badge>
          )}
        </div>

        {reference.notes && (
          <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-md">
            <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">{reference.notes}</p>
          </div>
        )}

        <div className="flex gap-2 pt-2">
          {showFrom === "icd9" ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/dsm5")}
              className="flex-1"
            >
              View DSM-5 Details
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/icd9")}
              className="flex-1"
            >
              View ICD-9 Details
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
