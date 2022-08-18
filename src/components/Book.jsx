import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { removeBook } from '../redux/books/books';
import CurrentChapter from './CurrentChapter';
import StatusBook from './StatusBook';
import './Book.scss';

function Book(props) {
  const dispatch = useDispatch();

  const {
    id, title, author, category,
  } = props;

  const bookRemove = async (e) => {
    e.preventDefault();
    await axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SlQyOwy7rrxCxAwtjTsP/books/${id}`,
    );
    dispatch(removeBook(id));
    window.location.reload();
  };

  return (
    <div className="book-container">
      <div className="book">
        <div className="book-info">
          <h3>{category}</h3>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div className="btn-control">
          <button className="btn-cl" type="button">Comments</button>
          <button className="btn-cl" type="button" onClick={bookRemove}>
            Remove
          </button>
          <button className="btn-cl" type="button">Edits</button>
        </div>
      </div>
      <div className="book-status">
        <StatusBook />
        <CurrentChapter />
      </div>
    </div>
  );
}
Book.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
