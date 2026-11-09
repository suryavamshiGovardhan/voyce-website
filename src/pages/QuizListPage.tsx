import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useGamification } from '@/hooks/useGamification';
import QuizCard from '@/components/quiz/QuizCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Clock, Trophy, Target } from 'lucide-react';
import { toast } from 'sonner';
import { SEOHead } from '@/components/SEOHead';

interface Quiz {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: string;
  questions: any;
  points_reward: number;
  time_limit_seconds: number | null;
}

export default function QuizListPage() {
  const { user } = useAuth();
  const { awardPoints, trackEvent } = useGamification();
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      const { data, error } = await supabase
        .from('quizzes')
        .select('*')
        .eq('is_active', true)
        .order('difficulty', { ascending: true });

      if (error) throw error;
      setQuizzes(data || []);
    } catch (error) {
      console.error('Error fetching quizzes:', error);
      toast.error('Failed to load quizzes');
    } finally {
      setLoading(false);
    }
  };

  const handleQuizComplete = async (score: number, timeSpent: number) => {
    if (!user || !selectedQuiz) return;

    try {
      const questions = Array.isArray(selectedQuiz.questions) ? selectedQuiz.questions : [];
      
      // Save quiz attempt
      const { error } = await supabase
        .from('quiz_attempts')
        .insert({
          user_id: user.id,
          quiz_id: selectedQuiz.id,
          score,
          total_questions: questions.length,
          time_spent_seconds: timeSpent,
        });

      if (error) throw error;

      // Award points if passed (70%+)
      const percentage = (score / questions.length) * 100;
      if (percentage >= 70) {
        await awardPoints(selectedQuiz.points_reward, 'quiz_completed');
      }

      await trackEvent('quiz_attempt', {
        quiz_id: selectedQuiz.id,
        score,
        percentage,
      });
    } catch (error) {
      console.error('Error saving quiz result:', error);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-primary/10 text-primary border-primary/40';
      case 'intermediate':
        return 'v-tint-apricot text-foreground border-border';
      case 'advanced':
        return 'v-tint-sage text-foreground border-border';
      default:
        return 'bg-muted-foreground/10 text-muted-foreground border-border/20';
    }
  };

  if (selectedQuiz) {
    return (
      <div className="v-legacy min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <QuizCard quiz={selectedQuiz} onComplete={handleQuizComplete} />
            <button
              onClick={() => setSelectedQuiz(null)}
              className="mt-4 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Quizzes
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Knowledge quizzes"
        description="Short quizzes on psychology and wellbeing concepts. They check what you've learned — they never score how you feel."
      />
      <Navbar />
      <main id="main-content" className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-primary">Learn · reference</p>
            <h1 className="font-display text-4xl tracking-tight mb-2">Knowledge quizzes</h1>
            <p className="text-muted-foreground max-w-2xl">
              Check what you&rsquo;ve learned about psychology and wellbeing ideas. These test facts from the reading
              &mdash; they are not a mental-health test and never score how you feel.
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="p-6 animate-pulse">
                  <div className="h-6 bg-muted rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-muted rounded w-full mb-2"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {quizzes.map((quiz) => (
                <Card
                  key={quiz.id}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setSelectedQuiz(quiz)}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{quiz.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {quiz.description}
                        </p>
                      </div>
                      <Brain className="h-8 w-8 text-primary" />
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className={getDifficultyColor(quiz.difficulty)}>
                        {quiz.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        <Target className="h-3 w-3 mr-1" />
                        {quiz.category}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm pt-2 border-t">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>
                          {Array.isArray(quiz.questions) ? quiz.questions.length : 0} questions
                          {quiz.time_limit_seconds && ` • ${Math.floor(quiz.time_limit_seconds / 60)}min`}
                        </span>
                      </div>

                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
