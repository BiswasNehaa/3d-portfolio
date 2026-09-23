import { motion } from "framer-motion";
import { about } from "../data/content";
import SectionHeading from "./SectionHeading";
import KnowledgeOrbit from "./three/KnowledgeOrbit";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="01 // About" title={about.heading} />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-muted text-lg leading-relaxed mb-8">{about.body}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-2.5 font-mono text-sm text-fg/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-ice shrink-0" aria-hidden="true" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="relative h-72 md:h-96 rounded-xl border border-line bg-panel/40 overflow-hidden">
            <KnowledgeOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
