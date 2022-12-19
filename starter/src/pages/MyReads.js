import BookList from "../components/BookList";

const MyReads = ({ books, onShelfChange }) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookList books={books} onShelfChange={onShelfChange} />
      </div>
    </div>
  );
};

export default MyReads;
