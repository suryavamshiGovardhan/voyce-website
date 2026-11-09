import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import SearchBar from "@/components/icd9/SearchBar";
import CodeTable from "@/components/icd9/CodeTable";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen } from "lucide-react";
import { icd9Categories, sampleICD9Codes } from "@/data/icd9Categories";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { getDSM5FromICD9 } from "@/data/icd9ToDsm5Mapping";
import { CrossReferenceCard } from "@/components/diagnostics/CrossReferenceCard";
import { Badge } from "@/components/ui/badge";

export default function ICD9DetailPage() {
  const { range } = useParams<{ range: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");

  const category = icd9Categories.find((cat) => cat.range === range);

  // Filter codes by category range and search query
  const filteredCodes = sampleICD9Codes.filter((code) => {
    const matchesCategory = category && 
      code.rangeStart === category.rangeStart && 
      code.rangeEnd === category.rangeEnd;
    
    const matchesSearch = 
      code.code.includes(searchQuery) ||
      code.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      code.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      code.symptoms?.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      code.causes?.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const languages = [
    { code: "en-US", name: "English" },
    { code: "hi-IN", name: "हिन्दी (Hindi)" },
    { code: "te-IN", name: "తెలుగు (Telugu)" },
    { code: "kn-IN", name: "ಕನ್ನಡ (Kannada)" },
    { code: "ta-IN", name: "தமிழ் (Tamil)" },
    { code: "es-ES", name: "Español (Spanish)" },
    { code: "fr-FR", name: "Français (French)" },
    { code: "de-DE", name: "Deutsch (German)" },
    { code: "zh-CN", name: "中文 (Chinese)" },
    { code: "ja-JP", name: "日本語 (Japanese)" }
  ];

  if (!category) {
    return (
      <>
        <Navbar />
        <div className="v-legacy min-h-screen flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold">Category not found</h1>
            <Button onClick={() => navigate("/icd9")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to ICD-9 Index
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`${category.range} - ${category.title} | ICD-9-CM - VOYCE`}
        description={category.description}
        keywords={`ICD-9, ${category.range}, ${category.title}, diagnostic codes`}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <main className="flex-1">
          {/* Header Section */}
          <section className="py-8 px-4 bg-gradient-to-b from-primary/5 to-background border-b">
            <div className="container mx-auto max-w-6xl">
              <Button
                variant="ghost"
                onClick={() => navigate("/icd9")}
                className="mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to ICD-9 Index
              </Button>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-primary text-primary-foreground rounded-md font-mono font-bold">
                      {category.range}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    {category.title}
                  </h1>
                  <p className="text-lg text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Language Selector and Search */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="w-full md:w-64">
                  <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang.code} value={lang.code}>
                          {lang.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1 w-full">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    placeholder="Search codes, symptoms, or causes..."
                  />
                </div>
              </div>

              {/* Results Count */}
              {searchQuery && (
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Found {filteredCodes.length} {filteredCodes.length === 1 ? 'code' : 'codes'}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* DSM-5 Cross-References */}
          {filteredCodes.length > 0 && (
            <section className="py-8 px-4 bg-muted/20">
              <div className="container mx-auto max-w-6xl">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="outline" className="px-3 py-1">
                      DSM-5 Cross-References
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Related DSM-5 Diagnostic Criteria</h2>
                  <p className="text-muted-foreground">
                    See how these ICD-9-CM codes map to DSM-5 psychiatric diagnoses
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {Array.from(new Set(filteredCodes.map(code => code.code)))
                    .slice(0, 6)
                    .flatMap(code => getDSM5FromICD9(code))
                    .map((ref, idx) => (
                      <CrossReferenceCard key={idx} reference={ref} showFrom="icd9" />
                    ))
                  }
                </div>
              </div>
            </section>
          )}

          {/* Codes Table */}
          <section className="py-8 px-4">
            <div className="container mx-auto max-w-6xl">
              <CodeTable codes={filteredCodes} language={selectedLanguage} />
              
              {filteredCodes.length === 0 && searchQuery && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">
                    No codes found. Try a different search term.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Note Section */}
          <section className="py-8 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Important Note</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This information is provided for educational purposes only and should not be used for 
                  self-diagnosis or treatment. Always consult with qualified healthcare professionals for 
                  accurate diagnosis and appropriate treatment. The descriptions provided here are simplified 
                  explanations meant to increase awareness and understanding of mental health conditions.
                </p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
