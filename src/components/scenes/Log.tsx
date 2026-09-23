import { motion } from "framer-motion";
import { experience, education, coursework, bearings } from "../../data/content";
import SceneShell from "../ui/SceneShell";

export default function Log({ onBack }: { onBack: () => void }) {
  const bearing = bearings.find((b) => b.id === "log")!;

  return (
    <SceneShell eyebrow="Bearing 240°" title="The Log" fragment={bearing.fragment} onBack={onBack}>
      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Entry — Experience</p>
      <div className="mb-14">
        {experience.map((exp) => (
          <div key={exp.role} className="rounded-2xl border border-line bg-panel p-7 md:p-9">
            <p className="font-mono text-xs uppercase tracking-widest text-brass mb-2">{exp.org}</p>
            <h2 className="font-display font-semibold text-2xl mb-1 text-cream">{exp.role}</h2>
            <p className="text-sm text-muted mb-5">{exp.location}</p>
            <ul className="space-y-2">
              {exp.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-cream-soft max-w-2xl">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber shrink-0" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6">Entry — Education</p>
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {education.map((ed, i) => (
          <motion.div
            key={ed.degree}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="rounded-lg border border-line bg-panel/60 p-5"
          >
            <p className="font-display font-medium text-base mb-2 text-cream">{ed.degree}</p>
            <p className="text-sm text-muted mb-3">{ed.school}</p>
            <p className="font-mono text-xs text-brass">{ed.detail}</p>
          </motion.div>
        ))}
      </div>

      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Relevant Coursework</p>
        <div className="flex flex-wrap gap-2">
          {coursework.map((c) => (
            <span key={c} className="font-mono text-xs px-3 py-1.5 rounded border border-line text-cream-soft">
              {c}
            </span>
          ))}
        </div>
      </div>
    </SceneShell>
  );
}
