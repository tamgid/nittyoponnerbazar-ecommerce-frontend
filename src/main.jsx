/* eslint-disable no-unused-vars */
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClientProvider } from "react-query";
import queryClient from "./queryClient";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

AOS.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {/* <App /> */}
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </HelmetProvider>
);
