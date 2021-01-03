import React from 'react';
import Product from './Product';
import { useRouter } from '../util/router';

const Products = ({ products }) => {
  const router = useRouter();

  function productClickHandler(e, id){
    e.preventDefault();
    router.push({
        pathname: "/product/" + id,
        state: {
          id: id,
        }
    });
  }

  const productsGridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gridGap: "20px",
    justifyContent: "center",
    padding: "0 20px 0 30px"
  };

  return (
    <div style={productsGridStyles}>
      {products.map(product => (
        <div key={product.id}>
          <button onClick={(e) => {productClickHandler(e, product.id, product)}}>
            <Product product={product} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products