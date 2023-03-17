
import "./search.css";
import { searchBooks } from "../../BooksAPI";
import { BookModel } from "../../models/book";
import BookCard from "../../components/book/bookCard";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchBooks } from "../../store/book-slice";

const SearchPage = () => {

  const booksState = useSelector((state: RootState) => state.books);

  const books = booksState.books;

  const useAppDispatch: () => AppDispatch = useDispatch;

  const dispatch = useAppDispatch();

  const getSearchResult = (searchText: string) => {

    dispatch(setSearchBooks(searchText));

    dispatch(searchBooks(searchText));

  };

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
