type StepIconProps = {
  shell: string;
  dot: string;
};

// Decorative step icon: a tinted shape with a smaller accent shape inside.
export default function StepIcon({ shell, dot }: StepIconProps) {
  return (
    <div aria-hidden='true' className={`relative size-13 shrink-0 ${shell}`}>
      <span className={`absolute ${dot}`} />
    </div>
  );
}
