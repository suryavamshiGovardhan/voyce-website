import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { IITDimension } from "@/data/invisibleInheritanceQuestions";

interface Props {
  dimension: IITDimension;
  number: number;
  total: number;
  onContinue: () => void;
}

export default function DimensionIntro({ dimension, number, total, onContinue }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] flex flex-col justify-center items-center text-center max-w-xl mx-auto px-4"
    >
      <p className="ii-eyebrow mb-6">
        DIMENSION {String(number).padStart(2, "0")} OF {String(total).padStart(2, "0")}
      </p>
      <span className="ii-ornament block ii-marginalia mb-4">a quiet shift</span>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="ii-display text-4xl sm:text-6xl mb-5 leading-[1.02]"
      >
        <span className="ii-text-gradient">{dimension.title}</span>
      </motion.h2>

      <p className="ii-serif text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed italic">
        {dimension.subtitle}
      </p>

      <blockquote className="ii-serif italic text-foreground/75 border-l-2 border-primary/40 pl-5 mb-12 max-w-md text-left">
        {dimension.caption}
      </blockquote>

      <Button size="lg" onClick={onContinue} className="ii-cta ii-pill min-w-[170px]">
        Begin this dimension
      </Button>
    </motion.div>
  );
}
