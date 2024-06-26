import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ReadingStatus = 'Reading' | 'Completed' | 'Plan to Read';

export interface Book {
  title: string;
  author: string;
  coverImage: string;
  slug: string;
  status: ReadingStatus;
  link?: string | null;
  spineColor: string;
  textColor: string;
}

export interface Content<TMetadata = { [key: string]: any }> {
  metadata: TMetadata;
  source: string;
}

export type MaybeContent<TMetadata> = Content<TMetadata> | undefined;

const booksDir = path.join(process.cwd(), 'src', 'books');

export async function getAllBooks(): Promise<Book[]> {
  const files = await fs.readdir(booksDir);
  const books: Book[] = [];

  for (const file of files) {
    if (file.endsWith('.mdx')) {
      try {
        const content = await fs.readFile(path.join(booksDir, file), 'utf8');
        const { data: frontmatter } = matter(content);

        const bookMetadata: Book = {
          title: frontmatter.title || 'Untitled',
          author: frontmatter.author || 'Unknown',
          coverImage: frontmatter.coverImage || '/default-cover.jpg',
          slug: path.basename(file, '.mdx'),
          status: frontmatter.status || 'Plan to Read',
          spineColor: frontmatter.spineColor || '#000',
          textColor: frontmatter.textColor || '#FFF',
          link: frontmatter.link || null,
        };

        books.push(bookMetadata);
      } catch (error) {
        console.error(`Error processing MDX for file: ${file}`, error);
      }
    }
  }

  return books;
}

export async function getBookBySlug(slug: string): Promise<MaybeContent<Book>> {
  const contentPath = path.join(booksDir, `${slug}.mdx`);

  try {
    const content = await fs.readFile(contentPath, 'utf8');
    const { data: frontmatter, content: source } = matter(content);

    console.log('MDX Content:', source); // Debugging log

    const bookMetadata: Book = {
      title: frontmatter.title || 'Untitled',
      author: frontmatter.author || 'Unknown',
      coverImage: frontmatter.coverImage || '/default-cover.jpg',
      slug,
      status: frontmatter.status || 'Plan to Read',
      spineColor: frontmatter.spineColor || '#000',
      textColor: frontmatter.textColor || '#FFF',
      link: frontmatter.link || null,
    };

    return {
      metadata: bookMetadata,
      source,
    };
  } catch (error) {
    console.error('Error loading book:', error);
    return undefined;
  }
}