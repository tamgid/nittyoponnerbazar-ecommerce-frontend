// src/features/testSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the products
const initialState = {
  items: [], // This will hold an array of product data
  status: 'idle', // Can be 'idle', 'loading', 'succeeded', or 'failed'
  error: null,
};

const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    clearProducts(state) {
      state.items = [];
    },
  },
});

export const { increment } = testSlice.actions;
export default testSlice.reducer;
