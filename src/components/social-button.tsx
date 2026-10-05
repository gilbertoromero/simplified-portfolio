import Image from 'next/image'
import type { IconComponent } from '@/components/icons'

type SocialButtonProps = {
  name: string
  handle: string
  href: string
  icon: IconComponent
  iconColor?: string
  image?: string
}

export function SocialButton({
  name,
  handle,
  href,
  icon: Icon,
  iconColor,
  image,
}: SocialButtonProps) {
  return (
    <a
      href={href}
      className="group not-prose no-underline border rounded-md bg-foreground p-2"
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
          <span className="shrink-0" style={{ color: iconColor }}>
            <Icon className="size-14" />
          </span>
        )}
        <div className="grid grid-cols-[0fr] text-background group-hover:grid-cols-[1fr] transition-all">
          <div className="min-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:pl-3">
            <p className="text-lg font-medium">{name}</p>
            <p>{handle}</p>
          </div>
        </div>
      </div>
    </a>
  )
}
