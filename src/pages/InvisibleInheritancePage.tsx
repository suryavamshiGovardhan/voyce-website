import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AuroraBackground from "@/components/iit/AuroraBackground";

const Section = ({ no, title, children }: { no: string; title: string; children: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6 }}
    className="py-14 border-t border-white/10"
  >
    <div className="flex items-baseline gap-4 mb-6">
      <span className="ii-marginalia">{no}</span>
      <h2 className="ii-display text-3xl md:text-5xl text-foreground">{title}</h2>
    </div>
    <div className="ii-serif text-foreground/85 text-base md:text-lg leading-relaxed space-y-5 [&_strong]:text-foreground [&_em]:text-emerald-300/90 [&_li]:my-1 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6">
      {children}
    </div>
  </motion.section>
);

export default function InvisibleInheritancePage() {
  return (
    <>
      <SEOHead
        title="The Invisible Inheritance — Emotional Readiness Before Marriage & Parenthood"
        description="A new emotional infrastructure layer from VOYCE. Helping couples understand themselves, each other, and inherited patterns — before emotional damage reaches the next generation."
        keywords="emotional inheritance, generational trauma, marriage readiness, parenting readiness, relationship literacy, VOYCE, India"
        canonicalUrl="https://suryavamshigovardhan.github.io/voyce-website/invisible-inheritance"
      />
      <AuroraBackground variant="spectrum">
        <Navbar />

        <main id="main-content" className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          {/* Hero */}
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 text-center"
          >
            <p className="ii-eyebrow mb-6">A VOYCE INITIATIVE</p>
            <h1 className="ii-display text-5xl md:text-8xl leading-[0.95] mb-8">
              The <em className="not-italic ii-text-gradient">Invisible</em><br />
              Inheritance
            </h1>
            <p className="ii-serif text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed italic">
              Society trains us for everything — driving, exams, jobs, machines.
              But nobody trains us for marriage, emotional responsibility, or raising a human.
            </p>
            <p className="mt-8 ii-marginalia">AN EMOTIONAL READINESS ECOSYSTEM — NOT A MARRIAGE EXAM</p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/invisible-inheritance/test"
                className="ii-cta ii-pill inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium hover:opacity-95 transition"
              >
                Take the Couple Test
              </Link>
              <a
                href="#vision"
                className="ii-pill inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.03] backdrop-blur text-sm font-medium text-foreground hover:bg-white/[0.08] transition"
              >
                Read the vision first
              </a>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="ii-glass-card rounded-2xl p-7 md:p-10 my-14"
          >
            <p className="ii-serif text-lg md:text-xl leading-relaxed text-foreground/90 ii-dropcap">
              Two emotionally unprepared people get married. Unresolved trauma becomes parenting.
              Stress becomes shouting. Silence becomes neglect. Ego becomes control. Children absorb everything —
              and another generation silently suffers. Society calls it <em>"normal family problems."</em>
              <br /><br />
              We don't believe it's normal. We believe it's inherited.
              And we believe it can be interrupted — gently, ethically, and with intelligence.
            </p>
          </motion.div>

          <div id="vision" />

          <Section no="01" title="The Big Vision">
            <p>
              Every emotional wound a child carries was, at some point, an unhealed wound in a parent.
              Trauma is not a private event — it is a relay race. Generations carry batons they were never
              shown how to put down.
            </p>
            <p>
              The Invisible Inheritance exists because the most consequential decisions of human life —
              choosing a partner, building a marriage, raising a child — are the only ones society refuses
              to prepare anyone for. We hand out marriage certificates with the same care we hand out movie tickets.
            </p>
            <p>
              This is not a relationship app. It is a quiet civilizational repair — an attempt to make
              emotional preparedness as obvious as financial planning, as expected as a driving license.
              If we get this right, we don't just help couples. We change what the next generation walks into.
            </p>
          </Section>

          <Section no="02" title="Name Directions">
            <p className="ii-marginalia">TWENTY WORKING NAMES — INDIAN, FUTURISTIC, POETIC, PHILOSOPHICAL</p>
            <ol className="grid md:grid-cols-2 gap-x-8 ii-serif">
              <li>The Invisible Inheritance</li>
              <li>Antaratma — the inner self</li>
              <li>Sankalpa — conscious intention</li>
              <li>Before We Become Parents</li>
              <li>Anvaya — lineage, continuity</li>
              <li>The Quiet Marriage</li>
              <li>Kinship OS</li>
              <li>Smriti — emotional memory</li>
              <li>Couple Compass</li>
              <li>Paramparā — what we pass down</li>
              <li>The Generational Pause</li>
              <li>Bhavna — feeling, intent</li>
              <li>The Readiness Lab</li>
              <li>Sahacharya — walking together</li>
              <li>The Family Architect</li>
              <li>Aarambh — the beginning</li>
              <li>Heirloom (the things we don't mean to give)</li>
              <li>Atma Sangam — meeting of selves</li>
              <li>Roots & Roof</li>
              <li>Maitri — emotional friendship</li>
            </ol>
          </Section>

          <Section no="03" title="The Philosophy">
            <p>
              We inherit more than wealth and surnames. We inherit the way our father went silent when
              he was hurt. The way our mother smiled when she was breaking. The way pressure became anger.
              The way love became control. We inherit the unfinished sentences of two people who were
              never allowed to feel.
            </p>
            <p>
              Modern marriage is treated as an event. It is, in truth, an emotional contract between
              two nervous systems. When neither has been taught regulation, language, or repair — what
              they build together is not a home. It is a weather system.
            </p>
            <p>
              Emotional illiteracy is not a personal failing. It is a societal omission. The Invisible
              Inheritance is built to close that gap with gentleness, not judgment.
            </p>
          </Section>

          <Section no="04" title="The Core Modules">
            <p className="ii-marginalia">TWENTY DOMAINS — EACH A THREAD IN THE FABRIC OF A FUTURE FAMILY</p>
            <ul>
              <li><strong>Emotional Awareness</strong> — naming what you feel before it controls you.</li>
              <li><strong>Communication</strong> — the difference between saying something and being understood.</li>
              <li><strong>Anger Patterns</strong> — anger is a messenger, not a personality.</li>
              <li><strong>Ego Management</strong> — the cost of being right is often being alone.</li>
              <li><strong>Stress Response</strong> — your nervous system is the room your child grows up in.</li>
              <li><strong>Conflict Handling</strong> — fighting is fine. Repair is the skill.</li>
              <li><strong>Financial Pressure</strong> — money is rarely about money.</li>
              <li><strong>Work–Life Balance</strong> — when work owns the parent, the child rents the leftovers.</li>
              <li><strong>Digital Addiction</strong> — presence is the new affection.</li>
              <li><strong>Emotional Safety</strong> — the prerequisite for everything.</li>
              <li><strong>Parenting Readiness</strong> — whether the child will have a regulated adult.</li>
              <li><strong>Childhood Trauma Awareness</strong> — naming the inheritance.</li>
              <li><strong>Intimacy & Trust</strong> — closeness built by small consistencies.</li>
              <li><strong>Family Boundary Systems</strong> — where your relationship ends and everyone else begins.</li>
              <li><strong>In-Law Pressure</strong> — the third presence in every Indian marriage.</li>
              <li><strong>Masculine & Feminine Conditioning</strong> — and the cost of both.</li>
              <li><strong>Emotional Neglect Detection</strong> — neglect is rarely loud.</li>
              <li><strong>Emotional Maturity Mapping</strong> — a living mirror, not a verdict.</li>
              <li><strong>Emotional Resilience</strong> — the ability to bend without becoming bitter.</li>
              <li><strong>Future Child Wellbeing</strong> — the silent end of every other module.</li>
            </ul>
          </Section>

          <Section no="05" title="The Experience">
            <p>
              The system feels less like an app and more like a long, honest walk with someone wise.
              Onboarding begins with a single question: <em>"What did you inherit that you don't want to pass on?"</em>
            </p>
            <ul>
              <li><strong>Emotional Mapping</strong> — a private inner-landscape.</li>
              <li><strong>Couple Mode</strong> — two private journeys that meet in shared reflections.</li>
              <li><strong>AI-Guided Conversations</strong> — not advice. Better questions.</li>
              <li><strong>Emotional Simulations</strong> — money tight, in-laws arrive, baby cries at 3am.</li>
              <li><strong>Reflective Journaling</strong> — slow, written, encrypted.</li>
              <li><strong>Voice Interactions</strong> — for those who think out loud.</li>
              <li><strong>Pressure Scenarios</strong> — controlled exposure to the moments marriages quietly break in.</li>
              <li><strong>Parenting Simulations</strong> — meeting the child you might raise.</li>
              <li><strong>Habit Tracking</strong> — small daily acts of emotional fitness.</li>
              <li><strong>Growth Paths</strong> — never linear, never gamified into shame.</li>
            </ul>
          </Section>

          <Section no="06" title="Masked Personality Detection (Ethical)">
            <p>People-pleasing looks like kindness. Control looks like care. Avoidance looks like peace.</p>
            <p>
              The system does not <em>diagnose</em>. It looks for <strong>contradictions between stated values
              and observed responses across time</strong> — and gently reflects them back, only to the user.
              Never to the partner without consent. Never as a verdict. Always as a mirror.
            </p>
          </Section>

          <Section no="07" title="The Role of the AI">
            <p>The AI is not a therapist. It is not a friend. It is a <em>thoughtful elder</em> — calm, observant, patient, allergic to clichés.</p>
            <ul>
              <li>It asks one question at a time.</li>
              <li>It notices what you don't say.</li>
              <li>It never matches your panic.</li>
              <li>It refuses to take sides between partners.</li>
              <li>It never gives medical, legal, or directive marital advice.</li>
              <li>It always points back to a human professional when the weight crosses a line.</li>
            </ul>
          </Section>

          <Section no="08" title="The Insight System">
            <ul>
              <li><strong>Readiness Levels</strong> — emerging, practising, integrated.</li>
              <li><strong>Growth Zones</strong> — the two or three areas worth your next 90 days.</li>
              <li><strong>Communication Patterns</strong> — how you tend to enter, escalate, exit.</li>
              <li><strong>Blind Spots</strong> — gently surfaced, never publicly.</li>
              <li><strong>Resilience Indicators</strong> — recovery time, repair quality, support seeking.</li>
              <li><strong>Parenting Preparedness</strong> — regulation, presence, co-parenting alignment.</li>
              <li><strong>Harmony Map</strong> — the rhythm of two nervous systems learning each other.</li>
            </ul>
          </Section>

          <Section no="09" title="The Ethics">
            <ul>
              <li><strong>Consent</strong> — granular, revocable, plain-language.</li>
              <li><strong>Privacy</strong> — encryption at rest, no advertising, no data sales.</li>
              <li><strong>Ownership</strong> — export or erase in one tap.</li>
              <li><strong>AI Boundaries</strong> — no diagnosis, no manipulation, no dependency loops.</li>
              <li><strong>Cultural Sensitivity</strong> — designed with Indian families.</li>
              <li><strong>Misuse Prevention</strong> — never weaponised against a partner.</li>
              <li><strong>Anti-discrimination</strong> — caste, religion, orientation never inputs to insight.</li>
            </ul>
            <p>It must always feel like guidance — never surveillance.</p>
          </Section>

          <Section no="10" title="The Social Impact">
            <p>
              Imagine a country where every couple, before children, has spent fifty hours
              understanding their own nervous system. We cannot prove this in a quarter.
              We can prove it in a generation.
            </p>
          </Section>

          <Section no="11" title="Designed for India, First">
            <ul>
              <li>Multilingual (Hindi, Telugu, Tamil, Kannada, Marathi, Bengali, English).</li>
              <li>Voice-first paths for low-literacy users.</li>
              <li>Family modules that include parents and in-laws without surrendering the couple's privacy.</li>
              <li>Gentle scripts for pre-engagement conversations the family won't allow.</li>
              <li>Low-bandwidth, offline reflection for tier-3 and rural India.</li>
            </ul>
          </Section>

          <Section no="12" title="The Business Model">
            <ul>
              <li><strong>Free forever</strong> — solo emotional awareness, journaling, basic insights.</li>
              <li><strong>Couple Journeys</strong> — premium guided paths, simulations, deep reports.</li>
              <li><strong>Family Wellness</strong> — extended subscriptions for households.</li>
              <li><strong>Schools & Colleges</strong> — relationship literacy as part of life education.</li>
              <li><strong>Government & NGO partnerships</strong> — premarital readiness as public health.</li>
              <li><strong>Counselling Centres</strong> — clinician-supported tier with handoff protocols.</li>
              <li><strong>Certifications</strong> — facilitator training for educators and counsellors.</li>
            </ul>
            <p>Profit is fuel, not the destination. The destination is a healthier next generation.</p>
          </Section>

          <Section no="13" title="The MVP">
            <ol>
              <li><strong>The Inheritance Map</strong> — a 20-minute solo reflection.</li>
              <li><strong>The Quiet Conversation</strong> — an AI-guided conversation that asks better questions.</li>
              <li><strong>The Readiness Mirror</strong> — three growth zones, no score, one practice for 30 days.</li>
            </ol>
            <p>First user journey: a single person, alone, late at night, finishing with the words <em>"someone finally said the thing."</em></p>
          </Section>

          <Section no="14" title="The Future">
            <p><strong>Year 1</strong> — a beloved tool for individuals and couples in India.</p>
            <p><strong>Year 3</strong> — a recognised relationship literacy standard across South Asia.</p>
            <p><strong>Year 10</strong> — emotional readiness becomes as expected as a driving license.</p>
            <p>This is the long game. We are building emotional infrastructure for civilisation.</p>
          </Section>

          {/* CTA */}
          <div className="mt-20 ii-gradient-border">
            <div className="p-10 md:p-14 text-center">
              <p className="ii-marginalia mb-4">JOIN EARLY</p>
              <h3 className="ii-display text-3xl md:text-5xl mb-5">
                <span className="ii-text-gradient">Be part of the first generation that paused.</span>
              </h3>
              <p className="ii-serif text-foreground/80 max-w-xl mx-auto mb-8 text-lg italic">
                The Invisible Inheritance is being built quietly. If this resonates, walk with us.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link to="/invisible-inheritance/test" className="ii-cta ii-pill inline-flex items-center px-7 py-3.5 text-sm font-medium">
                  Take the Couple Test
                </Link>
                <Link to="/contact" className="ii-pill inline-flex items-center px-7 py-3.5 rounded-full border border-white/15 bg-white/[0.03] text-sm font-medium text-foreground hover:bg-white/[0.08] transition">
                  Get notified
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-12 text-xs text-center text-muted-foreground italic ii-serif">
            VOYCE is reflective and educational. It is not therapy or diagnosis.
            For clinical support, please consult a licensed professional.
          </p>
        </main>

        <Footer />
      </AuroraBackground>
    </>
  );
}
