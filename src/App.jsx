import { useEffect, useState } from 'react'
import { projects } from './data/portfolioData'

const sectionClassName = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10'

const coreStack = {
  backend: ['Django', 'Django REST Framework', 'Django Channels', 'Daphne (ASGI)'],
  frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Django Templates', 'JavaScript', 'CSS'],
  dataInfra: ['SQLite', 'PostgreSQL', 'WebSocket (ws/notifications/)', 'Azure VM', 'Azure App Service'],
  integrations: ['Microsoft Graph API', 'Azure AD', 'SharePoint'],
}

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('theme-light', theme === 'light')
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const featuredProjects = projects
    .map((project, index) => ({
      title: project.title,
      summary:
        project.points.find((point) => point.startsWith('Overview:'))?.replace('Overview:', '').trim() ||
        project.points[0],
      stackTags:
        project.points
          .find((point) => point.startsWith('Stack:'))
          ?.replace('Stack:', '')
          .split(',')
          .map((item) => item.trim())
          .filter(Boolean) || [],
      year: project.year ?? 2026 - index,
      liveUrl: project.liveUrl,
    }))
    .sort((a, b) => b.year - a.year)

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-surface/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
          <a href="#home" className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Lovely Mae Chavez
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-border/80 bg-card/70 px-4 py-2 text-xs text-muted md:flex">
            <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
            Available for hire
          </div>
          <div className="flex items-center gap-4 sm:gap-5">
            <nav aria-label="Primary" className="hidden gap-6 text-sm text-muted sm:flex">
              <a href="#profile" className="hover:text-white">Profile</a>
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </nav>
            <button
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/80 text-muted transition-colors hover:text-white"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <circle cx="12" cy="12" r="3.6" />
                  <path d="M12 2.8v2.3M12 18.9v2.3M21.2 12h-2.3M5.1 12H2.8M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                  <path d="M20.4 14.8A8.8 8.8 0 1 1 9.2 3.6a7.2 7.2 0 0 0 11.2 11.2Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className={`${sectionClassName} py-14`}>
          <div className="card-hover rounded-3xl border border-border/80 bg-card/85 p-8 shadow-panel sm:p-10">
            <div>
              <p className="font-mono text-sm text-muted">
                Backend Developer to Software Engineer I
              </p>
              <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-6xl">
                Lovely Mae{' '}
                <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                  Chavez
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
                Backend-focused engineer building business systems, time computation logic, and
                workflow automation, while delivering full-stack implementation when needed.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white"
                >
                  View Projects
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}files/Lovely-Chavez-Resume.pdf`}
                  download
                  className="rounded-lg border border-border bg-surface/80 px-6 py-3 text-sm font-semibold text-text hover:border-accent/60 hover:text-white"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="card-hover rounded-2xl border border-border/80 bg-surface/70 p-5">
                <p className="text-4xl font-bold text-white">2+</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-muted">Years Experience</p>
              </div>
              <div className="card-hover rounded-2xl border border-border/80 bg-surface/70 p-5">
                <p className="text-4xl font-bold text-white">4+</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-muted">Systems Delivered</p>
              </div>
              <div className="card-hover rounded-2xl border border-border/80 bg-surface/70 p-5">
                <p className="text-4xl font-bold text-white">10+</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-muted">Workflow Engines</p>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className={`${sectionClassName} py-6`}>
          <div className="grid items-start gap-6 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              <article className="featured-panel rounded-3xl border border-border/80 bg-card/90 p-8 shadow-panel">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-lg bg-violet-500/15 p-2 text-violet-300" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <circle cx="12" cy="8" r="3.2" />
                      <path d="M5.5 19c.7-3 3.4-4.8 6.5-4.8s5.8 1.8 6.5 4.8" />
                    </svg>
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-white">About</h2>
                </div>
                <p className="max-w-4xl text-base leading-8 text-muted mb-5">
                  My core role is Backend Developer, and I have grown into a Software Engineer I position.
                  I build reliable systems, implement business logic, and support workflow automation,
                  while also contributing to frontend development when end-to-end delivery is required.
                </p>

                <p className="max-w-4xl text-base leading-8 text-muted">
                  I focus on translating complex processes into stable, maintainable software with clear
                  structure and production-ready standards. I also handle deployments and practice rapid
                  prototyping (“vibe coding”) to efficiently explore and validate ideas.
                </p>
              </article>

              <article id="work" className="card-hover rounded-3xl border border-border/80 bg-card/90 p-8 shadow-panel">
                <div className="mb-6 flex items-center gap-3">
                  <span className="rounded-lg bg-fuchsia-500/15 p-2 text-fuchsia-300" aria-hidden="true">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M10 3h4l1 4 3 6a2 2 0 0 1-1.8 3H7.8A2 2 0 0 1 6 13l3-6 1-4z" />
                      <path d="M9 11h6" />
                    </svg>
                  </span>
                  <h2 className="font-display text-xl font-semibold text-white">Featured Work</h2>
                </div>
                <div className="space-y-4">
                  {featuredProjects.map((project, itemIndex) => (
                    <article
                      key={project.title}
                      className={`featured-item group rounded-2xl border bg-surface/70 p-4 sm:p-5 ${
                        itemIndex === 0 ? 'border-accent/60' : 'border-border/80'
                      }`}
                    >
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <h3
                          className={`featured-title text-1xl font-semibold leading-tight transition-colors duration-300 ${
                            itemIndex === 0 ? 'text-indigo-400' : 'text-white'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <span className="featured-year text-xs text-muted transition-colors duration-300 sm:shrink-0">
                          {project.year}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-muted">{project.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.stackTags.map((tag) => (
                          <span
                            key={tag}
                            className="project-tag rounded-md border border-accent/40 bg-accent/10 px-2.5 py-1 text-xs font-mono text-indigo-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex text-sm font-semibold text-accent hover:underline"
                        >
                          Visit Website
                        </a>
                      ) : null}
                    </article>
                  ))}
                </div>
              </article>
            </div>

            <div className="space-y-6">
              <article className="card-hover rounded-3xl border border-border/80 bg-card/90 p-8 shadow-panel">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-lg bg-emerald-500/15 px-2 py-1 text-emerald-300">&lt;/&gt;</span>
                  <h2 className="font-display text-2xl font-semibold text-zinc-300">Core Stack</h2>
                </div>
                <div className="space-y-5">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.16em] text-zinc-500">Backend</p>
                    <div className="flex flex-wrap gap-2">
                      {coreStack.backend.map((item) => (
                        <span key={item} className="stack-chip rounded-lg border border-zinc-700 bg-zinc-800/85 px-3 py-1 text-sm text-zinc-400">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.16em] text-zinc-500">Frontend</p>
                    <div className="flex flex-wrap gap-2">
                      {coreStack.frontend.map((item) => (
                        <span key={item} className="stack-chip rounded-lg border border-zinc-700 bg-zinc-800/85 px-3 py-1 text-sm text-zinc-400">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.16em] text-zinc-500">Data & Infra</p>
                    <div className="flex flex-wrap gap-2">
                      {coreStack.dataInfra.map((item) => (
                        <span key={item} className="stack-chip rounded-lg border border-zinc-700 bg-zinc-800/85 px-3 py-1 text-sm text-zinc-400">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.16em] text-zinc-500">Integrations</p>
                    <div className="flex flex-wrap gap-2">
                      {coreStack.integrations.map((item) => (
                        <span key={item} className="stack-chip rounded-lg border border-zinc-700 bg-zinc-800/85 px-3 py-1 text-sm text-zinc-400">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <article id="contact" className="card-hover rounded-3xl border border-border/80 bg-card/90 p-8 shadow-panel">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-lg bg-cyan-500/15 px-2 py-1 text-cyan-300">@</span>
                  <h2 className="font-display text-2xl font-semibold text-zinc-300">Contact</h2>
                </div>
                <ul className="space-y-4 text-sm text-zinc-400">
                  <li>
                    <a className="flex items-center gap-3 hover:text-zinc-100" href="mailto:chavezlovelym@gmail.com">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                        <path d="M4 7l8 6 8-6" />
                      </svg>
                      <span className="font-mono">chavezlovelym@gmail.com</span>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.828 0L6.343 16.657a8 8 0 1 1 11.314 0Z" />
                        <circle cx="12" cy="11" r="2.5" />
                      </svg>
                      <span>Binangona Rizal</span>
                    </div>
                  </li>
                </ul>
                <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
                  <a
                    href="https://github.com/MsLovely-dev"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn rounded-lg border border-zinc-700 bg-zinc-800/85 p-2.5 text-zinc-400 transition-colors hover:text-zinc-100"
                    aria-label="GitHub"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.82c.56.1.76-.24.76-.54v-1.9c-3.1.67-3.75-1.32-3.75-1.32-.5-1.3-1.25-1.64-1.25-1.64-1.03-.7.08-.7.08-.7 1.13.08 1.73 1.18 1.73 1.18 1.01 1.74 2.64 1.24 3.28.95.1-.74.4-1.24.72-1.52-2.47-.29-5.07-1.24-5.07-5.5 0-1.22.43-2.22 1.15-3-.12-.28-.5-1.43.1-2.98 0 0 .94-.3 3.08 1.16a10.6 10.6 0 0 1 5.6 0c2.15-1.46 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.78 1.15 1.78 1.15 3 0 4.27-2.6 5.21-5.08 5.5.41.36.77 1.05.77 2.13v3.16c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lovely-mae-chavez-046a342b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn rounded-lg border border-zinc-700 bg-zinc-800/85 p-2.5 text-zinc-400 transition-colors hover:text-zinc-100"
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M5.2 3.5A1.7 1.7 0 1 0 5.2 7a1.7 1.7 0 0 0 0-3.5ZM3.9 8.5h2.6v11.6H3.9V8.5Zm6.4 0h2.5v1.6h.04c.35-.67 1.2-1.38 2.48-1.38 2.65 0 3.14 1.74 3.14 4v7.37h-2.6v-6.53c0-1.56-.03-3.57-2.17-3.57-2.18 0-2.52 1.7-2.52 3.46v6.64h-2.6V8.5Z" />
                    </svg>
                  </a>
                  <a
                    href="https://x.com/chavezlovelym"
                    target="_blank"
                    rel="noreferrer"
                    className="social-btn rounded-lg border border-zinc-700 bg-zinc-800/85 p-2.5 text-zinc-400 transition-colors hover:text-zinc-100"
                    aria-label="X (Twitter)"
                  >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 text-xs text-muted sm:px-6 lg:px-10">
          <p>Lovely Mae Chavez</p>
          <p>Backend Developer | Software Engineer I</p>
        </div>
      </footer>
    </>
  )
}

export default App
