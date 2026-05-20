// ============================================================
// PROJECTS PAGE — src/pages/Projects.jsx
// Route: /projects
//
// Structure:
//   1. HeroBlock  — full-screen intro
//   2. SectionWrapper → responsive card grid (1 → 2 → 3 columns)
//        Each card shows: title, description, stack tags, Repo + Live Demo buttons
//
// Content is sourced from:
//   src/data/portfolio.js   → projects[]
//   src/data/page-heroes.js → pageHeroes.projects
//
// To add a project: append an object to the projects[] array in portfolio.js.
// Format: { title, description, stack: [], github: '', live: '' }
// ============================================================

import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/portfolio';
import { HeroBlock } from '../components/ui/hero-block-shadcnui';
import { pageHeroes } from '../data/page-heroes';

export default function Projects() {
  return (
    <>
      {/* Full-screen hero section — data from pageHeroes.projects */}
      <HeroBlock {...pageHeroes.projects} />

      {/* Projects grid */}
      <SectionWrapper>
        {/* Grid: 1 col on mobile, 2 on md, 3 on xl */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Stagger: each card fades in 50ms after the previous
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {/* TODO: Replace with advanced UI component from 21st.dev */}
              <Card className="h-full">
                {/* flex-col + flex-1 ensures the button row sticks to the bottom */}
                <div className="flex h-full flex-col">
                  <div className="flex-1">
                    {/* Project title */}
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>

                    {/* Project description */}
                    <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>

                    {/* Tech stack tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons — GitHub repo + live demo */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href={project.github} variant="secondary" className="gap-2">
                      <FiGithub className="h-4 w-4" />
                      Repo
                    </Button>
                    <Button href={project.live} variant="primary" className="gap-2">
                      <FiExternalLink className="h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
