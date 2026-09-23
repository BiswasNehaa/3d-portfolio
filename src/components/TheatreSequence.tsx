import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { filmCards, credits, profile } from "../data/content";

export default function TheatreSequence({ onClose }: { onClose: () => void }) {
  const [phase, setPhase] = useState<"curtain" | "cards" | "credits">("curtain");
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setPhase("cards"), 1500);
    return () => clearTimeout(t);
  }, []);

  const advance = () => {
    if (phase !== "cards") return;
    if (cardIndex < filmCards.length - 1) {
      setCardIndex((i) => i + 1);
    } else {
      setPhase("credits");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-charcoal-deep flex items-center justify-center overflow-hidden">
      <AnimatePresence>
        {phase === "curtain" && (
          <motion.div
            key="curtain"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-ivory/40">The screen goes dark&hellip;</p>
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "cards" && (
        <button
          onClick={advance}
          className="absolute inset-0 z-10 cursor-pointer"
          aria-label="Continue the story"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={cardIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl mx-auto px-8 text-center"
            >
              <p className="font-display font-semibold text-3xl md:text-5xl text-ivory mb-4">
                {filmCards[cardIndex].title}
              </p>
              {filmCards[cardIndex].subtitle && (
                <p className="font-mono text-xs uppercase tracking-widest text-sun">
                  {filmCards[cardIndex].subtitle}
                </p>
              )}
              {filmCards[cardIndex].body && (
                <p className="text-ivory/70 leading-relaxed mt-2">{filmCards[cardIndex].body}</p>
              )}
            </motion.div>
          </AnimatePresence>
          <p className="absolute bottom-10 inset-x-0 text-center font-mono text-[10px] uppercase tracking-widest text-ivory/30">
            click to continue &middot; {cardIndex + 1} / {filmCards.length}
          </p>
        </button>
      )}

      {phase === "credits" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-8"
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-ivory/50 mb-3">{credits.directedBy}</p>
          <p className="font-display font-semibold text-4xl md:text-6xl text-ivory mb-2">{credits.name}</p>
          <p className="font-mono text-xs uppercase tracking-widest text-sun mb-12">{credits.role}</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring px-6 py-3 rounded-full bg-sun text-charcoal-deep font-mono text-xs uppercase tracking-widest hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="focus-ring px-6 py-3 rounded-full border border-ivory/25 text-ivory font-mono text-xs uppercase tracking-widest hover:border-sun hover:text-sun"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="focus-ring px-6 py-3 rounded-full border border-ivory/25 text-ivory font-mono text-xs uppercase tracking-widest hover:border-sun hover:text-sun"
            >
              GitHub
            </a>
          </div>

          <button
            onClick={onClose}
            className="focus-ring mt-16 font-mono text-[10px] uppercase tracking-widest text-ivory/40 hover:text-ivory/70 underline underline-offset-4"
          >
            Leave the theatre
          </button>
        </motion.div>
      )}
    </div>
  );
}
