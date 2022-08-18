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
    <div className="book-container d-flex">
      <div className="book d-flex">
        <div className="book-info d-flex">
          <h3 className="title1 font-mont">{category}</h3>
          <h2 className="title2 font-Roboto">{title}</h2>
          <h3 className="title1 font-mont">{author}</h3>
        </div>
        <div className="btn-control">
          <button className="btn-cl font-Roboto" type="button">Comments</button>
          <button className="btn-cl font-Roboto" type="button" onClick={bookRemove}>
            Remove
          </button>
          <button className="btn-cl font-Roboto" type="button">Edits</button>
        </div>
      </div>
      <div className="book-status d-flex">
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
