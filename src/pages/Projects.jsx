import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Button from '../components/Button';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/portfolio';

export default function Projects() {
  return (
    <SectionWrapper>
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">Projects</p>
        <h2 className="section-title">A grid of polished project cards.</h2>
        <p className="section-subtitle mt-4">PLACEHOLDER: Replace each sample with Nicolas’s real projects, real repo links, and real demo URLs.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {/* TODO: Replace with advanced UI component from 21st.dev */}
            <Card className="h-full">
              <div className="flex h-full flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

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
  );
}