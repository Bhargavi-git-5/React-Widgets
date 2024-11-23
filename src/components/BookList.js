// src/components/BookList.js
import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  if (books.length === 0) return;

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
