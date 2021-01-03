import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { MdShoppingCart } from "react-icons/md"

export const Cart = () => {
  const { itemCount } = useContext(CartContext);
  return (
    <div style={{color:"#c49a63"}}>
      <MdShoppingCart color="#FFF" />{itemCount > 0 ? <span><small>{itemCount}</small></span> : ""}
    </div>
  )
}