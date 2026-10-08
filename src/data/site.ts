import { Icons } from '@/components/icons'

export const links = {
  email: 'hello@gilromero.dev',
  github: 'https://github.com/gilbertoromero',
  linkedin: 'https://www.linkedin.com/in/gilberto-romero-peiro',
  instagram: 'https://www.instagram.com/gilbertopeiro/',
}

export const socials = [
  {
    name: 'GitHub',
    handle: '@gilbertoromero',
    href: links.github,
    icon: Icons.GitHub,
    iconColor: '#1b1817',
  },
  {
    name: 'LinkedIn',
    handle: '@gilberto-romero-peiro',
    href: links.linkedin,
    icon: Icons.LinkedIn,
    iconColor: '#0A66C2',
  },
  {
    name: 'Instagram',
    handle: '@gilbertopeiro',
    href: links.instagram,
    icon: Icons.Instagram,
    image: '/instagram-logo.svg',
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
