export const FEATURED_COURSE = {
  badge: 'Featured Course',
  eyebrow: 'MOST POPULAR THIS MONTH',
  title: 'Designing products people understand.',
  description:
    'Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.',
  instructor: {
    name: 'Maya Chen',
    role: 'Senior Product Designer',
  },
  image: {
    src: '/assets/course/course.svg',
    alt: 'Featured course preview',
    width: 362,
    height: 280,
  },
  metadata: [
    {
      label: 'Lessons',
      value: '8 lessons',
    },
    {
      label: 'Duration',
      value: '2h 40min',
    },
    {
      label: 'Level',
      value: 'Intermediate',
    },
  ],
  actions: {
    primary: 'View course',
    secondary: 'Browse all courses',
  },
} as const;
