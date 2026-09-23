import { education, coursework, experience } from "../../data/content";

export default function EducationContent() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl mb-2">The University</h1>
      <p className="text-charcoal-deep/70 mb-8">Where it started, and what came after.</p>

      <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/50 mb-3">Education</p>
      <div className="flex flex-col gap-3 mb-8">
        {education.map((ed) => (
          <div key={ed.degree} className="rounded-lg border border-charcoal-deep/12 bg-cream/60 p-4">
            <p className="font-display font-semibold text-lg mb-1">{ed.degree}</p>
            <p className="text-sm text-charcoal-deep/70 mb-1.5">{ed.school}</p>
            <p className="font-mono text-xs text-orange">{ed.detail}</p>
          </div>
        ))}
      </div>

      <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/50 mb-3">Relevant coursework</p>
      <div className="flex flex-wrap gap-2 mb-8">
        {coursework.map((c) => (
          <span key={c} className="font-mono text-xs px-3 py-1.5 rounded border border-charcoal-deep/15 text-charcoal-deep/70">
            {c}
          </span>
        ))}
      </div>

      <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/50 mb-3">Experience</p>
      {experience.map((exp) => (
        <div key={exp.role} className="rounded-lg border border-charcoal-deep/12 bg-cream/60 p-4">
          <p className="font-mono text-xs uppercase tracking-widest text-cobalt mb-1.5">{exp.org}</p>
          <p className="font-display font-semibold text-lg mb-1">{exp.role}</p>
          <p className="text-xs text-charcoal-deep/50 mb-3">{exp.location}</p>
          <ul className="space-y-1.5">
            {exp.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-sm text-charcoal-deep/75">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cobalt shrink-0" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
