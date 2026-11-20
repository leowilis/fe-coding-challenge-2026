import type { UseFormRegisterReturn } from 'react-hook-form';

type FormFieldProps = {
  id: string;
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: string;
  type?: string;
  autoComplete?: string;
  multiline?: boolean;
};

const CONTROL_STYLES =
  'w-full rounded-sm border bg-background px-4 text-sm text-text-primary transition-colors duration-200 placeholder:text-text-secondary/70 focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

// Labelled input or textarea wired to react-hook-form, with an accessible error message.
export default function FormField({
  id,
  label,
  placeholder,
  registration,
  error,
  type = 'text',
  autoComplete,
  multiline = false,
}: FormFieldProps) {
  const errorId = `${id}-error`;
  const sharedProps = {
    id,
    placeholder,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    className: `${CONTROL_STYLES} ${error ? 'border-red-500' : 'border-border'}`,
    ...registration,
  };

  return (
    <div className='flex flex-col gap-2'>
      <label htmlFor={id} className='text-sm font-bold text-text-primary'>
        {label}
      </label>

      {multiline ? (
        <textarea
          {...sharedProps}
          rows={4}
          className={`${sharedProps.className} min-h-[104px] resize-none py-3`}
        />
      ) : (
        <input
          {...sharedProps}
          type={type}
          autoComplete={autoComplete}
          className={`${sharedProps.className} h-12`}
        />
      )}

      {error && (
        <p id={errorId} role='alert' className='text-xs text-red-600'>
          {error}
        </p>
      )}
    </div>
  );
}
