export default function SkillHeader() {
  return (
    <div className='flex w-full flex-col md:flex-1'>
      <span className='py-2 text-sm font-semibold tracking-widest text-primary uppercase sm:text-sm'>
        Find your next skill
      </span>

      <h2
        id='skills-heading'
        className='max-w-xl text-4xl leading-tight font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl'
      >
        Learn something worth knowing.
      </h2>

      <p className='mt-5 max-w-md text-base leading-7 tracking-widest text-text-secondary'>
        Short, practical courses designed around skills you can put to work
        immediately.
      </p>
    </div>
  );
}
