import { Link, useParams, Navigate } from "react-router-dom";
import { episodes, getEpisode } from "@/data/unheardMindEpisodes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import ReadingProgress from "@/components/engagement/ReadingProgress";
import ReflectPause from "@/components/engagement/ReflectPause";
import ContinueJourney from "@/components/engagement/ContinueJourney";
import { LearnCheck } from "@/components/site/LearnCheck";

// Lightweight markdown: **bold** and *italic*
function renderInline(text: string) {
  const parts: (string | JSX.Element)[] = [];
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(
        <strong key={key++} className="text-foreground font-medium">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      parts.push(
        <em key={key++} className="text-primary italic">
          {token.slice(1, -1)}
        </em>,
      );
    }
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export default function SeriesEpisodePage() {
  const { episodeId } = useParams();
  const ep = episodeId ? getEpisode(episodeId) : undefined;
  if (!ep) return <Navigate to="/series" replace />;

  const idx = episodes.findIndex((e) => e.id === ep.id);
  const prev = idx > 0 ? episodes[idx - 1] : null;
  const next = idx < episodes.length - 1 ? episodes[idx + 1] : null;

  return (
    <div className="v-legacy min-h-screen bg-background text-foreground">
      <SEOHead
        title={`${ep.number}: ${ep.title} — The Unheard Mind | VOYCE`}
        description={ep.hook}
        keywords={`VOYCE, The Unheard Mind, ${ep.tag}, ${ep.title}, mental health, psychology`}
        ogType="article"
        canonicalUrl={`https://suryavamshigovardhan.github.io/voyce-website/series/${ep.id}`}
      />
      <Navbar />
      <ReadingProgress />

      <article className="max-w-2xl mx-auto px-5 py-14 sm:px-6 sm:py-20">
        {/* Header */}
        <header className="v-rise mb-14">
          <Link to="/series" className="v-link mb-6 inline-block text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            The Unheard Mind
          </Link>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {ep.number} · {ep.tag}
          </p>
          <h1 className="font-display text-4xl leading-[1.08] tracking-tight text-foreground md:text-5xl">{ep.title}</h1>
          <p className="mt-6 border-l-2 border-primary/60 pl-5 text-lg leading-relaxed text-foreground/80">{ep.hook}</p>
          <p className="mt-6 text-xs text-muted-foreground">
            Episode {idx + 1} of {episodes.length} · Reflective reading, not therapy or diagnosis
          </p>
        </header>

        {/* Sections */}
        {ep.sections.map((section, i) => (
          <section key={i} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-base">{section.icon}</span>
              <span className="text-[0.7rem] tracking-[3px] uppercase text-muted-foreground">
                {section.label}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            {(section.type === "story" || section.type === "psychology") && (
              <div className="space-y-4">
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-foreground/80 text-base leading-[1.85]">
                    {renderInline(p)}
                  </p>
                ))}
                {section.pullquote && (
                  <div className="my-8 rounded-r-lg border-l-[3px] border-primary bg-gradient-to-br from-primary/10 to-primary/[0.02] px-7 py-6 font-display italic text-lg text-foreground leading-relaxed">
                    {section.pullquote}
                  </div>
                )}
              </div>
            )}

            {section.type === "vedic" && (
              <div className="rounded-2xl border border-border v-tint-apricot p-7">
                {section.shloka && (
                  <div className="font-display italic text-foreground mb-3 leading-relaxed">
                    "{section.shloka}"
                    {section.shlokaSource && (
                      <div className="text-sm text-foreground/75 mt-1 not-italic">
                        — {section.shlokaSource}
                      </div>
                    )}
                  </div>
                )}
                <div className="space-y-3">
                  {section.vedicBody?.map((p, j) => (
                    <p key={j} className="text-foreground/75 leading-relaxed">
                      {renderInline(p)}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {section.type === "realtalk" && (
              <div className="rounded-xl border border-border bg-surface p-7">
                <ul className="space-y-3 list-disc pl-5 marker:text-primary">
                  {section.bullets?.map((b, j) => (
                    <li key={j} className="text-foreground/80 leading-relaxed">
                      <strong className="text-foreground font-medium">{b.strong}</strong>{" "}
                      {b.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}

        {/* Takeaway */}
        <div className="v-card mt-12 p-8 text-center">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">What you leave with</p>
          <p className="font-display text-xl leading-relaxed text-foreground sm:text-2xl">{ep.takeaway}</p>
        </div>

        <ReflectPause prompt="Take a breath. Which part of this story could have been yours?" />
        <LearnCheck topic="story" className="px-0 sm:px-0" />

        <ContinueJourney
          links={[
            next
              ? { to: `/series/${next.id}`, label: `${next.number}: ${next.title}`, hint: "The next story in The Unheard Mind." }
              : { to: "/series", label: "All episodes", hint: "Return to the beginning of the series." },
            { to: "/tools", label: "Calm practices", hint: "Practices to sit with what this stirred." },
            { to: "/journal", label: "Your journal", hint: "Write a few private lines while it's still warm." },
          ]}
        />

        {/* Nav */}
        <div className="mt-12 pt-10 border-t border-border flex justify-between gap-4 text-sm">
          {prev ? (
            <Link to={`/series/${prev.id}`} className="text-primary hover:underline">
              ← {prev.number}: {prev.title}
            </Link>
          ) : (
            <Link to="/series" className="text-muted-foreground hover:text-primary">
              ← All Episodes
            </Link>
          )}
          {next ? (
            <Link to={`/series/${next.id}`} className="text-primary hover:underline text-right">
              {next.number}: {next.title} →
            </Link>
          ) : (
            <Link to="/series" className="text-muted-foreground hover:text-primary">
              All Episodes →
            </Link>
          )}
        </div>

        <div className="mt-10 text-center text-xs text-muted-foreground">
          Written by Suryavamshi Govardhan · Founder, VOYCE
        </div>
      </article>

      <Footer />
    </div>
  );
}
