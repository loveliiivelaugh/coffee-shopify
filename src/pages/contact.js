import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import ContactSectionReal from "./../components/ContactSectionReal";
import { useRouter } from "./../util/router.js";
//images
import coffee_board from '../public/coffee1.jpg';
import coffee_shop_background from '../public/coffee_shop_background.jpg'
//parallax background
import { Parallax } from 'react-parallax';
import black_spheres_wallpaper from '../public/black_spheres_wallpaper.jpg';
//animations
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
import { pageVariants } from '../animations';

function ContactPage(props) {
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
        title="Contact Us"
        subtitle=""
        buttonText="Contact"
        buttonColor="link"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/");
        }}
      />
    <Parallax opacity={0.6} bgImage={black_spheres_wallpaper} bgImageAlt="the cat" strength={400}>
      <Fade
        bottom
        duration={1000}
        delay={500}
        distance="30px"
      >
      <ContactSectionReal
        bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Contact Information"
        subtitle=""
        buttonText="Send message"
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

export default ContactPage;
