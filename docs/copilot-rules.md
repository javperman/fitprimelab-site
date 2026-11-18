# Copilot Rules for Fit Prime Lab

## Development Guidelines

### Technology Rules
- Use **Astro** for static site generation
- Use **TypeScript** for type safety
- Create **reusable Astro components**
- Support **dynamic routing** with [lang] and [slug]
- Implement **i18n** using our i18n helper

### Component Rules
- Place components in `src/components/`
- Use `.astro` extension
- Accept `props` for flexibility
- Leverage Astro's static generation

### Styling Rules
- Use CSS modules or scoped styles
- Keep styles in `src/styles/`
- Follow mobile-first approach
- Ensure accessibility (WCAG 2.1 AA)

### i18n Rules
- Use `i18n` helper from `src/lib/i18n.ts`
- Always pass `lang` prop to pages
- Generate routes for all 4 supported languages
- Use hreflang for SEO

### SEO Rules
- Use `SEOHead` component on every page
- Include proper meta tags
- Add schema markup using `src/lib/schema.ts`
- Implement canonical URLs
- Include hreflang tags

### Content Rules
- Tools defined in `src/content/tools/` as JSON
- Blog posts in `src/content/blog/` as MDX
- Each tool/post must have multilingual content
- Use tags for content relationships

### Performance Rules
- Keep bundle size minimal
- Use static generation wherever possible
- Optimize images automatically
- Lazy load when appropriate

### File Organization
- One component per file
- Descriptive file names
- Logical folder structure
- Clear separation of concerns
