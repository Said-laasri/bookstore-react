import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import Book from './Book';
import AddBook from './AddBook';
import API_BOOK from '../api/api';
import { fetchData } from '../redux/books/books';

function Books() {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(
    () => async () => {
      const booksObj = await axios.get(API_BOOK);
      if (booksObj.data) {
        Object.keys(booksObj.data).forEach((itemId) => {
          const data = booksObj.data[itemId];
          const book = Object.assign({}, { item_id: itemId }, ...data);
          books.push(book);
        });
        return dispatch(fetchData());
      }
      return console.log('No book in api');
    },
    []
  );

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <AddBook />
    </div>
  );
}

export default Books;
