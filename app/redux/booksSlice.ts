import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
// import { JSX } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  price: string;
  category: number;
}

interface BooksState {
  books: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  status: 'idle',
  error: null,
};

// Define the fetchBooks thunk
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/`); // Use the API URL from .env
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await response.json();
  return data as Book[];
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<Book[]>) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch books';
      });
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;