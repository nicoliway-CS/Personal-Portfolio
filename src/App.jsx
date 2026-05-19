import { AnimatePresence, motion } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import PageLayout from './layouts/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Passions from './pages/Passions';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

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
  const location = useLocation();

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-90" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageLayout>
                <AnimatedRoute>
                  <Home />
                </AnimatedRoute>
              </PageLayout>
            }
          />
          <Route
            path="/about"
            element={
              <PageLayout>
                <AnimatedRoute>
                  <About />
                </AnimatedRoute>
              </PageLayout>
            }
          />
          <Route
            path="/leadership"
            element={
              <PageLayout>
                <AnimatedRoute>
                  <Leadership />
                </AnimatedRoute>
              </PageLayout>
            }
          />
          <Route
            path="/experiences"
            element={
              <PageLayout>
                <AnimatedRoute>
                  <Experiences />
                </AnimatedRoute>
              </PageLayout>
            }
          />
          <Route
            path="/projects"
            element={
              <PageLayout>
                <AnimatedRoute>
                  <Projects />
                </AnimatedRoute>
              </PageLayout>
            }
          />
          <Route
            path="/passions"
            element={
              <PageLayout>
                <AnimatedRoute>
                  <Passions />
                </AnimatedRoute>
              </PageLayout>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}