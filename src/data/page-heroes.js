// ============================================================
// PAGE HEROES — src/data/page-heroes.js
//
// Contains the HeroBlock data for every non-home page.
// Each key maps to a page and is spread into <HeroBlock> as props.
//
// HeroBlock props (see src/components/ui/hero-block-shadcnui.tsx):
//   eyebrow         — small all-caps label above the title
//   title           — large headline
//   description     — paragraph below the headline
//   primaryAction   — left CTA button { label, href/to, icon, variant }
//   secondaryAction — right CTA button { label, href/to, icon, variant }
//   socials[]       — icon links { icon, href, label }
//
// To update a page's hero text, find its key below and edit the
// title / description fields. Social links are pulled from portfolio.js.
// See README.md ("Editing your content") for the full fill-in guide.
// ============================================================

export const pageHeroes = {

  // --- About page hero ---
  // PLACEHOLDER: Replace title and description with your real bio summary
  about: {
    eyebrow: 'About',
    title: 'Computer Engineering University of Florida',
    description:
      'Building intelligent systems at the intersection of hardware, software, and AI/ML.',
  },

  // --- Leadership page hero ---
  // PLACEHOLDER: Update description once you have real leadership history
  leadership: {
    eyebrow: 'Leadership',
    title: 'Roles, clubs, activities, and initiatives.',
    description:
      'PLACEHOLDER: Replace these entries with your real leadership history and measurable outcomes.',
  },

  // --- Experiences page hero ---
  experiences: {
    eyebrow: 'Experiences',
    title: 'Internships and work experience only.',
    description:
      'This page intentionally excludes projects so the portfolio stays organized and easy to scan.',
  },

  // --- Projects page hero ---
  // PLACEHOLDER: Update description once you have real projects
  projects: {
    eyebrow: 'Projects',
    title: 'A grid of polished project cards.',
    description:
      'PLACEHOLDER: Replace each sample with your real projects, real repo links, and real demo URLs.',
  },
};
