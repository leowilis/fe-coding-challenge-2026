import PeopleContent from './components/PeopleContent';
import PeopleVisual from './components/PeopleVisual';

export default function People() {
  return (
    <section
      id='people'
      aria-labelledby='people-heading'
      className='w-full bg-background'
    >
      <div className='mx-auto flex w-full max-w-full flex-col gap-6 px-6 py-16 md:max-w-[1600px] md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 md:py-16 lg:gap-12 lg:px-14 lg:py-20 xl:gap-[70px] xl:px-20 xl:py-[100px]'>
        <PeopleContent />
        <PeopleVisual />
      </div>
    </section>
  );
}
