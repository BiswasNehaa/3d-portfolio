import { motion } from "framer-motion";
import { openSource, profile } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function OpenSource() {
  return (
    <section id="open-source" className="relative py-24 md:py-32 bg-void bg-grid">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="04 // Open Source" title={openSource.heading} />

        <p className="text-lg text-fg/85 max-w-2xl mb-3">{openSource.summary}</p>
        <p className="text-muted max-w-2xl mb-12 font-mono text-sm">{openSource.maintainer}</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {openSource.repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="focus-ring group relative rounded-xl border border-line bg-panel/40 p-6 hover:border-violet/60 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] uppercase tracking-widest text-ice">{repo.org}</span>
                <span
                  aria-hidden="true"
                  className="w-2 h-2 rounded-full bg-line group-hover:bg-magenta transition-colors"
                />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 break-words">{repo.name}</h3>
              <p className="text-sm text-muted leading-relaxed">{repo.description}</p>
              <span className="mt-4 inline-block text-xs font-mono text-muted group-hover:text-ice transition-colors">
                view repository &rarr;
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-14">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-2 px-6 py-3 rounded-md border border-line text-fg hover:border-ice hover:text-ice transition-colors font-medium"
          >
            Explore My GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
