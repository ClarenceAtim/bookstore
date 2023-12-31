import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, fetchBooks } from '../redux/books/booksSlice';
import '../styles/BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      const newBook = {
        title,
        author,
        category,
      };
      dispatch(addBook(newBook)).then(() => {
        dispatch(fetchBooks());
      });
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div className="form">
      <h2 className="form-title">Add New Book</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          className="title-input"
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={author}
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          value={category}
          placeholder="Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="primary-button-big" type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
