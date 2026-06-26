// ============================================================
// PORTFOLIO DATA — src/data/portfolio.js
//
// This is the single source of truth for all your content.
// Every page reads from this file. To update the site content,
// edit the values below.
//
// See the "Editing your content" section of README.md for a
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
];

// --- Home page quick-nav buttons ---
// These are the shortcut buttons below the hero on the Home page.
// Edit labels or reorder as desired.
export const quickNav = [
  { to: '/about',      label: 'About' },
  { to: '/projects',   label: 'Projects' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/experiences', label: 'Experiences' },
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

// Each entry becomes a Card in the Passions section on the About page.
// Fields: title (string), description (string)
export const passions = [
  {
    title: 'Taekwondo',
    description:
      "I've been doing Taekwondo since I was a kid, over 8 years of competing at the state, national, and international level. I hold a 3rd Degree Poom Black Belt from Kukkiwon, which is the governing body for Taekwondo worldwide. Competing has taken me all over. I've been a Florida State Champion multiple times between 2014 and 2020 in both sparring and poomsae, made the AAU USA National Team twice, and picked up gold medals at international opens in Mexico, Canada, and Costa Rica. Honestly, some of my best memories are from those trips. The part I'm most proud of is doing all of this while keeping up with school full-time. It taught me a lot about discipline and managing my time, lessons I carry into everything else I do.",
  },
  {
    title: 'Soccer',
    description:
      "I've been playing soccer since I could walk, it's one of those things that just never left. I started out recreational, the way most kids do, and gradually worked my way up to club and travel teams through middle and high school. Eventually I earned the captain role, which meant a lot to me. More than the competition though, soccer has always been my reset button. When school, training, and everything else piled up, getting on the field was how I came back to myself. It still is. These days I play intramurals at UF. It's a different vibe than the competitive stuff, but honestly? I love it just as much. Some things you just never stop doing.",
  },
  {
    title: 'Teaching & Tutoring',
    description:
    "Getting injured in the middle of high school was honestly one of the harder things I've gone through. I'd built so much of my identity around competing, and suddenly that was gone. I had to figure out what to do with all that time and energy. Teaching kind of found me. I started coaching Taekwondo, it made sense, it was the world I knew, and I realized pretty quickly that I genuinely loved being on that side of it. From there I got into coding instruction, and one thing led to another until I launched my own STEM tutoring business covering math, computer science, and SAT prep. It's become one of my biggest passions. There's something about taking something you know well and helping someone else click with it for the first time, that feeling doesn't get old."
  },
];

// ============================================================
// SOCIAL LINKS (used by Footer + all HeroBlock pages)
// ============================================================

// PLACEHOLDER: Replace every value below with your real links.
// See README.md ("Editing your content") for instructions.
export const socialLinks = {
  github:   'https://github.com/your-handle',              // PLACEHOLDER
  linkedin: 'https://www.linkedin.com/in/your-handle',     // PLACEHOLDER
  email:    'mailto:your-email@example.com',               // PLACEHOLDER
};
