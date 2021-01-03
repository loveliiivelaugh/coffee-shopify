import React from 'react';

const Product = ({ product }) => {

  return (
    <div>
      <h2>{product.title}</h2>
      <small><b>ID: </b>{product.id}</small>
      {product.availableForSale === true ?
        <p>Available for sale? <b>Yes</b></p>:
        <p>Available for sale? <b>No</b></p>
      }
      <small>Created at: {product.createdAt}</small>
      <h5>Description</h5>
      <p>{product.description}</p>
      {product.images.map(image => (
        <div key={image.src}>
          <img src={image.src} alt="" style={{maxHeight:'250px'}} />
        </div>
      ))}
      <h5>Sold by: {product.vendor}</h5>
      <hr />
    </div>
  )
}

export default Product;