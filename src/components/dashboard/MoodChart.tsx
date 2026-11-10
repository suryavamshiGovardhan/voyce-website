import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { LoadingFallback } from '@/components/LoadingFallback';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays } from 'date-fns';
import { TrendingUp } from 'lucide-react';

interface MoodData {
  date: string;
  mood_level: number;
  mood_label: string;
}

export function MoodChart() {
  const { user } = useAuth();
  const [data, setData] = useState<MoodData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMoodData();
  }, [user]);

  const fetchMoodData = async () => {
    if (!user) return;

    const thirtyDaysAgo = subDays(new Date(), 30).toISOString();

    const { data: moodData, error } = await supabase
      .from('mood_entries')
      .select('mood_level, mood_label, created_at')
      .eq('user_id', user.id)
      .gte('created_at', thirtyDaysAgo)
      .order('created_at', { ascending: true });

    setLoading(false);

    if (!error && moodData) {
      const formattedData = moodData.map(entry => ({
        date: format(new Date(entry.created_at), 'MMM dd'),
        mood_level: entry.mood_level,
        mood_label: entry.mood_label,
      }));
      setData(formattedData);
    }
  };

  if (loading) {
    return <LoadingFallback fullScreen={false} message="Loading mood data..." />;
  }

  if (data.length === 0) {
    return (
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">My Mood (Last 30 Days)</h3>
        </div>
        <div className="text-center py-8 text-muted-foreground">
          <p>No mood data yet. Start checking in daily to see your trends!</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">My Mood (Last 30 Days)</h3>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="date"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis
            domain={[1, 5]}
            ticks={[1, 2, 3, 4, 5]}
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
            }}
            formatter={(value: number, name: string, props: any) => [
              props.payload.mood_label,
              'Mood',
            ]}
          />
          <Line
            type="monotone"
            dataKey="mood_level"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--primary))' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
