import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./contexts/products-context.jsx";
import { ReviewsProvider } from "./contexts/reviews-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <ReviewsProvider>
          <App />
        </ReviewsProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
