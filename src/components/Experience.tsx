import { motion } from "framer-motion";
import { experience, education, coursework } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="05 // Experience" title="Where I've Worked." />

        <div className="relative pl-8 border-l border-line mb-24">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-2"
            >
              <span
                className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-violet ring-4 ring-charcoal"
                aria-hidden="true"
              />
              <p className="font-mono text-xs uppercase tracking-widest text-ice mb-2">{exp.org}</p>
              <h3 className="font-display font-semibold text-2xl mb-1">{exp.role}</h3>
              <p className="text-sm text-muted mb-4">{exp.location}</p>
              <ul className="space-y-2">
                {exp.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-fg/85 max-w-2xl">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-ice shrink-0" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-8">Education</h3>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {education.map((ed, i) => (
            <motion.div
              key={ed.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-lg border border-line bg-panel/30 p-5"
            >
              <p className="font-display font-medium text-base mb-2">{ed.degree}</p>
              <p className="text-sm text-muted mb-3">{ed.school}</p>
              <p className="font-mono text-xs text-ice">{ed.detail}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Relevant Coursework</p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((c) => (
              <span key={c} className="font-mono text-xs px-3 py-1.5 rounded border border-line text-muted">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
