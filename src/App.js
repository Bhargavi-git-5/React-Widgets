// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (title) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://openlibrary.org/search.json?title=${title}`);
      setBooks(response.data.docs);
    } catch (err) {
      setError('Something went wrong while fetching the books.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Book Finder</h1>
      <SearchBar onSearch={searchBooks} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <BookList books={books} />
    </div>
  );
}

export default App;
