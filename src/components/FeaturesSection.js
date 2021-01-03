import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//icons
import order_icon from '../public/receipt_icon.png';
import cart_icon from '../public/cart_icon.png';
import coffee_grinder_icon from '../public/coffee_grinder_icon.png';
//animation
import Fade from 'react-reveal/Fade';
//hooks
import { useWindowSize } from '../hooks/useWindowSize';

function FeaturesSection(props) {
  const { isDesktop, isMobile } = useWindowSize();
  const items = [
    {
      title: "Easy to Order",
      subtitle:
        "We've gamified everything so you feel like you're having fun when you're actually doing free work for us. Win win!",
      icon: order_icon,
      iconClass: "fas fa-gem",
      iconColor: "primary",
    },
    {
      title: "Fastest Delivery",
      subtitle:
        "If you want to keep having fun remember to stay charged! And by that we mean you need to buy our ERC-20 CHARGE token to keep playing.",
      icon: cart_icon,
      iconClass: "fas fa-charging-station",
      iconColor: "primary",
    },
    {
      title: "Pick your flavor",
      subtitle:
        "Dark mode is so last year. We have a light mode and turquoise mode. Either way, your eyes are going to hurt. Don't forget to stay charged!",
      icon: coffee_grinder_icon,
      iconClass: "fas fa-adjust",
      iconColor: "primary",
    },
  ];
  const iconStyles = {maxHeight:'100px', border:'solid 1px #000',padding:'5px'};

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
            <Col xs={12} lg={4} className="px-4" key={index}>
              <Fade
                bottom
                duration={1000}
                delay={500 + (index * 100)}
                distance="30px"
              >
                <div className="py-3">
                  <div className={`text-${item.iconColor} display-4 mb-4`}>
                    <Image src={item.icon} alt={item.title} style={iconStyles}/>
                  </div>
                  <h4 className="mb-4">{item.title}</h4>
                  <p>{item.subtitle}</p>
                </div>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
