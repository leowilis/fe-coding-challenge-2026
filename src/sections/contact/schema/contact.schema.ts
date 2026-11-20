import { z } from 'zod';

export const MESSAGE_MAX_LENGTH = 1000;

export type ContactErrors = {
  name: string;
  email: string;
  messageMin: string;
  messageMax: string;
};

export type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

// Builds the schema with localized error messages.
export const createContactSchema = (errors: ContactErrors) =>
  z.object({
    name: z.string().trim().min(2, errors.name),
    email: z.string().trim().email(errors.email),
    message: z
      .string()
      .trim()
      .min(10, errors.messageMin)
      .max(MESSAGE_MAX_LENGTH, errors.messageMax),
  });
