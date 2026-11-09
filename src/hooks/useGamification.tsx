import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

export interface GamificationData {
  id: string;
  user_id: string;
  total_points: number;
  current_level: number;
  current_streak: number;
  longest_streak: number;
  last_activity_date: string | null;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  points_required: number;
  category: string;
  earned_at?: string;
}

export function useGamification() {
  const { user } = useAuth();
  const [gamificationData, setGamificationData] = useState<GamificationData | null>(null);
  const [badges, setBadges] = useState<Badge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchGamificationData();
      fetchBadges();
    }
  }, [user]);

  const fetchGamificationData = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('user_gamification')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (!data) {
        // Initialize gamification data for new user
        const { data: newData, error: insertError } = await supabase
          .from('user_gamification')
          .insert({
            user_id: user.id,
            total_points: 0,
            current_level: 1,
            current_streak: 0,
            longest_streak: 0
          })
          .select()
          .single();

        if (insertError) throw insertError;
        setGamificationData(newData);
      } else {
        setGamificationData(data);
      }
    } catch (error) {
      console.error('Error fetching gamification data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBadges = async () => {
    if (!user) return;

    try {
      // Get all badges
      const { data: allBadges, error: badgesError } = await supabase
        .from('badges')
        .select('*')
        .order('points_required', { ascending: true });

      if (badgesError) throw badgesError;

      // Get user's earned badges
      const { data: userBadges, error: userBadgesError } = await supabase
        .from('user_badges')
        .select('badge_id, earned_at')
        .eq('user_id', user.id);

      if (userBadgesError) throw userBadgesError;

      // Merge data
      const mergedBadges = allBadges?.map(badge => {
        const earned = userBadges?.find(ub => ub.badge_id === badge.id);
        return {
          ...badge,
          earned_at: earned?.earned_at
        };
      }) || [];

      setBadges(mergedBadges);
    } catch (error) {
      console.error('Error fetching badges:', error);
    }
  };

  const awardPoints = async (points: number, eventType: string) => {
    if (!user) return;

    try {
      const { error } = await supabase.rpc('award_points', {
        p_user_id: user.id,
        p_points: points,
        p_event_type: eventType
      });

      if (error) throw error;

      // Refresh data
      await fetchGamificationData();
      
      // Track analytics
      await trackEvent('points_awarded', {
        points,
        event_type: eventType
      });

      // No points toast: VOYCE promises "no scores". Progress is tracked quietly for the user's own dashboard.

      // Check for new badges
      await checkAndAwardBadges();
    } catch (error) {
      console.error('Error awarding points:', error);
    }
  };

  const updateStreak = async () => {
    if (!user) return;

    try {
      const { error } = await supabase.rpc('update_streak', {
        p_user_id: user.id
      });

      if (error) throw error;

      await fetchGamificationData();
      
      // Award streak bonus points
      if (gamificationData && gamificationData.current_streak > 0) {
        const streakBonus = 5;
        await awardPoints(streakBonus, 'daily_streak');
      }
    } catch (error) {
      console.error('Error updating streak:', error);
    }
  };

  const checkAndAwardBadges = async () => {
    if (!user || !gamificationData) return;

    try {
      // Get unearn badges that user qualifies for
      const { data: allBadges } = await supabase
        .from('badges')
        .select('*')
        .lte('points_required', gamificationData.total_points);

      const { data: earnedBadges } = await supabase
        .from('user_badges')
        .select('badge_id')
        .eq('user_id', user.id);

      const earnedBadgeIds = new Set(earnedBadges?.map(b => b.badge_id) || []);
      const newBadges = allBadges?.filter(b => !earnedBadgeIds.has(b.id)) || [];

      for (const badge of newBadges) {
        await supabase
          .from('user_badges')
          .insert({
            user_id: user.id,
            badge_id: badge.id
          });

        // Badge celebrations intentionally silent (no scoring language in the UI).


        await trackEvent('badge_earned', {
          badge_id: badge.id,
          badge_name: badge.name
        });
      }

      if (newBadges.length > 0) {
        await fetchBadges();
      }
    } catch (error) {
      console.error('Error checking badges:', error);
    }
  };

  const trackEvent = async (eventName: string, properties?: any) => {
    try {
      await supabase
        .from('analytics_events')
        .insert({
          user_id: user?.id,
          event_name: eventName,
          event_properties: properties
        });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  return {
    gamificationData,
    badges,
    loading,
    awardPoints,
    updateStreak,
    checkAndAwardBadges,
    trackEvent,
    refetch: fetchGamificationData
  };
}
