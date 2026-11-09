import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/hooks/useAuth';
import { AuthGuard } from '@/components/AuthGuard';
import { SEOHead } from '@/components/SEOHead';
import { StatsWidget } from '@/components/dashboard/StatsWidget';
import { MoodChart } from '@/components/dashboard/MoodChart';
import { JournalPreview } from '@/components/dashboard/JournalPreview';
import { ProgressWidget } from '@/components/dashboard/ProgressWidget';
import GamificationWidget from '@/components/gamification/GamificationWidget';
import DailyChallenge from '@/components/daily/DailyChallenge';
import ReferralCard from '@/components/referral/ReferralCard';
import { 
  Heart, 
  BookOpen, 
  Phone, 
  MessageCircle,
  PenSquare,
  User,
  Sparkles
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();

  const todaysTip = "Remember: It's okay to not be okay. Every small step towards mental wellness counts.";

  return (
    <AuthGuard chrome>
      <SEOHead 
        title="My Dashboard - VOYCE"
        description="Your personal mental wellness journey dashboard"
        noindex
      />
      <div className="v-legacy min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-4xl tracking-tight text-foreground mb-2">
                  Welcome back, {user?.user_metadata?.full_name || 'there'}
                </h1>
                <p className="text-lg text-muted-foreground">
                  Pick up where you left off — a check-in, a practice or a page to read.
                </p>
              </div>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="lg">
                  <Link to="/profile">
                    <User className="mr-2 h-5 w-5" />
                    Profile
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link to="/blog/create">
                    <PenSquare className="mr-2 h-5 w-5" />
                    Write Blog
                  </Link>
                </Button>
              </div>
            </div>

            {/* Gamification Widget */}
            <GamificationWidget />

            {/* Daily Challenge */}
            <DailyChallenge />

            {/* Today's Tip */}
            <Card className="p-6 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Today's Wellness Tip</h3>
                  <p className="text-muted-foreground">{todaysTip}</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-border v-tint-apricot">
                <Link to="/safety" className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-card rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Need help now?</h3>
                    <p className="text-sm text-foreground/80">Helplines and support</p>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-primary/20 bg-primary/10">
                <Link to="/journal" className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">My Journal</h3>
                    <p className="text-sm text-primary">Write your thoughts</p>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-primary/20 bg-primary/10">
                <Link to="/thoughts" className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Community</h3>
                    <p className="text-sm text-primary">Share your story</p>
                  </div>
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer border-primary/20 bg-primary/10">
                <Link to="/library" className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Learn</h3>
                    <p className="text-sm text-primary">Explore resources</p>
                  </div>
                </Link>
              </Card>
            </div>

            {/* My VOYCE at a Glance */}
            <div>
              <h2 className="text-2xl font-bold mb-4">My VOYCE at a Glance</h2>
              <StatsWidget />
            </div>

            {/* Mood & Journal Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <MoodChart />
              <JournalPreview />
            </div>

            {/* Learning Progress & Referral */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ProgressWidget />
              <ReferralCard />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </AuthGuard>
  );
}
