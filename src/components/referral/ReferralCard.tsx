import { useState, useEffect } from 'react';
import { appUrl } from "@/lib/site";
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Users, Copy, Gift, TrendingUp } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ReferralCard() {
  const { user } = useAuth();
  const [referralCode, setReferralCode] = useState('');
  const [referralCount, setReferralCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchReferralData();
    }
  }, [user]);

  const fetchReferralData = async () => {
    if (!user) return;

    try {
      // Get or create referral code
      let { data: existingCode, error: fetchError } = await supabase
        .from('referral_codes')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      if (!existingCode) {
        // Generate unique code
        const code = `VOYCE${user.id.slice(0, 8).toUpperCase()}`;
        const { data: newCode, error: insertError } = await supabase
          .from('referral_codes')
          .insert({
            user_id: user.id,
            code,
            points_reward: 100,
            max_uses: 50
          })
          .select()
          .single();

        if (insertError) throw insertError;
        existingCode = newCode;
      }

      setReferralCode(existingCode.code);

      // Get referral count
      const { data: referrals, error: referralsError } = await supabase
        .from('referrals')
        .select('id')
        .eq('referrer_id', user.id);

      if (referralsError) throw referralsError;
      setReferralCount(referrals?.length || 0);
    } catch (error) {
      console.error('Error fetching referral data:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyReferralLink = () => {
    const referralLink = appUrl(`/signup?ref=${referralCode}`);
    navigator.clipboard.writeText(referralLink);
    toast.success('Referral link copied!', {
      description: 'Share it with friends to earn rewards',
    });
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    toast.success('Referral code copied!');
  };

  const shareOnWhatsApp = () => {
    const message = `Hey! I'm learning mental health & self-awareness on VOYCE. Join with my code ${referralCode} and get 100 points to start: ${appUrl(`/signup?ref=${referralCode}`)}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (loading) {
    return (
      <Card className="p-6">
        <Skeleton className="h-8 w-32 mb-4" />
        <Skeleton className="h-12 w-full" />
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-primary border-primary/40">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Invite Friends
          </h3>
          <div className="flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
            <Gift className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">100 pts per referral</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground">
          Share VOYCE with friends and earn 100 points for each person who joins using your code!
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-background/50 rounded-lg p-4 text-center">
            <div className="flex justify-center mb-1">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <p className="text-2xl font-bold">{referralCount}</p>
            <p className="text-xs text-muted-foreground">Friends Joined</p>
          </div>
          <div className="bg-background/50 rounded-lg p-4 text-center">
            <div className="flex justify-center mb-1">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <p className="text-2xl font-bold">{referralCount * 100}</p>
            <p className="text-xs text-muted-foreground">Points Earned</p>
          </div>
        </div>

        {/* Referral Code */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Your Referral Code</label>
          <div className="flex gap-2">
            <Input
              value={referralCode}
              readOnly
              className="font-mono text-lg font-bold"
            />
            <Button
              variant="outline"
              size="icon"
              onClick={copyReferralCode}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={copyReferralLink}
            className="flex-1"
            variant="default"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy Link
          </Button>
          <Button
            onClick={shareOnWhatsApp}
            className="flex-1"
            variant="outline"
          >
            <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </Button>
        </div>
      </div>
    </Card>
  );
}
