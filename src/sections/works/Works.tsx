import StepCard from './components/StepCard';
import WorksHeader from './components/WorksHeader';
import { STEPS } from './constants/works.constants';

export default function Works() {
  return (
    <section
      id='how-it-works'
      aria-labelledby='how-it-works-heading'
      className='w-full bg-background'
    >
      <div className='mx-auto flex w-full max-w-full flex-col gap-10 px-6 py-16 md:max-w-[1600px] md:gap-16 md:px-10 md:py-[100px] lg:px-14 xl:px-20'>
        <WorksHeader />

        <ol className='flex flex-col gap-16 md:grid md:grid-cols-3 md:gap-x-[var(--step-gap)] md:[--step-gap:2rem] lg:[--step-gap:3rem] xl:[--step-gap:5rem]'>
          {STEPS.map((step, index) => (
            <StepCard
              key={step.number}
              {...step}
              isFirst={index === 0}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
