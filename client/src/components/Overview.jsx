import React from 'react';
import ImageGallery from './overview-components/ImageGallery.jsx';
import AddToCart from './overview-components/AddToCart.jsx';
import ProductInformation from './overview-components/ProductInformation.jsx';
import ProductOverview from './overview-components/ProductOverview.jsx';
import StyleSelector from './overview-components/StyleSelector.jsx';

const Overview = () => {
  return (
    <div className = 'overview-master-component'>
      <ImageGallery />
      <div className = 'overview-side-container'>
        <ProductInformation />
        <StyleSelector />
        <AddToCart />
      </div>
      <ProductOverview />
    </div>
  );
}

export default Overview;