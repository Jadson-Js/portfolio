# Portfolio – Agent Instructions

## Quick start
```bash
npm install
npm run dev      # next dev --turbopack
npm run build    # next build
npm run lint     # next lint (ESLint 9, next/core-web-vitals + next/typescript)
```

No `typecheck`, `test`, or `format` scripts exist.

## Tech stack
- Next.js 15 App Router · React 19 · TypeScript 5 (strict) · Tailwind CSS 4 (`@tailwindcss/postcss`) · `react-icons`
- Turbopack dev server, Vercel deploy
- Font: IBM Plex Mono via `next/font/google`

## Project structure
```
src/
  app/layout.tsx       # Root layout (lang pt-BR, ProjectProvider wrapper)
  app/page.tsx         # "use client" – single-page with custom wheel scroll on desktop
  app/globals.css      # Tailwind v4 import, CSS variables/theme, custom animations
  components/          # hero/, about/, experiences/, projects/, contact/, footer/, Sidebar, Whatsapp, TitleSection
  context/ProjectContext.tsx   # Holds selected IProject (null when closed)
  hooks/useProjects.tsx        # Hardcoded IProject[] data (no API/CMS)
  hooks/useExperiences.tsx     # Hardcoded IExperience[] data
  hooks/usePagination.tsx      # Client-side pagination for projects
  types/IProject.ts            # { thumbnail, video, title, subtitle, overview, features, challenge, solution, technologies, live?, github?[] }
  types/IExperience.ts         # { company, startDate, endData, role, description[] }
  utils/scroll.ts              # scrollIntoView helper
  utils/getCurrentSection.ts   # IntersectionObserver → URL hash
  constants/sections.ts        # ["hero","about","experiences","projects","contact"]
```

## Key quirks
- **Single-page app.** Desktop uses custom `wheel` scroll (overflow hidden); mobile uses native scroll.
- **"use client"** on every interactive component (navbar, section components, sidebar, project content).
- **Path alias** `@/*` → `./src/*`.
- **No external data.** Projects and experiences are hardcoded in `useProjects`/`useExperiences` hooks.
- **Formspree** contact form: `https://formspree.io/f/xnnvbqdj` (hardcoded, no env needed).
- **Portuguese** content throughout.
- **`src/app/favicon.ico`** exists as a binary file (tracked in git).
- If source files are missing, restore with `git checkout HEAD -- src/`.

## Style conventions
- Named exports, arrow functions in JSX, `interface` over `type`.
- CSS custom properties for theme (`--primary`, `--bg1`, etc.) mapped via Tailwind `@theme inline`.
- Three custom keyframe animations: `marquee`, `fade-in`, `slide-in-right`. Used in globals.css with `.animate-*` classes.
- Dark background, teal/cyan accent (`#98faec`).
- React 19 – no lint rule overrides beyond Next defaults.
