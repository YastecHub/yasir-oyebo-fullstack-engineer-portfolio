# Yasir Oyebo — Fullstack / Backend Engineer Portfolio

This repository contains a personal portfolio built with React + Vite showcasing backend projects, experience, and a contact form wired to Formspree.

**Quick links:**
- **Contact component:** `components/Contact.tsx`
- **Project metadata:** `metadata.json`, `constants.ts`
- **Package manifest:** `package.json`

**Note:** The contact form currently uses Formspree via the `@formspree/react` package. The Formspree form ID is set in `components/Contact.tsx` as `FORMSPREE_FORM_ID`. You can replace it with your Formspree ID or wire it to an environment variable (instructions below).

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

**Formspree integration**

- The contact form in `components/Contact.tsx` uses the `@formspree/react` hook. The package is already added to `package.json` (`@formspree/react@3.0.0`).
- Current form ID used: `myzrdlvp` (constant `FORMSPREE_FORM_ID`). Replace this with your Formspree form ID to receive submissions.

Optional: use an environment variable for the form ID (recommended for deployments):

1. Add a `.env` or `.env.local` in the project root with:

```text
VITE_FORMSPREE_ID=your_formspree_id_here
```

2. Update `components/Contact.tsx` to read the ID from `import.meta.env.VITE_FORMSPREE_ID` (I can do this for you if you want).

**Testing the contact form**

- Start the dev server and open the site in the browser.
- Navigate to the Contact section and submit the form. The component shows success when `state.succeeded` is true.
- If submissions don't arrive, verify the Formspree form ID and check Formspree's dashboard for webhook/submission logs.

**Troubleshooting**

- If you see `'vite' is not recognized` when running `pnpm run dev`, run `pnpm install` first to ensure `node_modules` is created (this fixes the issue). Example:

```powershell
pnpm install
pnpm run dev
```

- If `pnpm install` fails because of an unavailable package version, update `package.json` to a published version (I updated `@formspree/react` to `^3.0.0` already).

**Where to look in the code**
- Contact UI and Formspree integration: `components/Contact.tsx`
- Project content (projects, skills, experiences): `constants.ts`
- Vite config: `vite.config.ts`
- Entry files: `index.tsx`, `App.tsx`

**Next steps I can help with**
- Replace hard-coded `FORMSPREE_FORM_ID` with `VITE_FORMSPREE_ID` and modify `Contact.tsx` to read from env.
- Add instructions for deploying (Netlify/Vercel) and set up env vars there.
- Wire form success state to a custom thank-you page or analytics.

If you'd like any of those, tell me which one and I'll implement it.