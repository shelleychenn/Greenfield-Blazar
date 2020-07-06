import React from 'react';
import { useSelector } from 'react-redux';

const ProductOverview = () => {
  const productDetails = useSelector((state) => state.productInfo);

  return (
    <div className='productOverview-component'>
      <div className='productOverview-container'>
        <div className='productDescription-container'>
          <div className='description'>
            {!!Object.keys(productDetails).length && (productDetails.slogan || productDetails.description) && (
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
          {!!Object.keys(productDetails).length && !!productDetails.features.length && (
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
