import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./context/products.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
