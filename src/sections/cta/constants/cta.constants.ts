export const CTA = {
  title: 'What will you learn next?',
  description: 'Start with one course. Build from there.',
  actions: {
    primary: { label: 'Explore all courses', href: '#featured-course' },
    secondary: { label: 'Join Luma', href: '#contact' },
  },
} as const;

export const CTA_AVATAR_SIZE = 40;
export const CTA_FRAME = { width: 1280, height: 470 } as const;

export const CTA_AVATARS = [
  '/assets/cta/cta1.svg',
  '/assets/cta/cta2.svg',
  '/assets/cta/cta3.svg',
  '/assets/cta/cta4.svg',
] as const;

export const CTA_SHAPES_DIR = '/assets/cta/shapes';

// Decorative shapes. Position and size are percentages of the section
export const CTA_SHAPES = [
  { id: 'ring-large', left: 1.7, top: 3.4, width: 8.4 },
  { id: 'square-outline', left: 24.9, top: 9.2, width: 5.0 },
  { id: 'ring-small', left: 68.5, top: 9.2, width: 2.5 },
  { id: 'block-top-right', left: 89.5, top: 0, width: 10.4 },
  { id: 'drop-rays', left: 79.8, top: 19.3, width: 4.1 },
  { id: 'bubble', left: 11.2, top: 45.8, width: 2.3 },
  { id: 'block-left', left: -0.5, top: 49.9, width: 3.0 },
  { id: 'disc', left: 4.4, bottom: 0, sink: 15, width: 9.4 },
  { id: 'letter-b', left: 23.7, top: 80, width: 5.8 },
  { id: 'cube', left: 88.2, top: 49.0, width: 4.9 },
  { id: 'panels', left: 75.5, top: 83.0, width: 3.2 },
  { id: 'ring-bottom', left: 94.4, top: 91.4, width: 2.5 },
] as const;
