"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import '../../app/globals.css';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
}

interface BlogIndexProps {
  posts: BlogPost[];
}

const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  return (
    <div className="flex flex-col items-center justify-start p-8 md:p-32 min-h-screen overflow-auto">
      <motion.div
        className="flex flex-col items-start space-y-2 w-full md:w-auto text-left py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <motion.h1
          className="text-lg md:text-md font-medium leading-none"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Writing
        </motion.h1>
        <motion.h2
          className="text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Some of my thoughts
        </motion.h2>
        <motion.div
          className="pt-6 flex flex-col items-start space-y-2 w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="w-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
            >
              <Link href={`/blog/${post.slug}`} className="flex w-full">
                <div className="flex flex-col items-start transition-opacity duration-150 hover:bg-gray-100 rounded-lg p-2.5 w-full">
                  <p className="text-sm">{post.title}</p>
                  <p className="text-xs text-muted-foreground pt-1">{post.date}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogIndex;

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'blog', 'content');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.md', ''),
      title: data.title,
      date: data.date,
    };
  });

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}