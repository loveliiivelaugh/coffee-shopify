import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import OurProductsSection from "./OurProductsSection";
import Products from './Products';

const ProductsSection = (props) => {
  const { pathname, products, cart } = props;
  const { addProduct, increase, decrease, cartItems } = cart;
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <SectionHeader
        title={props.title}
        subtitle={props.subtitle}
        size={2}
        spaced={true}
      />
      <Container className="text-center">
        {/* <Products products={products} /> */}
        <OurProductsSection
          bg=""
          textColor="light"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          title=""
          subtitle=""
          p=""
          products={products}
          addProduct={addProduct}
          increase={increase}
          decrease={decrease}
          cartItems={cartItems}
          pathname={pathname}
        />
      </Container>
    </Section>
  )
}

export default ProductsSection;