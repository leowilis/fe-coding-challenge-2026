import Image from 'next/image';
import {
  BADGE_BASE,
  COURSE_BADGE,
  HERO_IMAGE,
  RATING_BADGE,
} from '../constants/hero.constants';

export default function HeroVisual() {
  return (
    <div className='relative w-full md:order-last md:w-[600px] md:flex-none'>
      <div
        aria-hidden='true'
        className='absolute -right-4 bottom-4 top-6 z-0 w-3/4 rounded-2xl bg-orange-200 md:-right-10 md:bottom-7 md:rounded-3xl'
      />

      <div
        aria-hidden='true'
        className='absolute -left-5 bottom-3 z-0 size-20 rounded-full bg-indigo-100 md:-left-11'
      />

      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        width={HERO_IMAGE.width}
        height={HERO_IMAGE.height}
        priority
        className='relative z-10 h-auto w-full rounded-2xl md:h-[600px] md:rounded-3xl md:object-cover'
      />

      <div
        className={`${BADGE_BASE} -left-2 top-2 md:-left-5 md:top-4 md:gap-3 md:px-4 md:py-3 md:shadow-md`}
      >
        <span className='rounded-sm bg-indigo-100 px-2 py-1.5 text-xs font-bold text-indigo-600 md:px-1 md:text-sm'>
          {COURSE_BADGE.value}
        </span>

        <span className='text-sm text-neutral-900'>{COURSE_BADGE.label}</span>
      </div>

      <div
        className={`${BADGE_BASE} -right-4 bottom-9 md:-right-14 md:gap-2.5 md:px-4 md:py-3.5 md:shadow-md`}
      >
        <span
          aria-hidden='true'
          className='flex text-xs text-yellow md:tracking-[0.4em]'
        >
          {'★'.repeat(RATING_BADGE.stars)}
        </span>

        <span className='text-sm text-neutral-900'>
          {RATING_BADGE.score} {RATING_BADGE.label}
        </span>
      </div>
    </div>
  );
}