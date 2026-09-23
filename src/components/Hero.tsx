import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { useWebGLSupport } from "../hooks/useWebGLSupport";

const NeuralCore = lazy(() => import("./three/NeuralCore"));

export default function Hero() {
  const reducedMotion = useReducedMotion();
  const webglSupported = useWebGLSupport();
  const showScene = webglSupported;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-void bg-grid"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.14),transparent_60%)]" />

      {showScene && (
        <div className="absolute inset-0" aria-hidden="true">
          <Suspense fallback={null}>
            <NeuralCore interactive={!reducedMotion} />
          </Suspense>
        </div>
      )}

      {!showScene && (
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.25),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(127,223,255,0.2),transparent_45%)]"
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 w-full pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs md:text-sm text-ice/90 tracking-widest uppercase mb-6 flex items-center gap-2"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-ice animate-pulse" aria-hidden="true" />
          {profile.status}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display font-semibold leading-[0.98] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {profile.name.toUpperCase()}
          <br />
          <span className="text-gradient">{profile.role.toUpperCase()}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-2xl md:text-3xl mt-5 text-fg/90"
        >
          Building intelligent systems.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-xl text-muted text-base md:text-lg leading-relaxed"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="focus-ring px-6 py-3 rounded-md bg-violet text-white font-medium hover:bg-violet/85 transition-colors"
          >
            Explore My Work
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring px-6 py-3 rounded-md border border-line text-fg hover:border-ice hover:text-ice transition-colors"
          >
            View GitHub
          </a>
          <a
            href="#contact"
            className="focus-ring px-6 py-3 rounded-md text-muted hover:text-fg font-mono text-sm transition-colors"
          >
            Let&rsquo;s Connect &rarr;
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="focus-ring absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted hover:text-ice flex flex-col items-center gap-2"
        aria-label="Scroll to About section"
        animate={reducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <span className="w-px h-8 bg-current" />
      </motion.a>
    </section>
  );
}
