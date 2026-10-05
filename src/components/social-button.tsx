import Image from 'next/image'
import type { IconComponent } from '@/components/icons'

type SocialButtonProps = {
  name: string
  handle: string
  href: string
  icon: IconComponent
  image?: string
}

export function SocialButton({
  name,
  handle,
  href,
  icon: Icon,
  image,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      className="group not-prose no-underline border rounded-md p-2"
    >
      <div className="flex items-center">
        {image ? (
          <Image
            src={image}
            alt=""
            width={32}
            height={32}
            className="size-14"
          />
        ) : (
          <Icon className="size-14 shrink-0" />
        )}
        <div className="grid grid-cols-[0fr] group-hover:grid-cols-[1fr]  transition-all">
          <div className="min-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:pl-3">
            <p className="text-lg font-medium">{name}</p>
            <p>{handle}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
