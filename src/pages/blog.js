import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import RecentBlogSection from "./../components/RecentBlogSection";
import { useRouter } from "./../util/router.js";
//image
import coffee_shop_background from '../public/coffee_shop_background.jpg'
//parallax background
import { Parallax } from 'react-parallax';
import black_spheres_wallpaper from '../public/black_spheres_wallpaper.jpg';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';

function BlogPage(props) {
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
        size="md"
        bgImage={coffee_shop_background}
        bgImageOpacity={1}
        title="Blog"
        subtitle=""
        buttonText="Blog"
        buttonColor="link"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/");
        }}
      />
    <Parallax opacity={0.6} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
      <RecentBlogSection
        bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Recent From Blog"
        subtitle="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        // posts={posts} // can add this prop and distribute a BlogContext here
      />
    </Parallax>
    </motion.div>
    </>
  );
}

export default BlogPage;
