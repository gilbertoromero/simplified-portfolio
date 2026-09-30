# Simplified Portfolio

A simple, typography-first personal site to showcase who I am and my professional experience — the projects I've worked on and a bit about me.

The design is deliberately minimal: a single readable column, no clutter, and content that's easy to update.

## Sections

- **Home** — a short introduction and my most recent projects
- **Projects** — things I've built and worked on
- **About** — my background, experience, and where to find me

A blog is planned for later.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) with the typography plugin
- [Geist](https://vercel.com/font) fonts via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # run ESLint
```

## Updating content

| What                          | Where                      |
| ----------------------------- | -------------------------- |
| Name, description, links      | `src/data/site.ts`         |
| Projects                      | `src/data/projects.ts`     |
| Home intro                    | `src/app/page.tsx`         |
| About page                    | `src/app/about/page.tsx`   |
