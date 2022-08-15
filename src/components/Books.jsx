import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  const books = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
      <AddBook />
    </div>
  );
}

export default Books;
