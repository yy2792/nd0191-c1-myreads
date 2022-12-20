import "./App.css";
import * as BookApi from "./BooksAPI";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MyReads from "./pages/MyReads";
import MySearch from "./pages/MySearch";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const response = await BookApi.getAll();
      if (response.error) {
        console.log("Network Error");
        console.log(response.error);
      }
      setBooks(response);
    };
    getBooks();
  }, []);

  const onShelfChange = (book, shelf) => {
    BookApi.update(book, shelf);

    book.shelf = shelf;
    setBooks(books.filter((b) => b.id !== book.id).concat(book));
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<MyReads books={books} onShelfChange={onShelfChange} />}
      />
      <Route
        path="/search"
        element={<MySearch books={books} onShelfChange={onShelfChange} />}
      />
    </Routes>
  );
}

export default App;
