import { ThinkingLoader } from './ThinkingLoader';

interface LoadingFallbackProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingFallback({
  message = "Thinking...",
  fullScreen = true,
}: LoadingFallbackProps) {
  return <ThinkingLoader message={message} fullScreen={fullScreen} />;
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="h-16 bg-muted/50 border-b border-border" />
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <div className="h-12 bg-muted/50 rounded-lg w-2/3 mx-auto" />
          <div className="h-6 bg-muted/50 rounded-lg w-1/2 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-4">
              <div className="h-48 bg-muted/50 rounded-lg" />
              <div className="h-4 bg-muted/50 rounded w-3/4" />
              <div className="h-4 bg-muted/50 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
