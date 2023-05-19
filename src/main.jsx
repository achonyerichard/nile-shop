import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products-context.jsx";
import { ReviewsProvider } from "./contexts/reviews-context.jsx";
import { WishListProvider } from "./contexts/wishlist-context.jsx";
import { ModalsProvider } from "./contexts/modal-context.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <ProductsProvider>
        <ReviewsProvider>
          <WishListProvider>
            <ModalsProvider>
              <App />
            </ModalsProvider>
          </WishListProvider>
        </ReviewsProvider>
      </ProductsProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
