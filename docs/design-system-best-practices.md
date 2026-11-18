# Design System - Best Practices & Guidelines

## 🎯 Core Principles

### 1. **Clarity First**
- Every design decision should serve clarity
- Remove visual noise
- Make CTAs obvious
- Use whitespace strategically

### 2. **Performance Matters**
- No heavy background images
- CSS-only animations (no JS)
- Minimal external dependencies
- Optimize all images

### 3. **Accessibility is Not Optional**
- Test with keyboard navigation
- Ensure color contrast (WCAG AA)
- Provide proper form labels
- Use semantic HTML

### 4. **Mobile First**
- Design for 320px phones
- Test on actual devices
- Touch targets: min 44px
- Readable font sizes (16px+)

---

## 🎨 Color Usage

### ✅ DO

**Green (#10b981) - Use for:**
- Primary CTAs
- Positive actions (calculate, submit)
- Success messages
- Health/wellness emphasis

**Blue (#3b82f6) - Use for:**
- Links
- Secondary actions
- Trust/credibility
- Information

**Orange (#f97316) - Use for:**
- Attention (warnings, alerts)
- Special emphasis
- Energy/excitement
- Accent highlights

**Gray tones - Use for:**
- Background layers
- Secondary text
- Borders
- Disabled states

### ❌ DON'T

- ❌ Use accent colors as background (too loud)
- ❌ Switch CTA color colors without reason
- ❌ Use low-contrast text
- ❌ Rely on color alone for meaning
- ❌ Use too many colors (max 3 accents)

---

## 📐 Spacing Rules

### Component Spacing
```
Inputs → Button: gap: var(--space-lg)     /* 24px */
Cards gap: var(--space-lg)                 /* 24px */
Sections vertical gap: var(--space-3xl)    /* 64px */
```

### Internal Spacing
```
Button padding: var(--space-md) var(--space-lg)     /* 16px 24px */
Input padding: var(--space-md)                      /* 16px */
Card padding: var(--space-lg)                       /* 24px */
Section padding: var(--space-3xl) var(--space-md)   /* 64px 16px */
```

### Responsive Adjustments
```
Desktop: Full spacing
Tablet (768px): 80% of spacing
Mobile (max 768px): Reduce by 1 level
Example: var(--space-xl) → var(--space-lg)
```

---

## 🔤 Typography Guidelines

### Hierarchy Example
```
Page Title (H1)
↓
Section Title (H2)
↓
Subsection (H3)
↓
Body paragraph
↓
Meta information (small)
```

### Line Length
- **Optimal:** 50-75 characters
- **Blog posts:** 60-65 characters
- **Containers:** Max-width 800px for reading

### Font Weight Usage
```
700 (Bold)   - Headings, emphasis
600 (Semi)   - Button text, strong text
500 (Medium) - Labels, secondary headings
400 (Regular)- Body text
```

---

## 🎨 Building Layouts

### Layout Template
```astro
<Container>
  <!-- Hero/Header Section -->
  <Section background="default">
    <h1>Page Title</h1>
    <p>Description</p>
    <Button variant="primary">CTA</Button>
  </Section>

  <!-- Features Section -->
  <Section background="light" title="Features">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-lg);">
      <Card hover>
        <h3>Card Title</h3>
        <p>Description</p>
      </Card>
      {/* Repeat cards */}
    </div>
  </Section>

  <!-- Info Section -->
  <Section background="primary">
    <Card>
      <p>Important information</p>
    </Card>
  </Section>
</Container>
```

### Common Patterns

#### Feature Cards Grid
```astro
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-lg);">
  {items.map(item => <Card hover>{item}</Card>)}
</div>
```

#### Two Column Layout
```astro
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-2xl);">
  <div>Left content</div>
  <div>Right content</div>
</div>

@media (max-width: 768px) {
  /* Automatically stacks on mobile */
  grid-template-columns: 1fr;
}
```

#### Form Layout
```astro
<Card>
  <div style="display: grid; gap: var(--space-lg);">
    <Input type="text" label="Name" />
    <Input type="email" label="Email" />
    <Button fullWidth variant="primary">Submit</Button>
  </div>
</Card>
```

---

## ✨ Advanced Techniques

### Gradient Text (High Impact)
```astro
<h1 style="
  background: linear-gradient(135deg, var(--color-green) 0%, var(--color-blue) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
">
  Your Title
</h1>
```

### Subtle Gradient Background
```astro
<div style="
  background: radial-gradient(circle at top, #ecfdf5, white);
  padding: var(--space-2xl);
  border-radius: var(--radius-lg);
">
  Content
</div>
```

### Glow Effect (Use Sparingly)
```astro
<div style="
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
  padding: var(--space-lg);
  border-radius: var(--radius-md);
">
  Glowing content
</div>
```

---

## 📱 Responsive Design Checklist

### Desktop (1200px+)
- [ ] Full-width layouts
- [ ] All spacing at 100%
- [ ] Hover states visible
- [ ] Optimal line lengths

### Tablet (768px - 1199px)
- [ ] 80% of spacing
- [ ] 2-column grids still work
- [ ] Touch-friendly buttons
- [ ] Mobile nav not needed yet

### Mobile (320px - 767px)
- [ ] Reduced spacing (1 level down)
- [ ] Single column layouts
- [ ] Large touch targets (44px+)
- [ ] Font size: 16px minimum
- [ ] Readable line lengths

### Mobile-First CSS
```css
/* Default mobile styles */
.element {
  padding: var(--space-md);
  font-size: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .element {
    padding: var(--space-lg);
  }
}

/* Desktop and up */
@media (min-width: 1200px) {
  .element {
    padding: var(--space-xl);
  }
}
```

---

## 🎯 Button Usage Rules

### Primary (Green) - Use for
- Main call-to-action
- Form submission
- "Calculate" actions
- Positive actions

### Secondary (Gray) - Use for
- Alternative actions
- Less important buttons
- Filter/options buttons

### Ghost (Outline) - Use for
- Links styled as buttons
- Tertiary actions
- Breadcrumb-style navigation

### Success (Green) - Use for
- Results display
- Confirmation actions
- Final steps

---

## 📝 Form Best Practices

### Input Field Rules
```astro
<!-- ✅ DO -->
<Input 
  type="number"
  label="Weight"
  placeholder="Enter weight in kg"
  helpText="Leave blank to skip"
  required
/>

<!-- ❌ DON'T -->
<Input type="number" />  <!-- No label -->
<Input type="text" placeholder="Weight (kg)" />  <!-- Placeholder as label -->
```

### Form Layout
```astro
<div style="display: grid; gap: var(--space-lg);">
  <Input type="text" label="Field 1" />
  <Input type="text" label="Field 2" />
  <Button fullWidth variant="primary">Submit</Button>
</div>
```

### Validation
- Show errors immediately
- Use red color (#ef4444)
- Provide helpful error messages
- Highlight invalid fields

---

## 🚀 Performance Checklist

### Images
- [ ] Optimize all images (WebP, AVIF)
- [ ] Use `picture` for responsive images
- [ ] Lazy load below the fold
- [ ] Never use as background images

### CSS
- [ ] Use CSS variables for theming
- [ ] Minimal custom CSS
- [ ] Reuse component classes
- [ ] No unnecessary IDs (use classes)

### JavaScript
- [ ] Minimal JS (CSS-first)
- [ ] Async for non-critical
- [ ] Defer for below-fold
- [ ] No large libraries for simple things

### Fonts
- [ ] Load Google Fonts with `preload`
- [ ] Use `font-display: swap`
- [ ] Limit weights (400, 500, 600, 700)

---

## 🧪 Testing Checklist

### Visual Testing
- [ ] Light mode appearance
- [ ] Mobile responsiveness
- [ ] Print styles
- [ ] All color combinations

### Accessibility Testing
- [ ] Keyboard navigation
- [ ] Screen reader (NVDA, JAWS)
- [ ] Color contrast (WebAIM)
- [ ] Form labels relationship

### Performance Testing
- [ ] Lighthouse scores (90+)
- [ ] Core Web Vitals
- [ ] Mobile performance
- [ ] Network throttling (3G)

### Cross-browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

---

## 📚 Component Template

When creating new components, follow this structure:

```astro
---
// Brief description
// What problem does this solve?

interface Props {
  // Clear prop names
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  class?: string;
}

const { variant = 'primary', size = 'md', disabled = false, class: className = '' } = Astro.props;
---

<div class={`component component--${variant} component--${size} ${className}`}>
  <slot />
</div>

<style scoped>
  /* Always scoped to prevent conflicts */
  .component {
    /* Default styles */
  }

  .component--primary {
    /* Variant-specific */
  }

  /* Mobile first, then breakpoints */
  @media (max-width: 768px) {
    /* Mobile adjustments */
  }
</style>
```

---

## 🎯 Common Mistakes to Avoid

### ❌ Don't
- Use heavy CSS-in-JS libraries
- Create components without props
- Hardcode colors (use variables)
- Ignore mobile first
- Skip accessibility features
- Use unnecessary divs
- Add animations without purpose
- Forget to test responsiveness

### ✅ Do
- Use CSS variables
- Create flexible components
- Test on real devices
- Follow BEM naming
- Build accessibility in
- Use semantic HTML
- Animate with purpose
- Verify core web vitals

---

## 🔄 Design Maintenance

### Regular Reviews
- Monthly: Check analytics, user feedback
- Quarterly: Review component usage
- Yearly: Full design audit

### Version Control
- Document breaking changes
- Maintain changelog
- Keep components backward compatible
- Plan migration paths

### Component Evolution
1. **Introduce** - New component
2. **Stabilize** - Iron out issues
3. **Maintain** - Regular updates
4. **Deprecate** - Mark as old
5. **Remove** - After period

---

**Remember:** Great design is invisible. Users shouldn't think about design, they should just accomplish their goals.
