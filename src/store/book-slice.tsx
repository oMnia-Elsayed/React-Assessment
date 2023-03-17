import { createSlice } from "@reduxjs/toolkit";
import { BookModel } from "../models/book";

const initialState: {books: Array<BookModel>, searchText: String, hasError: boolean} = {
    books: [],
    searchText: '',
    hasError: false,
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = [...action.payload]
        },
        setSearchBooks: (state, action) => {
            state.searchText = action.payload;
        },
        setError: (state, action) => {
            state.hasError = action.payload;
        }   
    }
});

export const { setBooks, setSearchBooks, setError } = bookSlice.actions;

export default bookSlice.reducer;