import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Circle } from 'lucide-react';

interface ModuleTrackerProps {
  moduleId: string;
  moduleTitle: string;
  onComplete?: () => void;
}

export function ModuleTracker({ moduleId, moduleTitle, onComplete }: ModuleTrackerProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isCompleted, setIsCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkCompletion();
  }, [user, moduleId]);

  const checkCompletion = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('user_progress')
      .select('id')
      .eq('user_id', user.id)
      .eq('module_id', moduleId)
      .maybeSingle();

    setIsCompleted(!!data);
  };

  const handleToggleComplete = async () => {
    if (!user) {
      toast({
        title: 'Login required',
        description: 'Please log in to track your progress.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    if (isCompleted) {
      // Remove completion
      const { error } = await supabase
        .from('user_progress')
        .delete()
        .eq('user_id', user.id)
        .eq('module_id', moduleId);

      if (!error) {
        setIsCompleted(false);
        toast({
          title: 'Progress updated',
          description: 'Module marked as incomplete.',
        });
      }
    } else {
      // Mark as complete
      const { error } = await supabase
        .from('user_progress')
        .insert({
          user_id: user.id,
          module_id: moduleId,
          module_title: moduleTitle,
        });

      if (!error) {
        setIsCompleted(true);
        toast({
          title: 'Great job! 🎉',
          description: `You've completed: ${moduleTitle}`,
        });
        onComplete?.();
      }
    }

    setLoading(false);
  };

  return (
    <div className="my-8 p-6 bg-accent/50 rounded-lg border">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {isCompleted ? (
            <CheckCircle2 className="h-6 w-6 text-primary" />
          ) : (
            <Circle className="h-6 w-6 text-muted-foreground" />
          )}
          <div>
            <h3 className="font-semibold">
              {isCompleted ? 'Module Completed!' : 'Mark as Complete'}
            </h3>
            <p className="text-sm text-muted-foreground">
              {isCompleted
                ? 'You finished this module. Great work!'
                : 'Did you finish reading? Mark this module as complete.'}
            </p>
          </div>
        </div>
        <Button
          onClick={handleToggleComplete}
          disabled={loading}
          variant={isCompleted ? 'outline' : 'default'}
        >
          {loading ? 'Updating...' : isCompleted ? 'Mark Incomplete' : 'Complete'}
        </Button>
      </div>
    </div>
  );
}
