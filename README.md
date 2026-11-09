# VOYCE — student & school wellbeing (website)

Standalone, GitHub Pages–hosted copy of the VOYCE site, split out of
[voyce-x](https://github.com/suryavamshiGovardhan/voyce-x) so it can be published without Lovable.

**Live:** https://suryavamshigovardhan.github.io/voyce-website/

CAM lives on its own site: https://suryavamshigovardhan.github.io/cam-website/ (`/cam/*` here hands off to it).

## Stack
Vite + React + TypeScript + Tailwind + shadcn/ui, React Router, Supabase (auth, journal, chat functions).

## Develop
```bash
npm install
npm run dev
```

## Build & deploy (GitHub Pages, no Actions)
```bash
npm run build          # vite build + scripts/postbuild.mjs
# publish dist/ to the gh-pages branch (Pages source = gh-pages /)
```
- `vite.config.ts` sets `base: "/voyce-website/"`; the router uses the same basename (`src/lib/site.ts`).
- `scripts/postbuild.mjs` writes `index.html` into every static route folder (deep links return 200) and a `404.html` copy for dynamic routes.

## Design system
- Tokens and motion utilities: `src/index.css` (section "VOYCE design system"): `v-card`, `v-card-hover`, `v-chip`, `v-arrow`, `v-link`, `v-hero-glow`, `v-rise`, `v-sheen`, `v-breathe`, `v-float`, `v-learn-body`. All motion is disabled under `prefers-reduced-motion`.
- Layout primitives: `src/components/site/primitives.tsx` (Reveal with variants, Section with `hero`, Eyebrow, StatementHeading, Lede, StepRail, QuietCard).
- Value blocks: `src/components/site/value.tsx` (PageHero, LeaveWith, NextStep, FeatureGrid).
