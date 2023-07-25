import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({
  title, author, category, onDelete,
}) => (
  <div>
    <h3>
      {title}
    </h3>
    <p>
      {author}
    </p>
    <p>
      {category}
    </p>
    <button type="button" onClick={onDelete}>
      Delete
    </button>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
