import BookList from "../components/BookList";
import { Link } from "react-router-dom";

const MyReads = ({ books, onShelfChange }) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookList books={books} onShelfChange={onShelfChange} />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default MyReads;
