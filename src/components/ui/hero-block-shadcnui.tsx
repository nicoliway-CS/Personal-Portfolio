// ============================================================
// HERO BLOCK — src/components/ui/hero-block-shadcnui.tsx
//
// Full-screen hero section for every non-home page.
// Background is transparent — the global starfield/glow from
// App.jsx shows through.
//
// CTA buttons use LiquidButton directly (same component as the
// rest of the site), so all buttons are visually consistent.
//   primaryAction.variant   → "primary" (default)
//   secondaryAction.variant → "secondary" (default)
// ============================================================

import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';
import type { ComponentType } from 'react';

import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { cn } from '@/lib/utils';

type IconComponent = ComponentType<{ className?: string }>;

type HeroAction = {
  label: string;
  href?: string;
  to?: string;
  icon?: IconComponent;
  variant?: 'primary' | 'secondary' | 'ghost';
};

type HeroSocial = {
  icon: IconComponent;
  href: string;
  label: string;
};

type HeroBlockProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  socials?: HeroSocial[];
  className?: string;
};

export function HeroBlock({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  socials = [],
  className,
}: HeroBlockProps) {
  return (
    // Transparent — global App.jsx starfield/glow shows through
    <section className={cn('relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8', className)}>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          {/* Eyebrow — glass pill badge */}
          {eyebrow ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] px-4 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/90">
                {eyebrow}
              </span>
            </motion.div>
          ) : null}

          {/* Page headline — text-balance lets long titles wrap evenly */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-5 font-display text-4xl font-bold tracking-tight md:text-6xl bg-gradient-to-br from-white via-cyan-100 to-violet-200 bg-clip-text text-transparent text-balance"
          >
            {title}
          </motion.h1>

          {/* Decorative divider line between headline and description */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.38, duration: 0.5, ease: 'easeOut' }}
            className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mx-auto mb-8 max-w-2xl text-base text-slate-300 md:text-xl leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA buttons — LiquidButton with primary/secondary variants */}
          {(primaryAction || secondaryAction) ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-12 flex flex-wrap justify-center gap-4"
            >
              {primaryAction ? (
                <LiquidButton
                  to={primaryAction.to}
                  href={primaryAction.href}
                  variant={primaryAction.variant ?? 'primary'}
                  size="lg"
                >
                  {primaryAction.icon
                    ? <primaryAction.icon className="h-4 w-4" />
                    : <Mail className="h-4 w-4" />}
                  {primaryAction.label}
                </LiquidButton>
              ) : null}

              {secondaryAction ? (
                <LiquidButton
                  to={secondaryAction.to}
                  href={secondaryAction.href}
                  variant={secondaryAction.variant ?? 'secondary'}
                  size="lg"
                >
                  {secondaryAction.label}
                  {secondaryAction.icon
                    ? <secondaryAction.icon className="h-4 w-4" />
                    : <ArrowDown className="h-4 w-4" />}
                </LiquidButton>
              ) : null}
            </motion.div>
          ) : null}

          {/* Social icon links */}
          {socials.length ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex justify-center gap-4"
            >
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/8 text-white transition-colors hover:bg-cyan-400 hover:text-slate-950"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          ) : null}
        </motion.div>
      </div>

      {/* Bouncing scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.5, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="h-6 w-6 text-slate-400" />
      </motion.div>
    </section>
  );
}
