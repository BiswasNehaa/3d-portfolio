import { motion } from "framer-motion";

export default function RoutePath({
  steps,
  accentText,
  accentBg,
  orientation = "horizontal",
}: {
  steps: string[];
  accentText: string;
  accentBg: string;
  orientation?: "horizontal" | "vertical";
}) {
  if (orientation === "vertical") {
    return (
      <div className="flex flex-col" role="list" aria-label="Route">
        {steps.map((step, i) => (
          <div key={step} className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.07 }}
                className={`w-3 h-3 rounded-full ${accentBg} shrink-0`}
                aria-hidden="true"
              />
              {i < steps.length - 1 && <span className="w-px flex-1 min-h-8 bg-line" aria-hidden="true" />}
            </div>
            <motion.div
              role="listitem"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="pb-6 font-mono text-sm text-cream"
            >
              {step}
            </motion.div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3" role="list" aria-label="Route">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2 md:gap-3">
          <motion.div
            role="listitem"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="font-mono text-xs md:text-sm px-3 py-2 rounded-md border border-line bg-ink whitespace-nowrap text-cream"
          >
            {step}
          </motion.div>
          {i < steps.length - 1 && (
            <span className={`select-none ${accentText}`} aria-hidden="true">
              &middot;&middot;&middot;
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
