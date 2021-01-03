import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import AspectRatio from "./AspectRatio";
import Button from "react-bootstrap/Button";
//images
import cafe_food from '../public/cafe_food1.jpg';
import cafe_lunch from '../public/cafe_lunch.jpg';
import cafe_chocolate from '../public/cafe_chocolate_dessert.jpg';
//icons
import { BiCommentDetail } from 'react-icons/bi'

function FooterBlogSection(props) {
  const items = [
    // {
    //   date: "Dec. 12, 2020",
    //   author: "Author",
    //   image: cafe_food,
    //   title: "Faucibus turpis in",
    //   body:
    //     "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
    //   url: "/post/golden-gate",
    // },
    {
      date: "Dec. 12, 2020",
      author: "Author",
      image: cafe_lunch,
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/beach",
    },
    {
      date: "Dec. 12, 2020",
      author: "Author",
      image: cafe_chocolate,
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/road",
    },
    {
      date: "Dec. 12, 2020",
      author: "Author",
      image: "https://source.unsplash.com/eOcyhe5-9sQ/800x600",
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/ballons",
    },
  ];

  
  return (
    
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
          {items.slice(0,2).map((item, index) => (
            <div>
              <Row>
                <Col xs={12} md={3} lg={3} key={index}>
                  <div>
                    <Image src={item.image} alt={item.title} style={{maxHeight:'50px', padding:'5px'}} />
                  </div>
                </Col>
                <Col md={9}>
                  <h6>{item.title}</h6>
                    <div style={{display:'inline-block',color:'gray'}}>
                      <small>
                        <span>{item.date}</span>
                        <span>    </span>
                        <span>{item.author}</span>
                        <span>    </span>
                        <BiCommentDetail color="#FFF" />
                        <span>  </span>
                        <span><small>3</small></span>
                      </small>
                    </div>
                </Col>
              </Row>
              <br />
            </div>
          ))}
      </Container>
  );
}

export default FooterBlogSection;
