import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { NextStep, LeaveWith } from "@/components/site/value";
import PageShell from "@/components/site/PageShell";
import { Input } from "@/components/ui/input";
import { Section, Eyebrow, StatementHeading, Lede, Reveal, QuietCard } from "@/components/site/primitives";
import { RESOURCE_CATEGORIES, RESOURCE_GUIDES } from "@/data/resourceGuides";
import { cn } from "@/lib/utils";

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const featured = RESOURCE_GUIDES.filter((g) => g.featured);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCE_GUIDES.filter((g) => {
      const matchesCategory = category === "All" || g.category === category;
      const matchesQuery =
        !q || g.title.toLowerCase().includes(q) || g.description.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <PageShell
      title="Guides and resources"
      description="An editorial library on student wellbeing, teacher wellbeing, parent guidance, emotional awareness, mindfulness, study stress and digital wellbeing — written in plain language."
      keywords="student wellbeing guides, mindfulness for students, study stress, teacher wellbeing resources, parent guidance"
      canonical="/resources"
    >
      <Section hero className="pt-16 sm:pt-24">
        <Reveal className="max-w-3xl">
          <Eyebrow>Resources</Eyebrow>
          <StatementHeading as="h1" className="text-4xl sm:text-5xl">
            Reading that respects how tired you already are.
          </StatementHeading>
          <Lede>
            Short, honest guides on the parts of wellbeing that rarely get named — written for students, teachers and
            parents, with no clinical language and no scare tactics.
          </Lede>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featured.map((g, i) => (
            <Reveal key={g.to + g.title} delay={i * 80}>
              <Link to={g.to} className="block h-full focus-visible:outline-none">
                <QuietCard interactive className="flex h-full flex-col">
                  <span className="text-xs uppercase tracking-[0.18em] text-primary">{g.category}</span>
                  <h2 className="mt-4 font-display text-xl leading-snug tracking-tight">{g.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{g.description}</p>
                  <span className="mt-6 text-xs text-muted-foreground">
                    {g.author} · {g.readingTime}
                  </span>
                </QuietCard>
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <LeaveWith className="mt-14" items={["Plain-language guides for adults", "Conversation starters you can use tonight", "Signs that mean it is time to get more help"]} />
        </Reveal>
      </Section>

      <Section tone="muted">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search guides"
              aria-label="Search guides"
              className="h-12 rounded-full pl-11"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "guide" : "guides"}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {["All", ...RESOURCE_CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition-colors",
                category === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:text-foreground",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g, i) => (
            <Reveal key={g.to + g.title} delay={Math.min(i, 6) * 50}>
              <Link to={g.to} className="block h-full">
                <QuietCard interactive className="flex h-full flex-col">
                  <span className="text-xs uppercase tracking-[0.18em] text-primary">{g.category}</span>
                  <h3 className="mt-4 text-lg font-medium leading-snug tracking-tight">{g.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{g.description}</p>
                  <span className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                    <span>
                      {g.readingTime} · {new Date(g.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                    </span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </QuietCard>
              </Link>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            Nothing matches that yet. Try a different word or category.
          </p>
        )}
      </Section>

      <Section>
        <Reveal className="grid gap-6 sm:grid-cols-3">
          {[
            { title: "The Unheard Mind", body: "Eight narrative episodes.", to: "/series" },
            { title: "Blog", body: "Essays and long-form reflections.", to: "/blog" },
            { title: "Library", body: "Deep dives and practice guides.", to: "/library" },
          ].map((c) => (
            <Link key={c.to} to={c.to}>
              <QuietCard interactive className="h-full">
                <h2 className="text-lg font-medium tracking-tight">{c.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </QuietCard>
            </Link>
          ))}
        </Reveal>
      </Section>
      <NextStep
        title="Want to try something yourself?"
        body="Short practices and plain-language reading, no account needed."
        primary={{ to: "/tools", label: "Try a practice" }}
        secondary={{ to: "/library", label: "Open the library" }}
      />
    </PageShell>
  );
}
