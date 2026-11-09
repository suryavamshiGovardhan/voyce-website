import Navbar from "@/components/Navbar";
import ReferenceNote from "@/components/site/ReferenceNote";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { IntegratedDiagnosticHub } from "@/components/diagnostics/IntegratedDiagnosticHub";

export default function IntegratedDiagnosticsPage() {
  return (
    <>
      <SEOHead
        title="Integrated Diagnostic Resource Hub - ICD-9-CM & DSM-5 | VOYCE"
        description="Comprehensive mental health diagnostic resource combining ICD-9-CM codes, DSM-5 criteria, real-world case studies, and cross-reference mappings for clinical education."
        keywords="ICD-9, DSM-5, mental health diagnosis, case studies, cross-reference, clinical education, diagnostic criteria, psychiatric disorders"
      />
      <div className="v-legacy min-h-screen flex flex-col bg-background">
        <Navbar />
        
        <ReferenceNote />
        <main id="main-content" className="flex-1 py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <IntegratedDiagnosticHub />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
