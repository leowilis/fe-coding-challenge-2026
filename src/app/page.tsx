import Skills from '@/sections/skills/Skills';
import Navbar from '../components/layout/navbar/Navbar';
import Hero from '@/sections/hero/Hero';
import Course from '@/sections/course/Course';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Course />
      </main>
    </>
  );
}
