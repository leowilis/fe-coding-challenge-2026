import { ArrowRight } from 'lucide-react';
import { FEATURED_COURSE } from '../constants/course.constants';

export default function CourseContent() {
  const { eyebrow, title, description, instructor, metadata, actions } =
    FEATURED_COURSE;

  return (
    <div className='flex w-full flex-col text-white md:min-w-0 md:flex-1'>
      <span className='text-sm font-semibold tracking-widest uppercase md:text-xs xl:text-[15.5px]'>
        {eyebrow}
      </span>

      <h2
        id='featured-course-heading'
        className='mt-3 max-w-xl text-4xl leading-[1.2] font-bold tracking-normal md:mt-4 md:text-3xl md:tracking-tight lg:text-4xl xl:mt-5 xl:text-6xl'
      >
        {title}
      </h2>

      <p className='mt-5 max-w-lg text-base leading-relaxed tracking-wide md:mt-4 md:max-w-[590px] md:text-sm md:leading-6 md:tracking-normal lg:text-base lg:leading-7 xl:text-lg'>
        {description}
      </p>

      <p className='mt-7 text-sm md:mt-5 lg:text-base'>
        with {instructor.name} · {instructor.role}
      </p>

      <dl className='mt-6 flex flex-wrap gap-3 text-white-secondary md:mt-5 md:gap-2 lg:gap-3'>
        {metadata.map(({ label, value }) => (
          <div
            key={label}
            className='rounded-sm border border-white/60 px-4 py-2 md:px-3 md:py-1.5 lg:px-3.5 lg:py-2'
          >
            <dt className='sr-only'>{label}</dt>
            <dd className='text-sm md:text-xs lg:text-sm'>{value}</dd>
          </div>
        ))}
      </dl>

      <div className='mt-8 flex flex-col gap-3 md:mt-7 md:flex-row md:items-center md:gap-5 xl:gap-7'>
        <button
          type='button'
          className='inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-yellow-secondary px-6 py-3 text-sm font-bold text-black transition-colors duration-200 hover:bg-white shadow-button ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-button focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand md:w-auto md:px-5 xl:min-h-[50px] xl:px-7'
        >
          {actions.primary}
        </button>

        <button
          type='button'
          className='group inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-white transition-colors duration-200 shadow-button ease-out hover:-translate-y-0.5 active:translate-y-0 active:shadow-button focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none md:justify-start'
        >
          {actions.secondary}

          <ArrowRight
            aria-hidden='true'
            className='size-4 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none'
          />
        </button>
      </div>
    </div>
  );
}
