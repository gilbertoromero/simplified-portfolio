# Simplified Portfolio

A simple, typography-first personal site to showcase who I am and my professional experience — the projects I've worked on and a bit about me.

The design is deliberately minimal, no clutter, and content that's easy to update.

> **🚧 Work in progress.** The site is live and usable, but it's still evolving. See the [roadmap](#roadmap) for what's coming next.

## Sections

- **Home** — a short introduction and my most recent projects
- **Projects** — things I've built and worked on
- **About** — my background, experience, and where to find me

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) with the typography plugin

## Getting started

```bash
npm install
npm run dev
```

## Updating content

For now, all content lives in typed data files. There is no database or CMS yet.

| What                                   | Where                                               |
| -------------------------------------- | --------------------------------------------------- |
| Name, description, links, social links | `src/data/site.ts`                                  |
| Projects                               | `src/data/projects.ts`                              |
| Projects page title and intro          | `src/data/projects-page.ts`                         |
| About page text                        | `src/data/about-page.ts`                            |
| Social icons (SVG)                     | `src/components/icons.tsx`                          |
| Site icons (favicon, app icons)        | `src/app/favicon.ico`, `icon.png`, `apple-icon.png` |

## Roadmap

Planned features, roughly in order:

| Feature                          | Description                                                                                  | Status  |
| -------------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| Project management panel         | Add, edit, reorder and hide projects from an admin panel (backend) instead of `projects.ts`. | Planned |
| Icon and social link management  | Manage the social links and their icons from the same admin panel.                           | Planned |
| Project previews and showcase    | Screenshots, demos or live previews of each project inside the site.                         | Planned |
| Blog                             | Maybe, later.                                                                                | Idea    |
