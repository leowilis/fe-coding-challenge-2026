export const FOOTER = {
  logo: { src: '/assets/logo/Logo.svg', width: 64, height: 17 },
  tagline: 'Practical learning for curious people.',
  company: 'Luma Learning',
} as const;

export const FOOTER_COLUMNS = [
  {
    title: 'Explore',
    links: [
      { label: 'Courses', href: '#courses' },
      { label: 'Categories', href: '#skills' },
      { label: 'Instructors', href: '#people' },
      { label: 'For Teams', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Journal', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact', href: '#contact' },
      { label: 'Terms', href: '#' },
      { label: 'Privacy', href: '#' },
    ],
  },
] as const;
