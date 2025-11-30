# Design Files Specification for Figma/Adobe XD

**Project:** Luxora Hero Section Variations  
**Created:** November 30, 2025  
**Version:** 2.0  
**Tool Compatibility:** Figma, Adobe XD, Sketch

## File Structure

### Recommended File Organization
```
Luxora-Hero-Designs/
├── 01-Design-System/
│   ├── Colors
│   ├── Typography
│   ├── Components
│   ├── Icons
│   └── Spacing
├── 02-Hero-Variations/
│   ├── Minimalist-Hero
│   ├── Bold-Hero
│   ├── Experimental-Hero
│   └── Interactive-Prototype
├── 03-States-Variants/
│   ├── Hover-States
│   ├── Focus-States
│   ├── Loading-States
│   └── Error-States
├── 04-Responsive/
│   ├── Mobile-320px
│   ├── Mobile-375px
│   ├── Tablet-768px
│   ├── Desktop-1024px
│   ├── Desktop-1440px
│   └── Desktop-1920px
└── 05-Assets/
    ├── Icons
    ├── Illustrations
    ├── Photos
    └── Export-Settings
```

## Design Tokens

### Color Palette

#### Primary Colors (Emerald)
```css
Primary-50:  #ECFDF5
Primary-100: #D1FAE5
Primary-200: #A7F3D0
Primary-300: #6EE7B7
Primary-400: #34D399
Primary-500: #10B981  /* Brand Primary */
Primary-600: #059669  /* Hover */
Primary-700: #047857  /* Active */
Primary-800: #065F46  /* Dark */
Primary-900: #064E3B  /* Darkest */
```

#### Secondary Colors (Slate)
```css
Secondary-50:  #F8FAFC
Secondary-100: #F1F5F9
Secondary-200: #E2E8F0
Secondary-300: #CBD5E1
Secondary-400: #94A3B8
Secondary-500: #64748B
Secondary-600: #475569  /* Primary Text */
Secondary-700: #334155  /* Dark Text */
Secondary-800: #1E293B  /* Dark Background */
Secondary-900: #0F172A  /* Darkest Background */
```

#### Accent Colors (Purple/Pink)
```css
Accent-Purple-400: #A78BFA
Accent-Purple-500: #8B5CF6
Accent-Purple-600: #7C3AED

Accent-Pink-400: #F472B6
Accent-Pink-500: #EC4899
Accent-Pink-600: #DB2777

Accent-Blue-400: #60A5FA
Accent-Blue-500: #3B82F6
Accent-Blue-600: #2563EB
```

#### Semantic Colors
```css
Success-500:  #10B981
Success-600:  #059669

Warning-500:  #F59E0B
Warning-600:  #D97706

Error-500:    #EF4444
Error-600:    #DC2626

Info-500:     #3B82F6
Info-600:     #2563EB
```

### Typography System

#### Font Families
- **Primary:** Inter (Google Fonts)
- **Display:** Playfair Display (Google Fonts)
- **Monospace:** JetBrains Mono (Google Fonts)

#### Type Scale

**Display Headlines**
```
H1 Display: 120px / 110px line-height / -0.02em letter-spacing
H1 Desktop: 96px / 88px line-height / -0.02em letter-spacing
H1 Tablet:  72px / 64px line-height / -0.01em letter-spacing
H1 Mobile:  48px / 44px line-height / -0.005em letter-spacing
```

**Headings**
```
H2: 48px / 44px line-height / -0.01em letter-spacing
H3: 36px / 32px line-height / -0.005em letter-spacing
H4: 24px / 28px line-height / normal letter-spacing
H5: 20px / 24px line-height / normal letter-spacing
H6: 18px / 22px line-height / normal letter-spacing
```

**Body Text**
```
Large:  20px / 28px line-height / normal letter-spacing
Regular: 16px / 24px line-height / normal letter-spacing
Small:   14px / 20px line-height / normal letter-spacing
Caption: 12px / 16px line-height / 0.05em letter-spacing
```

### Spacing System

#### 4px Grid System
```
4px   = 0.25rem
8px   = 0.5rem
12px  = 0.75rem
16px  = 1rem
20px  = 1.25rem
24px  = 1.5rem
32px  = 2rem
40px  = 2.5rem
48px  = 3rem
64px  = 4rem
80px  = 5rem
96px  = 6rem
128px = 8rem
```

#### Component Spacing
```
Button Padding: 12px 32px
Card Padding:   24px 32px
Section Padding: 80px 160px
Form Spacing:   16px 24px
```

### Border Radius
```
Small:  4px   (rounded-sm)
Medium: 8px   (rounded)
Large:  12px  (rounded-lg)
Extra:  16px  (rounded-xl)
Full:   50%   (rounded-full)
```

