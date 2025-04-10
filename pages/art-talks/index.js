// pages/art-talks/index.js
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export default function ArtTalks({ posts }) {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-primary-content text-4xl font-bold text-center text-gray-900 mb-12">Art Talks</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(({ slug, title, date, excerpt, image }) => (
          <Link href={`/art-talks/${slug}`} key={slug}>
            <div className="group block transform transition-transform hover:scale-105">
              <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  {/* Image before the title */}
                  <img
                    src={image || '/default-image.jpg'} // Use a default image if no image is provided
                    alt={title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-blue-500">
                  {title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">{date}</p>
                <p className="text-gray-700 text-base">{excerpt}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, excerpt } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: excerpt || data.excerpt || "No excerpt available.", // Fallback to data.excerpt if not available
      image: data.image || '/default-image.jpg', // Fetch image from frontmatter or use a default image
    };
  });

  return {
    props: {
      posts,
    },
  };
}
