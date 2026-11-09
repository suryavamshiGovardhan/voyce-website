import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LoadingFallback } from '@/components/LoadingFallback';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

interface ProgressData {
  id: string;
  module_id: string;
  module_title: string;
  completed_at: string;
}

const SUGGESTED_MODULES = [
  { id: 'understanding-stress', title: 'Understanding Stress', path: '/stress' },
  { id: 'trauma-basics', title: 'Trauma Basics', path: '/trauma' },
  { id: 'adhd-overview', title: 'ADHD Overview', path: '/adhd' },
  { id: 'brain-health', title: 'Brain Health', path: '/brain' },
  { id: 'cds-guide', title: 'CDS Guide', path: '/cds' },
];

export function ProgressWidget() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [completedModules, setCompletedModules] = useState<ProgressData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProgress();
  }, [user]);

  const fetchProgress = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false });

    setLoading(false);

    if (!error && data) {
      setCompletedModules(data);
    }
  };

  const completedCount = completedModules.length;
  const totalModules = SUGGESTED_MODULES.length;
  const progressPercentage = (completedCount / totalModules) * 100;

  const suggestedNext = SUGGESTED_MODULES.filter(
    module => !completedModules.some(c => c.module_id === module.id)
  ).slice(0, 3);

  if (loading) {
    return <LoadingFallback message="Loading progress..." />;
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">My Learning Path</h3>
      </div>

      <div className="space-y-6">
        {/* Progress Bar */}
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">Overall Progress</span>
            <span className="text-muted-foreground">
              {completedCount} / {totalModules} modules
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Recently Completed */}
        {completedModules.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-3">Recently Completed</h4>
            <div className="space-y-2">
              {completedModules.slice(0, 3).map((module) => (
                <div
                  key={module.id}
                  className="flex items-center gap-2 text-sm p-2 bg-primary/10 rounded"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="truncate">{module.module_title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Suggested Next */}
        {suggestedNext.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold mb-3">Suggested Next</h4>
            <div className="space-y-2">
              {suggestedNext.map((module) => (
                <Button
                  key={module.id}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => navigate(module.path)}
                >
                  {module.title}
                </Button>
              ))}
            </div>
          </div>
        )}

        {completedCount === totalModules && (
          <div className="text-center py-4 bg-primary/10 rounded-lg">
            <p className="font-semibold text-primary">🎉 All modules completed!</p>
            <p className="text-sm text-muted-foreground mt-1">
              You've completed your learning journey. Amazing work!
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
