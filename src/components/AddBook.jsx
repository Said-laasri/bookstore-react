import React from 'react';

function AddBook() {
  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form action="submit">
        <input type="text" placeholder="Book Title" />
        <input type="text" placeholder="Book Author" />
        <button type="button">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
