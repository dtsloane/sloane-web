import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import BlogPost from '../../components/BlogPost';
import '../app/globals.css';
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
  const files = fs.readdirSync(path.join(process.cwd(), 'content', 'blog'));

  const paths = files.map((file) => ({
    params: {
      slug: file.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const filePath = path.join(process.cwd(), 'content', 'blog', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      title: data.title,
      date: data.date,
      content: contentHtml,
      handwrittenNote: data.handwrittenNote,
    },
  };
};

export default BlogPostPage;