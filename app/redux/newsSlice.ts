import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface News {
  [x: string]: unknown;
  id: number;
  title: string;
  heading: string;
  content: string;
  image: string;
  published_date: string;
  author: string;
}

interface NewsState {
  news: News[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  selectedNews: News | null;
}

const initialState: NewsState = {
  news: [],
  status: 'idle',
  error: null,
  selectedNews: null,
};

// Define the fetchNews thunk
export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/`); // Use the API URL from .env
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  const data = await response.json();
  return data as News[];
});

// Define the fetchNewsDetails thunk
export const fetchNewsDetails = createAsyncThunk('news/fetchNewsDetails', async (id: number) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/news/${id}/`); // Use the API URL from .env
  if (!response.ok) {
    throw new Error('Failed to fetch news details');
  }
  const data = await response.json();
  return data as News;
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<News[]>) => {
        state.status = 'succeeded';
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch news';
      })
      .addCase(fetchNewsDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchNewsDetails.fulfilled, (state, action: PayloadAction<News>) => {
        state.status = 'succeeded';
        state.selectedNews = action.payload;
      })
      .addCase(fetchNewsDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch news details';
      });
  },
});

export default newsSlice.reducer;