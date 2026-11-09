import { useState } from "react";
import ReferenceNote from "@/components/site/ReferenceNote";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import SearchBar from "@/components/icd9/SearchBar";
import CategoryCard from "@/components/icd9/CategoryCard";
import { icd9Categories } from "@/data/icd9Categories";
import { Book, Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ICD9Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const filteredCategories = icd9Categories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.range.includes(searchQuery) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const languages = [
    { code: "en", name: "English" },
    { code: "hi", name: "हिन्दी (Hindi)" },
    { code: "te", name: "తెలుగు (Telugu)" },
    { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
    { code: "ta", name: "தமிழ் (Tamil)" },
    { code: "es", name: "Español (Spanish)" },
    { code: "fr", name: "Français (French)" },
    { code: "de", name: "Deutsch (German)" },
    { code: "zh", name: "中文 (Chinese)" },
    { code: "ja", name: "日本語 (Japanese)" }
  ];

  return (
    <>
      <SEOHead
        title="ICD-9-CM Master Index - VOYCE"
        description="Explore all ICD-9-CM diagnostic codes used in medical systems worldwide. Curated by VOYCE for mental health and clinical awareness."
        keywords="ICD-9, ICD-9-CM, diagnostic codes, medical codes, mental health, clinical awareness"
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <ReferenceNote />
        <main id="main-content" className="flex-1">
          {/* Hero Section */}
          <section className="relative py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center space-y-4 mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Book className="h-12 w-12 text-primary" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  ICD-9-CM Master Index
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore all ICD-9-CM diagnostic codes used in medical systems worldwide. 
                  Curated by VOYCE for mental health and clinical awareness.
                </p>
              </div>

              {/* Language Selector */}
              <div className="flex justify-center mb-6">
                <div className="w-full max-w-xs">
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
              </div>

              {/* Search Bar */}
              <div className="mb-8">
                <SearchBar
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search by category, code range, or keyword..."
                />
              </div>

              {/* Results Count */}
              {searchQuery && (
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground">
                    Found {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'}
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Categories Grid */}
          <section className="py-12 px-4">
            <div className="container mx-auto max-w-6xl">
              {filteredCategories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCategories.map((category) => (
                    <CategoryCard key={category.range} category={category} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No categories found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search query
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Info Section */}
          <section className="py-12 px-4 bg-muted/30">
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-bold mb-4">About ICD-9-CM</h2>
              <p className="text-muted-foreground leading-relaxed">
                The International Classification of Diseases, Ninth Revision, Clinical Modification (ICD-9-CM) 
                is a system used to assign diagnostic and procedure codes. This comprehensive index helps healthcare 
                professionals, researchers, and individuals understand medical conditions in simple, accessible terms 
                with multi-language support and audio narration for enhanced accessibility.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
