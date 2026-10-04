export const links = {
  email: 'hello@gilromero.dev',
  github: 'https://github.com/gilbertoromero',
  linkedin: 'https://www.linkedin.com/in/gilberto-romero-peiro-81773465',
  instagram: 'https://www.instagram.com/gilbertopeiro/',
}

export const site = {
  name: 'Gilberto Romero',
  fullname: 'Gilberto Romero Peiro',
  title: 'Software Engineer',
  description:
    'Gilberto Romero is a software engineer based in Mexico building full-stack web applications with Next.js and TypeScript. Co-founder of Pixpik Studio.',
  links,
  socials: [
    { name: 'GitHub', href: links.github, icon: 'GitHub' },
    { name: 'LinkedIn', href: links.linkedin, icon: 'LinkedIn' },
    { name: 'Instagram', href: links.instagram, icon: 'Instagram' },
  ] as const,
}
