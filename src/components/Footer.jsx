import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { socialLinks } from '../data/portfolio';

const iconButtonClasses =
  'liquid-glass-button liquid-glass-button--icon inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)]';

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      {/* TODO: Replace with advanced UI component from 21st.dev */}
      <div className="glass-panel flex flex-col items-center justify-between gap-4 rounded-3xl px-5 py-4 sm:flex-row">
        <p className="text-sm text-slate-400">Built for Nicolas Liway.</p>
        <div className="flex items-center gap-3">
          <a className={iconButtonClasses} href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <FaGithub className="h-5 w-5" />
          </a>
          <a className={iconButtonClasses} href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <FaLinkedinIn className="h-5 w-5" />
          </a>
          <a className={iconButtonClasses} href={socialLinks.email} aria-label="Email Nicolas">
            <MdEmail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}