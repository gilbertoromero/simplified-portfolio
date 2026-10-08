export type Project = {
  slug: string
  title: string
  description: string
  year: number
  tags: string[]
  url?: string
  repo?: string
}

export const projects: Project[] = [
  {
    slug: 'lpan',
    title: 'LPAN',
    description:
      "Management platform for a B2B bakery in Querétaro, from client orders to production and delivery at the client's door.",
    year: 2026,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Serverless', 'PostgreSQL'],
    url: 'https://lpan.com.mx',
  },
  {
    slug: 'futfolio-26',
    title: 'Futfolio 26',
    description:
      'World Cup companion game for the Bitso app, where investors who played competed to unlock in-app benefits.',
    year: 2026,
    tags: [
      'TypeScript',
      'React Three Fiber',
      'Tailwind CSS',
      'MongoDB',
      'Serverless',
    ],
    url: 'https://demo.bitso.futfolio.com/',
  },
  /* {
    slug: 'litrush',
    title: 'LitRush',
    description:
      'Web game for Electrolit that drives brand engagement with its customers.',
    year: 2024,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Serverless', 'MongoDB'],
    url: '',
  }, */
  {
    slug: 'ucg',
    title: 'Universidad Corporativa Gentera',
    description:
      "Learning platform for Gentera's corporate university, where the training team manages courses, articles and a variety of content for employees.",
    year: 2025,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Serverless', 'PostgreSQL'],
    url: 'https://www.universidadcorporativagentera.com/',
  },
]

export const projectsByYear = [...projects].sort((a, b) => b.year - a.year)
