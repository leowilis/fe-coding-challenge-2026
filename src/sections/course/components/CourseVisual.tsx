import Image from 'next/image';
import { FEATURED_COURSE } from '../constants/course.constants';

export default function CourseVisual() {
  const { badge, image } = FEATURED_COURSE;

  return (
    <div className='relative w-full pt-3 md:w-[320px] md:flex-none md:pt-0 lg:w-[420px] xl:w-[700px]'>
      <span className='absolute -top-1 -left-4 z-10 rounded-sm uppercase tracking-[2.5px] px-3 py-2 text-sm font-bold shadow-sm bg-yellow-secondary sm:left-6 md:-top-3 md:-left-3 md:py-1.5 md:text-xs md:tracking-[0.1em] xl:-top-4 xl:-left-4 xl:py-2 xl:text-sm'>
        {badge}
      </span>

      <div className='overflow-hidden rounded-2xl bg-white'>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className='h-auto w-full object-cover md:h-[340px] lg:h-[400px] xl:h-[470px]'
          sizes='(max-width: 639px) calc(100vw - 3rem), (max-width: 767px) calc(100vw - 4rem), (max-width: 1023px) 320px, (max-width: 1279px) 420px, 700px'
        />
      </div>
    </div>
  );
}
