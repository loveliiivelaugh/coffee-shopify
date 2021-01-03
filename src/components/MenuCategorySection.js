import React from 'react'
import Row from "react-bootstrap/Row";
import "./OurMenuSection.scss";
import Media from "react-bootstrap/Media";
import Avatar from "./Avatar";
import { useRouter } from '../util/router';

const MenuCategorySection = ({ item, index }) => {
  const router = useRouter();
  function handleClick(e) {
    e.preventDefault();
    router.push({
      pathname: "/product/"+item.title,
      state: {
        id: item.id,
      }
    });
  }
  return (
    <Row key={index} style={{paddingLeft:'25px',paddingRight:'25px'}}>
      <Media 
        className="align-items-center mt-auto" 
        style={{marginBottom:'25px', marginTop:'25px', cursor:"pointer"}}
        onClick={handleClick}
      >
        <Avatar src={item.images[0].src} alt={item.title} size="56px" />
        <Media.Body className="ml-2">
          <h6 className="font-weight-bold mb-0">{item.title}</h6>
          <p style={{color:'#c49a63', float:'right'}}>{item.variants[0].price}</p>
          <small style={{color:"gray"}}>{item.description}</small>
        </Media.Body>
      </Media>
    </Row>
  )
}
export default MenuCategorySection