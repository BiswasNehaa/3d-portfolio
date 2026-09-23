import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { intro, profile } from "../../data/content";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useWebGLSupport } from "../../hooks/useWebGLSupport";
import KineticText from "../ui/KineticText";
import MagneticButton from "../ui/MagneticButton";

const Armillary = lazy(() => import("../three/Armillary"));

export default function Intro({ onEnter }: { onEnter: () => void }) {
  const reducedMotion = useReducedMotion();
  const webglSupported = useWebGLSupport();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-ink bg-chart">
      {webglSupported && (
        <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-1/3" aria-hidden="true">
          <Suspense fallback={null}>
            <Armillary interactive={!reducedMotion} />
          </Suspense>
        </div>
      )}
      {!webglSupported && (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(201,162,75,0.16),transparent_55%)]"
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-0 vignette pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-10 w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-brass mb-6 flex items-center gap-2"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-brass-bright animate-pulse" aria-hidden="true" />
          {intro.status}
        </motion.p>

        <h1 className="font-display font-semibold leading-[0.98] mb-3">
          <KineticText
            text={profile.name.toUpperCase()}
            className="w-full text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream"
            delay={0.1}
          />
        </h1>

        <h2 className="font-display italic text-2xl md:text-3xl text-brass-bright mb-1">
          <KineticText text={profile.role.toUpperCase()} delay={0.55} stagger={0.02} />
        </h2>
        <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted mb-8">{profile.roleLine}</p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="max-w-lg mb-10"
        >
          {intro.lines.map((line) => (
            <p key={line} className="text-cream-soft leading-relaxed mb-2">
              {line}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="flex flex-wrap items-center gap-5"
        >
          <MagneticButton
            onClick={onEnter}
            className="focus-ring px-8 py-4 rounded-full bg-brass text-ink font-mono text-sm uppercase tracking-widest hover:bg-brass-bright transition-colors"
          >
            {intro.cta}
          </MagneticButton>
          <button
            onClick={onEnter}
            className="focus-ring font-mono text-xs uppercase tracking-widest text-muted hover:text-cream underline underline-offset-4"
          >
            {intro.skip}
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={onEnter}
        className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted hover:text-brass-bright flex flex-col items-center gap-2"
        aria-label="Enter the chart"
        animate={reducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Descend</span>
        <span className="w-px h-8 bg-current" />
      </motion.button>
    </section>
  );
}
