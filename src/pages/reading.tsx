import { GetStaticProps } from 'next';
import BooksLayout from '../components/ui/books-layout';
import Bookshelf from '../components/ui/bookshelf';
import { getAllBooks, Book } from '../lib/books';
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
      <h1 className="text-3xl font-bold mb-2">My Bookshelf</h1>
      <p className='text-md text-gray-400 font-medium mb-6'>A collection of cool books</p>
      <Bookshelf books={books} onSelectBook={handleSelectBook} />
      {selectedBook && (
        <div className="mt-8 p-4">
          <h2 className="text-md font-bold mb-2">{selectedBook.title}</h2>
          <p className="text-sm mb-2">Author: {selectedBook.author}</p>
          {selectedBook.status && <p className="text-gray-600 text-sm">Status: {selectedBook.status}</p>}
        </div>
      )}
    </BooksLayout>
  );
};

export default BooksPage;
