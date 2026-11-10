import { useEffect, useRef } from "react";

interface ThinkingLoaderProps {
  message?: string;
  fullScreen?: boolean;
}

type Vec = { x: number; y: number; z: number };

const HEMISPHERES: { c: Vec; r: Vec }[] = [
  { c: { x: -0.38, y: 0.12, z: 0 }, r: { x: 0.62, y: 0.5, z: 0.46 } },
  { c: { x: 0.38, y: 0.12, z: 0 }, r: { x: 0.62, y: 0.5, z: 0.46 } },
  { c: { x: 0, y: -0.5, z: -0.14 }, r: { x: 0.42, y: 0.26, z: 0.34 } },
  { c: { x: 0, y: -0.8, z: 0.05 }, r: { x: 0.1, y: 0.24, z: 0.1 } },
];

/** Branching vessels in 3D, from the stem up through both lobes. */
const ARTERY_PATHS: Vec[][] = [
  [{ x: 0, y: -0.98, z: 0.05 }, { x: 0, y: -0.58, z: 0.02 }, { x: 0, y: -0.12, z: 0 }, { x: 0, y: 0.18, z: 0 }],
  [{ x: 0, y: -0.12, z: 0 }, { x: 0.2, y: 0.02, z: 0.12 }, { x: 0.48, y: 0.18, z: 0.22 }, { x: 0.68, y: 0.32, z: 0.08 }],
  [{ x: 0, y: -0.12, z: 0 }, { x: -0.2, y: 0.02, z: 0.12 }, { x: -0.48, y: 0.18, z: 0.22 }, { x: -0.68, y: 0.32, z: 0.08 }],
  [{ x: 0.2, y: 0.02, z: 0.12 }, { x: 0.38, y: 0.28, z: -0.18 }, { x: 0.52, y: 0.5, z: -0.1 }],
  [{ x: -0.2, y: 0.02, z: 0.12 }, { x: -0.38, y: 0.28, z: -0.18 }, { x: -0.52, y: 0.5, z: -0.1 }],
  [{ x: 0, y: 0.18, z: 0 }, { x: 0.14, y: 0.42, z: 0.2 }, { x: 0.28, y: 0.58, z: 0.1 }],
  [{ x: 0, y: 0.18, z: 0 }, { x: -0.14, y: 0.42, z: 0.2 }, { x: -0.28, y: 0.58, z: 0.1 }],
  [{ x: 0, y: -0.58, z: 0.02 }, { x: 0.2, y: -0.48, z: 0.2 }, { x: 0.36, y: -0.28, z: 0.28 }],
  [{ x: 0, y: -0.58, z: 0.02 }, { x: -0.2, y: -0.48, z: 0.2 }, { x: -0.36, y: -0.28, z: 0.28 }],
  [{ x: 0.48, y: 0.18, z: 0.22 }, { x: 0.66, y: 0.02, z: 0.18 }, { x: 0.58, y: -0.16, z: 0.12 }],
  [{ x: -0.48, y: 0.18, z: 0.22 }, { x: -0.66, y: 0.02, z: 0.18 }, { x: -0.58, y: -0.16, z: 0.12 }],
  [{ x: 0.2, y: 0.02, z: 0.12 }, { x: 0.32, y: 0.08, z: 0.32 }, { x: 0.22, y: 0.22, z: 0.38 }],
  [{ x: -0.2, y: 0.02, z: 0.12 }, { x: -0.32, y: 0.08, z: 0.32 }, { x: -0.22, y: 0.22, z: 0.38 }],
];

const HUBS: Vec[] = [
  { x: 0, y: -0.58, z: 0.02 }, { x: 0, y: -0.12, z: 0 }, { x: 0, y: 0.18, z: 0 },
  { x: 0.2, y: 0.02, z: 0.12 }, { x: -0.2, y: 0.02, z: 0.12 },
  { x: 0.48, y: 0.18, z: 0.22 }, { x: -0.48, y: 0.18, z: 0.22 },
  { x: 0.52, y: 0.5, z: -0.1 }, { x: -0.52, y: 0.5, z: -0.1 },
  { x: 0.28, y: 0.58, z: 0.1 }, { x: -0.28, y: 0.58, z: 0.1 },
  { x: 0.36, y: -0.28, z: 0.28 }, { x: -0.36, y: -0.28, z: 0.28 },
];

