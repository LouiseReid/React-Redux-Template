import { createSlice } from '@reduxjs/toolkit';

export const exampleSlice = createSlice({
  name: 'exampleSlice',
  initialState: {
    data: {},
    loading: false,
    error: {},
  },
  reducers: {
    // Examples
    setTitle: (state, action) => {
      state.data.title = action.payload;
    },
    clearError: (state) => {
      state.error = {};
    },
  },
  extraReducers: {
    // async reducers from createAsyncThunk
  },
});
