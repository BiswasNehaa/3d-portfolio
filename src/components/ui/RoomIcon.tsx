import type { RoomId } from "../../data/content";

const common = {
  fill: "none",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function RoomIcon({ id, className }: { id: RoomId; className?: string }) {
  switch (id) {
    case "person":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <circle cx="24" cy="17" r="8" {...common} />
          <path d="M9 41c1-9 7-14 15-14s14 5 15 14" {...common} />
          <circle cx="24" cy="24" r="20" strokeDasharray="2 4" {...common} />
        </svg>
      );
    case "workshop":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M31 8l9 9-15 15-9-2-2-9z" {...common} />
          <path d="M17 30l-9 9" {...common} />
          <circle cx="35.5" cy="12.5" r="2" {...common} />
        </svg>
      );
    case "mind":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <rect x="7" y="10" width="34" height="28" rx="2" {...common} />
          <path d="M7 20h34M16 20v18M27 20v18" {...common} />
          <circle cx="12" cy="15" r="1.6" {...common} />
          <circle cx="20" cy="15" r="1.6" {...common} />
        </svg>
      );
    case "archive":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <circle cx="24" cy="10" r="3" {...common} />
          <path d="M24 13v9M24 22l-11 8M24 22l11 8" {...common} />
          <circle cx="13" cy="33" r="3" {...common} />
          <circle cx="35" cy="33" r="3" {...common} />
        </svg>
      );
    case "fieldnotes":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <rect x="10" y="7" width="28" height="34" rx="1.5" {...common} />
          <path d="M16 16h16M16 23h16M16 30h10" {...common} />
        </svg>
      );
    case "contact":
      return (
        <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
          <path d="M24 6v6M24 6a10 10 0 0110 10c0 7-10 13-10 13s-10-6-10-13A10 10 0 0124 6z" {...common} />
          <path d="M12 40c3-4 7-6 12-6s9 2 12 6" {...common} />
        </svg>
      );
  }
}
