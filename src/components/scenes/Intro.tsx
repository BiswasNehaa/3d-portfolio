import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { intro } from "../../data/content";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useWebGLSupport } from "../../hooks/useWebGLSupport";

const MachineArrival = lazy(() => import("../three/MachineArrival"));

export default function Intro({ onEnter }: { onEnter: () => void }) {
  const reducedMotion = useReducedMotion();
  const webglSupported = useWebGLSupport();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream bg-blueprint px-5">
      {webglSupported && (
        <div className="absolute inset-0" aria-hidden="true">
          <Suspense fallback={null}>
            <MachineArrival interactive={!reducedMotion} />
          </Suspense>
        </div>
      )}
      {!webglSupported && (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(37,64,255,0.12),transparent_55%)]"
          aria-hidden="true"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-cream/10 via-cream/40 to-cream pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-2xl text-center px-6 py-10 sm:px-10 sm:py-12 rounded-[2rem] bg-cream/75 backdrop-blur-[2px]">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-blue mb-6"
        >
          {intro.byline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.02] mb-10"
        >
          {intro.title}
        </motion.h1>

        <div className="space-y-2 mb-12">
          {intro.lines.map((line, i) => (
            <motion.p
              key={line}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.18 }}
              className="font-display italic text-lg md:text-xl text-ink-soft"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={onEnter}
            className="focus-ring group relative px-8 py-4 rounded-full bg-ink text-cream font-mono text-sm uppercase tracking-widest hover:bg-blue transition-colors"
          >
            {intro.cta}
          </button>
          <button
            onClick={onEnter}
            className="focus-ring font-mono text-xs uppercase tracking-widest text-muted hover:text-ink underline underline-offset-4"
          >
            {intro.skip}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
