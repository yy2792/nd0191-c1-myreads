import Book from "./Book";

const BookShelf = ({ books, shelfTitle, onShelfUpdate }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book book={book} onShelfUpdate={onShelfUpdate} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
