import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-12 md:mb-16"
    >
      <p className="font-mono text-xs uppercase tracking-widest text-ice mb-3">{eyebrow}</p>
      <h2 className="font-display font-semibold text-3xl md:text-5xl leading-tight max-w-3xl">
        {title}
      </h2>
    </motion.div>
  );
}
