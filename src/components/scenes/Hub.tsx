import { motion } from "framer-motion";
import { bearings, profile } from "../../data/content";
import type { BearingId } from "../../data/content";
import BearingIcon from "../ui/BearingIcon";

function polarPosition(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  const x = 50 + radiusPct * Math.sin(rad);
  const y = 50 - radiusPct * Math.cos(rad);
  return { left: `${x}%`, top: `${y}%` };
}

export default function Hub({ go, visited }: { go: (id: BearingId) => void; visited: Set<string> }) {
  return (
    <section className="relative min-h-screen pt-28 pb-24 px-5 md:px-8 bg-ink bg-chart overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-brass mb-3">The Chart</p>
          <h1 className="font-display font-semibold text-3xl md:text-5xl leading-tight text-cream">
            {profile.name} is charting a body of work. Pick a bearing.
          </h1>
        </motion.div>

        {/* Desktop compass */}
        <div className="hidden md:block relative mx-auto" style={{ width: "min(640px, 90vw)", aspectRatio: "1" }}>
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#2b2f37" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="32" fill="none" stroke="#2b2f37" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="1" fill="#c9a24b" />
            {bearings.map((b) => {
              const inner = polarPosition(b.angle, 0);
              const outer = polarPosition(b.angle, 46);
              return (
                <line
                  key={b.id}
                  x1={inner.left.replace("%", "")}
                  y1={inner.top.replace("%", "")}
                  x2={outer.left.replace("%", "")}
                  y2={outer.top.replace("%", "")}
                  stroke="#2b2f37"
                  strokeWidth="0.25"
                />
              );
            })}
          </svg>

          {bearings.map((b, i) => {
            const pos = polarPosition(b.angle, 46);
            return (
              <motion.button
                key={b.id}
                onClick={() => go(b.id)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className="focus-ring group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 w-36"
                style={pos}
              >
                <span className="font-mono text-[10px] text-muted group-hover:text-brass-bright transition-colors">
                  {b.heading}
                </span>
                <span className="w-14 h-14 rounded-full border border-line bg-panel flex items-center justify-center group-hover:border-brass group-hover:bg-panel-soft transition-colors">
                  <BearingIcon id={b.id} className="w-6 h-6 text-cream stroke-current group-hover:text-brass-bright transition-colors" />
                </span>
                <span className="font-display text-base text-cream group-hover:text-brass-bright transition-colors text-center leading-tight">
                  {b.label}
                </span>
                {visited.has(b.id) && (
                  <span className="font-mono text-[9px] uppercase tracking-widest text-brass">visited</span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile list */}
        <div className="md:hidden flex flex-col gap-3">
          {bearings.map((b, i) => (
            <motion.button
              key={b.id}
              onClick={() => go(b.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="focus-ring group flex items-center gap-4 rounded-xl border border-line bg-panel p-4 text-left"
            >
              <span className="w-11 h-11 shrink-0 rounded-full border border-line bg-panel-soft flex items-center justify-center">
                <BearingIcon id={b.id} className="w-5 h-5 text-brass stroke-current" />
              </span>
              <span>
                <span className="block font-mono text-[10px] text-muted">
                  {b.heading} — {b.subtitle}
                </span>
                <span className="block font-display text-lg text-cream">{b.label}</span>
              </span>
              <span className="ml-auto font-mono text-xs text-muted">&rarr;</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
