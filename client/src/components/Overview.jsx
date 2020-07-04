import React from 'react';
import ImageGallery from './overview-components/ImageGallery.jsx';
import AddToCart from './overview-components/AddToCart.jsx';
import ProductInformation from './overview-components/ProductInformation.jsx';

const Overview = () => {
  return (
    <>
      <ImageGallery />
      <AddToCart />
      <ProductInformation />
    </>
  );
}

export default Overview;