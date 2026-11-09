
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { WelcomeQuoteDialog } from "@/components/WelcomeQuoteDialog";
import { SEOHead } from "@/components/SEOHead";

export default function LoginPage() {
  const { t } = useLanguage();
  const { signIn, signInWithGoogle, user, loading } = useAuth();
  const navigate = useNavigate();
  const [showWelcome, setShowWelcome] = useState(false);
  const [userName, setUserName] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      const name = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Friend';
      setUserName(name);
      setShowWelcome(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 3000);
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await signIn(formData.email, formData.password);
      // Navigation handled by useEffect
    } catch (err) {
      // Error already handled by auth context with toast
      if (import.meta.env.DEV) {
        console.error('Login error:', err);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };

  // Redirect if already logged in
  if (loading) return <div>Loading...</div>;

  return (
    <div className="v-legacy min-h-screen flex flex-col">
      <SEOHead title="Sign in" description="Sign in to your private VOYCE journal and patterns." noindex />
      <Navbar />
      <main id="main-content" className="relative isolate flex-grow flex items-center justify-center overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="v-hero-glow" aria-hidden />
        <div className="v-card relative z-10 max-w-md w-full space-y-8 p-7 sm:p-9">
          <div className="text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-primary">Welcome back</p>
            <h1 className="font-display text-3xl tracking-tight">
              Welcome back to VOYCE
            </h1>
            <p className="mt-2 text-muted-foreground">
              Pick up where you left off. No account?{" "}
              <Link to="/start-here" className="text-primary hover:underline">Explore without one</Link>.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot your password?
              </Link>
            </div>

            <div className="space-y-4">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                type="button" 
                className="w-full flex items-center justify-center gap-2"
                onClick={handleGoogleSignIn}
              >
                <img src="https://www.google.com/favicon.ico" alt="Google" className="w-4 h-4" />
                Sign in with Google
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline font-medium">
                  Sign up for free
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8 p-4 v-tint-apricot border border-border rounded-2xl">
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 text-primary mr-2" />
              <h3 className="font-semibold text-foreground">Need help right now?</h3>
            </div>
            <p className="text-sm text-foreground/80 mb-2">
              If you're experiencing a mental health crisis, please reach out for immediate support:
            </p>
            <Button asChild size="sm" className="w-full rounded-full">
              <a href="tel:14416">Call Tele MANAS: 14416</a>
            </Button>
          </div>
        </div>
      </main>
      <WelcomeQuoteDialog 
        userName={userName}
        open={showWelcome}
        onOpenChange={setShowWelcome}
      />
      <Footer />
    </div>
  );
}
