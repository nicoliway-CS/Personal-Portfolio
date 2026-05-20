// ============================================================
// PAGE LAYOUT — src/layouts/PageLayout.jsx
//
// The shared layout shell used by every route in App.jsx.
// Stacks three elements vertically:
//   1. Navbar  — sticky at the top
//   2. main    — the page content (flex-1 = fills remaining space)
//   3. Footer  — anchored at the bottom
//
// The `pt-8` on <main> gives breathing room between the navbar and
// the first section of content on each page.
// ============================================================

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PageLayout({ children }) {
  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      {/* Sticky navigation bar */}
      <Navbar />

      {/* Page content — flex-1 pushes the footer to the bottom */}
      <main className="flex-1 pt-8">{children}</main>

      {/* Global footer with social links */}
      <Footer />
    </div>
  );
}
