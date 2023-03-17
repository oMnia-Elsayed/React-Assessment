import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './book-slice';
import spinnerSlice from './spinner-slice';

const store = configureStore({
  reducer: {
    books: bookSlice,
    spinner: spinnerSlice,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;