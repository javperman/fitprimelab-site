// Tools management library
import type { Language } from './i18n';

export interface Tool {
  slug: Record<Language, string>;
  name: Record<Language, string>;
  description: Record<Language, string>;
  image?: string;
  tags: string[];
  category: string;
  author?: string;
  updated?: string;
}

// Get all tools - load from src/content/tools/ JSON files
export async function getTools(): Promise<Tool[]> {
  const toolFiles = import.meta.glob<{ default: Tool }>(
    '/src/content/tools/*.json',
    { eager: true }
  );

  const tools: Tool[] = Object.values(toolFiles).map((module) => module.default);
  return tools;
}

// Get tool by slug
export async function getToolBySlug(
  slug: string,
  lang: Language
): Promise<Tool | null> {
  const tools = await getTools();
  return tools.find((tool) => tool.slug[lang] === slug) || null;
}

// Get tools by category
export async function getToolsByCategory(category: string): Promise<Tool[]> {
  const tools = await getTools();
  return tools.filter((tool) => tool.category === category);
}

// Get tools by tag
export async function getToolsByTag(tag: string): Promise<Tool[]> {
  const tools = await getTools();
  return tools.filter((tool) => tool.tags.includes(tag));
}

// Get related tools by tags
export async function getRelatedTools(
  tags: string[],
  currentSlug?: string,
  limit: number = 3
): Promise<Tool[]> {
  const tools = await getTools();
  
  const filtered = tools
    .filter((tool) => {
      // Must have at least one matching tag
      return tool.tags.some((tag) => tags.includes(tag));
    })
    .filter((tool) => {
      // Exclude current tool if slug provided
      return !currentSlug || tool.slug.en !== currentSlug;
    })
    .slice(0, limit);

  return filtered;
}

// Sort tools alphabetically by name
export function sortToolsByName(tools: Tool[], lang: Language): Tool[] {
  return [...tools].sort((a, b) => {
    const nameA = a.name[lang];
    const nameB = b.name[lang];
    return nameA.localeCompare(nameB);
  });
}

// Get unique categories
export async function getToolCategories(): Promise<string[]> {
  const tools = await getTools();
  const categories = new Set(tools.map((tool) => tool.category));
  return Array.from(categories).sort();
}

// Get unique tags
export async function getToolTags(): Promise<string[]> {
  const tools = await getTools();
  const tags = new Set<string>();
  tools.forEach((tool) => {
    tool.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
