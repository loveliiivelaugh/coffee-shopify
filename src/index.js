import React from "react";
import ReactDom from "react-dom";
import App from "./pages/_app";
import * as serviceWorker from "./serviceWorker";
import CartContextProvider from "./contexts/CartContext";
import ProductsContextProvider from './contexts/ProductsContext';

ReactDom.render(
  <ProductsContextProvider>
    <CartContextProvider>
        <App /> 
    </CartContextProvider>
  </ProductsContextProvider>,
document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
