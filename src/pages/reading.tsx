import { GetStaticProps } from 'next';
import BooksLayout from '../components/ui/books-layout';
import Bookshelf from '../components/ui/bookshelf';
import { getAllBooks } from '../lib/books';
import { Book } from '@/lib/books';
import '../app/globals.css';

interface BooksPageProps {
  books: Book[];
}

export const getStaticProps: GetStaticProps = async () => {
  const books = await getAllBooks();

  // Ensure `link` is not undefined
  const filteredBooks = books.map(book => ({
    ...book,
    link: book.link || null, // Set link to null if undefined
  }));

  return {
    props: {
      books: filteredBooks,
    },
  };
};

const BooksPage: React.FC<BooksPageProps> = ({ books }) => {
  return (
    <BooksLayout>
      <h1 className="text-3xl font-bold mb-6">My Bookshelf</h1>
      <Bookshelf books={books} />
    </BooksLayout>
  );
};

export default BooksPage;
