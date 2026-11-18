// SEO utilities library
import type { Language } from './i18n';

export interface SEOMetadata {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: 'website' | 'article' | 'tool';
  datePublished?: string;
  dateModified?: string;
  author?: string;
}

// Generate SEO meta tags
export function generateMetaTags(meta: SEOMetadata): {
  title: string;
  description: string;
  ogTags: Array<{ property: string; content: string }>;
  twitterTags: Array<{ name: string; content: string }>;
} {
  const ogTags = [
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: meta.description },
    { property: 'og:type', content: meta.type || 'website' },
    { property: 'og:url', content: meta.url },
  ];

  if (meta.image) {
    ogTags.push({ property: 'og:image', content: meta.image });
  }

  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: meta.description },
  ];

  if (meta.image) {
    twitterTags.push({ name: 'twitter:image', content: meta.image });
  }

  return {
    title: meta.title,
    description: meta.description,
    ogTags,
    twitterTags,
  };
}

// Generate canonical URL
export function generateCanonical(url: string): string {
  const baseUrl = 'https://fitprimelab.com';
  return url.startsWith('http') ? url : `${baseUrl}${url}`;
}

// Generate hreflang tags — accepts partial slugs so blog posts only emit tags for existing translations
export function generateHreflang(
  baseUrl: string,
  slugs: Partial<Record<Language, string>>,
  route: string
): Array<{ rel: string; hreflang: string; href: string }> {
  const languages: Language[] = ['en', 'es', 'pt', 'ja'];
  const tags: Array<{ rel: string; hreflang: string; href: string }> = [];

  for (const lang of languages) {
    const slug = slugs[lang];
    if (!slug) continue;
    const href = `${baseUrl}/${lang}${route.replace('[slug]', slug)}`;
    tags.push({ rel: 'alternate', hreflang: lang, href });
  }

  // x-default: prefer EN, fall back to first available language
  const xDefaultSlug = slugs.en ?? slugs.es ?? slugs.pt ?? slugs.ja;
  const xDefaultLang = slugs.en ? 'en' : slugs.es ? 'es' : slugs.pt ? 'pt' : 'ja';
  if (xDefaultSlug) {
    tags.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: `${baseUrl}/${xDefaultLang}${route.replace('[slug]', xDefaultSlug)}`,
    });
  }

  return tags;
}

// SEO tips validation
export function validateSEOMetadata(meta: SEOMetadata): string[] {
  const errors: string[] = [];

  if (meta.title.length < 30) {
    errors.push('Title is too short (< 30 characters)');
  }
  if (meta.title.length > 60) {
    errors.push('Title is too long (> 60 characters)');
  }

  if (meta.description.length < 120) {
    errors.push('Description is too short (< 120 characters)');
  }
  if (meta.description.length > 160) {
    errors.push('Description is too long (> 160 characters)');
  }

  return errors;
}
