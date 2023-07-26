import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => (
  <div className="container">
    <BookList />
    <div className="horizontal-divider" />
    <BookForm />
  </div>
);

export default Home;
