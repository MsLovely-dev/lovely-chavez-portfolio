import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { projects } from '../data/portfolioData'

const ease = [0.22, 1, 0.36, 1]

function ProjectDetailPage({ slug, onDismiss }) {
  const project = projects.find((item) => item.slug === slug)
  const reduceMotion = useReducedMotion()
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!project) {
      onDismiss()
      return undefined
    }

    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const previouslyFocused = document.activeElement
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`
    }
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onDismiss()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusable?.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      document.removeEventListener('keydown', handleKeyDown)
      previouslyFocused?.focus?.()
    }
  }, [onDismiss, project])

  if (!project) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 p-4 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0.08 : 0.18, ease }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onDismiss()
      }}
    >
      <motion.article
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.slug}`}
        className="relative my-auto max-h-[calc(100vh-2rem)] w-full max-w-4xl overflow-x-hidden overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-[0_28px_90px_rgba(0,0,0,0.7)] sm:p-8"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.68 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: [0, 1, 1], scale: [0.68, 1.055, 1] }}
        exit={reduceMotion ? { opacity: 0 } : { opacity: [1, 0.9, 0], scale: [1, 1.035, 0.72] }}
        transition={{
          duration: reduceMotion ? 0.08 : 0.34,
          ease,
          times: reduceMotion ? undefined : [0, 0.72, 1],
        }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className={`project-orb project-orb-large project-orb-${project.accent}`} aria-hidden="true" />

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onDismiss}
          className="interactive-control absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface/85 text-xl text-muted hover:border-accent/60 hover:text-white"
          aria-label="Close project details"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="relative z-10 pr-10">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
            <h1
              id={`project-title-${project.slug}`}
              className="font-display text-xl font-semibold leading-tight text-white sm:text-2xl"
            >
              {project.title}
            </h1>
            <span className="font-mono text-sm text-muted sm:shrink-0">{project.year}</span>
          </div>

          <p className="mt-5 text-sm leading-7 text-muted sm:text-base sm:leading-8">{project.summary}</p>

          <ul className="mt-6 space-y-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
            {project.details.map((detail) => (
              <motion.li
                key={detail}
                className="flex gap-3"
                initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: reduceMotion ? 0.08 : 0.2, ease }}
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span>{detail}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <motion.span
                key={technology}
                className="project-tag rounded-md border border-accent/50 bg-accent/10 px-2.5 py-1 font-mono text-xs text-indigo-200"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0.08 : 0.18, ease }}
              >
                {technology}
              </motion.span>
            ))}
          </div>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent"
            >
              Visit live website <span aria-hidden="true">↗</span>
            </a>
          ) : null}
        </div>
      </motion.article>
    </motion.div>
  )
}

export default ProjectDetailPage
