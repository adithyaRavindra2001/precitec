# Percitec Machines - Landing Page

A modern, responsive landing page for Percitec Machines, showcasing precision engineering excellence in CNC machine tools.

## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Shadcn UI** component library
- **Lucide React** for icons

## Project Structure

```
src/
├── components/
│   ├── layout/          # SiteHeader, SiteFooter
│   ├── sections/        # Hero, StatisticsRow, IsoIdentityBanner, ProductOverview
│   └── ui/              # Shadcn UI components (button, card, navigation-menu)
├── lib/                 # Utility functions
├── pages/               # LandingPage composition
├── App.tsx
└── main.tsx
```

## Getting Started

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Features

- Sticky navigation header
- Hero section with background image
- Statistics showcase (40+ years, 800+ machines)
- ISO certification banner
- Product overview grid
- Responsive footer with contact information
- Smooth scrolling navigation
- Mobile-first responsive design
