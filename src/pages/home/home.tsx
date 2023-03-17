import "./home.css";
import Shelf from "../../components/shelf/shelf";
import { useEffect } from "react";
import { BookModel } from "../../models/book";
import { readingStatus, shelfTitles } from "../../constant/defines";
import { ShelfModel } from "../../models/shelf";
import { getBooks } from "../../BooksAPI";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { RootState } from "../../store/store";
import Spinner from "../../components/spinner/spinner";
import ErrorComponent from "../../components/error/error";

const Home = () => {

  const booksState = useSelector((state: RootState) => state.books);
  const showSpinner = useSelector((state: RootState) => state.spinner.showSpinner);
  const error = useSelector((state: RootState) => state.books.hasError);

  console.log('111111', showSpinner);

  const shelves = booksState.books;

  const useAppDispatch: () => AppDispatch = useDispatch;

  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(getBooks());

  }, [dispatch]);


  // filter books based on currentlyReading | wantToRead | read
  const readingBooks = shelves.filter(
    el => el.shelf === readingStatus.currentlyReading
  );
  const wantedBooks = shelves.filter(
    el => el.shelf === readingStatus.wantToRead
  );
  const readedBooks = shelves.filter(
    el => el.shelf === readingStatus.read
  );


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

  const mappedData = mapShelfData(readingBooks, wantedBooks, readedBooks);

  if (showSpinner) return (<Spinner />);

  if (error) return (<ErrorComponent />);

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

}

export default Home;
