import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import OurStorySection from "./../components/OurStorySection";
import TestimonialsSection from "./../components/TestimonialsSection";
import OurMenuAdSection from "./../components/OurMenuAdSection";
import StatsSection from "./../components/StatsSection";
//image
import coffee_shop_background from '../public/coffee_shop_background.jpg';
import coffee_sign from '../public/coffee_sign.jpg';
import coffee_board from '../public/coffee1.jpg';
//parallax background
import { Parallax } from 'react-parallax';
import black_spheres_wallpaper from '../public/black_spheres_wallpaper.jpg';
//animationsss
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';
//hooks
import { useRouter } from '../util/router';
function AboutPage(props) {
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
        bg=""
        textColor="light"
        size="lg"
        bgImage={coffee_shop_background}
        bgImageOpacity={1}
        title="About"
        subtitle=""
        buttonText="About"
        buttonColor="link"
        buttonOnClick={() => router.push('/menu')}
      />
    <Parallax opacity={0.6} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
      <OurStorySection
        bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        image={coffee_sign}
      />
      <TestimonialsSection
        bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <OurMenuAdSection
        bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        buttonColor="secondary"
        buttonText="View Full Menu"
        buttonOnClick={() => router.push('/menu')}
      />
    </Parallax>
      <StatsSection
        bg="dark"
        textColor="secondary"
        size="md"
        bgImage={coffee_board} 
        bgImageOpacity={0.6}
      />
    </motion.div>
    </>
  );
}

export default AboutPage;
