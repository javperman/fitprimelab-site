# Fit Prime Lab 🏋️

A comprehensive, multilingual fitness platform built with Astro. Features interactive tools, educational blog content, and science-backed fitness resources.

## 🌟 Features

- **🔧 Interactive Fitness Tools** - Calculators, converters, and analyzers
- **📝 Educational Blog** - Science-backed fitness guides and articles
- **🌍 Multilingual Support** - English, Spanish, Portuguese, Japanese
- **⚡ High Performance** - Static site generation with Astro
- **🔍 SEO Optimized** - Programmatic SEO with proper schema markup
- **📱 Responsive Design** - Works perfectly on all devices
- **🎯 Content Clusters** - Organized content for topical authority

## 🏗️ Architecture

```
fitprimelab/
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Dynamic routes with i18n
│   ├── content/         # Tools (JSON) and Blog (MDX)
│   ├── lib/             # Helper functions
│   └── styles/          # Global styles
├── docs/                # Documentation
└── public/              # Static assets
```

## 🌐 Supported Languages

- **English** (en)
- **Spanish** (es)
- **Portuguese** (pt)
- **Japanese** (ja)

## 🚀 Getting Started

### Prerequisites
- Node.js 22.12.0 or higher
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Development Guide

### Adding a New Tool

1. Create a JSON file in `src/content/tools/`:

```json
{
  "slug": {
    "en": "tool-name",
    "es": "nombre-herramienta",
    "pt": "nome-ferramenta",
    "ja": "ツール名"
  },
  "name": { "en": "Tool Name", "es": "...", "pt": "...", "ja": "..." },
  "description": { "en": "...", "es": "...", "pt": "...", "ja": "..." },
  "category": "strength",
  "tags": ["strength", "workout"]
}
```

2. Route auto-generates at `/[lang]/tools/[slug]`

### Adding a Blog Post

1. Create an MDX file in `src/content/blog/[lang]/`:

```mdx
---
title: "Post Title"
description: "Meta description"
author: "Fit Prime Lab"
date: 2026-03-17
tags: ["strength", "training"]
related_tools: ["tool-slug"]
slug: "post-slug"
language: "en"
---

# Content goes here
```

2. Route auto-generates at `/[lang]/blog/[slug]`

## 📖 Documentation

See the `docs/` folder for detailed documentation:

- **[project-context.md](docs/project-context.md)** - Project overview
- **[copilot-rules.md](docs/copilot-rules.md)** - Development guidelines
- **[seo-rules.md](docs/seo-rules.md)** - SEO standards
- **[tool-system.md](docs/tool-system.md)** - Tools documentation
- **[blog-system.md](docs/blog-system.md)** - Blog documentation
- **[i18n-system.md](docs/i18n-system.md)** - Multilingual setup

## 🔍 SEO Strategy

### Three Pillars

1. **Tools** - Direct traffic generators
2. **Blog** - Long-tail keyword targets
3. **Clusters** - Topical authority

### Example Cluster

```
/tools/rm-calculator
  ↓
/blog/how-to-calculate-1rm
/blog/is-1rm-safe
/blog/best-1rm-formula
```

All pieces link internally for maximum authority.

## 🛠️ Tech Stack

- **Framework**: Astro
- **Language**: TypeScript
- **Format**: Astro components, MDX
- **Hosting**: Cloudflare Pages
- **Content**: JSON (tools), MDX (blog)

## 📋 URL Structure

```
/en/tools/rm-calculator
/es/tools/calculadora-rm
/pt/tools/calculadora-rm
/ja/tools/rm-calculator

/en/blog/how-to-calculate-1rm
/es/blog/como-calcular-1rm
/pt/blog/como-calcular-1rm
/ja/blog/how-to-calculate-1rm
```

## 🎨 Components

### SEOHead
Adds proper meta tags and structured data to every page.

```astro
<SEOHead 
  title="Page Title"
  description="Meta description"
  lang="en"
  type="article"
/>
```

### Layouts
- **BaseLayout** - Main page wrapper
- **ToolLayout** - Tool page template
- **BlogLayout** - Blog post template

### Tool Components
- **ToolCalculator** - Form container
- **ToolInputs** - Input fields
- **ToolResult** - Result display

### Content Components
- **BlogCard** - Blog post preview
- **RelatedContent** - Related items section

## 🔗 Content Relationships

Tools and blog posts auto-link based on tags:

- Tools with tag "strength" link to blog posts with "strength"
- Blog posts auto-suggest related tools
- Creates natural SEO clusters

## 📊 Best Practices

- ✅ Include proper SEO meta tags
- ✅ Use semantic HTML
- ✅ Optimize images
- ✅ Write for users first
- ✅ Test all language versions
- ✅ Use schema markup
- ✅ Keep content updated
- ✅ Monitor Core Web Vitals

## 🚢 Deployment

### Cloudflare Pages

```bash
# Build
npm run build

# Deploy (auto from GitHub)
# Push to main branch
```

## 📝 License

All content and code © 2026 Fit Prime Lab. All rights reserved.

## 🤝 Contributing

Interested in contributing? Check the documentation and development guidelines.

---

**Ready to build?** Start with `npm run dev` and check the [copilot-instructions.md](copilot-instructions.md) for detailed workflow.

## License

The source code is licensed under **PolyForm Noncommercial 1.0.0**. See [`LICENSE`](LICENSE).
Editorial content, brand assets and graphics are © Javier Pérez Manzano / FitPrimeLab; no commercial rights are granted.

## Links

- Live site: [fitprimelab.com](https://fitprimelab.com)
- Repository: [github.com/javperman/fitprimelab-site](https://github.com/javperman/fitprimelab-site)
