import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { generateSessionCode } from "@/lib/iit/scoring";
import SessionCodeCard from "@/components/iit/SessionCodeCard";
import AuroraBackground from "@/components/iit/AuroraBackground";

export default function InvisibleInheritanceTestPage() {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false);
  const [createdCode, setCreatedCode] = useState<string | null>(null);
  const [joinCode, setJoinCode] = useState("");
  const [joining, setJoining] = useState(false);

  const createSession = async () => {
    setCreating(true);
    try {
      let code = generateSessionCode();
      for (let attempt = 0; attempt < 4; attempt++) {
        const { data: exists } = await supabase.rpc("iit_session_exists", { p_code: code });
        if (!exists) break;
        code = generateSessionCode();
      }
      const { error } = await supabase.rpc("iit_create_session", { p_code: code });
      if (error) throw error;
      setCreatedCode(code);
    } catch (err) {
      console.error(err);
      toast.error("Couldn't create a session. Try again in a moment.");
    } finally {
      setCreating(false);
    }
  };

  const joinSession = async () => {
    const code = joinCode.trim().toUpperCase();
    if (code.length < 4) { toast.error("Enter a valid session code."); return; }
    setJoining(true);
    try {
      const { data, error } = await supabase.rpc("iit_session_exists", { p_code: code });
      if (error) throw error;
      if (!data) { toast.error("Session not found."); return; }
      navigate(`/invisible-inheritance/test/${code}/b`);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    } finally {
      setJoining(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="The Invisible Inheritance Test — A Pre-Marriage Mirror"
        description="A cinematic emotional-readiness test for couples before marriage. Surface the inherited patterns, triggers and templates that usually surface too late."
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/invisible-inheritance/test"
      />
      <AuroraBackground variant="spectrum">
        <Navbar />

        <main className="flex-1">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 pt-20 pb-14 max-w-3xl mx-auto text-center"
          >
            <p className="ii-eyebrow mb-6">A VOYCE INITIATIVE · THE INVISIBLE INHERITANCE</p>
            <h1 className="ii-display text-5xl sm:text-7xl mb-8 leading-[1.02]">
              The test you take <em className="not-italic ii-text-gradient">before</em><br className="hidden sm:inline" />
              the wedding, not the therapy you book after.
            </h1>
            <p className="ii-serif text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 italic max-w-2xl mx-auto">
              Two of you. Sixty quiet questions. Ten dimensions of the patterns
              you each inherited without noticing. One shared map that shows where
              you align, where you'll clash, and where one of you will unknowingly
              trigger the other's oldest wound.
            </p>

            {!createdCode && (
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" onClick={createSession} disabled={creating} className="ii-cta ii-pill min-w-[220px]">
                  {creating ? "Opening a session…" : "Start as a couple"}
                </Button>
                <Link to="/invisible-inheritance">
                  <Button size="lg" variant="outline" className="ii-pill min-w-[220px] bg-white/[0.03] border-white/15">
                    Read the vision first
                  </Button>
                </Link>
              </div>
            )}
          </motion.section>

          {createdCode && (
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 pb-16 max-w-2xl mx-auto"
            >
              <SessionCodeCard
                code={createdCode}
                partnerALink={`/invisible-inheritance/test/${createdCode}/a`}
                partnerBLink={`/invisible-inheritance/test/${createdCode}/b`}
                reportLink={`/invisible-inheritance/test/${createdCode}/report`}
              />
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to={`/invisible-inheritance/test/${createdCode}/a`}>
                  <Button size="lg" className="ii-cta ii-pill min-w-[200px]">Begin as Partner A</Button>
                </Link>
                <Link to={`/invisible-inheritance/test/${createdCode}/b`}>
                  <Button size="lg" variant="outline" className="ii-pill min-w-[200px] bg-white/[0.03] border-white/15">
                    Begin as Partner B
                  </Button>
                </Link>
              </div>
            </motion.section>
          )}

          {/* Join existing */}
          <section className="px-4 pb-20 max-w-md mx-auto">
            <div className="ii-divider" />
            <p className="ii-marginalia text-center mb-4">YOUR PARTNER ALREADY STARTED?</p>
            <div className="flex gap-2">
              <Input
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                placeholder="ENTER CODE"
                maxLength={8}
                className="font-mono tracking-[0.3em] text-center bg-white/[0.04] border-white/15"
                aria-label="Session code"
              />
              <Button onClick={joinSession} disabled={joining} className="ii-pill">
                {joining ? "…" : "Join"}
              </Button>
            </div>
          </section>

          {/* Dimensions teaser */}
          <section className="px-4 pb-28 max-w-4xl mx-auto">
            <h2 className="ii-display text-3xl sm:text-4xl text-foreground mb-3 text-center">
              <span className="ii-text-gradient">What this test surfaces</span>
            </h2>
            <p className="ii-marginalia text-center mb-10">TEN DIMENSIONS · SIXTY QUIET QUESTIONS</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
              {[
                "Conflict Inheritance", "Love Language Origin", "Money Memory",
                "Emotional Vocabulary", "Parenting Template", "Silence vs Confrontation",
                "Roles & Gender Scripts", "Triggers & Wounds", "Boundary Architecture",
                "Vision of Home",
              ].map((d, i) => (
                <motion.div
                  key={d}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="ii-glass-card ii-glass-card-hover rounded-xl px-4 py-4 ii-serif text-foreground/85"
                >
                  {d}
                </motion.div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-12 leading-relaxed italic ii-serif max-w-xl mx-auto">
              A reflection tool, not a clinical assessment. Not a predictor of marriage success
              or failure. A mirror for the conversations that usually arrive too late.
            </p>
          </section>
        </main>

        <Footer />
      </AuroraBackground>
    </div>
  );
}
