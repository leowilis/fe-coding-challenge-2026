import { ArrowRight } from 'lucide-react';
import { CTA_LABEL } from '../constants/skills.constants';

// Props for the SkillCard component.
type SkillCardProps = {
  number: string;
  title: string;
  description: string;
};

// Displays a skill category with its title and description.
export default function SkillCard({
  number,
  title,
  description,
}: SkillCardProps) {
  return (
    <article className='mt-1 flex w-full flex-col gap-9 rounded-2xl border border-border p-6 md:mt-0 md:gap-10 md:p-8'>
      <span className='self-start rounded-sm bg-indigo-100 px-2 py-0.5 text-sm font-semibold tracking-widest text-primary md:px-3 md:py-2 md:text-xs'>
        {number}
      </span>

      <div className='flex flex-col gap-3 md:gap-3.5'>
        <h3 className='self-start text-xl font-bold text-text-primary'>
          {title}
        </h3>

        <p className='text-base leading-relaxed tracking-normal text-text-tertiary md:text-[18px] md:leading-8'>
          {description}
        </p>
      </div>

      <div className='flex w-fit items-center gap-3 text-text-primary md:mt-auto md:gap-2'>
        <span className='text-sm font-bold'>{CTA_LABEL}</span>

        <ArrowRight aria-hidden='true' className='size-5 md:size-4' />
      </div>
    </article>
  );
}
