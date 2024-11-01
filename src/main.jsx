/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
