// ============================================================
// GOOEY TEXT MORPHING — src/components/ui/gooey-text-morphing.tsx
//
// Animates between multiple strings using a "gooey" blur/opacity
// morph effect. Used on the Home page hero to cycle through:
//   "Nicolas Liway" → "Student Developer" → "Builder"
//
// How it works:
//   Two overlapping <span> elements (text1, text2) swap text content
//   while a feColorMatrix SVG filter applies the gooey threshold effect.
//   Each frame, blur and opacity values are tweened to create the morph.
//
// Props:
//   texts[]       — array of strings to cycle through
//   morphTime     — seconds to transition between texts (default: 1)
//   cooldownTime  — pause between transitions in seconds (default: 0.25)
//   className     — container class
//   textClassName — class applied to both text spans
// ============================================================

"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
}: GooeyTextProps) {
  // Refs point directly to the two overlapping text spans
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (!texts.length) return undefined;

    // requestAnimationFrame ID — stored so we can cancel on unmount
    let animationFrameId = 0;
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    // --- setMorph: applies blur + opacity to both spans for a given fraction ---
    // fraction 0 = fully showing text1, fraction 1 = fully showing text2
    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        fraction = 1 - fraction;
        text1Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text1Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      }
    };

    // --- doCooldown: reset to fully visible text2, no blur ---
    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    // --- doMorph: advance the morph animation one step ---
    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;
      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }
      setMorph(fraction);
    };

    // --- Main animation loop (runs every frame) ---
    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;
      cooldown -= dt;

      if (cooldown <= 0) {
        // Advance to next text string after cooldown expires
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex % texts.length];
            text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();

    // Cancel the animation loop when this component unmounts (prevents memory leaks)
    return () => cancelAnimationFrame(animationFrameId);
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative", className)}>
      {/* SVG filter that creates the gooey threshold effect.
          The feColorMatrix boosts the alpha channel so soft blur
          edges snap into crisp merged shapes. */}
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      {/* Two overlapping spans — the filter is applied to their parent.
          text1 fades out while text2 fades in (and vice versa). */}
      <div className="flex items-center justify-center" style={{ filter: "url(#threshold)" }}>
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center text-5xl font-semibold tracking-tight text-transparent md:text-7xl lg:text-8xl font-display",
            "bg-gradient-to-br from-cyan-200 via-white to-purple-300 bg-clip-text",
            textClassName,
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center text-5xl font-semibold tracking-tight text-transparent md:text-7xl lg:text-8xl font-display",
            "bg-gradient-to-br from-cyan-200 via-white to-purple-300 bg-clip-text",
            textClassName,
          )}
        />
      </div>
    </div>
  );
}
