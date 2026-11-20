import { CONTACT, CONTACT_INFO } from '../constants/contact.constants';

export default function ContactInfo() {
  return (
    <div className='flex w-full flex-col md:min-w-0 md:flex-1'>
      <span className='text-xs font-semibold tracking-widest text-primary uppercase'>
        {CONTACT.eyebrow}
      </span>

      <h2
        id='contact-heading'
        className='mt-3 text-4xl leading-[1.15] font-bold tracking-tight text-text-primary md:mt-4 xl:text-5xl'
      >
        {CONTACT.title}
      </h2>

      <p className='mt-4 max-w-xl text-base leading-relaxed text-text-secondary md:max-w-[480px] md:text-sm md:leading-6 lg:text-lg lg:max-w-[720px] lg:leading-7'>
        {CONTACT.description}
      </p>

      <ul className='mt-8 flex flex-col gap-4'>
        {CONTACT_INFO.map(({ id, label, value, href, icon: Icon }) => (
          <li
            key={id}
            className='flex items-center gap-4 rounded-md bg-background p-4 py-4'
          >
            <span
              aria-hidden='true'
              className='flex size-10 shrink-0 items-center justify-center rounded-sm bg-indigo-100 text-primary'
            >
              <Icon className='size-6' />
            </span>

            <div className='flex min-w-0 flex-col gap-1'>
              <span className='text-md text-text-primary'>{label}</span>
              {href ? (
                <a
                  href={href}
                  className='text-md text-primary transition-colors duration-200 hover:text-brand-hover focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand'
                >
                  {value}
                </a>
              ) : (
                <span className='text-md text-text-secondary'>{value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
