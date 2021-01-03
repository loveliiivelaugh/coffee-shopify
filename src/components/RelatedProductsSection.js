import React, { useContext } from 'react';

//components
import SectionHeader from "./SectionHeader";
import BestSellersSection from './BestSellersSection';

const RelatedProductsSection = (props) => {
  const { products, addProduct, removeProduct, increase, decrease, cartItems } = props;
  return (
    <>
      <SectionHeader
        title={props.title}
        subtitle={props.subtitle}
        size={2}
        spaced={true}
        className="text-center"
      />
      <BestSellersSection
        bg=""
        textColor="light"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Best Coffee Sellers"
        subtitle="Far far away, behind the wotf mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
        products={products}
        addProduct={addProduct}
        removeProduct={removeProduct}
        increase={increase}
        decrease={decrease}
        cartItems={cartItems}
      />
    </>
  )
}
export default RelatedProductsSection;