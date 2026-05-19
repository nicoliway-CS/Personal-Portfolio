import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { leadershipItems } from '../data/portfolio';

export default function Leadership() {
  return (
    <SectionWrapper>
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">Leadership</p>
        <h2 className="section-title">Roles, clubs, activities, and initiatives.</h2>
        <p className="section-subtitle mt-4">PLACEHOLDER: Replace these entries with Nicolas’s real leadership history and measurable outcomes.</p>
      </div>

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
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">{item.organization}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}