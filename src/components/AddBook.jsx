import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBOOK } from '../redux/books/books';

function AddBook() {
  const dispatch = useDispatch();

  const [formStates, setFormStates] = useState({ title: '', author: '' });

  const changeState = (e) => {
    e.preventDefault();
    setFormStates({ ...formStates, [e.target.name]: e.target.value });
  };

  const bookState = (e) => {
    e.preventDefault();
    if (!formStates.title.trim() || !formStates.author.trim()) return;
    const book = {
      id: uuidv4(),
      title: formStates.title,
      author: formStates.author,
    };
    dispatch(addBOOK(book));
    setFormStates({ title: '', author: '' });
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={bookState}>
        <input
          type="text"
          value={formStates.title}
          onChange={changeState}
          placeholder="Book Title"
          name="title"
        />
        <input
          type="text"
          value={formStates.author}
          onChange={changeState}
          placeholder="Book Author"
          name="author"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
