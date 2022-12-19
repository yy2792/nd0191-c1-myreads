import { Link } from "react-router-dom";

const SearchBook = ({ books, onShelfChange }) => {
  const [term, setTerm] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const searchBooks = (term) => {
      if (term.length !== 0) {
        BooksAPI.search(term).then((books) => {
          if (!books.error) {
            setBooks(books);
          } else {
            setBooks([]);
          }
        });
      } else {
        setBooks([]);
      }
    };
    searchBooks(term);
  }, [term, debouncedTerm]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
};

export default SearchBook;
