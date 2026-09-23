import { motion } from "framer-motion";
import { rooms, profile } from "../../data/content";
import type { RoomId } from "../../data/content";
import RoomIcon from "../ui/RoomIcon";

const tilt = [-2, 1.5, -1, 2, -1.5, 1];

export default function Hub({ go, visited }: { go: (id: RoomId) => void; visited: Set<string> }) {
  return (
    <section className="relative min-h-screen pt-28 pb-24 px-5 md:px-8 bg-cream bg-blueprint">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue mb-3">The World</p>
          <h1 className="font-display font-semibold text-3xl md:text-5xl leading-tight max-w-2xl">
            {profile.name} is building a machine. It isn&rsquo;t finished. Walk through it.
          </h1>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {rooms.map((room, i) => (
            <motion.button
              key={room.id}
              onClick={() => go(room.id)}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              animate={{ opacity: 1, y: 0, rotate: tilt[i % tilt.length] }}
              whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="focus-ring group relative text-left rounded-2xl border border-line bg-paper/70 p-6 hover:border-blue hover:bg-paper transition-colors shadow-[0_2px_0_rgba(27,23,16,0.06)]"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-xs text-muted">{room.number}</span>
                {visited.has(room.id) && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-blue">visited</span>
                )}
              </div>

              <RoomIcon
                id={room.id}
                className="w-10 h-10 mb-6 text-ink stroke-current group-hover:text-blue transition-colors"
              />

              <h2 className="font-display font-semibold text-2xl mb-1">{room.name}</h2>
              <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-4">{room.subtitle}</p>
              <p className="text-sm text-ink-soft italic">{room.fragment}</p>

              <span className="mt-6 inline-block font-mono text-xs text-muted group-hover:text-blue transition-colors">
                enter &rarr;
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
