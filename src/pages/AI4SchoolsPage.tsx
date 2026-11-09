import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Sparkles, Bot, Cpu, Code2, Rocket, Brain, Atom, Plane, Globe, Lightbulb,
  GraduationCap, Wrench, Eye, Layers, Boxes, Trophy, Calendar, MapPin,
  Download, Phone, Mail, MessageCircle, ArrowRight, Search, CheckCircle2,
  Zap, Building2, Users, Star, Play, Award,
} from "lucide-react";

const accentChip =
  "inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur";

const glassCard =
  "rounded-2xl border border-border/60 bg-card/70 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border)/0.6),0_20px_60px_-30px_hsl(var(--primary)/0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_hsl(var(--primary)/0.4)]";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className={accentChip}><Sparkles className="h-3 w-3" /> {children}</div>;
}

function GradientHeadline({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
      {children}
    </h2>
  );
}

const whyCards = [
  { icon: Brain, t: "AI Literacy", d: "Every student fluent in how AI thinks, learns, and decides." },
  { icon: Rocket, t: "Future Jobs", d: "Many of the roles today's students will hold are still being invented. We prepare them to build, not just use." },
  { icon: Cpu, t: "Industry Revolution", d: "From classrooms to factories — AI is rewriting every industry." },
  { icon: Lightbulb, t: "Entrepreneurship", d: "Turning ideas into products with AI as a co-founder." },
  { icon: Atom, t: "Future Skills", d: "Critical thinking, creativity, prompt fluency, ethical reasoning." },
  { icon: Globe, t: "India's Edge", d: "Positioning India as the world's AI talent capital by 2035." },
];

const teach = [
  { icon: Brain, t: "AI Fundamentals" }, { icon: Cpu, t: "Machine Learning" },
  { icon: Sparkles, t: "Generative AI" }, { icon: MessageCircle, t: "Prompt Engineering" },
  { icon: Bot, t: "Robotics" }, { icon: Layers, t: "IoT" },
  { icon: Code2, t: "Coding" }, { icon: Code2, t: "Python" },
  { icon: Eye, t: "Computer Vision" }, { icon: Plane, t: "Drones" },
  { icon: Rocket, t: "Space Technology" }, { icon: Wrench, t: "Electronics" },
  { icon: Lightbulb, t: "Design Thinking" }, { icon: Building2, t: "Entrepreneurship" },
  { icon: Star, t: "Innovation" }, { icon: Users, t: "Soft Skills" },
  { icon: GraduationCap, t: "Career Guidance" }, { icon: Award, t: "Certification" },
];

const roadmap = [
  { stage: "Foundation", age: "Grades 3-5", goal: "Curiosity & computational thinking", milestone: "First Scratch project" },
  { stage: "Explorer", age: "Grades 6-7", goal: "Python, AI concepts, basic robotics", milestone: "Build an AI chatbot" },
  { stage: "Builder", age: "Grades 8-9", goal: "ML models, IoT, app development", milestone: "Ship a working prototype" },
  { stage: "Innovator", age: "Grades 10-11", goal: "Computer Vision, GenAI, deep projects", milestone: "Solve a local problem" },
  { stage: "Entrepreneur", age: "Grade 12+", goal: "Pitch, prototype, partnership", milestone: "Launch a startup MVP" },
];

const programs = [
  { t: "AI Awareness Workshop", d: "2-hour spark session for the whole school", dur: "2 hours" },
  { t: "1-Day Workshop", d: "Hands-on intro to AI, robotics & coding", dur: "1 day" },
  { t: "2-Day Bootcamp", d: "Deeper dive — ML + GenAI + a mini project", dur: "2 days" },
  { t: "5-Day AI Bootcamp", d: "Flagship immersion: foundations to showcase", dur: "5 days" },
  { t: "Summer Camp", d: "10-day creative AI camp with parents' showcase", dur: "10 days" },
  { t: "Teacher Training Program", d: "Certify teachers as AI educators", dur: "3-7 days" },
  { t: "Robotics Camp", d: "Build, code, race — full robotics arc", dur: "5 days" },
  { t: "Innovation Challenge", d: "Inter-school AI hackathon & demo day", dur: "1 day" },
  { t: "AI Career Program", d: "Grade 9-12 pathway with industry mentors", dur: "1 semester" },
  { t: "AI Club", d: "Year-long club with projects, mentors & events", dur: "Yearly" },
];

