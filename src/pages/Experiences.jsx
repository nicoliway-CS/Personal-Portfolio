import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { experiences } from '../data/portfolio';

export default function Experiences() {
  return (
    <SectionWrapper>
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">Experiences</p>
        <h2 className="section-title">Internships and work experience only.</h2>
        <p className="section-subtitle mt-4">This page intentionally excludes projects so the portfolio stays organized and easy to scan.</p>
      </div>

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
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">{item.organization}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-slate-400">{item.period}</p>
              </div>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}