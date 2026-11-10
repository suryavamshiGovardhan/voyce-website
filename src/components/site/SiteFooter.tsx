import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

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
    <footer className="relative bg-surface pb-20 text-[13px] sm:pb-0">
      <div className="relative mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
        <p className="mb-8 border-b border-border/80 pb-6 text-xs leading-relaxed text-muted-foreground">
          VOYCE is a reflective, educational wellbeing space. It does not provide therapy, diagnosis or emergency
          support. If you or someone else is in immediate danger, contact local emergency services or a crisis
          helpline &mdash; in India, Tele MANAS is free on 14416.
        </p>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_3fr]">
          <div>
            <Link to="/" className="a-headline text-lg">
              VOYCE
            </Link>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-muted-foreground">
              A calm place to notice what you feel, understand it, and find the next small step.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/suryavamshiiii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="VOYCE on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground/70 transition-colors hover:text-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:voycexx@gmail.com"
                aria-label="Email VOYCE"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground/70 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="mb-3 text-xs font-semibold text-foreground">
                  {col.title}
                </h2>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-xs text-muted-foreground transition-colors hover:text-foreground hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border/80 pt-6">
          <nav aria-label="Other initiatives" className="mb-8">
            <p className="text-xs font-semibold text-foreground">
              Other projects from the same team
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              {OTHER.map((item) => (
                <li key={item.label} className="text-xs text-muted-foreground">
                  {item.to.startsWith("http") ? (
                    <a href={item.to} target="_blank" rel="noopener noreferrer" className="text-foreground/80 transition-colors hover:text-foreground hover:underline">
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} className="text-foreground/80 transition-colors hover:text-foreground hover:underline">
                      {item.label}
                    </Link>
                  )}{" "}
                  <span className="text-xs">({item.note})</span>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col gap-3 border-t border-border/80 pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} VOYCE. Founded by Suryavamshi Govardhan.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
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
