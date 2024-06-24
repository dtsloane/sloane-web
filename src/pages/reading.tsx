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
  return {
    props: {
      books,
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
