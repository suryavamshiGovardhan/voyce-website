/**
 * Quick Engagement Bar Component
 * - Provides immediate user engagement options
 * - Accessible and keyboard navigable
 * - Performance optimized
 */

import { memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Brain, 
  PenLine, 
  Trophy,
  ArrowRight 
} from 'lucide-react';

interface QuickAction {
  icon: typeof BookOpen;
  label: string;
  description: string;
  link: string;
  colorClass: string;
  bgClass: string;
}

const quickActions: QuickAction[] = [
  {
    icon: BookOpen,
    label: "Read Blogs",
    description: "Explore articles",
    link: "/blog",
    colorClass: "text-primary",
    bgClass: "bg-primary/10 hover:bg-blue-200"
  },
  {
    icon: Brain,
    label: "DSM-5 Academy",
    description: "Learn diagnostics",
    link: "/dsm5-academy",
    colorClass: "text-primary",
    bgClass: "bg-primary/10 hover:bg-purple-200"
  },
  {
    icon: PenLine,
    label: "Journal",
    description: "Write thoughts",
    link: "/journal",
    colorClass: "text-primary",
    bgClass: "bg-primary/10 hover:bg-green-200"
  },
  {
    icon: Trophy,
    label: "Quizzes",
    description: "Test knowledge",
    link: "/quizzes",
    colorClass: "text-amber-700",
    bgClass: "bg-amber-50 hover:bg-amber-200"
  }
];

const QuickActionCard = memo(({ action }: { action: QuickAction }) => {
  const Icon = action.icon;
  
  return (
    <Link
      to={action.link}
      className={`group flex flex-col items-center p-4 rounded-xl ${action.bgClass} transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
      aria-label={`${action.label}: ${action.description}`}
    >
      <Icon className={`w-6 h-6 ${action.colorClass} mb-2 group-hover:scale-110 transition-transform`} aria-hidden="true" />
      <span className={`text-sm font-medium ${action.colorClass}`}>
        {action.label}
      </span>
      <span className="text-xs text-muted-foreground mt-1">
        {action.description}
      </span>
    </Link>
  );
});

QuickActionCard.displayName = 'QuickActionCard';

function QuickEngagementBar() {
  return (
    <section 
      className="py-8 px-4 bg-muted/50"
      aria-labelledby="quick-actions-heading"
      role="navigation"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 
            id="quick-actions-heading"
            className="text-lg font-semibold text-foreground"
          >
            Quick Actions
          </h2>
          <Link 
            to="/blog"
            className="text-sm text-primary hover:text-primary/80 flex items-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-2 py-1"
            aria-label="Explore more content"
          >
            Explore More
            <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        
        <div 
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
          role="list"
          aria-label="Quick action buttons"
        >
          {quickActions.map((action) => (
            <div key={action.label} role="listitem">
              <QuickActionCard action={action} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(QuickEngagementBar);
