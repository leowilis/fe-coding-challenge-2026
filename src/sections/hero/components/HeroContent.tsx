import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function HeroContent() {
  return (
    <div className='flex w-full flex-col md:min-w-0 md:flex-1'>
      <span className='mb-1 py-2 text-sm font-semibold tracking-widest text-primary uppercase sm:text-sm md:mb-4 md:py-0 xl:mb-5'>
        Learn at your own pace
      </span>

      <h1
        id='hero-heading'
        className='max-w-xl text-5xl leading-tight font-bold tracking-tighter text-text-primary sm:text-5xl md:max-w-[700px] md:text-4xl md:leading-[1.1] lg:text-5xl xl:text-[74px]'
      >
        Build skills that actually move you forward.
      </h1>

      <p className='mt-5 max-w-xl text-lg leading-7 tracking-wide text-text-secondary md:mt-5 md:max-w-[580px] md:text-base md:tracking-normal lg:text-lg lg:leading-8 xl:mt-7'>
        Practical courses taught by people who do the work every day. Learn
        design, technology, business and more — one focused lesson at a time.
      </p>

      <div className='mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row md:mt-7 xl:mt-9 xl:gap-4'>
        <Link
          href='#courses'
          className={buttonVariants({
            size: 'lg',
            className:
              'w-full rounded-sm px-7 py-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover sm:w-auto md:h-12 md:px-5 md:py-0 md:text-sm md:font-semibold lg:h-14 lg:px-7 lg:text-base xl:h-[62px] xl:px-8',
          })}
        >
          Explore courses
        </Link>

        <Link
          href='#how-it-works'
          className={buttonVariants({
            variant: 'outline',
            size: 'lg',
            className:
              'w-full rounded-sm px-7 py-6 sm:w-auto md:h-12 md:px-5 md:py-0 md:text-sm md:font-semibold lg:h-14 lg:px-7 lg:text-base xl:h-[62px] xl:px-8',
          })}
        >
          See how it works
        </Link>
      </div>

      <div className='mt-8 flex items-center justify-center gap-3 md:mt-7 md:justify-start xl:mt-9 xl:gap-4'>
        <Image
          src='/assets/trusted/Container.svg'
          alt=''
          width={80}
          height={32}
          className='xl:h-auto xl:w-[92px]'
        />

        <Image
          src='/assets/trusted/Paragraph.svg'
          alt=''
          width={194}
          height={24}
          className='xl:h-auto xl:w-[224px]'
        />
      </div>
    </div>
  );
}
