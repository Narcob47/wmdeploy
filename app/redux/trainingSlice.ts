import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Training {
  id: number;
  title: string;
  image: string;
  timestamp: string;
  url: string;
  category: string;
}

interface TrainingsState {
  trainings: Training[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TrainingsState = {
  trainings: [],
  status: 'idle',
  error: null,
};

// Define the fetchTrainings thunk using axios
export const fetchTrainings = createAsyncThunk('trainings/fetchTrainings', async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/trainings/`); // Use the API URL from .env
  return response.data as Training[];
});

const trainingSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrainings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrainings.fulfilled, (state, action: PayloadAction<Training[]>) => {
        state.status = 'succeeded';
        state.trainings = action.payload;
      })
      .addCase(fetchTrainings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch trainings';
      });
  },
});

export default trainingSlice.reducer;