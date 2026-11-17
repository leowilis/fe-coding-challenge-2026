import SkillCard from './components/SkillCard';
import SkillHeader from './components/SkillHeader';
import { SKILLS } from './constants/skills.constants';

export default function Skills() {
  return (
    <section
      id='skills'
      aria-labelledby='skills-section'
      className='mx-auto flex w-full max-w-full bg-white flex-col gap-8 px-6 pb-12 pt-28 sm:gap-10 md:flex-row md:items-center md:gap-12 md:px-8 md:pb-20 md:pt-36'
    >
      <SkillHeader />
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {SKILLS.map((skill) => (
          <SkillCard key={skill.number} {...skill} />
        ))}
      </div>
    </section>
  );
}
