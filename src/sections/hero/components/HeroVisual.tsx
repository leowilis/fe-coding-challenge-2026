import Image from 'next/image';
import {
  BADGE_BASE,
  COURSE_BADGE,
  HERO_IMAGE,
  RATING_BADGE,
} from '../constants/hero.constants';

export default function HeroVisual() {
  return (
    <div className='relative w-full md:order-last md:w-[300px] md:flex-none lg:w-[400px] xl:w-[600px]'>
      <div
        aria-hidden='true'
        className='absolute -right-4 bottom-4 top-6 z-0 w-3/4 rounded-2xl bg-orange-200 xl:-right-10 xl:bottom-7 xl:rounded-3xl'
      />

      <div
        aria-hidden='true'
        className='absolute -left-5 bottom-3 z-0 size-20 rounded-full bg-indigo-100 xl:-left-11'
      />

      <Image
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        width={HERO_IMAGE.width}
        height={HERO_IMAGE.height}
        priority
        className='relative z-10 h-auto w-full rounded-2xl md:h-[340px] md:object-cover lg:h-[460px] xl:h-[600px] xl:rounded-3xl'
      />

      <div
        className={`${BADGE_BASE} -left-2 top-2 xl:-left-5 xl:top-4 xl:gap-3 xl:px-4 xl:py-3 xl:shadow-md`}
      >
        <span className='rounded-sm bg-indigo-100 px-2 py-1.5 text-xs font-bold text-indigo-600 xl:px-1 xl:text-sm'>
          {COURSE_BADGE.value}
        </span>

        <span className='text-sm text-neutral-900'>{COURSE_BADGE.label}</span>
      </div>

      <div
        className={`${BADGE_BASE} -right-4 bottom-9 xl:-right-14 xl:gap-2.5 xl:px-4 xl:py-3.5 xl:shadow-md`}
      >
        <span
          aria-hidden='true'
          className='flex text-xs text-yellow xl:tracking-[0.4em]'
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