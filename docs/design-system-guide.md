# Design System - Fit Prime Lab

Modern, clean design system optimized for fitness tools and content.

## Color Tokens

### Backgrounds
- `--color-bg-primary`: #ffffff (White)
- `--color-bg-secondary`: #f9fafb (Very light gray)
- `--color-bg-tertiary`: #f3f4f6 (Light gray)

### Text
- `--color-text-primary`: #111827 (Near black)
- `--color-text-secondary`: #6b7280 (Gray)
- `--color-text-tertiary`: #9ca3af (Light gray)

### Accents
- `--color-green`: #10b981 (Wellness)
- `--color-blue`: #3b82f6 (Tech/Trust)
- `--color-orange`: #f97316 (Energy)

### Borders
- `--color-border`: rgba(0, 0, 0, 0.05)
- `--color-border-light`: rgba(0, 0, 0, 0.03)

## Components

### Button
```astro
import Button from '@/components/Button.astro';

<!-- Primary (Green) -->
<Button variant="primary" size="lg">
  Click me
</Button>

<!-- Secondary (Gray) -->
<Button variant="secondary" size="md">
  Secondary action
</Button>

<!-- Ghost (Outline) -->
<Button variant="ghost" size="sm">
  Learn more
</Button>

<!-- Success (Green) -->
<Button variant="success" size="lg">
  Calculate
</Button>

<!-- Disabled -->
<Button disabled>
  Disabled button
</Button>
```

**Variants:** primary, secondary, ghost, success
**Sizes:** sm, md, lg
**Props:** disabled, fullWidth, type, onclick

---

### Input
```astro
import Input from '@/components/Input.astro';

<Input
  type="number"
  label="Weight (kg)"
  placeholder="Enter weight"
  required
/>

<Input
  type="text"
  label="Name"
  helpText="Your full name"
/>

<Input
  type="email"
  label="Email"
  error="Please enter a valid email"
/>
```

**Types:** text, number, email, password, tel, url
**Props:** label, placeholder, required, disabled, step, min, max, error, helpText

---

### Card
```astro
import Card from '@/components/Card.astro';

<!-- Basic card -->
<Card>
  <h3>Title</h3>
  <p>Content here</p>
</Card>

<!-- With hover effect -->
<Card hover>
  <p>Hover me!</p>
</Card>

<!-- With subtle gradient -->
<Card gradient>
  <p>Gradient background</p>
</Card>

<!-- Combined -->
<Card hover gradient>
  <p>Interactive card with gradient</p>
</Card>
```

**Props:** hover, gradient, class, noPadding

---

### ResultBox
```astro
import ResultBox from '@/components/ResultBox.astro';

<ResultBox
  title="Your 1RM"
  value="100"
  unit="kg"
  subtitle="Based on your input"
  color="green"
/>

<!-- Other colors -->
<ResultBox value="85" unit="lbs" color="blue" />
<ResultBox value="275" unit="lbs" color="orange" />
```

**Colors:** green, blue, orange
**Props:** title, value, unit, subtitle

---

### Section
```astro
import Section from '@/components/Section.astro';

<!-- Default background -->
<Section title="Features" subtitle="What we offer">
  <Card>Feature 1</Card>
  <Card>Feature 2</Card>
</Section>

<!-- Light background -->
<Section background="light" title="Benefits">
  Content here
</Section>

<!-- Primary gradient background -->
<Section background="primary" title="Special">
  Content here
</Section>
```

**Backgrounds:** default, light, primary
**Props:** title, subtitle, class

---

### Container
```astro
import Container from '@/components/Container.astro';

<Container>
  <h1>Constrained width content</h1>
</Container>

<!-- Custom max-width -->
<Container maxWidth="800px">
  <p>Narrower container</p>
</Container>
```

**Props:** maxWidth (default: 1100px)

---

## Example Tool Page

