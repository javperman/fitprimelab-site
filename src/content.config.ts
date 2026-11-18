import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    keywords: z.array(z.string()).optional(),
    tldr: z.string().optional(),
    related_tools: z.array(z.string()).optional(),
    related_posts: z.array(z.string()).optional(),
    language: z.enum(['en', 'es', 'pt', 'ja']),
    slug: z.string(),
    translationSlugs: z.record(z.string(), z.string()).optional(),
  }),
});

const exercises = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/exercises' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    language: z.enum(['en', 'es', 'pt', 'ja']),
    slug: z.string(),
    translationSlugs: z.record(z.string(), z.string()).optional(),
    muscles: z.array(z.string()),
    equipment: z.array(z.string()).optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    image: z.string().optional(),
    steps: z.array(z.object({ title: z.string(), text: z.string() })),
    tips: z.array(z.string()).optional(),
    related_tools: z.array(z.string()).optional(),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
  }),
});

export const collections = { blog, exercises };
