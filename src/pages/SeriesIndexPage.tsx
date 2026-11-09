import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { episodes } from "@/data/unheardMindEpisodes";
import PageShell from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";
import { PageHero, LeaveWith, NextStep } from "@/components/site/value";

export default function SeriesIndexPage() {
  const first = episodes[0];
  return (
    <PageShell
      title="The Unheard Mind — VOYCE original series"
      description="Eight psychology ideas, each told through a story, a plain explanation, an older wisdom lens and a few honest takeaways. A VOYCE original series by Suryavamshi Govardhan."
      canonical="/series"
      keywords="VOYCE, The Unheard Mind, psychology series, shadow self, attachment theory"
    >
      <PageHero
        eyebrow={`VOYCE original series · ${episodes.length} episodes`}
        title={<>The <span className="text-primary">Unheard</span> Mind</>}
        lede="Eight psychology ideas you have probably lived but never named. Each episode is a short story, a plain explanation, an older wisdom lens and a few honest takeaways — about a ten-minute read."
        primary={first ? { to: `/series/${first.id}`, label: `Start with ${first.number}` } : undefined}
        aside={
          <LeaveWith
            compact
            items={[
              "A name for a pattern you may recognise in yourself",
              "The psychology behind it, without jargon",
              "One question to sit with after each episode",
            ]}
          />
        }
      />

      <Section className="py-14 sm:py-20">
        <ol className="grid gap-5 md:grid-cols-2">
          {episodes.map((ep, i) => (
            <Reveal as="li" key={ep.id} delay={(i % 2) * 80}>
              <Link
                to={`/series/${ep.id}`}
                className="v-card v-card-hover group flex h-full flex-col p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-primary">{ep.number}</span>
                  <span className="rounded-full bg-muted px-2.5 py-1 text-[0.7rem] font-medium text-muted-foreground">{ep.tag}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl leading-snug tracking-tight text-foreground">{ep.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{ep.hook}</p>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-primary">
                  Read episode <ArrowRight className="v-arrow ml-1.5 h-4 w-4" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </Section>

      <NextStep
        title="Read one, then reflect on it privately."
        body="A two-minute check-in helps a story land."
        primary={{ to: "/start-here", label: "Start a private check-in" }}
        secondary={{ to: "/blog", label: "More slow reads" }}
      />
    </PageShell>
  );
}
