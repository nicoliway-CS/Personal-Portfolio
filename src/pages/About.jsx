import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { interests, skills } from '../data/portfolio';

export default function About() {
  return (
    <SectionWrapper>
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">About</p>
        <h2 className="section-title">A short bio, a focused skill set, and clear interests.</h2>
        <p className="section-subtitle mt-4">PLACEHOLDER: Replace this with a real bio that introduces Nicolas in one or two concise paragraphs.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }}>
          <Card>
            <h3 className="mb-4 text-xl font-semibold text-white">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.05 }}>
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
  );
}