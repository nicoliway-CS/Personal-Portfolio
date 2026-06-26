// ============================================================
// BUTTON WRAPPER — src/components/Button.jsx
//
// Thin wrapper around LiquidButton that maps the portfolio's
// "primary" / "secondary" variants directly to LiquidButton's
// matching variants.
//
// Used by:
//   Home.jsx     — quick-nav buttons below the hero
//   Projects.jsx — "Repo" and "Live Demo" buttons on project cards
//
// Props:
//   to        — internal route (React Router <Link>)
//   href      — external URL (<a target="_blank">)
//   variant   — "primary" | "secondary"
//   size      — passed through to LiquidButton (default: "lg")
//   className — additional Tailwind classes
// ============================================================

import { LiquidButton } from './ui/liquid-glass-button.tsx';

export default function Button({ to, href, variant = 'primary', children, className = '', size = 'lg' }) {
  return (
    <LiquidButton
      href={href}
      to={to}
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </LiquidButton>
  );
}
