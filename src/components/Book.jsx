import React from 'react';

import { PropTypes } from 'prop-types';

function Book(props) {
  const { title, Author } = props;
  return (
    <div>
      <div className="book">
        <div className="book-info">
          <h2>{title}</h2>
          <h3>{Author}</h3>
        </div>
        <div className="btn-control">
          <button type="button">Remove</button>
        </div>
      </div>
    </div>
  );
}
Book.propTypes = {
  title: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
};

export default Book;
