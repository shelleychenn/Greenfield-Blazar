import React from 'react';
import ImageGallery from './overview-components/ImageGallery.jsx';
import AddToCart from './overview-components/AddToCart.jsx';
import ProductInformation from './overview-components/ProductInformation.jsx';
import ProductOverview from './overview-components/ProductOverview.jsx';

const Overview = () => {
  return (
    <>
      <ImageGallery />
      <AddToCart />
      <ProductInformation />
      <ProductOverview />
    </>
  );
}

export default Overview;