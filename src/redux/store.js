// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    // You can add other slices here
  },
});

export default store;
