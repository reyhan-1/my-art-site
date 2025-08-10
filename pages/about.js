'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Reyhan Uyanık</title>
      </Head>
      <div className="bg-white min-h-screen">
    <article className="max-w-3xl mx-auto py-16 bg-white">
      <h6 className=" text-4xl text-center font-serif text-black m-10">About Me</h6>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-8">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/reyhan.avif"
              alt="Reyhan Uyanık"
              width={400}
              height={500}
              className="object-cover"
              priority
            />
          </div>

          <div className=" leading-relaxed px-14 md:px-0 text-sm/6 text-black">
            <p className=" font-quicksand max-w-xl mx-auto mb-10 text-black ">
              Hi, I’m <strong>Reyhan Uyanık</strong>, a software engineer with a deep love for creating and colors.
              I’ve worked in fast-paced startups across the US, building full-stack applications and automating systems.
              But alongside the code, there’s always been a pull toward the visual creativity and storytelling.
            </p>

            <p className=" font-quicksand max-w-xl mx-auto mb-10 text-black">I was born in Kalamazoo, Michigan, and have
              since called Ankara, Boston, and Amsterdam home. Each city shaped me in its own way.</p>

            <p className=" font-quicksand max-w-xl mx-auto mb-10 text-black">
              A perfect day for me would definitely include a museum visit. I&#39;ve always loved art, paintings particularly.
              I&#39;ve been doodling/painting for most of my life, but it wasn&#39;t until January 2025 that I finally started taking lessons. And I’m loving every minute of it.
           </p>
            <p className=" font-quicksand max-w-3xl mx-auto mb-10 text-black">
           Painting has reminded me how much I love being a student. Learning new perspectives that rewire how I think, how I see the world.
          Anything that grows wildflowers from the cracks in my brain.
            </p>
          </div>
        </div>
      <div className="c">
      </div>
        <blockquote className="border-l-4 font-urbanist pl-8 italic text-gray-400 mt-6">
              Ethan Hawke expresses why art is vital so much more eloquently than I can here(especially around the 7th minute):
            </blockquote>
        {/* YouTube Embed with consistent horizontal padding */}
        <div className="mt-12 px-6 relative mb-10" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full shadow-lg"
            src="https://www.youtube.com/embed/WRS9Gek4V5Q"
            title="Ethan Hawke TED Talk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className=" font-quicksand p-8 text-black mt-6">
          Thank you for being here. Feel free to explore my{' '}
          <Link href="/originals" className=" hover:text-rose-800  transition text-black">
            paintings
          </Link>. Read about my favorite museums, paintings, painters, poets, poems, and movies in the  {' '}
          <Link href="/art-talks" className=" hover:text-rose-800  transition text-black">
            art talks
          </Link> section. I don&#39;t use AI in my writings. You&#39;re also welcome to{' '}
          <Link href="/contact" className=" hover:text-rose-800 transition text-black">
            get in touch
          </Link>!
        </p>
      </article>
      </div>
    </>
  );
}
