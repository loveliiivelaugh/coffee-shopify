import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AspectRatio from "./AspectRatio";
import Image from "react-bootstrap/Image";
import "./OurProductsSection.scss";
//coffee cup images
import coffee_cup1 from '../public/coffee_cup1.jpg'
import coffee_cup2 from '../public/coffee_cup2.jpg'
import coffee_cup3 from '../public/coffee_cup3.jpg'
import coffee_cup4 from '../public/coffee_cup4.jpg'
//animations
import Fade from 'react-reveal/Fade';
//hooks
import { useWindowSize } from '../hooks/useWindowSize';

function OurProductsSection(props) {
  const { isDesktop, isMobile } = useWindowSize();
  const items = [
    {
      title: "Lorem Ipsum",
      body:
        "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
      image: coffee_cup1,
    },
    {
      title: "Lorem Ipsum",
      body:
        "Nunc nulla mauris, laoreet vel cursus lacinia, consectetur sit amet tellus.",
      image: coffee_cup2,
    },
    {
      title: "Lorem Ipsum",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, metus et mattis ullamcorper",
      image: coffee_cup3,
    },
    {
      title: "Lorem Ipsum",
      body:
        "Suspendisse ut tincidunt eros. In velit mi, rhoncus dictum neque a, tincidunt lobortis justo",
      image: coffee_cup4,
    },
  ];
  const wrapper = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gridGap: "10px",
    justifyContent: "center",
    padding: "0 20px 0 30px"
  }

  console.log(isDesktop)
  console.log(isMobile)
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="">
        <Row>
            <Col xs={12} lg={5}>
              <Fade
                bottom
                duration={1000}
                delay={500}
                distance="30px"
              >
                <h2>Discover Our Menu</h2>
                <p style={{color:'gray'}}>{props.subtitle}</p>
                <Button 
                  variant={props.buttonColor} 
                  onClick={props.buttonOnClick}
                  style={{marginBottom:'50px'}}
                >{props.buttonText}
                </Button>
              </Fade>
            </Col>

              {isMobile &&
                <Col xs={12} lg={7}>
                  <div style={wrapper}>
                    {items.map((item, index) => (
                      <div key={index}>
                      <Image src={item.image} alt={item.title}  fluid={true} style={{maxHeight:"150px"}} /> 
                    </div>
                  ))}
                  </div>
                </Col>
              }

            {isDesktop && 
              <Col xs={12}lg={7}>
                <div style={wrapper}>
                {items.map((item, index) => (
                  <div key={index}>
                    <Image src={item.image} alt={item.title}  fluid={true} style={{maxHeight:"150px"}} /> 
                  </div>
                ))}
                </div>
              </Col>
            }
            
          </Row>
      </Container>
    </Section>
  );
}

export default OurProductsSection;
