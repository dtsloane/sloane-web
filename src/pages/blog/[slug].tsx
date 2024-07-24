import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import BlogPost from '../../components/BlogPost';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogPostPageProps {
  title: string;
  date: string;
  content: string;
  handwrittenNote?: string;
}

const BlogPostPage: React.FC<BlogPostPageProps> = (props) => {
  return <BlogPost {...props} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'blog', 'content');
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'src', 'pages', 'blog', 'content', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title,
      date: data.date,
      content: contentHtml,
      handwrittenNote: data.handwrittenNote || null,
    },
  };
};

export default BlogPostPage;