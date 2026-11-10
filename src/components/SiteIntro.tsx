import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "voyce-entry-played";
const HOLD_MS = 2600;
const EXIT_MS = 900;

function gridForWidth() {
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches) {
    return { cols: 3, rows: 8 };
  }
  return { cols: 5, rows: 6 };
}

function shouldPlayIntro() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return localStorage.getItem(STORAGE_KEY) !== "1";
  } catch {
    return false;
  }
}

export function SiteIntro() {
  const [playing, setPlaying] = useState(shouldPlayIntro);
  const [exiting, setExiting] = useState(false);
  const [grid, setGrid] = useState(gridForWidth);
  const rootRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    if (!playing) return;

    const root = rootRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setGrid(gridForWidth());

    const setLit = (cx: number, cy: number) => {
      let best = -1;
      let bestD = Infinity;
      tilesRef.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = r.left + r.width / 2 - cx;
        const dy = r.top + r.height / 2 - cy;
        const d = dx * dx + dy * dy;
        if (d < bestD) {
          bestD = d;
          best = i;
        }
      });
      tilesRef.current.forEach((el, i) => {
        if (!el) return;
        if (i === best) el.setAttribute("data-lit", "1");
        else el.removeAttribute("data-lit");
      });
    };

    const onMove = (e: PointerEvent) => setLit(e.clientX, e.clientY);

    // Default highlight near the centre until the pointer moves
    const highlightCentre = () => {
      const r = root?.getBoundingClientRect();
      if (r) setLit(r.left + r.width * 0.5, r.top + r.height * 0.45);
    };
    highlightCentre();
    window.addEventListener("pointermove", onMove, { passive: true });

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, HOLD_MS);

    const doneTimer = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore private-mode quota */
      }
      document.body.style.overflow = prevOverflow;
      setPlaying(false);
    }, HOLD_MS + EXIT_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      window.removeEventListener("pointermove", onMove);
      document.body.style.overflow = prevOverflow;
    };
  }, [playing]);

  if (!playing) return null;

  const tiles = Array.from({ length: grid.cols * grid.rows }, (_, i) => i);

  return (
    <div
      ref={rootRef}
      className={`v-site-intro${exiting ? " v-site-intro--exit" : ""}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="v-site-intro__grid">
        {tiles.map((i) => {
          const row = Math.floor(i / grid.cols);
          const col = i % grid.cols;
          const delay = (row * 0.07 + col * 0.05 + (row % 2) * 0.04).toFixed(2);
          return (
            <span
              key={i}
              className="v-site-intro__word"
              style={{
                animationDelay: `${delay}s`,
                ["--row-shift" as string]: row % 2 === 1 ? "0.55em" : "0",
              }}
              ref={(el) => {
                if (el) tilesRef.current[i] = el;
              }}
            >
              VOYCE
            </span>
          );
        })}
      </div>
    </div>
  );
}
