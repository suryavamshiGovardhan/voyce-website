import { useEffect, useState, type ReactNode, type MouseEvent } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

type NavItem = { label: string; to: string; description?: string; external?: boolean; group?: string };

export const CAM_SITE = "https://suryavamshigovardhan.github.io/cam-website/";

const PRIMARY: { label: string; to?: string; items?: NavItem[]; wide?: boolean; note?: string }[] = [
  { label: "How it works", to: "/how-it-works" },
  {
    label: "For you",
    items: [
      { label: "Students", to: "/students", description: "Understand yourself, one small step at a time" },
      { label: "Parents", to: "/parents", description: "Understand the signals behind the silence" },
      { label: "Teachers", to: "/teachers", description: "Notice patterns, start better conversations" },
      { label: "VOYCE for Schools", to: "/schools", description: "Student wellbeing for your whole school" },
    ],
  },
  {
    label: "Explore",
    wide: true,
    note: "No account needed",
    items: [
      { label: "Start here", to: "/start-here", description: "Your first two minutes on VOYCE" },
      { label: "Stories", to: "/stories", description: "Real experiences, shared with consent" },
      { label: "The Unheard Mind", to: "/series", description: "Eight-part narrative series" },
      { label: "Tools & practices", to: "/tools", description: "Small things you can try today" },
      { label: "Guides & articles", to: "/resources", description: "Plain-language wellbeing reading" },
      { label: "Blog", to: "/blog", description: "Essays and reflections" },
      { label: "Library", to: "/library", description: "Long-form deep dives" },
      { label: "Workbook", to: "/workbook", description: "Write it out" },
      { label: "VOYCE Path", to: "/path", description: "A guided sequence" },
      { label: "Thoughts", to: "/thoughts", description: "Short reflections" },
      { label: "Newsletters", to: "/newsletters", description: "Occasional letters" },
      { label: "My journal", to: "/journal", description: "Private entries (needs sign-in)" },
    ],
  },
  {
    label: "Learn",
    wide: true,
    items: [
      { group: "Understand yourself", label: "Stress", to: "/stress", description: "Understanding stress responses" },
      { group: "Understand yourself", label: "Trauma", to: "/trauma", description: "Healing and recovery" },
      { group: "Understand yourself", label: "ADHD", to: "/adhd", description: "Attention and focus" },
      { group: "Understand yourself", label: "Brain", to: "/brain", description: "How your brain works" },
      { group: "Understand yourself", label: "Mind, heart, gut", to: "/mind-heart-gut", description: "The whole-body connection" },
      { group: "Understand yourself", label: "Neuroscience", to: "/neuroscience", description: "Research explained simply" },
      { group: "Understand yourself", label: "ACEs impact", to: "/aces", description: "Childhood experiences" },
      { group: "Understand yourself", label: "CDS research", to: "/cds", description: "Cognitive disengagement" },
      { group: "Understand yourself", label: "Psychology theories", to: "/theories", description: "Foundational frameworks" },
      { group: "Professional reference — not student self-tests", label: "DSM-5 guide", to: "/dsm5", description: "Reference for adults & professionals" },
      { group: "Professional reference — not student self-tests", label: "DSM-5 Academy", to: "/dsm5-academy", description: "Study modules for learners" },
      { group: "Professional reference — not student self-tests", label: "ICD-9 hub", to: "/icd9", description: "Classification reference" },
      { group: "Professional reference — not student self-tests", label: "Diagnostics library", to: "/diagnostics", description: "Cross-referenced knowledge" },
      { group: "Professional reference — not student self-tests", label: "Knowledge quizzes", to: "/quizzes", description: "Test what you learned — not a wellbeing score" },
    ],
  },
  {
    label: "Trust",
    items: [
      { label: "Safety", to: "/safety", description: "What VOYCE is and is not" },
      { label: "Privacy", to: "/privacy", description: "What we collect and why" },
      { label: "FAQ", to: "/faq", description: "Real questions, plain answers" },
      { label: "About", to: "/about", description: "Why VOYCE exists" },
      { label: "Partners", to: "/partners", description: "Work with VOYCE" },
      { label: "Contact", to: "/contact", description: "Reach the team" },
    ],
  },
  {
    label: "Other initiatives",
    note: "Separate projects from the same team",
    items: [
      { label: "CAM — careers", to: CAM_SITE, external: true, description: "Career exposure for Classes 8–12 (separate site)" },
      { label: "AI4Schools", to: "/ai4schools", description: "AI & STEM programme — not the wellbeing product" },
      { label: "Invisible Inheritance", to: "/invisible-inheritance", description: "A reflection test for couples" },
    ],
  },
];

