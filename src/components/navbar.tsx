import Link from 'next/link'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
] as const

export function Navbar() {
  return (
    <nav className="flex gap-6 text-sm text-muted">
      {nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="hover:text-foreground"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
