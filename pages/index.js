import { useEffect } from 'react';
import { useRouter } from 'next/router';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Extras from '@/components/Extras';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Scroll to hash when the page first loads
    if (typeof window !== 'undefined' && window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="space-y-32 px-6 md:px-20 pt-16">
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="extras">
        <Extras />
      </section>
    </div>
  );
}
