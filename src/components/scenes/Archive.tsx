import { motion } from "framer-motion";
import { openSource, profile, rooms } from "../../data/content";
import SceneShell from "../ui/SceneShell";

export default function Archive({ onBack }: { onBack: () => void }) {
  const room = rooms.find((r) => r.id === "archive")!;

  return (
    <SceneShell eyebrow="Room 04" title="The Contribution Archive" fragment={room.fragment} onBack={onBack}>
      <p className="text-lg text-ink-soft max-w-2xl mb-3">{openSource.summary}</p>
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
            className="focus-ring group rounded-xl border border-line bg-paper/60 p-6 hover:border-blue transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase tracking-widest text-blue">{repo.org}</span>
              <span className="w-2 h-2 rounded-full bg-line group-hover:bg-red transition-colors" aria-hidden="true" />
            </div>
            <h2 className="font-display font-semibold text-lg mb-2 break-words">{repo.name}</h2>
            <p className="text-sm text-ink-soft">{repo.description}</p>
            <span className="mt-4 inline-block text-xs font-mono text-muted group-hover:text-blue transition-colors">
              view repository &rarr;
            </span>
          </motion.a>
        ))}
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="focus-ring inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink text-ink hover:bg-ink hover:text-cream transition-colors font-mono text-sm uppercase tracking-wider"
      >
        Explore My GitHub &rarr;
      </a>
    </SceneShell>
  );
}
