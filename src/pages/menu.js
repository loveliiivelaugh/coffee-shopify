import React, { useContext } from "react";
import HeroSection2 from "./../components/HeroSection2";
import BestSellersSection from "./../components/BestSellersSection";
import BookTableSection from "./../components/BookTableSection";
import OurMenuSection from "./../components/OurMenuSection";
import OurProductsSection from "./../components/OurProductsSection";
import { useRouter } from "./../util/router.js";
import { ProductsContext } from '../contexts/ProductsContext';
import { CartContext } from '../contexts/CartContext';
//image
import coffee_shop_background from '../public/coffee_shop_background.jpg'
//animations/parallax background
import { Parallax } from 'react-parallax';
import black_spheres_wallpaper from '../public/black_spheres_wallpaper.jpg';
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';

function MenuPage(props) {
  const router = useRouter();
  const [products] = useContext(ProductsContext);
  const { addProduct, removeProduct, increase, decrease, cartItems } = useContext(CartContext);

  return (
    <>
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <HeroSection2
        bg=""
        textColor="light"
        size="md"
        bgImage={coffee_shop_background}
        // https://images.pexels.com/photos/2878713/pexels-photo-2878713.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
        bgImageOpacity={1}
        title="Our Menu"
        subtitle=""
        buttonText="Menu"
        buttonColor="link"
        buttonOnClick={() => {
          // Navigate to home page
          router.push("/");
        }}
      />
      <BookTableSection
        bg="primary"
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Content"
        subtitle=""
      />
    <Parallax opacity={0.6} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
      <OurMenuSection
        bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Discover Our Products"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
        products={products}
      />
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      <OurProductsSection
        bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Discover Our Products"
        subtitle="All the features you need to move faster"
        products={products}
        addProduct={addProduct}
        removeProduct={removeProduct}
        increase={increase}
        decrease={decrease}
        cartItems={cartItems}
        pathname={router.location.pathname}
      />
      </Fade>
    </Parallax>
    </motion.div>
    </>
  );
}

export default MenuPage;
