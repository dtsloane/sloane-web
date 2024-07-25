import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import "@/styles/globals.css";

const postsDirectory = path.join(process.cwd(), 'pages', 'blog', 'content');

export async function getAllBlogSlugs() {
  const filenames = await fs.readdir(postsDirectory);
  return filenames.map((filename) => filename.replace(/\.md$/, ''));
}

export async function getBlogPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    content: contentHtml,
    handwrittenNote: data.handwrittenNote || null,
  };
}