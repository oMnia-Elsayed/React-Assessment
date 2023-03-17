import { createSlice } from "@reduxjs/toolkit";
import { BookModel } from "../models/book";

const initialState: {books: Array<BookModel>} = {
    books: []
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBooks: (state, action) => {
            state.books = [...action.payload]
        },
    }
});

export const { setBooks } = bookSlice.actions;

export default bookSlice.reducer;