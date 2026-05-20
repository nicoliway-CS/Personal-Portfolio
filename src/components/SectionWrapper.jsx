// ============================================================
// SECTION WRAPPER — src/components/SectionWrapper.jsx
//
// A layout utility that wraps content sections with consistent
// max-width, horizontal padding, and vertical spacing.
//
// Used by every page below the HeroBlock to contain the main
// content grid (cards, lists, etc.) in a centered column.
//
// Max width: 6xl (72rem / 1152px) — matches the Navbar width.
// Padding: py-16 vertically, px-4/6/8 horizontally (responsive).
// ============================================================

export default function SectionWrapper({ children, className = '' }) {
  return (
    <section className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </section>
  );
}
