import './bookCard.css';
import {updateBooks } from '../../BooksAPI';
import { dropdownStatus } from '../../constant/defines';
import { BookModel } from '../../models/book';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

const BookCard = ({book}: any) => {

  const useAppDispatch: () => AppDispatch = useDispatch;

  const dispatch = useAppDispatch();

  const updateShelf = (book: BookModel, event: any) => {

    const wantedShelf = event.target.value;
   
    dispatch(updateBooks(book, wantedShelf));

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
      <div className="book-title">{book.title || 'Unknown'}</div>
      <div className="book-authors">{book.authors ? book.authors[0] : book.publisher || 'Unknown'}</div>
    </div>

  );
}

export default BookCard;
