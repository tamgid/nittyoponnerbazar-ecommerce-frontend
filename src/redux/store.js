<<<<<<< HEAD
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
=======
import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../features/test/testSlice';

export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});
>>>>>>> d842a5535b9267f08b147d978178655d102524af
