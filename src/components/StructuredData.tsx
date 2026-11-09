/**
 * Structured Data Component for SEO
 * Adds JSON-LD schema.org markup for rich search results
 * Enhanced for better Google indexing and rich snippets
 */

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'FAQPage' | 'Course' | 'MedicalWebPage' | 'HealthTopicContent' | 'Person';
  data: Record<string, unknown>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

/**
 * Organization Schema for VOYCE
 */
export function OrganizationSchema() {
  return (
    <StructuredData
      type="Organization"
      data={{
        '@id': 'https://suryavamshigovardhan.github.io/voyce-website/#organization',
        name: 'VOYCE',
        alternateName: 'VOYCE Mental Health Platform',
        description: 'Comprehensive mental health and wellness platform offering educational resources, philosophical insights, mood tracking, journaling, DSM-5 training, and personal growth tools. Founded by Suryavamshi Govardhan.',
        url: 'https://suryavamshigovardhan.github.io/voyce-website',
        logo: {
          '@type': 'ImageObject',
          url: 'https://storage.googleapis.com/gpt-engineer-file-uploads/TlmOIOM4z7NaylqoW24ZCR1G9mj2/uploads/1758355648497-1000172409.png',
          width: 512,
          height: 512
        },
        image: 'https://storage.googleapis.com/gpt-engineer-file-uploads/TlmOIOM4z7NaylqoW24ZCR1G9mj2/social-images/social-1758355685815-1000172409.png',
        foundingDate: '2025',
        founder: {
          '@type': 'Person',
          '@id': 'https://suryavamshigovardhan.github.io/voyce-website/suryavamshi-govardhan#person',
          name: 'Suryavamshi Govardhan',
          url: 'https://suryavamshigovardhan.github.io/voyce-website/suryavamshi-govardhan',
          jobTitle: 'Founder & Visionary',
          sameAs: [
            'https://www.instagram.com/suryavamshiiii'
          ]
        },
        sameAs: [
          'https://www.instagram.com/suryavamshiiii'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          availableLanguage: ['English', 'Hindi', 'Telugu', 'Kannada', 'Tamil']
        },
        areaServed: 'Worldwide',
        knowsAbout: [
          'Mental Health',
          'Psychology',
          'Mindfulness',
          'DSM-5',
          'Emotional Wellbeing',
          'Stress Management',
          'Anxiety',
          'Depression',
          'Personal Growth'
        ]
      }}
    />
  );
}

/**
 * WebSite Schema with Search Action
 */
export function WebSiteSchema() {
  return (
    <StructuredData
      type="WebSite"
      data={{
        name: 'VOYCE',
        alternateName: 'VOYCE Mental Health Platform',
        url: 'https://voyce.lovable.app',
        description: 'Mental health and wellness platform for emotional wellbeing, psychology education, and personal growth.',
        inLanguage: ['en', 'hi', 'te'],
        potentialAction: [
          {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://voyce.lovable.app/blog?search={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          },
          {
            '@type': 'ReadAction',
            target: 'https://voyce.lovable.app/blog'
          }
        ],
        publisher: {
          '@type': 'Organization',
          name: 'VOYCE',
          url: 'https://voyce.lovable.app'
        }
      }}
    />
  );
}

/**
 * FAQ Schema for common questions
 */
export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <StructuredData
      type="FAQPage"
      data={{
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }}
    />
  );
}

/**
 * Medical/Health Content Schema
 */
export function HealthContentSchema({
  name,
  description,
  about,
  audience
}: {
  name: string;
  description: string;
  about: string;
  audience?: string;
}) {
  return (
    <StructuredData
      type="MedicalWebPage"
      data={{
        name,
        description,
        about: {
          '@type': 'MedicalCondition',
          name: about
        },
        audience: audience ? {
          '@type': 'MedicalAudience',
          audienceType: audience
        } : undefined,
        lastReviewed: new Date().toISOString().split('T')[0],
        reviewedBy: {
          '@type': 'Organization',
          name: 'VOYCE'
        }
      }}
    />
  );
}

