import DOMPurify from 'dompurify';

interface SafeMarkdownProps {
  content: string;
  className?: string;
}

/**
 * Safe component for rendering markdown-like content with bold formatting
 * Replaces dangerouslySetInnerHTML with secure text processing
 */
export function SafeMarkdown({ content, className = "" }: SafeMarkdownProps) {
  // Split content by paragraphs and process each one
  const paragraphs = content.split('\n').filter(p => p.trim());

  return (
    <div className={className}>
      {paragraphs.map((paragraph, index) => {
        // Check if paragraph contains markdown-style bold formatting
        if (paragraph.includes('**')) {
          // Process bold text safely
          const parts = paragraph.split(/(\*\*.*?\*\*)/);
          
          return (
            <p key={index} className="mb-4 text-sm leading-relaxed">
              {parts.map((part, partIndex) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  // Remove the ** markers and render as bold
                  const boldText = part.slice(2, -2);
                  return <strong key={partIndex}>{boldText}</strong>;
                }
                return part;
              })}
            </p>
          );
        }
        
        // Regular paragraph without formatting
        return paragraph.trim() ? (
          <p key={index} className="mb-4 text-sm leading-relaxed">
            {paragraph}
          </p>
        ) : null;
      })}
    </div>
  );
}

/**
 * For cases where HTML content absolutely must be rendered,
 * this provides a sanitized version using DOMPurify
 */
export function SafeHTML({ html, className = "" }: { html: string; className?: string }) {
  const sanitizedHTML = DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'strong', 'em', 'br', 'ul', 'ol', 'li', 'h2', 'h3', 'h4', 'blockquote', 'hr', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
    ALLOWED_ATTR: []
  });

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
    />
  );
}