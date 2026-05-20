// ============================================================
// ABOUT PAGE — src/pages/About.jsx
// Route: /about
//
// Structure:
//   1. HeroBlock  — full-screen intro with title, description, CTAs
//   2. SectionWrapper → two Cards side by side:
//        - Skills card   (pill badges)
//        - Interests card (bullet list)
//
// All content (skills, interests, hero text) is sourced from:
//   src/data/portfolio.js   → skills[], interests[]
//   src/data/page-heroes.js → pageHeroes.about
//
// To update your bio, edit pageHeroes.about.description in page-heroes.js.
// To update skills/interests, edit the arrays in portfolio.js.
// ============================================================

import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { interests, skills } from '../data/portfolio';
import { HeroBlock } from '../components/ui/hero-block-shadcnui';
import { pageHeroes } from '../data/page-heroes';

export default function About() {
  return (
    <>
      {/* Full-screen hero section — data from pageHeroes.about */}
      <HeroBlock {...pageHeroes.about} />

      {/* Content section — Skills + Interests cards */}
      <SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2">

          {/* --- Skills card --- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-white">Skills</h3>
              {/* Each skill renders as a pill badge */}
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/20 hover:text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* --- Interests card --- */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-white">Interests</h3>
              <ul className="space-y-3 text-sm leading-7 text-slate-300">
                {interests.map((interest) => (
                  <li key={interest}>• {interest}</li>
                ))}
              </ul>
            </Card>
          </motion.div>

        </div>
      </SectionWrapper>
    </>
  );
}
