import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";
//animations
import Fade from 'react-reveal/Fade';
//hooks
import { useWindowSize } from '../hooks/useWindowSize';


function TestimonialsSection(props) {
  const { isDesktop, isMobile } = useWindowSize();
  const items = [
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-5.jpeg",
      name: "Sarah Kline",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      company: "Company",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-48.jpeg",
      name: "Shawna Murray",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!",
      company: "Company",
    },
    {
      avatar: "https://uploads.divjoy.com/pravatar-150x-12.jpeg",
      name: "Blake Elder",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae.",
      company: "Company",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Fade
          bottom
          duration={1000}
          delay={500}
          distance="30px"
        >
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={2}
            spaced={true}
            className="text-center"
          />
        </Fade>
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} md={4} className="py-3" key={index}>
              <Fade
                bottom
                duration={1000}
                delay={500 + (index * 100)}
                distance="30px"
              >
              <Card style={{backgroundColor:'#c49a63'}}>
                <Card.Body className="p-4">
                  <Card.Text>"{item.testimonial}"</Card.Text>
                  <Media className="align-items-center mt-auto">
                    <Avatar src={item.avatar} alt={item.name} size="48px" />
                    <Media.Body className="ml-2">
                      <h6 className="font-weight-bold mb-0">{item.name}</h6>
                      <small>{item.company}</small>
                    </Media.Body>
                  </Media>
                </Card.Body>
              </Card>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;
