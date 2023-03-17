import { createSlice } from "@reduxjs/toolkit";
import { BookModel } from "../models/book";

const initialState: {books: Array<BookModel>, searchText: String} = {
    books: [],
    searchText: '',
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
    }
});

export const { setBooks, setSearchBooks } = bookSlice.actions;

export default bookSlice.reducer;