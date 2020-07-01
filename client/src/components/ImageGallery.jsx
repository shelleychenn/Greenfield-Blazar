import React, { useState, useEffect } from 'react';
import products from '../../../_testApiData/_productsApi.js';

const ImageGallery = () => {
  //! will need to convert to either props or shared state
  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();
  //!

  useEffect(() => {
    setProductStyles(products.productStyles.results);
    setSelectedStyle(!!productStyles && productStyles[0]);
  }, [productStyles]);

  return (
    <div className='container-imageGallery'>
      {/* relative position */}
      <img /> {/* absolute position */}
      <div>
        {/* absolute position, z-index: 10 */}
        <div>
          {/* 5 images mapped into here */}
          {/* down arrow icon */}
        </div>
        <img />
        <img />
        <img />
      </div>
    </div>
  );
};

export default ImageGallery;
