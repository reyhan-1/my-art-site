'use client';
import Link from 'next/link';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function ArtTalks({ posts }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    const filterPosts = () => {
      let updatedPosts;
      if (selectedCategories.length === 0) {
        updatedPosts = posts;
      } else {
        updatedPosts = posts.filter((post) =>
          post.categories?.some((cat) => selectedCategories.includes(cat))
        );
      }
      updatedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
      setFilteredPosts(updatedPosts);
    };
    filterPosts();
  }, [selectedCategories, posts]);

  const allCategories = [
    'movies',
    'museums',
    'painters',
    'paintings',
    'poems',
    'poets',
    'sculptures',
  ];

  return (
    <>
      <Head>
        <title>Art Talks</title>
        <meta
          name="description"
          content="Explore blog posts about movies, museums, painters, paintings, poems, and poets."
        />
      </Head>

      <div className="px-6 md:px-10 py-16 bg-white">
        <h6 className="text-4xl text-center font-serif m-10 text-black">
          Art Talks
        </h6>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`px-3 py-1 text-sm capitalize transition-all duration-200 hover:bg-gray-300 ${
                selectedCategories.includes(cat)
                  ? 'bg-indigo-200 text-indigo-950'
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => toggleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <p className="text-sm font-urbanist text-center text-gray-700 max-w-3xl">
            Movies I think about after days, or poems that move me every time I
            read. Paintings and painters who opened my eyes to color, to visual
            storytelling, expression. Each essay here is my opinion, written by
            me. Proudly no AI. Enjoy!
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16 mt-10">
          {filteredPosts.map(
            ({ slug, title, date, excerpt, image, categories }, index) => (
              <Link
                href={`/art-talks/${slug}`}
                key={slug}
                className="block overflow-hidden shadow-sm transition-shadow duration-300 bg-white group"
              >
                <figure className="relative w-full h-80">
                  <Image
                    src={image || '/default-image.jpg'}
                    alt={title}
                    fill
                    className="object-cover"
                    loading={index < 3 ? 'eager' : 'lazy'}
                  />

                  {/* Hover Overlay with Categories */}
                  <div className="absolute inset-0 bg-white bg-opacity-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-center items-center p-6 text-center">
                    {categories?.map((cat) => (
                      <span
                        key={cat}
                        className="text-base font-serif mb-2 text-black capitalize"
                      >
                        {cat}
                      </span>
                    ))}

                  </div>
                </figure>

                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 font-noto">
                    {title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
                  <p className="text-sm text-center font-quicksand text-gray-600 mb-4">
                    {date}
                  </p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
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
      image: data.image || '/welcome4.avif',
      categories: data.categories || [],
    };
  });

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return {
    props: {
      posts,
    },
  };
}
