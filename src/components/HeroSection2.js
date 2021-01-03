import React from "react";
import Section from "./Section";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import { useRouter } from "./../util/router.js";
import { isMobile, isDesktop } from '../hooks/useWindowSize';
//animationss
import Fade from 'react-reveal/Fade';

function HeroSection2(props) {
  const router = useRouter();

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container 
        className="text-center" 
        style={{
          color:'#FFF',
          backgroundColor:'rgba(0, 0, 0, 0.4)', 
          marginTop:'18px'
        }}
      >
        <Fade
          bottom
          duration={1000}
          delay={500}
          distance="30px"
        >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={1}
          spaced={true}
        />
        {router.location.pathname !== "/" &&
          <div>
            <Button variant={props.buttonColor} size="md" onClick={props.buttonOnClick} style={{color:'white'}}>
              Home
            </Button>
            <Button variant={props.buttonColor} size="md" style={{color:'white'}}>
              {props.buttonText}
            </Button>
          </div>
        }
        </Fade>
      </Container>
    </Section>
  );
}

export default HeroSection2;
