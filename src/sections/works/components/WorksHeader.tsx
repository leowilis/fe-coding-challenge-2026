import { HOW_IT_WORKS } from '../constants/works.constants';

export default function HowItWorksHeader() {
  return (
    <div className='flex flex-col items-center text-center'>
      <span className='text-xs font-semibold tracking-widest text-primary uppercase'>
        {HOW_IT_WORKS.eyebrow}
      </span>

      <h2
        id='how-it-works-heading'
        className='mt-3 text-4xl leading-tight font-bold tracking-tight text-text-primary md:mt-4 md:text-4xl xl:text-[56px]'
      >
        {HOW_IT_WORKS.title}
      </h2>
    </div>
  );
}
