import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <h2>Books List</h2>
      {books.map((book) => (
        <Book
          key={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          onDelete={() => handleDelete(book.item_id)}
        />
      ))}
    </div>
  );
};

export default BookList;
