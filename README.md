# Yasir Oyebo - Backend Software Engineer Portfolio

This repository contains a minimal personal portfolio built with React + Vite showcasing backend systems, professional experience, selected work, awards, and contact links.

**Quick links:**
- **Contact links:** `components/Contact.tsx`
- **Project metadata:** `metadata.json`, `constants.ts`
- **Package manifest:** `package.json`

**Local Development**

- **Prerequisites:** Node.js (LTS recommended) and `pnpm` installed.

1. Install dependencies:

```powershell
cd C:\Projects\yasir-oyebo-fullstack-engineer-portfolio
pnpm install
```

2. Start the dev server:

```powershell
pnpm run dev
```

The app will be served at `http://localhost:3000/` by default (Vite).

**Available scripts** (from `package.json`):
- `dev`: Start the Vite dev server (`vite`).
- `build`: Build for production (`vite build`).
- `preview`: Preview the production build (`vite preview`).

**Troubleshooting**

- If you see `'vite' is not recognized` when running `pnpm run dev`, run `pnpm install` first to ensure `node_modules` is created (this fixes the issue). Example:

```powershell
pnpm install
pnpm run dev
```

- If `pnpm install` fails because of an unavailable package version, update `package.json` to a published version.

**Where to look in the code**
- Contact links: `components/Contact.tsx`
- Project content (projects, skills, experiences): `constants.ts`
- Vite config: `vite.config.ts`
- Entry files: `index.tsx`, `App.tsx`
