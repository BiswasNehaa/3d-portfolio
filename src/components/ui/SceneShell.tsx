import type { ReactNode } from "react";
import { motion } from "framer-motion";

export default function SceneShell({
  eyebrow,
  title,
  fragment,
  onBack,
  backLabel = "Back to the chart",
  children,
}: {
  eyebrow: string;
  title: string;
  fragment: string;
  onBack: () => void;
  backLabel?: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-28 pb-24 px-5 md:px-8 bg-ink bg-chart"
    >
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="focus-ring font-mono text-xs uppercase tracking-widest text-muted hover:text-brass-bright transition-colors mb-8 inline-flex items-center gap-2"
        >
          &larr; {backLabel}
        </button>

        <p className="font-mono text-xs uppercase tracking-widest text-brass mb-3">{eyebrow}</p>
        <h1 className="font-display font-semibold text-4xl md:text-6xl leading-[1.02] mb-4 text-cream">{title}</h1>
        <p className="font-display italic text-lg md:text-xl text-cream-soft mb-12 max-w-xl">{fragment}</p>

        {children}
      </div>
    </motion.section>
  );
}
