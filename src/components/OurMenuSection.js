import React, { useEffect, useState } from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SectionHeader from "./SectionHeader";
import MenuCategorySection from './MenuCategorySection';
//animations
import Fade from 'react-reveal/Fade';

function OurMenuSection(props) {
  const { products } = props;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories(products) {
      const types = []
      for ( let i = 0; i < products.length; i++ ) {
        await types.push(products[i].productType);
      }
      const filteredTypes = [...new Set(types)];
      await setCategories(filteredTypes);
    }
    getCategories(products);
  }, []);
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
          {categories.map(category => 
            <Col xs={12} md={6}>
              <Fade
                bottom
                duration={1000}
                delay={500}
                distance="30px"
              >
              <Row style={{marginBottom:'50px', marginTop:'50px', padding:'25px'}}>
                <SectionHeader
                  title={category.toUpperCase()}
                  subtitle=""
                  size={4}
                  spaced={true}
                />
              </Row>
              </Fade>
                {products.filter(item => item.productType === category).map((item, index) => (
                  <Fade
                    bottom
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <MenuCategorySection item={item} index={index} />
                  </Fade>
                ))}
            </Col>
          )}
        </Row>
      </Container>
    </Section>
  );
}

export default OurMenuSection;
