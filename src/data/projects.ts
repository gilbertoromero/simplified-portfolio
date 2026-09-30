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
    slug: 'Bitso Futfolio',
    title: 'Bitso Futfolio',
    description:
      'Created to run alongside worldcup, enable certain benefits on the Bitso App investors that played',
    year: 2026,
    tags: ['TypeScript', 'R3Fiber', 'Tailwind CSS'],
    //repo: 'https://github.com/your-handle/simplified-portfolio',
  },
]

export const projectsByYear = [...projects].sort((a, b) => b.year - a.year)
