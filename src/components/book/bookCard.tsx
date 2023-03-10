import './bookCard.css';

const BookCard = ({book}: any) => {

  const imgURL = `url(${book.imageLinks.thumbnail})`;

  const updateShelf = (event: any) => {
    console.log(event.target.value);
  };


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
          <select defaultValue={book.shelf} onChange={(e) => updateShelf(e) }>
            <option value="none" disabled> Move to...</option>
            <option value="currentlyReading">Currently Reading </option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors[0]}</div>
    </div>

  );
}

export default BookCard;
