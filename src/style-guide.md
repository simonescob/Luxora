# Luxora Design System - Style Guide

## Overview

The Luxora Design System is a comprehensive design language that ensures consistency across all user interfaces. This style guide provides detailed specifications for typography, colors, spacing, components, and animations.

## Typography

### Font Families

#### Primary Font: Inter
- **Usage**: Body text, UI elements, captions
- **Weights**: 300, 400, 500, 600, 700
- **Characteristics**: Clean, modern, highly legible

#### Display Font: Playfair Display
- **Usage**: Headlines, hero text, emphasis
- **Weights**: 400, 500, 600, 700, 800, 900
- **Characteristics**: Elegant serif, luxury feel

#### Monospace Font: JetBrains Mono
- **Usage**: Code snippets, technical content
- **Weights**: 400, 500, 600, 700
- **Characteristics**: Technical, precise

### Typography Scale

#### Headings
- **H1 Display**: 5xl-9xl (48px-128px), font-display, font-black, leading-tight
- **H2**: 4xl-6xl (36px-60px), font-bold, leading-tight
- **H3**: 2xl-4xl (24px-36px), font-semibold, leading-snug
- **H4**: xl-2xl (20px-24px), font-semibold, leading-snug
- **H5**: lg-xl (18px-20px), font-medium, leading-normal
- **H6**: base-lg (16px-18px), font-medium, leading-normal

#### Body Text
- **Large**: text-xl-2xl (20px-24px), leading-relaxed
- **Regular**: text-base (16px), leading-relaxed
- **Small**: text-sm (14px), leading-normal
- **Caption**: text-xs (12px), leading-normal

### Font Features
- **Kerning**: Optimized for readability
- **Line Height**: 
  - Headings: 1.1-1.2 (tight)
  - Body: 1.6-1.7 (relaxed)
  - UI: 1.4-1.5 (normal)
- **Letter Spacing**: 
  - Headlines: -0.02em to -0.05em (tight)
  - Body: normal
  - Captions: 0.05em (wide)

## Color System

### Primary Colors (Emerald Green)

```css
--primary-50: #ecfdf5   /* Lightest background */
--primary-100: #d1fae5  /* Light backgrounds */
--primary-200: #a7f3d0  /* Borders, subtle backgrounds */
--primary-300: #6ee7b7  /* Hover states */
--primary-400: #34d399  /* Interactive elements */
--primary-500: #10b981  /* Primary brand color */
--primary-600: #059669  /* Primary hover */
--primary-700: #047857  /* Active states */
--primary-800: #065f46  /* Dark backgrounds */
--primary-900: #064e3b  /* Darkest text */
```

**Usage Guidelines**:
- `primary-500`: Main CTAs, primary actions
- `primary-600`: Primary hover states
- `primary-400`: Secondary actions, links
- `primary-100`: Light backgrounds, highlights

### Secondary Colors (Slate Gray)

```css
--secondary-50: #f8fafc   /* Page backgrounds */
--secondary-100: #f1f5f9  /* Card backgrounds */
--secondary-200: #e2e8f0  /* Light borders */
--secondary-300: #cbd5e1  /* Medium borders */
--secondary-400: #94a3b8  /* Placeholder text */
--secondary-500: #64748b  /* Secondary text */
--secondary-600: #475569  /* Primary text */
--secondary-700: #334155  /* Dark text */
--secondary-800: #1e293b  /* Dark backgrounds */
--secondary-900: #0f172a  /* Darkest backgrounds */
```

**Usage Guidelines**:
- `secondary-600`: Primary text on light backgrounds
- `secondary-300`: Dividers, subtle borders
- `secondary-800`: Text on light backgrounds

### Accent Colors (Experimental)

```css
/* Purple (Experimentation) */
--accent-purple-400: #a78bfa
--accent-purple-500: #8b5cf6
--accent-purple-600: #7c3aed

/* Pink (Energy) */
--accent-pink-400: #f472b6
--accent-pink-500: #ec4899
--accent-pink-600: #db2777

/* Blue (Trust) */
--accent-blue-400: #60a5fa
--accent-blue-500: #3b82f6
--accent-blue-600: #2563eb
```

