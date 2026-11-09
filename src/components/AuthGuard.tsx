import { ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { LoadingFallback } from './LoadingFallback';
import { Button } from './ui/button';

import { LogIn } from 'lucide-react';
import SiteChrome from '@/components/site/SiteChrome';

interface AuthGuardProps {
  children: ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
  /** Wrap the sign-in prompt in the site header/footer (for pages whose header lives inside the guard). */
  chrome?: boolean;
}

export function AuthGuard({ 
  children, 
  requireAuth = true,
  redirectTo = '/login',
  chrome = false,
}: AuthGuardProps) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();


  const handleLoginRedirect = () => {
    navigate(redirectTo, { 
      state: { from: location.pathname },
      replace: true 
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <LoadingFallback message="Checking authentication..." />;
  }

  if (requireAuth && !user) {
    const prompt = (
      <div className="flex min-h-[70vh] items-center justify-center px-6 py-20">
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 text-center">
          <LogIn className="mx-auto h-6 w-6 text-primary" aria-hidden="true" />
          <h1 className="mt-4 font-display text-2xl font-normal tracking-tight text-foreground">
            Sign in to continue
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            This page is private to your account. Sign in and you'll come straight back here.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button onClick={handleLoginRedirect} className="flex-1">
              Go to sign in
            </Button>
            <Button onClick={handleGoBack} variant="outline" className="flex-1">
              Go back
            </Button>
          </div>
        </div>
      </div>
    );
    return chrome ? <SiteChrome>{prompt}</SiteChrome> : prompt;
  }


  return <>{children}</>;
}
