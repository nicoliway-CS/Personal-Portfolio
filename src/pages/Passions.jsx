import { motion } from 'framer-motion';
import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { passions } from '../data/portfolio';

export default function Passions() {
  return (
    <SectionWrapper>
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-200/80">Passions</p>
        <h2 className="section-title">Creative motivations, hobbies, and non-technical interests.</h2>
        <p className="section-subtitle mt-4">PLACEHOLDER: Replace these with the things that actually drive Nicolas creatively.</p>
      </div>

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
              <div className="mb-5 h-10 w-10 rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,0.16)]" />
              <p className="text-sm leading-7 text-slate-300">{item}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}