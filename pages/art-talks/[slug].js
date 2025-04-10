import { useEffect } from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,  // No fallback; if the page doesn't exist, show a 404
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
  const { frontmatter, content } = post;

  return (
    
    <article className="max-w-3xl mx-auto p-6">
      <h1 className="text-primary-content text-4xl font-bold text-center text-gray-900 mb-12">Art Talks</h1>

      {/* Post Title and Content */}
      <h1 className="text-primary-content text-2xl font-extrabold text-gray-900 mb-6">{frontmatter.title}</h1>
      <p className="text-base text-gray-400 mb-4">{frontmatter.excerpt}</p>
      

      {/* Post Image */}
      {frontmatter.image && (
        <div className="w-full h-auto mb-6">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            title={frontmatter.imagetitle}
            width={900}  // Adjust the size as needed
            height={500}  // Keep the height proportional
            className="object-cover mx-auto"
          />
          <p className="text-base text-gray-400 mb-4">{frontmatter.imagetitle}</p>
        </div>
      )}

      {/* Post Content (Markdown) */}
      <div className="prose prose-lg text-gray-400">
        <Markdown>{content}</Markdown>
      </div>
    </article>
  );
}
