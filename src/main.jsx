/* eslint-disable no-unused-vars */
<<<<<<< HEAD
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';
import store from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
=======
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
>>>>>>> d842a5535b9267f08b147d978178655d102524af
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
