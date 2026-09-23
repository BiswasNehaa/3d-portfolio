import { motion } from "framer-motion";
import { projects } from "../../data/content";
import { rooms } from "../../data/content";
import SceneShell from "../ui/SceneShell";
import type { SceneId } from "../../state/useScene";

const accentClasses = {
  blue: { border: "hover:border-blue", text: "text-blue", chip: "bg-blue text-cream" },
  red: { border: "hover:border-red", text: "text-red", chip: "bg-red text-cream" },
  ink: { border: "hover:border-ink", text: "text-ink", chip: "bg-ink text-cream" },
};

export default function Workshop({ go, onBack }: { go: (s: SceneId) => void; onBack: () => void }) {
  const room = rooms.find((r) => r.id === "workshop")!;

  return (
    <SceneShell eyebrow="Room 02" title="The Workshop" fragment={room.fragment} onBack={onBack}>
      <p className="text-ink-soft max-w-xl mb-12">
        Three machines, three problems. Each was built, broken, and rebuilt until it worked. Step into
        one to see how it&rsquo;s put together.
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
              className={`focus-ring group text-left rounded-2xl border border-line bg-paper/70 p-7 md:p-9 transition-colors ${accent.border}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-3">
                <span className={`font-mono text-xs uppercase tracking-widest ${accent.text}`}>
                  World {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full ${accent.chip}`}>
                  {project.tagline}
                </span>
              </div>
              <h2 className="font-display font-semibold text-3xl md:text-4xl mb-2">{project.worldName}</h2>
              <p className="text-ink-soft italic mb-4">{project.fragment}</p>
              <p className="text-sm text-muted max-w-2xl">{project.description}</p>
              <span className={`mt-5 inline-block font-mono text-xs ${accent.text} group-hover:underline`}>
                step inside &rarr;
              </span>
            </motion.button>
          );
        })}
      </div>
    </SceneShell>
  );
}
