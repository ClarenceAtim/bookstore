import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ title, author, onDelete }) => (
  <div>
    <h3>
      Title:
      {title}
    </h3>
    <p>
      Author:
      {author}
    </p>
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
