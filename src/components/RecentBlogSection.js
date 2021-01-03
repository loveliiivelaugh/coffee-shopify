import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import AspectRatio from "./AspectRatio";
import Button from "react-bootstrap/Button";
//images
import cafe_food from '../public/cafe_food1.jpg';
import cafe_lunch from '../public/cafe_lunch.jpg';
import cafe_chocolate from '../public/cafe_chocolate_dessert.jpg';
//icons
import { BiCommentDetail } from 'react-icons/bi';
//animationsss
import Fade from 'react-reveal/Fade';

function RecentBlogSection(props) {
  const items = [
    {
      date: "Dec. 12, 2020",
      author: "Author",
      image: cafe_food,
      title: "Faucibus turpis in",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/golden-gate",
    },
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
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {items.slice(0,3).map((item, index) => (
            <Col xs={12} md={6} lg={3} className="py-3" key={index}>
              <Fade
                bottom
                duration={1000}
                delay={500}
                distance="30px"
              >
              <AspectRatio ratio={1 / 0.75}>
                <Card.Img src={item.image} alt={item.title} variant="top" />
              </AspectRatio>
                <div style={{display:'inline-block',color:'gray'}}>
                  <span>{item.date}</span>
                  <span>    </span>
                  <span>{item.author}</span>
                  <span>    </span>
                  <BiCommentDetail color="#FFF" />
                  <span>  </span>
                  <span><small>3</small></span>
                </div>
              <h5>{item.title}</h5>
              <p style={{color:'gray'}}>{item.body}</p>
            </Fade>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default RecentBlogSection;
