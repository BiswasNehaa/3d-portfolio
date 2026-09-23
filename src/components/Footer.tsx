import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal py-10">
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <p className="font-display text-sm text-fg/90">Designed &amp; Built by {profile.name}</p>
          <p className="font-mono text-xs text-muted mt-1">
            Exploring intelligence, one system at a time.
          </p>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="focus-ring hover:text-ice">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="focus-ring hover:text-ice">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="focus-ring hover:text-ice">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
