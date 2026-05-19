import { motion } from 'framer-motion';
import Button from '../components/Button';
import SectionWrapper from '../components/SectionWrapper';
import { quickNav } from '../data/portfolio';

export default function Home() {
  return (
    <SectionWrapper className="flex min-h-[calc(100vh-220px)] items-center justify-center py-20">
      {/* TODO: Replace with advanced UI component from 21st.dev */}
      <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 px-6 py-20 text-center shadow-glass backdrop-blur-xl sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mx-auto flex max-w-3xl flex-col items-center gap-6"
        >
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-cyan-200/80">Student Developer</p>
          <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Nicolas Liway
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
            Developer · Student · Builder
          </p>
          <p className="max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            PLACEHOLDER: Replace with a short, compelling introduction that explains what Nicolas builds,
            what he cares about, and the kind of work he wants to do next.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {quickNav.map((item, index) => (
              <Button key={item.to} to={item.to} variant={index === 0 ? 'primary' : 'secondary'}>
                {item.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.08),transparent_26%)]" />
      </div>
    </SectionWrapper>
  );
}