import { projects } from './data/portfolioData'

const sectionClassName = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10'

const coreStack = {
  backend: ['Django', 'Django REST Framework', 'Django Channels', 'Daphne (ASGI)'],
  frontend: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Django Templates', 'JavaScript', 'CSS'],
  dataInfra: ['SQLite', 'PostgreSQL', 'WebSocket (ws/notifications/)',],
  integrations: ['Microsoft Graph API', 'Azure AD', 'SharePoint'],
}

function App() {
  const featuredProjects = projects
    .map((project, index) => ({
      title: project.title,
      summary: project.points[0],
      highlights: project.points.slice(1, 5),
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
          <nav aria-label="Primary" className="hidden gap-6 text-sm text-muted sm:flex">
            <a href="#profile" className="hover:text-white">Profile</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className={`${sectionClassName} py-14`}>
          <div className="rounded-3xl border border-border/80 bg-card/85 p-8 shadow-panel sm:p-10">
            <div className="grid items-start gap-8 lg:grid-cols-[1.45fr_1fr]">
              <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
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
                  href="/files/Lovely-Chavez-Resume.pdf"
                  download
                  className="rounded-lg border border-border bg-surface/80 px-6 py-3 text-sm font-semibold text-text hover:border-accent/60 hover:text-white"
                >
                  Download Resume
                </a>
              </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <div className="rounded-2xl border border-border/80 bg-surface/70 p-4">
                  <p className="text-3xl font-bold text-white">2+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">Years Experience</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/70 p-4">
                  <p className="text-3xl font-bold text-white">4+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">Systems Delivered</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/70 p-4">
                  <p className="text-3xl font-bold text-white">10+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">Workflow Engines</p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/70 p-4">
                  <p className="text-3xl font-bold text-white">99.9%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted">Reliability Focus</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className={`${sectionClassName} py-6`}>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <article className="rounded-3xl border border-border/80 bg-card/90 p-8 shadow-panel">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg bg-violet-500/15 px-2 py-1 text-violet-300">{`{}`}</span>
                <h2 className="font-display text-3xl font-semibold text-white">About</h2>
              </div>
              <p className="max-w-4xl text-lg leading-9 text-muted">
                My core role is Backend Developer, and I have grown into a Software Engineer I
                role. I specialize in business-rule logic, timesheet computation,
                overtime handling, and workflow automation, and I also deliver frontend work when
                projects require end-to-end implementation. I focus on turning complex,
                compliance-heavy processes into reliable software with clear API contracts and
                production-safe behavior. I also do vibe coding for rapid prototyping and idea
                exploration.
              </p>
            </article>

            <article className="rounded-3xl border border-border/80 bg-card/90 p-8 shadow-panel">
              <div className="mb-5 flex items-center gap-3">
                <span className="rounded-lg bg-emerald-500/15 px-2 py-1 text-emerald-300">&lt;/&gt;</span>
                <h2 className="font-display text-3xl font-semibold text-white">Core Stack</h2>
              </div>
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-muted">Backend</p>
                  <div className="flex flex-wrap gap-2">
                    {coreStack.backend.map((item) => (
                      <span key={item} className="rounded-lg border border-border bg-surface/80 px-3 py-1 text-sm text-text">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-muted">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {coreStack.frontend.map((item) => (
                      <span key={item} className="rounded-lg border border-border bg-surface/80 px-3 py-1 text-sm text-text">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-muted">Data & Infra</p>
                  <div className="flex flex-wrap gap-2">
                    {coreStack.dataInfra.map((item) => (
                      <span key={item} className="rounded-lg border border-border bg-surface/80 px-3 py-1 text-sm text-text">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.16em] text-muted">Integrations</p>
                  <div className="flex flex-wrap gap-2">
                    {coreStack.integrations.map((item) => (
                      <span key={item} className="rounded-lg border border-border bg-surface/80 px-3 py-1 text-sm text-text">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="work" className={`${sectionClassName} py-6`}>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <article className="rounded-3xl border border-border/80 bg-card/90 p-8 shadow-panel">
              <div className="mb-6 flex items-center gap-3">
                <span className="rounded-lg bg-fuchsia-500/15 px-2 py-1 text-fuchsia-300">◈</span>
                <h2 className="font-display text-3xl font-semibold text-white">Featured Work</h2>
              </div>
              <div className="space-y-4">
                {featuredProjects.map((project) => (
                  <article key={project.title} className="rounded-2xl border border-border/80 bg-surface/70 p-4 sm:p-5">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="text-xl font-semibold leading-tight text-white">{project.title}</h3>
                      <span className="text-xs text-muted sm:shrink-0">{project.year}</span>
                    </div>
                    <p className="mt-3 text-base text-muted">{project.summary}</p>
                    <ul className="mt-4 space-y-2">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-2 text-sm leading-6 text-muted">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

            <div className="space-y-6">
              <article id="contact" className="rounded-3xl border border-border/80 bg-card/90 p-8 shadow-panel">
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-lg bg-cyan-500/15 px-2 py-1 text-cyan-300">@</span>
                  <h2 className="font-display text-3xl font-semibold text-white">Contact</h2>
                </div>
                <ul className="space-y-3 text-base text-muted">
                  <li>
                    <a className="hover:text-white" href="mailto:chavezlovelym@gmail.com">
                      chavezlovelym@gmail.com
                    </a>
                  </li>
                  {/* <li>
                    <a className="hover:text-white" href="https://github.com/lovelymaechavez" target="_blank" rel="noreferrer">
                      github.com/lovelymaechavez
                    </a>
                  </li> */}
                  <li>
                    <a className="hover:text-white" href="https://www.linkedin.com/in/lovely-mae-chavez-046a342b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">
                      linkedin.com/in/lovely-mae-chavez-046a342b0
                    </a>
                  </li>
                </ul>
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
