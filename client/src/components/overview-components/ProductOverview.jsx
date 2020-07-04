import React, { useState, useEffect } from 'react';
import products from '../../../../_testApiData/_productsApi.js';

const ProductOverview = () => {
  const [productDetails, setProductDetails] = useState();

  useEffect(() => {
    setProductDetails(products.productInformation);
  }, [products]);

  return (
    <div className='productOverview-component'>
      <div className='productOverview-container'>
        <div className='productDescription-container'>
          <div className='description'>
            {!!productDetails && (productDetails.slogan || productDetails.description) && (
              <>
                <h4>{productDetails.slogan}</h4>
                <p>{productDetails.description}</p>
              </>
            )}
            {/* //! Need to add sharing functionality */}
            <div className='socialMedia-container'>
              <img src='./assets/facebook-icon.png' />
              <img src='./assets/twitter-icon.png' />
              <img src='./assets/pinterest-icon.png' />
            </div>
          </div>
          {!!productDetails && !!productDetails.features.length && (
            <div className='features'>
              {productDetails.features.map(({ feature, value }) => (
                <p>
                  <span>{feature}</span>
                  {`: ${value}`}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
