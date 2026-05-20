// ============================================================
// CARD — src/components/Card.jsx
//
// A glassmorphism card base used across all content pages
// (About, Projects, Experiences, Leadership, Passions).
//
// The card uses the .glass-panel CSS utility (defined in index.css)
// which applies backdrop-blur, a semi-transparent white background,
// and a subtle border — the frosted glass look.
//
// Framer Motion adds a slight upward lift on hover (whileHover)
// to give the card a tactile feel. You can disable this by passing
// whileHover={{}} as a prop.
//
// TODO: Replace with a polished card component from 21st.dev
//       once you have the design prompt ready.
// ============================================================

import { motion } from 'framer-motion';

export default function Card({ children, className = '', whileHover = { y: -4 } }) {
  return (
    <motion.div
      whileHover={whileHover}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      // glass-panel = blurred semi-transparent bg + border (index.css)
      className={`glass-panel rounded-3xl p-6 transition-[border-color,box-shadow] duration-300 hover:border-cyan-500/20 hover:shadow-[0_0_32px_rgba(34,211,238,0.07)] ${className}`.trim()}
    >
      {children}
    </motion.div>
  );
}
