import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";
import { CartContext } from '../contexts/CartContext';
import { useWindowSize } from "../hooks/useWindowSize";
const CartItem = ({ product }) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);
    const { isDesktop, isMobile } = useWindowSize();
    return ( 
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                    alt={product.title}
                    style={{margin: "0 auto", maxHeight: "50px"}} 
                    src={product.images[0].src} className="img-fluid d-block"
                />
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.title}</h5>
                <p className="mb-1">Price: {product.variants[0].price} </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center ">
                <p className="mb-0">Qty: {product.quantity}</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                <Button 
                    onClick={() => increase(product)}
                    variant="secondary" size="sm"
                    >
                        +
                </Button>
                { product.quantity > 1 &&
                    <Button
                    onClick={() => decrease(product)}
                    variant="secondary" size="sm"
                    >
                        -
                    </Button>
                }
                { product.quantity === 1 &&
                    <Button
                    onClick={() => removeProduct(product)}
                    variant="danger" size="sm"
                    >
                        x
                    </Button>
                }
            </div>
        </div>
    );
}

export default CartItem;