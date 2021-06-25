import React, { useState, useEffect, createContext } from 'react';
import { client } from '../util/shopify';

export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      await client.product.fetchAll().then((resp) => {
        setProducts(resp);
      });
    }
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={[products]}>
      { children }
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider;
