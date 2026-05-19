import { NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data/portfolio';
import { LiquidButton } from './ui/liquid-glass-button.tsx';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {/* TODO: Replace with advanced UI component from 21st.dev */}
      <nav className="glass-panel flex flex-wrap items-center justify-between gap-3 rounded-full px-4 py-3 sm:px-5">
        <NavLink to="/" className="text-sm font-semibold tracking-[0.22em] text-white uppercase">
          Nicolas Liway
        </NavLink>

        <div className="flex flex-wrap items-center justify-end gap-2 text-sm">
          {navLinks.map((link) => (
            <LiquidButton
              key={link.to}
              variant="default"
              size="sm"
              to={link.to}
              className={[
                'rounded-full px-3 py-2 transition duration-200 hover:text-white',
                location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to))
                  ? 'text-white'
                  : 'text-slate-300',
              ].join(' ')}
            >
              {link.label}
            </LiquidButton>
          ))}
        </div>
      </nav>
    </header>
  );
}