import { site } from '@/data/site'
import Link from 'next/link'
import Image from 'next/image'

export function ProfileBadge() {
  return (
    <div className="flex">
      <Link href="/" tabIndex={-1} aria-hidden="true">
        <Image
          src={'/prof-cat.png'}
          width={80}
          height={80}
          alt=""
          className="size-20 rounded-full"
        />
      </Link>
      <div className="ml-4 flex flex-col justify-center">
        <Link
          href="/"
          className="font-bold text-xl tracking-normal text-muted hover:text-foreground"
        >
          {site.name}
        </Link>
        <p>{site.title}</p>
      </div>
    </div>
  )
}
