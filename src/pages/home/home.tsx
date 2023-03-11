import "./home.css";
import SearchPage from "../../pages/search/search";
import Shelf from "../../components/shelf/shelf";
import { useState } from "react";
import { BookModel } from "../../models/book";
import { readingStatus, shelfTitles } from "../../constant/defines";
import { ShelfModel } from "../../models/shelf";

const Home = ({shelves}: any) => {

  const [showSearchPage, setShowSearchpage] = useState(false);

  /**
   * mapShelfData
   * @param readingBooks 
   * @param wantedBooks 
   * @param readedBooks 
   * @returns ShelfModel[]
   */
  const mapShelfData = (readingBooks: BookModel[], wantedBooks: BookModel[], readedBooks: BookModel[]): ShelfModel[] => {
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
    const readingBooks: BookModel[] = shelves.filter(
      el => el.shelf === readingStatus.currentlyReading
    );
    const wantedBooks: BookModel[] = shelves.filter(
      el => el.shelf === readingStatus.wantToRead
    );
    const readedBooks: BookModel[] = shelves.filter(
      el => el.shelf === readingStatus.read
    );

    shelves = mapShelfData(readingBooks, wantedBooks, readedBooks);
  };

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage
          showSearchPage={showSearchPage}
          setShowSearchpage={setShowSearchpage}
        />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {Array.isArray(shelves) &&
                shelves.map((shelf: ShelfModel) => (
                  <Shelf key={shelf.title} shelf={shelf} />
                ))}
            </div>
          </div>
          <div className="open-search">
            <a href="/#" onClick={() => setShowSearchpage(!showSearchPage)}>
              Add a book
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
