import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AspectRatio from "./AspectRatio";
import { LinkContainer } from "react-router-bootstrap";
import { BsSearch } from "react-icons/bs";
//animations
import Fade from 'react-reveal/Fade';
//hooks
import { useWindowSize } from '../hooks/useWindowSize';
import { usePexels } from './../hooks/usePexels';

function FeaturesSection(props) {
  const { isDesktop, isMobile } = useWindowSize();
  const items = [
    {
      image: "https://images.unsplash.com/photo-1559941003-4f656f95b734?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhZmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Faucibus turpis in",
      body:
      "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/menu",
    },
    {
      image: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhZmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Faucibus turpis in",
      body:
      "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/menu",
    },
    {
      image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhZmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Faucibus turpis in",
      body:
      "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/menu",
    },
    {
      image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Faucibus turpis in",
      body:
      "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/menu",
    },
  ];

  function onHover(e) {
    console.log({message: "You have hovered", event: e.target.getAttribute("alt")})
    const title = e.target.getAttribute("alt");
    // const hidden = document.getElementById('gallery-icon-'+title)
    // console.log(hidden)
    // hidden.hidden = false;
  }

  function offHover(e) {
    console.log({message: "You have left", event: e.target})
    const title = e.target.getAttribute("alt");
    // const hidden = document.getElementById('gallery-icon-'+title)
    // console.log(hidden)
    // hidden.hidden = true;
  }
  const iconBackground = {
    backgroundColor:"#c49a63",
    padding: '10px',
    maxWidth: '20%',
    // transform: "translate(-50%, -50%)",
    margin: '0 auto',
    position: 'relative',
    top:'-100px',
    zIndex: 3
  }
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      {/* <Container className="text-center"> */}
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} md={6} lg={3} className="py-3" key={index}>
            <Fade
              bottom
              duration={1000}
              delay={500 + (index * 100)}
              distance="30px"
            >
              <LinkContainer to={item.url}>
                <div className="text-center" style={{position: 'relative'}}>
                  <Image
                    src={item.image} 
                    alt={item.title} 
                    variant="top" 
                    style={{maxHeight:'560px'}}
                    onMouseOver={onHover}
                    onMouseLeave={offHover}
                  />
                    {/* <div id={"gallery-icon-"+item.title} style={iconBackground} hidden={true}>
                      <BsSearch />
                    </div>*/}
                </div> 
              </LinkContainer>
            </Fade>
            </Col>
          ))}
        </Row>
    {/* </Container> */}
    </Section>
  );
}

export default FeaturesSection;
