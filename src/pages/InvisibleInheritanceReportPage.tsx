import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import CompatibilityMap from "@/components/iit/CompatibilityMap";
import ConversationPrompts from "@/components/iit/ConversationPrompts";
import ShareLinksPanel from "@/components/iit/ShareLinksPanel";
import ReportPDFButton from "@/components/iit/ReportPDFButton";
import AuroraBackground from "@/components/iit/AuroraBackground";
import { Button } from "@/components/ui/button";
import { generateReport, IITReport, PartnerAnswerMap } from "@/lib/iit/scoring";

interface SessionRow {
  id: string;
  session_code: string;
  partner_a_completed_at: string | null;
  partner_b_completed_at: string | null;
}

export default function InvisibleInheritanceReportPage() {
  const { sessionCode = "" } = useParams();
  const code = sessionCode.toUpperCase();
  const [session, setSession] = useState<SessionRow | null>(null);
  const [report, setReport] = useState<IITReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data: statusData, error: se } = await supabase.rpc("iit_session_status", { p_code: code });
        if (cancelled) return;
        const s = Array.isArray(statusData) ? statusData[0] : null;
        if (se || !s) { setError("Session not found."); setLoading(false); return; }
        setSession({
          id: s.id,
          session_code: code,
          partner_a_completed_at: s.partner_a_completed_at,
          partner_b_completed_at: s.partner_b_completed_at,
        });

        if (!s.partner_a_completed_at || !s.partner_b_completed_at) {
          setLoading(false);
          return;
        }

        const { data: rows, error: re } = await supabase.rpc("iit_get_responses", { p_code: code });
        if (cancelled) return;
        if (re) { setError("Couldn't load responses."); setLoading(false); return; }

        const answersA: PartnerAnswerMap = {};
        const answersB: PartnerAnswerMap = {};
        (rows ?? []).forEach((r: any) => {
          if (r.partner === "a") answersA[r.question_id] = r.answer_value;
          else if (r.partner === "b") answersB[r.question_id] = r.answer_value;
        });
        setReport(generateReport(answersA, answersB));
        setLoading(false);
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError("Something went wrong.");
          setLoading(false);
        }
      }
    })();
    return () => { cancelled = true; };
  }, [code]);

  const partnerALink = `/invisible-inheritance/test/${code}/a`;
  const partnerBLink = `/invisible-inheritance/test/${code}/b`;
  const reportLink = `/invisible-inheritance/test/${code}/report`;

  return (
    <div className="v-legacy min-h-screen flex flex-col">
      <SEOHead
        title="Your Reflection — The Invisible Inheritance Test"
        description="A shared compatibility map for the patterns you each inherited. Conversations to have before vows."
        canonicalUrl={`https://suryavamshigovardhan.github.io/voyce-website/invisible-inheritance/test/${code}/report`}
      />
      <AuroraBackground variant="spectrum">
        <Navbar />

        <main className="flex-1 px-4 py-16 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <p className="ii-eyebrow mb-4">SESSION {code} · YOUR SHARED REFLECTION</p>
            <h1 className="ii-display text-4xl sm:text-6xl mb-4 leading-[1.02]">
              <span className="ii-text-gradient">What you each brought into the room.</span>
            </h1>
            <p className="ii-serif text-muted-foreground max-w-xl mx-auto mb-10 text-base sm:text-lg leading-relaxed italic">
              This is not a score. It is a mirror — pointed gently at the patterns
              you each inherited before you ever met.
            </p>
          </motion.div>

          {/* Share + PDF toolbar */}
          {!loading && !error && (
            <div className="mb-10 space-y-4">
              <ShareLinksPanel
                code={code}
                partnerALink={partnerALink}
                partnerBLink={partnerBLink}
                reportLink={reportLink}
              />
              {report && (
                <div className="flex justify-end">
                  <ReportPDFButton targetRef={reportRef} sessionCode={code} />
                </div>
              )}
            </div>
          )}

          {loading && <p className="text-center text-muted-foreground italic ii-serif">Composing your reflection…</p>}

          {!loading && error && (
            <div className="text-center">
              <p className="text-rose-400 mb-4 ii-serif">{error}</p>
              <Link to="/invisible-inheritance/test">
                <Button variant="outline" className="ii-pill bg-card/[0.03] border-white/15">Back to the test</Button>
              </Link>
            </div>
          )}

          {!loading && session && !report && (
            <div className="ii-glass-card rounded-2xl p-8 text-center max-w-lg mx-auto">
              <h2 className="ii-display text-2xl mb-3">Waiting for the other half.</h2>
              <ul className="text-sm text-muted-foreground space-y-2 mb-6 ii-serif">
                <li>Partner A: {session.partner_a_completed_at ? "complete" : "not yet"}</li>
                <li>Partner B: {session.partner_b_completed_at ? "complete" : "not yet"}</li>
              </ul>
              <p className="text-xs text-muted-foreground mb-6 italic">
                The report opens automatically once both partners finish. Share the link above with them.
              </p>
              <Link to="/invisible-inheritance/test">
                <Button variant="outline" className="ii-pill bg-card/[0.03] border-white/15">Back</Button>
              </Link>
            </div>
          )}

          {!loading && report && (
            <div ref={reportRef} className="space-y-14 py-2">
              {/* Overall */}
              <section className="text-center">
                <p className="ii-eyebrow mb-3">OVERALL ALIGNMENT</p>
                <p className="ii-display text-7xl sm:text-9xl mb-4 leading-none">
                  <span className="ii-text-gradient">{report.overallAlignment}</span>
                  <span className="text-3xl text-muted-foreground">%</span>
                </p>
                <div className="flex justify-center gap-6 text-xs text-muted-foreground ii-serif">
                  <span><span className="text-primary font-medium">{report.resonanceCount}</span> resonance</span>
                  <span><span className="text-amber-700 font-medium">{report.tensionCount}</span> tension</span>
                  <span><span className="text-rose-300 font-medium">{report.blindSpotCount}</span> blind spot</span>
                </div>
              </section>

              <section>
                <h2 className="ii-display text-3xl sm:text-4xl mb-6">The constellation</h2>
                <CompatibilityMap dimensions={report.dimensions} />
              </section>

              <section className="space-y-4">
                <h2 className="ii-display text-3xl sm:text-4xl mb-4">Dimension by dimension</h2>
                {report.dimensions.map((d, i) => (
                  <motion.div
                    key={d.dimensionId}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    className="ii-glass-card ii-glass-card-hover rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="ii-display text-2xl text-foreground">{d.title}</h3>
                        <p className="text-xs text-muted-foreground ii-serif italic">{d.subtitle}</p>
                      </div>
                      <span className={[
                        "text-[10px] uppercase tracking-[0.3em] px-2.5 py-1 rounded-full border whitespace-nowrap",
                        d.zone === "resonance" && "text-primary border-primary/40 bg-primary/5",
                        d.zone === "tension" && "text-amber-700 border-amber-300 bg-primary/5",
                        d.zone === "blind_spot" && "text-rose-300 border-rose-400/40 bg-rose-400/5",
                      ].filter(Boolean).join(" ")}>
                        {d.zone.replace("_", " ")}
                      </span>
                    </div>
                    <div className="flex gap-4 text-xs text-muted-foreground mb-3 flex-wrap">
                      <span>A: <span className="text-foreground ii-serif italic">{d.partnerA.archetype}</span></span>
                      <span>B: <span className="text-foreground ii-serif italic">{d.partnerB.archetype}</span></span>
                      <span className="ml-auto">{d.alignment}% aligned</span>
                    </div>
                    <p className="ii-serif text-foreground/85 leading-relaxed text-base">{d.insight}</p>
                  </motion.div>
                ))}
              </section>

              <section>
                <h2 className="ii-display text-3xl sm:text-4xl mb-2">
                  The {report.topConversations.length} conversations to have before vows
                </h2>
                <p className="text-sm text-muted-foreground mb-8 italic ii-serif">
                  Don't try them all tonight. One per week. No fixing. Just listening.
                </p>
                <ConversationPrompts prompts={report.topConversations} />
              </section>

              <section className="border-t border-white/10 pt-10 text-center">
                <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed italic ii-serif">
                  This is a reflection tool, not a clinical assessment, prediction, or therapy.
                  Carry it gently. The patterns you inherited were not chosen — but what you do
                  with them now, you can choose together.
                </p>
                <div className="mt-6 flex justify-center gap-3 flex-wrap">
                  <Link to="/invisible-inheritance">
                    <Button variant="outline" className="ii-pill bg-card/[0.03] border-white/15">The vision</Button>
                  </Link>
                  <Link to="/invisible-inheritance/test">
                    <Button variant="outline" className="ii-pill bg-card/[0.03] border-white/15">Start another session</Button>
                  </Link>
                </div>
              </section>
            </div>
          )}
        </main>

        <Footer />
      </AuroraBackground>
    </div>
  );
}
