import React, { useState, useEffect } from 'react';
import products from '../../../_testApiData/_productsApi.js';

const StyleSelector = () => {
  const [productStyles, setProductStyles] = useState();
  const [selectedStyle, setSelectedStyle] = useState();

  useEffect(() => {
    setProductStyles(products.productStyles.results);
    setSelectedStyle(!!productStyles && productStyles[0]); //! might need to use the 'default?' key
  }, [productStyles]);

  return (
    <div className='container-styleSelector'>
      <p>STYLE > {!!selectedStyle && selectedStyle.name.toUpperCase()}</p>
      <div>
        {!!productStyles &&
          productStyles.map((style) => {
            return <img src={style.photos[0].thumbnail_url} onClick={() => setSelectedStyle(style)} />;
          })}
      </div>
    </div>
  );
};

export default StyleSelector;