/**
 * Article Schema for Blog Posts
 */
export function ArticleSchema({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
}: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return (
    <StructuredData
      type="Article"
      data={{
        headline: title,
        description,
        author: {
          '@type': 'Person',
          name: author,
          url: 'https://suryavamshigovardhan.github.io/voyce-website/suryavamshi-govardhan',
        },
        datePublished,
        dateModified: dateModified || datePublished,
        image: image || 'https://suryavamshigovardhan.github.io/voyce-website/og-image.jpg',
        publisher: {
          '@type': 'Organization',
          name: 'VOYCE',
          url: 'https://suryavamshigovardhan.github.io/voyce-website',
          logo: {
            '@type': 'ImageObject',
            url: 'https://storage.googleapis.com/gpt-engineer-file-uploads/TlmOIOM4z7NaylqoW24ZCR1G9mj2/uploads/1758355648497-1000172409.png',
          },
          founder: {
            '@type': 'Person',
            name: 'Suryavamshi Govardhan',
            url: 'https://suryavamshigovardhan.github.io/voyce-website/suryavamshi-govardhan'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': url,
        },
      }}
    />
  );
}

/**
 * Person Schema for Suryavamshi Govardhan (Founder)
 */
export function FounderSchema() {
  return (
    <StructuredData
      type="Person"
      data={{
        '@id': 'https://suryavamshigovardhan.github.io/voyce-website/suryavamshi-govardhan#person',
        name: 'Suryavamshi Govardhan',
        alternateName: ['Suryavamshi Govardhan VOYCE', 'S. Suryavamshi', 'Surya Govardhan'],
        givenName: 'Suryavamshi',
        familyName: 'Govardhan',
        description: 'Founder of VOYCE, a mental health and wellness platform bridging ancient wisdom with modern psychology for accessible emotional wellbeing.',
        url: 'https://suryavamshigovardhan.github.io/voyce-website/suryavamshi-govardhan',
        mainEntityOfPage: 'https://suryavamshigovardhan.github.io/voyce-website/suryavamshi-govardhan',
        image: 'https://storage.googleapis.com/gpt-engineer-file-uploads/TlmOIOM4z7NaylqoW24ZCR1G9mj2/uploads/1758355648497-1000172409.png',
        jobTitle: 'Founder & Visionary',
        email: 'mailto:voycexx@gmail.com',
        telephone: '+91-9010481175',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'general enquiries',
            email: 'voycexx@gmail.com',
            telephone: '+91-9010481175',
            availableLanguage: ['English', 'Hindi', 'Telugu']
          },
          {
            '@type': 'ContactPoint',
            contactType: 'partnerships',
            email: 'voycexx@gmail.com'
          }
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'VOYCE',
          url: 'https://suryavamshigovardhan.github.io/voyce-website'
        },
        founder: {
          '@type': 'Organization',
          name: 'VOYCE',
          url: 'https://suryavamshigovardhan.github.io/voyce-website'
        },
        knowsAbout: [
          'Mental Health',
          'Psychology',
          'Mindfulness',
          'DSM-5',
          'Emotional Wellbeing',
          'Stress Management',
          'Neuroscience',
          'Eastern Philosophy',
          'Buddhist Psychology'
        ],
        knowsLanguage: ['English', 'Hindi', 'Telugu'],
        sameAs: [
          'https://www.instagram.com/suryavamshiiii',
          'https://suryavamshigovardhan.github.io/voyce-website',
          'https://suryavamshigovardhan.github.io/voyce-website/suryavamshi-govardhan',
          'https://suryavamshigovardhan.github.io/voyce-website/article/why-i-built-voyce'
        ],
        alumniOf: {
          '@type': 'Organization',
          name: 'Student - Psychology & Human Behavior'
        },
        nationality: {
          '@type': 'Country',
          name: 'India'
        }
      }}
    />
  );
}
