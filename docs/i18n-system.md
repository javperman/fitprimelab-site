# i18n System

## Supported Languages

| Code | Language |
|------|----------|
| `en` | English |
| `es` | Spanish |
| `pt` | Portuguese |
| `ja` | Japanese |

## URL Structure

All pages must be nested under language:

```
/en/tools/rm-calculator
/es/tools/calculadora-rm
/pt/tools/calculadora-rm
/ja/tools/rm-calculator

/en/blog/how-to-calculate-1rm
/es/blog/como-calcular-1rm
/pt/blog/como-calcular-1rm
/ja/blog/1rm%E3%81%AE%E8%A8%88%E7%AE%97%E6%96%B9%E6%B3%95
```

## Default Language
English (en) is the default. Homepage redirects to `/en/`.

## i18n Helper

Located at `src/lib/i18n.ts`, provides:

```typescript
// Get translations
const t = useTranslations(lang);
const text = t('key.path');

// Get language name
const name = getLanguageName('en'); // "English"

// Check if language is supported
const valid = isValidLanguage('en'); // true

// Get all languages
const langs = getAllLanguages(); // ['en', 'es', 'pt', 'ja']

// Get default language
const default = getDefaultLanguage(); // 'en'
```

## Usage in Components

### Props Pattern
```astro
---
interface Props {
  lang: 'en' | 'es' | 'pt' | 'ja';
  title: {
    en: string;
    es: string;
    pt: string;
    ja: string;
  };
}

const { lang, title } = Astro.props;
const content = title[lang];
---
```

### Database Pattern
```astro
---
import { useTranslations } from '@/lib/i18n';

interface Props {
  lang: 'en' | 'es' | 'pt' | 'ja';
}

const { lang } = Astro.props;
const t = useTranslations(lang);
---

<h1>{t('page.title')}</h1>
<p>{t('page.description')}</p>
```

## SEO Hreflang Tags

Every page must include hreflang for all languages:

```html
<link rel="alternate" hreflang="en" href="https://fitprimelab.com/en/tools/rm-calculator" />
<link rel="alternate" hreflang="es" href="https://fitprimelab.com/es/tools/calculadora-rm" />
<link rel="alternate" hreflang="pt" href="https://fitprimelab.com/pt/tools/calculadora-rm" />
<link rel="alternate" hreflang="ja" href="https://fitprimelab.com/ja/tools/rm-calculator" />
<link rel="alternate" hreflang="x-default" href="https://fitprimelab.com/en/" />
```

Implemented in `SEOHead` component automatically.

## Routes

Dynamic routes handle language param:

```
src/pages/[lang]/index.astro
src/pages/[lang]/tools/[slug].astro
src/pages/[lang]/blog/[slug].astro
src/pages/[lang]/guides/[slug].astro (future)
```

## Static Routes

Static routes don't need lang prefix:

```
/robots.txt
/sitemap.xml
/api/... (if any)
```

## Language Detection

Homepage (`/`) should:
1. Detect browser language preference
2. Default to English if not supported
3. Remember user choice in localStorage
4. Redirect to appropriate `/[lang]/` sub-site

## Best Practices

1. **Always use consistent language param** in dynamic routes
2. **Include hreflang on all pages** for multilingual support
3. **Use multilingual content objects** in JSON/frontmatter
4. **Test all language routes** before deployment
5. **Monitor search console** for crawl errors
6. **Use native language names** in language switcher

## Future Enhancements

- Language preference detection and persistence
- Cookie management for language choice
- Currency/metric conversions based on language
- Localization of numbers, dates, units
