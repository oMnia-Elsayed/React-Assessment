import "./shelf.css";
import BookCard from "../book/bookCard";
import { BookModel } from "../../models/book";

const Shelf = ({shelf} : any) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {
                        Array.isArray(shelf.books) && shelf.books.map((book: BookModel) => <li key={book.id} > <BookCard key={book.id} book={book} /> </li>)
                    }

                </ol>
            </div>
        </div>
    );
};

export default Shelf;
