import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const [active, setActive] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === active)!;

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-void bg-grid">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="02 // Skills" title="A Knowledge Graph, Not a Resume List." />

        {/* Category tabs */}
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === cat.id}
              onClick={() => setActive(cat.id)}
              className={`focus-ring font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-md border transition-colors ${
                active === cat.id
                  ? "border-current text-void"
                  : "border-line text-muted hover:text-fg hover:border-fg/40"
              }`}
              style={active === cat.id ? { backgroundColor: cat.color, borderColor: cat.color } : undefined}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Graph view (md+) */}
        <div
          className="hidden md:block relative rounded-xl border border-line bg-panel/40 p-10 min-h-[340px]"
          role="tabpanel"
          aria-label={`${activeCategory.label} skills`}
        >
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div
              className="font-display font-semibold text-lg px-6 py-4 rounded-full border-2 flex items-center justify-center text-center"
              style={{ borderColor: activeCategory.color, color: activeCategory.color }}
            >
              {activeCategory.label}
            </div>
            {activeCategory.skills.map((skill, i) => (
              <NodeChip key={skill} label={skill} color={activeCategory.color} delay={i * 0.03} />
            ))}
          </div>
        </div>

        {/* Accessible list view (always available, primary on mobile) */}
        <div className="md:hidden">
          <ul className="flex flex-wrap gap-2" aria-label={`${activeCategory.label} skills`}>
            {activeCategory.skills.map((skill) => (
              <li
                key={skill}
                className="font-mono text-xs px-3 py-2 rounded-md border border-line text-fg/90"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Full readable list for all categories, screen-reader + reference friendly */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.id} className="rounded-lg border border-line bg-panel/30 p-5">
              <h3 className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: cat.color }}>
                {cat.label}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{cat.skills.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NodeChip({ label, color, delay }: { label: string; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.08 }}
      tabIndex={0}
      role="group"
      aria-label={label}
      className="focus-ring font-mono text-xs px-3.5 py-2 rounded-full border bg-navy/60 text-fg/90 cursor-default"
      style={{ borderColor: `${color}66` }}
    >
      {label}
    </motion.div>
  );
}
