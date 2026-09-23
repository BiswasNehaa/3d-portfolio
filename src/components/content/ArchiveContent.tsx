import { motion } from "framer-motion";
import { openSource, profile } from "../../data/content";

export default function ArchiveContent() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl mb-2">The Archive</h1>
      <p className="text-charcoal-deep/70 mb-1">{openSource.summary}</p>
      <p className="font-mono text-xs text-charcoal-deep/50 mb-8">{openSource.maintainer}</p>

      <div className="flex flex-col gap-3">
        {openSource.repos.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="group rounded-lg border border-charcoal-deep/12 bg-cream/60 p-4 hover:border-cobalt transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-orange">{repo.org}</span>
              <span className="font-mono text-[10px] text-charcoal-deep/40 group-hover:text-cobalt">view &rarr;</span>
            </div>
            <p className="font-display font-semibold text-lg mb-1">{repo.name}</p>
            <p className="text-sm text-charcoal-deep/70">{repo.description}</p>
          </motion.a>
        ))}
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="focus-ring mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-charcoal-deep/25 text-xs font-mono uppercase tracking-wider hover:border-charcoal-deep"
      >
        Explore My GitHub &rarr;
      </a>
    </div>
  );
}
