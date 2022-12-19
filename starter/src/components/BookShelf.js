import Book from "./Book";

const BookShelf = ({ books, shelfTitle, onShelfUpdate }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid"></ol>
        {books.map((book) => (
          <Book key={book.id} book={book} onShelfUpdate={onShelfUpdate} />
        ))}
      </div>
    </div>
  );
};

export default BookShelf;
