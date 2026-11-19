import StatsList from './components/StatsList';
import TestimonialQuote from './components/TestimonialQuote';

export default function Testimonial() {
  return (
    <section aria-label='Testimonial and results' className='w-full bg-white'>
      <div className='mx-auto flex w-full max-w-full flex-col gap-12 px-6 py-16 md:grid md:max-w-[1600px] md:grid-cols-[2fr_1fr] md:items-center md:gap-0 md:px-10 md:py-[100px] lg:px-14 xl:px-20'>
        <TestimonialQuote />
        <StatsList />
      </div>
    </section>
  );
}
