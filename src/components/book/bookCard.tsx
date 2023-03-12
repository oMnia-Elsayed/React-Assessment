import './bookCard.css';
import { update, getAll } from '../../BooksAPI';
import { useState, useEffect } from 'react';
import { dropdownStatus } from '../../constant/defines';
import { BookModel } from '../../models/book';

const BookCard = ({book}: any) => {

  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    getAll().then(res => setBooks(res));

    return(() => setBooks([]));
  }, []);

  const updateShelf = (book: BookModel, event: any) => {

    const wantedShelf = event.target.value;

    const updatedBooks: any = books.map((el: BookModel) => {
      
      if (el.id === book.id) {

        book.shelf = wantedShelf;

        return book;
      };

      return el;
    });

    setBooks(updatedBooks);

    update(book, wantedShelf).then();
  };

  const imgURL = `url(${book.imageLinks.thumbnail})`;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: imgURL,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select defaultValue={book.shelf ? book.shelf : 'none'} onChange={(e) => updateShelf(book, e) }>
            {
              dropdownStatus.map((el, index) => <option key={index} value={el.value} disabled={index === 0}>{el.key}</option>)
            }
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors ? book.authors[0] : book.publisher}</div>
    </div>

  );
}

export default BookCard;
