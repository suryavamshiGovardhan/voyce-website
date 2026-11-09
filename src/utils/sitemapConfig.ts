/**
 * Sitemap Configuration for VOYCE
 * Static routes for SEO indexing
 */

export interface SitemapRoute {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  title: string;
}

export const sitemapRoutes: SitemapRoute[] = [
  // High Priority Pages
  { path: '/', priority: 1.0, changefreq: 'daily', title: 'VOYCE Home' },
  { path: '/voyce', priority: 0.9, changefreq: 'weekly', title: 'About VOYCE' },
  { path: '/blog', priority: 0.9, changefreq: 'daily', title: 'Mental Health Blog' },
  { path: '/article/desire-suffering-journey', priority: 0.9, changefreq: 'monthly', title: 'Desire, Suffering & The Human Journey' },
  
  // Mental Wellness
  { path: '/stress', priority: 0.8, changefreq: 'weekly', title: 'Stress Management' },
  { path: '/trauma', priority: 0.8, changefreq: 'weekly', title: 'Trauma Recovery' },
  { path: '/adhd', priority: 0.8, changefreq: 'weekly', title: 'ADHD Support' },
  
  // Brain Science
  { path: '/brain', priority: 0.8, changefreq: 'weekly', title: 'Brain Function' },
  { path: '/neuroscience', priority: 0.8, changefreq: 'weekly', title: 'Neuroscience Research' },
  { path: '/mind-heart-gut', priority: 0.7, changefreq: 'monthly', title: 'Mind-Heart-Gut Connection' },
  
  // Development
  { path: '/aces', priority: 0.7, changefreq: 'monthly', title: 'ACEs Impact' },
  { path: '/cds', priority: 0.7, changefreq: 'monthly', title: 'Cognitive Disengagement Syndrome' },
  
  // Education
  { path: '/schools', priority: 0.7, changefreq: 'monthly', title: 'VOYCE Schools' },
  { path: '/dsm5', priority: 0.9, changefreq: 'monthly', title: 'DSM-5 Guide' },
  { path: '/dsm5-academy', priority: 0.8, changefreq: 'monthly', title: 'DSM-5 Academy' },
  { path: '/icd9', priority: 0.8, changefreq: 'monthly', title: 'ICD-9 Hub' },
  { path: '/diagnostics', priority: 0.8, changefreq: 'monthly', title: 'Integrated Diagnostics' },
  { path: '/theories', priority: 0.8, changefreq: 'monthly', title: 'Psychology Theories' },
  
  // Community
  { path: '/thoughts', priority: 0.7, changefreq: 'daily', title: 'Share Thoughts' },
  { path: '/story', priority: 0.7, changefreq: 'weekly', title: 'Personal Stories' },
  { path: '/newsletters', priority: 0.6, changefreq: 'weekly', title: 'Newsletters' },
  
  // Resources
  { path: '/path', priority: 0.7, changefreq: 'weekly', title: 'VOYCE Path' },
  { path: '/tools', priority: 0.7, changefreq: 'weekly', title: 'Mental Health Tools' },
  { path: '/library', priority: 0.8, changefreq: 'weekly', title: 'Resource Library' },
  { path: '/workbook', priority: 0.7, changefreq: 'weekly', title: 'Interactive Workbook' },
  
  // Gamification
  { path: '/quizzes', priority: 0.6, changefreq: 'weekly', title: 'Mental Health Quizzes' },
  { path: '/leaderboard', priority: 0.5, changefreq: 'daily', title: 'Community Leaderboard' },
];

/**
 * Generate XML sitemap string
 */
export function generateSitemapXML(baseUrl: string = 'https://voyce-x.lovable.app'): string {
  const now = new Date().toISOString().split('T')[0];
  
  const urlEntries = sitemapRoutes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}
