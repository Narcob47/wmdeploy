import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Book {
  published_date: string | number | Date;
  format: string;
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
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/books/`); // Use the API URL from .env
  return response.data as Book[];
});

// Define the downloadBook thunk
export const downloadBook = createAsyncThunk('books/downloadBook', async (bookId: number) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/books/${bookId}/download`, {
    responseType: 'blob',
  });
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `book_${bookId}.pdf`); // Assuming the book is in PDF format
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.URL.revokeObjectURL(url);
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
      })
      .addCase(downloadBook.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(downloadBook.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(downloadBook.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to download book';
      });
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;