const bootcamp = [
  { day: "Day 1", t: "AI Foundations", items: ["What AI really is", "Data, algorithms, bias", "Teachable Machine project", "AI ethics circle"] },
  { day: "Day 2", t: "Machine Learning", items: ["Supervised vs unsupervised", "Training your first model", "Python on Google Colab", "Confusion matrix lab"] },
  { day: "Day 3", t: "Generative AI", items: ["LLMs in plain language", "Prompt engineering", "Image gen + safety", "Build an AI tutor"] },
  { day: "Day 4", t: "Robotics + IoT", items: ["Arduino + sensors", "Robot car challenge", "Computer vision intro", "IoT smart-home demo"] },
  { day: "Day 5", t: "Innovation Showcase", items: ["Team final projects", "Pitch & demo day", "Parents + principals invited", "Certificates of completion"] },
];

const labs = [
  { icon: Bot, t: "Robotics Lab", d: "Modular robots, sensors, motors, build-bench." },
  { icon: Brain, t: "AI Lab", d: "GPUs, vision cameras, voice kits, model studio." },
  { icon: Code2, t: "Coding Lab", d: "Chromebooks/PCs, Replit, GitHub, VS Code." },
  { icon: Atom, t: "STEM Lab", d: "Cross-discipline experiments — physics meets code." },
  { icon: Wrench, t: "Electronics Lab", d: "Breadboards, soldering, Arduino, micro:bit." },
  { icon: Lightbulb, t: "Innovation Center", d: "Whiteboards, prototyping, pitch corner." },
  { icon: Plane, t: "Drone Lab", d: "Indoor drones, programmable flight, mapping." },
  { icon: Boxes, t: "VR Lab", d: "Headsets, immersive simulations, 3D modeling." },
  { icon: Eye, t: "Computer Vision Lab", d: "Pi cameras, OpenCV, object & face pipelines." },
];

const projects = [
  "AI Chatbots", "Mars Rover", "Smart Dustbin", "Smart Agriculture", "Smart Attendance",
  "Face Recognition", "Home Automation", "Healthcare AI", "Disaster Management",
  "Space Rover", "Drone Mapping", "AI Art", "Robotics Challenges", "Smart City",
];

const tools = [
  "ChatGPT", "Gemini", "Claude", "Cursor", "GitHub Copilot", "Canva AI",
  "Teachable Machine", "Scratch", "MIT App Inventor", "Arduino IDE", "VS Code",
  "Google Colab", "Hugging Face", "TensorFlow", "Raspberry Pi", "micro:bit",
  "Blender", "Figma",
];

const journey = [
  "Inquiry", "Consultation", "Lab Setup", "Teacher Training",
  "Student Bootcamp", "AI Club", "Annual Innovation Festival",
  "Certification", "Continuous Support",
];


