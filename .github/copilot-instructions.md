# GitHub Copilot - Portfolio Prompt

> Paste this into GitHub Copilot Chat or save as `.github/copilot-instructions.md` in your project root.

---

## Project Overview

You are building a modern personal portfolio website for **Nicolas Liway**, a student developer.

**Tech stack:**
- React + Vite
- Tailwind CSS
- JavaScript (NOT TypeScript unless strictly necessary)
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