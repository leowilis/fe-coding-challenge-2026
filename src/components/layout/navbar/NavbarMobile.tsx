'use client';

import { Button, buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from './constants/navbar.constants';
import Link from 'next/link';

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function toggleMenu() {
    setIsMenuOpen((current) => !current);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <nav
      aria-label='Mobile navigation'
      className='fixed inset-x-0 top-0 z-30 w-full border-b border-border bg-background md:hidden'
    >
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        <Link href='#home' aria-label='Luma home' onClick={closeMenu}>
          <Image src='/assets/logo/Logo.svg' alt='' width={54} height={17} />
        </Link>

        <Button
          type='button'
          variant='ghost'
          size='icon'
          className='size-11'
          aria-label={
            isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={isMenuOpen}
          aria-controls='mobile-navigation-menu'
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X aria-hidden='true' /> : <Menu aria-hidden='true' />}
        </Button>
      </div>

      <div
        id='mobile-navigation-menu'
        hidden={!isMenuOpen}
        className='border-t border-border px-6 py-4'
      >
        <ul className='mx-auto flex max-w-7xl flex-col gap-5'>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className='relative inline-flex text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:rounded-sm focus-visible:text-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand focus-visible:after:scale-x-100'
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href='/login'
              onClick={closeMenu}
              className={buttonVariants({
                variant: 'default',
                size: 'lg',
                className:
                  'w-full rounded-sm px-5 py-5.5 font-bold shadow-button transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-lg active:translate-y-0 active:shadow-button focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
              })}
            >
              Log in
            </Link>
          </li>

          <li>
            <Link
              href='#courses'
              onClick={closeMenu}
              className={buttonVariants({
                variant: 'default',
                size: 'lg',
                className:
                  'w-full rounded-sm px-5 py-5.5 font-bold shadow-button transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-lg active:translate-y-0 active:shadow-button focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand',
              })}
            >
              Start Learning
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
