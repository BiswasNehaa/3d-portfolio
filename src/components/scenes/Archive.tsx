import { motion } from "framer-motion";
import { openSource, profile, bearings } from "../../data/content";
import SceneShell from "../ui/SceneShell";

export default function Archive({ onBack }: { onBack: () => void }) {
  const bearing = bearings.find((b) => b.id === "archive")!;

  return (
    <SceneShell eyebrow="Bearing 180°" title="The Archive" fragment={bearing.fragment} onBack={onBack}>
      <p className="text-lg text-cream-soft max-w-2xl mb-3">{openSource.summary}</p>
      <p className="font-mono text-sm text-muted max-w-2xl mb-12">{openSource.maintainer}</p>

      <div className="grid sm:grid-cols-2 gap-5 mb-12">
        {openSource.repos.map((repo, i) => (
          <motion.a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="focus-ring group rounded-xl border border-line bg-panel p-6 hover:border-brass transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-brass">{repo.org}</span>
              <span className="w-2 h-2 rounded-full bg-line group-hover:bg-amber transition-colors" aria-hidden="true" />
            </div>
            <h2 className="font-display font-semibold text-lg mb-2 break-words text-cream">{repo.name}</h2>
            <p className="text-sm text-cream-soft">{repo.description}</p>
            <span className="mt-4 inline-block text-xs font-mono text-muted group-hover:text-brass-bright transition-colors">
              view repository &rarr;
            </span>
          </motion.a>
        ))}
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cream-soft text-cream hover:bg-brass hover:text-ink hover:border-brass transition-colors font-mono text-sm uppercase tracking-wider"
      >
        Explore My GitHub &rarr;
      </a>
    </SceneShell>
  );
}
