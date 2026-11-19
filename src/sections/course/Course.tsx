import CourseContent from './components/CourseContent';
import CourseVisual from './components/CourseVisual';

export default function Course() {
  return (
    <section
      id='featured-course'
      aria-labelledby='featured-course-heading'
      className='w-full bg-primary'
    >
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pt-12 pb-16 sm:px-8 md:max-w-[1600px] md:flex-row md:items-center md:gap-8 md:px-10 md:py-16 lg:gap-12 lg:px-14 lg:py-20 xl:gap-[70px] xl:px-20 xl:py-[100px]'>
        <CourseVisual />
        <CourseContent />
      </div>
    </section>
  );
}