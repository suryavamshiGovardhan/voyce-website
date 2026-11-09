import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Headphones, Activity, Compass, PenLine, Brain, Heart, Eye } from "lucide-react";
import { PracticeModal, type PracticeStep } from "./PracticeModal";

type Tool = {
  id: string;
  /** id in immersionToolsData, when the long-form steps live there */
  dataId?: string;
  title: string;
  description: string;
  length: string;
  icon: typeof Play;
  tags: string[];
  steps?: PracticeStep[];
  note?: string;
};

const GENTLE: Tool[] = [
  {
    id: "body-check-in",
    dataId: "somatic-healing-library",
    title: "Body check-in",
    description: "Scan from head to toe, find where you are holding tension, and let it soften a little.",
    length: "About 5 minutes",
    icon: Headphones,
    tags: ["Calming", "Before sleep", "After a hard day"],
  },
  {
    id: "watch-your-thoughts",
    title: "Watch your thoughts",
    description: "Practise noticing a thought without getting pulled along by it — useful when your mind won't slow down.",
    length: "About 5 minutes",
    icon: Eye,
    tags: ["Overthinking", "Before exams", "Focus"],
    steps: [
      { step: 1, title: "Settle", description: "Sit comfortably. Take three slow breaths, letting each out a little longer than it came in." },
      { step: 2, title: "Notice a thought", description: "When a thought appears, silently label it: 'planning', 'worrying', 'remembering'. You don't need to answer it." },
      { step: 3, title: "Let it pass", description: "Picture the thought as a car going past, or a leaf on a stream. Let it go by and come back to your breath." },
      { step: 4, title: "Again, kindly", description: "Your mind will wander many times. Each time you notice and come back, that is the practice working." },
      { step: 5, title: "Close", description: "Take one deeper breath. Notice whether your mind feels even slightly less crowded than when you began." },
    ],
  },
  {
    id: "reflection-journal",
    dataId: "shadow-work-journal",
    title: "Reflection journal",
    description: "Short writing prompts for the feelings that are hard to name. Private — nothing you write here is sent anywhere.",
    length: "5–10 minutes",
    icon: BookOpen,
    tags: ["Writing", "Naming feelings", "Private"],
  },
  {
    id: "change-a-habit",
    title: "Change one small habit",
    description: "Pick one pattern you'd like to shift — late-night scrolling, last-minute studying — and plan one tiny, repeatable step.",
    length: "About 5 minutes",
    icon: Brain,
    tags: ["Habits", "Study", "Sleep"],
    steps: [
      { step: 1, title: "Name the pattern", description: "Write down one habit you'd like to change. Keep it specific: 'I check my phone in bed until late'." },
      { step: 2, title: "Find the trigger", description: "When does it usually start? A time, a place, a feeling such as boredom or worry." },
      { step: 3, title: "Choose a swap", description: "Pick one small thing to do instead when the trigger appears — leave the phone across the room, read two pages, stretch." },
      { step: 4, title: "Make it easy", description: "Set things up so the new step takes less effort than the old one. Small and repeatable beats big and rare." },
      { step: 5, title: "Check in kindly", description: "Try it for a week. Missing a day is normal — just start again the next day." },
    ],
  },
  {
    id: "unsent-letter",
    title: "Write it, don't send it",
    description: "Write what you've never said out loud to someone — then keep it, tear it up or delete it. It stays with you.",
    length: "About 10 minutes",
    icon: PenLine,
    tags: ["Feelings", "Letting go", "Private"],
    steps: [
      { step: 1, title: "Choose who it's to", description: "A friend, a family member, a teacher, or your younger self. You are not going to send it." },
      { step: 2, title: "Start simply", description: "Begin with 'What I've wanted to say is…' and keep writing without editing." },
      { step: 3, title: "Notice how you feel", description: "Pause and check your body. If it feels like too much, stop and take a few slow breaths." },
      { step: 4, title: "Decide what to do with it", description: "Keep it, tear it up, or delete it. If it brought up something heavy, tell someone you trust." },
    ],
  },
];

