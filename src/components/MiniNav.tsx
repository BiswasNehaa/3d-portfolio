import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { locations } from "../data/content";
import type { LocationId } from "../data/content";

export default function MiniNav({
  selected,
  onSelect,
}: {
  selected: LocationId | null;
  onSelect: (id: LocationId) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setOpen((o) => !o)}
        className="focus-ring font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/60 hover:text-sun border border-ivory/15 rounded-full px-4 py-2 bg-charcoal-deep/40 backdrop-blur-sm transition-colors"
        aria-expanded={open}
      >
        {open ? "Close" : "Index"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-12 right-0 w-52 rounded-xl border border-ivory/10 bg-charcoal-deep/85 backdrop-blur-sm p-2"
          >
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => {
                  onSelect(loc.id);
                  setOpen(false);
                }}
                aria-current={selected === loc.id ? "location" : undefined}
                className={`focus-ring w-full text-left font-mono text-[11px] uppercase tracking-widest px-3 py-2 rounded-md transition-colors ${
                  selected === loc.id ? "text-sun" : "text-ivory/70 hover:text-ivory"
                }`}
              >
                {loc.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
