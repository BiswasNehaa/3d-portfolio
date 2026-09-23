import { motion } from "framer-motion";
import { signal, profile } from "../../data/content";
import SceneShell from "../ui/SceneShell";
import MagneticButton from "../ui/MagneticButton";

export default function Signal({ onBack }: { onBack: () => void }) {
  return (
    <SceneShell eyebrow="Bearing 300°" title="The Signal" fragment={signal.fragment} onBack={onBack}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display font-semibold text-3xl md:text-5xl mb-6 max-w-2xl text-cream"
      >
        {signal.heading}
      </motion.h2>
      <p className="text-lg text-cream-soft max-w-xl mb-12 leading-relaxed">{signal.body}</p>

      <div className="flex flex-wrap gap-4">
        <MagneticButton
          onClick={() => {
            window.location.href = `mailto:${profile.email}`;
          }}
          className="focus-ring px-6 py-3.5 rounded-full bg-brass text-ink font-mono text-sm uppercase tracking-wider hover:bg-brass-bright transition-colors"
        >
          {profile.email}
        </MagneticButton>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="focus-ring px-6 py-3.5 rounded-full border border-cream-soft text-cream hover:border-brass hover:text-brass-bright transition-colors font-mono text-sm uppercase tracking-wider"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="focus-ring px-6 py-3.5 rounded-full border border-cream-soft text-cream hover:border-brass hover:text-brass-bright transition-colors font-mono text-sm uppercase tracking-wider"
        >
          GitHub
        </a>
      </div>

      <p className="font-mono text-xs text-muted mt-16">
        Designed &amp; built by {profile.name}. Charted one system at a time.
      </p>
    </SceneShell>
  );
}
