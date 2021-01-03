import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import FeaturesSection from "./../components/FeaturesSection";
import { useRouter } from "./../util/router.js";
//image
import coffee_shop_background from '../public/coffee_shop_background.jpg'
//parallax background
import { Parallax } from 'react-parallax';
import black_spheres_wallpaper from '../public/black_spheres_wallpaper.jpg';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';

function ServicesPage(props) {
  const router = useRouter();

  return (
    <>
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <HeroSection2
        bg="white"
        textColor="light"
        size="md"
        bgImage={coffee_shop_background}
        bgImageOpacity={1}
        title="Services"
        subtitle=""
        buttonText="Services"
        buttonColor="link"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/");
        }}
      />
      <FeaturesSection
        bg="secondary"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      />
    </motion.div>
    </>
  );
}

export default ServicesPage;
