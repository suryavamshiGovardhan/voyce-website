import { AskReflect, type AskOption } from "@/components/site/Interactive";

type Check = { eyebrow: string; question: string; options: AskOption[] };

/**
 * Two-way "check your understanding" prompts for learn, story and tool pages.
 * Replies reflect the visitor's choice back; they never diagnose or score.
 * Nothing chosen here is stored or sent.
 */
const CHECKS: Record<string, Check> = {
  start: {
    eyebrow: "Before you begin",
    question: "How are you arriving here today?",
    options: [
      { label: "Just curious", reply: "Welcome. The easiest way in is a short story — most people find one that sounds a little like them.", next: { to: "/stories", label: "Read a 3-minute story" } },
      { label: "Stressed about studies", reply: "That is the most common reason students come here. One small private question below can help you see what is weighing most.", next: { to: "#reflect", label: "Answer one private question" } },
      { label: "Feeling low or alone", reply: "Thank you for being honest. You can go slowly here. If it ever feels like too much, Tele MANAS (14416) is free and open 24×7.", next: { to: "/tools", label: "Try a gentle 2-minute practice" } },
      { label: "Here for someone else", reply: "That's caring of you. There are guides written for parents and teachers that explain what VOYCE is — and isn't.", next: { to: "/parents", label: "Guidance for parents" } },
    ],
  },
  stress: {
    eyebrow: "Your turn",
    question: "Where do you feel stress first?",
    options: [
      { label: "My body — tight chest, headache", reply: "Your body often notices before your mind does. That is your nervous system doing its job, not you failing.", next: { to: "/tools", label: "Try a 1-minute breathing reset" } },
      { label: "My thoughts — racing, looping", reply: "Racing thoughts are your brain trying to solve everything at once. Writing one thought down can slow the loop.", next: { to: "/article/overthinking-at-night", label: "Read: overthinking at night" } },
      { label: "My mood — snapping at people", reply: "Irritability is one of the most common signs of stress, and one of the least talked about. Noticing it is already a step.", next: { to: "/start-here", label: "Do the 2-minute check-in" } },
      { label: "I just shut down", reply: "Going numb or quiet is also a stress response. It is your system protecting you. Small, gentle steps help more than pushing.", next: { to: "/trauma", label: "Learn how the body protects itself" } },
    ],
  },
  brain: {
    eyebrow: "Quick check",
    question: "Which part of your brain takes over when you panic before an exam?",
    options: [
      { label: "The alarm system (amygdala)", reply: "Yes — the amygdala reacts fast to perceived threat. That is why slow breathing helps: it signals safety back to the brain.", next: { to: "/tools", label: "Practise a calming breath" } },
      { label: "The planner (prefrontal cortex)", reply: "Close — the planner is what goes quieter under stress. The fast alarm system takes over first. Calming the body lets the planner come back online.", next: { to: "/stress", label: "See how stress affects thinking" } },
      { label: "No idea yet", reply: "That is a perfectly honest answer. The short version: your alarm system speeds up, your planner slows down. It is temporary.", next: { to: "/neuroscience", label: "Explore the brain basics" } },
    ],
  },
  adhd: {
    eyebrow: "Your turn",
    question: "What is true about ADHD?",
    options: [
      { label: "It's just being lazy", reply: "A common myth. ADHD is about how attention and focus are regulated, not effort or character. Only a qualified professional can assess it.", next: { to: "/library", label: "Find trusted reading" } },
      { label: "Brains can work differently", reply: "Yes. Different attention patterns come with real challenges and real strengths. Understanding comes before labels.", next: { to: "/start-here", label: "Reflect on how your focus feels" } },
      { label: "I think it might be me", reply: "That question deserves a proper conversation. VOYCE can't diagnose — a school counsellor, doctor or psychologist can help you find out.", next: { to: "/safety", label: "See who you can talk to" } },
    ],
  },
  cds: {
    eyebrow: "Your turn",
    question: "Which part of growing up feels heaviest right now?",
    options: [
      { label: "Fitting in", reply: "Wanting to belong is one of the strongest drives at your age. It is normal — and it can be exhausting.", next: { to: "/stories", label: "Read stories from students like you" } },
      { label: "Expectations at home", reply: "Carrying expectations you didn't choose is heavy. Naming it privately is a good first step before talking about it.", next: { to: "/start-here", label: "Do the 2-minute check-in" } },
      { label: "Figuring out who I am", reply: "That question doesn't have a deadline. Most adults are still working on it too.", next: { to: "/article/search-for-meaning", label: "Read: the search for meaning" } },
    ],
  },
  trauma: {
    eyebrow: "Gently",
    question: "Right now, after reading this, you feel…",
    options: [
      { label: "Okay, it was useful", reply: "Good. Understanding how the body protects itself can make old reactions feel less confusing.", next: { to: "/aces", label: "Learn about early experiences" } },
      { label: "A bit unsettled", reply: "That makes sense — this is heavy ground. Take a slow breath and look around the room for three things you can see.", next: { to: "/tools", label: "Try a grounding exercise" } },
      { label: "It brought something up", reply: "Thank you for noticing that. You don't have to carry it alone. Please talk to someone you trust, or call Tele MANAS on 14416 (free, 24×7).", next: { to: "/safety", label: "See support options" } },
    ],
  },
  "mind-heart-gut": {
    eyebrow: "Quick check",
    question: "Have you ever felt 'butterflies' before something big?",
    options: [
      { label: "All the time", reply: "That is the gut–brain connection at work — your nervous system and gut talk constantly. It is a real, physical signal.", next: { to: "/tools", label: "Try a calming breath" } },
      { label: "Sometimes", reply: "Most people do. Noticing where emotions show up in your body helps you respond rather than react.", next: { to: "/stress", label: "Read about stress in the body" } },
      { label: "Not really", reply: "Everyone's body speaks differently. Some people feel it in their shoulders, jaw or sleep instead.", next: { to: "/start-here", label: "Check in with yourself" } },
    ],
  },
  neuroscience: {
    eyebrow: "Quick check",
    question: "Can the brain change with practice?",
    options: [
      { label: "Yes", reply: "Right — it's called neuroplasticity. Repeated small practices, like a daily check-in, really do shape pathways over time.", next: { to: "/start-here", label: "Start a small daily practice" } },
      { label: "Only when you're young", reply: "The brain is especially flexible in childhood and adolescence, but it keeps changing throughout life.", next: { to: "/brain", label: "Explore how the brain works" } },
      { label: "Not sure", reply: "Short answer: yes, throughout life. Habits, rest and relationships all leave a trace.", next: { to: "/tools", label: "Try a practice today" } },
    ],
  },
  aces: {
    eyebrow: "Gently",
    question: "What is the most hopeful thing about this topic?",
    options: [
      { label: "Early experiences aren't destiny", reply: "Exactly. Research consistently shows that safe, steady relationships can buffer the effects of difficult early experiences.", next: { to: "/parents", label: "How adults can help" } },
      { label: "Schools can make a difference", reply: "Yes — a trusted adult at school is one of the strongest protective factors young people have.", next: { to: "/schools", label: "VOYCE for schools" } },
      { label: "This feels heavy for me", reply: "That is okay. You don't need to work through it alone. Talk to someone you trust, or call Tele MANAS on 14416 (free, 24×7).", next: { to: "/safety", label: "See support options" } },
    ],
  },
  tools: {
    eyebrow: "Pick one",
    question: "What do you need in the next five minutes?",
    options: [
      { label: "To calm down", reply: "Try one slow breath out that is longer than the breath in. Repeat four times. Longer exhales tell your body it is safe.", next: { to: "/start-here", label: "Then do a 2-minute check-in" } },
      { label: "To stop overthinking", reply: "Write the loudest thought down in one line. Thoughts feel smaller on paper than in your head.", next: { to: "/article/overthinking-at-night", label: "Read: overthinking at night" } },
      { label: "To feel less alone", reply: "Reading someone else's story can help. Many students feel exactly what you are feeling.", next: { to: "/stories", label: "Read a student story" } },
      { label: "To focus", reply: "Pick one task and set a 10-minute timer. Small, finished pieces build momentum.", next: { to: "/brain", label: "Learn how focus works" } },
    ],
  },
  story: {
    eyebrow: "Your turn",
    question: "Which part of this story stayed with you?",
    options: [
      { label: "Feeling unheard", reply: "Being unheard is one of the loneliest feelings. Writing even one private line about it can help.", next: { to: "/start-here", label: "Write one private line" } },
      { label: "The pressure", reply: "Pressure you can't name tends to grow. Naming it — even just to yourself — takes some of its weight away.", next: { to: "/stress", label: "Understand stress" } },
      { label: "The hope", reply: "Hold on to that. Small moments of being understood can change a lot.", next: { to: "/stories", label: "Read another story" } },
    ],
  },
  article: {
    eyebrow: "Your turn",
    question: "Did this sound like you?",
    options: [
      { label: "Very much", reply: "Then you are not alone in this — and noticing it is the first part of changing how it feels.", next: { to: "/start-here", label: "Do the 2-minute check-in" } },
      { label: "A little", reply: "Partial fits matter too. Take the one line that felt true and leave the rest.", next: { to: "/tools", label: "Try a small practice" } },
      { label: "Not really", reply: "That is useful to know as well. There are other pieces that might fit better.", next: { to: "/stories", label: "Browse stories" } },
    ],
  },
};

export function LearnCheck({ topic, className = "" }: { topic: keyof typeof CHECKS | string; className?: string }) {
  const c = CHECKS[topic];
  if (!c) return null;
  return (
    <div className={`mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 ${className}`}>
      <AskReflect eyebrow={c.eyebrow} question={c.question} options={c.options} />
    </div>
  );
}