function mulberry32(seed: number) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function rhoOf(p: Vec) {
  let min = Infinity;
  for (const { c, r } of HEMISPHERES) {
    const dx = (p.x - c.x) / r.x;
    const dy = (p.y - c.y) / r.y;
    const dz = (p.z - c.z) / r.z;
    const rho = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (rho < min) min = rho;
  }
  return min;
}

function inBody(p: Vec) {
  return rhoOf(p) <= 1;
}

/** Mid-sagittal fissure so the two hemispheres read as a brain, not one egg. */
function inFissure(p: Vec) {
  return Math.abs(p.x) < 0.055 && p.y > -0.2 && p.z > -0.15;
}

function rippleRadius(theta: number, phi: number) {
  return 1 + 0.07 * Math.sin(phi * 6) * Math.sin(theta * 5) + 0.04 * Math.sin(phi * 11 + theta * 3);
}

function samplePoints(count: number): Vec[] {
  const rand = mulberry32(0x5a389e);
  const pts: Vec[] = [];
  let guard = 0;
  while (pts.length < count && guard < count * 60) {
    guard += 1;
    const p = { x: rand() * 2.2 - 1.1, y: rand() * 2.2 - 1.15, z: rand() * 1.6 - 0.8 };
    if (!inBody(p) || inFissure(p)) continue;
    const rho = rhoOf(p);
    // Bias to the shell so the silhouette reads as an organ
    if (rho < 0.72 && rand() > 0.18) continue;
    pts.push(p);
  }
  return pts;
}

