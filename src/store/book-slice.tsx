import { createSlice } from "@reduxjs/toolkit";
import { BookModel } from "../models/book";

const initialState: {
    books: Array<BookModel>, 
    searchText: String, 
    hasError: boolean, 
    searchBooks: Array<BookModel>,
} = {
    books: [],
    searchText: '',
    hasError: false,
    searchBooks: [],
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = [...action.payload];
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setSearchBooks: (state, action) => {
            state.searchBooks =  [...action.payload];
        },
        setError: (state, action) => {
            state.hasError = action.payload;
        }   
    }
});

export const { setBooks, setSearchText, setSearchBooks, setError } = bookSlice.actions;

export default bookSlice.reducer;