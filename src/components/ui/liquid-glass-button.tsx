// ============================================================
// LIQUID GLASS BUTTON — src/components/ui/liquid-glass-button.tsx
//
// Single button system used across the entire portfolio.
// Built on the 21st.dev liquid glass pattern: an SVG turbulence
// displacement filter distorts the backdrop, while white inset
// box-shadows create the frosted glass rim effect.
//
// Exports:
//   LiquidButton — primary button, supports to / href / button
//   MetalButton  — available but unused; kept for reference
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
    // Press feedback (scale-feedback rule from UI/UX skill §7)
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

// ============================================================
// METAL BUTTON — available but not used in portfolio
// Six colour variants: default, primary, success, error, gold, bronze
// ============================================================
type ColorVariant = "default" | "primary" | "success" | "error" | "gold" | "bronze";

interface MetalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
}

const colorVariants: Record<
  ColorVariant,
  { outer: string; inner: string; button: string; textColor: string; textShadow: string }
> = {
  default: {
    outer:      "bg-gradient-to-b from-[#000] to-[#A0A0A0]",
    inner:      "bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",
    button:     "bg-gradient-to-b from-[#B9B9B9] to-[#969696]",
    textColor:  "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]",
  },
  primary: {
    outer:      "bg-gradient-to-b from-[#000] to-[#A0A0A0]",
    inner:      "bg-gradient-to-b from-primary via-secondary to-muted",
    button:     "bg-gradient-to-b from-primary to-primary/40",
    textColor:  "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(30_58_138_/_100%)]",
  },
  success: {
    outer:      "bg-gradient-to-b from-[#005A43] to-[#7CCB9B]",
    inner:      "bg-gradient-to-b from-[#E5F8F0] via-[#00352F] to-[#D1F0E6]",
    button:     "bg-gradient-to-b from-[#9ADBC8] to-[#3E8F7C]",
    textColor:  "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(6_78_59_/_100%)]",
  },
  error: {
    outer:      "bg-gradient-to-b from-[#5A0000] to-[#FFAEB0]",
    inner:      "bg-gradient-to-b from-[#FFDEDE] via-[#680002] to-[#FFE9E9]",
    button:     "bg-gradient-to-b from-[#F08D8F] to-[#A45253]",
    textColor:  "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(146_64_14_/_100%)]",
  },
  gold: {
    outer:      "bg-gradient-to-b from-[#917100] to-[#EAD98F]",
    inner:      "bg-gradient-to-b from-[#FFFDDD] via-[#856807] to-[#FFF1B3]",
    button:     "bg-gradient-to-b from-[#FFEBA1] to-[#9B873F]",
    textColor:  "text-[#FFFDE5]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(178_140_2_/_100%)]",
  },
  bronze: {
    outer:      "bg-gradient-to-b from-[#864813] to-[#E9B486]",
    inner:      "bg-gradient-to-b from-[#EDC5A1] via-[#5F2D01] to-[#FFDEC1]",
    button:     "bg-gradient-to-b from-[#FFE3C9] to-[#A36F3D]",
    textColor:  "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(124_45_18_/_100%)]",
  },
};

const metalButtonVariants = (
  variant: ColorVariant = "default",
  isPressed: boolean,
  isHovered: boolean,
  isTouchDevice: boolean
) => {
  const colors = colorVariants[variant];
  const ease = "all 250ms cubic-bezier(0.1, 0.4, 0.2, 1)";
  return {
    wrapper: cn("relative inline-flex transform-gpu rounded-md p-[1.25px] will-change-transform", colors.outer),
    wrapperStyle: {
      transform:       isPressed ? "translateY(2.5px) scale(0.99)" : "translateY(0) scale(1)",
      boxShadow:       isPressed ? "0 1px 2px rgba(0,0,0,0.15)" : isHovered && !isTouchDevice ? "0 4px 12px rgba(0,0,0,0.12)" : "0 3px 8px rgba(0,0,0,0.08)",
      transition:      ease,
      transformOrigin: "center center",
    },
    inner: cn("absolute inset-[1px] transform-gpu rounded-lg will-change-transform", colors.inner),
    innerStyle: {
      transition:      ease,
      transformOrigin: "center center",
      filter:          isHovered && !isPressed && !isTouchDevice ? "brightness(1.05)" : "none",
    },
    button: cn(
      "relative z-10 m-[1px] rounded-md inline-flex h-11 transform-gpu cursor-pointer items-center justify-center overflow-hidden px-6 py-2 text-sm leading-none font-semibold will-change-transform outline-none",
      colors.button, colors.textColor, colors.textShadow
    ),
    buttonStyle: {
      transform:       isPressed ? "scale(0.97)" : "scale(1)",
      transition:      ease,
      transformOrigin: "center center",
      filter:          isHovered && !isPressed && !isTouchDevice ? "brightness(1.02)" : "none",
    },
  };
};

const ShineEffect = ({ isPressed }: { isPressed: boolean }) => (
  <div className={cn("pointer-events-none absolute inset-0 z-20 overflow-hidden transition-opacity duration-300", isPressed ? "opacity-20" : "opacity-0")}>
    <div className="absolute inset-0 rounded-md bg-gradient-to-r from-transparent via-neutral-100 to-transparent" />
  </div>
);

export const MetalButton = React.forwardRef<HTMLButtonElement, MetalButtonProps>(
  ({ children, className, variant = "default", ...props }, ref) => {
    const [isPressed,      setIsPressed]      = React.useState(false);
    const [isHovered,      setIsHovered]      = React.useState(false);
    const [isTouchDevice,  setIsTouchDevice]  = React.useState(false);

    React.useEffect(() => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
    }, []);

    const v = metalButtonVariants(variant, isPressed, isHovered, isTouchDevice);
    return (
      <div className={v.wrapper} style={v.wrapperStyle}>
        <div className={v.inner} style={v.innerStyle} />
        <button
          ref={ref}
          className={cn(v.button, className)}
          style={v.buttonStyle}
          {...props}
          onMouseDown={()   => setIsPressed(true)}
          onMouseUp={()     => setIsPressed(false)}
          onMouseLeave={()  => { setIsPressed(false); setIsHovered(false); }}
          onMouseEnter={()  => { if (!isTouchDevice) setIsHovered(true); }}
          onTouchStart={()  => setIsPressed(true)}
          onTouchEnd={()    => setIsPressed(false)}
          onTouchCancel={() => setIsPressed(false)}
        >
          <ShineEffect isPressed={isPressed} />
          {children || "Button"}
          {isHovered && !isPressed && !isTouchDevice && (
            <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-t from-transparent to-white/5" />
          )}
        </button>
      </div>
    );
  }
);

MetalButton.displayName = "MetalButton";

// Legacy named exports for backward compatibility
export { liquidButtonVariants };
