// Step-by-step content for the guided practices on /tools.
// Only what the practice dialog shows is kept here: no testimonials, no programme claims.

export interface ImmersionToolData {
  id: string;
  title: string;
  description: string;
  content: {
    instructions: { step: number; title: string; description: string }[];
    safetyGuidelines: string[];
  };
}

export const immersionToolsData: ImmersionToolData[] = [
  {
    id: "ego-death-meditations",
    title: "Quiet awareness (longer sit)",
    description: "A longer, slower sitting practice for noticing thoughts come and go. Better for older readers or people who already meditate.",
    content: {
      instructions: [
        { step: 1, title: "Find Your Space", description: "Choose a quiet, comfortable place where you won't be disturbed. Sit in a position that is alert yet relaxed—spine straight but not rigid. You can use a cushion, chair, or lie down if that works better for you." },
        { step: 2, title: "Ground Yourself", description: "First, settle. Feel your body on the chair or cushion. Notice the sensations of contact. This is your anchor—come back to it any time things feel like too much." },
        { step: 3, title: "Begin with Breath", description: "Follow your breath without controlling it. Simply notice breathing happening. This helps you watch what is happening without being swept along by it." },
        { step: 4, title: "Notice the Noticer", description: "As you watch the breath, ask: Who is watching? Don't look for an answer—rest in the looking itself. Just notice what that question feels like." },
        { step: 5, title: "Release into Space", description: "Let your attention widen. Notice sounds, sensations and thoughts arriving and leaving on their own, without chasing any of them." },
        { step: 6, title: "Integration", description: "Open your eyes, look around the room and name three things you can see. Take a moment before you go back to what you were doing." },
      ],
      safetyGuidelines: [
        "Don't practise while driving or doing anything that needs your full attention",
        "If you have had psychosis, severe dissociation or trauma, check with a mental health professional before longer sits like this",
        "Start with the breath circle or body check-in first—this one is optional",
        "If you experience persistent distress after a session, reach out for support",
        "Don't practise under the influence of alcohol or drugs",
      ],
    },
  },
  {
    id: "shadow-work-journal",
    title: "Reflection journal",
    description: "Short writing prompts for the feelings that are hard to name. Private—nothing you write here is sent anywhere.",
    content: {
      instructions: [
        { step: 1, title: "Find a quiet spot", description: "Find a private, comfortable space for journaling. Ensure you won't be interrupted. Have something comforting nearby—a glass of water, a blanket, a person you trust within reach." },
        { step: 2, title: "Begin with the Prompt", description: "Pick one question, such as 'What made me react strongly today?' Read it slowly and notice your first reaction—resistance, discomfort or interest are all useful." },
        { step: 3, title: "Free Write", description: "Write without censoring or editing. Let whatever wants to come out come out. Don't judge, analyse, or try to make it coherent. Nobody else needs to read it." },
        { step: 4, title: "Notice the Body", description: "Periodically, pause and notice your body. Where do you feel tension? Heat? Contraction? Your body often notices feelings before your mind does." },
        { step: 5, title: "Ask a kinder question", description: "If a strong feeling comes up, ask it gently: what do you want me to know? What are you worried about? You are getting to know yourself, not judging yourself." },
        { step: 6, title: "Close with Integration", description: "Notice what came up and thank yourself for looking. Choose one small, kind thing to do next. If anything feels heavy, tell someone you trust." },
      ],
      safetyGuidelines: [
        "Go slowly—this is not a race",
        "If you are dealing with something very painful, use this alongside support from a counsellor or therapist",
        "Use grounding techniques if you feel overwhelmed",
        "Don't force—if a prompt feels too intense, skip it and return later",
        "Don't write late at night if it keeps you awake",
      ],
    },
  },
  {
    id: "somatic-healing-library",
    title: "Body check-in",
    description: "Scan from head to toe, find where you are holding tension, and let it soften a little.",
    content: {
      instructions: [
        { step: 1, title: "Choose a few minutes", description: "Pick a time when you will not be rushed. Five minutes is enough. Start gently—you can always do more another day." },
        { step: 2, title: "Prepare Your Space", description: "Find a private, comfortable space. Wear loose clothing. Have water available. Ensure you have time to complete the practice without rushing." },
        { step: 3, title: "Tune In", description: "Before beginning, take a moment to sense your body as it is right now. Notice areas of tension, numbness, or aliveness. This creates a baseline for noticing change." },
        { step: 4, title: "Move slowly from head to toe", description: "Bring attention to your forehead, jaw, shoulders, hands, stomach and feet in turn. Breathe out slowly as you notice each one. Nothing should hurt or feel forced." },
        { step: 5, title: "Stay Within Your Window", description: "If you feel overwhelmed, stop and ground. Use the grounding practices to return to safety. Gentle is better than intense." },
        { step: 6, title: "Rest and Integrate", description: "Afterwards, rest for a minute or two. Let your system integrate. Notice any changes in sensation, emotion, or energy. Journal if helpful." },
      ],
      safetyGuidelines: [
        "This is a wellbeing practice, not therapy",
        "Keep it short and gentle to begin with",
        "If paying attention to your body brings up painful memories, stop and talk to someone you trust",
        "Yawning, sighing or feeling emotional can happen—pause and breathe if it does",
        "If you feel floaty or numb, press your feet into the floor and name things you can see",
      ],
    },
  },
];
