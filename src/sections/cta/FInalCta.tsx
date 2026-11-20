import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import CtaAvatars from './components/CtaAvatars';
import CtaDecorations from './components/CtaDecorations';
import { CTA } from './constants/cta.constants';

export default function FinalCta() {
  const { title, description, actions } = CTA;

  return (
    <section
      id='cta'
      aria-labelledby='cta-heading'
      className='relative w-full overflow-hidden bg-yellow-primary'
    >
      <CtaDecorations />

      <div className='relative z-10 mx-auto flex w-full max-w-[1600px] flex-col items-center px-6 py-16 text-center md:px-10 md:py-20 xl:px-20 xl:py-[110px]'>
        <CtaAvatars />

        <h2
          id='cta-heading'
          className='mt-6 max-w-xl text-3xl leading-[1.15] font-bold tracking-tight text-text-primary md:max-w-none md:text-4xl xl:mt-8 xl:text-5xl xl:leading-[1.2]'
        >
          {title}
        </h2>

        <p className='mt-4 max-w-md text-base text-text-secondary xl:mt-5'>
          {description}
        </p>

        <div className='mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row xl:mt-10'>
          <Link
            href={actions.primary.href}
            className={buttonVariants({
              size: 'lg',
              className:
                'h-[52px] w-full rounded-sm px-7 text-sm font-semibold transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover sm:w-auto',
            })}
          >
            {actions.primary.label}
          </Link>

          <Link
            href={actions.secondary.href}
            className={buttonVariants({
              variant: 'outline',
              size: 'lg',
              className:
                'h-[52px] w-full rounded-sm px-7 text-sm font-semibold sm:w-auto',
            })}
          >
            {actions.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
