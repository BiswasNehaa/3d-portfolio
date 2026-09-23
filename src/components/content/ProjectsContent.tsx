import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/content";

export default function ProjectsContent() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const project = projects.find((p) => p.id === activeId)!;

  return (
    <div>
      <h1 className="font-display font-semibold text-4xl mb-2">The Studio</h1>
      <p className="text-charcoal-deep/70 mb-6">Three systems, built and rebuilt until they worked.</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => setActiveId(p.id)}
            className={`focus-ring font-mono text-[11px] uppercase tracking-widest px-3.5 py-2 rounded-full border transition-colors ${
              activeId === p.id
                ? "bg-charcoal-deep text-ivory border-charcoal-deep"
                : "border-charcoal-deep/20 text-charcoal-deep/60 hover:border-charcoal-deep/50"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <motion.div key={project.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
        <h2 className="font-display font-semibold text-2xl mb-1">{project.title}</h2>
        <p className="font-mono text-xs uppercase tracking-widest text-orange mb-4">{project.tagline}</p>
        <p className="text-charcoal-deep/80 leading-relaxed mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-3 mb-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring px-4 py-2 rounded-full border border-charcoal-deep/25 text-xs font-mono uppercase tracking-wider hover:border-charcoal-deep"
            >
              View on GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="focus-ring px-4 py-2 rounded-full bg-cobalt text-ivory text-xs font-mono uppercase tracking-wider hover:bg-cobalt-deep"
            >
              Live Demo
            </a>
          )}
        </div>

        {project.stages && (
          <div className="mb-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/50 mb-3">How it works</p>
            <div className="flex flex-wrap items-center gap-2">
              {project.stages.map((s, i) => (
                <div key={s} className="flex items-center gap-2">
                  <span className="font-mono text-xs px-3 py-1.5 rounded-md bg-cream border border-charcoal-deep/10">
                    {s}
                  </span>
                  {i < project.stages!.length - 1 && <span className="text-charcoal-deep/30">&rarr;</span>}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/50 mb-3">Architecture</p>
          <p className="text-sm text-charcoal-deep/75 leading-relaxed">{project.architecture}</p>
        </div>

        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/50 mb-3">Engineering decisions</p>
          <ul className="space-y-2">
            {project.decisions.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm text-charcoal-deep/75">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange shrink-0" aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/50 mb-3">Key features</p>
          <ul className="space-y-1.5">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal-deep/75">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cobalt shrink-0" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/50 mb-3">Built with</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded border border-charcoal-deep/15 text-charcoal-deep/70">
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
