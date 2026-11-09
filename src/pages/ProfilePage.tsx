
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { sanitizeDbError } from "@/lib/errorHandler";
import { 
  User, 
  Shield, 
  Bell, 
  Download, 
  Trash2, 
  Eye,
  Settings,
  Award,
  BookOpen,
  Heart,
  ArrowLeft
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";

export default function ProfilePage() {
  const { t } = useLanguage();
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    ageGroup: "",
    state: "",
    district: ""
  });

  const [notifications, setNotifications] = useState({
    dailyTips: true,
    learningReminders: true,
    communityUpdates: false,
    newsEmails: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisible: false,
    shareProgress: true,
    anonymousMode: false
  });

  const [userStats, setUserStats] = useState({
    joinDate: "Recent",
    modulesCompleted: 0,
    blogsPublished: 0,
    daysActive: 0
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchProfile();
    fetchUserStats();
  }, [user, navigate]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') throw error;

      if (data) {
        setProfileData({
          fullName: data.full_name || user?.user_metadata?.full_name || '',
          email: user?.email || '',
          mobile: data.mobile || '',
          ageGroup: data.age_group || '',
          state: data.state || '',
          district: data.district || ''
        });
      } else {
        setProfileData({
          fullName: user?.user_metadata?.full_name || '',
          email: user?.email || '',
          mobile: '',
          ageGroup: '',
          state: '',
          district: ''
        });
      }
    } catch (error: any) {
      toast.error(sanitizeDbError(error));
    } finally {
      setLoading(false);
    }
  };

  const fetchUserStats = async () => {
    try {
      const { data: blogs, error } = await supabase
        .from('blogs')
        .select('id, status', { count: 'exact' })
        .eq('author_id', user?.id);

      if (!error && blogs) {
        const published = blogs.filter(b => b.status === 'published').length;
        setUserStats(prev => ({
          ...prev,
          blogsPublished: published,
          joinDate: new Date(user?.created_at || '').toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        }));
      }
    } catch (error) {
      // Silently fail - stats are non-critical
      if (import.meta.env.DEV) {
        console.error('Failed to fetch stats:', error);
      }
    }
  };

  const handleSaveProfile = async () => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          user_id: user?.id,
          full_name: profileData.fullName,
          mobile: profileData.mobile,
          age_group: profileData.ageGroup,
          state: profileData.state,
          district: profileData.district,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      toast.success('Profile updated successfully');
    } catch (error: any) {
      toast.error(sanitizeDbError(error));
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone. All your data including journals, mood entries, and blogs will be permanently deleted.')) {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session) {
          toast.error('Please log in again to delete your account');
          return;
        }

        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL || 'https://eebbwnfkitnmceeokdqd.supabase.co'}/functions/v1/delete-user-account`,
          {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${session.access_token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to delete account');
        }

        toast.success('Account deleted successfully');
        await signOut();
        navigate('/');
      } catch (error: any) {
        console.error('Account deletion error:', error);
        toast.error('Failed to delete account. Please contact support.');
      }
    }
  };

  if (loading) {
    return (
      <div className="v-legacy min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-muted-foreground">Loading profile...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="My Profile"
        description="Manage your VOYCE profile, preferences, and account settings."
        keywords="profile settings, account management, user preferences"
        noindex={true}
      />
      <div className="v-legacy min-h-screen flex flex-col">
        <Navbar />
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>

          <div className="flex items-center mb-8">
            <Avatar className="h-20 w-20 mr-6 bg-primary/10">
              <AvatarFallback className="text-2xl text-primary">
                {profileData.fullName?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U'}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">{profileData.fullName || 'User'}</h1>
              <p className="text-muted-foreground">{profileData.email}</p>
              <p className="text-sm text-muted-foreground">Member since {userStats.joinDate}</p>
              <div className="flex space-x-2 mt-2">
                <Badge variant="secondary">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {userStats.blogsPublished} Published Blogs
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Profile Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="h-5 w-5 mr-2" />
                    Personal Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input
                        id="fullName"
                        value={profileData.fullName}
                        onChange={(e) => setProfileData({...profileData, fullName: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="mobile">Mobile Number</Label>
                      <Input
                        id="mobile"
                        value={profileData.mobile}
                        onChange={(e) => setProfileData({...profileData, mobile: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="ageGroup">Age Group</Label>
                      <Select value={profileData.ageGroup} onValueChange={(value) => setProfileData({...profileData, ageGroup: value})}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="13-17 (Student)">13-17 (Student)</SelectItem>
                          <SelectItem value="18-24 (College/Young Adult)">18-24 (College/Young Adult)</SelectItem>
                          <SelectItem value="25-34">25-34</SelectItem>
                          <SelectItem value="35-44">35-44</SelectItem>
                          <SelectItem value="45-54">45-54</SelectItem>
                          <SelectItem value="55+">55+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={profileData.state}
                        onChange={(e) => setProfileData({...profileData, state: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="district">District</Label>
                      <Input
                        id="district"
                        value={profileData.district}
                        onChange={(e) => setProfileData({...profileData, district: e.target.value})}
                      />
                    </div>
                  </div>
                  <Button 
                    className="w-full" 
                    onClick={handleSaveProfile}
                    disabled={saving}
                  >
                    {saving ? 'Saving...' : 'Save Changes'}
                  </Button>
                </CardContent>
              </Card>

              {/* Privacy Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Privacy & Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Profile Visibility</p>
                      <p className="text-sm text-muted-foreground">Allow others to see your profile in community</p>
                    </div>
                    <Switch
                      checked={privacy.profileVisible}
                      onCheckedChange={(checked) => setPrivacy({...privacy, profileVisible: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Share Learning Progress</p>
                      <p className="text-sm text-muted-foreground">Let others see your achievements</p>
                    </div>
                    <Switch
                      checked={privacy.shareProgress}
                      onCheckedChange={(checked) => setPrivacy({...privacy, shareProgress: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Anonymous Mode</p>
                      <p className="text-sm text-muted-foreground">Hide your name in community interactions</p>
                    </div>
                    <Switch
                      checked={privacy.anonymousMode}
                      onCheckedChange={(checked) => setPrivacy({...privacy, anonymousMode: checked})}
                    />
                  </div>
                  <Button variant="outline" className="w-full">
                    <Eye className="h-4 w-4 mr-2" />
                    Change Password
                  </Button>
                </CardContent>
              </Card>

              {/* Notification Preferences */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2" />
                    Notification Preferences
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Daily Wellness Tips</p>
                      <p className="text-sm text-muted-foreground">Receive daily mental health tips</p>
                    </div>
                    <Switch
                      checked={notifications.dailyTips}
                      onCheckedChange={(checked) => setNotifications({...notifications, dailyTips: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Learning Reminders</p>
                      <p className="text-sm text-muted-foreground">Reminders to continue your learning journey</p>
                    </div>
                    <Switch
                      checked={notifications.learningReminders}
                      onCheckedChange={(checked) => setNotifications({...notifications, learningReminders: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Community Updates</p>
                      <p className="text-sm text-muted-foreground">New posts and discussions in community</p>
                    </div>
                    <Switch
                      checked={notifications.communityUpdates}
                      onCheckedChange={(checked) => setNotifications({...notifications, communityUpdates: checked})}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Newsletter</p>
                      <p className="text-sm text-muted-foreground">Monthly newsletter with resources</p>
                    </div>
                    <Switch
                      checked={notifications.newsEmails}
                      onCheckedChange={(checked) => setNotifications({...notifications, newsEmails: checked})}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Data Management */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Data Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full" disabled>
                    <Download className="h-4 w-4 mr-2" />
                    Download My Data (Coming Soon)
                  </Button>
                  <Button 
                    variant="destructive" 
                    className="w-full"
                    onClick={handleDeleteAccount}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Account deletion is permanent and cannot be undone. All your data will be securely removed within 30 days.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* User Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Journey</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Member Since</span>
                    <span className="font-semibold">{userStats.joinDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Published Blogs</span>
                    <span className="font-semibold">{userStats.blogsPublished}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Modules Completed</span>
                    <span className="font-semibold">{userStats.modulesCompleted}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-amber-700" />
                      <div>
                        <p className="text-sm font-medium">Mindfulness Master</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="h-5 w-5 text-red-500" />
                      <div>
                        <p className="text-sm font-medium">Community Helper</p>
                        <p className="text-xs text-muted-foreground">1 week ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-sm font-medium">Knowledge Seeker</p>
                        <p className="text-xs text-muted-foreground">2 weeks ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Having trouble with your account or need support with the app?
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
