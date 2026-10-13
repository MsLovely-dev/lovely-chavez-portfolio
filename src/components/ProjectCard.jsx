import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'

const spring = { stiffness: 260, damping: 26, mass: 0.8 }

function ProjectCard({ project, onOpen }) {
  const reduceMotion = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [2.2, -2.2]), spring)
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-2.2, 2.2]), spring)

  const handlePointerMove = (event) => {
    if (reduceMotion || event.pointerType === 'touch') return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  const resetTilt = () => {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.article
      className="featured-item project-card group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-surface/70 p-5 sm:p-6"
      initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      style={reduceMotion ? undefined : { rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <div className={`project-orb project-orb-${project.accent}`} aria-hidden="true" />
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-col gap-2">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">{project.category}</p>
            <h3 className="featured-title mt-2 text-lg font-semibold leading-tight text-white">
              {project.title}
            </h3>
          </div>
          <span className="featured-year font-mono text-xs text-muted">{project.year}</span>
        </div>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tag) => (
            <span key={tag} className="project-tag rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-xs text-indigo-200">{tag}</span>
          ))}
          {project.technologies.length > 5 ? (
            <span className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted">+{project.technologies.length - 5}</span>
          ) : null}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-4 pt-6">
          <button
            type="button"
            onClick={() => onOpen(project.slug)}
            className="project-link inline-flex items-center gap-2 text-sm font-semibold text-accent"
          >
            Explore project <span aria-hidden="true">→</span>
          </button>
          {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-sm font-semibold text-muted hover:text-white">Visit website ↗</a> : null}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
