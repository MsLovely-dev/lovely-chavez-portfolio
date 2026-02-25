function SkillCategory({ category, skills }) {
  return (
    <article className="rounded-2xl border border-border/80 bg-card/90 p-6 shadow-panel">
      <h3 className="font-display text-xl font-semibold text-white">{category}</h3>
      <ul className="mt-5 space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-sm text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default SkillCategory
