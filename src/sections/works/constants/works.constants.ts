export const HOW_IT_WORKS = {
  eyebrow: 'How Luma works',
  title: 'Less browsing. More learning.',
  stepLabel: 'Step',
} as const;

export const STEPS = [
  {
    number: '01',
    title: 'Choose your focus',
    description:
      'Find courses based on the skill you want to build, not endless content categories.',
    icon: {
      shell: 'rounded-full bg-indigo-100',
      dot: 'top-2 left-2 size-5.5 rounded-[6px] bg-primary',
    },
  },
  {
    number: '02',
    title: 'Learn from experience',
    description:
      'Follow concise lessons created by professionals who use these skills.',
    icon: {
      shell: 'rotate-15 rounded-sm bg-shell-orange/15',
      dot: 'right-0.5 bottom-1.5 size-6.5 rounded-full bg-shell-orange',
    },
  },
  {
    number: '03',
    title: 'Put it into practice',
    description:
      'Every course includes practical exercises designed to turn knowledge into action.',
    icon: {
      shell: 'rounded-sm bg-shell-yellow',
      dot: 'bottom-1.5 left-1.5 size-4.5 rounded-full bg-dot-yellow',
    },
  },
] as const;
