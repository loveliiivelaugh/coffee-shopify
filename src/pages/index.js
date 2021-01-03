//react, hooks, and utilities
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from '../util/router';
// components
import CarouselSection from "./../components/CarouselSection";
import BlogPostsSection from "./../components/BlogPostsSection";
import BookTableSection from "./../components/BookTableSection";
import OurStorySection from "./../components/OurStorySection";
import FeaturesSection from "./../components/FeaturesSection";
import OurMenuAdSection from "./../components/OurMenuAdSection";
import OurProductsSection from "./../components/OurProductsSection";
import StatsSection from "./../components/StatsSection";
import BestSellersSection from "./../components/BestSellersSection";
import GalleryLinksSection from "./../components/GalleryLinksSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import RecentBlogSection from "./../components/RecentBlogSection";
import ContactSection from "./../components/ContactSection";
//images
import coffee_board from '../public/coffee1.jpg';
import coffee_bean_heart from '../public/coffee_bean_heart.jpg';
import coffee_bean_bag from '../public/coffee_bean_bag.jpg';
import coffee_sign from '../public/coffee_sign.jpg';
import coffee_christmas from '../public/coffee_christmas.jpg';
import background from '../public/black_sand.jpg';
import vertical_background from '../public/coffee_cup2.jpg';
//contexts
import { ProductsContext } from '../contexts/ProductsContext';
import { CartContext } from '../contexts/CartContext';
//animationsss
import { Parallax } from 'react-parallax';
import black_spheres_wallpaper from '../public/black_spheres_wallpaper.jpg'; //<span>Photo by <a href="https://unsplash.com/@jadlimcaco?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jad Limcaco</a> on <a href="https://unsplash.com/s/photos/holiday-background?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';
//hooks
import { useWindowSize } from '../hooks/useWindowSize';
import { usePexels } from './../hooks/usePexels';

// * import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'; // todo --> get rid of this / uninstall package

function IndexPage(props) {
  const router = useRouter();
  const [products] = useContext(ProductsContext);
  const { addProduct, removeProduct, increase, decrease, cartItems } = useContext(CartContext);
  const { isDesktop, isMobile } = useWindowSize();

  return (
    <>
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <CarouselSection
        items={[
          {
            title: "The Best Coffee Tasting Experience",
            image: coffee_bean_bag,
            caption: "The Best Coffee Tasting Experience",
          },
          {
            title: "Creamy Hot and Ready to Serve",
            image: coffee_bean_heart,
            caption: "Amazing Taste and Beautiful Place",
          },
          {
            title: "Amazing Taste and Beautiful Place",
            image: coffee_christmas,
            caption: "Creamy Hot and Ready to Serve",
          },
        ]}
        buttonText="Order Now"
        buttonColor="secondary"
        buttonOnClick={() => router.push('/shop')}
        button2Text="View Menu"
        button2Color="transparent"
        button2OnClick={() => router.push('/menu')}
      />
      <BookTableSection
        bg="primary"
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={0}
        title="Featured Content"
        subtitle=""
      />
    <Parallax opacity={0.6} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      <OurStorySection
        bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={0.7}
        image={coffee_sign}
      />
      </Fade>
      <FeaturesSection
        bg="secondary"
        textColor="dark"
        size="md"
        bgImage="" 
        bgImageOpacity={1}
      />
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      <OurMenuAdSection
        bg=""
        textColor="light"
        size="md"
        bgImage="" 
        bgImageOpacity={0.7}
        title="Features"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
        buttonText="View Full Menu"
        buttonColor="secondary"
        buttonOnClick={() => router.push('/menu')}
      />
      </Fade>
    </Parallax>
      <StatsSection
        bg="dark"
        textColor="secondary"
        size="md"
        bgImage={coffee_board} 
        bgImageOpacity={0.6}
      />
    <Parallax blur={0} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      <BestSellersSection
        bg=""
        textColor="light"
        size="md"
        bgImage="" 
        bgImageOpacity={0.7}
        title="Best Coffee Sellers"
        subtitle="Far far away, behind the wotf mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        products={products}
        addProduct={addProduct}
        removeProduct={removeProduct}
        increase={increase}
        decrease={decrease}
        cartItems={cartItems}
        router={router}
      />
      </Fade>
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      <GalleryLinksSection
        bg=""
        textColor="light"
        size="sm"
        bgImage=""
        bgImageOpacity={0.7}
        onHover={() => console.log("Yay you have hovered me!")}
        buttonOnClick={() => router.push('/menu')}
      />
      </Fade>
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
        bgImageOpacity={0.7}
        title="Discover Our Products"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        p="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia."
        products={products}
        addProduct={addProduct}
        removeProduct={removeProduct}
        increase={increase}
        decrease={decrease}
        cartItems={cartItems}
        router={router}
      />
    </Fade>
    </Parallax>
      <TestimonialsSection
        bg=""
        textColor="light"
        size="md"
        bgImage={coffee_bean_bag}
        bgImageOpacity={0.8}
        title="Testimony Customers Says"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
      />
    <Parallax blur={0} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      <RecentBlogSection
        bg=""
        textColor="light"
        size="md"
        bgImage="" 
        bgImageOpacity={0.5}
        title="Recent From Blog"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        router={router}
        // posts={posts} // can add this prop and distribute a BlogContext here
      />
      </Fade>
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      <ContactSection
        bg="primary"
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={0.5}
        title="Book a Table"
        subtitle=""
        buttonText="Appointment"
        buttonColor="secondary"
        showNameField={false}
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.176569329384!2d115.64515051624444!3d-33.340336599257625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2e1d6e1f2832f7%3A0xe4813eb823ccbe30!2sFlorist+Gump!5e0!3m2!1sen!2sus!4v1564947283991!5m2!1sen!2sus"
      />
      </Fade>
    </Parallax>
    </motion.div>
    </>
  );
}

export default IndexPage;
