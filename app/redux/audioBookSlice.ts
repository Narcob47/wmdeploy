import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AudioBook {
  format: string;
  id: number;
  title: string;
  author: string;
  description: string;
  image: string;
  price: string;
  category: number;
}

interface AudioBooksState {
  audioBooks: AudioBook[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AudioBooksState = {
  audioBooks: [],
  status: 'idle',
  error: null,
};

// Define the fetchAudioBooks thunk
export const fetchAudioBooks = createAsyncThunk('audioBooks/fetchAudioBooks', async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/audiobooks/`);
  return response.data;
});

const audioBookSlice = createSlice({
  name: 'audioBooks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAudioBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAudioBooks.fulfilled, (state, action: PayloadAction<AudioBook[]>) => {
        state.status = 'succeeded';
        state.audioBooks = action.payload;
      })
      .addCase(fetchAudioBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch audiobooks';
      });
  },
});

export default audioBookSlice.reducer;