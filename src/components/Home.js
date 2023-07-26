import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const Home = () => (
  <div>
    <BookList />
    <div className="horizontal-divider" />
    <BookForm />
  </div>
);

export default Home;
