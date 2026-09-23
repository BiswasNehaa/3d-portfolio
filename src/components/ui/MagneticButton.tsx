import { useRef, useState, type ReactNode, type PointerEvent } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className,
  strength = 0.35,
  onClick,
  type = "button",
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-label"?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: PointerEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: relX * strength, y: relY * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      onPointerMove={onMove}
      onPointerLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}
