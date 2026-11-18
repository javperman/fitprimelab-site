// Blog management library
import type { Language } from './i18n';

export interface BlogPost {
  title: string;
  description: string;
  slug: string;
  language: Language;
  author?: string;
  date: string;
  updated?: string;
  image?: string;
  tags: string[];
  related_tools?: string[];
  content: string; // HTML content after MDX compilation
}

// Get all blog posts (placeholder - will load from content)
export async function getBlogPosts(): Promise<BlogPost[]> {
  // In a real implementation, this would load from files
  // For now, return a static array that can be extended
  const posts: BlogPost[] = [
    // English Posts
    {
      title: "How to Calculate Your One Rep Max (1RM)",
      description: "Learn the science behind 1RM calculations and discover which formula works best for you.",
      slug: "how-to-calculate-1rm",
      language: "en",
      author: "Fit Prime Lab",
      date: "2026-03-01",
      updated: "2026-03-17",
      image: "/images/blog/1rm-calculation.png",
      tags: ["strength", "rm", "1rm", "training"],
      related_tools: ["rm-calculator"],
      content: "",
    },
    {
      title: "Complete Guide to Strength Training for Beginners",
      description: "Master the fundamentals of strength training with this comprehensive beginner's guide. Learn proper form, programming, and progression.",
      slug: "strength-training-guide",
      language: "en",
      author: "Fit Prime Lab",
      date: "2026-03-10",
      updated: "2026-03-17",
      image: "/images/blog/strength-training.png",
      tags: ["strength", "training", "programming"],
      related_tools: ["rm-calculator"],
      content: "",
    },
    {
      title: "Powerlifting 101: Getting Started with the Big Three",
      description: "Learn the basics of powerlifting, master the squat, bench press, and deadlift, and understand competition standards.",
      slug: "powerlifting-101",
      language: "en",
      author: "Fit Prime Lab",
      date: "2026-02-28",
      updated: "2026-03-17",
      image: "/images/blog/powerlifting.png",
      tags: ["strength", "powerlifting", "weightlifting", "1rm"],
      related_tools: ["rm-calculator"],
      content: "",
    },
    // Spanish Posts
    {
      title: "Cómo Calcular tu Repetición Máxima (1RM)",
      description: "Aprende la ciencia detrás de los cálculos de 1RM y descubre qué fórmula funciona mejor para ti.",
      slug: "como-calcular-1rm",
      language: "es",
      author: "Fit Prime Lab",
      date: "2026-03-01",
      updated: "2026-03-17",
      image: "/images/blog/1rm-calculation.png",
      tags: ["strength", "rm", "1rm", "training"],
      related_tools: ["rm-calculator"],
      content: "",
    },
    {
      title: "Guía Completa de Entrenamiento de Fuerza para Principiantes",
      description: "Domina los fundamentos del entrenamiento de fuerza con esta guía completa. Aprende técnica correcta, programación y progresión.",
      slug: "guia-entrenamiento-fuerza",
      language: "es",
      author: "Fit Prime Lab",
      date: "2026-03-10",
      updated: "2026-03-17",
      image: "/images/blog/strength-training.png",
      tags: ["strength", "training", "programming"],
      related_tools: ["rm-calculator"],
      content: "",
    },
  ];
  
  return posts;
}

// Get blog post by slug and language
export async function getBlogPostBySlug(
  slug: string,
  lang: Language
): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug && post.language === lang) || null;
}

// Get blog posts by language
export async function getBlogPostsByLanguage(lang: Language): Promise<BlogPost[]> {
  const posts = await getBlogPosts();
  return posts.filter((post) => post.language === lang);
}

// Get blog posts by tag
export async function getBlogPostsByTag(tag: string, lang: Language): Promise<BlogPost[]> {
  const posts = await getBlogPostsByLanguage(lang);
  return posts.filter((post) => post.tags.includes(tag));
}

// Get related blog posts by tags
export async function getRelatedBlogPosts(
  tags: string[],
  lang: Language,
  currentSlug?: string,
  limit: number = 3
): Promise<BlogPost[]> {
  const posts = await getBlogPostsByLanguage(lang);

  const filtered = posts
    .filter((post) => {
      // Must have at least one matching tag
      return post.tags.some((tag) => tags.includes(tag));
    })
    .filter((post) => {
      // Exclude current post if slug provided
      return !currentSlug || post.slug !== currentSlug;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);

  return filtered;
}

// Get recent blog posts
export async function getRecentBlogPosts(
  lang: Language,
  limit: number = 5
): Promise<BlogPost[]> {
  const posts = await getBlogPostsByLanguage(lang);
  return posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Get unique tags from all posts in a language
export async function getBlogTags(lang: Language): Promise<string[]> {
  const posts = await getBlogPostsByLanguage(lang);
  const tags = new Set<string>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

// Calculate reading time (rough estimate)
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

// Format date for display
export function formatDate(date: string, lang: Language = 'en'): string {
  const dateObj = new Date(date);
  const formatter = new Intl.DateTimeFormat(lang === 'ja' ? 'ja-JP' : lang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return formatter.format(dateObj);
}
