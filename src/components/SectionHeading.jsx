function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <header className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{subtitle}</p> : null}
    </header>
  )
}

export default SectionHeading
