// ============================================================
// FOOTER — src/components/Footer.jsx
//
// Global footer rendered on every page via PageLayout.
// Contains three social icon links: GitHub, LinkedIn, Email.
//
// Social URLs are sourced from src/data/portfolio.js → socialLinks.
// Icon buttons use LiquidButton (variant="secondary", size="icon")
// so they match the site's unified button system.
// ============================================================

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { socialLinks } from '../data/portfolio';
import { LiquidButton } from './ui/liquid-glass-button.tsx';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="glass-panel flex flex-col items-center justify-between gap-4 rounded-3xl px-5 py-4 sm:flex-row">

        {/* Left: branding text */}
        <p className="text-sm text-slate-400">Built for Nicolas Liway.</p>

        {/* Right: social icon links */}
        <div className="flex items-center gap-3">
          <LiquidButton
            href={socialLinks.github}
            variant="secondary"
            size="icon"
            className="hover:-translate-y-0.5"
            aria-label="GitHub profile"
          >
            <FaGithub className="h-5 w-5" />
          </LiquidButton>

          <LiquidButton
            href={socialLinks.linkedin}
            variant="secondary"
            size="icon"
            className="hover:-translate-y-0.5"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </LiquidButton>

          <LiquidButton
            href={socialLinks.email}
            variant="secondary"
            size="icon"
            className="hover:-translate-y-0.5"
            aria-label="Email Nicolas"
          >
            <MdEmail className="h-5 w-5" />
          </LiquidButton>
        </div>
      </div>
    </footer>
  );
}
