import Link from 'next/link';
import Image from 'next/image';

export default function ArtTalksSection({ posts }) {
  return (
    <section className="px-6 md:px-10 py-16">
      <h6 className="text-4xl text-center font-serif m-10">Latest Art Talks</h6>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mt-10">
        {posts.map(({ slug, title, date, excerpt, image }, index) => (
          <Link
            href={`/art-talks/${slug}`}
            key={slug}
            className="block overflow-hidden shadow-sm transition-shadow duration-300 bg-white hover:shadow-md"
          >
            <figure className="relative w-full h-80">
              <Image
                src={image || '/default-image.jpg'}
                alt={title}
                fill
                className="object-cover"
                loading={index < 3 ? 'eager' : 'lazy'}
              />
            </figure>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 font-noto">{title}</h2>
              <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
              <p className="text-sm text-center font-quicksand text-gray-600 mb-4">{date}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
