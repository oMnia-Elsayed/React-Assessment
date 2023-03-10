import './App.css';
import Home from "./pages/home/home";
import { useEffect, useRef } from "react";
import { getAll } from './BooksAPI';
import { BookModel } from './models/book';
import { readingStatus, shelfTitles } from './constant/defines';

const App = () => {
  
  let shelfData: any = useRef(null);

  useEffect(() => {
    getAll().then((items: BookModel) => shelfData.current = filterBooks(items));
  });

  const filterBooks = (books: BookModel) => {
    if (Array.isArray(books)) {
      const readingBooks: BookModel[] = books.filter(
        el => el.shelf === readingStatus.currentlyReading
      );
      const wantedBooks: BookModel[] = books.filter(
        el => el.shelf === readingStatus.wantToRead
      );
      const readedBooks: BookModel[] = books.filter(el => el.shelf === readingStatus.read);

      return mapShelfData(readingBooks, wantedBooks, readedBooks);
    }
  };

  const mapShelfData = ( readingBooks: BookModel[], wantedBooks: BookModel[], readedBooks: BookModel[]) => {
    return [
      {
        title: shelfTitles.currentlyReading,
        books: readingBooks
      },
      {
        title: shelfTitles.wantToRead,
        books: wantedBooks
      },
      {
        title: shelfTitles.read,
        books: readedBooks
      }
    ];
  };

  return (
    <Home shelves={shelfData.current} />
  );
}

export default App;
