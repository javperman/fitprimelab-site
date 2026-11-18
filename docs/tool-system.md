# Tools System

## Overview
Tools are dynamically generated from JSON files in `src/content/tools/`. Each tool can have multiple language versions with different slugs.

## File Structure
```
src/content/tools/
├── rm-calculator.json
├── tdee-calculator.json
└── [tool-name].json
```

## Tool JSON Format

```json
{
  "slug": {
    "en": "rm-calculator",
    "es": "calculadora-rm",
    "pt": "calculadora-rm",
    "ja": "rm-calculator"
  },
  "name": {
    "en": "RM Calculator",
    "es": "Calculadora RM",
    "pt": "Calculadora RM",
    "ja": "RM計算機"
  },
  "description": {
    "en": "Calculate your one rep max instantly.",
    "es": "Calcula tu repetición máxima.",
    "pt": "Calcule sua repetição máxima.",
    "ja": "1RMを計算します。"
  },
  "image": "/images/tools/rm-calculator.png",
  "tags": ["strength", "rm", "workout"],
  "category": "strength"
}
```

## Required Fields
- `slug` - Object with slug for each language
- `name` - Object with name for each language
- `description` - Object with description for each language
- `tags` - Array of tags for SEO and related content
- `category` - Tool category (strength, fitness, health, etc.)

## Optional Fields
- `image` - Hero image for tool page
- `author` - Tool author
- `updated` - Last update date

## Component Integration

### Using Tools in Pages
```astro
import { getTools, getToolBySlug } from '@/lib/tools';

// Get all tools
const tools = await getTools();

// Get specific tool
const tool = await getToolBySlug('rm-calculator', 'en');
```

### Dynamic Route
`src/pages/[lang]/tools/[slug].astro` automatically renders tools with proper SEO.

## Rendering

Each tool page includes:
1. **SEOHead** - Meta tags and schema
2. **Tool Title & Description**
3. **Tool Component** (iFrame or custom calculator)
4. **FAQ Section** (if applicable)
5. **Related Content** (blog posts with matching tags)
6. **Related Tools** (other tools with matching tags)

## Adding New Tools

1. Create JSON file in `src/content/tools/`
2. Define multilingual content
3. Add tags for SEO and relations
4. Run build - routing is automatic
5. Submit sitemap to search engines

## Best Practices
- Use descriptive slugs
- Include numbers/stats in names
- Write clear, benefit-focused descriptions
- Tag consistently across languages
- Keep descriptions concise (under 160 chars)
