import { Brain, Sparkles } from 'lucide-react';

interface ThinkingLoaderProps {
  message?: string;
  fullScreen?: boolean;
}

export function ThinkingLoader({ 
  message = "Thinking...", 
  fullScreen = true 
}: ThinkingLoaderProps) {
  const containerClass = fullScreen 
    ? "min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-primary/80/50 to-slate-800"
    : "flex items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <div className="text-center space-y-6 animate-fade-in">
        {/* Thinking Person Animation */}
        <div className="relative flex justify-center">
          {/* Glowing background effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          </div>
          
          {/* Main thinking animation */}
          <div className="relative">
            {/* Head with brain icon */}
            <div className="relative animate-float">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-xl border-2 border-primary/40 flex items-center justify-center">
                <Brain className="h-10 w-10 text-primary animate-pulse" />
              </div>
              
              {/* Thought bubbles */}
              <div className="absolute -right-2 -top-2 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}>
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <div className="absolute -left-3 top-0 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }}>
                <Sparkles className="h-3 w-3 text-primary" />
              </div>
              <div className="absolute right-2 top-6 animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }}>
                <Sparkles className="h-3 w-3 text-primary" />
              </div>
            </div>
            
            {/* Thinking dots */}
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
        
        {/* Message */}
        <div className="space-y-2">
          <p className="text-xl font-semibold text-foreground animate-pulse">
            {message}
          </p>
          <p className="text-sm text-muted-foreground">
            One moment.
          </p>
        </div>
      </div>
    </div>
  );
}

export function InlineThinkingLoader({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex items-center justify-center space-x-3 py-8">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/40 flex items-center justify-center animate-pulse">
          <Brain className="h-5 w-5 text-primary animate-spin-slow" />
        </div>
        <Sparkles className="absolute -right-1 -top-1 h-3 w-3 text-primary animate-bounce" />
      </div>
      <span className="text-muted-foreground animate-pulse">{message}</span>
    </div>
  );
}
