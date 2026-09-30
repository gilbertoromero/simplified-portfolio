import { site } from '@/data/site'

export function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-col items-center flex-wrap justify-between gap-4 border-border py-8 text-sm text-muted">
      <p>© {new Date().getFullYear()} Gilberto Romero. All rights reserved.</p>
      <div className="flex gap-6">
        <a href={site.links.github} className="hover:text-foreground">
          GitHub
        </a>
        <a href={site.links.email} className="hover:text-foreground">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
