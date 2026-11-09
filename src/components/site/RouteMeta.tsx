import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_TITLE, canonicalFor } from "@/components/SEOHead";

/**
 * Runs on every route change before the page's own <SEOHead> effect, so pages
 * that forget to set meta still get a correct canonical/og:url and a sane title
 * instead of inheriting the previous page's (or the homepage's) values.
 */
export function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = canonicalFor(pathname);
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    let og = document.querySelector('meta[property="og:url"]');
    if (!og) {
      og = document.createElement("meta");
      og.setAttribute("property", "og:url");
      document.head.appendChild(og);
    }
    og.setAttribute("content", url);

    document.title = DEFAULT_TITLE;
  }, [pathname]);

  return null;
}
