import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle2, XCircle, Trophy } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correct_answer: number;
  explanation?: string;
}

interface QuizCardProps {
  quiz: {
    id: string;
    title: string;
    description: string;
    questions: Question[];
    points_reward: number;
  };
  onComplete: (score: number, timeSpent: number) => void;
}

export default function QuizCard({ quiz, onComplete }: QuizCardProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [startTime] = useState(Date.now());

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
  const isLastQuestion = currentQuestion === quiz.questions.length - 1;

  const handleAnswer = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      setShowResult(true);
      const score = calculateScore(newAnswers);
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      onComplete(score, timeSpent);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const calculateScore = (userAnswers: number[]) => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === quiz.questions[index].correct_answer ? 1 : 0);
    }, 0);
  };

  const scorePercentage = showResult
    ? Math.round((calculateScore(answers) / quiz.questions.length) * 100)
    : 0;

  if (showResult) {
    const score = calculateScore(answers);
    const passed = scorePercentage >= 70;

    return (
      <Card className="p-6">
        <div className="text-center space-y-4">
          {passed ? (
            <CheckCircle2 className="h-16 w-16 mx-auto text-primary" />
          ) : (
            <XCircle className="h-16 w-16 mx-auto text-amber-700" />
          )}

          <div>
            <h3 className="text-2xl font-bold mb-2">
              {passed ? 'Great Job!' : 'Keep Learning!'}
            </h3>
            <p className="text-muted-foreground">
              You scored {score} out of {quiz.questions.length}
            </p>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <div className="text-5xl font-bold text-primary mb-2">
              {scorePercentage}%
            </div>
            <Progress value={scorePercentage} className="h-2" />
          </div>

          {passed && (
            <div className="flex items-center justify-center gap-2 bg-primary/10 rounded-lg p-4">
              <Trophy className="h-5 w-5 text-primary" />
              <span className="font-medium">
                Nice — you remembered most of it.
              </span>
            </div>
          )}

          <div className="space-y-2 text-left">
            <h4 className="font-semibold">Review:</h4>
            {quiz.questions.map((q, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border ${
                  answers[index] === q.correct_answer
                    ? 'border-primary/40 bg-primary/10'
                    : 'border-red-500/50 bg-red-500/10'
                }`}
              >
                <p className="text-sm font-medium mb-1">{q.question}</p>
                {answers[index] !== q.correct_answer && (
                  <p className="text-xs text-muted-foreground">
                    Correct: {q.options[q.correct_answer]}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="space-y-6">
        {/* Progress */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </span>
            <span className="font-medium">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} />
        </div>

        {/* Question */}
        <div>
          <h3 className="text-xl font-bold mb-4">{question.question}</h3>

          <RadioGroup
            value={selectedAnswer?.toString()}
            onValueChange={(value) => setSelectedAnswer(parseInt(value))}
          >
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                    selectedAnswer === index
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedAnswer(index)}
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 cursor-pointer"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* Action */}
        <Button
          onClick={handleAnswer}
          disabled={selectedAnswer === null}
          className="w-full"
        >
          {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
        </Button>
      </div>
    </Card>
  );
}
