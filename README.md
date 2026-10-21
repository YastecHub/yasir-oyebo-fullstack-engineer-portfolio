# Yasir Oladimeji — Software Engineer Portfolio

Live at **https://yasircodes.tech/**

A minimal single-page portfolio built with React 19, TypeScript and Vite, showcasing professional roles, featured work and award-winning projects.

## Local development

Prerequisites: Node.js (LTS) and `pnpm`.

```bash
pnpm install
pnpm run dev       # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `pnpm run dev` | Start the Vite dev server |
| `pnpm run build` | Production build into `dist/` |
| `pnpm run preview` | Serve the production build locally |

## Editing content

All site content lives in **`constants.ts`**:

- `HERO_DATA` — name, contact details, social links, resume path
- `EXPERIENCES` — roles; `summary` is the line shown on the site
- `PROJECTS` — set `section: "featured"` or `section: "award"` to show a project, `summary` for its one-liner, `github` for its link (falls back to the GitHub profile)
- `TECHNICAL_SKILLS`, `AWARDS`, `EDUCATION` — used by the optional `Skills`, `Awards` and `Contact` sections in `components/` (not currently rendered in `App.tsx`)

## Project layout

- `index.html` — SEO, Open Graph and Twitter meta tags (canonical domain: `yasircodes.tech`)
- `App.tsx` — theme toggle, background, analytics, page composition
- `components/` — `Navbar`, `Hero`, `Experience`, `Projects`, `Footer` (+ optional sections above)
- `index.css` — all styles; dark/light themes via CSS variables
- `public/` — resume PDF, portrait, favicon, `og-image.png`, `404.html`, `offline.html`, service worker (`sw.js`), `robots.txt`, `sitemap.xml`

## Analytics

GA4 is initialised in `App.tsx` via `react-ga4`, and Vercel Analytics is injected at runtime.
