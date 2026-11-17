import { FEATURED_COURSE } from '../constants/course.constants';
import Image from 'next/image';

export default function CourseVisual() {
  const { badge, image } = FEATURED_COURSE;

  return (
    <div className='relative w-full pt-3 md:flex-1'>
      <span className='absolute -top-1 -left-4 z-10 rounded-sm uppercase tracking-[2.5] px-3 py-2 text-sm font-bold shadow-sm bg-yellow-secondary sm:left-6 md:left-8'>
        {badge}
      </span>

      <div className='overflow-hidden rounded-2xl bg-white'>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className='h-auto w-full object-cover'
          sizes='(max-width: 767px) 100vw, 50vw'
        />
      </div>
    </div>
  );
}
