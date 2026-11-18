# Blog System

## Overview
Blog posts are MDX files in `src/content/blog/`. Each post supports multiple languages through separate files or frontmatter configuration.

## File Structure
```
src/content/blog/
├── en/
│   ├── how-to-calculate-1rm.mdx
│   └── [slug].mdx
├── es/
│   ├── como-calcular-1rm.mdx
│   └── [slug].mdx
└── ...
```

## Blog Post Format (MDX)

```mdx
---
title: "How to Calculate Your 1RM"
description: "Learn the different formulas and methods to accurately calculate one rep max."
author: "Fit Prime Lab"
date: 2026-03-17
updated: 2026-03-17
image: "/images/blog/1rm-guide.png"
tags: ["strength", "rm", "workout"]
related_tools: ["rm-calculator"]
language: "en"
slug: "how-to-calculate-1rm"
---

# Your markdown content here

## Best Practices
- Use proper heading hierarchy
- Include internal links
- Add images with alt text
- Write for readability
```

## Frontmatter Fields

### Required
- `title` - Post title (50-60 chars for SEO)
- `description` - Meta description (120-160 chars)
- `date` - Publication date (YYYY-MM-DD)
- `slug` - URL slug for this language
- `language` - Language code (en, es, pt, ja)
- `tags` - Array of tags

### Optional
- `author` - Post author
- `updated` - Update date
- `image` - Featured image
- `related_tools` - Array of tool slugs to link
- `toc` - Table of contents (auto-generated if true)

## Content Guidelines

### Structure
1. **Compelling Headline** - Main keyword, benefit-focused
2. **Meta Description** - Summary of article
3. **Introduction** - Hook, establish relevance
4. **Main Content** - Organized with H2/H3 headings
5. **Internal Links** - To related tools and posts
6. **FAQ Section** - Common questions with answers
7. **Conclusion** - Summary and call-to-action

### SEO Requirements
- Minimum 500 words
- Main keyword in first 100 words
- Keyword density 0.5% - 1.5%
- Use LSI keywords naturally
- Internal links (minimum 3)
- Alt text on all images
- Proper heading hierarchy

### Writing Style
- Clear, concise language
- Short paragraphs (2-3 sentences max)
- Scannable with headers
- Active voice preferred
- Front-load information (inverted pyramid)

## Related Content System

### Automatic Linkage
Posts with matching tags are automatically suggested:
- "Related Blog Posts" section
- "Related Tools" section (from `related_tools` field)

### Example
Post with tags: `["strength", "rm", "workout"]`
Will show:
- Other posts with "strength", "rm", or "workout"
- Tools tagged with same tags

## Rendering

Each blog post page includes:
1. **SEOHead** - Meta tags, article schema
2. **Featured Image**
3. **Article Metadata** - Author, date, reading time
4. **Article Content** (MDX)
5. **Related Blog Posts**
6. **Related Tools**
7. **CTA Section**

## Adding New Posts

1. Create `[slug].mdx` in appropriate language folder
2. Add frontmatter with all required fields
3. Write content in MDX/Markdown
4. Add internal links
5. Run build - routing is automatic
6. Check preview for rendering

## Future Enhancements
- Automatic reading time calculation
- Comments system
- Social sharing
- Analytics tracking
- Newsletter signup hooks
