# GitHub Copilot - Portfolio Prompt

> Paste this into GitHub Copilot Chat or save as `.github/copilot-instructions.md` in your project root.

---

## Project Overview

You are building a modern personal portfolio website for **Nicolas Liway**, a student developer.

**Tech stack:**
- React + Vite
- Tailwind CSS
- JavaScript
TypeScript (TSX components throughout)
- Framer Motion for animations
- React Router for navigation
- GitHub Pages deployment

---

## Project Goal

Create a polished, futuristic personal portfolio with this aesthetic:
- **Apple-inspired**: clean spacing, minimal UI, strong typography
- **Space/cosmic**: dark mode default, subtle depth, gradients
- **Animated but restrained**: smooth, purposeful motion — never distracting

---

## Pages & Routes

### `/` — Home
- Hero section with **"Nicolas Liway"** large and centered
- Tagline below (e.g. "Developer · Student · Builder")
- Subtle animated space/gradient background
- Quick-nav buttons linking to the other pages

### `/about` — About
- Short bio
- Skills section
- Interests

### `/leadership` — Leadership
- Leadership roles
- Clubs, activities, and initiatives

### `/experiences` — Experiences
- Internships and work experience only
- Do NOT duplicate project content here (projects have their own page)

### `/projects` — Projects
- Grid layout of project cards
- Each card contains:
  - Title
  - Description
  - Tech stack tags
  - Link buttons (GitHub repo + live demo)

### `/passions` — Passions
- Personal interests and hobbies
- Non-technical motivations
- What drives Nicolas creatively

**No separate contact page.** Use the global footer instead (see below).

---

## Navigation

- Sticky top navbar with a glass/blur effect
- Active route highlighted
- Smooth page transitions using Framer Motion

---

## Global Footer (every page)

Futuristic minimal footer on every page containing:
- GitHub icon → links to Nicolas's GitHub profile
- LinkedIn icon → links to LinkedIn
- Email icon → `mailto:` link

Style:
- Transparent glass background
- Subtle glow effect on icon hover
- No clutter

---

## Design System

### Visual style
- Dark mode default
- Glassmorphism panels (blurred, semi-transparent)
- Neon accents: blue, purple, cyan
- Font: Inter (or closest SF-like system font)
- Large spacing — breathing room between sections

### UI rules
- Large, legible typography
- Smooth hover transitions
- Fade-in on page load (Framer Motion)
- Hover lift on cards (Framer Motion)
- Transition duration: 0.2–0.4s
- Optional: slow animated gradient background

### Reusable components to build
| Component | Description |
|---|---|
| `<Button />` | Primary and secondary variants |
| `<Card />` | Glassmorphism card base |
| `<SectionWrapper />` | Consistent section padding/layout |
| `<Navbar />` | Sticky glass top nav |
| `<Footer />` | Global footer with social icons |

---

## Animations (Framer Motion)

Use `framer-motion` for all animations:
- `motion.div` fade-in on page load
- Hover lift on project cards (`whileHover={{ y: -4 }}`)
- Page transition wrapper using `AnimatePresence`
- Transition duration: 0.2–0.4s
- Keep animations subtle — never distracting

---

## Folder Structure

```
src/
├── components/       # Reusable UI components (Button, Card, Navbar, Footer, etc.)
├── pages/            # One file per route (Home, About, Leadership, etc.)
├── layouts/          # Layout wrappers (e.g. PageLayout with Navbar + Footer)
├── assets/           # Images, icons, static files
└── styles/           # Global CSS or Tailwind config overrides
```

---

## GitHub Pages Deployment

- Use **`HashRouter`** instead of `BrowserRouter` — GitHub Pages does not support client-side routing with `BrowserRouter`
- No server-side dependencies
- Build must work with `npm run build`
- Output goes to `/dist`

---

## Placeholder Data

Use realistic placeholder content with Nicolas's name where appropriate. For anything unknown (bio text, job titles, project details), use clearly labeled placeholder comments:

```jsx
// PLACEHOLDER: Replace with real bio text
// PLACEHOLDER: Replace with actual project details
// PLACEHOLDER: Replace with real LinkedIn URL
```

---

## Advanced UI Component TODOs

Leave the following comment wherever a component could later be replaced with a polished component from 21st.dev or a custom advanced UI library:

```jsx
// TODO: Replace with advanced UI component from 21st.dev
```

Place these TODOs throughout — on cards, sections, buttons, and the hero — so upgrade points are easy to find later.

---

