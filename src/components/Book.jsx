import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import { removeBook } from '../redux/books/books';
import './book.scss';

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
    <div>
      <div className="book">
        <div className="book-info">
          <h2>{title}</h2>
          <h3>{author}</h3>
          <h3>{category}</h3>
        </div>
        <div className="btn-control">
          <button type="button" onClick={bookRemove}>
            Remove
          </button>
        </div>
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
