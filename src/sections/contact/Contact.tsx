import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';

export default function Contact() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='w-full bg-white'
    >
      <div className='mx-auto flex w-full max-w-full flex-col gap-10 px-6 py-16 md:max-w-[1600px] md:flex-row md:items-center md:gap-8 md:px-10 md:py-16 lg:gap-12 lg:px-14 lg:py-20 xl:gap-[70px] xl:px-20 xl:py-[100px]'>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
