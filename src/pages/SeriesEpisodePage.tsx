import { Link, useParams, Navigate } from "react-router-dom";
import { episodes, getEpisode } from "@/data/unheardMindEpisodes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import ReadingProgress from "@/components/engagement/ReadingProgress";
import ReflectPause from "@/components/engagement/ReflectPause";
import ContinueJourney from "@/components/engagement/ContinueJourney";

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
        <strong key={key++} className="text-[#f9f6f0] font-medium">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      parts.push(
        <em key={key++} className="text-[#2dd4bf] italic">
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
    <div className="min-h-screen bg-[#0d0d14] text-[#f9f6f0]">
      <SEOHead
        title={`${ep.number}: ${ep.title} — The Unheard Mind | VOYCE`}
        description={ep.hook}
        keywords={`VOYCE, The Unheard Mind, ${ep.tag}, ${ep.title}, mental health, psychology`}
        ogType="article"
        canonicalUrl={`https://suryavamshigovardhan.github.io/voyce-website/series/${ep.id}`}
      />
      <Navbar />
      <ReadingProgress />

      <article className="max-w-2xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-14">
          <div className="text-[0.7rem] tracking-[3px] uppercase font-mono text-[#2dd4bf] mb-3">
            {ep.number} · {ep.tag}
          </div>
          <h1 className="font-serif font-black text-4xl md:text-5xl leading-tight text-[#f9f6f0] mb-5">
            {ep.title}
          </h1>
          <blockquote className="font-serif italic text-lg text-[#2dd4bf] border-l-[3px] border-[#2dd4bf] pl-5 leading-relaxed">
            "{ep.hook}"
          </blockquote>
        </header>

        {/* Sections */}
        {ep.sections.map((section, i) => (
          <section key={i} className="mb-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-base">{section.icon}</span>
              <span className="text-[0.7rem] tracking-[3px] uppercase font-mono text-[#8888a8]">
                {section.label}
              </span>
              <span className="flex-1 h-px bg-card" />
            </div>

            {(section.type === "story" || section.type === "psychology") && (
              <div className="space-y-4">
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-[#c8c8d8] text-base leading-[1.85]">
                    {renderInline(p)}
                  </p>
                ))}
                {section.pullquote && (
                  <div className="my-8 rounded-r-lg border-l-[3px] border-[#2dd4bf] bg-gradient-to-br from-[#2dd4bf]/10 to-[#2dd4bf]/[0.02] px-7 py-6 font-serif italic text-lg text-[#f9f6f0] leading-relaxed">
                    {section.pullquote}
                  </div>
                )}
              </div>
            )}

            {section.type === "vedic" && (
              <div className="rounded-xl border border-[#f5c842]/15 bg-gradient-to-br from-[#f5c842]/5 to-[#f5c842]/[0.02] p-7">
                {section.shloka && (
                  <div className="font-serif italic text-[#f5c842] mb-3 leading-relaxed">
                    "{section.shloka}"
                    {section.shlokaSource && (
                      <div className="text-sm text-[#c8c8a8] mt-1 not-italic">
                        — {section.shlokaSource}
                      </div>
                    )}
                  </div>
                )}
                <div className="space-y-3">
                  {section.vedicBody?.map((p, j) => (
                    <p key={j} className="text-[#c8c8a8] leading-relaxed">
                      {renderInline(p)}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {section.type === "realtalk" && (
              <div className="rounded-xl border border-border bg-[#13131f] p-7">
                <ul className="space-y-3 list-disc pl-5 marker:text-[#2dd4bf]">
                  {section.bullets?.map((b, j) => (
                    <li key={j} className="text-[#c8c8d8] leading-relaxed">
                      <strong className="text-[#f9f6f0] font-medium">{b.strong}</strong>{" "}
                      {b.text}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}

        {/* Takeaway */}
        <div className="mt-12 rounded-xl border border-[#2dd4bf]/20 bg-gradient-to-br from-[#1a1a2e] to-[#13131f] p-8 text-center font-serif italic text-xl text-[#2dd4bf] leading-relaxed">
          ✦ {ep.takeaway} ✦
        </div>

        <ReflectPause dark prompt="Take a breath. Which part of this story could have been yours?" />

        <ContinueJourney
          dark
          links={[
            next
              ? { to: `/series/${next.id}`, label: `${next.number}: ${next.title}`, hint: "The next story in The Unheard Mind." }
              : { to: "/series", label: "All episodes", hint: "Return to the beginning of the series." },
            { to: "/tools", label: "Immersion tools", hint: "Practices to sit with what this stirred." },
            { to: "/journal", label: "Your journal", hint: "Write a few private lines while it's still warm." },
          ]}
        />

        {/* Nav */}
        <div className="mt-12 pt-10 border-t border-border flex justify-between gap-4 text-sm font-mono">
          {prev ? (
            <Link to={`/series/${prev.id}`} className="text-[#2dd4bf] hover:underline">
              ← {prev.number}: {prev.title}
            </Link>
          ) : (
            <Link to="/series" className="text-[#8888a8] hover:text-[#2dd4bf]">
              ← All Episodes
            </Link>
          )}
          {next ? (
            <Link to={`/series/${next.id}`} className="text-[#2dd4bf] hover:underline text-right">
              {next.number}: {next.title} →
            </Link>
          ) : (
            <Link to="/series" className="text-[#8888a8] hover:text-[#2dd4bf]">
              All Episodes →
            </Link>
          )}
        </div>

        <div className="mt-10 text-center text-xs text-[#8888a8] font-mono">
          Written by Suryavamshi Govardhan · Founder, VOYCE
        </div>
      </article>

      <Footer />
    </div>
  );
}
