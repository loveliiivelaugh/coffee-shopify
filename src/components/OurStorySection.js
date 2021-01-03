import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import OurStorySectionHeader from "./OurStorySectionHeader";
import "./OurStorySection.scss";
//animations
import Fade from 'react-reveal/Fade';
//hooks
import { useWindowSize } from '../hooks/useWindowSize';

function OurStorySection(props) {
  const { isDesktop, isMobile } = useWindowSize();
  console.log({isDesktop: isDesktop, isMobile: isMobile})
  const subtitle =
  "On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word and and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.";
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-left">
            {/* <figure className="OurStorySection__image-container mx-auto"> */}
              <Image src={props.image} fluid={true} style={{height:'auto'}}/>
            {/* </figure> */}
          </Col>
          <Col className="">
            <Fade
              bottom
              duration={1000}
              delay={500}
              distance="30px"
            >
              <OurStorySectionHeader
                title="Discover Our Story"
                subtitle={subtitle}
                size={2}
                spaced={false}
                className="mb-0"
              />
            </Fade>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default OurStorySection;