const faqs = [
  ["Which grades is AI4SCHOOLS for?", "Grades 3 through 12, with age-appropriate tracks at every stage."],
  ["Do we need expensive labs to start?", "No. We have starter, standard, and pro lab configurations. Many schools begin with a software-only pilot."],
  ["Are teachers trained too?", "Yes. Every school includes a Teacher Training Program with certification."],
  ["What language is it taught in?", "English and Hindi by default. Regional languages on request."],
  ["Is the curriculum CBSE/ICSE/State-board aligned?", "Yes — we map outcomes to NEP 2020 and major boards' digital literacy goals."],
  ["How long is the flagship bootcamp?", "5 days, 4 hours/day, ending in a parents' & principal showcase."],
  ["Do students get certificates?", "Yes. Every student receives a co-branded AI4SCHOOLS certificate."],
  ["Is data of students kept private?", "Yes. We follow DPDP Act 2023 and never share student data with third parties."],
  ["Can we run this as a CSR project?", "Absolutely. We have CSR-ready proposals and impact reports."],
  ["How are projects evaluated?", "Rubric-based — concept, working prototype, ethics, presentation."],
  ["Do you provide hardware?", "We help procure or partner with vendors at school-friendly pricing."],
  ["What is the AI Club?", "A year-long student club with weekly meets, mentors, mini-hackathons."],
  ["Is there an annual event?", "Yes — the AI4SCHOOLS Innovation Festival across partner schools."],
  ["What's the cost?", "Tiered by school size and lab configuration. Request a quote for your context."],
  ["Can rural schools join?", "Yes. We have offline-first kits and Hindi/regional content for rural cohorts."],
  ["Do you train principals?", "Yes — short leadership sessions on building an AI-ready school culture."],
  ["What is the teacher-student ratio?", "1:15 in workshops, 1:25 in regular classes."],
  ["Will my child miss regular studies?", "No. We integrate into existing computer/STEM periods."],
  ["Can students compete nationally?", "Yes — we prepare teams for national and global AI/robotics olympiads."],
  ["Do you provide curriculum to teachers?", "Yes. Lesson plans, slides, worksheets, assessment rubrics — all included."],
  ["Are ethics part of the program?", "Bias, fairness, privacy and responsible AI are woven into every module."],
  ["Is parental involvement encouraged?", "Yes. Parents are invited to showcase days and quarterly demos."],
  ["What outcomes can we expect in Year 1?", "Trained teachers, an active AI Club, 30+ student projects, measurable digital confidence."],
  ["How do we get started?", "Book a free demo — we'll visit (or video-call) and design a plan with you."],
  ["Can we white-label this for our school?", "Yes — co-branding is included; full white-label is available for chains."],
];


