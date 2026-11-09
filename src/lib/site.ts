/**
 * Where this build is hosted. GitHub Pages project site:
 * https://suryavamshigovardhan.github.io/voyce-website/
 */
export const SITE_ORIGIN = "https://suryavamshigovardhan.github.io/voyce-website";

/** Router basename / asset base, without trailing slash ("" at domain root). */
export const BASE_PATH = (import.meta.env.BASE_URL || "/").replace(/\/+$/, "");

/** Public asset path, e.g. asset("og-image.jpg") -> "/voyce-website/og-image.jpg". */
export function asset(file: string): string {
  return `${BASE_PATH}/${file.replace(/^\/+/, "")}`;
}

/** Absolute URL to an in-app route on the current origin, honouring the base path. */
export function appUrl(path = "/"): string {
  const origin = typeof window !== "undefined" ? window.location.origin : SITE_ORIGIN.replace(/\/voyce-website$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${BASE_PATH}${p}`;
}

/** YYYY-MM-DD for the visitor's local day (not UTC). */
export function localDateKey(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