```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import Container from '@/components/Container.astro';
import Card from '@/components/Card.astro';
import Button from '@/components/Button.astro';
import Input from '@/components/Input.astro';
import ResultBox from '@/components/ResultBox.astro';
import Section from '@/components/Section.astro';
import ToolCalculator from '@/components/ToolCalculator.astro';
import type { Language } from '@/lib/i18n';

const { lang } = Astro.params as { lang: Language };
---

<html lang={lang}>
  <body>
    <BaseLayout title="RM Calculator" description="Calculate your 1RM" lang={lang}>
      <Container>
        <!-- Header -->
        <Section background="default">
          <div style="text-align: center;">
            <h1>1RM Calculator</h1>
            <p style="font-size: 1.125rem; color: var(--color-text-secondary);">
              Calculate your one-rep max using Brzycki formula
            </p>
          </div>
        </Section>

        <!-- Calculator Card -->
        <div style="max-width: 600px; margin: var(--space-3xl) auto;">
          <ToolCalculator 
            heading="Calculate your 1RM"
            description="Enter your weight and reps to find your estimated one-rep max"
          >
            <slot name="inputs">
              <Input
                type="number"
                label="Weight Lifted"
                unit="kg"
                placeholder="65"
                required
                min="0"
              />
              <Input
                type="number"
                label="Reps Performed"
                placeholder="8"
                required
                min="1"
                max="10"
              />
            </slot>
            
            <slot name="button">
              <Button variant="success" size="lg" fullWidth type="submit">
                Calculate 1RM
              </Button>
            </slot>
          </ToolCalculator>

          <!-- Result (shown after calculation) -->
          <ResultBox
            title="Your Estimated 1RM"
            value="85"
            unit="kg"
            subtitle="Using Brzycki Formula"
            color="green"
          />
        </div>

        <!-- Info Section -->
        <Section background="light" title="How it Works">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--space-lg);">
            <Card>
              <h4>Step 1</h4>
              <p>Enter the weight you lifted in your last set</p>
            </Card>
            <Card>
              <h4>Step 2</h4>
              <p>Enter the number of reps you could perform</p>
            </Card>
            <Card>
              <h4>Step 3</h4>
              <p>Get your estimated 1RM immediately</p>
            </Card>
          </div>
        </Section>

        <!-- Formula Section -->
        <Section background="primary" title="Science Behind">
          <Card>
            <p>
              The Brzycki formula estimates your one-rep maximum based on 
              the weight and number of reps you can perform. This is a 
              reliable method for training programs.
            </p>
          </Card>
        </Section>
      </Container>
    </BaseLayout>
  </body>
</html>
```

---

## Modern UI Effects

### Gradients
```css
background: linear-gradient(135deg, #10b981 0%, #3b82f6 100%);
background: radial-gradient(circle at top, #ecfdf5, white);
```

### Shadows
```css
box-shadow: var(--shadow-sm);   /* 1px, subtle */
box-shadow: var(--shadow-md);   /* 4px, standard */
box-shadow: var(--shadow-lg);   /* 10px, prominent */
box-shadow: var(--shadow-xl);   /* 20px, dramatic */
```

### Borders
```css
border: 1px solid var(--color-border);        /* Subtle */
border: 1px solid var(--color-border-light);  /* Very subtle */
```

### Radius
```css
border-radius: var(--radius-sm);  /* 8px */
border-radius: var(--radius-md);  /* 12px */
border-radius: var(--radius-lg);  /* 16px */
```

---

## Spacing Scale

- `--space-xs`: 0.25rem (4px)
- `--space-sm`: 0.5rem (8px)
- `--space-md`: 1rem (16px)
- `--space-lg`: 1.5rem (24px)
- `--space-xl`: 2rem (32px)
- `--space-2xl`: 3rem (48px)
- `--space-3xl`: 4rem (64px)

---

## Typography

### Font Stack
`'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif`

### Sizes
- **H1**: 2.5rem, weight 700, letter-spacing -0.02em
- **H2**: 1.875rem, weight 700, letter-spacing -0.01em
- **H3**: 1.5rem, weight 600
- **Body**: 1rem (16px), weight 400, line-height 1.7

---

## Performance Optimization

✅ **DO:**
- Use CSS for effects (no JS animations)
- Keep components lightweight
- Use CSS variables for theming
- Cache images with `maxWidth: 100%`
- Use `preload` for fonts
- Minimize external dependencies

❌ **DON'T:**
- Use heavy background images
- Add unnecessary JavaScript
- Create complex layouts
- Use heavy icon libraries
- Add auto-playing videos

---

## Responsive Design

All components are mobile-first and responsive:

```css
@media (max-width: 768px) {
  /* Mobile optimizations */
  h1 { font-size: 1.875rem; }
  
  main { padding: var(--space-xl); }
  
  .container { padding: 0 var(--space-md); }
}
```

---

## Accessibility

- All buttons have clear focus states
- Form inputs have large touch targets (min 44px)
- Color contrast ratios meet WCAG AA
- Reduced motion preference respected
- Semantic HTML structure
- Proper heading hierarchy
