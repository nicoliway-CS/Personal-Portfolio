# Nicolas Liway — Personal Portfolio

A futuristic, single-page personal portfolio: dark cosmic theme, glassmorphism
panels, and restrained motion. Built with React + Vite and deployed to GitHub Pages.

> **Live site:** `https://<your-github-username>.github.io/Personal-Portfolio/`

---

## Tech stack

| Area        | Tool |
|-------------|------|
| Framework   | [React 18](https://react.dev/) |
| Build tool  | [Vite 6](https://vitejs.dev/) |
| Styling     | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animation   | [Framer Motion](https://www.framer.com/motion/) (page/element transitions) + [GSAP ScrollTrigger](https://gsap.com/) (scroll reveals on About) |
| Routing     | [React Router 6](https://reactrouter.com/) (`HashRouter`) |
| Icons       | [react-icons](https://react-icons.github.io/react-icons/) + [lucide-react](https://lucide.dev/) |
| Variants    | [class-variance-authority](https://cva.style/) for the button system |
| Deployment  | [gh-pages](https://github.com/tschaub/gh-pages) → GitHub Pages |

---

## Quick start

**Prerequisites:** [Node.js](https://nodejs.org/) 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (hot reload)
npm run dev
#    → open the printed URL (e.g. http://localhost:5173/Personal-Portfolio/)

# 3. Build for production
npm run build      # outputs to dist/

# 4. Preview the production build locally
npm run preview
```

### Scripts

| Command           | What it does |
|-------------------|--------------|
| `npm run dev`     | Start the Vite dev server with hot module reload. |
| `npm run build`   | Type-aware production build into `dist/`. |
| `npm run preview` | Serve the built `dist/` locally to sanity-check the production output. |
| `npm run deploy`  | Build, then publish `dist/` to the `gh-pages` branch (see below). |

---

## Deployment (GitHub Pages)

This project is configured to deploy to a GitHub Pages **project site**.

1. **Base path.** `vite.config.js` sets `base: '/Personal-Portfolio/'`. This must
   match your repository name. If you rename the repo, update this value or assets
   will 404 on the live site.
2. **Routing.** The app uses `HashRouter` (URLs look like `/#/about`). GitHub Pages
   has no server to handle client-side routes, and the hash keeps deep links working
   without a 404 fallback. Do **not** switch to `BrowserRouter` unless you add SPA
   fallback handling.
3. **Publish:**
   ```bash
   npm run deploy
   ```
   This runs `gh-pages -d dist`, pushing the build to the `gh-pages` branch. In your
   repo's **Settings → Pages**, set the source to the `gh-pages` branch.

---

## Project structure

```
Personal-Portfolio/
├── index.html               # HTML shell; mounts the app at #root
├── vite.config.js           # Vite config: React plugin, "@" → /src alias, base path
├── tailwind.config.js       # Theme extensions: fonts, radial-glow, glass shadow
├── tsconfig.json            # TS config (allowJs — JS and TS/TSX coexist)
├── postcss.config.js        # Tailwind + autoprefixer
└── src/
    ├── main.jsx             # Entry point: mounts <App> inside <HashRouter>
    ├── App.jsx              # Route tree + page-transition animation + background layers
    ├── index.css            # Global styles, fonts, starfield, .glass-panel utilities
    ├── data/                # ← ALL editable content lives here
    │   ├── portfolio.js     #   nav links, skills, interests, leadership, experiences,
    │   │                    #   projects, passions, social links
    │   └── page-heroes.js   #   hero eyebrow/title/description for each non-home page
    ├── layouts/
    │   └── PageLayout.jsx   # Shared shell: Navbar + <main> + Footer
    ├── components/
    │   ├── Button.jsx       # Thin wrapper over LiquidButton (primary/secondary)
    │   ├── Card.jsx         # Glassmorphism card with hover lift
    │   ├── Navbar.jsx       # Sticky glass nav, active-route highlighting
    │   ├── Footer.jsx       # Social icon links (GitHub / LinkedIn / Email)
    │   ├── SectionWrapper.jsx  # Consistent max-width + padding for page content
    │   └── ui/              # Lower-level / vendored UI components
    │       ├── liquid-glass-button.tsx   # The single button system (CVA variants)
    │       ├── hero-block-shadcnui.tsx   # Full-screen hero used by non-home pages
    │       ├── gooey-text-morphing.tsx   # Animated morphing hero text (Home)
    │       └── lamp.tsx                   # Cyan spotlight background (Home)
    ├── lib/
    │   └── utils.ts         # cn() className-merge helper
    └── pages/               # One file per route
        ├── Home.jsx         # /            (lamp + gooey hero + quick-nav)
        ├── About.jsx        # /about       (bio, skills, interests, passions)
        ├── Leadership.jsx   # /leadership
        ├── Experiences.jsx  # /experiences (internships/work only)
        └── Projects.jsx     # /projects    (card grid)
```

---

## Editing your content

You should rarely need to touch the page components — **almost everything lives in
`src/data/`.** Look for `PLACEHOLDER:` comments throughout; those mark every value
that needs your real information.

### 1. Social links — `src/data/portfolio.js` → `socialLinks`
Set your real GitHub, LinkedIn, and email. The email must keep the `mailto:` prefix.
Used by the footer on every page.

### 2. About page — `src/data/portfolio.js`
- `skills[]` — strings; each becomes a pill badge.
- `interests[]` — strings; each becomes a bullet.
- `passions[]` — objects `{ title, description }`; render as cards in the About page's
  "Passions" section. *(There is intentionally no separate Passions route — passions
  live on the About page.)*
- The longer bio paragraph is hard-coded in `src/pages/About.jsx` (look for the
  `PLACEHOLDER` comment in the "About Me" card).

### 3. Leadership — `src/data/portfolio.js` → `leadershipItems[]`
Each entry is `{ title, organization, description }` and becomes a card.

### 4. Experiences — `src/data/portfolio.js` → `experiences[]`
Each entry is `{ title, organization, period, description }`. Keep this to
internships/work only — projects have their own page.

### 5. Projects — `src/data/portfolio.js` → `projects[]`
Each entry is `{ title, description, stack: [], github, live }`. The `github`/`live`
URLs feed the "Repo" and "Live Demo" buttons on each card.

### 6. Page hero text — `src/data/page-heroes.js` → `pageHeroes`
Each non-home page has a hero with `{ eyebrow, title, description }`. Edit the strings
here to change the big headline at the top of About / Leadership / Experiences / Projects.

### 7. Home hero — `src/pages/Home.jsx`
The morphing hero strings are in the `heroTexts` array (e.g. `'Nicolas Liway'`,
`'Student Developer'`, `'Builder'`), and the tagline paragraph is just below it.

### Adding a new page
1. Create `src/pages/MyPage.jsx`.
2. Import it and add a `<Route>` in `src/App.jsx`.
3. Add a `{ to, label }` entry to `navLinks` in `src/data/portfolio.js`.
4. (Optional) Add a hero entry to `pageHeroes` in `src/data/page-heroes.js`.

---

## Design system at a glance

- **Theme:** dark (`slate-950`), with cyan/purple/teal radial glows + an animated
  starfield layer (defined once in `App.jsx` / `index.css` so it never re-mounts).
- **Glass panels:** the `.glass-panel` utility (in `index.css`) — used by `Navbar`,
  `Footer`, and `Card`.
- **Buttons:** a single component, `LiquidButton`, drives every button and nav link.
  Pick behavior by prop: `to=` renders a router `<Link>`, `href=` renders an external
  `<a>`, neither renders a `<button>`. Pick appearance with `variant`
  (`primary` / `secondary` / `nav` / `navActive` / `ghost`) and `size`.
- **Motion:** Framer Motion for page transitions and element fade-ins; GSAP
  ScrollTrigger for the scroll-reveal effects on the About page. Both respect
  `prefers-reduced-motion`.
- **Fonts:** Space Grotesk for display/headings, Inter for body (loaded via Google Fonts
  in `index.css`).

---

## Accessibility & motion notes

- All animations are gated on `prefers-reduced-motion: reduce` — reduced-motion users
  get a static experience.
- Buttons meet the 44px touch-target minimum at the `default` size and up.
- Icon-only buttons (footer) carry `aria-label`s.
