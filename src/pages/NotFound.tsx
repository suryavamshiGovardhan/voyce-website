import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Compass, BookOpen, Wind, HelpCircle } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Section } from "@/components/site/primitives";
import { PageHero, FeatureGrid } from "@/components/site/value";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    if (import.meta.env.DEV) console.error("404 Error: Non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageShell title="Page not found" description="The page you're looking for doesn't exist." noindex>
      <PageHero
        eyebrow="404 · Page not found"
        title={<>This page wandered off. <span className="text-primary">You don't have to.</span></>}
        lede="The link may be old or mistyped. Here are the places most people are looking for."
        primary={{ to: "/", label: "Go to the home page" }}
        secondary={{ to: "/start-here", label: "Start here" }}
      />
      <Section className="py-14 sm:py-20">
        <FeatureGrid
          cols={4}
          items={[
            { icon: <Compass className="h-5 w-5" />, title: "How it works", body: "What VOYCE is, in five steps.", to: "/how-it-works", cta: "See how" },
            { icon: <Wind className="h-5 w-5" />, title: "Calm practices", body: "Breathing and grounding tools.", to: "/tools", cta: "Try one" },
            { icon: <BookOpen className="h-5 w-5" />, title: "Library", body: "Short reads on the mind.", to: "/library", cta: "Browse" },
            { icon: <HelpCircle className="h-5 w-5" />, title: "FAQ", body: "Quick answers to common questions.", to: "/faq", cta: "Read" },
          ]}
        />
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Still lost?{" "}
          <Link to="/contact" className="v-link inline-flex items-center font-medium text-primary">
            Tell us which link broke <ArrowRight className="v-arrow ml-1 h-3.5 w-3.5" aria-hidden />
          </Link>
        </p>
      </Section>
    </PageShell>
  );
};

export default NotFound;
