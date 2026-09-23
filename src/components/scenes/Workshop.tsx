import { motion } from "framer-motion";
import { projects, bearings } from "../../data/content";
import SceneShell from "../ui/SceneShell";
import type { SceneId } from "../../state/useScene";

const accentClasses = {
  brass: { border: "hover:border-brass", text: "text-brass", chip: "bg-brass text-ink" },
  amber: { border: "hover:border-amber", text: "text-amber", chip: "bg-amber text-ink" },
  teal: { border: "hover:border-teal", text: "text-teal", chip: "bg-teal text-ink" },
};

export default function Workshop({ go, onBack }: { go: (s: SceneId) => void; onBack: () => void }) {
  const bearing = bearings.find((b) => b.id === "workshop")!;

  return (
    <SceneShell eyebrow="Bearing 060°" title="The Workshop" fragment={bearing.fragment} onBack={onBack}>
      <p className="text-cream-soft max-w-xl mb-12">
        Three systems, each solving a different problem. Step into one to see how it was charted, built,
        and corrected.
      </p>

      <div className="flex flex-col gap-6">
        {projects.map((project, i) => {
          const accent = accentClasses[project.accent];
          return (
            <motion.button
              key={project.id}
              onClick={() => go(`project:${project.id}`)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`focus-ring group text-left rounded-2xl border border-line bg-panel p-7 md:p-9 transition-colors ${accent.border}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                <span className={`font-mono text-xs uppercase tracking-widest ${accent.text}`}>
                  Chart {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full ${accent.chip}`}>
                  {project.tagline}
                </span>
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl mb-2 text-cream">{project.chartName}</h2>
              <p className="text-cream-soft italic mb-4">{project.fragment}</p>
              <p className="text-sm text-muted max-w-2xl">{project.description}</p>
              <span className={`mt-5 inline-block font-mono text-xs ${accent.text} group-hover:underline`}>
                unfold the chart &rarr;
              </span>
            </motion.button>
          );
        })}
      </div>
    </SceneShell>
  );
}
