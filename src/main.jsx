import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import CartProvider from "./Providers/CartProvider.jsx";
import BookmarksProvider from "./Providers/BookmarksProvider.jsx";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BookmarksProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </BookmarksProvider>
    </CartProvider>
  </StrictMode>
);
