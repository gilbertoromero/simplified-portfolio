import type { Project } from '@/data/projects'

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="divide-y divide-border">
      {projects.map((project) => {
        const href = project.url ?? project.repo
        return (
          <li key={project.slug} className="py-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium">
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 hover:underline"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h2>
              <span className="shrink-0 font-mono text-sm text-muted">
                {project.year}
              </span>
            </div>
            <p className="mt-2 text-muted">{project.description}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              {project.tags.join(' · ')}
            </p>
          </li>
        )
      })}
    </ul>
  )
}
