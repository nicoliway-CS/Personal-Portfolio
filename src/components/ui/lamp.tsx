// ============================================================
// LAMP CONTAINER — src/components/ui/lamp.tsx
//
// Creates the dramatic "lamp sweep" lighting effect used on the
// Home page hero. Two conic gradients fan outward from the center
// top, giving the impression of a spotlight shining down.
//
// Usage: wrap content in <LampContainer> and it will appear
// centered below the lamp beams.
//
// The conic gradients use Framer Motion to animate from narrow
// to wide on mount (whileInView).
//
// Exports: LampContainer (used by Home.jsx), LampDemo (unused demo)
// ============================================================

"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// LampDemo — a standalone demo component (not used in the portfolio)
export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

// LampContainer — the main export used by Home.jsx
// Children are rendered centered below the lamp beams.
export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-950 z-0",
        className,
      )}
    >
      {/* --- Lamp beam layer (scale-y-125 stretches the beams vertically) --- */}
      <div className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center">

        {/* Left beam: conic gradient from center-top pointing left */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          {/* Mask fades out the bottom/left edge so the beam looks natural */}
          <div className="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute bottom-0 left-0 z-20 h-[100%] w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>

        {/* Right beam: conic gradient from center-top pointing right */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          {/* Mask fades out the bottom/right edge */}
          <div className="absolute bottom-0 right-0 z-20 h-[100%] w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute bottom-0 right-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>

        {/* Blur overlay to soften the beam edge */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

        {/* Central glow — wide soft cyan circle at the lamp focal point */}
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>

        {/* Tighter inner glow — animates from narrow to wide */}
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>

        {/* Thin bright line at the lamp's light source */}
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        ></motion.div>

        {/* Dark overlay that hides the beam above the lamp line */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
      </div>

      {/* --- Content slot — translated up to sit inside the lamp beam --- */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
