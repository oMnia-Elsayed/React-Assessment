import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './slice';

const store = configureStore({
  reducer: {
    books: bookSlice
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store;