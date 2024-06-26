import { GetStaticProps } from 'next';
import BooksLayout from '../components/ui/books-layout';
import Bookshelf from '../components/ui/bookshelf';
import { getAllBooks, Book } from '../lib/books';
import Image from 'next/image';
import { useState } from 'react';
import '../app/globals.css';

interface BooksPageProps {
  books: Book[];
}

export const getStaticProps: GetStaticProps = async () => {
  const books = await getAllBooks();
  return {
    props: {
      books,
    },
  };
};

const BooksPage: React.FC<BooksPageProps> = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <BooksLayout>
      <h1 className="text-3xl font-bold mb-6">My Bookshelf</h1>
      <Bookshelf books={books} onSelectBook={handleSelectBook} />
      {selectedBook && (
        <div className="mt-8 p-4 border rounded shadow">
          <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
          <p className="text-lg mb-1">Author: {selectedBook.author}</p>
          {selectedBook.status && <p className="text-gray-600">Status: {selectedBook.status}</p>}
        </div>
      )}
    </BooksLayout>
  );
};

export default BooksPage;
