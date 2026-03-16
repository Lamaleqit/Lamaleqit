# Fake.legal Landing Page (Next.js)

A blue-and-white, trust-first landing page for Fake.legal built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn-style structure (`components/ui`, `lib/utils.ts`)
- Framer Motion + Motion animations

## Project structure

- `app/` — routes and global styles
- `components/ui/` — reusable UI primitives and animated effects
- `components/landing/` — landing-page feature demos/sections
- `lib/utils.ts` — shared `cn()` utility for Tailwind class merging

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## shadcn compatibility notes

This repo already follows the expected shadcn layout:

- components path: `components/ui`
- styles path: `app/globals.css`
- alias: `@/*` in `tsconfig.json`

If you want to initialize shadcn CLI explicitly, run:

```bash
npx shadcn@latest init
```

Keeping `components/ui` is important because generated shadcn components and ecosystem snippets assume this path by default, reducing import churn and integration friction.
