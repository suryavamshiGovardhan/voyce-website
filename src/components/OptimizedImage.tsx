import { useState, useEffect, ImgHTMLAttributes } from 'react';
import { asset } from "@/lib/site";
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function OptimizedImage({ 
  src, 
  alt, 
  fallback = asset('placeholder.svg'),
  className,
  loading = 'lazy',
  ...props 
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(fallback);
  const [imageLoading, setImageLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageSrc(src);
      setImageLoading(false);
    };

    img.onerror = () => {
      setError(true);
      setImageLoading(false);
      setImageSrc(fallback);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallback]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {imageLoading && (
        <div className="absolute inset-0 bg-muted/50 animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        loading={loading}
        className={cn(
          "transition-opacity duration-300",
          imageLoading ? "opacity-0" : "opacity-100",
          error && "opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}
