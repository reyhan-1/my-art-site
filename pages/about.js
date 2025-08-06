import Head from 'next/head';
import Image from 'next/image';
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About Me | Reyhan Uyanık</title>
      </Head>

    <article className="max-w-3xl mx-auto p-8 ">
      <h6 className="text-base-content text-4xl font-italiana text-center mb-6">About Me</h6>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/reyhan.JPG"
              alt="Reyhan Uyanık"
              width={500}
              height={500}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          <div className="prose prose-lg  text-base-content  max-w-none leading-relaxed">
            <p>
              Hi, I’m <strong>Reyhan Uyanık</strong>, a software engineer with a deep love for creating and colors.
              I’ve worked in fast-paced startups across the US, building full-stack applications and automating systems.
            </p>

            <p>
              I’ve been doodling and painting since forever, but it wasn’t until January 2025 that I finally started taking painting lessons.
           </p>
          </div>
        </div>
        <p className="pt-5 prose prose-lg  text-base-content  max-w-none leading-relaxed">
           And I’m loving every minute of it. It’s reminded me how much I’ve missed being a student: learning new perspectives that change the way I think and see the world.
          Anything that grows wildflowers from the cracks in my brain.
            </p>
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-400 mt-6">
              Ethan Hawke expresses why art is vital so much more eloquently than I can here(especially around the 7th minute):
            </blockquote>
        {/* YouTube Embed with consistent horizontal padding */}
        <div className="mt-12 px-6 relative" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/WRS9Gek4V5Q"
            title="Ethan Hawke TED Talk"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="prose prose-lg pt-10 pb-10 text-base-content  max-w-none leading-relaxed">
          Thank you for being here. Feel free to explore my{' '}
          <Link href="/paintings" className="text-secondary hover:text-warning transition">
            paintings
          </Link>. Read about my favorite museums, paintings, painters, poets, poems, and movies in the  {' '}
          <Link href="/art-talks" className="text-secondary hover:text-accent transition">
            art talks
          </Link> section. I don&#39;t use AI in my writings. You’re also welcome to{' '}
          <Link href="/contact" className="text-secondary hover:text-info transition">
            get in touch
          </Link>!
        </p>
      </article>
    </>
  );
}
