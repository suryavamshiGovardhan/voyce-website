import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Smile, Frown, Meh, ThumbsUp, ThumbsDown } from 'lucide-react';

const MOOD_OPTIONS = [
  { level: 5, label: 'Great', icon: ThumbsUp, color: 'text-green-600' },
  { level: 4, label: 'Good', icon: Smile, color: 'text-green-500' },
  { level: 3, label: 'Okay', icon: Meh, color: 'text-yellow-500' },
  { level: 2, label: 'Not Good', icon: Frown, color: 'text-orange-500' },
  { level: 1, label: 'Struggling', icon: ThumbsDown, color: 'text-red-500' },
];

export function DailyCheckIn() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasCheckedInToday, setHasCheckedInToday] = useState(false);

  useEffect(() => {
    checkTodayCheckIn();
  }, [user]);

  const checkTodayCheckIn = async () => {
    if (!user) return;

    // "Today" in the visitor's own timezone (IST for most users), not UTC.
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setDate(end.getDate() + 1);
    const { data, error } = await supabase
      .from('mood_entries')
      .select('id')
      .eq('user_id', user.id)
      .gte('created_at', start.toISOString())
      .lt('created_at', end.toISOString())
      .limit(1)
      .maybeSingle();

    if (!error && !data) {
      // No check-in today, show modal after 2 seconds
      setTimeout(() => setIsOpen(true), 2000);
    } else {
      setHasCheckedInToday(true);
    }
  };

  const handleSubmit = async () => {
    if (!user || selectedMood === null) return;

    setLoading(true);
    const moodData = MOOD_OPTIONS.find(m => m.level === selectedMood);

    const { error } = await supabase
      .from('mood_entries')
      .insert({
        user_id: user.id,
        mood_level: selectedMood,
        mood_label: moodData?.label || '',
        notes: notes.trim() || null,
      });

    setLoading(false);

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to save your check-in. Please try again.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Check-in saved!',
        description: 'Thank you for sharing how you feel today.',
      });
      setIsOpen(false);
      setHasCheckedInToday(true);
      setSelectedMood(null);
      setNotes('');
    }
  };

  if (!user || hasCheckedInToday) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">How are you feeling today?</DialogTitle>
          <DialogDescription>
            Take a moment to check in with yourself. Your feelings are valid and important.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          <div className="grid grid-cols-5 gap-3">
            {MOOD_OPTIONS.map((mood) => {
              const Icon = mood.icon;
              const isSelected = selectedMood === mood.level;
              return (
                <button
                  key={mood.level}
                  onClick={() => setSelectedMood(mood.level)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/10 scale-105'
                      : 'border-border hover:border-primary/50 hover:bg-accent'
                  }`}
                >
                  <Icon className={`h-8 w-8 ${isSelected ? 'text-primary' : mood.color}`} />
                  <span className="text-xs font-medium text-center">{mood.label}</span>
                </button>
              );
            })}
          </div>

          {selectedMood !== null && (
            <div className="space-y-2 animate-in fade-in-50 slide-in-from-top-2">
              <label className="text-sm font-medium">
                Would you like to share why? (optional)
              </label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="E.g., Had a productive day, feeling stressed about work..."
                rows={3}
                maxLength={200}
              />
              <p className="text-xs text-muted-foreground text-right">
                {notes.length}/200
              </p>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => setIsOpen(false)}
            variant="outline"
            className="flex-1"
          >
            Skip for now
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={selectedMood === null || loading}
            className="flex-1"
          >
            {loading ? 'Saving...' : 'Save Check-in'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
