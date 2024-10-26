// src/hooks/useProducts.js

import { useQuery } from 'react-query';
import axios from '../api/axios'; // Import your configured Axios instance

// Function to fetch products from the backend API
const fetchProducts = async () => {
  const { data } = await axios.get('/products'); // This makes a GET request to 'https://your-backend-api-url.com/api/products'
  return data; // Returns the products data
};

// Custom hook using React Query to fetch and cache product data
export const useProducts = () => {
  return useQuery('products', fetchProducts); // 'products' is the key for caching
};