### Shadows
```css
Shadow-Small:  0 1px 3px rgba(0, 0, 0, 0.12)
Shadow-Medium: 0 4px 12px rgba(0, 0, 0, 0.15)
Shadow-Large:  0 10px 25px rgba(0, 0, 0, 0.15)
Shadow-XL:     0 20px 40px rgba(0, 0, 0, 0.1)
Shadow-Glow:   0 0 20px rgba(139, 92, 246, 0.3)
```

## Component Library

### Button Components

#### Primary Button
- **Background:** Primary-500
- **Text:** White
- **Padding:** 12px 32px
- **Border Radius:** 8px
- **Font:** Inter Medium 16px

**States:**
- Default: Primary-500
- Hover: Primary-600 + shadow-medium
- Active: Primary-700 + translateY(1px)
- Focus: Primary-500 ring + 2px offset
- Disabled: Primary-300 + 50% opacity

#### Secondary Button
- **Background:** Transparent
- **Text:** Secondary-600
- **Border:** 1px Secondary-300
- **Padding:** 12px 32px
- **Border Radius:** 8px

**States:**
- Default: Transparent + Secondary-300 border
- Hover: Secondary-50 background + Secondary-400 border
- Active: Secondary-100 background + Secondary-500 border

### Card Components

#### Product Card
- **Background:** White
- **Border:** 1px Secondary-200
- **Border Radius:** 12px
- **Padding:** 24px
- **Shadow:** Shadow-small
- **Hover:** Shadow-medium + translateY(-2px)

### Icon Components

#### Icon Sizes
```
XS: 16px (0.75rem)
SM: 20px (1rem)
MD: 24px (1.25rem)
LG: 32px (1.5rem)
XL: 48px (2rem)
2XL: 64px (3rem)
```

#### Icon Library
- Lucide Icons (recommended)
- Feather Icons (alternative)
- Heroicons (alternative)

## Layout Specifications

### Grid System

#### 12-Column Grid
- **Mobile:** 4 columns, 16px gutters
- **Tablet:** 8 columns, 24px gutters
- **Desktop:** 12 columns, 32px gutters

#### Container Sizes
```
Mobile:  100% width, 16px padding
Tablet:  768px max-width, 24px padding
Desktop: 1024px max-width, 32px padding
XL:      1280px max-width, 32px padding
2XL:     1536px max-width, 32px padding
```

### Hero Section Layouts

#### Minimalist Hero
```
Container: Centered, max-width 1280px
Layout: 50/50 split on desktop, stacked on mobile
Left Content: Text + buttons + social proof
Right Visual: Central product showcase
Background: Subtle gradient from white to primary-50
```

#### Bold Hero
```
Container: Full width, edge-to-edge
Layout: Asymmetrical 60/40 split
Left Content: Large typography + CTA buttons
Right Visual: Dark product showcase with floating elements
Background: Solid black with gradient overlays
```

#### Experimental Hero
```
Container: Full width with background patterns
Layout: Dynamic asymmetrical with floating elements
Content: Gradient text + interactive elements
Background: Animated gradient with particle effects
Visual: 3D product display with hotspots
```

## Interactive States

### Hover States

#### Text Links
- Color change: Primary-500 → Primary-600
- Underline appears
- Duration: 200ms

#### Buttons
- Transform: translateY(-2px)
- Shadow increase: small → medium
- Duration: 200ms

#### Cards
- Transform: translateY(-2px)
- Shadow increase: small → medium
- Duration: 200ms

### Focus States
- Outline: 2px Primary-500
- Offset: 2px
- Border radius maintained
- Duration: 0ms

### Loading States
- Skeleton screens for content
- Spinner animations (1s rotation)
- Pulse animations for placeholders

## Responsive Breakpoints

### Mobile (320px - 767px)
```
Layout: Single column, stacked
Typography: H1: 48px, Body: 16px
Spacing: 16px padding, 16px gaps
Images: 100% width, auto height
Buttons: Full width mobile layout
```

### Tablet (768px - 1023px)
```
Layout: Two column where appropriate
Typography: H1: 72px, Body: 18px
Spacing: 24px padding, 24px gaps
Images: Responsive sizing
Buttons: Horizontal layout
```

### Desktop (1024px+)
```
Layout: Full multi-column layouts
Typography: H1: 96px, Body: 20px
Spacing: 32px padding, 32px gaps
Images: Optimized for desktop
Buttons: Horizontal with icons
```

### Large Desktop (1440px+)
```
Layout: Max-width containers
Typography: H1: 120px for hero
Spacing: Maximum impact layouts
Images: High-resolution assets
Components: Full feature set
```

