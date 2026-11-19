import { STATS } from '../constants/testimonial.constants';

export default function StatsList() {
  return (
    <dl className='grid grid-cols-3 gap-4 md:grid-cols-1 md:gap-8 md:border-l md:border-border md:pl-8 xl:pl-12'>
      {STATS.map(({ value, label }) => (
        <div key={label} className='flex flex-col-reverse justify-end'>
          <dt className='mt-2 text-sm text-text-secondary'>{label}</dt>
          <dd className='text-4xl leading-none font-bold text-primary md:text-5xl xl:text-6xl'>
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
