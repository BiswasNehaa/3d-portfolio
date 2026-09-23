import { motion } from "framer-motion";
import { about, profile } from "../../data/content";

export default function AboutContent() {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="font-display font-semibold text-4xl mb-1"
      >
        {profile.name}
      </motion.h1>
      <p className="font-mono text-xs uppercase tracking-widest text-orange mb-1">{profile.role}</p>
      <p className="font-mono text-xs uppercase tracking-widest text-charcoal-deep/50 mb-1">{profile.roleLine}</p>
      <p className="font-mono text-xs text-charcoal-deep/50 mb-8">{profile.location}</p>

      <p className="text-lg leading-relaxed text-charcoal-deep/85 mb-8">{profile.intro}</p>

      <p className="font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/50 mb-4">What she works with</p>
      <ul className="space-y-2.5">
        {about.points.map((p, i) => (
          <motion.li
            key={p}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="flex items-start gap-3 text-charcoal-deep/80"
          >
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cobalt shrink-0" aria-hidden="true" />
            {p}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
