// ============================================================
// LIQUID GLASS BUTTON — src/components/ui/liquid-glass-button.tsx
//
// The single button system used across the entire portfolio.
// Built on the 21st.dev liquid glass pattern: an SVG turbulence
// displacement filter distorts the backdrop, while white inset
// box-shadows create the frosted glass rim effect.
//
// Exports:
//   LiquidButton — renders as <Link> (to=), <a> (href=), or <button>
//
// Variants:
//   primary   — cyan-tinted CTA (e.g. "View Projects")
//   secondary — subtle glass CTA (e.g. "See More")
//   nav       — navbar inactive link
//   navActive — navbar active/current-page link
//   ghost     — minimal, no border
//
// Sizes:
//   sm      — 36px  (navbar links)
//   default — 44px  (meets 44px touch-target minimum)
//   lg      — 48px  (hero CTA buttons)
//   xl      — 56px  (large hero CTAs)
//   icon    — 44x44 (icon-only circular)
// ============================================================

"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

// ============================================================
// SVG GLASS FILTER
// feTurbulence generates fractal noise → feDisplacementMap
// warps the SourceGraphic → feGaussianBlur softens the result.
// Applied via CSS backdropFilter: url("#liquid-glass-filter").
// ============================================================
function GlassFilter() {
  return (
    <svg className="hidden" aria-hidden="true">
      <defs>
        <filter
          id="liquid-glass-filter"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04 0.04"
            numOctaves="1"
            seed="3"
            result="turbulence"
          />
          <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="blurredNoise"
            scale="55"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="3" result="finalBlur" />
          <feComposite in="finalBlur" in2="finalBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

// ============================================================
// GLASS RIM SHADOWS
// White inset box-shadows on a dark background create the
// frosted glass edge. Primary/navActive get a cyan outer glow.
// ============================================================
const RIM_BASE =
  "shadow-[0_0_8px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.14),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.08),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.60),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.40),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.40),inset_0_0_6px_6px_rgba(255,255,255,0.08),inset_0_0_2px_2px_rgba(255,255,255,0.04),0_0_18px_rgba(0,0,0,0.22)]";

const RIM_CYAN =
  "shadow-[0_0_8px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.14),inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.08),inset_-3px_-3px_0.5px_-3.5px_rgba(255,255,255,0.60),inset_1px_1px_1px_-0.5px_rgba(255,255,255,0.40),inset_-1px_-1px_1px_-0.5px_rgba(255,255,255,0.40),inset_0_0_6px_6px_rgba(255,255,255,0.08),inset_0_0_2px_2px_rgba(255,255,255,0.04),0_0_24px_rgba(34,211,238,0.16)]";

// ============================================================
// CVA VARIANTS
// Controls border, background tint, text colour, and hover.
// The glass rim shadow lives on the inner absolute div, not here.
// ============================================================
const liquidButtonVariants = cva(
  [
    // Layout
    "relative inline-flex items-center justify-center gap-2 cursor-pointer",
    "whitespace-nowrap font-medium rounded-full select-none",
    // Transition — transform + colors only (no layout reflow)
    "transition-[transform,border-color,background-color,color] duration-200 ease-out",
    // Focus ring
    "outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 focus-visible:ring-offset-1 focus-visible:ring-offset-transparent",
    // Disabled
    "disabled:pointer-events-none disabled:opacity-50",
    // SVG children
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
    // Press feedback
    "active:scale-[0.96]",
    // Reduce tap delay on mobile
    "[touch-action:manipulation]",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary CTA — cyan tint, stands out from secondary
        primary:
          "text-sm border border-cyan-400/25 bg-cyan-500/[0.07] text-white hover:border-cyan-400/40 hover:bg-cyan-500/[0.12]",
        // Secondary CTA — white glass, visually subordinate to primary
        secondary:
          "text-sm border border-white/10 bg-white/[0.04] text-slate-100 hover:border-white/20 hover:bg-white/[0.07] hover:text-white",
        // Nav inactive link
        nav:
          "text-sm border border-transparent bg-transparent text-slate-300 hover:bg-white/[0.06] hover:text-white",
        // Nav active/current-page link — cyan highlight
        navActive:
          "text-sm border border-cyan-300/28 bg-cyan-500/[0.08] text-white",
        // Ghost — no border, no bg, minimal
        ghost:
          "text-sm border border-transparent bg-transparent text-slate-400 hover:text-slate-100 hover:bg-white/[0.04]",
      },
      size: {
        sm:      "h-9 px-3.5",   // 36px — navbar links
        default: "h-11 px-5",    // 44px — meets 44pt touch-target minimum
        lg:      "h-12 px-7",    // 48px — hero CTAs
        xl:      "h-14 px-8 text-base", // 56px — large hero CTAs
        icon:    "size-11",      // 44×44 — icon-only
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "default",
    },
  }
);

// ============================================================
// LIQUID BUTTON COMPONENT
// ============================================================
type LiquidButtonProps = Omit<React.ComponentProps<"button">, "ref"> &
  VariantProps<typeof liquidButtonVariants> & {
    href?: string; // external link → <a target="_blank">
    to?: string;   // internal route → React Router <Link>
  };

export function LiquidButton({
  className,
  variant = "secondary",
  size = "default",
  href,
  to,
  children,
  ...props
}: LiquidButtonProps) {
  const classes = cn(liquidButtonVariants({ variant, size, className }));

  // Nav buttons: glass rim only, no backdrop distortion (too noisy at small size)
  const isNav = variant === "nav" || variant === "navActive";
  // Primary/navActive get cyan outer glow on rim
  const rimClass = cn(
    "pointer-events-none absolute inset-0 rounded-full transition-shadow duration-200",
    variant === "primary" || variant === "navActive" ? RIM_CYAN : RIM_BASE
  );

  const innerContent = (
    <>
      {/* Glass rim — white inset shadows create the frosted edge */}
      <div aria-hidden="true" className={rimClass} />

      {/* Backdrop glass distortion — SVG turbulence warps the site bg */}
      {!isNav && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 isolate -z-10 overflow-hidden rounded-full"
          style={{ backdropFilter: 'url("#liquid-glass-filter")' }}
        />
      )}

      {/* Content — z-10 ensures it sits above both inner layers */}
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>

      {/* SVG filter definition — hidden, referenced by backdropFilter above */}
      {!isNav && <GlassFilter />}
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noreferrer"
        {...(props as object)}
      >
        {innerContent}
      </a>
    );
  }

  if (to) {
    return (
      <Link className={classes} to={to} {...(props as object)}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {innerContent}
    </button>
  );
}
