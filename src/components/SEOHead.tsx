import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
}

export const SITE_ORIGIN = "https://voyce-x.lovable.app";
export const DEFAULT_TITLE = "VOYCE — Student & school wellbeing";
const DEFAULT_DESCRIPTION = "A calm, private wellbeing space for students, parents, teachers and schools. Read real stories, reflect privately, find a next step. No diagnosis, no scores.";
const DEFAULT_KEYWORDS = "student wellbeing, school wellbeing, emotional check-in, reflection, mindfulness, VOYCE";

/** One brand, one suffix: "Page | VOYCE". Strips any old "| VOYCE" suffixes. */
export function formatTitle(title?: string): string {
  if (!title) return DEFAULT_TITLE;
  let t = title.replace(/VOYCE/g, "VOYCE").trim();
  t = t.replace(/(\s*[|·—-]\s*VOYCE)+\s*$/i, "").trim();
  if (!t) return DEFAULT_TITLE;
  return /\bVOYCE\b/.test(t) ? t : `${t} | VOYCE`;
}

/** Canonical = origin + path, never query strings or hashes. */
export function canonicalFor(pathname: string): string {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return `${SITE_ORIGIN}${clean === "/" ? "/" : clean}`;
}
const DEFAULT_OG_IMAGE = "https://voyce-x.lovable.app/og-image.png";

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  canonicalUrl,
  noindex = false
}: SEOHeadProps) {
  const fullTitle = formatTitle(title);
  const currentUrl = canonicalUrl || canonicalFor(window.location.pathname);

  useEffect(() => {
    // Set page title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:site_name', 'VOYCE', true);
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // Robots
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow');
    }

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // Viewport (ensure it's set)
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5');
      document.head.appendChild(viewportMeta);
    }
  }, [fullTitle, description, keywords, ogImage, ogType, currentUrl, noindex]);

  return null;
}
