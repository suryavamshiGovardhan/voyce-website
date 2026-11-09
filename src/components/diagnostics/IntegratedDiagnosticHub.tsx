import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Stethoscope, Link as LinkIcon } from "lucide-react";
import { CaseStudyCard } from "./CaseStudyCard";
import { CrossReferenceCard } from "./CrossReferenceCard";
import { dsm5CaseStudies } from "@/data/dsm5CaseStudies";
import { icd9ToDsm5Mapping } from "@/data/icd9ToDsm5Mapping";

export function IntegratedDiagnosticHub() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCaseStudies = dsm5CaseStudies.filter(
    (cs) =>
      cs.disorderName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.disorderCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.patientProfile.presenting_complaint.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredCrossReferences = icd9ToDsm5Mapping.filter(
    (ref) =>
      ref.icd9Code.includes(searchQuery) ||
      ref.icd9Title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.dsm5Disorder.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <CardHeader className="text-center space-y-4 pb-8">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <Stethoscope className="h-12 w-12 text-primary" />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold">
            Integrated Diagnostic Resource Hub
          </CardTitle>
          <CardDescription className="text-lg max-w-3xl mx-auto">
            Comprehensive mental health diagnostic resource combining ICD-9-CM medical codes,
            DSM-5 diagnostic criteria, fictional teaching case examples, and cross-reference mappings
            for clinical education and awareness.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search disorders, ICD-9 codes, case studies, or symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </CardContent>
      </Card>

      {/* Tabbed Content */}
      <Tabs defaultValue="cases" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="cases" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Case Studies ({filteredCaseStudies.length})
          </TabsTrigger>
          <TabsTrigger value="references" className="flex items-center gap-2">
            <LinkIcon className="h-4 w-4" />
            Cross-References ({filteredCrossReferences.length})
          </TabsTrigger>
          <TabsTrigger value="info" className="flex items-center gap-2">
            <Stethoscope className="h-4 w-4" />
            System Information
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cases" className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Fictional teaching case examples</h3>
              <Badge variant="secondary">{filteredCaseStudies.length} Cases</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Fictional educational case examples demonstrating clinical presentation, assessment,
              differential diagnosis, and evidence-based treatment approaches.
            </p>
          </div>

          {filteredCaseStudies.length > 0 ? (
            <div className="grid gap-6">
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">
                  No case studies found matching your search.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="references" className="space-y-6 mt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">ICD-9-CM ↔ DSM-5 Cross-References</h3>
              <Badge variant="secondary">{filteredCrossReferences.length} Mappings</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Comprehensive mapping between ICD-9-CM medical billing codes and DSM-5 diagnostic
              criteria, helping clinicians understand the relationship between coding and diagnosis.
            </p>
          </div>

          {filteredCrossReferences.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredCrossReferences.map((ref, idx) => (
                <CrossReferenceCard key={idx} reference={ref} showFrom="icd9" />
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-muted-foreground">
                  No cross-references found matching your search.
                </p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="info" className="space-y-6 mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  ICD-9-CM System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The International Classification of Diseases, 9th Revision, Clinical Modification
                  (ICD-9-CM) is a system used to assign diagnostic and procedure codes for medical
                  billing, epidemiology, and health management.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Used primarily for medical billing and insurance claims</li>
                    <li>• Numeric codes organized by medical condition</li>
                    <li>• Codes range from 001-999 (diseases) plus E and V codes</li>
                    <li>• Being gradually replaced by ICD-10 in many countries</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  DSM-5 System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  The Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition (DSM-5)
                  is the authoritative guide for psychiatric diagnosis, published by the American
                  Psychiatric Association.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Provides diagnostic criteria for mental disorders</li>
                    <li>• Includes cultural considerations and severity measures</li>
                    <li>• Organized by developmental and phenomenological categories</li>
                    <li>• Used worldwide for clinical, research, and educational purposes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LinkIcon className="h-5 w-5 text-primary" />
                  Why Cross-Reference Both Systems?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Understanding the relationship between ICD-9-CM and DSM-5 is crucial for mental
                  health professionals:
                </p>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Clinical Practice</h4>
                    <p className="text-sm text-muted-foreground">
                      Clinicians need both systems: DSM-5 for diagnosis and ICD-9 for billing and
                      medical records.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Communication</h4>
                    <p className="text-sm text-muted-foreground">
                      Different healthcare professionals may use different systems, making
                      cross-reference essential.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Education</h4>
                    <p className="text-sm text-muted-foreground">
                      Understanding both systems provides comprehensive diagnostic literacy for
                      students and educators.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
