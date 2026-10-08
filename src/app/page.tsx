import { ProjectList } from '@/components/project-list'
import { projectsByYear } from '@/data/projects'

export default function Home() {
  return (
    <>
      <section className="py-8">
        <h1 className="text-4xl font-semibold tracking-tight">
          Recent projects
        </h1>
      </section>

      <section>
        <ProjectList projects={projectsByYear.slice(0, 2)} />
      </section>
    </>
  )
}
