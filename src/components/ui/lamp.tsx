"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-transparent z-0",
        className,
      )}
    >
      <div
        className="relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center"
        style={{
          maskImage:
            "radial-gradient(ellipse 68% 52% at 50% 28%, black 0%, transparent 60%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 68% 52% at 50% 28%, black 0%, transparent 60%)",
        }}
      >

        {/*
          clipPath: inset() reveals each element from the center outward without
          touching layout dimensions. Because clipPath is not a CSS transform
          property, Framer Motion animates it independently and never overwrites
          the transform value — so every Tailwind translate/scale class is intact.

          Left beam: inset clips from the right (center of page) outward to the left.
          Right beam: inset clips from the left (center of page) outward to the right.
          Lamp line: inset clips symmetrically from both sides, drawing center-out.
          Glows:     opacity-only so their blur edges never create a hard clip line.
        */}

        {/* Left conic beam — opacity fade only. clipPath on a conic gradient
            creates a hard moving edge across the bright center, which looks
            like a beam sliding rather than light spreading. */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        />

        {/* Right conic beam */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 40%, transparent 100%)",
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        />

        {/* Wide ambient bloom — fades in; scale-125 is CSS-only, no transform conflict */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.9, ease: "easeOut" }}
          className="absolute inset-auto z-30 h-44 w-[30rem] -translate-y-4 scale-125 rounded-full bg-cyan-500/20 blur-3xl"
        />

        {/* Tight inner glow — fades in; -translate-y-24 and scale-125 are CSS-only */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-24 scale-125 rounded-full bg-cyan-400/55 blur-2xl"
        />

        {/* Lamp line — draws from center outward; -translate-y-28 is CSS-only */}
        <motion.div
          initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-28 bg-cyan-400"
        />

      </div>

      {/* Content — outside the scaled layer, always full opacity */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
