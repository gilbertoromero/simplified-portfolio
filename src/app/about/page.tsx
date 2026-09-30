import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'A little about me.',
}

export default function AboutPage() {
  return (
    <article className="prose prose-neutral py-8 dark:prose-invert">
      <section className="py-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hi, I build web applications.
        </h1>
        <>Brief intro of myself</>
      </section>
      <h2>Contact</h2>
      <ul>
        <li>
          <a href="https://github.com/gilbertoromero">GitHub</a>
        </li>
      </ul>
    </article>
  )
}
