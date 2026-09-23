import { motion } from "framer-motion";
import { projects } from "../../data/content";
import SceneShell from "../ui/SceneShell";
import ProjectPipeline from "./ProjectPipeline";

const accentClasses = {
  blue: { text: "text-blue", border: "border-blue", chip: "bg-blue text-cream", ring: "ring-blue" },
  red: { text: "text-red", border: "border-red", chip: "bg-red text-cream", ring: "ring-red" },
  ink: { text: "text-ink", border: "border-ink", chip: "bg-ink text-cream", ring: "ring-ink" },
};

export default function ProjectWorld({ projectId, onBack }: { projectId: string; onBack: () => void }) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;
  const accent = accentClasses[project.accent];

  return (
    <SceneShell
      eyebrow={`Project World — ${project.tagline}`}
      title={project.worldName}
      fragment={project.fragment}
      onBack={onBack}
      backLabel="Back to the Workshop"
    >
      <p className="text-lg text-ink-soft leading-relaxed max-w-2xl mb-10">{project.description}</p>

      <div className="flex flex-wrap gap-3 mb-12">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className={`focus-ring px-5 py-2.5 rounded-full border ${accent.border} ${accent.text} hover:opacity-80 transition-opacity text-sm font-mono uppercase tracking-wider`}
          >
            View on GitHub
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className={`focus-ring px-5 py-2.5 rounded-full ${accent.chip} hover:opacity-90 transition-opacity text-sm font-mono uppercase tracking-wider`}
          >
            Live Demo
          </a>
        )}
      </div>

      {project.pipeline && (
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Pipeline</p>
          <ProjectPipeline steps={project.pipeline} accentText={accent.text} />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Technical Architecture</p>
          <p className="text-ink-soft leading-relaxed">{project.architecture}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Key Engineering Decisions</p>
          <ul className="space-y-3">
            {project.decisions.map((d) => (
              <li key={d} className="flex items-start gap-3 text-ink-soft text-sm">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent.chip} shrink-0`} aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Key Features</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {project.features.map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="flex items-start gap-3 text-sm text-ink-soft rounded-lg border border-line bg-paper/50 px-4 py-3"
            >
              <span className={`font-mono text-[10px] mt-0.5 ${accent.text}`}>{String(i + 1).padStart(2, "0")}</span>
              {f}
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Built With</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="font-mono text-[11px] px-2.5 py-1 rounded border border-line text-ink-soft">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}
