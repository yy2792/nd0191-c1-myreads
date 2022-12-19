import { useState } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";
import IBook from "../common/Models";

const Book = ({ book, onShelfUpdate }) => {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
            }}
          ></div>
          <BookShelfChanger book={book} onShelfUpdate={onShelfUpdate} />
        </div>
        <div className="book-title">{book?.title}</div>
        <div className="book-authors">{book?.authors?.join(", ")}</div>
      </div>
    </li>
  );
};

Book.propTypes = IBook;

export default Book;
