// ============================================================
// PORTFOLIO DATA — src/data/portfolio.js
//
// This is the single source of truth for all your content.
// Every page reads from this file. To update the site content,
// edit the values below.
//
// See CONTENT_GUIDE.md in the project root for a step-by-step
// walkthrough of every PLACEHOLDER you need to fill in.
// ============================================================

// --- Navigation ---
// Controls which links appear in the Navbar (Navbar.jsx).
// Order here = order in the nav bar. Don't add a "Home" link twice
// if "/" is already first.
export const navLinks = [
  { to: '/',            label: 'Home' },
  { to: '/about',       label: 'About' },
  { to: '/leadership',  label: 'Leadership' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/projects',    label: 'Projects' },
  { to: '/passions',    label: 'Passions' },
];

// --- Home page quick-nav buttons ---
// These are the shortcut buttons below the hero on the Home page.
// Edit labels or reorder as desired.
export const quickNav = [
  { to: '/about',      label: 'About' },
  { to: '/projects',   label: 'Projects' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/passions',   label: 'Passions' },
];

// ============================================================
// ABOUT PAGE CONTENT
// ============================================================

// --- Skills (About page) ---
// Replace with your real tech stack, tools, and languages.
// Each string becomes a pill badge in the Skills card.
// PLACEHOLDER: Replace with your actual skills
export const skills = [
  'React',
  'Vite',
  'Tailwind CSS',
  'Framer Motion',
  'Accessibility',
  'UI Systems',
];

// --- Interests (About page) ---
// Short phrases describing what you enjoy. Each one becomes a
// bullet point in the Interests card.
// PLACEHOLDER: Replace with your actual interests
export const interests = [
  'Building polished interfaces',
  'Learning new design systems',
  'Mobile-first product thinking',
  'Creative problem solving',
];

// ============================================================
// LEADERSHIP PAGE CONTENT
// ============================================================

// Each entry becomes a Card on the Leadership page.
// Fields: title, organization, description
// PLACEHOLDER: Replace all entries with real leadership roles
export const leadershipItems = [
  {
    title: 'Student Tech Lead',
    organization: 'PLACEHOLDER: School / Club name',
    description:
      'Led a small team of students through planning, coordination, and presentation work. PLACEHOLDER: Replace with real leadership impact.',
  },
  {
    title: 'Club Organizer',
    organization: 'PLACEHOLDER: Club / Initiative name',
    description:
      'Helped organize recurring sessions, shared resources, and supported peers. PLACEHOLDER: Replace with real initiative details.',
  },
];

// ============================================================
// EXPERIENCES PAGE CONTENT
// ============================================================

// Each entry becomes a Card on the Experiences page.
// Fields: title, organization, period, description
// Keep this to internships and work only — projects are on /projects.
// PLACEHOLDER: Replace all entries with real work experience
export const experiences = [
  {
    title: 'Intern / Assistant',
    organization: 'PLACEHOLDER: Company name',
    period: 'PLACEHOLDER: 2025',
    description:
      'Supported day-to-day tasks, collaborated with teammates, and learned professional workflows. PLACEHOLDER: Replace with real internship details.',
  },
  {
    title: 'Part-time / Freelance Work',
    organization: 'PLACEHOLDER: Client or company name',
    period: 'PLACEHOLDER: 2024',
    description:
      'Contributed to production work or client deliverables. PLACEHOLDER: Replace with real work experience details.',
  },
];

// ============================================================
// PROJECTS PAGE CONTENT
// ============================================================

// Each entry becomes a Card in the Projects grid.
// Fields: title, description, stack[], github, live
// PLACEHOLDER: Replace all three projects with your real projects
export const projects = [
  {
    title: 'Lumen Portfolio',
    description:
      'A sleek portfolio concept with a cosmic visual system, motion-rich sections, and responsive layouts tailored for student builders.',
    stack: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com/your-handle/lumen-portfolio',   // PLACEHOLDER
    live:   'https://your-demo-link.example.com',               // PLACEHOLDER
  },
  {
    title: 'Orbit Notes',
    description:
      'A focused note-taking prototype with clean organization, lightweight interactions, and a minimal glass interface.',
    stack: ['React', 'Local Storage', 'UI Design'],
    github: 'https://github.com/your-handle/orbit-notes',       // PLACEHOLDER
    live:   'https://your-demo-link.example.com',               // PLACEHOLDER
  },
  {
    title: 'Builder Dashboard',
    description:
      'A dashboard concept for tracking progress, goals, and habits with a refined layout and subtle data storytelling.',
    stack: ['React', 'Charts', 'Tailwind CSS'],
    github: 'https://github.com/your-handle/builder-dashboard',  // PLACEHOLDER
    live:   'https://your-demo-link.example.com',                // PLACEHOLDER
  },
];

// ============================================================
// PASSIONS PAGE CONTENT
// ============================================================

// Each string becomes a Card on the Passions page.
// Write one passion per entry — keep them personal and specific.
// PLACEHOLDER: Replace with things that actually drive you
export const passions = [
  'Designing interfaces that feel calm, modern, and deliberate',
  'Learning how good products balance clarity and personality',
  'Exploring ideas that connect creativity with real-world utility',
];

// ============================================================
// SOCIAL LINKS (used by Footer + all HeroBlock pages)
// ============================================================

// PLACEHOLDER: Replace every value below with your real links.
// See CONTENT_GUIDE.md for instructions.
export const socialLinks = {
  github:   'https://github.com/your-handle',              // PLACEHOLDER
  linkedin: 'https://www.linkedin.com/in/your-handle',     // PLACEHOLDER
  email:    'mailto:your-email@example.com',               // PLACEHOLDER
};
