import Link from 'next/link'
import { site } from '@/data/site'
import { Navbar } from './navbar'

export function SiteHeader() {
  return (
    <header className="flex items-baseline justify-between gap-4 py-10">
      <Link href="/" className="font-semibold tracking-tight">
        {site.name}
      </Link>
      <Navbar />
    </header>
  )
}
