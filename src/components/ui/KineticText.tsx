import { motion } from "framer-motion";

export default function KineticText({
  text,
  className,
  delay = 0,
  stagger = 0.035,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const words = text.split(" ");
  let letterIndex = 0;

  return (
    <span
      className={`inline-flex flex-wrap ${className ?? ""}`}
      style={{ columnGap: "0.28em", rowGap: "0.05em" }}
      aria-label={text}
    >
      {words.map((word, wi) => {
        const letters = Array.from(word);
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {letters.map((letter) => {
              const i = letterIndex;
              letterIndex += 1;
              return (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: "0.6em" }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: delay + i * stagger,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
