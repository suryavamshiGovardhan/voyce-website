import type { ReactNode } from "react";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { cn } from "@/lib/utils";

/** Shared header + footer for pages that manage their own SEO/layout. */
export default function SiteChrome({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("v-legacy flex min-h-screen flex-col", className)}>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