### Semantic Colors

```css
/* Success */
--success-500: #10b981
--success-600: #059669

/* Warning */
--warning-500: #f59e0b
--warning-600: #d97706

/* Error */
--error-500: #ef4444
--error-600: #dc2626

/* Info */
--info-500: #3b82f6
--info-600: #2563eb
```

### Dark Mode Considerations
- All colors maintain accessibility ratios (4.5:1 for normal text, 3:1 for large text)
- Dark mode uses inverted luminance values
- Glass morphism effects use `backdrop-blur` with semi-transparent colors

## Spacing System

### Spacing Scale

```css
/* Based on 4px grid system */
--space-0: 0
--space-1: 0.25rem  /* 4px */
--space-2: 0.5rem   /* 8px */
--space-3: 0.75rem  /* 12px */
--space-4: 1rem     /* 16px */
--space-5: 1.25rem  /* 20px */
--space-6: 1.5rem   /* 24px */
--space-8: 2rem     /* 32px */
--space-10: 2.5rem  /* 40px */
--space-12: 3rem    /* 48px */
--space-16: 4rem    /* 64px */
--space-20: 5rem    /* 80px */
--space-24: 6rem    /* 96px */
--space-32: 8rem    /* 128px */
```

### Component Spacing Guidelines

#### Buttons
- **Padding**: 12px 32px (py-3 px-8)
- **Height**: 48px (h-12)
- **Border Radius**: 8px (rounded-lg)

#### Cards
- **Padding**: 24px-32px (p-6 p-8)
- **Border Radius**: 12px (rounded-xl)
- **Margin**: 16px-24px (mb-4 mb-6)

#### Forms
- **Input Padding**: 12px 16px (py-3 px-4)
- **Field Spacing**: 16px-24px (space-y-4 space-y-6)

#### Sections
- **Vertical Padding**: 80px-160px (py-20 py-40)
- **Horizontal Padding**: 16px-24px (px-4 px-6)

## Component States

### Button States

#### Primary Button
```css
/* Default */
background: primary-500
color: white
border: none

/* Hover */
background: primary-600
transform: translateY(-1px)
box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3)

/* Active */
background: primary-700
transform: translateY(0)
box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2)

/* Focus */
ring: 2px primary-500
ring-offset: 2px
```

#### Secondary Button
```css
/* Default */
background: transparent
color: secondary-600
border: 1px solid secondary-300

/* Hover */
background: secondary-50
border-color: secondary-400

/* Focus */
ring: 2px primary-500
ring-offset: 2px
```

### Interactive States

#### Links
- **Default**: color: primary-500, text-decoration: none
- **Hover**: color: primary-600, text-decoration: underline
- **Focus**: outline: 2px primary-500, outline-offset: 2px

#### Form Inputs
- **Default**: border: secondary-300, background: white
- **Focus**: border: primary-500, ring: 2px primary-500/20
- **Error**: border: error-500, ring: 2px error-500/20
- **Disabled**: background: secondary-50, color: secondary-400

## Animations

### Animation Durations
- **Fast**: 150ms (micro-interactions)
- **Normal**: 300ms (standard transitions)
- **Slow**: 500ms (complex animations)
- **Background**: 8s (infinite animations)

### Easing Functions
- **Standard**: cubic-bezier(0.4, 0, 0.2, 1)
- **Enter**: cubic-bezier(0, 0, 0.2, 1)
- **Exit**: cubic-bezier(0.4, 0, 1, 1)
- **Bounce**: cubic-bezier(0.68, -0.55, 0.265, 1.55)

### Key Animations

#### Fade In
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

#### Slide Up
```css
@keyframes slideUp {
  0% { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
```

#### Scale In
```css
@keyframes scaleIn {
  0% { 
    opacity: 0; 
    transform: scale(0.95); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1); 
  }
}
```

#### Float Gentle
```css
@keyframes floatGentle {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

#### Gradient Shift
```css
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

## Responsive Design

### Breakpoints
- **sm**: 640px (mobile landscape)
- **md**: 768px (tablet portrait)
- **lg**: 1024px (tablet landscape, small desktop)
- **xl**: 1280px (desktop)
- **2xl**: 1536px (large desktop)

