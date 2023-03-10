import "./shelf.css";
import BookCard from "../book/bookCard";

const Shelf = ({shelf} : any) => {

    return (

        <div key={shelf.title} className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">

                    {
                        Array.isArray(shelf.books) && shelf.books.map((book: any) => <li> <BookCard key={book.id} book={book} /> </li>)
                    }

                </ol>
            </div>
        </div>

    );
};

export default Shelf;
