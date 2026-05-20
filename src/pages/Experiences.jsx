// ============================================================
// EXPERIENCES PAGE — src/pages/Experiences.jsx
// Route: /experiences
//
// Displays internships and work experience ONLY — no projects.
// (Projects have their own dedicated /projects page.)
//
// Structure:
//   1. HeroBlock  — full-screen intro
//   2. SectionWrapper → stacked Cards, one per experience entry
//        Each card shows: organization name, job title, period, description
//
// Content is sourced from:
//   src/data/portfolio.js   → experiences[]
//   src/data/page-heroes.js → pageHeroes.experiences
//
// To add an experience: append an object to experiences[] in portfolio.js.
// Format: { title, organization, period, description }
// ============================================================

import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { experiences } from '../data/portfolio';
import { HeroBlock } from '../components/ui/hero-block-shadcnui';
import { pageHeroes } from '../data/page-heroes';

export default function Experiences() {
  return (
    <>
      {/* Full-screen hero section — data from pageHeroes.experiences */}
      <HeroBlock {...pageHeroes.experiences} />

      {/* Experience cards — stacked vertically */}
      <SectionWrapper>
        <div className="grid gap-6">
          {experiences.map((item, index) => (
            <motion.div
              key={`${item.title}-${item.organization}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card>
                {/* Header row: organization + title on the left, period on the right */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    {/* Organization name in cyan uppercase */}
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">{item.organization}</p>
                    {/* Job / role title */}
                    <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                  </div>
                  {/* Date range */}
                  <p className="text-sm text-slate-400">{item.period}</p>
                </div>

                {/* Description paragraph */}
                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
