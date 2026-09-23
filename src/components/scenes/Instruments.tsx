import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories, bearings } from "../../data/content";
import SceneShell from "../ui/SceneShell";

export default function Instruments({ onBack }: { onBack: () => void }) {
  const [active, setActive] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === active)!;
  const bearing = bearings.find((b) => b.id === "instruments")!;

  return (
    <SceneShell eyebrow="Bearing 120°" title="The Instruments" fragment={bearing.fragment} onBack={onBack}>
      <p className="text-cream-soft max-w-xl mb-10">A panel, not a word cloud. Turn a dial to see what it reads.</p>

      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Skill categories">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={active === cat.id}
            onClick={() => setActive(cat.id)}
            className={`focus-ring font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-md border transition-colors ${
              active === cat.id
                ? "bg-brass text-ink border-brass"
                : "border-line text-muted hover:text-cream hover:border-cream-soft/50"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div
        className="rounded-2xl border border-line bg-panel p-8 md:p-10 mb-12"
        role="tabpanel"
        aria-label={`${activeCategory.label} skills`}
      >
        <div className="flex flex-wrap gap-3">
          {activeCategory.skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              tabIndex={0}
              className="focus-ring font-mono text-xs px-3.5 py-2 rounded-full border border-line bg-ink text-cream"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat) => (
          <div key={cat.id} className="rounded-lg border border-line bg-panel/60 p-5">
            <h3 className="font-mono text-xs uppercase tracking-widest text-brass mb-3">{cat.label}</h3>
            <p className="text-sm text-muted leading-relaxed">{cat.skills.join(" · ")}</p>
          </div>
        ))}
      </div>
    </SceneShell>
  );
}
