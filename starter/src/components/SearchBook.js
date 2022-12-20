import { Link } from "react-router-dom";
import * as BookApi from "../BooksAPI";
import { useEffect, useState } from "react";
import Book from "../components/Book";

const SearchBook = ({ books, onShelfChange }) => {
  const [term, setTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const handleDebouncedSearchTermChange = (event) => {
    setDebouncedSearchTerm(event.target.value);
  };

  useEffect(() => {
    const debouncedSearch = setTimeout(() => setTerm(debouncedSearchTerm), 50);

    return () => clearTimeout(debouncedSearch);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    const searchBooks = (term) => {
      if (term.length !== 0) {
        BookApi.search(term).then((books) => {
          if (!books.error) {
            setSearchResults(books);
          } else {
            setSearchResults([]);
          }
        });
      } else {
        setSearchResults([]);
      }
    };
    searchBooks(term);
  }, [term]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={term}
            onChange={handleDebouncedSearchTermChange}
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.length > 0 &&
            searchResults.map((book) => {
              const bookInShelf = books.find(
                (bookInShelf) => bookInShelf.id === book.id
              );

              if (bookInShelf) {
                book.shelf = bookInShelf.shelf;
              } else {
                book.shelf = "none";
              }
              return (
                <Book
                  key={book?.id}
                  book={book}
                  onShelfChange={onShelfChange}
                />
              );
            })}
        </ol>
      </div>
    </div>
  );
};

export default SearchBook;
