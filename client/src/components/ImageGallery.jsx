import React, { useState, useEffect } from 'react';
import products from '../../../_testApiData/_productsApi.js';

const ImageGallery = () => {
  //! will need to convert to either props or shared state
  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();
  //!

  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    setProductStyles(products.productStyles.results);
    setSelectedStyle(!!productStyles && productStyles[0]);
    setCurrentImage(!!productStyles ? productStyles[0].photos[2] : null);
  }, [productStyles]);

  return (
    <div className='container-imageGallery'>
      {/* relative position */}
      <img src = {currentImage ? currentImage.url : ''}
           className = 'main-image'/> {/* absolute position */}
      <div className = 'image-overlay-container'>
        {/* absolute position, z-index: 10 */}
        <div className = 'thumbnail-container'>
          {/*//! 7 images at a time */}
          { selectedStyle && selectedStyle.photos.map(({ thumbnail_url }) => {
            return <img className = 'thumbnail' src = {thumbnail_url}/>;
          }) }
          {/* down arrow icon */}
        </div>
        <img className = 'fullScreen-icon' src = './assets/fullscreen-icon.png'/>
        <img className = 'leftArrow-icon' src = './assets/left-arrow-icon.png'/>
        <img className = 'rightArrow-icon' src = './assets/right-arrow-icon.png'/>
      </div>
    </div>
  );
};

export default ImageGallery;
