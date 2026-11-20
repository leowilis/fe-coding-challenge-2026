import Image from 'next/image';
import FooterColumn from './FooterColumn';
import FooterCopyright from './FooterCopyright';
import { FOOTER, FOOTER_COLUMNS } from './constants/footer.constants';

export default function Footer() {
  const { logo, tagline, company } = FOOTER;

  return (
    <footer className='w-full bg-darkblue'>
      <div className='mx-auto w-full max-w-[1600px] px-5 pt-[60px] pb-8 md:px-10 md:pt-16 xl:px-9 xl:pt-20 xl:pb-10'>
        <div className='grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-[1fr_repeat(3,110px)] md:gap-x-6 lg:grid-cols-[1fr_repeat(3,150px)] xl:grid-cols-[1fr_repeat(3,263px)] xl:gap-x-12'>
          <div className='col-span-2 md:col-span-1'>
            <Image
              src={logo.src}
              alt={company}
              width={logo.width}
              height={logo.height}
              className='brightness-0 invert'
            />
            <p className='mt-3 text-base leading-6 text-text-tertiary md:max-w-[200px] xl:max-w-[220px]'>
              {tagline}
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <FooterColumn key={column.title} {...column} />
          ))}
        </div>

        <div className='mt-10 border-t border-white/30 pt-6 md:mt-12 xl:mt-[68px]'>
          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
}
