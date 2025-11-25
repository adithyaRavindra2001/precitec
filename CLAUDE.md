# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Percitec Machines landing page - a modern React-based website showcasing precision CNC machine tools. Built with React 19, TypeScript, Vite, Tailwind CSS, and Shadcn UI components.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production (runs TypeScript check first)
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Routing Structure

The app uses React Router with a nested layout pattern:

- **Layout Component** (`App.tsx`): Wraps all routes with `SiteHeader` and `SiteFooter`
- **Routes**:
  - `/` - Landing page with hero, statistics, product overview, company/services/contact sections
  - `/products/:id` - Product category detail page showing machines in that category
  - `/machine/:id` - Individual machine detail page with specs and features

### Component Organization

```
src/
├── components/
│   ├── carousel/         # Carousel with keyboard navigation & interactive cards
│   ├── layout/           # SiteHeader (sticky nav) & SiteFooter
│   ├── sections/         # Landing page sections (Hero, Statistics, ProductOverview, etc.)
│   └── ui/              # Shadcn UI primitives (button, card, navigation-menu)
├── pages/               # Route components that compose sections
│   ├── LandingPage.tsx
│   ├── ProductDetail.tsx  # Product category page
│   └── MachineDetail.tsx  # Individual machine page
└── lib/
    └── utils.ts         # cn() utility for Tailwind class merging
```

### Data Architecture

Product and machine data are currently stored as in-file constants:

- **Product categories**: `ProductDetail.tsx` contains `productCopy` object with category info
- **Machine listings**: `ProductDetail.tsx` contains `machines` array (currently static, all machines shown regardless of category)
- **Machine specs**: `MachineDetail.tsx` contains `machineData` object with full machine details

### Styling System

- **Tailwind CSS** with custom design tokens via CSS variables
- Theme colors use HSL format: `hsl(var(--primary))` pattern
- Path alias `@/` maps to `src/` directory (configured in `vite.config.ts`)
- **Shadcn UI** components follow the `cn()` pattern for class merging
- Animations use Framer Motion with scroll-triggered reveals (`whileInView`)

### Key Patterns

1. **Framer Motion animations**: Most sections use `motion.section` with `whileInView` for scroll-triggered fade-ins
2. **Responsive design**: Mobile-first approach with `md:` and `lg:` breakpoints
3. **Navigation**: Hash-based anchor links (`/#company`, `/#services`) for same-page navigation
4. **Type safety**: TypeScript with strict mode, all components typed
5. **Carousel**: Custom implementation with keyboard navigation (arrow keys), dot indicators, and dynamic opacity based on distance from center

## Important Notes

- The carousel component calculates positioning based on hardcoded card width (320px including gap). Adjust `transform` calculation in `Carousel.tsx:77` if card dimensions change.
- Navigation uses React Router `Link` components, but hash links (`/#section`) work for same-page scrolling.
- Machine images reference `/images/` directory - ensure these exist in `public/images/`.
- Product category filtering is not yet implemented - all machines show on every product detail page.
