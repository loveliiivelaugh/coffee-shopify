import React from "react";
import ProductsContextProvider from '../contexts/ProductsContext';
import SingleProductsSection from '../components/SingleProductsSection';
//animationsss
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';

function SingleProductPage(props) {
  return (
    <ProductsContextProvider>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <SingleProductsSection/>
      </motion.div>
    </ProductsContextProvider>
  )
}

export default SingleProductPage;
