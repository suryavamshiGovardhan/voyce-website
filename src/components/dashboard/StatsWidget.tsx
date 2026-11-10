import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { LoadingFallback } from '@/components/LoadingFallback';
import { BookOpen, Heart, GraduationCap, Calendar } from 'lucide-react';
import { subDays } from 'date-fns';

interface Stats {
  totalJournalEntries: number;
  checkInsThisMonth: number;
  modulesCompleted: number;
  streakDays: number;
}

export function StatsWidget() {
  const { user } = useAuth();
  const [stats, setStats] = useState<Stats>({
    totalJournalEntries: 0,
    checkInsThisMonth: 0,
    modulesCompleted: 0,
    streakDays: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, [user]);

  const fetchStats = async () => {
    if (!user) return;

    try {
      // Total journal entries
      const { count: journalCount } = await supabase
        .from('journal_entries')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);

      // Check-ins this month
      const firstDayOfMonth = new Date();
      firstDayOfMonth.setDate(1);
      firstDayOfMonth.setHours(0, 0, 0, 0);

      const { count: moodCount } = await supabase
        .from('mood_entries')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .gte('created_at', firstDayOfMonth.toISOString());

      // Modules completed
      const { count: progressCount } = await supabase
        .from('user_progress')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);

      // Calculate streak (simplified - consecutive days with mood entries)
      const thirtyDaysAgo = subDays(new Date(), 30).toISOString();
      const { data: recentMoods } = await supabase
        .from('mood_entries')
        .select('created_at')
        .eq('user_id', user.id)
        .gte('created_at', thirtyDaysAgo)
        .order('created_at', { ascending: false });

      let streak = 0;
      if (recentMoods && recentMoods.length > 0) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        let currentDate = new Date(today);
        const moodDates = recentMoods.map(m => {
          const d = new Date(m.created_at);
          d.setHours(0, 0, 0, 0);
          return d.getTime();
        });

        while (moodDates.includes(currentDate.getTime())) {
          streak++;
          currentDate.setDate(currentDate.getDate() - 1);
        }
      }

      setStats({
        totalJournalEntries: journalCount || 0,
        checkInsThisMonth: moodCount || 0,
        modulesCompleted: progressCount || 0,
        streakDays: streak,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingFallback fullScreen={false} message="Loading stats..." />;
  }

  const statCards = [
    {
      icon: BookOpen,
      label: 'Journal Entries',
      value: stats.totalJournalEntries,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Heart,
      label: 'Check-ins This Month',
      value: stats.checkInsThisMonth,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: GraduationCap,
      label: 'Modules Completed',
      value: stats.modulesCompleted,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Calendar,
      label: 'Day Streak',
      value: stats.streakDays,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index} className="p-6">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <Icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
