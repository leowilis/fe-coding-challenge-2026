import CourseContent from './components/CourseContent';
import CourseVisual from './components/CourseVisual';

export default function Course() {
  return (
    <section
      id='featured-course'
      aria-labelledby='featured-course-heading'
      className='mx-auto flex w-full max-w-7xl flex-col gap-10 bg-primary px-6 pt-12 pb-16 sm:px-8 md:flex-row md:items-center md:gap-12 md:py-20'
    >
      <CourseVisual />
      <CourseContent />
    </section>
  );
}
