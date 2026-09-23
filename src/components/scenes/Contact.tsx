import { motion } from "framer-motion";
import { contact, profile } from "../../data/content";
import SceneShell from "../ui/SceneShell";

export default function Contact({ onBack }: { onBack: () => void }) {
  return (
    <SceneShell eyebrow="Room 06" title="The Communication Room" fragment={contact.fragment} onBack={onBack}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display font-semibold text-3xl md:text-5xl mb-6 max-w-2xl"
      >
        {contact.heading}
      </motion.h2>
      <p className="text-lg text-ink-soft max-w-xl mb-12 leading-relaxed">{contact.body}</p>

      <div className="flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="focus-ring px-6 py-3.5 rounded-full bg-ink text-cream font-mono text-sm uppercase tracking-wider hover:bg-blue transition-colors"
        >
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          className="focus-ring px-6 py-3.5 rounded-full border border-ink text-ink hover:border-blue hover:text-blue transition-colors font-mono text-sm uppercase tracking-wider"
        >
          LinkedIn
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="focus-ring px-6 py-3.5 rounded-full border border-ink text-ink hover:border-blue hover:text-blue transition-colors font-mono text-sm uppercase tracking-wider"
        >
          GitHub
        </a>
      </div>

      <p className="font-mono text-xs text-muted mt-16">
        Designed &amp; built by {profile.name}. Exploring intelligence, one system at a time.
      </p>
    </SceneShell>
  );
}
