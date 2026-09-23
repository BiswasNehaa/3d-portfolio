import { locations } from "../data/content";
import type { LocationId } from "../data/content";

export default function MiniNav({
  selected,
  onSelect,
  onHome,
}: {
  selected: LocationId | null;
  onSelect: (id: LocationId) => void;
  onHome: () => void;
}) {
  return (
    <nav
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 rounded-full bg-charcoal-deep/70 backdrop-blur-sm border border-ivory/10 px-2 py-2"
      aria-label="World locations"
    >
      <button
        onClick={onHome}
        className="focus-ring font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full text-ivory/70 hover:text-sun transition-colors"
      >
        World
      </button>
      {locations.map((loc) => (
        <button
          key={loc.id}
          onClick={() => onSelect(loc.id)}
          aria-current={selected === loc.id ? "location" : undefined}
          className={`focus-ring font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full transition-colors ${
            selected === loc.id ? "bg-sun text-charcoal-deep" : "text-ivory/70 hover:text-sun"
          }`}
        >
          {loc.label.replace("The ", "")}
        </button>
      ))}
    </nav>
  );
}
