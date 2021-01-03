import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
// animation
import { motion } from 'framer-motion'
import { pageVariants } from '../animations';
import Fade from 'react-reveal/Fade';

function CarouselSection(props) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
    <Carousel fade={true} indicators={false} slide={true} >
      {props.items.map((item, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt={item.caption} style={{maxHeight:'90vh'}} />
          <Carousel.Caption style={{backgroundColor:'rgba(0, 0, 0, 0.4)'}}>
            <h1>{item.title}</h1>
            <p>{item.caption}</p>
            <Button
              variant={props.buttonColor}
              size="lg"
              onClick={props.buttonOnClick}
            >
              {props.buttonText}
            </Button>
            <Button
              variant={props.button2Color}
              size="lg"
              onClick={props.button2OnClick}
            >
              {props.button2Text}
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </motion.div>
  );
}

export default CarouselSection;
