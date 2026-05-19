export default function SectionWrapper({ children, className = '' }) {
  // TODO: Replace with advanced UI component from 21st.dev
  return <section className={`mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 ${className}`.trim()}>{children}</section>;
}