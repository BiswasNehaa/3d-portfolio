import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? scrollTop / height : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="h-[2px] bg-line/60">
        <div
          className="h-full bg-gradient-to-r from-ice via-violet to-magenta transition-[width] duration-150"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
      <nav className="backdrop-blur-md bg-void/70 border-b border-line/60">
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-display font-semibold tracking-tight text-fg focus-ring"
          >
            NB<span className="text-violet">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`focus-ring px-3 py-2 rounded-md transition-colors ${
                    active === link.href
                      ? "text-ice"
                      : "text-muted hover:text-fg"
                  }`}
                  aria-current={active === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden focus-ring p-2 text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`block h-[1.5px] bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-[1.5px] bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-line/60 font-mono text-sm uppercase tracking-wider"
            >
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block px-6 py-3 text-muted hover:text-ice"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
