import "./home.css";
import SearchPage from "../../pages/search/search";
import Shelf from "../../components/shelf/shelf";
import { useState } from "react";

const Home = ({shelves}: any) => {

    const [showSearchPage, setShowSearchpage] = useState(false);

    return (
        <div className="app">
            {showSearchPage ? (
                <SearchPage
                    showSearchPage={showSearchPage}
                    setShowSearchpage={setShowSearchpage}
                />
            ) : (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                {
                                    Array.isArray(shelves) && shelves.map((shelf: any) => <Shelf key={shelf.title} shelf={shelf} />)
                                }

                            </div>
                        </div>
                        <div className="open-search">
                            <a href="/#" onClick={() => setShowSearchpage(!showSearchPage)}>
                                Add a book
                            </a>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Home;
