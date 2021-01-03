import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartProducts from '../components/CartProducts';
import HeroSection2 from '../components/HeroSection2';
import RelatedProductsSection from '../components/RelatedProductsSection';
//contexts
import { ProductsContext } from '../contexts/ProductsContext';
import { CartContext } from '../contexts/CartContext';
//images
import coffee_board from '../public/coffee1.jpg';
import coffee_shop_background from '../public/coffee_shop_background.jpg'
//parallax background
import { Parallax } from 'react-parallax';
import black_spheres_wallpaper from '../public/black_spheres_wallpaper.jpg';
//animations
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';
//react bootstrap
import Button from 'react-bootstrap/Button';
//hooks
import { useRouter } from "./../util/router.js";

const CartPage = () => {
    const { 
      addProduct,
      removeProduct,
      cartItems, 
      clearCart, 
      checkout, 
      decrease,
      handleCheckout,
      increase,
      itemCount, 
      total, 
    } = useContext(CartContext);
    const [products] = useContext(ProductsContext);
    const router = useRouter();

    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <HeroSection2
          bg="dark"
          textColor="light"
          size="md"
          bgImage={coffee_shop_background}
          bgImageOpacity={1}
          title="Cart"
          subtitle=""
          buttonText="Cart"
          buttonColor="link"
          buttonOnClick={() => {
            // Navigate to pricing page
            router.push("/");
          }}
        />
        <Parallax opacity={0.6} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
          <div className="row no-gutters justify-content-center">
              <div className="col-sm-12 col-md-9 p-3">
                  {
                      cartItems.length > 0 ?
                      <CartProducts/> :
                      <div className="p-3 text-center text-muted" style={{color:'#FFF',backgroundColor:'rgba(255, 255, 255, 0.1)', marginTop:'18px', padding:'24px'}}>
                          Your cart is empty
                      </div>
                  }

                  { checkout && 
                      <div className="p-3 text-center text-success">
                          <p>Checkout successfull</p>
                          <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                      </div>
                  }
              </div>
              {cartItems.length > 0 && 
                <div className="col-sm-12 col-md-3 p-3">
                    {/* <div className="card card-body"> */}
                    <div style={{color:'#FFF',backgroundColor:'rgba(255, 255, 255, 0.1)', marginTop:'18px', padding:'24px'}}>
                      <p className="mb-1">Total Items</p>
                      <h4 className=" mb-3 txt-right">{itemCount}</h4>
                      <p className="mb-1">Total Payment</p>
                      <h3 className="m-0 txt-right" style={{color:"#c49a63"}}>{total}</h3>
                      <hr className="my-4"/>
                      <div className="text-center">
                        <Button variant="secondary" type="button" onClick={handleCheckout}>CHECKOUT</Button>
                        <Button variant="link" type="button" style={{color:"#FFF"}} onClick={clearCart}>CLEAR</Button>
                      </div>
                    </div>
                </div>
              }
          </div>

        <RelatedProductsSection 
          products={products}
          addProduct={addProduct}
          removeProduct={removeProduct}
          increase={increase}
          decrease={decrease}
          cartItems={cartItems} 
        />
    </Parallax>
      </motion.div>
    );
  }

export default CartPage;