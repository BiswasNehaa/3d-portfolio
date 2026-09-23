import type { BearingId } from "../../data/content";

const common = {
  fill: "none",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function BearingIcon({ id, className }: { id: BearingId; className?: string }) {
  switch (id) {
    case "engineer":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <circle cx="24" cy="16" r="7" {...common} />
          <path d="M10 40c1.5-8.5 6.8-13 14-13s12.5 4.5 14 13" {...common} />
        </svg>
      );
    case "workshop":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M8 40l14-14M30 8l10 10-6 6-10-10z" {...common} />
          <path d="M22 26l-4 4-4-1-1-4 4-4" {...common} />
        </svg>
      );
    case "instruments":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <circle cx="24" cy="24" r="16" {...common} />
          <path d="M24 24l7-10" {...common} />
          <circle cx="24" cy="24" r="2" {...common} />
        </svg>
      );
    case "archive":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M24 8v14M24 22l-12 9M24 22l12 9" {...common} />
          <circle cx="24" cy="8" r="3" {...common} />
          <circle cx="12" cy="34" r="3" {...common} />
          <circle cx="36" cy="34" r="3" {...common} />
        </svg>
      );
    case "log":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M10 8h24l4 4v28H10z" {...common} />
          <path d="M17 18h17M17 25h17M17 32h11" {...common} />
        </svg>
      );
    case "signal":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M24 30v10M24 30a12 12 0 100-24" {...common} />
          <path d="M17 34a10 10 0 0114 0" {...common} />
          <circle cx="24" cy="18" r="4" {...common} />
        </svg>
      );
  }
}
