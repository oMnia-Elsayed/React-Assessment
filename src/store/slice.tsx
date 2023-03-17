import { createSlice } from "@reduxjs/toolkit";
import { BookModel } from "../models/book";

const initialState: {books: Array<BookModel>} = {
    books: []
};

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setBookssss: (state, action) => {
            state.books = [...action.payload, ...state.books]
        },
    }
});

export const { setBookssss } = bookSlice.actions;

export default bookSlice.reducer;