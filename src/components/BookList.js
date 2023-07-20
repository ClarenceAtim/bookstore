import React, { useState } from 'react';
import Book from './Book';

const BookList = () => {
  const [books, setBooks] = useState([
    { title: 'Book 1', author: 'Author 1' },
    { title: 'Book 2', author: 'Author 2' },
    { title: 'Book 3', author: 'Author 3' },
  ]);

  const handleDelete = (title) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.title !== title));
  };

  return (
    <div>
      <h2>Books List</h2>
      {books.map((book) => (
        <Book
          key={book.title}
          title={book.title}
          author={book.author}
          onDelete={() => handleDelete(book.title)}
        />
      ))}
    </div>
  );
};

export default BookList;
