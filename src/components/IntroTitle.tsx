import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "../data/content";

export default function IntroTitle({ dismissed }: { dismissed: boolean }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 6500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && !dismissed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="pointer-events-none fixed inset-0 z-30 flex flex-col items-center justify-end pb-24 px-6 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="font-display text-3xl md:text-5xl text-ivory tracking-wide"
          >
            {profile.name.toUpperCase()}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.35em] text-sun mt-2"
          >
            {profile.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.6 }}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-ivory/60 mt-8"
          >
            Explore the world &rarr;
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
