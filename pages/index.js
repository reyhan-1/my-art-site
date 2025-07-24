import { useEffect } from 'react';
import { useRouter } from 'next/router';
import About from '@/components/about';
import Experience from '@/components/experience';
import Education from '@/components/education';

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
    <div className="space-y-32 px-6 md:px-20 pt-20">
      <section id="about"  className="scroll-mt-24">
        <About />
      </section>
      <section id="experience"  className="scroll-mt-24">
        <Experience />
      </section>
      <section id="education"  className="scroll-mt-24">
        <Education />
      </section>
      {/*<section id="extras"  className="scroll-mt-24">*/}
      {/*  <Extras />*/}
      {/*</section>*/}
    </div>
  );
}
