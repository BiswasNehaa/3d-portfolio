import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { bearings } from "../../data/content";
import type { SceneId } from "../../state/useScene";

const bearingLabel: Record<string, string> = Object.fromEntries(bearings.map((b) => [b.id, b.label]));

export default function TopBar({ scene, go }: { scene: SceneId; go: (s: SceneId) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const locationLabel =
    scene === "hub" ? "The Chart" : scene.startsWith("project:") ? "The Workshop" : bearingLabel[scene] ?? "";

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 md:px-8 h-16 bg-ink/85 backdrop-blur-sm border-b border-line">
        <button
          onClick={() => go("hub")}
          className="focus-ring font-display font-semibold text-lg tracking-tight text-cream flex items-center gap-2"
          aria-label="Return to the chart"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-brass" aria-hidden="true" />
          NEHA<span className="text-brass">.</span>
        </button>

        <p className="hidden sm:block font-mono text-[11px] uppercase tracking-widest text-muted">
          {locationLabel && `Bearing — ${locationLabel}`}
        </p>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="focus-ring font-mono text-xs uppercase tracking-widest px-3 py-2 rounded border border-line text-cream hover:border-brass hover:text-brass transition-colors"
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
            className="fixed top-16 inset-x-0 z-50 bg-ink border-b border-line shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            aria-label="Site navigation"
          >
            <ul className="max-w-3xl mx-auto px-5 md:px-8 py-6 grid sm:grid-cols-2 gap-2">
              <li>
                <button
                  onClick={() => {
                    go("hub");
                    setMenuOpen(false);
                  }}
                  className="focus-ring w-full text-left px-4 py-3 rounded hover:bg-panel font-display text-lg text-cream"
                >
                  The Chart <span className="text-muted text-sm font-body">— Home</span>
                </button>
              </li>
              {bearings.map((b) => (
                <li key={b.id}>
                  <button
                    onClick={() => {
                      go(b.id);
                      setMenuOpen(false);
                    }}
                    className="focus-ring w-full text-left px-4 py-3 rounded hover:bg-panel font-display text-lg text-cream"
                  >
                    {b.label} <span className="text-muted text-sm font-body">— {b.subtitle}</span>
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
