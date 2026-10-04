import { Icons } from '@/components/icons'
import { site } from '@/data/site'

export function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-col items-center flex-wrap justify-between gap-4 border-border py-8 text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {site.fullname}. All rights reserved.
      </p>
      <div className="flex gap-6">
        {site.socials.map(({ name, href, icon }) => {
          const Icon = Icons[icon]
          return (
            <a
              key={name}
              href={href}
              aria-label={name}
              className="text-muted size-8 hover:text-foreground"
            >
              <Icon />
            </a>
          )
        })}
      </div>
    </footer>
  )
}
