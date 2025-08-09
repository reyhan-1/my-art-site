'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  return {
    props: {
      post: {
        frontmatter,
        content,
      },
    },
  };
}

export default function Post({ post }) {
  const router = useRouter();
  const { frontmatter, content } = post;
  const [selectedCategories, setSelectedCategories] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const allCategories = frontmatter.categories || [];

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.excerpt || 'Art Talks post'} />
      </Head>

      {/* ✅ Wrapper with full-page white background */}
      <div className="min-h-screen bg-white">
        <article className="max-w-3xl mx-auto px-6 md:px-10 py-16">
          <h6 className="text-4xl text-center font-serif text-black m-10">
            Art Talks: {frontmatter.title}
          </h6>

          <p className="text-2xl text-center font-quicksand text-gray-500 m-10">
            {frontmatter.excerpt}
          </p>

          <div className="flex flex-wrap text-gray-400 gap-2 mb-6">
            {allCategories.map((category) => (
              <p key={category} className="font-urbanist">{category}</p>
            ))}
          </div>

          {frontmatter.image && (
            <div className="w-full h-auto mb-6">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                title={frontmatter.imagetitle}
                width={800}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover mx-auto"
              />
              {frontmatter.imagetitle && (
                <p className="text-gray-400 text-center">{frontmatter.imagetitle}</p>
              )}
            </div>
          )}

          <div className="prose prose-lg font-urbanist text-black">
            <Markdown>{content}</Markdown>
          </div>
        </article>
      </div>
    </>
  );
}
