// ============================================================
// LEADERSHIP PAGE — src/pages/Leadership.jsx
// Route: /leadership
//
// Displays clubs, roles, and initiatives you've led or participated in.
//
// Structure:
//   1. HeroBlock  — full-screen intro
//   2. SectionWrapper → stacked Cards, one per leadership entry
//        Each card shows: organization name, role title, description
//
// Content is sourced from:
//   src/data/portfolio.js   → leadershipItems[]
//   src/data/page-heroes.js → pageHeroes.leadership
//
// To add a leadership entry: append an object to leadershipItems[] in portfolio.js.
// Format: { title, organization, description }
// ============================================================

import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { leadershipItems } from '../data/portfolio';
import { HeroBlock } from '../components/ui/hero-block-shadcnui';
import { pageHeroes } from '../data/page-heroes';

export default function Leadership() {
  return (
    <>
      {/* Full-screen hero section — data from pageHeroes.leadership */}
      <HeroBlock {...pageHeroes.leadership} />

      {/* Leadership entry cards — stacked vertically */}
      <SectionWrapper>
        <div className="grid gap-6">
          {leadershipItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card>
                {/* Organization name in cyan uppercase */}
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">{item.organization}</p>
                {/* Role title */}
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                {/* Description */}
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
