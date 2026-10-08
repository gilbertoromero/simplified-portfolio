import type { Metadata } from 'next'
import { ProjectList } from '@/components/project-list'
import { projectsByYear } from '@/data/projects'
import { projectsPage } from '@/data/projects-page'

export const metadata: Metadata = {
  title: projectsPage.title,
  description: projectsPage.description,
}

export default function ProjectsPage() {
  return (
    <section className="py-8">
      <h1 className="text-4xl font-semibold tracking-tight">
        {projectsPage.title}
      </h1>
      <p className="mt-4 text-muted">{projectsPage.paragraph}</p>
      <div className="mt-8">
        <ProjectList projects={projectsByYear} />
      </div>
    </section>
  )
}
