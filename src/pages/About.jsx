// ============================================================
// ABOUT PAGE — src/pages/About.jsx
// Route: /about
//
// Structure:
//   1. HeroBlock  — full-screen intro (no CTA buttons)
//   2. SectionWrapper with four scroll-animated sections:
//        - Bio card       (PLACEHOLDER — fill in your story)
//        - Skills card    (pill badges from portfolio.js)
//        - Interests card (bullet list from portfolio.js)
//        - Passions grid  (cards from portfolio.js)
//
// Scroll animations use GSAP ScrollTrigger (scrub-based) so
// each section cinématically reveals as you scroll down.
// Respects prefers-reduced-motion — animations are skipped
// entirely when the OS motion setting is reduced.
// ============================================================

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Card from '../components/Card';
import SectionWrapper from '../components/SectionWrapper';
import { interests, passions, skills } from '../data/portfolio';
import { HeroBlock } from '../components/ui/hero-block-shadcnui';
import { pageHeroes } from '../data/page-heroes';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const wrapperRef    = useRef(null);
  const bioRef        = useRef(null);
  const skillsRef     = useRef(null);
  const interestsRef  = useRef(null);
  const passionsTitleRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      const reveal = (target, extra = {}) =>
        gsap.fromTo(
          target,
          { y: 55, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: target,
              start: 'top 88%',
              end: 'top 48%',
              scrub: 1,
            },
            ...extra,
          }
        );

      reveal(bioRef.current);
      reveal(skillsRef.current);
      reveal(interestsRef.current);
      reveal(passionsTitleRef.current, { scrollTrigger: { trigger: passionsTitleRef.current, start: 'top 88%', end: 'top 55%', scrub: 1 } });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Full-screen hero — no CTA buttons */}
      <HeroBlock {...pageHeroes.about} />

      <div ref={wrapperRef}>
        <SectionWrapper>

          {/* ── Bio ─────────────────────────────────────────── */}
          <div ref={bioRef} className="mb-10">
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-white">About Me</h3>
              {/* PLACEHOLDER: Replace with 2–3 sentences about yourself */}
              <p className="text-sm leading-7 text-slate-300">
                My name is Nicolas Liway Avendano, and I am a first-generation Venezuelan-Mexican American from Weston, 
                Florida studying Computer Engineering at the University of Florida (UF). From a young age, I have had a 
                strong passion for creating and bringing ideas to life.

                I first explored this passion through LEGO and VEX Robotics, as well as early coding classes. As I grew older, 
                I pursued more advanced computer science and engineering courses, applying my skills to coding projects, physics labs, and hands-on engineering challenges.
                Currently at UF, I am developing skills in coding, engineering, teamwork, and leadership through design teams, coursework, 
                and organizations that allow me to apply technical knowledge, collaborate with peers, and tackle real-world challenges.
                
                As I continue on this path, I want to contribute to the creation of technology that can change the world. 
                I am always excited to connect with others that share the same passion for innovation and problem-solving.
              </p>
            </Card>
          </div>

          {/* ── Skills + Interests ───────────────────────────── */}
          <div className="mb-10 grid gap-6 md:grid-cols-2">
            <div ref={skillsRef}>
              <Card>
                <h3 className="mb-4 text-xl font-semibold text-white">Skills</h3>
                {/* PLACEHOLDER: Update skills[] in src/data/portfolio.js */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/20 hover:text-cyan-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </div>

            <div ref={interestsRef}>
              <Card>
                <h3 className="mb-4 text-xl font-semibold text-white">Interests</h3>
                {/* PLACEHOLDER: Update interests[] in src/data/portfolio.js */}
                <ul className="space-y-3 text-sm leading-7 text-slate-300">
                  {interests.map((interest) => (
                    <li key={interest}>• {interest}</li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>

          {/* ── Passions ─────────────────────────────────────── */}
          <div>
            <h2 ref={passionsTitleRef} className="section-title mb-8">Passions</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {passions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: '0px 0px -80px 0px' }}
                  transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Card>
                    <div className="mb-5 h-10 w-10 rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,0.16)]" />
                    <h4 className="mb-3 font-semibold text-white">{item.title}</h4>
                    <p className="text-sm leading-7 text-slate-300">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

        </SectionWrapper>
      </div>
    </>
  );
}
