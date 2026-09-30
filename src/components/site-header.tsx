import { Navbar } from './navbar'
import { ProfileBadge } from './profile-badge'

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4 py-10">
      <ProfileBadge />
      <Navbar />
    </header>
  )
}