## Code Standards

- Functional components only (no class components)
- Keep components small and focused
- Prioritize readability over cleverness
- Consistent Tailwind class ordering
- All pages must look consistent — shared design tokens, no one-off styles
- Mobile-first responsive design throughout

---

## Claude Assistant Prompt (use this to run a full-project audit and fixes)

You are an expert JavaScript/React engineer and typescript with full access to the project's code. Your task is to analyze, test, and improve this Vite + React project (TypeScript enabled, Tailwind CSS, Framer Motion) and produce minimal, focused changes as patches. Be conservative: only modify files necessary to implement fixes or features.

Project context
- Project root: a Vite React app using Tailwind and TypeScript. Key files: `package.json`, `tailwind.config.js`, `tsconfig.json`, `vite.config.js`, `src/index.css`.
- Important directories:
  - `src/components/ui/` — shadcn-style UI components (existing: `liquid-glass-button.tsx`, added: `lamp.tsx`, `gooey-text-morphing.tsx`, `button.tsx`, `hero-block-shadcnui.tsx`)
  - `src/pages/` — page routes (`Home.jsx`, `About.jsx`, `Projects.jsx`, `Experiences.jsx`, `Leadership.jsx`, `Passions.jsx`)
  - `src/data/` — content: `portfolio.js` and new `page-heroes.js`
- Key dependencies (from `package.json`): `react`, `react-dom`, `vite`, `tailwindcss`, `framer-motion`, `react-router-dom`, `react-icons`, `class-variance-authority`, `@radix-ui/react-slot`, `typescript`.
- Commands you can run locally:
  - Install: `npm ci`
  - Dev server: `npm run dev`
  - Build: `npm run build`
  - Preview: `npm run preview`

Tasks to perform
1. Code audit
  - Scan the repository for runtime or build errors, TypeScript issues, unused/wrong imports (especially icon libraries), and Tailwind usage problems.
2. Run and verify
  - Run `npm ci` then `npm run build` and report all errors/warnings and line references.
3. Fixes and improvements
  - Apply minimal, focused patches to fix any build/runtime errors (imports, props, missing exports, animation loops, layout overlap, router navigation).
  - Ensure `src/components/ui` is used for shared UI components and that pages import them consistently with project aliases (e.g., `@/...` if configured).
  - Make non-home pages use a centralized hero component — if logic is duplicated, extract into `src/components/ui`.
  - Ensure animation loops cancel on unmount when needed, and layout reserve space so animated text doesn't overlap other copy.
  - Keep Tailwind configuration consistent; add content globs if missing for `ts`/`tsx` files.
4. New deliverables
  - Provide a short summary of what you changed and why.
  - For every change, produce a unified-diff style patch (git diff or file-by-file — clearly labeled with file paths and full file contents).
  - List any new dependencies you added and why.
  - Report commands to validate locally and a short checklist to confirm correctness.

Constraints and style
- Keep changes minimal and focused; don't refactor unrelated code.
- Preserve existing project conventions (Tailwind utilities, minimal CSS overrides).
- When adding icons: prefer `react-icons` if `lucide-react` doesn't export the named icon you used.
- Avoid adding large new libraries unless necessary; prefer built-in or already-installed packages.
- If TypeScript changes are required, prefer small, incremental updates and maintain `allowJs` behavior where relevant.
- For patches: include full file content replacements (not just snippets), in a single unified diff per file.

Expected output format
1. Top-level summary (2–5 bullets) of what you fixed/added.
2. Full patches for each modified file in unified-diff format. Example:
--- a/path/to/file
+++ b/path/to/file
@@ ...
[diff content]
3. Commands to run to verify (copy-paste ready).
4. A short follow-up checklist and suggested next steps.

Acceptance checklist
- `npm ci` runs successfully.
- `npm run build` completes with no errors.
- Home hero shows gooey animated name without overlapping other text.
- Non-home pages show the shared `HeroBlock` intro and still render their original content below.
- No missing icon import errors (use `react-icons` fallbacks if needed).
- Animation loops are cancelled on component unmount; no memory leaks.

Notes & hints
- Path alias: `vite.config.js` likely defines `@` alias to `./src`. Use that if present.
- Tailwind: confirm `tailwind.config.js` includes `./src/**/*.{js,jsx,ts,tsx}` in content.
- If you need me to run the produced patches, present them in a single reply; I will apply and run `npm run build` locally.

If you understand, first produce a short plan of actions (3–6 steps) and then the patches.

— end prompt —