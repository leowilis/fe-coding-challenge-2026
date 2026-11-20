import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { PEOPLE } from '../constants/people.constants';

export default function PeopleContent() {
  const { eyebrow, title, description, cta } = PEOPLE;

  return (
    <div className='flex w-full flex-col md:min-w-0 md:flex-1'>
      <span className='text-sm font-semibold tracking-widest text-primary uppercase'>
        {eyebrow}
      </span>

      <h2
        id='people-heading'
        className='mt-3 max-w-xl text-4xl leading-[1.15] font-bold tracking-tight text-text-primary md:mt-4 md:text-4xl xl:text-6xl'
      >
        {title}
      </h2>

      <p className='mt-5 text-base leading-relaxed text-text-primary md:max-w-[480px] md:text-sm md:leading-6 lg:text-base lg:leading-7 xl:mt-6'>
        {description}
      </p>

      <Link
        href={cta.href}
        className={buttonVariants({
          variant: 'outline',
          size: 'lg',
          className:
            'mt-7 max-w-[300px] rounded-sm py-6.5 text-base font-semibold md:h-12 md:py-0 xl:mt-10 md:max-w-[250px] xl:h-[50px] xl:max-w-[300px]',
        })}
      >
        {cta.label}
      </Link>
    </div>
  );
}
