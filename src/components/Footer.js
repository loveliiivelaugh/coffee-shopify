import React from "react";
import Section from "./Section";
import FooterBlogSection from "./FooterBlogSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "./../util/router.js";
//scss
import "./Footer.scss";
//icons
import { FaPhoneAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { BiCurrentLocation, BiEnvelope } from 'react-icons/bi';
// animations
import Fade from 'react-reveal/Fade';

function Footer(props) {
  const workDetails = {
    street: '1234 Oak St.',
    city: 'San Francisco',
    state: 'California',
    country: 'USA',
    phone: '+1 123 456 7890',
    email: 'info@yourdomain.com'
  };
  const socialIconStyles = {
    backgroundColor:"rgba(255,255,255,0.1)", 
    borderRadius:'50px', 
    padding:'10px', 
    marginLeft:'5px', 
    marginRight:'5px'
  };

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <h5>About Us</h5>

            {props.description && (
              <p className="FooterComponent__description">
                {props.description}
              </p>
            )}

            {props.copyright && (
              <p className="FooterComponent__copyright">{props.copyright}</p>
            )}

            <Row>
              <Fade
                bottom
                duration={1000}
                delay={300}
                distance="30px"
              >
                <div style={socialIconStyles}>
                  <FaTwitter size="24px" />
                </div>
              </Fade>
              <Fade
                bottom
                duration={1000}
                delay={500}
                distance="30px"
              >
                <div style={socialIconStyles}>
                  <FaFacebookF size="24px"/>
                </div>
              </Fade>
              <Fade
                bottom
                duration={1000}
                delay={700}
                distance="30px"
              >
                <div style={socialIconStyles}>
                  <FaInstagram size="24px" />
                </div>
              </Fade>
            </Row>

          </Col>
          <Col xs={12} md={4} className="mt-3 mt-md-0">            <h5>Recent Blog</h5>
            <FooterBlogSection />
          </Col>
          <Col xs={12} md={2} className="mt-3 mt-md-0">
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://medium.com"
                >
                  Blog
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={3} className="mt-3 mt-md-0">
            <h5>Have Questions?</h5>
            <Row>
              <Col xs={2} md={2} >
                <BiCurrentLocation />
              </Col>
              <Col>
                {workDetails.street}, {workDetails.city}, {workDetails.country}
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={2} md={2} >
                <FaPhoneAlt />
              </Col>
              <Col>
                {workDetails.phone}
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={2} md={2} >
                <BiEnvelope />
              </Col>
              <Col>
                {workDetails.email}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default Footer;
