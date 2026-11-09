import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Section, Eyebrow, StatementHeading, Lede } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import { CAM_SITE } from "@/components/site/SiteHeader";

/** Map an old VOYCE /cam/... path onto the standalone CAM site. */
export function camTarget(pathname: string, search = "", hash = ""): string {
  const rest = pathname.replace(/^\/cam\/?/, "");
  return `${CAM_SITE}${rest}${search}${hash}`;
}

/**
 * CAM (Career Advisory Movement) moved to its own site. Old /cam links land
 * here, explain the move in one line, and forward automatically.
 */
export default function CamHandoffPage() {
  const { pathname, search, hash } = useLocation();
  const target = camTarget(pathname, search, hash);

  useEffect(() => {
    const t = window.setTimeout(() => window.location.replace(target), 1500);
    return () => window.clearTimeout(t);
  }, [target]);

  return (
    <PageShell
      title="CAM has moved"
      description="CAM, the Career Advisory Movement, now lives on its own site. You are being taken there."
      noindex
    >
      <Section className="pt-16 sm:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>A sibling initiative</Eyebrow>
          <StatementHeading as="h1" className="text-4xl sm:text-5xl">
            CAM now has its own home.
          </StatementHeading>
          <Lede className="mx-auto">
            CAM — the Career Advisory Movement — is career exposure for Classes 8–12, from the same team as VOYCE.
            VOYCE stays focused on wellbeing. Taking you to CAM now…
          </Lede>
          <div className="mt-9 flex justify-center">
            <Button asChild size="lg" className="v-sheen h-12 rounded-full px-7">
              <a href={target}>
                Go to CAM
                <ArrowRight className="v-arrow ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
