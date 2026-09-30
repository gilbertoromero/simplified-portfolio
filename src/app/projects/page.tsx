import type { Metadata } from "next";
import { ProjectList } from "@/components/project-list";
import { projectsByYear } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I have built and worked on.",
};

export default function ProjectsPage() {
  return (
    <section className="py-8">
      <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
      <p className="mt-4 text-muted">Things I have built and worked on.</p>
      <div className="mt-8">
        <ProjectList projects={projectsByYear} />
      </div>
    </section>
  );
}
