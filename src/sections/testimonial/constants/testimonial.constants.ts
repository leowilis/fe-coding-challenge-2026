export const TESTIMONIAL = {
  quoteMark: '/assets/icon/quote.svg',
  quote:
    'The lessons are short enough to fit into my week, but detailed enough that I actually leave with something I can use.',
  author: {
    name: 'Alex Morgan',
    role: 'Product Manager',
    avatar: {
      src: '/assets/testimonial/avatar.svg',
      alt: 'Portrait of Alex Morgan',
      size: 48,
    },
  },
} as const;

export const STATS = [
  { value: '24K+', label: 'active learners' },
  { value: '120+', label: 'expert-led courses' },
  { value: '92%', label: 'complete their first course' },
] as const;

export const QUOTE_ICON_SIZE = { width: 28, height: 24 };