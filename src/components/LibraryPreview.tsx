import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type Idea = {
  title: string;
  theme: string;
  body: string;
  question: string;
  readers: "Everyone" | "Older readers";
  next: { to: string; label: string };
};

/**
 * Short ideas, each with a question to sit with and a link to a fuller page on the site.
 * No invented authors, no levels, no claims of long-form articles that do not exist.
 */
const IDEAS: Idea[] = [
  {
    title: "Who am I, beyond my roles?",
    theme: "Identity",
    body: "Student, son, daughter, friend, topper, the quiet one — we all carry labels. They are useful, but none of them is the whole of you. Noticing that can make a bad mark or a hard week feel a little less like a verdict on who you are.",
    question: "Which label do you carry most heavily right now?",
    readers: "Everyone",
    next: { to: "/article/search-for-meaning", label: "Read: the search for meaning" },
  },
  {
    title: "Hard experiences, and slow recovery",
    theme: "Recovery",
    body: "Painful experiences are never your fault, and they don't happen 'for a reason'. What research does show is that, with safe people and time, many people recover and some even find new strengths along the way. Recovery is usually slow and uneven — that is normal.",
    question: "Who is one safe person you could talk to if something felt heavy?",
    readers: "Everyone",
    next: { to: "/trauma", label: "Read about trauma and recovery" },
  },
  {
    title: "What your brain does when you daydream",
    theme: "Brain science",
    body: "When you are not focused on a task, a set of brain areas often called the default mode network becomes more active. It is linked to mind-wandering, remembering and imagining the future — and to the voice in your head that tells stories about you.",
    question: "Where does your mind tend to wander when you're not busy?",
    readers: "Everyone",
    next: { to: "/brain", label: "Explore the brain" },
  },
  {
    title: "Strength includes feelings",
    theme: "Growing up",
    body: "Many boys and men are taught that being strong means not showing feelings. But naming what you feel is a skill, not a weakness — and it makes friendships, families and hard decisions easier for everyone.",
    question: "What is one feeling you find hard to say out loud?",
    readers: "Everyone",
    next: { to: "/students", label: "More for students" },
  },
  {
    title: "Many ways of understanding mental health",
    theme: "Perspectives",
    body: "Doctors, psychologists, families and faith traditions each describe distress in their own language. Several can be helpful at once. If you are receiving care, please don't stop any treatment without talking to the professional who gave it to you.",
    question: "Which way of describing how you feel makes the most sense to you?",
    readers: "Older readers",
    next: { to: "/safety", label: "What VOYCE is and isn't" },
  },
  {
    title: "Caring without clinging",
    theme: "Relationships",
    body: "Caring about someone sometimes slides into needing to control what they do or think of you. Noticing the difference — care for them, worry for yourself — can make friendships and relationships calmer.",
    question: "What do you want for someone you care about, just for their sake?",
    readers: "Older readers",
    next: { to: "/tools", label: "Try the 'caring without clinging' reflection" },
  },
  {
    title: "Can technology help us reflect?",
    theme: "Technology",
    body: "Phones can scatter attention, but simple tools can also help you notice patterns — a mood over a fortnight, a thought that keeps returning. The aim is to understand yourself better, not to be scored or watched.",
    question: "Does your phone mostly calm you down or wind you up?",
    readers: "Everyone",
    next: { to: "/how-it-works", label: "How VOYCE works" },
  },
  {
    title: "Life's big questions",
    theme: "Meaning",
    body: "What matters? What kind of person do I want to be? These questions can feel heavy, but people have asked them for thousands of years. You don't need final answers — just one honest next step.",
    question: "What is one thing that has felt meaningful to you this month?",
    readers: "Older readers",
    next: { to: "/article/search-for-meaning", label: "Read: the search for meaning" },
  },
];

export default function LibraryPreview() {
  return (
    <div className="space-y-8">
      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Each card is one short idea and one question to sit with. Follow the link if you want to go further. Cards marked
        &ldquo;Older readers&rdquo; touch on bigger themes — read them when you have time and space.
      </p>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {IDEAS.map((idea) => (
          <article key={idea.title} className="v-card v-card-hover flex h-full flex-col p-6">
            <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-surface px-2.5 py-1 font-medium text-primary">{idea.theme}</span>
              {idea.readers === "Older readers" ? (
                <span className="rounded-full bg-[hsl(var(--apricot-soft)/0.8)] px-2.5 py-1 text-foreground/85">Older readers</span>
              ) : null}
            </div>
            <h3 className="font-display text-xl tracking-tight text-foreground">{idea.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/80">{idea.body}</p>
            <p className="mt-4 border-l-2 border-primary/40 pl-3 text-sm italic text-foreground/75">{idea.question}</p>
            <div className="mt-auto pt-5">
              <Link to={idea.next.to} className="v-link inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                {idea.next.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
