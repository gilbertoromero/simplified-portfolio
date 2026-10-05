import { SocialButton } from '@/components/social-button'
import { about } from '@/data/about'
import { site, socials } from '@/data/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Gilberto Romero, software engineer and co-founder of Pixpik Studio.',
}

export default function AboutPage() {
  return (
    <article className="prose prose-neutral py-8 dark:prose-invert">
      <section>
        <h1 className="text-3xl text-center font-semibold tracking-tight sm:text-4xl">
          {about.title}
        </h1>
        {about.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </section>
      <h2>Contact</h2>
      <p>
        {about.contact.before}
        <a href={`mailto:${site.links.email}`}>{about.contact.middle}</a>
        {about.contact.after}
      </p>
      <div className="flex justify-center gap-6">
        {socials.map((social) => {
          return <SocialButton key={social.handle} {...social} />
        })}
      </div>
    </article>
  )
}
