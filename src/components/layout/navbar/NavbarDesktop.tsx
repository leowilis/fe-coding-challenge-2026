import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { NAVIGATION_ITEMS } from './constants/navbar.constants';

export default function NavbarDesktop() {
  return (
    <nav
      aria-label='Main navigation'
      className='fixed inset-x-0 top-0 z-20 hidden h-[70px] w-full border-b border-border bg-background md:block'
    >
      <div className='mx-auto grid h-full max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-4 lg:px-14 xl:px-20'>
        <Link
          href='#home'
          aria-label='Luma home'
          className='justify-self-start'
        >
          <Image src='/assets/logo/Logo.svg' alt='' width={54} height={17} />
        </Link>

        <ul className='flex items-center gap-5 lg:gap-8'>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className='relative inline-flex whitespace-nowrap text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand focus-visible:after:scale-x-100'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-6 justify-self-end lg:gap-6'>
          <span className='whitespace-nowrap text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-brand'>
            Log in
          </span>

          <Link
            href='#featured-course'
            className={buttonVariants({
              size: 'lg',
              className:
                'h-11 whitespace-nowrap rounded-sm px-3 py-0 text-sm font-semibold shadow-button transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-lg active:translate-y-0 active:shadow-button focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand lg:px-5 xl:h-11 xl:px-6',
            })}
          >
            Start Learning
          </Link>
        </div>
      </div>
    </nav>
  );
}
