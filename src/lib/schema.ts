// JSON-LD Schema markup library
import type { Language } from './i18n';

// Tool Schema
export function generateToolSchema(
  name: string,
  description: string,
  url: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Tool',
    name,
    description,
    url,
    image: image || 'https://fitprimelab.com/logo.png',
  };
}

// Article/Blog Post Schema
export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  author: string,
  datePublished: string,
  dateModified?: string,
  image?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || 'https://fitprimelab.com/logo.png',
  };
}

// Organization Schema (for homepage)
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fit Prime Lab',
    url: 'https://fitprimelab.com',
    logo: 'https://fitprimelab.com/logo.png',
    description: 'Fitness tools, calculators, and guides',
    sameAs: [
      'https://www.facebook.com/fitprimelab',
      'https://www.instagram.com/fitprimelab',
      'https://www.twitter.com/fitprimelab',
    ],
    contact: {
      '@type': 'ContactPoint',
      telephone: '+1-123-456-7890',
      contactType: 'Customer Support',
    },
  };
}

// FAQ Schema
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url?: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Convert schema to JSON-LD script tag string
export function schemaToScriptTag(schema: any): string {
  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
}
