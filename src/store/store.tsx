import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slice';

const store = configureStore({
  reducer: {
    bookStore: bookSlice
  },
});

export type AppDispatch = typeof store.dispatch;

export default store;