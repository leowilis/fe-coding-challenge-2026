import { Clock, MessageCircleMore } from 'lucide-react';

export const CONTACT = {
  eyebrow: 'Contact',
  title: 'Get in touch',
  description:
    'Have a question? We’re here to help. Whether you’re looking for the right course, learning with your team or interested in teaching with Luma, we’d love to hear from you.',
} as const;

export const CONTACT_INFO = [
  {
    id: 'email',
    label: 'Email',
    value: 'contact@luma.com',
    href: 'mailto:contact@luma.com',
    icon: MessageCircleMore,
  },
  {
    id: 'response-time',
    label: 'Response Time',
    value: 'Up to 24 hours on business days',
    href: null,
    icon: Clock,
  },
] as const;

export const CONTACT_FORM = {
  // Portoguese Language
  pt: {
    title: 'Contact us',
    description: 'Preencha os campos e entraremos em contato.',
    submit: 'Enviar mensagem',
    submitting: 'Enviando...',
    success: 'Mensagem enviada! Entraremos em contato em breve.',
    errors: {
      name: 'Informe seu nome completo.',
      email: 'Informe um e-mail válido.',
      messageMin: 'Escreva pelo menos 10 caracteres.',
      messageMax: 'A mensagem está muito longa.',
    },
    fields: {
      name: {
        label: 'Nome completo',
        placeholder: 'Seu nome',
        type: 'text',
        autoComplete: 'name',
      },
      email: {
        label: 'E-mail',
        placeholder: 'seuemail@exemplo.com',
        type: 'email',
        autoComplete: 'email',
      },
      message: {
        label: 'Sua dúvida',
        placeholder: 'Conte como podemos ajudar...',
      },
    },
  },
  // English Language
  en: {
    title: 'Contact us',
    description: 'Fill out the fields and we will get in touch.',
    submit: 'Send message',
    submitting: 'Sending...',
    success: 'Message sent! We will get back to you soon.',
    errors: {
      name: 'Enter your full name.',
      email: 'Enter a valid email address.',
      messageMin: 'Write at least 10 characters.',
      messageMax: 'The message is too long.',
    },
    fields: {
      name: {
        label: 'Full name',
        placeholder: 'Your name',
        type: 'text',
        autoComplete: 'name',
      },
      email: {
        label: 'Email',
        placeholder: 'youremail@example.com',
        type: 'email',
        autoComplete: 'email',
      },
      message: {
        label: 'Your question',
        placeholder: 'Tell us how we can help...',
      },
    },
  },
} as const;

export type ContactLocale = keyof typeof CONTACT_FORM;
