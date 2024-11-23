// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book }) => {
  const { title, author_name, first_publish_year, cover_i } = book;
  const coverImageUrl = cover_i
    ? `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Image+Available';

  return (
    <div className="book-card">
      <img src={coverImageUrl} alt={title} />
      <div className="book-details">
        <h2>{title}</h2>
        {author_name && <p>Author(s): {author_name.join(', ')}</p>}
        {first_publish_year && <p>First Published: {first_publish_year}</p>}
      </div>
    </div>
  );
};

export default BookCard;
