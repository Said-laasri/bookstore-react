import React, { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';

function Books() {
  const [books] = useState([
    {
      id: 1,
      title: 'The Pope',
      Author: 'Jhon Carlos',
    },
    {
      id: 2,
      title: 'Timeless',
      Author: 'Carter Martin',
    },
  ]);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} Author={book.Author} />
      ))}
      <AddBook />
    </div>
  );
}

export default Books;
