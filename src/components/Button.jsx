import { LiquidButton } from './ui/liquid-glass-button.tsx';

export default function Button({ to, href, variant = 'primary', children, className = '', size = 'lg' }) {
  const tone = variant === 'primary' ? 'text-white' : 'text-slate-200';
  const merged = `${tone} ${className}`.trim();

  // TODO: Replace with advanced UI component from 21st.dev
  return (
    <LiquidButton href={href} to={to} variant="default" size={size} className={merged}>
      {children}
    </LiquidButton>
  );
}