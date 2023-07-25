import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (itemId) => {
    dispatch(removeBook(itemId)).then(() => {
      dispatch(fetchBooks());
    });
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
