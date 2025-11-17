# LumiLab Website - Claude Code Documentation

## Project Overview
Modern, minimalist skincare brand website built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Turbopack (recommended)

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npx tsc --noEmit
```

## Project Structure
```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/           # Reusable UI components
│   ├── sections/     # Page sections
│   └── layout/       # Layout components (header, footer)
└── lib/              # Utilities and configurations
```

## Brand Colors
- **Primary**: Soft lavender (#9b7af0) with variants
- **Neutral**: Warm beige (#ede8e8) with variants  
- **Accent**: Soft blush (#fab8b8) with variants

## Design System
- **Typography**: Inter font family
- **Border Radius**: Rounded corners (2xl = 1.5rem)
- **Shadows**: Soft, medium variants
- **Spacing**: Custom spacing scale
- **Components**: Consistent button, card, and glass effect styles

## Page Sections (Planned)
1. Hero/Home with video background
2. How It Works (3-step process)
3. Shop (product grid)
4. Skin Profile (assessment)
5. Products showcase
6. About Us
7. FAQ (accordion)
8. Contact (form)
9. Login/Signup
10. CTA section
11. Footer

## Notes for Claude
- Use `npm run dev` to start development
- Run `npm run lint` after making changes
- Check types with `npx tsc --noEmit`
- Focus on clean, minimal design matching brand aesthetic
- Implement responsive design from start
- Use Framer Motion for smooth animations