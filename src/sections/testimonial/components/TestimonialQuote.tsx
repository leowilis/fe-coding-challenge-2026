import {
  QUOTE_ICON_SIZE,
  TESTIMONIAL,
} from '../constants/testimonial.constants';
import Image from 'next/image';

export default function TestimonialQuote() {
  const { quoteMark, quote, author } = TESTIMONIAL;

  return (
    <figure className='flex flex-col md:max-w-[410px] xl:max-w-[700px]'>
      <Image
        src={quoteMark}
        alt=''
        aria-hidden='true'
        width={QUOTE_ICON_SIZE.width}
        height={QUOTE_ICON_SIZE.height}
        className='w-6 md:w-7'
        style={{ height: 'auto' }}
      />
      <blockquote className='mt-4 text-[25px] leading-[1.5] font-semibold text-text-primary md:text-2xl xl:max-w-[750px]'>
        <p>{quote}</p>
      </blockquote>

      <figcaption className='mt-8 flex items-center gap-3'>
        <Image
          src={author.avatar.src}
          alt={author.avatar.alt}
          width={author.avatar.size}
          height={author.avatar.size}
          className='size-12 rounded-full object-cover'
        />

        <div className='flex flex-col gap-2 md:gap-1'>
          <span className='text-base font-semibold text-text-primary'>
            {author.name}
          </span>
          <span className='text-sm text-text-secondary'>{author.role}</span>
        </div>
      </figcaption>
    </figure>
  );
}
