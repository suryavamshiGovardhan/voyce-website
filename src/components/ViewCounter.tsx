
import { useState, useEffect } from "react";
import { Eye, Users, Globe } from "lucide-react";

export default function ViewCounter() {
  const [views, setViews] = useState(0);
  const [dailyViews, setDailyViews] = useState(0);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    // Initialize or increment view count
    const initializeViews = () => {
      const totalViews = localStorage.getItem('voyce-total-views');
      const today = new Date().toDateString();
      const lastVisitDate = localStorage.getItem('voyce-last-visit-date');
      const todayViews = localStorage.getItem('voyce-daily-views');
      const uniqueId = localStorage.getItem('voyce-unique-visitor');
      
      // Generate unique visitor ID if not exists
      if (!uniqueId) {
        localStorage.setItem('voyce-unique-visitor', Date.now().toString());
      }
      
      // Increment total views
      const newTotalViews = totalViews ? parseInt(totalViews) + 1 : 1;
      localStorage.setItem('voyce-total-views', newTotalViews.toString());
      setViews(newTotalViews);
      
      // Handle daily views
      if (lastVisitDate !== today) {
        localStorage.setItem('voyce-daily-views', '1');
        localStorage.setItem('voyce-last-visit-date', today);
        setDailyViews(1);
      } else {
        const newDailyViews = todayViews ? parseInt(todayViews) + 1 : 1;
        localStorage.setItem('voyce-daily-views', newDailyViews.toString());
        setDailyViews(newDailyViews);
      }
      
      // Simulate unique visitors (in real app, this would be server-side)
      setUniqueVisitors(Math.floor(newTotalViews * 0.7) + 150);
    };

    initializeViews();
  }, []);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="flex items-center space-x-6 text-muted-foreground text-sm">
      <div className="flex items-center space-x-2">
        <Eye className="h-4 w-4" />
        <span>{formatNumber(views)} views</span>
      </div>
      <div className="flex items-center space-x-2">
        <Users className="h-4 w-4" />
        <span>{formatNumber(uniqueVisitors)} visitors</span>
      </div>
      <div className="flex items-center space-x-2">
        <Globe className="h-4 w-4" />
        <span>{formatNumber(dailyViews)} today</span>
      </div>
    </div>
  );
}