## Export Settings

### Icon Exports
- **Format:** SVG (primary), PNG (fallback)
- **Sizes:** 16px, 24px, 32px, 48px, 64px
- **Naming:** `icon-name-size.svg`

### Image Exports
- **Format:** WebP (primary), JPEG (fallback)
- **Quality:** 80-90%
- **Sizes:** Multiple for responsive loading
- **Naming:** `image-name-width.webp`

### Font Exports
- **Format:** WOFF2 (primary), WOFF (fallback)
- **Weights:** 300, 400, 500, 600, 700, 800
- **Subsets:** Latin, Latin Extended

### CSS Exports
- **Variables:** CSS custom properties
- **Components:** Utility classes
- **Responsive:** Mobile-first approach

## Animation Specifications

### Transition Timing
```css
Fast:     150ms cubic-bezier(0.4, 0, 0.2, 1)
Normal:   300ms cubic-bezier(0.4, 0, 0.2, 1)
Slow:     500ms cubic-bezier(0.4, 0, 0.2, 1)
Bounce:   600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Keyframe Animations
- **Fade In:** opacity 0 → 1, 500ms
- **Slide Up:** translateY(20px) → translateY(0), 600ms
- **Scale In:** scale(0.95) → scale(1), 300ms
- **Float:** translateY(0px) → translateY(-10px), 6s infinite

### Micro-interactions
- **Button Press:** scale(0.98) during press
- **Hover Lift:** translateY(-2px) on hover
- **Focus Ring:** 2px Primary-500 outline
- **Loading Spinner:** 1s rotation, linear

## Accessibility Guidelines

### Color Contrast
- **Normal Text:** 4.5:1 minimum ratio
- **Large Text:** 3:1 minimum ratio
- **UI Components:** 3:1 minimum ratio

### Touch Targets
- **Minimum Size:** 44px × 44px
- **Spacing:** 8px minimum between targets
- **Focus Indicators:** Clear and visible

### Screen Reader Support
- **Alt Text:** Descriptive for all images
- **ARIA Labels:** For interactive elements
- **Semantic HTML:** Proper heading hierarchy

## File Creation Steps

### 1. Setup Figma/Adobe XD Project
1. Create new project with 5 main pages
2. Set up color styles using design tokens
3. Configure text styles using typography scale
4. Create component library base

### 2. Design System Creation
1. Create color palette with all brand colors
2. Set up typography styles (all sizes and weights)
3. Design basic components (buttons, cards, inputs)
4. Create spacing and grid systems
5. Document component states and variants

### 3. Hero Section Design
1. Create frame for each variation (desktop first)
2. Design minimal variation with clean layout
3. Design bold variation with high contrast
4. Design experimental variation with advanced effects
5. Create interactive prototype variant

### 4. Responsive Design
1. Duplicate designs for each breakpoint
2. Adjust layouts for mobile and tablet
3. Optimize typography for smaller screens
4. Simplify interactions for touch devices

### 5. States and Variants
1. Create hover, focus, and active states
2. Design loading and error states
3. Create component variants
4. Set up auto-layout for responsiveness

### 6. Prototyping
1. Create interactive flows between variations
2. Add scroll-triggered animations
3. Set up micro-interactions
4. Create mobile touch interactions

### 7. Documentation
1. Add component documentation
2. Create usage guidelines
3. Export assets and specifications
4. Share with development team

## Quality Checklist

### Design Quality
- [ ] Consistent spacing and alignment
- [ ] Proper color contrast ratios
- [ ] Typography hierarchy is clear
- [ ] Components follow design system
- [ ] Responsive design works properly

### Technical Quality
- [ ] All components are auto-layout
- [ ] Proper use of constraints
- [ ] Export settings are configured
- [ ] Naming conventions followed
- [ ] Version control implemented

### Accessibility Quality
- [ ] Color contrast meets WCAG standards
- [ ] Touch targets are adequate size
- [ ] Focus states are visible
- [ ] Semantic structure is logical
- [ ] Screen reader text provided

### Collaboration Quality
- [ ] Design files are well organized
- [ ] Component library is up to date
- [ ] Documentation is complete
- [ ] Developer handoff is clear
- [ ] Change management process defined

---

**Next Steps:**
1. Import this specification into Figma or Adobe XD
2. Create the design system and component library
3. Design all hero variations following the specifications
4. Create responsive versions for all breakpoints
5. Set up prototyping and interactive flows
6. Export assets and prepare for developer handoff

**Maintenance:**
- Update design tokens as brand evolves
- Maintain component library consistency
- Regular accessibility audits
- Performance monitoring for live implementations