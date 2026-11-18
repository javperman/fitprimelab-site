# Fit Prime Lab - Development Instructions

You are helping develop **Fit Prime Lab**, a multilingual fitness platform with tools, blog, and guides.

## Project Structure

```
src/
├── components/           # Reusable Astro components
│   ├── SEOHead.astro    # SEO meta tags & hreflang
│   ├── BaseLayout.astro # Main layout wrapper
│   ├── ToolLayout.astro # Tool page layout
│   ├── BlogLayout.astro # Blog post layout
│   ├── ToolCalculator.astro
│   ├── ToolInputs.astro
│   ├── ToolResult.astro
│   ├── BlogCard.astro
│   └── RelatedContent.astro
├── layouts/             # Full-page layouts
├── pages/               # Dynamic routes
│   └── [lang]/          # Language-nested routes
│       ├── index.astro  # Homepage
│       ├── tools/
│       │   ├── index.astro      # Tools listing
│       │   └── [slug].astro     # Individual tool
│       └── blog/
│           ├── index.astro      # Blog listing
│           └── [slug].astro     # Individual post
├── content/             # Content files
│   ├── tools/          # Tool definitions (JSON)
│   └── blog/           # Blog posts
│       ├── en/         # English posts
│       ├── es/         # Spanish posts
│       ├── pt/         # Portuguese posts
│       └── ja/         # Japanese posts
├── lib/                 # Utilities
│   ├── i18n.ts         # Multilingual helpers
│   ├── seo.ts          # SEO utilities
│   ├── tools.ts        # Tools management
│   ├── blog.ts         # Blog management
│   └── schema.ts       # JSON-LD schema markup
└── styles/             # Global styles

docs/                    # Documentation
├── project-context.md   # Project overview
├── copilot-rules.md     # Development rules
├── seo-rules.md         # SEO guidelines
├── tool-system.md       # Tool system docs
├── blog-system.md       # Blog system docs
└── i18n-system.md       # i18n documentation
```

## Languages

Supported: **en** (English), **es** (Spanish), **pt** (Portuguese), **ja** (Japanese)

Default: **en**

## Key Rules

### Routes & i18n
- All routes are nested under `[lang]` parameter
- Must implement `getStaticPaths()` returning all languages
- Always pass `lang` prop to components that need it
- Use hreflang tags on every page

### SEO
- Every page uses `SEOHead` component
- Include meaningful meta title (50-60 chars)
- Include meta description (120-160 chars)
- Add schema markup for tools and articles
- Generate canonical URLs

### Tools System
1. Define tools in `src/content/tools/[name].json`
2. Include multilingual slugs, names, descriptions
3. Add tags and category
4. Tool pages are at `/[lang]/tools/[slug]`

### Blog System
1. Create posts in `src/content/blog/[lang]/[slug].mdx`
2. Use MDX frontmatter with required fields
3. Include article metadata (author, date, tags)
4. Link to related tools using tags
5. Blog pages at `/[lang]/blog/[slug]`

### Components
- Keep components modular and reusable
- Props should be strongly typed
- Use Astro's static generation
- Style inline or with scoped CSS

## Adding Content

### New Tool
1. Create file: `src/content/tools/your-tool.json`
2. Define all language versions
3. Add meaningful tags
4. Run build - routing auto-generates

### New Blog Post
1. Create file: `src/content/blog/[lang]/your-slug.mdx`
2. Add required frontmatter
3. Write in Markdown/MDX
4. Include internal links
5. Run build - routing auto-generates

## Development Workflow

```bash
npm run dev          # Start dev server
npm run build        # Build site
npm run preview      # Preview built site
npm run check        # TypeScript check
```

## Important Guidelines

- **Always validate SEO metadata** (title, description length)
- **Test all language routes** before deployment
- **Use semantic HTML** for accessibility
- **Optimize performance** - Astro generates static HTML
- **Maintain consistent slugs** across languages
- **Document schema changes** in docs/

## References

- Astro docs: https://docs.astro.build
- See `docs/` folder for detailed system documentation
- Check existing examples in `src/content/` and `src/pages/`

---

**Need help?** Check the relevant doc file (seo-rules.md, i18n-system.md, tool-system.md, etc.)
