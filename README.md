# Geometrik AI Course Landing Page

A beautiful landing page for an AI course built with Next.js, Tailwind CSS, and Framer Motion.

## Framer Motion Fix

This project includes a fix for the common Framer Motion error:

```
TypeError: _utils_unit_conversion_mjs__WEBPACK_IMPORTED_MODULE_5__.positionalValues[name] is not a function
```

### How the Fix Works

The error occurs because Framer Motion expects positional values (like `x`, `y`, `top`, etc.) to have proper units when they're numbers. Our fix, located at `app/fix-framer-motion.tsx`, creates a wrapper that:

1. Converts numeric position values to strings with 'px' units
2. Creates safe versions of all motion components
3. Re-exports all hooks from framer-motion

### Using the Fix

Instead of importing directly from `framer-motion`, import from our fixed version:

```tsx
// BEFORE (causing error)
import { motion, useScroll, useTransform } from "framer-motion"

// AFTER (fixed version)
import { motion, useScroll, useTransform } from "@/app/fix-framer-motion"
```

This ensures that all positional values are properly handled.

## Installation

```bash
npm install
npm run dev
```

## Features

- Beautiful animations with Framer Motion
- Responsive design with Tailwind CSS
- Next.js for server-side rendering and routing
- Modern UI components

## License

MIT