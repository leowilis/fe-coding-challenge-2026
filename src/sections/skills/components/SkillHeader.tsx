// Displays the heading and introduction for the skills section.
export default function SkillHeader() {
  return (
    <div className='flex w-full flex-col'>
      <span className='py-2 text-sm font-semibold tracking-widest text-primary uppercase sm:text-sm md:mb-4 md:py-0 md:text-xs'>
        Find your next skill
      </span>

      <h2
        id='skills-heading'
        className='max-w-xl text-4xl leading-tight font-bold tracking-tight text-text-primary sm:text-5xl md:max-w-[640px] md:leading-[1.2]'
      >
        Learn something worth knowing.
      </h2>

      <p className='mt-5 max-w-md text-base leading-7 tracking-widest text-text-secondary md:mt-3 md:max-w-[500px] md:tracking-normal'>
        Short, practical courses designed around skills you can put to work
        immediately.
      </p>
    </div>
  );
}
