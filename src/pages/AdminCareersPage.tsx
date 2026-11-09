import SiteChrome from "@/components/site/SiteChrome";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AdminGate } from "@/components/admin/AdminGate";
import { SEOHead } from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { allCareers, careerGroups, industries } from "@/data/careers";
import { ArrowLeft, Search, Shuffle, Sparkles } from "lucide-react";

function Explorer() {
  const [q, setQ] = useState("");
  const [group, setGroup] = useState<string>("all");
  const [industry, setIndustry] = useState<string>("all");
  const [futureOnly, setFutureOnly] = useState(false);
  const [random, setRandom] = useState<(typeof allCareers)[number] | null>(null);
  const [limit, setLimit] = useState(120);

  const pool = useMemo(() => {
    if (group === "all") return allCareers;
    return careerGroups.find((g) => g.key === group)?.careers ?? allCareers;
  }, [group]);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return pool.filter((c) => {
      if (futureOnly && !c.future) return false;
      if (industry !== "all" && c.industry !== industry) return false;
      if (!needle) return true;
      return (
        c.title.toLowerCase().includes(needle) ||
        c.industry.toLowerCase().includes(needle) ||
        c.what.toLowerCase().includes(needle)
      );
    });
  }, [pool, q, industry, futureOnly]);

  const visible = results.slice(0, limit);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/admin">
              <ArrowLeft className="h-4 w-4 mr-2" /> Admin
            </Link>
          </Button>
        </div>

        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Exposure library</p>
        <h1 className="text-3xl font-display font-semibold mb-2">Careers Explorer</h1>
        <p className="text-muted-foreground mb-8">
          {allCareers.length.toLocaleString()} careers across {industries.length} industries. Use this live on
          the projector during the keynote.
        </p>

        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setLimit(120);
              }}
              placeholder="Search a career, industry or what they do…"
              className="pl-9"
              aria-label="Search careers"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Button
              variant={group === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setGroup("all");
                setIndustry("all");
              }}
            >
              All
            </Button>
            {careerGroups.map((g) => (
              <Button
                key={g.key}
                variant={group === g.key ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setGroup(g.key);
                  setIndustry("all");
                  setLimit(120);
                }}
              >
                {g.label}
              </Button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={industry}
              onChange={(e) => {
                setIndustry(e.target.value);
                setLimit(120);
              }}
              aria-label="Filter by industry"
              className="h-9 rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="all">All industries</option>
              {Array.from(new Set(pool.map((c) => c.industry)))
                .sort()
                .map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
            </select>

            <Button
              variant={futureOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setFutureOnly((f) => !f)}
            >
              <Sparkles className="h-4 w-4 mr-2" /> Future careers
            </Button>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setRandom(results[Math.floor(Math.random() * results.length)] ?? null)}
            >
              <Shuffle className="h-4 w-4 mr-2" /> Random career
            </Button>

            <span className="text-sm text-muted-foreground ml-auto">
              {results.length.toLocaleString()} results
            </span>
          </div>
        </div>

        {random && (
          <div className="mb-8 rounded-xl border border-primary/40 bg-primary/5 p-6">
            <p className="text-xs uppercase tracking-widest text-primary mb-2">Guess the job</p>
            <p className="text-lg mb-3">“{random.what}”</p>
            <p className="font-semibold">{random.title}</p>
            <p className="text-sm text-muted-foreground">{random.industry}</p>
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((c) => (
            <div key={c.id} className="rounded-lg border border-border p-4">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-medium leading-snug">{c.title}</h2>
                {c.future && (
                  <Badge variant="secondary" className="shrink-0">
                    Future
                  </Badge>
                )}
              </div>
              <p className="text-xs text-primary mt-1">{c.industry}</p>
              <p className="text-sm text-muted-foreground mt-2">{c.what}</p>
            </div>
          ))}
        </div>

        {visible.length < results.length && (
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => setLimit((l) => l + 240)}>
              Show more ({results.length - visible.length} remaining)
            </Button>
          </div>
        )}

        {results.length === 0 && (
          <p className="text-center text-muted-foreground py-16">No careers match that search.</p>
        )}
      </div>
    </div>
  );
}

export default function AdminCareersPage() {
  return (
    <>
      <SEOHead title="Careers Explorer" description="Private admin careers library." noindex />
      <SiteChrome>
        <AdminGate title="Careers Explorer access">
          <Explorer />
        </AdminGate>
      </SiteChrome>
    </>
  );
}
