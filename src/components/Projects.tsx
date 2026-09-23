import { motion } from "framer-motion";
import { projects, type Project } from "../data/content";
import SectionHeading from "./SectionHeading";
import PipelineDiagram from "./PipelineDiagram";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="03 // Projects" title="Engineering Case Studies." />

        <div className="flex flex-col gap-20 md:gap-28">
          {projects.map((project, i) => (
            <ProjectCase key={project.id} project={project} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCase({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="rounded-2xl border border-line bg-panel/30 p-6 md:p-10"
    >
      <div className={`grid lg:grid-cols-5 gap-10 ${reverse ? "lg:[direction:rtl]" : ""}`}>
        <div className="lg:col-span-3 lg:[direction:ltr]">
          <p className="font-mono text-xs text-ice tracking-widest mb-3">{project.code}</p>
          <h3 className="font-display font-semibold text-3xl md:text-4xl mb-2">{project.title}</h3>
          <p className="text-lg text-fg/80 mb-5">{project.tagline}</p>
          <p className="text-muted leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2.5 py-1 rounded border border-line text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring px-5 py-2.5 rounded-md border border-line text-fg hover:border-ice hover:text-ice transition-colors text-sm font-medium"
              >
                View on GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="focus-ring px-5 py-2.5 rounded-md bg-violet text-white hover:bg-violet/85 transition-colors text-sm font-medium"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>

        <div className="lg:col-span-2 lg:[direction:ltr] flex flex-col gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Key Features</p>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-fg/85">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-magenta shrink-0" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {project.pipeline && (
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Pipeline</p>
              <PipelineDiagram steps={project.pipeline} />
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
