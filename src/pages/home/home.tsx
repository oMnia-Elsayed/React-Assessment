
import './home.css';

import { useState } from "react";
import SearchPage from "../../pages/search/search";
import BookCard from '../../components/book/bookCard';

function Home() {

    const [showSearchPage, setShowSearchpage] = useState(false);

    return (
        <div className="app">
            {showSearchPage ? (
                <SearchPage showSearchPage={showSearchPage} setShowSearchpage={setShowSearchpage} />
            ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Currently Reading</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <li>
                                                <BookCard />
                                            </li>
                                            <li>
                                                <BookCard />
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Want to Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <li>
                                                <BookCard />
                                            </li>
                                            <li>
                                                <BookCard />
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="bookshelf">
                                    <h2 className="bookshelf-title">Read</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            <li>
                                                <BookCard />
                                            </li>
                                            <li>
                                                <BookCard />
                                            </li>
                                            <li>
                                                <BookCard />
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="open-search">
                            <a href='/#' onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
                        </div>
                    </div>
                )}
        </div>

    );
}

export default Home;
