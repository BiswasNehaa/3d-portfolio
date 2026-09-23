import { motion } from "framer-motion";

export default function PipelineDiagram({ steps }: { steps: string[] }) {
  return (
    <div
      className="flex flex-wrap items-center gap-2 md:gap-3"
      role="list"
      aria-label="Pipeline stages"
    >
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2 md:gap-3">
          <motion.div
            role="listitem"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="font-mono text-xs md:text-sm px-3 py-2 rounded-md border border-line bg-panel text-ice whitespace-nowrap"
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <span className="text-faint select-none" aria-hidden="true">
              &rarr;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
