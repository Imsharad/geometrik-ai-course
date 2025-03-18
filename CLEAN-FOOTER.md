# Clean Footer Implementation

This feature implements progressively cleaner footer designs with four distinct variants:

## Footer Variants

### 1. Base
The standard fully-featured footer with:
- Company logo and description
- Full set of navigation links
- Social media icons
- Copyright information
- Visual separator for content sections

### 2. Clean
A simplified version with:
- Reduced spacing and sizing
- Smaller typography
- Fewer descriptive elements
- Maintained organization and functionality

### 3. Minimal
A significantly pared-down footer:
- Essential links only (no category grouping)
- Single row layout on desktop
- Minimal descriptive text
- Smaller visual elements

### 4. Ultra
The cleanest possible implementation:
- Only the absolute essentials
- Extremely minimal spacing
- Limited to logo, copyright, and 1-2 links
- Uses subtle animations to enhance presence without adding visual weight

## Implementation

The implementation uses:

1. **Context API** - For managing footer variant state across components
2. **Variant Controller** - A floating UI to easily switch between designs
3. **Framer Motion** - For smooth animations and transitions
4. **Responsive Design** - All variants are fully responsive

## Design Philosophy

The clean footer design follows these principles:

1. **Progressive Reduction** - Each variant removes more elements
2. **Maintained Functionality** - Essential elements remain in all variants
3. **Increased White Space** - As elements decrease, space increases
4. **Visual Hierarchy** - Important elements maintain prominence
5. **Subtle Animations** - Adding interactivity without visual clutter

## Usage

To use this feature in your Next.js project:

```tsx
// Import the footer layout
import { FooterLayout } from "@/components/layout/main-layout"

// Wrap your page content
export default function MyPage() {
  return (
    <FooterLayout>
      {/* Your page content here */}
    </FooterLayout>
  )
}
```

To use a specific variant without the controller:

```tsx
import { CleanFooter, FooterVariant } from "@/components/layout/clean-footer"

// In your component
<CleanFooter variant={FooterVariant.Minimal} />
```