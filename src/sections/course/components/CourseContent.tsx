import { ArrowRight } from 'lucide-react';
import { FEATURED_COURSE } from '../constants/course.constants';

export default function CourseContent() {
  const { eyebrow, title, description, instructor, metadata, actions } =
    FEATURED_COURSE;

  return (
    <div className='flex w-full flex-col text-white md:flex-1'>
      <span className='text-sm font-semibold tracking-widest uppercase md:text-sm'>
        {eyebrow}
      </span>

      <h2
        id='featured-course-heading'
        className='mt-3 max-w-xl text-4xl leading-[1.2] font-bold tracking-normal md:text-4xl lg:text-5xl'
      >
        {title}
      </h2>

      <p className='mt-5 max-w-lg text-md leading-relaxed tracking-wide md:text-base'>
        {description}
      </p>

      <p className='mt-7 text-sm'>
        with {instructor.name} · {instructor.role}
      </p>

      <dl className='mt-6 flex flex-wrap gap-3 text-white-secondary'>
        {metadata.map(({ label, value }) => (
          <div
            key={label}
            className='rounded-sm border border-white/60 px-4 py-2'
          >
            <dt className='sr-only'>{label}</dt>
            <dd className='text-sm'>{value}</dd>
          </div>
        ))}
      </dl>

      <div className='mt-8 flex flex-col gap-3 md:flex-row md:items-center md:gap-4'>
        <button
          type='button'
          className='inline-flex min-h-12 w-full items-center justify-center rounded-sm bg-yellow-secondary px-6 py-3 text-sm font-bold text-black transition-colors duration-200 hover:bg-white shadow-button ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-button focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand md:w-auto'
        >
          {actions.primary}
        </button>

        <button
          type='button'
          className='group inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-white transition-colors duration-200 shadow-button ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-button focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand motion-reduce:transition-none md:justify-start'
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