### Responsive Typography
```css
/* Mobile First Approach */
text-4xl md:text-5xl lg:text-6xl
```

### Grid System
- **Container**: max-width varies by breakpoint
- **Grid**: 12-column grid system
- **Gaps**: 16px (mobile), 24px (tablet), 32px (desktop)

## Accessibility Guidelines

### Color Contrast
- **Normal Text**: Minimum 4.5:1 contrast ratio
- **Large Text**: Minimum 3:1 contrast ratio
- **UI Components**: Minimum 3:1 contrast ratio

### Focus Management
- **Focus Indicators**: 2px solid primary-500 with 2px offset
- **Focus Trapping**: Ensure keyboard navigation works properly
- **Skip Links**: Provide skip-to-content links

### Screen Reader Support
- **Semantic HTML**: Use proper heading hierarchy (h1-h6)
- **Alt Text**: Descriptive alt text for all images
- **ARIA Labels**: Proper ARIA labels for interactive elements
- **Live Regions**: Announce dynamic content changes

### Motion Sensitivity
- **Respect prefers-reduced-motion**: Disable animations when user prefers reduced motion
- **Duration Limits**: Keep animations under 500ms for comfort
- **Pause Controls**: Provide ways to pause auto-playing animations

## Hero Section Variations

### Minimalist Hero
- **Layout**: Clean, centered, lots of white space
- **Colors**: Subtle gradients, soft colors
- **Typography**: Large, elegant serif headlines
- **Interactions**: Gentle hover effects, soft shadows

### Bold Hero
- **Layout**: Asymmetrical, high contrast
- **Colors**: High contrast black/white with color accents
- **Typography**: Extra large, bold display fonts
- **Interactions**: Dramatic hover effects, strong shadows

### Experimental Hero
- **Layout**: Dynamic, interactive, immersive
- **Colors**: Gradient overlays, duotones, vibrant colors
- **Typography**: Ultra large, gradient text effects
- **Interactions**: Mouse tracking, 3D transforms, particle effects

## Performance Guidelines

### Image Optimization
- **Format**: WebP preferred, fallback to JPEG/PNG
- **Size**: Multiple sizes for different breakpoints
- **Lazy Loading**: Load images below the fold lazily
- **Compression**: Optimize for web (80-90% quality)

### Animation Performance
- **GPU Acceleration**: Use transform and opacity for animations
- **Frame Rate**: Maintain 60fps for all animations
- **Hardware Acceleration**: Leverage CSS transforms over position changes
- **Efficient Selectors**: Avoid complex CSS selectors

### Loading Performance
- **Critical CSS**: Inline critical CSS for above-the-fold content
- **Font Loading**: Use font-display: swap for web fonts
- **Progressive Enhancement**: Ensure functionality works without JavaScript
- **Bundle Size**: Keep JavaScript bundles under 100KB

## Testing Checklist

### Visual Testing
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile responsiveness (320px - 1920px+ widths)
- [ ] Dark mode implementation
- [ ] High contrast mode support
- [ ] Color blind accessibility

### Interaction Testing
- [ ] Keyboard navigation
- [ ] Touch interactions (mobile)
- [ ] Hover states on desktop
- [ ] Focus management
- [ ] Animation performance

### Performance Testing
- [ ] Lighthouse score 90+
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 4s
- [ ] Cumulative Layout Shift < 0.1
- [ ] Time to Interactive < 5s

---

## Implementation Notes

### CSS Custom Properties
Use CSS custom properties for easy theme customization:
```css
:root {
  --color-primary: #10b981;
  --color-secondary: #64748b;
  --space-unit: 4px;
  --font-family-primary: 'Inter', sans-serif;
}
```

### Tailwind Configuration
All design tokens are defined in `tailwind.config.js` and can be extended or modified there.

### Component Usage
Components should follow these guidelines:
1. Use semantic HTML elements
2. Apply proper ARIA attributes
3. Include keyboard navigation support
4. Maintain consistent spacing using the design system
5. Support both light and dark modes

This style guide serves as the single source of truth for the Luxora Design System and should be updated whenever design decisions change.