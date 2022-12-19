import BookShelf from "./BookShelf";

const BookList = ({ books, onShelfChange }) => {
  const booksCurrentlyReading = books.filter(
    (book) => book.shelf.toLowerCase() === "currentlyreading"
  );
  const booksWantToRead = books.filter(
    (book) => book.shelf.toLowerCase() === "wanttoread"
  );
  const booksRead = books.filter((book) => book.shelf.toLowerCase() === "read");

  return (
    <div className="list-books-content">
      <div>
        <BookShelf
          books={booksCurrentlyReading}
          shelfTitle="Currently Reading"
          onShelfChange={onShelfChange}
        />
        <BookShelf
          books={booksWantToRead}
          shelfTitle="Want to Read"
          onShelfChange={onShelfChange}
        />
        <BookShelf
          books={booksRead}
          shelfTitle="Read"
          onShelfChange={onShelfChange}
        />
      </div>
    </div>
  );
};

export default BookList;
