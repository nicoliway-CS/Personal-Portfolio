// ============================================================
// NAVBAR — src/components/Navbar.jsx
//
// Sticky top navigation bar rendered on every page via PageLayout.
// Uses the glass-panel style for the pill container, and LiquidButton
// with variant="nav" (inactive) or variant="navActive" (current page)
// for each link — so active state is handled via CVA, not CSS classes.
//
// Nav links are sourced from src/data/portfolio.js → navLinks[].
// ============================================================

import { useLocation } from 'react-router-dom';
import { navLinks } from '../data/portfolio';
import { LiquidButton } from './ui/liquid-glass-button.tsx';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <nav className="glass-panel flex flex-wrap items-center justify-between gap-3 rounded-full px-4 py-3 sm:px-5">

        {/* Logo */}
        <LiquidButton
          to="/"
          variant={location.pathname === '/' ? 'navActive' : 'nav'}
          size="sm"
          className="font-display tracking-[0.22em] uppercase text-xs"
        >
          Nicolas Liway
        </LiquidButton>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-end gap-1.5">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === link.to ||
              (link.to !== '/' && location.pathname.startsWith(link.to));
            return (
              <LiquidButton
                key={link.to}
                to={link.to}
                variant={isActive ? 'navActive' : 'nav'}
                size="sm"
              >
                {link.label}
              </LiquidButton>
            );
          })}
        </div>

      </nav>
    </header>
  );
}
