import { motion } from 'framer-motion';

export default function Card({ children, className = '', whileHover = { y: -4 } }) {
  // TODO: Replace with advanced UI component from 21st.dev
  return (
    <motion.div
      whileHover={whileHover}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`glass-panel rounded-3xl p-6 ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}