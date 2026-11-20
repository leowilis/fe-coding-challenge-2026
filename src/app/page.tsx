import Skills from '@/sections/skills/Skills';
import Navbar from '../components/layout/navbar/Navbar';
import Hero from '@/sections/hero/Hero';
import Course from '@/sections/course/Course';
import Works from '@/sections/works/Works';
import Testimonial from '@/sections/testimonial/Testimonial';
import People from '@/sections/people/People';
import Contact from '@/sections/contact/Contact';
import FinalCta from '@/sections/cta/FInalCta';
import Footer from '@/components/layout/footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='w-full'>
        <Hero />
        <Skills />
        <Course />
        <Works />
        <Testimonial />
        <People />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
    </>
  );
}
