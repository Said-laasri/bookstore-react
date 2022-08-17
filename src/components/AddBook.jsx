import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBOOK } from '../redux/books/books';
import API_BOOK from '../api/api';

function AddBook() {
  const dispatch = useDispatch();

  // const [formStates, setFormStates, setCategories] = useState({
  //   title: '',
  //   author: '',
  //   category: '',
  // });
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };
  const changeCategory = (e) => {
    setCategory(e.target.value);
  };
  // const changeState = (e) => {
  //   e.preventDefault();
  //   setFormStates({ ...formStates, [e.target.name]: e.target.value });
  // };

  // const bookState = (e) => {
  //   e.preventDefault();
  //   if (!formStates.title.trim() || !formStates.author.trim()) return;
  //   const book = {
  //     id: uuidv4(),
  //     title: formStates.title,
  //     author: formStates.author,
  //   };
  //   dispatch(addBOOK(book));
  //   setFormStates({ title: '', author: '' });
  // };

  const addBook = async (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim() || !category.trim()) return;
    const newBook = await axios.post(API_BOOK, {
      item_id: uuidv4(),
      title,
      author,
      category,
    });
    dispatch(addBOOK(newBook));
    window.location.reload();
  };

  return (
    <div>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={addBook}>
        <input
          type="text"
          value={title}
          onChange={changeTitle}
          placeholder="Book Title"
          name="title"
        />
        <input
          type="text"
          value={author}
          onChange={changeAuthor}
          placeholder="Book Author"
          name="author"
        />
        <input
          type="text"
          value={category}
          onChange={changeCategory}
          placeholder="Book Category"
          name="category"
        />

        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBook;
