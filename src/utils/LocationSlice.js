import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLocationData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLocationLoading: (state) => {
      state.loading = true;
    },
    setLocationError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearLocationData: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setLocationData, setLocationLoading, setLocationError, clearLocationData } = locationSlice.actions;

export default locationSlice.reducer;
