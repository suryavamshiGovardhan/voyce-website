import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SELECTOR = [
  "main section",
  "main article > header",
  "main .v-card",
  'main [class*="rounded-[1.25rem]"]',
  "main .prose > h2",
  "main .prose > blockquote",
].join(", ");

/**
 * Adds scroll-triggered reveals to sections and cards across every page,
 * including older pages that don't use <Reveal>. Does nothing when the
 * visitor prefers reduced motion.
 */
export default function MotionDirector() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("v-motion");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const el = e.target as HTMLElement;
          el.classList.add("v-in");
          io.unobserve(el);
          const done = () => {
            el.classList.remove("v-auto", "v-in");
            el.style.removeProperty("--v-delay");
            el.removeEventListener("transitionend", done);
          };
          el.addEventListener("transitionend", done);
          window.setTimeout(done, 2200);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 },
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.dataset.vSeen) return;
        el.dataset.vSeen = "1";
        if (el.closest("[data-v-reveal], header.sticky, [role=dialog], [data-radix-popper-content-wrapper]")) return;
        if (el.querySelector(".v-rise, [data-v-reveal]") || el.closest(".v-rise")) return;
        if (el.parentElement?.closest(".v-auto")) return; // parent is already animating
        const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
        const i = Math.max(0, siblings.indexOf(el));
        el.style.setProperty("--v-delay", `${Math.min(i, 6) * 90}ms`);
        el.classList.add("v-auto");
        io.observe(el);
      });
    };

    const raf = requestAnimationFrame(scan);
    const root = document.getElementById("root");
    let pending = 0;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = requestAnimationFrame(() => {
        pending = 0;
        scan();
      });
    });
    if (root) mo.observe(root, { childList: true, subtree: true });
    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      io.disconnect();
      document.querySelectorAll<HTMLElement>(".v-auto").forEach((el) => el.classList.remove("v-auto", "v-in"));
    };
  }, [pathname]);

  return null;
}
