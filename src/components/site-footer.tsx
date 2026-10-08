import { site } from '@/data/site'

export function SiteFooter() {
  return (
    <footer className="mt-24 flex flex-col items-center flex-wrap justify-between gap-4 border-border py-8 text-sm text-muted">
      <p>
        © {new Date().getFullYear()} {site.fullname}. All rights reserved.
      </p>
      <div className="flex gap-6">
        {site.socials.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className="hover:text-foreground"
          >
            <Icon className="size-6" />
          </a>
        ))}
      </div>
    </footer>
  )
}
