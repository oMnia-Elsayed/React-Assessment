import "./home.css";
import Shelf from "../../components/shelf/shelf";
import { useEffect, useState } from "react";
import { BookModel } from "../../models/book";
import { readingStatus, shelfTitles } from "../../constant/defines";
import { ShelfModel } from "../../models/shelf";
import { getAll } from "../../BooksAPI";
import { Link } from "react-router-dom";

const Home = () => {
  
  let mappedData = [];

  const [shelves, setShelves] = useState<any>([]);

  useEffect(() => {
    getAll().then((items) => setShelves(items));
  }, []);


  /**
   * mapShelfData
   * @param readingBooks 
   * @param wantedBooks 
   * @param readedBooks 
   * @returns ShelfModel[]
   */
  const mapShelfData = (readingBooks: BookModel[], wantedBooks: BookModel[], readedBooks: BookModel[]): any => {
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

  // filter books based on currentlyReading | wantToRead | read
  if (Array.isArray(shelves)) {
    const readingBooks = shelves.filter(
      el => el.shelf === readingStatus.currentlyReading
    );
    const wantedBooks = shelves.filter(
      el => el.shelf === readingStatus.wantToRead
    );
    const readedBooks = shelves.filter(
      el => el.shelf === readingStatus.read
    );

    mappedData = mapShelfData(readingBooks, wantedBooks, readedBooks);

  };
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {Array.isArray(mappedData) &&
            mappedData.map((shelf: ShelfModel) => (
              <Shelf key={shelf.title} shelf={shelf} />
            ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"> Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
