import { motion } from "framer-motion";
import { projects } from "../../data/content";
import SceneShell from "../ui/SceneShell";
import RoutePath from "./RoutePath";

const accentClasses = {
  brass: { text: "text-brass", border: "border-brass", chip: "bg-brass text-ink", bg: "bg-brass" },
  amber: { text: "text-amber", border: "border-amber", chip: "bg-amber text-ink", bg: "bg-amber" },
  teal: { text: "text-teal", border: "border-teal", chip: "bg-teal text-ink", bg: "bg-teal" },
};

export default function ProjectWorld({ projectId, onBack }: { projectId: string; onBack: () => void }) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return null;
  const accent = accentClasses[project.accent];

  return (
    <SceneShell
      eyebrow={`Chart — ${project.tagline}`}
      title={project.chartName}
      fragment={project.fragment}
      onBack={onBack}
      backLabel="Back to the Workshop"
    >
      <p className="text-lg text-cream-soft leading-relaxed max-w-2xl mb-10">{project.description}</p>

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

      {project.layout === "notebook" ? (
        <NotebookLayout project={project} accent={accent} />
      ) : (
        <RouteLayout project={project} accent={accent} vertical={project.layout === "map"} />
      )}
    </SceneShell>
  );
}

function RouteLayout({
  project,
  accent,
  vertical,
}: {
  project: (typeof projects)[number];
  accent: (typeof accentClasses)[keyof typeof accentClasses];
  vertical: boolean;
}) {
  return (
    <>
      {project.route && (
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
            {vertical ? "Course Map" : "Pipeline"}
          </p>
          <RoutePath
            steps={project.route}
            accentText={accent.text}
            accentBg={accent.bg}
            orientation={vertical ? "vertical" : "horizontal"}
          />
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Technical Architecture</p>
          <p className="text-cream-soft leading-relaxed">{project.architecture}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Key Engineering Decisions</p>
          <ul className="space-y-3">
            {project.decisions.map((d) => (
              <li key={d} className="flex items-start gap-3 text-cream-soft text-sm">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent.bg} shrink-0`} aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FeaturesAndStack project={project} accent={accent} />
    </>
  );
}

function NotebookLayout({
  project,
  accent,
}: {
  project: (typeof projects)[number];
  accent: (typeof accentClasses)[keyof typeof accentClasses];
}) {
  return (
    <>
      <div
        className="mb-12 rounded-xl border border-line p-8 md:p-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 31px, #2b2f37 32px)",
          backgroundColor: "#101216",
        }}
      >
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Marked Pages</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {project.features.slice(0, 6).map((f, i) => (
            <motion.div
              key={f}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-start gap-3"
            >
              <span
                className={`shrink-0 w-6 h-6 rounded-full ${accent.chip} font-mono text-[11px] flex items-center justify-center mt-0.5`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <p className="text-sm text-cream-soft leading-snug">{f}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Technical Architecture</p>
          <p className="text-cream-soft leading-relaxed">{project.architecture}</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Key Engineering Decisions</p>
          <ul className="space-y-3">
            {project.decisions.map((d) => (
              <li key={d} className="flex items-start gap-3 text-cream-soft text-sm">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${accent.bg} shrink-0`} aria-hidden="true" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FeaturesAndStack project={project} accent={accent} skipFeatures />
    </>
  );
}

function FeaturesAndStack({
  project,
  accent,
  skipFeatures = false,
}: {
  project: (typeof projects)[number];
  accent: (typeof accentClasses)[keyof typeof accentClasses];
  skipFeatures?: boolean;
}) {
  return (
    <>
      {!skipFeatures && (
        <div className="mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Key Features</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {project.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className="flex items-start gap-3 text-sm text-cream-soft rounded-lg border border-line bg-panel px-4 py-3"
              >
                <span className={`font-mono text-[10px] mt-0.5 ${accent.text}`}>{String(i + 1).padStart(2, "0")}</span>
                {f}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Built With</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="font-mono text-[11px] px-2.5 py-1 rounded border border-line text-cream-soft">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
