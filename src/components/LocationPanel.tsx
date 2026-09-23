import { AnimatePresence, motion } from "framer-motion";
import type { LocationId } from "../data/content";
import { locations } from "../data/content";
import AboutContent from "./content/AboutContent";
import ProjectsContent from "./content/ProjectsContent";
import ArchiveContent from "./content/ArchiveContent";
import SkillsContent from "./content/SkillsContent";
import EducationContent from "./content/EducationContent";

export default function LocationPanel({
  selected,
  onClose,
}: {
  selected: LocationId | null;
  onClose: () => void;
}) {
  const showPanel = selected && selected !== "theatre";
  const loc = selected ? locations.find((l) => l.id === selected) : null;

  return (
    <AnimatePresence>
      {showPanel && loc && (
        <motion.aside
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 right-0 z-40 h-full w-full sm:w-[440px] md:w-[500px] bg-ivory text-charcoal-deep overflow-y-auto shadow-[0_0_60px_rgba(0,0,0,0.45)]"
          aria-label={loc.label}
        >
          <div className="sticky top-0 bg-ivory/95 backdrop-blur-sm border-b border-charcoal-deep/10 px-6 md:px-8 py-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-orange">{loc.label}</span>
            <button
              onClick={onClose}
              className="focus-ring font-mono text-[10px] uppercase tracking-widest text-charcoal-deep/60 hover:text-charcoal-deep border border-charcoal-deep/15 rounded-full px-3 py-1.5"
            >
              &larr; Back to the world
            </button>
          </div>

          <div className="px-6 md:px-8 py-8">
            {selected === "house" && <AboutContent />}
            {selected === "studio" && <ProjectsContent />}
            {selected === "archive" && <ArchiveContent />}
            {selected === "lab" && <SkillsContent />}
            {selected === "university" && <EducationContent />}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
