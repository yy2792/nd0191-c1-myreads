import BookList from "../components/BookList";
import { Link } from "react-router-dom";
import SearchBook from "../components/SearchBook";

const MySearch = ({ books, onShelfChange }) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <SearchBook books={books} onShelfChange={onShelfChange} />
      </div>
    </div>
  );
};

export default MySearch;
