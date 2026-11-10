import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LoadingFallback } from '@/components/LoadingFallback';
import { BookOpen, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  created_at: string;
}

export function JournalPreview() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentEntries();
  }, [user]);

  const fetchRecentEntries = async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from('journal_entries')
      .select('id, title, content, created_at')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(5);

    setLoading(false);

    if (!error && data) {
      setEntries(data);
    }
  };

  if (loading) {
    return <LoadingFallback fullScreen={false} message="Loading journal..." />;
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Recent Journal Entries</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate('/journal/history')}
          className="gap-1"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {entries.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">No journal entries yet</p>
          <Button onClick={() => navigate('/journal')}>
            Start Journaling
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="p-4 bg-accent/50 rounded-lg hover:bg-accent transition-colors cursor-pointer"
              onClick={() => navigate('/journal/history')}
            >
              <h4 className="font-medium mb-1 truncate">{entry.title}</h4>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {entry.content}
              </p>
              <p className="text-xs text-muted-foreground">
                {format(new Date(entry.created_at), 'MMM dd, yyyy')}
              </p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
