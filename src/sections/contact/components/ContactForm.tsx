'use client';

import { useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { buttonVariants } from '@/components/ui/button';
import { CONTACT_FORM } from '../constants/contact.constants';
import { useContactLocale } from './hooks/useContactLocale';
import {
  createContactSchema,
  type ContactFormValues,
} from '../schema/contact.schema';
import FormField from './FormField';

type ContactFormProps = {
  onSubmit?: (values: ContactFormValues) => Promise<void>;
};

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const copy = CONTACT_FORM[useContactLocale()];
  const schema = useMemo(() => createContactSchema(copy.errors), [copy]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const { fields } = copy;

  const submit = async (values: ContactFormValues) => {
    await onSubmit?.(values);
    reset();
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className='flex w-full flex-col gap-5 rounded-2xl border border-border bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,0.06)] md:min-w-0 md:flex-1 lg:p-8'
    >
      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-bold text-text-primary'>{copy.title}</h3>
        <p className='text-base text-text-secondary'>{copy.description}</p>
      </div>

      <FormField
        id='contact-name'
        {...fields.name}
        registration={register('name')}
        error={errors.name?.message}
      />

      <FormField
        id='contact-email'
        {...fields.email}
        registration={register('email')}
        error={errors.email?.message}
      />

      <FormField
        id='contact-message'
        {...fields.message}
        multiline
        registration={register('message')}
        error={errors.message?.message}
      />

      <button
        type='submit'
        disabled={isSubmitting}
        className={buttonVariants({
          size: 'lg',
          className:
            'h-12 w-full rounded-sm text-sm font-bold transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-brand-hover active:translate-y-0 disabled:pointer-events-none disabled:opacity-60',
        })}
      >
        {isSubmitting ? copy.submitting : copy.submit}
      </button>

      {isSubmitSuccessful && (
        <p role='status' className='text-sm text-text-secondary'>
          {copy.success}
        </p>
      )}
    </form>
  );
}
