import { Link } from "react-router-dom";
import { Mail, Instagram, MessageSquare, LifeBuoy } from "lucide-react";
import PageShell from "@/components/site/PageShell";
import { Reveal, Section } from "@/components/site/primitives";
import { PageHero, NextStep } from "@/components/site/value";

const CHANNELS = [
  {
    icon: <Mail className="h-5 w-5" aria-hidden />,
    title: "Email",
    body: "Questions, feedback, school or partnership enquiries.",
    href: "mailto:voycexx@gmail.com",
    label: "voycexx@gmail.com",
  },
  {
    icon: <Instagram className="h-5 w-5" aria-hidden />,
    title: "Instagram",
    body: "Updates and behind-the-scenes from the founder.",
    href: "https://www.instagram.com/suryavamshiiii",
    label: "@suryavamshiiii",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <PageShell
      title="Contact"
      description="Get in touch with the VOYCE team — questions, feedback, school enquiries."
      canonical="/contact"
      keywords="contact VOYCE, support, feedback, schools"
    >
      <PageHero
        eyebrow="Contact"
        title={<>Talk to a real person <span className="text-primary">behind VOYCE.</span></>}
        lede="Questions, feedback, or thinking about VOYCE for your school? Write to us — you will hear back from the team, not a bot."
      />
      <Section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          {CHANNELS.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="v-card v-card-hover group flex h-full flex-col p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="v-chip mb-5">{c.icon}</span>
                <h2 className="text-lg font-medium">{c.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <span className="mt-5 font-medium text-primary">{c.label}</span>
              </a>
            </Reveal>
          ))}
          <Reveal delay={180} className="sm:col-span-2">
            <div className="v-card flex flex-col gap-4 p-7 sm:flex-row sm:items-start">
              <span className="v-chip shrink-0"><MessageSquare className="h-5 w-5" aria-hidden /></span>
              <div>
                <h2 className="text-lg font-medium">Share a thought instead</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ideas and stories help shape what we build. Leave yours on the{" "}
                  <Link to="/thoughts" className="v-link font-medium text-primary">Thoughts page</Link>.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={240} className="sm:col-span-2">
            <div className="flex gap-3 rounded-2xl border border-destructive/20 bg-destructive/5 p-5 text-sm leading-relaxed text-foreground/80">
              <LifeBuoy className="mt-0.5 h-5 w-5 shrink-0 text-destructive" aria-hidden />
              <p>
                Email is not monitored around the clock. If you or someone you know is in danger right now, please
                contact local emergency services or see our <Link to="/safety" className="v-link font-medium text-foreground">safety page</Link>.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
      <NextStep
        title="Bringing VOYCE to a school?"
        body="See how the programme works for students, teachers and parents."
        primary={{ to: "/schools", label: "VOYCE for schools" }}
        secondary={{ to: "/how-it-works", label: "How it works" }}
      />
    </PageShell>
  );
}
