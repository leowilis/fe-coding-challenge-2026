import SkillCard from './components/SkillCard';
import SkillHeader from './components/SkillHeader';
import { SKILLS } from './constants/skills.constants';

// Displays the available skill categories.
export default function Skills() {
  return (
    <section
      id='skills'
      aria-labelledby='skills-heading'
      className='w-full bg-white'
    >
      <div className='mx-auto flex w-full max-w-full flex-col gap-14 px-6 pt-16 pb-12 sm:gap-10 md:max-w-[1600px] md:gap-10 md:px-20 md:pt-[100px] md:pb-[100px]'>
        <SkillHeader />

       <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-5 xl:grid-cols-4'>
          {SKILLS.map((skill) => (
            <SkillCard key={skill.number} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
