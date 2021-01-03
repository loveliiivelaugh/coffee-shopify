import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//icons
import coffee_cup_icon from '../public/coffee_cup.png';
import coffee_cup_togo_icon from '../public/coffee_cup_togo.png';
import { GiCoffeeCup } from 'react-icons/gi';
import { FiCoffee } from 'react-icons/fi';
import './StatsSection.scss';
//animations
import Fade from 'react-reveal/Fade';
import { motion } from 'framer-motion';
//hooks
import { useWindowSize } from '../hooks/useWindowSize';

function StatsSection(props) {
  const { isDesktop, isMobile } = useWindowSize();
  const items = [
    {
      icon: coffee_cup_icon,
      title: "Coffee Branches",
      stat: "1",
    },
    {
      icon: coffee_cup_togo_icon,
      title: "Number of Awards",
      stat: "10",
    },
    {
      icon: coffee_cup_icon,
      title: "Followers",
      stat: "456k",
    },
    {
      icon: coffee_cup_togo_icon,
      title: "Happy Customers",
      stat: "10,789",
    },
  ];
  const iconStyles = {border:'solid 1px #c49a63',padding:'15px'};
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} md={3} className="py-3 px-4" key={index}>
              <Fade
                bottom
                duration={1000}
                delay={500}
                distance="30px"
              >
                <motion.div
                  whileHover={{
                    rotate: [0, 0, 270, 270, 0],
                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  }}
                >
                  <FiCoffee color="#c49a63" size="64px" style={iconStyles} />
                </motion.div>
                <h3 className="mt-2">{item.stat}</h3>
                <small className="text-uppercase" style={{color:"#FFF"}}>{item.title}</small>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}
export default StatsSection;