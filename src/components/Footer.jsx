// ============================================================
// FOOTER — src/components/Footer.jsx
//
// A minimal global footer rendered on every page via PageLayout.
// Contains three social icon links: GitHub, LinkedIn, Email.
//
// Social URLs are sourced from src/data/portfolio.js → socialLinks.
// Update that object with your real links (see CONTENT_GUIDE.md).
//
// Each icon button uses the .liquid-glass-button--icon CSS class
// defined in index.css, which gives it the frosted glass effect
// with a cyan glow on hover.
//
// TODO: Replace with a polished footer component from 21st.dev
//       once you have the design prompt ready.
// ============================================================

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { socialLinks } from '../data/portfolio';

// Shared class string for the circular icon buttons
const iconButtonClasses =
  'liquid-glass-button liquid-glass-button--icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      {/* glass-panel = blurred semi-transparent card (defined in index.css) */}
      <div className="glass-panel flex flex-col items-center justify-between gap-4 rounded-3xl px-5 py-4 sm:flex-row">

        {/* --- Left: branding text --- */}
        {/* PLACEHOLDER: Update this text if you want a different tagline */}
        <p className="text-sm text-slate-400">Built for Nicolas Liway.</p>

        {/* --- Right: social icon links --- */}
        <div className="flex items-center gap-3">
          {/* GitHub — PLACEHOLDER: update socialLinks.github in portfolio.js */}
          <a
            className={iconButtonClasses}
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          {/* LinkedIn — PLACEHOLDER: update socialLinks.linkedin in portfolio.js */}
          <a
            className={iconButtonClasses}
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>

          {/* Email — PLACEHOLDER: update socialLinks.email in portfolio.js */}
          <a
            className={iconButtonClasses}
            href={socialLinks.email}
            aria-label="Email Nicolas"
          >
            <MdEmail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
