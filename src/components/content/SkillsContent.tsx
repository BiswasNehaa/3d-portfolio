import { skillCategories } from "../../data/content";

export default function SkillsContent() {
  return (
    <div>
      <h1 className="font-display font-semibold text-4xl mb-2">The Lab</h1>
      <p className="text-charcoal-deep/70 mb-8">The tools and equipment on the bench.</p>

      <div className="flex flex-col gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.label}>
            <p className="font-mono text-[10px] uppercase tracking-widest text-orange mb-2.5">{cat.label}</p>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1.5 rounded-md bg-cream border border-charcoal-deep/10 text-charcoal-deep/80"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
