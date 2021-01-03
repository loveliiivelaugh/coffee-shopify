import React, { createContext, useReducer, useEffect } from 'react';
import { CartReducer, someItems } from './CartReducer';
import { client } from '../util/shopify';

export const CartContext = createContext()


const checkout_id = localStorage.getItem("checkout");
const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const initialState = { cartItems: storage, ...someItems(storage), checkout: false, checkout_id: checkout_id };

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)

    useEffect(() => {
        // Check if localStorage has a checkout_id saved
        if ( localStorage.checkout ) {
            fetchCheckout(localStorage.checkout);
        } else {
            // if there is no checkout_id in localStorage then we will create a new checkout
            createCheckout();
        }
    });
    
    const createCheckout = async () => {
        const checkout = await client.checkout.create();
        localStorage.setItem("checkout", checkout.id);
    };
    
    const fetchCheckout = async (checkoutId) => {
        client.checkout.fetch(checkoutId)
        .then((checkout) => {
            return checkout;
        })
        .catch((err) => console.error(err));
    };
    
    const increase = payload => {
        dispatch({type: 'INCREASE', payload});
    };

    const decrease = payload => {
        dispatch({type: 'DECREASE', payload});
    };

    const addProduct = payload => {
        dispatch({type: 'ADD_ITEM', payload});
    };

    const removeProduct = payload => {
        dispatch({type: 'REMOVE_ITEM', payload});
    };

    const clearCart = () => {
        dispatch({type: 'CLEAR'});
    };

    const handleCheckout = () => {
        console.log('CHECKOUT_FOUND', state);
        dispatch({type: 'CHECKOUT_FOUND', state});
    };

    const finalizeCheckout = () => {
        dispatch({type: 'CHECKOUT'});
    };

    const contextValues = {
        removeProduct,
        addProduct,
        increase,
        decrease,
        clearCart,
        handleCheckout,
        ...state
    } 

    return ( 
        <CartContext.Provider value={contextValues} >
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;