# SEO Rules for Fit Prime Lab

## Every Page Must Have

### Meta Tags
- `<title>` - 50-60 characters, keyword-focused
- `<meta name="description">` - 120-160 characters
- `<meta name="viewport">` - for mobile
- `<canonical>` - to prevent duplicates

### Multilingual Tags
- `<link rel="alternate" hreflang="en">` for each language
- `<link rel="alternate" hreflang="x-default">`

### Structured Data
- JSON-LD schema markup
- Tool schema for calculators
- Article schema for blog posts
- Organization schema on homepage

## Tools-Specific Requirements

### Content
- FAQ section with structured data
- Internal links to related blog posts
- Tool-specific keywords
- Usage examples

### Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Tool",
  "name": "Tool Name",
  "description": "...",
  "url": "...",
  "image": "..."
}
```

## Blog-Specific Requirements

### Content
- Main keyword in first 100 words
- Long-tail keywords naturally used
- Links to related tools
- Links to related blog posts
- Minimum 500 words

### Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "...",
  "author": {...},
  "datePublished": "...",
  "image": "..."
}
```

## Content Clusters

Create authority through related content:

**Example Cluster: RM (One Repetition Max)**
- Tool: `/tools/rm-calculator`
- Blog Post 1: `/blog/how-to-calculate-1rm`
- Blog Post 2: `/blog/is-1rm-safe`
- Blog Post 3: `/blog/best-1rm-formula`

Link each piece internally:
- Tool → Related Blog Posts
- Blog Posts → Related Tools
- Blog Post → Other Blog Posts in cluster

## Quality Standards

- No keyword stuffing
- Natural language flow
- Mobile-friendly design
- Fast page load (Core Web Vitals)
- Proper heading hierarchy (H1, H2, H3)
- Alt text for all images
- Descriptive anchor text
