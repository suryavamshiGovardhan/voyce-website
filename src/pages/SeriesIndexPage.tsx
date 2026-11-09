import { Link } from "react-router-dom";
import { episodes } from "@/data/unheardMindEpisodes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

export default function SeriesIndexPage() {
  return (
    <div className="min-h-screen bg-[#0d0d14] text-[#f9f6f0]">
      <SEOHead
        title="The Unheard Mind — VOYCE Original Series"
        description="8 psychology concepts. Real stories. Ancient wisdom. No filter. A VOYCE original series by Suryavamshi Govardhan."
        keywords="VOYCE, The Unheard Mind, psychology series, mental health stories, shadow self, attachment theory"
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/series"
      />
      <Navbar />

      {/* Hero */}
      <section className="relative px-6 py-24 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(45,212,191,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="text-[0.72rem] tracking-[4px] uppercase text-[#2dd4bf] font-mono mb-5">
            VOYCE Original Series — 2026
          </div>
          <h1 className="font-serif font-black leading-[1.1] text-[#f9f6f0] mb-5 text-5xl md:text-7xl">
            The <em className="text-[#2dd4bf] not-italic md:italic">Unheard</em> Mind
          </h1>
          <p className="text-[#8888a8] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            8 psychology concepts. Real stories. Ancient wisdom. No filter.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Psychology", "Philosophy", "Vedic Lens", "Real Talk", "8 Episodes"].map((t) => (
              <span
                key={t}
                className="text-xs uppercase tracking-widest font-mono px-3 py-1 rounded-full border border-[#2dd4bf]/25 bg-[#2dd4bf]/10 text-[#2dd4bf]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Episode grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid gap-5 md:grid-cols-2">
          {episodes.map((ep) => (
            <Link
              key={ep.id}
              to={`/series/${ep.id}`}
              className="block rounded-xl bg-[#16192b] border border-white/10 border-l-[3px] border-l-[#2dd4bf] p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="text-xs tracking-[3px] font-mono text-[#2dd4bf] mb-2">
                {ep.number}
              </div>
              <h3 className="font-serif text-2xl text-[#f9f6f0] mb-3 leading-snug">
                {ep.title}
              </h3>
              <p className="text-sm text-[#8888a8] italic mb-4 leading-relaxed">
                "{ep.hook}"
              </p>
              <span className="inline-block text-[0.65rem] tracking-wider font-mono px-2.5 py-1 rounded-full border border-[#f5c842]/20 bg-[#f5c842]/10 text-[#f5c842]">
                {ep.tag}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
