import React, { useState, useEffect } from 'react';
import products from '../../../../_testApiData/_productsApi.js';

const StyleSelector = () => {
  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();

  useEffect(() => {
    setProductStyles(products.productStyles.results);
    setSelectedStyle(!!productStyles && productStyles[0]); //! might need to use the 'default?' key
  }, [productStyles]);

  return (
    <div className='styleSelector-component'>
      <div className='container-styleSelector'>
        <p>
          <span>STYLE > </span>
          {!!selectedStyle && selectedStyle.name.toUpperCase()}
        </p>
        <div className='container-thumbnails'>
          {!!productStyles &&
            productStyles.map((style) => {
              return (
                <div>
                  {selectedStyle.style_id === style.style_id ? (
                    <img className='checkmark' src='./assets/checkmark-icon.png' />
                  ) : null}
                  <img
                    className='thumbnail'
                    src={style.photos[0].thumbnail_url}
                    onClick={() => setSelectedStyle(style)}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default StyleSelector;
