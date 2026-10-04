const links = {
  github: 'https://github.com/gilbertoromero',
  linkedin: 'https://www.linkedin.com/in/gilberto-romero-peiro-81773465',
  instagram: 'https://www.instagram.com/gilbertopeiro/',
}

export const site = {
  name: 'Gilberto Romero',
  fullname: 'Gilberto Romero Peiro',
  title: 'Software Engineer',
  description: 'Projects and notes by Your Name.',
  links,
  socials: [
    { name: 'GitHub', href: links.github, icon: 'GitHub' },
    { name: 'LinkedIn', href: links.linkedin, icon: 'LinkedIn' },
    { name: 'Instagram', href: links.instagram, icon: 'Instagram' },
  ] as const,
}
