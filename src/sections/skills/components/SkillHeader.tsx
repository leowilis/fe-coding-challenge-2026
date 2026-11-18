// Displays the heading and introduction for the skills section.
export default function SkillHeader() {
  return (
    <div className='flex w-full flex-col'>
      <span className='py-2 text-sm font-semibold tracking-widest text-primary uppercase sm:text-sm md:mb-4 md:py-0 md:text-xs'>
        Find your next skill
      </span>

      <h2
        id='skills-heading'
        className='max-w-xl text-[40px] leading-tight font-bold tracking-tight text-text-primary sm:text-5xl md:max-w-[790px] md:leading-[1] lg:text-[55px]'
      >
        Learn something worth knowing.
      </h2>

      <p className='mt-5 max-w-md text-base leading-7 tracking-normal text-text-secondary md:mt-3 md:max-w-[500px]'>
        Short, practical courses designed around skills you can put to work
        immediately.
      </p>
    </div>
  );
}
