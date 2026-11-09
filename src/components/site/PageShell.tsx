import type { ReactNode } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { SEOHead, canonicalFor } from "@/components/SEOHead";

interface PageShellProps {
  children: ReactNode;
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  noindex?: boolean;
}

export default function PageShell({
  children,
  title,
  description,
  canonical,
  keywords,
  noindex,
}: PageShellProps) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={canonical ? canonicalFor(canonical) : undefined}
        noindex={noindex}
      />
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
