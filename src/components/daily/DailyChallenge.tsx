import { useState, useEffect } from 'react';
import { localDateKey } from "@/lib/site";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useGamification } from '@/hooks/useGamification';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Calendar, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface DailyChallenge {
  id: string;
  date: string;
  challenge_type: string;
  title: string;
  description: string;
  points_reward: number;
  target_content_id: string | null;
  created_at: string;
}

export default function DailyChallenge() {
  const { user } = useAuth();
  const { awardPoints, trackEvent } = useGamification();
  const navigate = useNavigate();
  const [challenge, setChallenge] = useState<DailyChallenge | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchDailyChallenge();
    }
  }, [user]);

  const fetchDailyChallenge = async () => {
    if (!user) return;

    try {
      const today = localDateKey();

      // Get today's challenge
      let { data: todayChallenge, error: challengeError } = await supabase
        .from('daily_challenges')
        .select('*')
        .eq('date', today)
        .single();

      if (challengeError && challengeError.code !== 'PGRST116') {
        throw challengeError;
      }

      // If no challenge exists, create one
      if (!todayChallenge) {
        todayChallenge = await createDailyChallenge(today);
      }

      setChallenge(todayChallenge);

      // Check if user completed it
      const { data: completion, error: completionError } = await supabase
        .from('user_daily_challenges')
        .select('id')
        .eq('user_id', user.id)
        .eq('challenge_id', todayChallenge.id)
        .single();

      if (completionError && completionError.code !== 'PGRST116') {
        throw completionError;
      }

      setIsCompleted(!!completion);
    } catch (error) {
      console.error('Error fetching daily challenge:', error);
    } finally {
      setLoading(false);
    }
  };

  const createDailyChallenge = async (date: string): Promise<DailyChallenge> => {
    const challenges = [
      {
        type: 'lesson',
        title: 'Complete a Mental Health Lesson',
        description: 'Learn something new about mental wellness today',
      },
      {
        type: 'journal',
        title: 'Write in Your Journal',
        description: 'Take 5 minutes to reflect on your day',
      },
      {
        type: 'mood',
        title: 'Track Your Mood',
        description: 'Check in with yourself and log how you\'re feeling',
      },
      {
        type: 'quiz',
        title: 'Take a Quick Quiz',
        description: 'Test your knowledge with today\'s quiz',
      },
      {
        type: 'read',
        title: 'Read an Article',
        description: 'Explore a new mental health topic',
      },
    ];

    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];

    const { data, error } = await supabase
      .from('daily_challenges')
      .insert({
        date,
        challenge_type: randomChallenge.type,
        title: randomChallenge.title,
        description: randomChallenge.description,
        points_reward: 20,
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  };

  const completeChallenge = async () => {
    if (!user || !challenge) return;

    try {
      // Mark as completed
      const { error } = await supabase
        .from('user_daily_challenges')
        .insert({
          user_id: user.id,
          challenge_id: challenge.id,
        });

      if (error) throw error;

      // Award points
      await awardPoints(challenge.points_reward, 'daily_challenge_completed');
      
      await trackEvent('daily_challenge_completed', {
        challenge_id: challenge.id,
        challenge_type: challenge.challenge_type,
      });

      setIsCompleted(true);
      toast.success('Challenge completed! 🎉', {
        description: `+${challenge.points_reward} points earned!`,
      });
    } catch (error) {
      console.error('Error completing challenge:', error);
      toast.error('Failed to complete challenge');
    }
  };

  const handleChallengeAction = () => {
    if (!challenge) return;

    switch (challenge.challenge_type) {
      case 'lesson':
        navigate('/dsm5');
        break;
      case 'journal':
        navigate('/journal');
        break;
      case 'mood':
        navigate('/dashboard');
        break;
      case 'quiz':
        navigate('/tools');
        break;
      case 'read':
        navigate('/library');
        break;
      default:
        navigate('/dashboard');
    }
  };

  if (loading) {
    return (
      <Card className="p-6">
        <div className="animate-pulse space-y-3">
          <div className="h-6 bg-muted rounded w-1/2"></div>
          <div className="h-4 bg-muted rounded w-3/4"></div>
        </div>
      </Card>
    );
  }

  if (!challenge) return null;

  const timeLeft = () => {
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999);
    const diff = endOfDay.getTime() - now.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}m`;
  };

  return (
    <Card className={`p-6 ${isCompleted ? 'bg-primary/10 border-primary/40' : 'bg-primary border-primary/40'}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Daily Challenge
          </h3>
          {!isCompleted && (
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              {timeLeft()} left
            </span>
          )}
        </div>

        {isCompleted ? (
          <div className="text-center py-4">
            <CheckCircle2 className="h-12 w-12 mx-auto mb-3 text-primary" />
            <p className="font-medium text-primary dark:text-primary">
              Challenge Completed! 🎉
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Come back tomorrow for a new challenge
            </p>
          </div>
        ) : (
          <>
            <div>
              <h4 className="font-semibold text-primary mb-1">{challenge.title}</h4>
              <p className="text-sm text-muted-foreground">{challenge.description}</p>
            </div>

            <div className="flex items-center justify-between bg-background/50 rounded-lg p-3">
              <span className="text-sm font-medium">Reward</span>
              <span className="text-lg font-bold text-primary">
                +{challenge.points_reward} pts
              </span>
            </div>

            <Button
              onClick={handleChallengeAction}
              className="w-full group"
            >
              Start Challenge
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </>
        )}
      </div>
    </Card>
  );
}
