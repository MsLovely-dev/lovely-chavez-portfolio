function ProjectCard({ title, image, points, liveUrl }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-panel">
      <img src={image} alt={`${title} preview`} className="h-44 w-full border-b border-border/70 object-cover" />
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold leading-tight text-white">{title}</h3>
        <ul className="mt-5 space-y-3 text-sm leading-6 text-muted">
          {points.map((point) => (
            <li key={point} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-lg border border-accent/50 px-4 py-2 text-sm font-semibold text-accent hover:border-accent"
          >
            Visit Website
          </a>
        ) : null}
      </div>
    </article>
  )
}

export default ProjectCard
