import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import SonarGrid from "@/components/ui/sonar-grid";

const COLUMNS: { title: string; links: { label: string; to: string }[] }[] = [
  {
    title: "Who it's for",
    links: [
      { label: "Students", to: "/students" },
      { label: "Parents", to: "/parents" },
      { label: "Teachers", to: "/teachers" },
      { label: "Schools", to: "/schools" },
    ],
  },
  {
    title: "Read & practise",
    links: [
      { label: "Start here", to: "/start-here" },
      { label: "Calm practices", to: "/tools" },
      { label: "Stories", to: "/stories" },
      { label: "The Unheard Mind", to: "/series" },
      { label: "Guides", to: "/resources" },
      { label: "Blog", to: "/blog" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Stress", to: "/stress" },
      { label: "Trauma", to: "/trauma" },
      { label: "ADHD", to: "/adhd" },
      { label: "Brain", to: "/brain" },
      { label: "Childhood experiences", to: "/aces" },
      { label: "Professional reference", to: "/diagnostics" },
    ],
  },
  {
    title: "VOYCE",
    links: [
      { label: "About", to: "/about" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Safety", to: "/safety" },
      { label: "FAQ", to: "/faq" },
      { label: "Partner with us", to: "/partners" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const OTHER: { label: string; to: string; note: string }[] = [
  { label: "CAM", to: "https://suryavamshigovardhan.github.io/cam-website/", note: "careers, separate site" },
  { label: "AI4Schools", to: "/ai4schools", note: "AI & STEM programme" },
  { label: "Invisible Inheritance", to: "/invisible-inheritance", note: "for adult couples, not students" },
];

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-surface pb-20 sm:pb-0">
      <SonarGrid
        aria-hidden="true"
        interactive={false}
        baseOpacity={0.1}
        pingEvery={7}
        speed={180}
        amplitude={1.4}
        maxRings={2}
        className="pointer-events-none absolute inset-0 hidden sm:block"
      />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Link to="/" className="font-display text-xl tracking-tight">
              VOYCE
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A calm place to notice what you feel, understand it, and find the next small step.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/suryavamshiiii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VOYCE on Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:voycexx@gmail.com"
                aria-label="Email VOYCE"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {col.title}
                </h2>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="v-link text-sm text-foreground/80 transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-8">
          <nav aria-label="Other initiatives" className="mb-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Other projects from the same team
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {OTHER.map((item) => (
                <li key={item.label} className="text-sm text-muted-foreground">
                  {item.to.startsWith("http") ? (
                    <a href={item.to} target="_blank" rel="noopener noreferrer" className="v-link text-foreground/80 transition-colors hover:text-primary">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} className="v-link text-foreground/80 transition-colors hover:text-primary">
                      {item.label}
                    </Link>
                  )}{" "}
                  <span className="text-xs">({item.note})</span>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-sm leading-relaxed text-muted-foreground">
            VOYCE is a reflective, educational wellbeing space. It does not provide therapy, diagnosis, or emergency
            support. If you or someone else is in immediate danger, contact local emergency services or a crisis
            helpline.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} VOYCE. Founded by Suryavamshi Govardhan.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy" className="hover:text-primary">
                Privacy
              </Link>
              <Link to="/terms-of-use" className="hover:text-primary">
                Terms
              </Link>
              <Link to="/safety" className="hover:text-primary">
                Safety
              </Link>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
