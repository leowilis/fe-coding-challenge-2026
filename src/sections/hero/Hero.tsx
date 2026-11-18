import HeroContent from './components/HeroContent';
import HeroVisual from './components/HeroVisual';

export default function Hero() {
  return (
    <section
      id='home'
      aria-labelledby='hero-heading'
      className='mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 pb-10 pt-28 sm:gap-10 md:max-w-[1600px] md:flex-row md:items-center md:gap-8 md:px-10 md:pb-16 md:pt-32 lg:gap-12 lg:px-14 xl:items-start xl:justify-between xl:px-20 xl:pb-[100px] xl:pt-[170px]'
    >
      <HeroVisual />
      <HeroContent />
    </section>
  );
}