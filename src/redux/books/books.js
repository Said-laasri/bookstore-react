const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const FETCH_API = 'bookstore/books/FETCH_API';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_API:
      return [...state];
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBOOK = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const fetchData = () => ({
  type: FETCH_API,
});
