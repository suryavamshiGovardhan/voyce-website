import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { AuthGuard } from '@/components/AuthGuard';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter from '@/components/site/SiteFooter';
import { SEOHead } from '@/components/SEOHead';
import { LoadingFallback } from '@/components/LoadingFallback';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { BookOpen, Calendar, ArrowLeft, Trash2, Eye } from 'lucide-react';
import { format } from 'date-fns';

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export default function JournalHistoryPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      setEntries([]);
      return;
    }
    fetchEntries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const fetchEntries = async () => {
    if (!user) return;

    setLoading(true);
    const { data, error } = await supabase
      .from('journal_entries')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    setLoading(false);

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to load your journal entries.',
        variant: 'destructive',
      });
    } else {
      setEntries(data || []);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this entry? This cannot be undone.')) {
      return;
    }

    const { error } = await supabase
      .from('journal_entries')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete entry.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Entry deleted',
        description: 'Your journal entry has been removed.',
      });
      setEntries(entries.filter(e => e.id !== id));
      setSelectedEntry(null);
    }
  };

  if (user && loading) {
    return <LoadingFallback fullScreen={false} message="Loading your journal..." />;
  }

  return (
    <>
      <SiteHeader />
      <AuthGuard>
      <SEOHead
        title="Journal History - VOYCE"
        description="View your past journal entries"
        keywords="journal history, past entries"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Button
                onClick={() => navigate('/journal')}
                variant="ghost"
                size="icon"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold">Journal History</h1>
                <p className="text-muted-foreground">
                  {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
                </p>
              </div>
            </div>
          </div>

          {/* Entries List */}
          {entries.length === 0 ? (
            <Card className="p-12 text-center">
              <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold mb-2">No entries yet</h3>
              <p className="text-muted-foreground mb-6">
                Start your journaling journey by writing your first entry
              </p>
              <Button onClick={() => navigate('/journal')}>
                Write First Entry
              </Button>
            </Card>
          ) : (
            <div className="space-y-4">
              {entries.map((entry) => (
                <Card
                  key={entry.id}
                  className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold mb-2 truncate">
                        {entry.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {entry.content}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {format(new Date(entry.created_at), 'MMMM dd, yyyy · h:mm a')}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => setSelectedEntry(entry)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => handleDelete(entry.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* View Entry Dialog */}
      <Dialog open={!!selectedEntry} onOpenChange={() => setSelectedEntry(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedEntry?.title}</DialogTitle>
            <p className="text-sm text-muted-foreground">
              {selectedEntry && format(new Date(selectedEntry.created_at), 'MMMM dd, yyyy · h:mm a')}
            </p>
          </DialogHeader>
          <div className="mt-4">
            <p className="whitespace-pre-wrap font-serif leading-relaxed">
              {selectedEntry?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
      </AuthGuard>
      <SiteFooter />
    </>
  );
}
