import {
  combineReducers,
  createStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
