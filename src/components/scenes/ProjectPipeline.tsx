import { motion } from "framer-motion";

export default function ProjectPipeline({ steps, accentText }: { steps: string[]; accentText: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3" role="list" aria-label="Pipeline stages">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2 md:gap-3">
          <motion.div
            role="listitem"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="font-mono text-xs md:text-sm px-3 py-2 rounded-md border border-line bg-cream whitespace-nowrap"
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <span className={`select-none ${accentText}`} aria-hidden="true">
              &rarr;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
