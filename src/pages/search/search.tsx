
import "./search.css";
import { useEffect, useState } from "react";
import { search } from "../../BooksAPI";
import { BookModel } from "../../models/book";
import BookCard from "../../components/book/bookCard";

const SearchPage = ({showSearchPage, setShowSearchpage}: any) => {

  const [searchText, setSearchText] = useState('');
  const [searchBooks, setSearchBooks] = useState([]);
    
  useEffect(() => {

    if (searchText) {

      search(searchText).then((res: any) => {

        res.error ? setSearchBooks([]) : setSearchBooks(res);
 
        console.log(res);
      });

    } else  setSearchBooks([]);

    // return(() =>  setSearchBooks([]));
  },[searchText]);
  
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <button
          className="close-search"
          onClick={() => setShowSearchpage(!showSearchPage)}
        >
          Close
        </button>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            pattern="[a-zA-Z0-9\s]+"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {Array.isArray(searchBooks) &&
            searchBooks.map((book: BookModel) => (
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
