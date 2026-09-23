import { motion } from "framer-motion";
import { about, profile } from "../../data/content";
import SceneShell from "../ui/SceneShell";

export default function Person({ onBack }: { onBack: () => void }) {
  return (
    <SceneShell eyebrow="Room 01" title="The Person" fragment={about.fragment} onBack={onBack}>
      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <p className="font-display text-2xl md:text-3xl leading-snug mb-6">{profile.name}</p>
          <p className="font-mono text-xs uppercase tracking-widest text-blue mb-8">{profile.role}</p>
          <p className="text-lg text-ink-soft leading-relaxed max-w-xl">{about.body}</p>
        </div>

        <div className="md:col-span-2">
          <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Working notes</p>
          <ul className="space-y-3">
            {about.notes.map((note, i) => (
              <motion.li
                key={note}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="flex items-start gap-3 text-ink-soft"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red shrink-0" aria-hidden="true" />
                {note}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </SceneShell>
  );
}
