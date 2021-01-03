import React from 'react'
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import AspectRatio from "./AspectRatio";
//animations
import { motion } from 'framer-motion'
import { useRouter } from "./../util/router.js";

const MenuItem = (props) => {
  const { 
    index,
    item, 
    isInCart, 
    addProduct, 
    increase, 
    moreThanOneInCart,
    removeProduct, 
    decrease, 
    removeItem } = props;
    const router = useRouter();

  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    }
  };

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
    <Col xs={12} md={4} lg={4} className="py-3" key={index}>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
      <AspectRatio ratio={2 / 2}>
        <Card.Img id={item.id} src={item.images[0].src} alt={item.title} variant="top" onClick={handleClick} style={{cursor:"pointer"}} />
      </AspectRatio>
      <h5>{item.title}</h5>
      <p>${item.variants[0].price || "$4.95"}</p>
      <p style={{color:'gray'}}>{item.description}</p>
      { isInCart(item.id) === false ? // use the item id being looped to check if the item is in the cart if it is not then 
          <Button variant="secondary" size="md" onClick={() => addProduct(item)}>
            Add to Cart
          </Button> : // if the item is in the cart then
          <Row className="justify-content-center">
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
      </motion.div>
    </Col>
  )
}
export default MenuItem;