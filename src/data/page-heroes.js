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
// See CONTENT_GUIDE.md for the full fill-in guide.
// ============================================================

import { ArrowDown, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { socialLinks } from './portfolio';

// Shared social icons array — reused on every page hero
const heroSocials = [
  { icon: FiGithub,   href: socialLinks.github,   label: 'GitHub' },
  { icon: FiLinkedin, href: socialLinks.linkedin,  label: 'LinkedIn' },
  { icon: Mail,       href: socialLinks.email,     label: 'Email' },
];

export const pageHeroes = {

  // --- About page hero ---
  // PLACEHOLDER: Replace title and description with your real bio summary
  about: {
    eyebrow: 'About',
    title: 'A short bio, a focused skill set, and clear interests.',
    description:
      'PLACEHOLDER: Replace this with a real bio that introduces Nicolas in one or two concise paragraphs.',
    primaryAction:   { label: 'Get in Touch', href: socialLinks.email, icon: Mail },
    secondaryAction: { label: 'View Projects', to: '/projects', icon: ArrowDown, variant: 'outline' },
    socials: heroSocials,
  },

  // --- Leadership page hero ---
  // PLACEHOLDER: Update description once you have real leadership history
  leadership: {
    eyebrow: 'Leadership',
    title: 'Roles, clubs, activities, and initiatives.',
    description:
      'PLACEHOLDER: Replace these entries with your real leadership history and measurable outcomes.',
    primaryAction:   { label: 'Get in Touch', href: socialLinks.email, icon: Mail },
    secondaryAction: { label: 'About', to: '/about', icon: ArrowDown, variant: 'outline' },
    socials: heroSocials,
  },

  // --- Experiences page hero ---
  // This one is intentionally explanatory — you can keep this or customize it
  experiences: {
    eyebrow: 'Experiences',
    title: 'Internships and work experience only.',
    description:
      'This page intentionally excludes projects so the portfolio stays organized and easy to scan.',
    primaryAction:   { label: 'Get in Touch', href: socialLinks.email, icon: Mail },
    secondaryAction: { label: 'Projects', to: '/projects', icon: ArrowDown, variant: 'outline' },
    socials: heroSocials,
  },

  // --- Projects page hero ---
  // PLACEHOLDER: Update description once you have real projects
  projects: {
    eyebrow: 'Projects',
    title: 'A grid of polished project cards.',
    description:
      'PLACEHOLDER: Replace each sample with your real projects, real repo links, and real demo URLs.',
    primaryAction:   { label: 'Get in Touch', href: socialLinks.email, icon: Mail },
    secondaryAction: { label: 'Leadership', to: '/leadership', icon: ArrowDown, variant: 'outline' },
    socials: heroSocials,
  },

  // --- Passions page hero ---
  // PLACEHOLDER: Update description to reflect what actually drives you
  passions: {
    eyebrow: 'Passions',
    title: 'Creative motivations, hobbies, and non-technical interests.',
    description:
      'PLACEHOLDER: Replace these with the things that actually drive you creatively.',
    primaryAction:   { label: 'Get in Touch', href: socialLinks.email, icon: Mail },
    secondaryAction: { label: 'About', to: '/about', icon: ArrowDown, variant: 'outline' },
    socials: heroSocials,
  },
};
