import React, { useState, useEffect } from 'react';
import products from '../../../_testApiData/_productsApi.js';
//! import reviews test data

const ProductInformation = () => {
  const [productDetails, setProductDetails] = useState();
  const [productStyles, setProductStyles] = useState();
  //! set review state

  useEffect(() => {
    setProductDetails(products.productInformation);
    setProductStyles(products.productStyles);
  });

  return (
    <div className='container-productInformation'>
      //! If no reviews available, hides this section
      <div>
        <div>STARS</div>
        //! Update # with review count
        //! Link scrolls the page to the Ratings & Reviews
        <a href='.'>Read all # reviews</a>
      </div>
      <p>{productDetails ? productDetails.category.toUpperCase() : null}</p>
      <h1>{productDetails ? productDetails.name : null}</h1>
      //! Connect price to the currently selected style
      //! If SKU is discounted, sale price appears in red; strikethrough original price
      <p>{productDetails ?
      Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 5 })
          .format(productDetails.default_price) : null}</p>
    </div>
  );
};

export default ProductInformation;
