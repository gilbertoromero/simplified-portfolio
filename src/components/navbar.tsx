'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
] as const

export function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="flex gap-6 text-sm text-muted">
      {nav.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center hover:text-foreground"
          >
            <span>{item.label}</span>
            <span
              className={`block border-b border-current transition-[width,opacity] duration-350 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
            ></span>
          </Link>
        )
      })}
    </nav>
  )
}
