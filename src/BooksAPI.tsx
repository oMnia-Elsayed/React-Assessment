import { BookModel } from "./models/book";
import { setBooks, setError } from "./store/book-slice";
import { setShowSpinner } from "./store/spinner-slice";
import { AppDispatch } from "./store/store";

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;

if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  Accept: "application/json",
  Authorization: token
};

export const get = (bookId: string) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book);

export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books);

export const update = (book: any, shelf: any) =>
  fetch(`${api}/books/${book.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json());

export const search = (query: string, maxResults?: any) =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query, maxResults })
  })
    .then(res => res.json())
    .then(data => data.books);

export const getBooks = () => {

  return async (dispatch: AppDispatch) => {

    dispatch(setShowSpinner(true));

    try {

      const books: any[] = await getAll().then(items => items);
      
      dispatch(setBooks(books));
  
      dispatch(setShowSpinner(false));

    } catch (error) {
       
      dispatch(setShowSpinner(false));

      dispatch(setError(true));

      throw new Error('Service Error!');
    }

  };
};


export const updateBooks = (book: BookModel, shelf: string) => {

  return async (dispatch: AppDispatch) => {

    dispatch(setShowSpinner(true));

    try {

      await update(book, shelf).then();

      const books: any[] = await getAll().then(items => items);
  
      dispatch(setBooks(books));
  
      dispatch(setShowSpinner(false));

    } catch (error) {
        
      dispatch(setShowSpinner(false));

      dispatch(setError(true));
      
      throw new Error('Service Error!');
    }
  };
};


export const searchBooks = (searchText: string) => {

  return async (dispatch: AppDispatch) => {

    dispatch(setShowSpinner(true));

    // if(!searchText.length) dispatch(setBooks([]));

    try {

      const books: any[] | any = await search(searchText).then(res => res);

      console.log("boooooks", books);
  
      dispatch(setBooks(books));
  
      dispatch(setShowSpinner(false));

    } catch (error) {
         
      dispatch(setShowSpinner(false));

      dispatch(setError(true));
      
      throw new Error('Service Error!');
    }
  };
};