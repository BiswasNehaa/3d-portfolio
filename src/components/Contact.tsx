import { motion } from "framer-motion";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-void bg-grid overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-widest text-ice mb-4"
        >
          06 // Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-display font-semibold text-3xl md:text-5xl mb-6"
        >
          Let&rsquo;s Build Something Intelligent.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted text-lg max-w-xl mx-auto mb-12"
        >
          I&rsquo;m open to AI Engineering opportunities, internships, and meaningful collaborations
          involving RAG systems, LLM applications, and intelligent software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${profile.email}`}
            className="focus-ring px-6 py-3 rounded-md bg-violet text-white font-medium hover:bg-violet/85 transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring px-6 py-3 rounded-md border border-line text-fg hover:border-ice hover:text-ice transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="focus-ring px-6 py-3 rounded-md border border-line text-fg hover:border-ice hover:text-ice transition-colors"
          >
            GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