export default function AI4SchoolsPage() {
  const [query, setQuery] = useState("");
  const filteredTeach = teach.filter((t) => t.t.toLowerCase().includes(query.toLowerCase()));
  const filteredProjects = projects.filter((p) => p.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SEOHead
        title="AI4SCHOOLS — Building India's Next Generation of AI Innovators"
        description="A future-ready AI, Robotics, Coding, STEM & Innovation program for schools. Bootcamps, labs, teacher training, AI clubs and student projects."
        keywords="AI for schools, AI education India, robotics for students, school AI bootcamp, teacher training AI, STEM labs, coding for kids"
        canonicalUrl="/ai4schools"
      />
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
          <div className="absolute -top-40 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,hsl(45_100%_60%/0.18),transparent)]" />
          <div className="absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,hsl(220_100%_65%/0.18),transparent)]" />
          <div className="absolute top-40 left-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,hsl(25_100%_60%/0.15),transparent)]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* floating particles */}
          {Array.from({ length: 14 }).map((_, i) => (
            <span
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-primary/40 animate-pulse"
              style={{
                left: `${(i * 73) % 100}%`,
                top: `${(i * 47) % 100}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${4 + (i % 5)}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto max-w-6xl px-6 text-center">
          <p className="mx-auto mb-6 max-w-xl rounded-full border border-border bg-background/90 px-4 py-2 text-xs text-muted-foreground">
            AI4Schools is a separate AI &amp; STEM programme from the VOYCE team. Looking for student wellbeing?{" "}
            <a href="/schools" className="font-medium text-primary underline-offset-4 hover:underline">See VOYCE for Schools</a>.
          </p>
          <SectionLabel>India's AI Education Operating System</SectionLabel>
          <h1 className="font-display mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            Building India's Next Generation
            <br />
            of{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-blue-600 bg-clip-text text-transparent">
              AI Innovators.
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            AI4SCHOOLS is a future-ready AI, Robotics, Coding, STEM &amp; Innovation
            program designed to prepare students, teachers, and schools for the AI Era —
            through practical, joyful, project-based learning.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button size="lg" className="rounded-full px-6" asChild>
              <a href="#ai4schools-contact">
                Book a demo <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-6" asChild>
              <a href="mailto:voycexx@gmail.com?subject=AI4SCHOOLS%20programme%20details">
                <Mail className="mr-2 h-4 w-4" /> Request programme details
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="rounded-full px-6" asChild>
              <a href="#ai4schools-contact">Become a partner school</a>
            </Button>
          </div>

          {/* counters */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              ["3–12", "Grades covered"],
              ["5 days", "Flagship bootcamp"],
              ["Included", "Teacher training"],
              ["NEP 2020", "Outcomes mapped"],
            ].map(([n, l]) => (
              <div key={l} className={`${glassCard} p-5`}>
                <div className="font-display text-3xl md:text-4xl font-semibold">{n}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <SectionLabel>Why now</SectionLabel>
          <GradientHeadline>Why AI4SCHOOLS?</GradientHeadline>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            AI isn't a subject. It's the new grammar of work, art, science, and citizenship.
            Schools that teach it well will define the next decade.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyCards.map(({ icon: Icon, t, d }) => (
            <div key={t} className={`${glassCard} p-6`}>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-blue-500/20 text-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Search ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-3xl px-6 -mt-8 mb-8">
        <div className={`${glassCard} flex items-center gap-3 px-4 py-3`}>
          <Search className="h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search topics, projects, programs…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 focus-visible:ring-0 shadow-none p-0 h-auto bg-transparent"
            aria-label="Search AI4SCHOOLS content"
          />
        </div>
      </section>

      {/* ── What we teach ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <SectionLabel>Curriculum</SectionLabel>
        <GradientHeadline>What We Teach</GradientHeadline>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
          A spiral curriculum that grows with the student — from first idea to first product.
        </p>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {filteredTeach.map(({ icon: Icon, t }) => (
            <div key={t} className={`${glassCard} group p-5 text-center`}>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/15 via-orange-500/15 to-blue-500/15 transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-3 text-sm font-medium">{t}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Roadmap ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Learning roadmap</SectionLabel>
        <GradientHeadline>From curious to founder.</GradientHeadline>
        <div className="mt-12 relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="grid md:grid-cols-5 gap-6">
            {roadmap.map((r, i) => (
              <div key={r.stage} className={`${glassCard} p-5 relative`}>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="rounded-full">{`0${i + 1}`}</Badge>
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-400 to-blue-600 grid place-items-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{r.stage}</h3>
                <div className="text-xs text-muted-foreground">{r.age}</div>
                <p className="mt-3 text-sm text-muted-foreground">{r.goal}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-foreground/80">
                  <Trophy className="h-3.5 w-3.5" /> {r.milestone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Programs</SectionLabel>
        <GradientHeadline>Choose your starting line.</GradientHeadline>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((p) => (
            <Card key={p.t} className={`${glassCard} border-0`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="rounded-full">{p.dur}</Badge>
                  <Zap className="h-4 w-4 text-amber-500" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                <Button variant="ghost" size="sm" className="mt-4 px-0">
                  Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── 5-Day Bootcamp Timeline ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Flagship bootcamp</SectionLabel>
        <GradientHeadline>5 days. One transformation.</GradientHeadline>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
          By Friday, every student leaves with a working project, a certificate, and a new identity:
          builder.
        </p>
        <div className="mt-12 space-y-4">
          {bootcamp.map((b, i) => (
            <div key={b.day} className={`${glassCard} p-6 md:p-8 grid md:grid-cols-[180px_1fr] gap-6`}>
              <div>
                <div className="text-xs text-muted-foreground">{b.day}</div>
                <h3 className="font-display text-2xl font-semibold mt-1">{b.t}</h3>
                <div className="mt-3 inline-flex items-center gap-2 text-xs text-amber-700 dark:text-amber-300">
                  <Calendar className="h-3.5 w-3.5" /> 4 hours
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-2">
                {b.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Labs ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Lab infrastructure</SectionLabel>
        <GradientHeadline>AI Labs that feel like the future.</GradientHeadline>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {labs.map(({ icon: Icon, t, d }) => (
            <div key={t} className={`${glassCard} p-6 relative overflow-hidden`}>
              <div className="absolute inset-0 -z-10 opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-blue-500/10" />
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-blue-500/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Student Projects ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Student projects</SectionLabel>
        <GradientHeadline>Real problems. Real prototypes.</GradientHeadline>
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {filteredProjects.map((p, i) => (
            <div
              key={p}
              className={`${glassCard} mb-4 break-inside-avoid p-5`}
              style={{ minHeight: 100 + ((i * 37) % 120) }}
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-blue-500" />
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Project</div>
              </div>
              <div className="mt-3 font-display text-lg font-semibold leading-snug">{p}</div>
              <div className="mt-2 text-xs text-muted-foreground inline-flex items-center gap-1">
                <Play className="h-3 w-3" /> Student-built
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tools ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Toolbox</SectionLabel>
        <GradientHeadline>The tools real builders use.</GradientHeadline>
        <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
          We don't dumb the toolbox down — we teach students to use the same tools professionals do.
        </p>
        <div className="mt-10 flex flex-wrap gap-2.5">
          {tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 bg-card/70 backdrop-blur px-4 py-2 text-sm hover:border-foreground/30 hover:-translate-y-0.5 transition-all"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ── Teacher Training ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <div className={`${glassCard} p-8 md:p-12 relative overflow-hidden`}>
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,hsl(45_100%_60%/0.25),transparent)]" />
          <SectionLabel>Teacher training</SectionLabel>
          <GradientHeadline>Teachers first. Always.</GradientHeadline>
          <p className="mt-4 max-w-2xl text-muted-foreground text-lg">
            A confident teacher is the single biggest predictor of AI literacy in students.
            We invest in them first.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              ["AI for Teachers", "Conceptual fluency without jargon"],
              ["Classroom AI", "Live techniques that work tomorrow"],
              ["Lesson Planning", "Templates, prompts, exemplars"],
              ["Assessments", "Rubrics for ML/GenAI/robotics projects"],
              ["Productivity Tools", "AI copilots for grading & feedback"],
              ["Ethical AI", "Bias, privacy, child-safe usage"],
            ].map(([t, d]) => (
              <div key={t} className="rounded-xl border border-border/50 bg-background/40 p-5">
                <div className="font-medium">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 inline-flex items-center gap-2 text-sm">
            <Award className="h-4 w-4 text-amber-500" />
            <span>Includes <strong>AI4SCHOOLS Certified Educator</strong> credential.</span>
          </div>
        </div>
      </section>

      {/* ── Schools Journey ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Your school's journey</SectionLabel>
        <GradientHeadline>From inquiry to innovation festival.</GradientHeadline>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {journey.map((step, i) => (
            <div key={step} className={`${glassCard} p-5 flex items-start gap-4`}>
              <div className="font-display text-3xl font-semibold text-muted-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="pt-1">
                <div className="font-medium">{step}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery placeholder ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Gallery</SectionLabel>
        <GradientHeadline>Moments from the field.</GradientHeadline>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {["Robotics", "Workshops", "Students", "Teachers", "Labs", "Competitions", "Innovation", "Showcase"].map(
            (g, i) => (
              <div
                key={g}
                className="aspect-square rounded-2xl border border-border/60 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-blue-500/10 flex items-end p-4 hover:scale-[1.02] transition-transform"
              >
                <div>
                  <div className="text-[11px] text-muted-foreground">0{i + 1}</div>
                  <div className="font-medium">{g}</div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* ── Voices ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Voices</SectionLabel>
        <GradientHeadline>No school stories yet.</GradientHeadline>
        <div className={`${glassCard} mt-8 p-8 max-w-2xl`}>
          <p className="text-muted-foreground leading-relaxed">
            AI4SCHOOLS is new. We would rather show you nothing than show you quotes we invented.
            When our first partner schools finish a cohort and agree to be named, their words will appear here.
          </p>
          <Button className="mt-6 rounded-full" asChild>
            <a href="#ai4schools-contact">Talk to us about a pilot</a>
          </Button>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-3xl px-6 py-24">
        <SectionLabel>FAQs</SectionLabel>
        <GradientHeadline>Everything principals ask.</GradientHeadline>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* ── Materials ─────────────────────────────────────────── */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <SectionLabel>Programme materials</SectionLabel>
        <GradientHeadline>Ask and we'll send them.</GradientHeadline>
        <div className={`${glassCard} mt-8 p-8 max-w-2xl`}>
          <p className="text-muted-foreground leading-relaxed">
            The brochure, curriculum map, sample timetable, teacher handbook and bootcamp guide are prepared per
            school, so we share them on request rather than as generic downloads.
          </p>
          <Button className="mt-6 rounded-full gap-2" asChild>
            <a href="mailto:voycexx@gmail.com?subject=AI4SCHOOLS%20materials%20request">
              <Mail className="h-4 w-4" /> Request the materials
            </a>
          </Button>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────── */}
      <section id="ai4schools-contact" className="container mx-auto max-w-6xl px-6 py-24">
        <div className={`${glassCard} p-8 md:p-12 relative overflow-hidden`}>
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,hsl(220_100%_65%/0.2),transparent)]" />
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <SectionLabel>Let's build together</SectionLabel>
              <GradientHeadline>Bring AI4SCHOOLS to your school.</GradientHeadline>
              <p className="mt-4 text-muted-foreground text-lg">
                Tell us about your school. We'll respond within 48 hours with a tailored plan.
              </p>
              <div className="mt-8 space-y-3 text-sm">
                <a className="flex items-center gap-3 hover:text-foreground/80" href="tel:+919010481175">
                  <Phone className="h-4 w-4" /> +91 90104 81175
                </a>
                <a className="flex items-center gap-3 hover:text-foreground/80" href="mailto:voycexx@gmail.com">
                  <Mail className="h-4 w-4" /> voycexx@gmail.com
                </a>
                <a className="flex items-center gap-3 hover:text-foreground/80" href="https://wa.me/919010481175" target="_blank" rel="noreferrer">
                  <MessageCircle className="h-4 w-4" /> WhatsApp us
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> Bengaluru · India
                </div>
              </div>
            </div>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const body = [
                  `School: ${data.get("school")}`,
                  `Name: ${data.get("name")}`,
                  `Email: ${data.get("email")}`,
                  `City: ${data.get("city")}`,
                  "",
                  `${data.get("message") || ""}`,
                ].join("\n");
                window.location.href = `mailto:voycexx@gmail.com?subject=${encodeURIComponent(
                  "AI4SCHOOLS enquiry"
                )}&body=${encodeURIComponent(body)}`;
              }}
            >
              <Input required name="school" placeholder="School name" />
              <Input required name="name" placeholder="Your name" />
              <Input required type="email" name="email" placeholder="Email" />
              <Input name="city" placeholder="City" />
              <textarea
                name="message"
                placeholder="Tell us about your school (grades, size, goals)…"
                rows={4}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit" className="rounded-full px-6">
                  Send enquiry <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
                <Button type="button" variant="outline" className="rounded-full px-6" asChild>
                  <a href="/contact">Other ways to reach us</a>
                </Button>
              </div>
            </form>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
