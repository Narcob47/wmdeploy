import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './booksSlice';
import categoriesReducer from './categorySlice';
import newsReducer from './newsSlice';
import trainingReducer from './trainingSlice';  
import audioBookReducer from './audioBookSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
    news: newsReducer,
    training: trainingReducer,
    audioBooks: audioBookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;