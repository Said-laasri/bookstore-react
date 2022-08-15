import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const bookRemove = () => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      <div className="book">
        <div className="book-info">
          <h2>{title}</h2>
          <h3>{author}</h3>
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
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
