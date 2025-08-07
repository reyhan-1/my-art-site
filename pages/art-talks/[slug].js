import { useEffect, useState } from 'react';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
    const router = useRouter();
  const { frontmatter, content } = post;
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle category toggle
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Combine the categories in the post's frontmatter and provide clickable links
  const allCategories = frontmatter.categories || [];


  return (
    <article className="max-w-3xl mx-auto px-6 md:px-10 py-16">
      <h6 className=" text-4xl text-center font-serif  m-10">Art Talks: {frontmatter.title}</h6>

      {/* Post Title and Excerpt */}
      <p className="text-2xl text-center font-quicksand text-gray-500  m-10">{frontmatter.excerpt}</p>

      {/* Category Badges - Clickable with Hover Effect */}
      <div className="flex flex-wrap gap-2 mb-6">
{allCategories.map((category) => (
  <p key={category} className="font-urbanist">{category}</p>
))}
      </div>

      {/* Post Image */}
      {frontmatter.image && (
        <div className="w-full h-auto mb-6">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            title={frontmatter.imagetitle}
            width={900}  // Adjust the size as needed
            height={500}  // Keep the height proportional
            className="object-cover mx-auto "
          />
          {frontmatter.imagetitle && (
            <p className=" text-gray-400 text-center">{frontmatter.imagetitle}</p>
          )}
        </div>
      )}

      {/* Post Content (Markdown) */}
      <div className="prose prose-lg">
        <Markdown>{content}</Markdown>
      </div>
    </article>

  );
}
