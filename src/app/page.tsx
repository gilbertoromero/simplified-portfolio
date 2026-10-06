import { ProjectList } from '@/components/project-list'
import { projectsByYear } from '@/data/projects'

export default function Home() {
  return (
    <>
      <section className="py-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Recent projects
        </h1>
      </section>

      <section>
        <ProjectList projects={projectsByYear.slice(0, 3)} />
      </section>
    </>
  )
}
