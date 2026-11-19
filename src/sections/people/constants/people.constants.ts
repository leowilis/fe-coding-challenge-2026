export const PEOPLE = {
  eyebrow: 'The people',
  title: 'Meet international students & teachers',
  description:
    'Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.',
  cta: {
    label: 'Explore teachers and students',
    href: '#contact',
  },
} as const;

export const COLLAGE = {
  label: 'Collage of international students and teachers learning together',
  width: 622,
  height: 557,
} as const;

/** Position and size are percentages of the collage container. */
export const COLLAGE_PHOTOS = [
  {
    src: '/assets/people/people1.svg',
    left: 6.1,
    top: 21.9,
    width: 19.8,
    height: 29.1,
  },
  {
    src: '/assets/people/people2.svg',
    left: 29.3,
    top: 3.0,
    width: 19.9,
    height: 32.1,
  },
  {
    src: '/assets/people/people3.svg',
    left: 52.4,
    top: 7.1,
    width: 19.9,
    height: 25.7,
  },
  {
    src: '/assets/people/people4.svg',
    left: 75.7,
    top: 16.8,
    width: 24.3,
    height: 38.8,
  },
  {
    src: '/assets/people/people6.svg',
    left: 29.3,
    top: 37.6,
    width: 19.9,
    height: 32.6,
  },
  {
    src: '/assets/people/people7.svg',
    left: 52.4,
    top: 35.3,
    width: 19.9,
    height: 26.1,
  },
  {
    src: '/assets/people/people5.svg',
    left: 0,
    top: 53.4,
    width: 25.9,
    height: 39.0,
  },
  {
    src: '/assets/people/people9.svg',
    left: 29.3,
    top: 72.5,
    width: 19.9,
    height: 24.3,
  },
  {
    src: '/assets/people/people10.svg',
    left: 52.4,
    top: 63.8,
    width: 19.9,
    height: 28.9,
  },
  {
    src: '/assets/people/people8.svg',
    left: 75.7,
    top: 57.8,
    width: 19.9,
    height: 25.2,
  },
] as const;

export const PHOTO_BLEED_CQW = 1.6;
