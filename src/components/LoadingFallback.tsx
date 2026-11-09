
interface LoadingFallbackProps {
  message?: string;
  fullScreen?: boolean;
}

export function LoadingFallback({ 
  message = "Loading...", 
  fullScreen = true 
}: LoadingFallbackProps) {
  // Calm, on-palette placeholder while a page loads (no dark flash between routes).
  return (
    <div
      role="status"
      aria-live="polite"
      className={`${fullScreen ? "min-h-screen" : "py-16"} flex flex-col items-center justify-center gap-4 bg-background`}
    >
      <span className="relative flex h-10 w-10 items-center justify-center" aria-hidden="true">
        <span className="absolute inset-0 rounded-full bg-primary/15 motion-safe:animate-ping" />
        <span className="h-4 w-4 rounded-full bg-primary/70" />
      </span>
      <span className="text-sm text-muted-foreground">{message}</span>
    </div>
  );
}

export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen animate-pulse">
      {/* Header skeleton */}
      <div className="h-16 bg-muted/50 border-b border-border" />
      
      {/* Hero skeleton */}
      <div className="container mx-auto px-4 py-12 space-y-8">
        <div className="space-y-4">
          <div className="h-12 bg-muted/50 rounded-lg w-2/3 mx-auto" />
          <div className="h-6 bg-muted/50 rounded-lg w-1/2 mx-auto" />
        </div>
        
        {/* Content skeleton */}
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
