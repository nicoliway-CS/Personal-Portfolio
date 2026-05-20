// ============================================================
// PASSIONS PAGE — src/pages/Passions.jsx
// Route: /passions
//
// Showcases your personal interests, creative hobbies, and
// non-technical motivations — the "who you are beyond code" page.
//
// Structure:
//   1. HeroBlock  — full-screen intro
//   2. SectionWrapper → 3-column card grid
//        Each card has a decorative cyan circle and a passion blurb.
//
// Content is sourced from:
//   src/data/portfolio.js   → passions[] (array of strings)
//   src/data/page-heroes.js → pageHeroes.passions
//
// To add a passion: append a string to passions[] in portfolio.js.
// The decorative circle is a placeholder — feel free to replace it
// with an icon or emoji that matches each passion.
// ============================================================

import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { passions } from '../data/portfolio';
import { HeroBlock } from '../components/ui/hero-block-shadcnui';
import { pageHeroes } from '../data/page-heroes';

export default function Passions() {
  return (
    <>
      {/* Full-screen hero section — data from pageHeroes.passions */}
      <HeroBlock {...pageHeroes.passions} />

      {/* Passions card grid — 1 col mobile, 3 col on md+ */}
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-3">
          {passions.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card>
                {/* Decorative cyan circle — PLACEHOLDER: replace with an icon or emoji */}
                <div className="mb-5 h-10 w-10 rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,0.16)]" />
                {/* Passion text */}
                <p className="text-sm leading-7 text-slate-300">{item}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
