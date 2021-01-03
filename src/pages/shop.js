import React, { useContext } from 'react';
//contexts
import { ProductsContext } from '../contexts/ProductsContext';
import { CartContext } from '../contexts/CartContext';
//components
import HeroSection2 from "./../components/HeroSection2";
import ProductsSection from '../components/ProductsSection';
//images
import coffee_board from '../public/coffee1.jpg';
import coffee_shop_background from '../public/coffee_shop_background.jpg';
import coffee_sign from '../public/coffee_sign.jpg';
//parallax background
import { Parallax } from 'react-parallax';
import black_spheres_wallpaper from '../public/black_spheres_wallpaper.jpg';
//animationsss
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';
//hooks
import { useRouter } from "./../util/router.js";

function ShopPage(props) {
  const [products] = useContext(ProductsContext);
  const cart = useContext(CartContext);
  const router = useRouter();

  return  (
    <>
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
        title="Order Online"
        subtitle=""
        buttonText="Shop"
        buttonColor="link"
        buttonOnClick={() => {
          // Navigate to home page
          router.push("/");
        }}
      />
    <Parallax opacity={0.6} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
      <ProductsSection bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
        buttonColor="secondary"
        products={products} 
        cart={cart}
        pathname={router.location.pathname}
      />
    </Parallax>
    </motion.div>
    </>
  )
}

export default ShopPage;