function MenuLink({ item, className, children }: { item: NavItem; className: string; children: ReactNode }) {
  if (item.external) {
    return (
      <a href={item.to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link to={item.to} className={className}>
      {children}
    </Link>
  );
}

function groupItems(items: NavItem[]) {
  const groups: { name?: string; items: NavItem[] }[] = [];
  items.forEach((item) => {
    const last = groups[groups.length - 1];
    if (last && last.name === item.group) last.items.push(item);
    else groups.push({ name: item.group, items: [item] });
  });
  return groups;
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    setOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const skipToMain = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = (document.getElementById("main-content") || document.querySelector("main")) as HTMLElement | null;
    if (!target) return;
    e.preventDefault();
    if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
    target.focus();
    target.scrollIntoView();
  };

  return (
    <>
    <a
      href="#main-content"
      onClick={skipToMain}
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-5 focus:py-2 focus:text-primary-foreground"
    >
      Skip to main content
    </a>
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent bg-background",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-baseline gap-2" aria-label="VOYCE home">
          <span className="font-display text-xl tracking-tight">VOYCE</span>
          <span className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">wellbeing</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {PRIMARY.map((entry) => (
            <li key={entry.label} className="relative">
              {entry.to ? (
                <NavLink
                  to={entry.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
                      isActive && "text-foreground",
                    )
                  }
                >
                  {entry.label}
                </NavLink>
              ) : (
                <div
                  onMouseEnter={() => setOpenMenu(entry.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === entry.label}
                    onClick={() => setOpenMenu(openMenu === entry.label ? null : entry.label)}
                    className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {entry.label}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  {openMenu === entry.label && entry.items && (
                    <div
                      className={cn(
                        "absolute top-full pt-2",
                        entry.wide ? "left-1/2 w-[38rem] -translate-x-1/2" : entry.label === "Other initiatives" ? "right-0 w-80" : "left-0 w-72",
                      )}
                    >
                      <div className="rounded-2xl border border-border bg-popover p-2 shadow-[0_24px_60px_-30px_hsl(var(--foreground)/0.45)]">
                        {entry.note && (
                          <p className="px-3 pb-1 pt-2 text-[11px] uppercase tracking-[0.18em] text-primary">{entry.note}</p>
                        )}
                        {groupItems(entry.items).map((group) => (
                          <div key={group.name ?? "default"}>
                            {group.name && (
                              <p className="px-3 pb-1 pt-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                                {group.name}
                              </p>
                            )}
                            <ul className={cn(entry.wide && "grid grid-cols-2 gap-x-2")}>
                              {group.items.map((item) => (
                                <li key={item.to}>
                                  <MenuLink item={item} className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary">
                                    <span className="flex items-center gap-1.5 text-sm font-medium">
                                      {item.label}
                                      {item.external && <ExternalLink className="h-3 w-3" aria-hidden="true" />}
                                    </span>
                                    {item.description && (
                                      <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                                        {item.description}
                                      </span>
                                    )}
                                  </MenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <Button asChild size="sm" className="rounded-full px-5">
              <Link to="/dashboard">My VOYCE</Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm" className="rounded-full">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button asChild size="sm" className="rounded-full px-5">
                <Link to="/start-here">Start here</Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile panel */}
      {open && (
        <div id="mobile-nav" className="border-t border-border bg-background lg:hidden">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-5 pb-8 pt-4">
            <div className="mb-5 flex flex-col gap-3">
              {user ? (
                <Button asChild className="h-12 rounded-full">
                  <Link to="/dashboard">My VOYCE</Link>
                </Button>
              ) : (
                <>
                  <Button asChild className="h-12 rounded-full">
                    <Link to="/start-here">Start here — no account</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 rounded-full">
                    <Link to="/login">Sign in</Link>
                  </Button>
                </>
              )}
            </div>
            <ul className="space-y-1">
              {PRIMARY.map((entry) => (
                <li key={entry.label}>
                  {entry.to ? (
                    <Link to={entry.to} className="block rounded-xl px-3 py-3 text-base font-medium">
                      {entry.label}
                    </Link>
                  ) : (
                    <div className="py-2">
                      <p className="px-3 pb-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {entry.label}
                      </p>
                      {entry.note && <p className="px-3 pb-1 text-xs text-primary">{entry.note}</p>}
                      {groupItems(entry.items ?? []).map((group) => (
                        <div key={group.name ?? "default"}>
                          {group.name && <p className="px-3 pb-1 pt-2 text-xs text-muted-foreground">{group.name}</p>}
                          <ul>
                            {group.items.map((item) => (
                              <li key={item.to}>
                                <MenuLink item={item} className="flex items-center gap-1.5 rounded-xl px-3 py-2.5 text-base">
                                  {item.label}
                                  {item.external && <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
                                </MenuLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