const DEEPER: Tool[] = [
  {
    id: "quiet-awareness",
    dataId: "ego-death-meditations",
    title: "Quiet awareness (longer sit)",
    description: "A longer, slower sitting practice for noticing thoughts and sensations come and go.",
    length: "10–15 minutes",
    icon: Play,
    tags: ["Meditation", "Stillness"],
    note: "Better for older readers or people who already meditate.",
  },
  {
    id: "kindness-to-younger-self",
    title: "Kindness to your younger self",
    description: "A guided reflection on what a younger you needed to hear — and saying it now.",
    length: "About 10 minutes",
    icon: Compass,
    tags: ["Self-kindness", "Reflection"],
    note: "Can bring up old memories. Do it when you have time, and with a trusted adult nearby if you can.",
    steps: [
      { step: 1, title: "Settle", description: "Sit somewhere comfortable and safe. Take a few slow breaths and feel your feet on the floor." },
      { step: 2, title: "Picture a younger you", description: "Think of yourself at an age when things felt hard. Notice what they look like, where they are." },
      { step: 3, title: "Ask what they needed", description: "Reassurance? Someone to listen? To hear it wasn't their fault? Let the answer come without forcing it." },
      { step: 4, title: "Say it now", description: "Silently, or in writing, tell them what they needed to hear. Speak as you would to a child you care about." },
      { step: 5, title: "Come back", description: "Open your eyes, name three things you can see, and drink some water. If this stirred up a lot, talk to someone you trust." },
    ],
  },
  {
    id: "walk-in-their-shoes",
    title: "What it can feel like inside",
    description: "Short reflections on what anxiety, low mood or an ADHD brain can feel like from the inside — to build understanding, not to label anyone.",
    length: "About 10 minutes",
    icon: Activity,
    tags: ["Empathy", "Understanding others"],
    note: "Educational only — not a test or a diagnosis.",
    steps: [
      { step: 1, title: "Pick one experience", description: "Choose anxiety, low mood or ADHD to think about today. You can read about each on the Learn pages first." },
      { step: 2, title: "Imagine a normal day", description: "Picture waking up, going to class and coming home while carrying that experience. What would be harder?" },
      { step: 3, title: "Notice your reaction", description: "What surprised you? What would you want people around you to understand?" },
      { step: 4, title: "Turn it into kindness", description: "Think of one small thing you could do or say that would help someone having that kind of day." },
    ],
  },
  {
    id: "caring-without-clinging",
    title: "Caring without clinging",
    description: "A reflection on friendships and relationships: caring about people without needing to control them.",
    length: "About 10 minutes",
    icon: Heart,
    tags: ["Friendships", "Relationships"],
    note: "Better for older readers.",
    steps: [
      { step: 1, title: "Think of someone", description: "Choose one person you care about — a friend, sibling, or partner." },
      { step: 2, title: "Notice the worry", description: "When you think of them, is there any fear of losing them, or of what they think of you? Just notice it." },
      { step: 3, title: "Separate care from control", description: "Ask: what do I want for them, just for their sake? Write one line." },
      { step: 4, title: "Choose one action", description: "Pick one way to show care this week that doesn't depend on how they respond." },
    ],
  },
];

function ToolCard({ tool, onStart }: { tool: Tool; onStart: (t: Tool) => void }) {
  const Icon = tool.icon;
  return (
    <article className="v-card v-card-hover flex h-full flex-col p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="v-chip h-11 w-11" aria-hidden="true">
          <Icon className="h-5 w-5" />
        </div>
        <span className="text-xs text-muted-foreground">{tool.length}</span>
      </div>
      <h3 className="font-display text-xl tracking-tight text-foreground">{tool.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground/80">{tool.description}</p>
      {tool.note ? (
        <p className="mt-3 rounded-xl bg-[hsl(var(--apricot-soft)/0.7)] px-3 py-2 text-xs leading-relaxed text-foreground/85">
          {tool.note}
        </p>
      ) : null}
      <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Good for">
        {tool.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-border px-2.5 py-1 text-[0.72rem] text-muted-foreground">
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5">
        <Button size="sm" className="v-sheen rounded-full px-5" onClick={() => onStart(tool)}>
          Start
        </Button>
      </div>
    </article>
  );
}

export default function ImmersionTools() {
  const [active, setActive] = useState<Tool | null>(null);
  return (
    <div className="space-y-14">
      <div>
        <div className="mb-6 max-w-2xl">
          <h3 className="font-display text-2xl tracking-tight text-foreground">Gentle practices</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Good for anyone 13 and over. Short, calm, and easy to stop at any point.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GENTLE.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onStart={setActive} />
          ))}
        </div>
      </div>

      <div>
        <div className="mb-6 max-w-2xl">
          <h3 className="font-display text-2xl tracking-tight text-foreground">Deeper reflections</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Longer and more personal. Better for older readers, or with a trusted adult nearby. Try a gentle practice
            first, and skip anything that doesn&rsquo;t feel right today.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {DEEPER.map((tool) => (
            <ToolCard key={tool.id} tool={tool} onStart={setActive} />
          ))}
        </div>
      </div>

      <aside className="v-card p-6 sm:p-8" aria-label="Using these practices safely">
        <h3 className="font-display text-xl tracking-tight text-foreground">Using these safely</h3>
        <ul className="mt-3 space-y-2 text-sm leading-relaxed text-foreground/80">
          <li>These are everyday wellbeing practices — not therapy, and not a test or a diagnosis.</li>
          <li>Stop whenever you want. Feeling a bit emotional can be normal; feeling overwhelmed is a sign to pause.</li>
          <li>
            If you feel unsafe or can&rsquo;t cope, talk to an adult you trust or call Tele MANAS on{" "}
            <a href="tel:14416" className="font-medium text-primary">14416</a> (free, 24×7, India).
          </li>
        </ul>
      </aside>

      <PracticeModal
        open={active !== null}
        onOpenChange={(o) => {
          if (!o) setActive(null);
        }}
        toolTitle={active?.title ?? ""}
        toolId={active?.dataId}
        steps={active?.steps}
      />
    </div>
  );
}