/** Gyri strokes on the lobe surfaces, so the outline is a brain, not two smooth eggs. */
function sampleSulci(): Vec[][] {
  const rand = mulberry32(0x100a1a);
  const paths: Vec[][] = [];
  for (let lobe = 0; lobe < 2; lobe += 1) {
    const { c, r } = HEMISPHERES[lobe];
    for (let g = 0; g < 7; g += 1) {
      const phi0 = 0.45 + g * 0.28 + rand() * 0.08;
      const pts: Vec[] = [];
      for (let s = 0; s <= 10; s += 1) {
        const t = s / 10;
        const theta = (lobe === 0 ? Math.PI * 0.15 : Math.PI * 0.85) + (lobe === 0 ? 1 : -1) * t * 1.15;
        const phi = phi0 + 0.22 * Math.sin(t * Math.PI * 2 + g);
        const rad = rippleRadius(theta, phi);
        pts.push({
          x: c.x + r.x * rad * Math.sin(phi) * Math.cos(theta),
          y: c.y + r.y * rad * Math.cos(phi),
          z: c.z + r.z * rad * Math.sin(phi) * Math.sin(theta),
        });
      }
      paths.push(pts);
    }
  }
  return paths;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function easeOut(t: number) {
  return 1 - Math.pow(1 - Math.min(1, Math.max(0, t)), 3);
}

function catmull(points: Vec[], t: number): Vec {
  const n = points.length - 1;
  const x = t * n;
  const i = Math.min(n - 1, Math.max(0, Math.floor(x)));
  const lt = x - i;
  const p0 = points[Math.max(0, i - 1)];
  const p1 = points[i];
  const p2 = points[Math.min(n, i + 1)];
  const p3 = points[Math.min(n, i + 2)];
  const tt = lt * lt;
  const ttt = tt * lt;
  return {
    x: 0.5 * ((2 * p1.x) + (-p0.x + p2.x) * lt + (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * tt + (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * ttt),
    y: 0.5 * ((2 * p1.y) + (-p0.y + p2.y) * lt + (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * tt + (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * ttt),
    z: 0.5 * ((2 * p1.z) + (-p0.z + p2.z) * lt + (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * tt + (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * ttt),
  };
}

type Proj = { x: number; y: number; z: number; s: number };

function project(p: Vec, rotY: number, cx: number, cy: number, scale: number): Proj {
  const c = Math.cos(rotY);
  const s = Math.sin(rotY);
  const xr = p.x * c - p.z * s;
  const zr = p.x * s + p.z * c;
  const depth = 1.35 + zr * 0.45;
  const k = scale / depth;
  return { x: cx + xr * k, y: cy - p.y * k * 1.05, z: zr, s: k };
}

const POINTS = samplePoints(420);
const SULCI = sampleSulci();
const LINKS: [number, number][] = [];
{
  const maxD2 = 0.3 * 0.3;
  for (let i = 0; i < POINTS.length; i += 1) {
    let n = 0;
    for (let j = i + 1; j < POINTS.length && n < 6; j += 1) {
      const a = POINTS[i];
      const b = POINTS[j];
      const d2 = (a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2;
      if (d2 < maxD2) {
        LINKS.push([i, j]);
        n += 1;
      }
    }
  }
}

function usePrefersReducedMotion() {
  const ref = useRef(false);
  if (typeof window !== "undefined") {
    ref.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  return ref;
}

function BrainStage({ compact = false, dark = true }: { compact?: boolean; dark?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reducedRef = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let start: number | null = null;
    let running = true;
    const reduced = reducedRef.current;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const plum = [90, 56, 158];
    const apricot = [255, 154, 106];
    const ink = dark ? [16, 10, 26] : [248, 244, 252];

    const drawLobes = (rot: number, cx: number, cy: number, scale: number, intro: number) => {
      const lobes = HEMISPHERES.map((h, i) => ({ ...h, i, p: project(h.c, rot, cx, cy, scale) }));
      lobes.sort((a, b) => a.p.z - b.p.z);
      for (const lobe of lobes) {
        const body = easeOut((intro - (lobe.i === 3 ? 0.08 : 0)) / 0.7);
        if (body <= 0) continue;
        const rx = lobe.r.x * lobe.p.s;
        const ry = lobe.r.y * lobe.p.s * 1.05;
        const grd = ctx.createRadialGradient(lobe.p.x, lobe.p.y, rx * 0.1, lobe.p.x, lobe.p.y, rx * 1.05);
        if (dark) {
          grd.addColorStop(0, `rgba(120, 78, 196, ${0.38 * body})`);
          grd.addColorStop(0.55, `rgba(62, 36, 112, ${0.42 * body})`);
          grd.addColorStop(1, `rgba(24, 14, 44, ${0.05 * body})`);
        } else {
          grd.addColorStop(0, `rgba(120, 78, 196, ${0.22 * body})`);
          grd.addColorStop(0.55, `rgba(90, 56, 158, ${0.16 * body})`);
          grd.addColorStop(1, `rgba(90, 56, 158, 0)`);
        }
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.ellipse(lobe.p.x, lobe.p.y, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const draw = (now: number) => {
      if (!running) return;
      if (start === null) start = now;
      const elapsed = (now - start) / 1000;
      const intro = reduced ? 1 : easeOut(elapsed / 1.8);
      const rot = reduced ? 0.42 : 0.42 + elapsed * 0.2;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const cx = w / 2;
      const cy = h / 2 + (compact ? 0 : -h * 0.04);
      const scale = Math.min(w, h) * (compact ? 0.46 : 0.36);

      ctx.clearRect(0, 0, w, h);
      if (dark) {
        const g = ctx.createRadialGradient(cx, cy, 8, cx, cy, Math.max(w, h) * 0.75);
        g.addColorStop(0, "rgb(42, 24, 72)");
        g.addColorStop(0.5, "rgb(22, 13, 38)");
        g.addColorStop(1, `rgb(${ink.join(",")})`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      const glow = ctx.createRadialGradient(cx, cy - scale * 0.05, 4, cx, cy, scale * 1.25);
      glow.addColorStop(0, `rgba(${apricot[0]},${apricot[1]},${apricot[2]},${0.2 * intro})`);
      glow.addColorStop(0.45, `rgba(${plum[0]},${plum[1]},${plum[2]},${0.32 * intro})`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, scale * 1.25, 0, Math.PI * 2);
      ctx.fill();

      drawLobes(rot, cx, cy, scale, intro);

      const projPts = POINTS.map((p) => project(p, rot, cx, cy, scale));
      const projHubs = HUBS.map((p) => project(p, rot, cx, cy, scale));

      // Sulci — surface folds, appear as the organ forms
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      SULCI.forEach((path, pi) => {
        const born = easeOut((intro - 0.12 - (pi % 7) * 0.03) / 0.6);
        if (born <= 0) return;
        ctx.strokeStyle = `rgba(214, 196, 255, ${0.28 * born})`;
        ctx.lineWidth = compact ? 0.7 : 1.15;
        ctx.beginPath();
        const steps = 20;
        for (let s = 0; s <= steps * born; s += 1) {
          const p = project(catmull(path, s / steps), rot, cx, cy, scale);
          if (s === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      });

      const linkCount = Math.floor(LINKS.length * easeOut((intro - 0.15) / 0.7));
      for (let i = 0; i < linkCount; i += 1) {
        const [a, b] = LINKS[i];
        const pa = projPts[a];
        const pb = projPts[b];
        const midZ = (pa.z + pb.z) / 2;
        const alpha = (0.1 + (1 - (midZ + 1) / 2) * 0.28) * intro;
        ctx.strokeStyle = `rgba(${plum[0]},${plum[1]},${plum[2]},${alpha})`;
        ctx.lineWidth = compact ? 0.55 : 0.85;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      }

      ARTERY_PATHS.forEach((path, pi) => {
        const born = easeOut((intro - 0.2 - pi * 0.05) / 0.55);
        if (born <= 0) return;
        const steps = 28;
        const drawStroke = (width: number, color: string) => {
          ctx.strokeStyle = color;
          ctx.lineWidth = width;
          ctx.beginPath();
          for (let s = 0; s <= steps * born; s += 1) {
            const t = s / steps;
            const p = project(catmull(path, t), rot, cx, cy, scale);
            if (s === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          }
          ctx.stroke();
        };
        const w0 = (compact ? 1.15 : 1.85) * (pi === 0 ? 1.25 : 1);
        drawStroke(w0 * 5, `rgba(${apricot[0]},${apricot[1]},${apricot[2]},${0.07 * born})`);
        drawStroke(w0 * 2.1, `rgba(${plum[0]},${plum[1]},${plum[2]},${0.4 * born})`);
        drawStroke(w0, `rgba(255, 214, 196, ${0.8 * born})`);

        if (!reduced && born > 0.85) {
          const t = (elapsed * 0.35 + pi * 0.13) % 1;
          const p = project(catmull(path, t), rot, cx, cy, scale);
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, compact ? 6 : 10);
          grd.addColorStop(0, "rgba(255,236,220,0.95)");
          grd.addColorStop(0.35, `rgba(${apricot[0]},${apricot[1]},${apricot[2]},0.7)`);
          grd.addColorStop(1, "rgba(255,154,106,0)");
          ctx.fillStyle = grd;
          ctx.beginPath();
          ctx.arc(p.x, p.y, compact ? 6 : 10, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      const order = projPts
        .map((p, i) => ({ p, i }))
        .sort((a, b) => a.p.z - b.p.z);
      const shown = Math.floor(order.length * lerp(0.2, 1, intro));
      for (let k = 0; k < shown; k += 1) {
        const { p } = order[k];
        const depth = (p.z + 1) / 2;
        const r = (compact ? 1.15 : 1.85) * (0.7 + depth * 0.85);
        const t = k / order.length;
        const col = [
          lerp(plum[0], apricot[0], t * 0.7),
          lerp(plum[1], apricot[1], t * 0.7),
          lerp(plum[2], apricot[2], t * 0.7),
        ];
        ctx.beginPath();
        ctx.fillStyle = `rgba(${col[0] | 0},${col[1] | 0},${col[2] | 0},${0.4 + depth * 0.55})`;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      projHubs.forEach((p, i) => {
        const born = easeOut((intro - 0.28 - i * 0.035) / 0.4);
        if (born <= 0) return;
        const pulse = reduced ? 1 : 0.75 + 0.25 * Math.sin(elapsed * 3 + i);
        const r = (compact ? 2.6 : 4.6) * born * pulse;
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 3);
        grd.addColorStop(0, `rgba(255,236,220,${0.95 * born})`);
        grd.addColorStop(0.35, `rgba(${apricot[0]},${apricot[1]},${apricot[2]},${0.7 * born})`);
        grd.addColorStop(1, `rgba(${plum[0]},${plum[1]},${plum[2]},0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(255,255,255,${0.9 * born})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.45, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!reduced) frame = requestAnimationFrame(draw);
    };

    if (reduced) {
      draw(performance.now());
    } else {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      ro.disconnect();
    };
  }, [compact, dark, reducedRef]);

  return (
    <canvas
      ref={canvasRef}
      className="v-brain-loader__canvas"
      width={compact ? 160 : 560}
      height={compact ? 160 : 560}
    />
  );
}

export function ThinkingLoader({
  message = "Thinking…",
  fullScreen = true,
}: ThinkingLoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={message}
      className={`v-brain-loader ${fullScreen ? "v-brain-loader--full" : "v-brain-loader--inline"}`}
    >
      <BrainStage dark={fullScreen} compact={!fullScreen} />
      <p className="v-brain-loader__message">{message}</p>
      {!fullScreen ? null : <p className="v-brain-loader__hint">Every connection finding the next.</p>}
    </div>
  );
}

export function InlineThinkingLoader({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="v-brain-loader v-brain-loader--row" role="status" aria-live="polite" aria-label={message}>
      <BrainStage compact dark={false} />
      <span className="v-brain-loader__hint" style={{ margin: 0 }}>{message}</span>
    </div>
  );
}
