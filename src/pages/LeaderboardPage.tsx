import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';

interface LeaderboardEntry {
  user_id: string;
  total_points: number;
  current_level: number;
  current_streak: number;
  user_email?: string;
  rank?: number;
}

export default function LeaderboardPage() {
  const { user } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [userRank, setUserRank] = useState<LeaderboardEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, [user]);

  const fetchLeaderboard = async () => {
    try {
      const { data, error } = await supabase
        .from('user_gamification')
        .select('user_id, total_points, current_level, current_streak')
        .order('total_points', { ascending: false })
        .limit(100);

      if (error) throw error;

      const rankedData = data?.map((entry, index) => ({
        ...entry,
        rank: index + 1,
      })) || [];

      setLeaderboard(rankedData);

      // Find user's rank
      if (user) {
        const userEntry = rankedData.find(entry => entry.user_id === user.id);
        setUserRank(userEntry || null);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-amber-700" />;
      case 2:
        return <Medal className="h-6 w-6 text-muted-foreground" />;
      case 3:
        return <Award className="h-6 w-6 text-amber-700" />;
      default:
        return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
    }
  };

  const getUserInitials = (userId: string) => {
    return userId.slice(0, 2).toUpperCase();
  };

  return (
    <div className="v-legacy min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Trophy className="h-10 w-10 text-primary" />
              Leaderboard
            </h1>
            <p className="text-muted-foreground">
              Top learners in the VOYCE community
            </p>
          </div>

          {/* User's Rank Card */}
          {userRank && (
            <Card className="p-6 mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20">
                    {getRankIcon(userRank.rank || 0)}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Your Rank</p>
                    <p className="text-2xl font-bold">#{userRank.rank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total Points</p>
                  <p className="text-2xl font-bold text-primary">
                    {userRank.total_points}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Leaderboard */}
          <Card className="p-6">
            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center gap-4 p-4 animate-pulse">
                    <div className="w-12 h-12 bg-muted rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-muted rounded w-32 mb-2"></div>
                      <div className="h-3 bg-muted rounded w-24"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-2">
                {leaderboard.map((entry) => (
                  <div
                    key={entry.user_id}
                    className={`flex items-center gap-4 p-4 rounded-lg transition-colors ${
                      entry.user_id === user?.id
                        ? 'bg-primary/10 border-2 border-primary/30'
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(entry.rank || 0)}
                    </div>

                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {getUserInitials(entry.user_id)}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">
                          {entry.user_id === user?.id ? 'You' : `User ${entry.user_id.slice(0, 8)}`}
                        </p>
                        <Badge variant="outline" className="text-xs">
                          Level {entry.current_level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {entry.total_points} points
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="text-center">
                        <TrendingUp className="h-4 w-4 mx-auto mb-1 text-primary" />
                        <p className="font-medium">{entry.current_level}</p>
                      </div>
                      <div className="text-center">
                        <span className="text-amber-700 text-lg">🔥</span>
                        <p className="font-medium">{entry.current_streak}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
