/* eslint-disable no-unused-vars */
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { QueryClientProvider } from 'react-query';
import queryClient from './queryClient';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
