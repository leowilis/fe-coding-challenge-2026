import { HOW_IT_WORKS, STEPS } from '../constants/works.constants';
import StepIcon from './StepIcon';

type StepCardProps = (typeof STEPS)[number] & {
  isFirst: boolean;
  isLast: boolean;
};

export default function StepCard({
  number,
  title,
  description,
  icon,
  isFirst,
  isLast,
}: StepCardProps) {
  return (
    <li className='relative flex flex-col xl:mt-20'>
      {!isFirst && (
        <span
          aria-hidden='true'
          className='absolute -top-10 left-7 h-10 w-px bg-border md:hidden'
        />
      )}

      {!isLast && (
        <span
          aria-hidden='true'
          className='absolute top-7 left-14 hidden h-px w-[calc(100%+var(--step-gap)-3.5rem)] bg-border md:block'
        />
      )}

      <StepIcon {...icon} />

      <span className='mt-6 text-xs font-medium tracking-widest text-text-secondary uppercase'>
        {HOW_IT_WORKS.stepLabel} {number}
      </span>

      <h3 className='mt-3 text-2xl font-semibold text-text-primary md:text-xl'>
        {title}
      </h3>
      <p className='mt-3 text-base leading-relaxed tracking-wide text-text-secondary md:leading-6 xl:max-w-[326px] xl:leading-[26px]'>
        {description}
      </p>
    </li>
  );
}
