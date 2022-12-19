import { useState } from "react";

const BookShelfChanger = ({ book, onShelfChange }) => {
  const [shelf, setShelf] = useState(book.shelf);

  const onSelectChange = (event) => {
    console.log(onShelfChange);
    const value = event.target.value;
    setShelf(value);
    onShelfChange(book, value);
  };

  return (
    <div className="book-shelf-changer">
      <select value={shelf} onChange={onSelectChange}>
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default BookShelfChanger;
