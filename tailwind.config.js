/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 20px 80px rgba(2, 6, 23, 0.35)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.22), transparent 38%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.18), transparent 26%), radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.15), transparent 24%)',
      },
    },
  },
  plugins: [],
};