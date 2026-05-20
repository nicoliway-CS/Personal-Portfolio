// ============================================================
// APP ROOT — src/App.jsx
//
// Defines the route tree and wraps every page in a Framer Motion
// fade + slide animation so navigation feels smooth.
//
// How page transitions work:
//   1. AnimatePresence (from framer-motion) watches for route changes.
//   2. The exiting page plays its "exit" animation first.
//   3. The entering page then plays its "animate" (enter) animation.
//   4. `mode="wait"` ensures only one page is visible at a time.
//
// The dark background and radial/grid overlays are defined here so
// they persist across all route changes without flickering.
//
// Adding a new route:
//   1. Create a new file in src/pages/
//   2. Import it here
//   3. Add a <Route path="..." element={...}> entry below
//   4. Add the route to navLinks in src/data/portfolio.js
// ============================================================

import { AnimatePresence, motion } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Passions from './pages/Passions';

// --- Page transition animation variants ---
// Each page fades in from slightly below, fades out upward.
// Adjust y values or duration here to change the feel.
const pageVariants = {
  initial: { opacity: 0, y: 16 },   // start: invisible + 16px below
  animate: { opacity: 1, y: 0 },    // end: fully visible, in position
  exit:    { opacity: 0, y: -12 },  // leaving: fades out + moves up
};

// AnimatedRoute — wraps each page's content in the motion.div transition
function AnimatedRoute({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  // location.pathname changes on every navigation — used as the React key
  // so AnimatePresence knows to animate in/out when the route changes.
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">

      {/* --- Background layer 1: radial glow (cyan/purple/teal) --- */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-90" />

      {/* --- Background layer 2: starfield (tiled dot pattern with slow twinkle) --- */}
      <div className="starfield pointer-events-none absolute inset-0" />

      {/* --- Background layer 3: subtle grid lines for depth --- */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      {/* --- Route tree ---
          The `key` on <Routes> is critical — changing it on each navigation
          tells AnimatePresence to unmount the old page and mount the new one,
          triggering the exit + enter animations. */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={<PageLayout><AnimatedRoute><Home /></AnimatedRoute></PageLayout>} />
          <Route path="/about" element={<PageLayout><AnimatedRoute><About /></AnimatedRoute></PageLayout>} />
          <Route path="/leadership" element={<PageLayout><AnimatedRoute><Leadership /></AnimatedRoute></PageLayout>} />
          <Route path="/experiences" element={<PageLayout><AnimatedRoute><Experiences /></AnimatedRoute></PageLayout>} />
          <Route path="/projects" element={<PageLayout><AnimatedRoute><Projects /></AnimatedRoute></PageLayout>} />
          <Route path="/passions" element={<PageLayout><AnimatedRoute><Passions /></AnimatedRoute></PageLayout>} />

          {/* Catch-all: any unknown URL redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </AnimatePresence>
    </div>
  );
}
