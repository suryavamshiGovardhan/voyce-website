import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IITQuestion } from "@/data/invisibleInheritanceQuestions";

interface Props {
  question: IITQuestion;
  index: number;
  total: number;
  onAnswer: (value: number) => void;
}

export default function QuestionStage({ question, index, total, onAnswer }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => { setSelected(null); }, [question.id]);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="min-h-[80vh] flex flex-col justify-between max-w-2xl mx-auto px-4 py-12"
    >
      <div>
        <p className="ii-eyebrow mb-8">
          QUESTION {String(index + 1).padStart(2, "0")} <span className="opacity-50">/ {String(total).padStart(2, "0")}</span>
        </p>

        <p className="ii-serif italic text-muted-foreground mb-6 leading-relaxed text-base sm:text-lg">
          {question.scene}
        </p>

        <h2 className="ii-display text-3xl sm:text-5xl text-foreground mb-12 leading-[1.05]">
          {question.prompt}
        </h2>

        <div className="space-y-3" role="radiogroup" aria-label={question.prompt}>
          {question.options.map((opt, i) => {
            const isSelected = selected === opt.value;
            return (
              <motion.button
                key={opt.value}
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelected(opt.value)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.15 }}
                whileHover={{ y: -2 }}
                className={[
                  "w-full text-left px-5 py-4 rounded-xl border transition-all backdrop-blur-sm",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400",
                  isSelected
                    ? "border-primary/40 bg-primary/10 text-foreground shadow-[0_10px_40px_-15px_rgba(52,211,153,0.6)]"
                    : "border-white/10 bg-card/[0.03] hover:bg-card/[0.06] text-foreground/85 hover:text-foreground",
                ].join(" ")}
              >
                <span className="text-sm sm:text-base leading-relaxed">{opt.text}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex justify-between items-center">
        <span className="ii-marginalia hidden sm:inline">{question.dimension.replace(/_/g, " ").toUpperCase()}</span>
        <Button
          size="lg"
          disabled={selected === null}
          onClick={() => selected !== null && onAnswer(selected)}
          className="ii-cta ii-pill min-w-[160px]"
        >
          {index + 1 === total ? "Finish" : "Continue"}
        </Button>
      </div>
    </motion.div>
  );
}
