import React, { useEffect, useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import AspectRatio from "./AspectRatio";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
//animations
import Fade from 'react-reveal/Fade';
//hooks
import { useRouter } from '../util/router';

function BestSellersSection(props) {
  const router = useRouter();
  const { 
    products, 
    addProduct, 
    removeProduct, 
    increase, 
    decrease, 
    cartItems 
  } = props;

  // * I think these two functions might be a bit redundant. probably a better way to write this functionality
  //check if item is in cart
  function isInCart(item_id) {
    //check to see if there are any items in the cart
    if (cartItems.length > 0) {
      //if there are -> loop through each item in the cart
      for ( let i = 0; i < cartItems.length; i++ ) {
        //if item id matches a cart item id
        if (item_id === cartItems[i].id) {
          //then return true the item is in the cart
          return true;
        }
      }
    }
    //if the above doesnt check out then the item is not in the cart
    return false;
  }
  
  //check to see if there are more than one of these items in the cart
  function moreThanOneInCart(item_id) {
    //if there are items in the cart
    if (cartItems.length > 0) {
      //loop througheach of the items
      for ( let i = 0; i < cartItems.length; i++ ) {
        //use the id's to select the matching item in the cart
        if (item_id === cartItems[i].id) {
          //return the items quantity
          return cartItems[i].quantity;
        }
      }
    }
    //todo -- i dont think we need this and i dont think its right
    return cartItems.length;
  }

  function handleClick(e) {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    const title = e.target.getAttribute("alt")
    router.push({
      pathname: "/product/"+title,
      state: {
        id: id,
      }
    });
  }

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
          {!products ? "Loading..." :
            products.slice(0, 3).map((item, index) => (
            <Col xs={12} md={6} lg={3} className="py-3" key={index}>
              <Fade
                bottom
                duration={1000}
                delay={500}
                distance="30px"
              >
              <AspectRatio ratio={2 / 0.75}>
                <Image id={item.id} src={item.images[0].src} alt={item.title} onClick={handleClick} style={{cursor:"pointer"}}/>
              </AspectRatio>
              <div className="text-center">
                <h4>{item.title}</h4>
                <p style={{color:'gray'}}>{item.description.slice(0, 56)}...</p>
                <span>
                  <p>{item.variants[0].price || "$4.95"}</p>
                </span>
                { isInCart(item.id) === false ? // use the item id being looped to check if the item is in the cart if it is not then 
                  <Button variant="secondary" size="md" onClick={() => addProduct(item)}>
                    Add to Cart
                  </Button> : // if the item is in the cart then
                  <Row className="justify-content-center" style={{gap:'5px'}}>
                    <Button variant="secondary" size="md" onClick={() => increase(item)}>
                      +
                    </Button>
                    { moreThanOneInCart(item.id) > 1 ? // use the item id being looped to check the quantity in the cart, if there is more than 1 in the cart then show
                      <Button variant="secondary" size="md" onClick={() => decrease(item)}>
                        -
                      </Button> : // otherwise if there is only 1 item in the cart show the remove button
                      <Button variant="secondary" size="md" onClick={() => removeProduct(item)}>
                        Remove
                      </Button>
                    }
                  </Row>
                }
              </div>
              </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default BestSellersSection;
