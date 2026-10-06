import { SocialButton } from '@/components/social-button'
import { aboutPage } from '@/data/about-page'
import { site, socials } from '@/data/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: aboutPage.title,
  description: aboutPage.description,
}

export default function AboutPage() {
  return (
    <article className="prose prose-neutral py-8 dark:prose-invert">
      <section>
        <h1 className="text-3xl text-center font-semibold tracking-tight sm:text-4xl">
          {aboutPage.heading}
        </h1>
        {aboutPage.paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </section>
      <h2>Contact</h2>
      <p>
        {aboutPage.contact.before}
        <a href={`mailto:${site.links.email}`}>{aboutPage.contact.middle}</a>
        {aboutPage.contact.after}
      </p>
      <div className="flex justify-center gap-6">
        {socials.map((social) => {
          return <SocialButton key={social.handle} {...social} />
        })}
      </div>
    </article>
  )
}
