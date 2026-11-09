import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { PageHero, NextStep, LeaveWith } from "@/components/site/value";


export default function TermsOfUsePage() {
  return (
    <>
      <SEOHead 
        title="Terms of Use | VOYCE"
        description="Terms of Use for VOYCE. Understand the guidelines for using our platform."
        keywords="terms of use, terms of service, VOYCE terms"
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <PageHero eyebrow="Legal" title="Terms of use" lede="The ground rules for using VOYCE — kept as short and plain as we can." />
        <main className="container mx-auto px-4 py-12 max-w-3xl sm:py-16">
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last updated:</strong> January 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using VOYCE, you agree to be bound by these Terms of Use. 
                If you do not agree, please do not use our platform.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. Nature of Content</h2>
              <p className="text-muted-foreground">
                VOYCE provides educational and reflective content about mental health, psychology, and personal growth. 
                This content is for informational purposes only and is not a substitute for professional medical advice, 
                diagnosis, or treatment.
              </p>
              <p className="text-muted-foreground font-medium">
                VOYCE does not provide therapy, diagnosis, or emergency support. 
                If you are in crisis, please contact emergency services or a mental health professional.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. User Conduct</h2>
              <p className="text-muted-foreground">
                You agree to use VOYCE responsibly and not to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Post harmful, abusive, or inappropriate content</li>
                <li>Misuse the platform for unauthorized purposes</li>
                <li>Attempt to access other users' accounts or data</li>
                <li>Distribute the content without permission</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content on VOYCE, including text, graphics, and design, is owned by VOYCE or its contributors. 
                You may not reproduce or distribute this content without permission.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                VOYCE is provided "as is" without warranties of any kind. 
                We are not liable for any damages arising from your use of the platform. 
                Use the information provided at your own discretion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these terms from time to time. Continued use of VOYCE after changes 
                constitutes acceptance of the updated terms.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">7. Contact</h2>
              <p className="text-muted-foreground">
                For questions about these terms, please reach out through our contact page.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
