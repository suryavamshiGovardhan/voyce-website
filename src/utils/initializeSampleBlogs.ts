import { supabase } from '@/integrations/supabase/client';

export const initializeSampleBlogs = async () => {
  try {
    // Check if blogs already exist
    const { data: existing, error: checkError } = await supabase
      .from('blogs')
      .select('id')
      .limit(1);

    if (checkError) {
      if (import.meta.env.DEV) {
        console.error('Error checking existing blogs:', checkError);
      }
      return;
    }

    // Only insert if no blogs exist
    if (existing && existing.length > 0) {
      return;
    }

    const sampleBlogs = [
      {
        title: 'Unlocking Everyday Joy: Mindfulness for a Better You',
        slug: 'unlocking-everyday-joy-mindfulness',
        author: 'Suryavamshi Govardhan',
        author_name: 'Suryavamshi Govardhan, 4igroups',
        date: '2025-01-27',
        summary: 'Mindfulness helps transform everyday stress into moments of clarity, promoting emotional resilience and self-kindness.',
        content: '<h2>Introduction</h2><p>In today\'s fast-paced world, finding moments of peace can feel challenging. Yet, what if the key to happiness isn\'t about grand gestures but rather in the small, mindful moments we create?</p><h2>Understanding Mindfulness</h2><p>Mindfulness is the art of being fully present without being overwhelmed.</p><h2>Benefits</h2><ul><li>Reduce stress</li><li>Improve focus</li><li>Enhance emotional regulation</li></ul><h2>Practical Exercises</h2><h3>The Three-Breath Reset</h3><p>Take three deep breaths whenever overwhelmed.</p>',
        quotes: '"Happiness is not something ready made. It comes from your own actions." — Dalai Lama',
        tips: 'Begin with three deep breaths | Set aside 5 minutes for morning reflection | Practice daily gratitude',
        blog_references: 'Greater Good Science Center, UC Berkeley',
        footer: 'Author: Suryavamshi Govardhan, 4igroups',
        featured_image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200',
        category: 'Mindfulness & Wellness',
        status: 'published'
      },
      {
        title: 'Understanding Mental Health in Modern India',
        slug: 'understanding-mental-health-india',
        author: 'VOYCE Editorial Team',
        author_name: 'VOYCE Editorial Team',
        date: '2025-01-15',
        summary: 'An exploration of mental health awareness and resources available across India.',
        content: '<h2>Mental Health in India</h2><p>Mental health awareness in India has grown significantly with initiatives like Tele MANAS providing 24/7 support.</p><h2>Breaking the Stigma</h2><p>Younger generations are challenging norms and advocating for open conversations.</p><h2>Available Resources</h2><ul><li>Tele MANAS: 14416</li><li>District Mental Health Programs</li><li>Online counseling platforms</li></ul>',
        quotes: '"Mental health is not a destination, but a process." — Noam Shpancer',
        tips: 'Reach out for help | Join support communities | Practice self-compassion',
        blog_references: 'National Mental Health Survey of India | WHO Mental Health Atlas',
        footer: 'VOYCE Mental Health Platform',
        featured_image: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=1200',
        category: 'Mental Health Awareness',
        status: 'published'
      },
      {
        title: 'Student Stress: Coping with Academic Pressure',
        slug: 'student-stress-coping-strategies',
        author: 'Dr. Priya Sharma',
        author_name: 'Dr. Priya Sharma',
        date: '2025-01-10',
        summary: 'Practical strategies for students dealing with exam stress and academic pressure.',
        content: '<h2>Understanding Student Stress</h2><p>Academic pressure affects millions of Indian students each year.</p><h2>Signs</h2><ul><li>Sleep disturbances</li><li>Difficulty concentrating</li><li>Physical symptoms</li></ul><h2>Healthy Coping Strategies</h2><h3>Time Management</h3><p>Break study sessions using the Pomodoro Technique.</p><h3>Physical Activity</h3><p>Regular exercise reduces stress hormones.</p>',
        quotes: '"You don\'t have to see the whole staircase, just take the first step." — MLK Jr.',
        tips: 'Create a study schedule | Take regular breaks | Exercise daily | Practice deep breathing',
        blog_references: 'American Psychological Association | ICMR studies',
        footer: 'Educational content from VOYCE',
        featured_image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200',
        category: 'Student Mental Health',
        status: 'published'
      }
    ];

    const { error: insertError } = await supabase
      .from('blogs')
      .insert(sampleBlogs);

    if (insertError) {
      if (import.meta.env.DEV) {
        console.error('Error inserting sample blogs:', insertError);
      }
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.error('Failed to initialize sample blogs:', error);
    }
  }
};
