import React, { useEffect, useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import ReservationForm from './ReservationForm';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//icons
import { FaPhoneAlt } from 'react-icons/fa';
import { BiCurrentLocation, BiTimeFive } from 'react-icons/bi';
//animations
import Fade from 'react-reveal/Fade';
//hooks
import { useWindowSize } from '../hooks/useWindowSize';

function BookTableSection(props) {
  const { isDesktop, isMobile } = useWindowSize();
  const items = [
    {
      icon: "phone",
      title: "000 (123) 345 5680",
      p:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/golden-gate",
    },
    {
      icon: "location",
      title: "234 N. Oak St.",
      p:
        "1234 North Oak Street, Sam Framcisco, Califawnda, Califawnda, USA",
      url: "/post/beach",
    },
    {
      icon: "time",
      title: "Open Monday - Friday",
      p:
        "8:00am - 9:00pm",
      url: "/post/road",
    }
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
        <Row className="justify-content-center">
            {items.slice(0, 3).map((item, i) => (
              <Col key={i} sm={12} md={3} style={{display:'inline'}}>
                <Fade
                  bottom
                  duration={1000}
                  delay={500 + (i * 100)}
                  distance="30px"
                >
                  <Row>
                    {item.icon === "phone" && <Col sm={1} md={1}> <FaPhoneAlt color="#c49a63"/> </Col>}
                    {item.icon === "location" && <Col sm={1} md={1}> <BiCurrentLocation color="#c49a63"/> </Col>}
                    {item.icon === "time" && <Col sm={1} md={1}> <BiTimeFive color="#c49a63"/> </Col>}
                    <Col>
                      <b><h6>{item.title}</h6></b>
                      <p style={{color:'gray'}}>{item.p}</p>
                    </Col>
                  </Row>
                </Fade>
              </Col>
            ))}
          <Col sm={12} md={3} style={{backgroundColor:"#c49a63", paddingTop:'25px'}}>
            <SectionHeader subtitle="Book a Table" subtitleColor="#FFF" />
            <ReservationForm />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default BookTableSection;
