// ============================================================
// HOME PAGE — src/pages/Home.jsx
// Route: /
//
// The landing page. Three layers:
//   1. LampContainer  — the dramatic cyan spotlight background effect
//   2. GooeyText      — animates between name/role strings in the hero
//   3. Quick-nav buttons — shortcut links to the other main pages
//
// The hero texts cycle through: "Nicolas Liway" → "Student Developer" → "Builder"
// To change these, edit the heroTexts array below.
//
// Quick-nav buttons come from src/data/portfolio.js → quickNav[].
// ============================================================

import { motion } from 'framer-motion';
import Button from '../components/Button';
import { GooeyText } from '../components/ui/gooey-text-morphing';
import { LampContainer } from '../components/ui/lamp';
import { quickNav } from '../data/portfolio';

// The strings that cycle in the animated hero.
// PLACEHOLDER: Update these to reflect your own name/roles.
const heroTexts = ['Nicolas Liway', 'Student Developer', 'Builder'];

export default function Home() {
  return (
    // LampContainer provides the spotlight background and vertically
    // centers its children inside the beam area.
    <LampContainer className="min-h-[calc(100vh-220px)] rounded-[2rem] border border-white/10 shadow-glass">

      {/* Fade-in wrapper for the hero content */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center"
      >
        {/* --- Hero text block --- */}
        <div className="space-y-4">
          {/* Empty eyebrow label — add a tagline here if desired */}
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-200/80"></p>

          {/* GooeyText cycles through heroTexts with a morphing animation.
              min-h clamps the height so the layout doesn't jump between texts. */}
          <GooeyText
            texts={heroTexts}
            className="min-h-[clamp(4.5rem,8vw,7rem)] w-full"
            textClassName="leading-[0.9]"
          />
        </div>

        {/* --- Tagline / bio blurb ---
            PLACEHOLDER: Update this one-liner to describe yourself */}
        <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base md:text-lg">
          I design and build practical web experiences with a focus on clarity, motion, and thoughtful details.
        </p>

        {/* --- Quick-nav buttons ---
            Sourced from quickNav[] in portfolio.js.
            First button gets "primary" (white text), rest get "secondary". */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {quickNav.map((item, index) => (
            <Button key={item.to} to={item.to} variant={index === 0 ? 'primary' : 'secondary'}>
              {item.label}
            </Button>
          ))}
        </div>
      </motion.div>
    </LampContainer>
  );
}
