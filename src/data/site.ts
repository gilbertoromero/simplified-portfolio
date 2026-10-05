import { Icons } from '@/components/icons'

export const links = {
  email: 'hello@gilromero.dev',
  github: 'https://github.com/gilbertoromero',
  linkedin: 'https://www.linkedin.com/in/gilberto-romero-peiro-81773465',
  instagram: 'https://www.instagram.com/gilbertopeiro/',
}

export const socials = [
  {
    name: 'GitHub',
    handle: '@gilbertoromero',
    href: links.github,
    icon: Icons.GitHub,
  },
  {
    name: 'LinkedIn',
    handle: '@gilberto-romero-peiro',
    href: links.linkedin,
    icon: Icons.LinkedIn,
  },
  {
    name: 'Instagram',
    handle: '@gilbertopeiro',
    href: links.instagram,
    icon: Icons.Instagram,
    image: '/instagram-96x96.webp',
  },
]

export const site = {
  name: 'Gilberto Romero',
  fullname: 'Gilberto Romero Peiro',
  title: 'Software Engineer',
  description:
    'Gilberto Romero is a software engineer based in Mexico building full-stack web applications with Next.js and TypeScript. Co-founder of Pixpik Studio.',
  links,
  socials,
}
