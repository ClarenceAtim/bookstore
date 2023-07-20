import React, { useState } from 'react';
import '../styles/BookForm.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="text"
          id="author"
          value={author}
          placeholder="author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
