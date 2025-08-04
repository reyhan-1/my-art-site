import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ArtTalks({ posts }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts); // Initialize with all posts

  // Function to toggle categories
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Filter posts based on selected categories
  useEffect(() => {
    const filterPosts = () => {
      if (selectedCategories.length === 0) {
        setFilteredPosts(posts);
      } else {
        const filtered = posts.filter((post) =>
          post.categories?.some((cat) => selectedCategories.includes(cat))
        );
        setFilteredPosts(filtered);
      }
    };
    filterPosts();
  }, [selectedCategories, posts]);

  const allCategories = ['painters', 'paintings', 'museums', 'movies'];

  return (
    <div className="max-w-7xl mx-auto p-8">
      <h6 className="text-primary-content text-4xl font-italiana text-center text-baseline-content mb-6">Art Talks</h6>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-3 justify-center mb-10 ">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`badge badge-lg cursor-pointer capitalize transition-all duration-200 hover:scale-105 ${
              selectedCategories.includes(cat) ? 'badge-primary' : 'badge-ghost'
            }`}
            onClick={() => toggleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Display Filtered Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 align-center">
        {filteredPosts.map(({ slug, title, date, excerpt, image, categories }) => (
          <Link href={`/art-talks/${slug}`} key={slug}>
            <div className="group block transform transition-transform hover:scale-105">
              <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="mb-4">
                  <Image
                    src={image || '/default-image.jpg'}
                    alt={title}
                  width={150}
                  height={150}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-500">
                  {title}
                </h2>
                <p className="text-gray-600 text-sm mb-2">{date}</p>
                <p className="text-gray-700 text-base mb-4">{excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {categories?.map((category) => (
                    <span key={category} className="badge badge-outline badge-accent capitalize">
                      {category}
                    </span>
                  ))}
                </div>
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
      excerpt: excerpt || data.excerpt || 'No excerpt available.',
      image: data.image || '/default-image.jpg',
      categories: data.categories || [],
    };
  });

  return {
    props: {
      posts,
    },
  };
}
