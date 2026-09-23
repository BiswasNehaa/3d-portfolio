import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { rooms } from "../../data/content";
import type { SceneId } from "../../state/useScene";

const roomLabel: Record<string, string> = Object.fromEntries(rooms.map((r) => [r.id, r.name]));

export default function TopBar({
  scene,
  go,
}: {
  scene: SceneId;
  go: (s: SceneId) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const locationLabel = scene === "hub" ? "The World" : scene.startsWith("project:") ? "The Workshop" : roomLabel[scene] ?? "";

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-8 h-16 bg-cream/90 backdrop-blur-sm border-b border-line">
        <button
          onClick={() => go("hub")}
          className="focus-ring font-display font-semibold text-lg tracking-tight text-ink flex items-center gap-2"
          aria-label="Return to the world"
        >
          <span
            className="inline-block w-2.5 h-2.5 rounded-full bg-blue"
            aria-hidden="true"
          />
          NEHA<span className="text-blue">.</span>
        </button>

        <p className="hidden sm:block font-mono text-[11px] uppercase tracking-widest text-muted">
          {locationLabel && `You are in — ${locationLabel}`}
        </p>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="focus-ring font-mono text-xs uppercase tracking-widest px-3 py-2 rounded border border-line text-ink hover:border-blue hover:text-blue transition-colors"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="site-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-50 bg-cream border-b border-line shadow-[0_12px_30px_rgba(27,23,16,0.08)]"
            aria-label="Site navigation"
          >
            <ul className="max-w-3xl mx-auto px-5 md:px-8 py-6 grid sm:grid-cols-2 gap-2">
              <li>
                <button
                  onClick={() => {
                    go("hub");
                    setMenuOpen(false);
                  }}
                  className="focus-ring w-full text-left px-4 py-3 rounded hover:bg-panel/60 font-display text-lg"
                >
                  The World <span className="text-muted text-sm font-body">— Home</span>
                </button>
              </li>
              {rooms.map((room) => (
                <li key={room.id}>
                  <button
                    onClick={() => {
                      go(room.id);
                      setMenuOpen(false);
                    }}
                    className="focus-ring w-full text-left px-4 py-3 rounded hover:bg-panel/60 font-display text-lg"
                  >
                    {room.name} <span className="text-muted text-sm font-body">— {room.subtitle}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
