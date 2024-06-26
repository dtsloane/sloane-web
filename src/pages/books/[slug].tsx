import React, { useState, useEffect, useRef } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import BooksLayout from '../../components/ui/books-layout';
import Bookshelf from '../../components/ui/bookshelf';
import { getAllBooks, getBookBySlug, Book } from '../../lib/books';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ReadingPageProps {
  books: Book[];
  selectedBook?: Book;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const books = await getAllBooks();
  const slug = context.params?.slug;

  if (slug) {
    const book = await getBookBySlug(slug as string);
    return {
      props: {
        books,
        selectedBook: book?.metadata || null,
      },
    };
  }

  return {
    props: {
      books,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await getAllBooks();
  const paths = books.map((book) => ({
    params: { slug: book.slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

const ReadingPage: React.FC<ReadingPageProps> = ({ books, selectedBook }) => {
  const [currentBook, setCurrentBook] = useState<Book | null>(selectedBook || null);
  const router = useRouter();
  const { slug } = router.query;

  const handleSelectBook = (book: Book) => {
    setCurrentBook(book);
    router.push(`/reading/${book.slug}`, undefined, { shallow: true });
  };

  useEffect(() => {
    if (selectedBook) {
      setCurrentBook(selectedBook);
    }
  }, [selectedBook]);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <BooksLayout>
      <h1 className="text-3xl font-bold mb-6">My Bookshelf</h1>
      <Bookshelf books={books} onSelectBook={handleSelectBook} />
      {currentBook && (
        <div className="mt-8">
          <div className="flex items-center">
            <div className="w-1/4">
              <Image src={currentBook.coverImage} alt={currentBook.title} width={200} height={300} />
            </div>
            <div className="w-3/4 pl-6">
              <h2 className="text-2xl font-bold mb-4">{currentBook.title}</h2>
              <p className="text-xl mb-2">{currentBook.author}</p>
              {currentBook.status && <p className="text-gray-600">{currentBook.status}</p>}
            </div>
          </div>
        </div>
      )}
    </BooksLayout>
  );
};

export default ReadingPage;
