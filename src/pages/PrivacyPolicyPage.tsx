import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { PageHero, NextStep, LeaveWith } from "@/components/site/value";


export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | VOYCE"
        description="Privacy Policy for VOYCE. Learn how we collect, use, and protect your information."
        keywords="privacy policy, data protection, VOYCE privacy"
      />
      <div className="v-legacy min-h-screen bg-background">
        <Navbar />
        <PageHero eyebrow="Legal" title="Privacy policy" lede="What we collect, why, and how you stay in control. Written to be read, not skimmed past." />
        <main className="container mx-auto px-4 py-12 max-w-3xl sm:py-16">
          
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6">
            <p className="text-muted-foreground">
              <strong>Last updated:</strong> September 2026
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
              <p className="text-muted-foreground">
                VOYCE collects minimal information necessary to provide our educational and reflective services:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Account information (email, name) when you create an account</li>
                <li>Journal entries and mood data you voluntarily submit</li>
                <li>Anonymous usage analytics to improve our platform</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
              <p className="text-muted-foreground">
                We use your information solely to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide and personalize your VOYCE experience</li>
                <li>Save your journal entries and progress</li>
                <li>Improve our educational content and features</li>
                <li>Send occasional updates if you opt-in</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">3. Data Protection</h2>
              <p className="text-muted-foreground">
                Your data is stored on Supabase, which encrypts data in transit (HTTPS) and at rest, and access is restricted by row-level security so only you can read your own entries. We do not sell your personal information to third parties. 
                You can request deletion of your data at any time by contacting us.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">4. Cookies</h2>
              <p className="text-muted-foreground">
                We use essential cookies to maintain your session and preferences. 
                We do not use tracking cookies for advertising purposes.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">5. Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal data. 
                Contact us at voycexx@gmail.com for any data-related requests.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">6. Contact</h2>
              <p className="text-muted-foreground">
                For privacy-related questions, please reach out through our contact page or email us directly.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
