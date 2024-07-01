"use client";
import { GetStaticProps } from 'next';
import BooksLayout from '../components/ui/books-layout';
import Bookshelf from '../components/ui/bookshelf';
import { getAllBooks, Book } from '../lib/books';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
  };

  return (
    <motion.div
      className={`flex flex-row items-start justify-center p-4 md:p-16 min-h-screen ${isLoaded ? 'no-blur' : 'blur-effect'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`flex flex-col space-y-4 text-left max-w-lg w-full ${isLoaded ? 'no-blur' : 'blur-effect'}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <BooksLayout>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Back</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-lg md:text-md font-medium mb-2 pt-8">My Bookshelf</h1>
          <p className='text-sm text-gray-400 font-medium mb-6'>A collection of cool books</p>
          <Bookshelf books={books} onSelectBook={handleSelectBook} />
          {selectedBook && (
            <div className="mt-8 p-4">
              <h2 className="text-md font-bold mb-2">{selectedBook.title}</h2>
              <p className="text-sm mb-2">Author: {selectedBook.author}</p>
              {selectedBook.status && <p className="text-gray-600 text-sm">Status: {selectedBook.status}</p>}
            </div>
          )}
        </BooksLayout>
      </motion.div>
    </motion.div>
  );
};

export default BooksPage;
