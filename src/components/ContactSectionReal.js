import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Contact from "./Contact";
import "./ContactSection.scss";
import ReservationForm from "./ReservationForm";

function ContactSectionReal(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <SectionHeader
              title={props.title}
              subtitle={props.subtitle}
              size={4}
              spaced={true}
              className="text-left"
            />
            <div style={{color:'gray'}}>
              <Row>
                <p>
                  <b style={{color:"#FFF"}}>Address:</b> 123 DrStrange Street<br />
                  New York, New York, 101012
                </p>
              </Row>
              <Row>
                <p><b style={{color:"#FFF"}}>Phone:</b> 123 345 5678</p>
              </Row>
              <Row>
                <p><b style={{color:"#FFF"}}>Email:</b> info@yoursite.com</p>
              </Row>
              <Row>
                <p><b style={{color:"#FFF"}}>Website:</b> yoursite.com</p>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} className="mt-3 mt-md-0">
            <Contact
              showNameField={props.showNameField}
              buttonText={props.buttonText}
              buttonColor={props.buttonColor}
            />
          </Col>
          </Row>
          <br/>
          <Row>
            <iframe
              className="ContactSection__map has-background-light"
              src={props.embedSrc}
              title="Contact Map"
              frameBorder={0}
            />
        </Row>
      </Container>
    </Section>
  );
}

export default ContactSectionReal;
