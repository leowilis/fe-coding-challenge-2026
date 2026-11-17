import HeroContent from './components/HeroContent';
import HeroVisual from './components/HeroVisual';

export default function Hero() {
  return (
    <section
      id='home'
      aria-labelledby='hero-heading'
      className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-10 pt-28 sm:gap-10 md:max-w-[1600px] md:flex-row md:items-start md:gap-12 md:px-20 md:justify-between md:pb-20 md:pt-36 md:gap-12 md:px-20 md:pt-[170px] md:pb-[100px]'
    >
      <HeroVisual />
      <HeroContent />
    </section>
  );
}