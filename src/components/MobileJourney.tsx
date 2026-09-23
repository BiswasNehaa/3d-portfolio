import { useState, type ComponentType } from "react";
import { motion } from "framer-motion";
import { locations, profile } from "../data/content";
import type { LocationId } from "../data/content";
import AboutContent from "./content/AboutContent";
import ProjectsContent from "./content/ProjectsContent";
import ArchiveContent from "./content/ArchiveContent";
import SkillsContent from "./content/SkillsContent";
import EducationContent from "./content/EducationContent";
import TheatreSequence from "./TheatreSequence";

const contentFor: Record<Exclude<LocationId, "theatre">, ComponentType> = {
  house: AboutContent,
  studio: ProjectsContent,
  archive: ArchiveContent,
  lab: SkillsContent,
  university: EducationContent,
};

export default function MobileJourney() {
  const [theatreOpen, setTheatreOpen] = useState(false);

  if (theatreOpen) return <TheatreSequence onClose={() => setTheatreOpen(false)} />;

  return (
    <div className="min-h-screen bg-charcoal-deep">
      <header className="px-5 pt-14 pb-10 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-sun mb-3">A walk through the world</p>
        <h1 className="font-display font-semibold text-4xl text-ivory mb-2">{profile.name}</h1>
        <p className="font-mono text-xs uppercase tracking-widest text-ivory/60">{profile.role}</p>
      </header>

      <div className="flex flex-col gap-4 px-4 pb-16">
        {locations
          .filter((l) => l.id !== "theatre")
          .map((loc, i) => {
            const Content = contentFor[loc.id as Exclude<LocationId, "theatre">];
            return (
              <motion.section
                key={loc.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="rounded-2xl bg-ivory text-charcoal-deep p-6"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-orange mb-4">{loc.label}</p>
                <Content />
              </motion.section>
            );
          })}

        <motion.button
          onClick={() => setTheatreOpen(true)}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="focus-ring rounded-2xl bg-orange text-ivory p-8 text-center"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest mb-2">The Theatre</p>
          <p className="font-display font-semibold text-2xl">Watch the story &rarr;</p>
        </motion.button>
      </div>
    </div>
  );
}
