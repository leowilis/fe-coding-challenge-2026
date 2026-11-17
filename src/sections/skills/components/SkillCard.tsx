import { ArrowRight } from 'lucide-react';
import { CTA_LABEL } from '../constants/skills.constants';

type SkillCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function SkillCard({
  number,
  title,
  description,
}: SkillCardProps) {
  return (
    <article className='flex w-full max-w-full flex-col gap-9 mt-1 rounded-2xl border border-border bg-white p-6'>
      <span className='self-start rounded-sm bg-indigo-100 px-2 py-0.5 text-sm font-semibold tracking-widest text-primary'>
        {number}
      </span>

      <div className='flex flex-col gap-3'>
        <h3 className='self-start text-xl font-semibold text-text-primary'>
          {title}
        </h3>
        <p className='text-base leading-relaxed tracking-normal text-text-secondary'>
          {description}
        </p>
      </div>

      <div className='group flex w-fit cursor-pointer items-center gap-3 text-text-primary transition-colors duration-200 hover:text-brand motion-reduce:transition-none'>
        <span className='text-sm font-bold'>{CTA_LABEL}</span>
        <ArrowRight
          aria-hidden
          className='size-5 transition-transform duration-200 ease-out group-hover:translate-x-1 motion-reduce:transition-none'
        />
      </div>
    </article>
  );
}
