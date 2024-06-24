import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import { promises as fs } from 'fs';
import path from 'path';

export type ReadingStatus = 'Reading' | 'Completed' | 'Plan to Read';

export interface Book {
  title: string;
  author: string;
  coverImage: string;
  slug: string;
  status: ReadingStatus;
  link?: string | null; // Allow null
  spineColor: string;
  textColor: string;
}

export interface Content<TMetadata = { [key: string]: any }> {
  metadata: TMetadata;
  source: string;
}

export type MaybeContent<TMetadata> = Content<TMetadata> | undefined;

export async function getAllBooks(): Promise<Book[]> {
  const booksDir = path.join(process.cwd(), 'src', 'books'); // Adjust the path to the 'books' directory
  const files = await fs.readdir(booksDir);
  const books: Book[] = [];

  for (const file of files) {
    if (file.endsWith('.mdx')) {
      const content = await fs.readFile(path.join(booksDir, file), 'utf8');
      const source = await serialize(content, {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      });

      const metadata = source.frontmatter as Record<string, unknown>;
      const bookMetadata: Book = {
        title: metadata.title as string || 'Untitled',
        author: metadata.author as string || 'Unknown',
        coverImage: metadata.coverImage as string || '/default-cover.jpg',
        slug: path.basename(file, '.mdx'),
        status: (metadata.status as ReadingStatus) || 'Plan to Read',
        spineColor: metadata.spineColor as string || '#000',
        textColor: metadata.textColor as string || '#FFF',
        link: metadata.link ? metadata.link as string : null, // Set to null if not present
      };

      books.push(bookMetadata);
    }
  }

  return books;
}

export async function getBook(slug: string): Promise<MaybeContent<Book>> {
  const contentPath = path.join(process.cwd(), 'src', 'books', `${slug}.mdx`);

  try {
    const content = await fs.readFile(contentPath, 'utf8');
    const source = await serialize(content, {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    });

    const metadata = source.frontmatter as Record<string, unknown>;
    const bookMetadata: Book = {
      title: metadata.title as string || 'Untitled',
      author: metadata.author as string || 'Unknown',
      coverImage: metadata.coverImage as string || '/default-cover.jpg',
      slug: metadata.slug as string || slug,
      status: (metadata.status as ReadingStatus) || 'Plan to Read',
      spineColor: metadata.spineColor as string || '#000',
      textColor: metadata.textColor as string || '#FFF',
      link: metadata.link ? metadata.link as string : null, // Set to null if not present
    };

    return {
      metadata: bookMetadata,
      source: source.compiledSource,
    };
  } catch (error) {
    console.error('Error loading book:', error);
    return undefined;
  }
}
