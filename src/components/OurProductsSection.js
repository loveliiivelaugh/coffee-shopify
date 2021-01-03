import React, { useEffect, useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import MenuItem from "./MenuItem";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./OurProductsSection.scss";

function OurProductsSection(props) {
  const [coffee, setCoffee] = useState(false);
  const [mainDish, setMainDish] = useState(true);
  const [drinks, setDrinks] = useState(false);
  const [desserts, setDesserts] = useState(false);
  const { products, addProduct, removeProduct, increase, decrease, cartItems } = props;
  let sliceTo = 3;
  if (props.pathname === '/menu' || props.pathname === '/shop') { sliceTo = 6; }
  useEffect(() => {
    if (props.pathname === '/shop') { 
      setMainDish(false);
      setCoffee(true);
    }
  }, []);


  function selector(e) {
    e.preventDefault();
    const id = e.target.id;
    if (id === "coffee") {
      if (coffee === false) {
        setCoffee(true)
        setMainDish(false)
        setDrinks(false)
        setDesserts(false)
      }
    }
    if (id === "main") {
      if (mainDish === false) {
        setMainDish(true)
        setDrinks(false)
        setDesserts(false)
        setCoffee(false)
      }
    }
    if (id === "drinks") {
      if (drinks === false) {
        setDrinks(true)
        setMainDish(false)
        setDesserts(false)
        setCoffee(false)
      }
    }
    if (id === "dessert") {
      if (desserts === false) {
        setDesserts(true)
        setMainDish(false)
        setDrinks(false)
        setCoffee(false)
      }
    }
  }

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
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        />
        <Row className="justify-content-center" style={{gap:'10px'}}>
          {props.pathname === '/shop' && 
            <Button id="coffee" variant="secondary" size="lg" onClick={selector}>Coffee</Button>
          }
          <Button id="main" variant="secondary" size="lg" onClick={selector}>Main Dish</Button>
          <Button id="drinks" variant="secondary" size="lg" onClick={selector}>Drinks</Button>
          <Button id="dessert" variant="secondary" size="lg" onClick={selector}>Dessert</Button>
        </Row>
        <br />
        <Row className="justify-content-center" sm={12} md={3} lg={4}>
        
        {coffee && 
          products.filter(item => item.productType === "coffee").slice(0, sliceTo).map((item, index) => (
              <MenuItem 
                item={item} 
                index={index} 
                isInCart={isInCart} 
                addProduct={addProduct}
                increase={increase}
                moreThanOneInCart={moreThanOneInCart}
                decrease={decrease}
                removeProduct={removeProduct}
              />
          ))}

        {mainDish && 
          products.filter(item => item.productType === "main dish").slice(0, sliceTo).map((item, index) => (
            <MenuItem 
              item={item} 
              index={index} 
              isInCart={isInCart} 
              addProduct={addProduct}
              increase={increase}
              moreThanOneInCart={moreThanOneInCart}
              decrease={decrease}
              removeProduct={removeProduct}
            />
          ))}

        {drinks && 
          products.filter(item => item.productType === "drinks").slice(0, sliceTo).map((item, index) => (
            <MenuItem  
              item={item} 
              index={index} 
              isInCart={isInCart} 
              addProduct={addProduct}
              increase={increase}
              moreThanOneInCart={moreThanOneInCart}
              decrease={decrease}
              removeProduct={removeProduct}
            />
          ))}

        {desserts &&
          products.filter(item => item.productType === "dessert").slice(0, sliceTo).map((item, index) => (
            <MenuItem  
              item={item} 
              index={index} 
              isInCart={isInCart} 
              addProduct={addProduct}
              increase={increase}
              moreThanOneInCart={moreThanOneInCart}
              decrease={decrease}
              removeProduct={removeProduct}
            />
          ))}

        </Row>
      </Container>
    </Section>
  );
}

export default OurProductsSection;
