import SiteChrome from "@/components/site/SiteChrome";
import { Link } from "react-router-dom";
import { AdminGate, useAdminAuth } from "@/components/admin/AdminGate";
import { SEOHead } from "@/components/SEOHead";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Presentation, Compass, LayoutDashboard, LogOut } from "lucide-react";

const items = [
  {
    to: "/admin/blueprint",
    icon: LayoutDashboard,
    title: "Neural Blueprint",
    desc: "The VOYCE-X architecture deck — view, edit in Canva, or share.",
  },
  {
    to: "/admin/keynote",
    icon: Presentation,
    title: "Keynote — Exposure Is All You Need",
    desc: "Present-ready keynote for Classes 8–12 with speaker notes, PDF handout and PowerPoint download.",
  },
  {
    to: "/admin/careers",
    icon: Compass,
    title: "Careers Explorer",
    desc: "Search and filter 2000+ unconventional careers across 80 industries.",
  },
];

function Hub() {
  const { lock } = useAdminAuth();
  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Private</p>
            <h1 className="text-3xl font-display font-semibold">VOYCE Admin</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={lock}>
            <LogOut className="h-4 w-4 mr-2" /> Lock
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <Card key={item.to} className="p-5 hover:border-primary/50 transition-colors">
              <Link to={item.to} className="block">
                <item.icon className="h-6 w-6 text-primary mb-3" />
                <h2 className="font-semibold mb-1">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AdminHubPage() {
  return (
    <>
      <SEOHead title="Admin" description="Private VOYCE admin area." noindex />
      <SiteChrome>
        <AdminGate title="VOYCE Admin">
          <Hub />
        </AdminGate>
      </SiteChrome>
    </>
  );
}
