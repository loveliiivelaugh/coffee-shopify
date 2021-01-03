import React, { useContext } from 'react';
import { CartContext } from './../contexts/CartContext';
import CartItem from './CartItem';

const CartProducts = () => {
    const { cartItems } = useContext(CartContext);
    return ( 
        <div>
            {/* <div className="card card-body border-0"> */}
            <div style={{color:'#FFF',backgroundColor:'rgba(255, 255, 255, 0.1)', paddingLeft:'12px', paddingRight:'12px', marginTop:'18px'}}>
                {cartItems.map(product =>  
                    <div>
                        <CartItem key={product.id} product={product}/>
                        <hr />
                    </div>
                )}
            </div>
        </div>
    );
}
export default CartProducts;