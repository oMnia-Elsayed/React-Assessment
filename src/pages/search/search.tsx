
import "./search.css";
import { searchBooks } from "../../BooksAPI";
import { BookModel } from "../../models/book";
import BookCard from "../../components/book/bookCard";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBooks, setSearchText } from "../../store/book-slice";
import ErrorComponent from "../../components/error/error";

const SearchPage = () => {

  const books = useSelector((state: RootState) => state.books.searchBooks);
  const error = useSelector((state: RootState) => state.books.hasError);

  const useAppDispatch: () => AppDispatch = useDispatch;

  const dispatch = useAppDispatch();

  const getSearchResult = (searchText: string) => {

    dispatch(setSearchBooks(books));

    dispatch(setSearchText(searchText));

    dispatch(searchBooks(searchText));

  };

  if (error) return (<ErrorComponent />);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search"> Add a book</Link>
        <div className="search-books-input-wrapper">
          <input
            placeholder="Search by title, author, or ISBN"
            onChange={e => getSearchResult(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.isArray(books) &&
            books.map((book: BookModel) => (
              <li key={book.id}>
                <BookCard key={book.id} book={book} />
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

export default SearchPage;
