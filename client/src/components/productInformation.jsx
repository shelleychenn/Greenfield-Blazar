import React, { useState } from 'react';
import { productInformation as prodInfo, productStyles as prodStyles } from '../../../_testApiData/_productsApi.js';

const ProductInformation = () => {
  const [ productInformation, setProductInformation ] = useState({});
  const [ productStyles, setProductStyles ] = useState({});

  return (
    <div className = 'container-productInformation'>
      <div>
        <div>STARS</div>
        <p>Read all reviews</p>
      </div>
      <p>CATEGORY</p>
      <h1>Product Name</h1>
      <p>Price</p>
    </div>
  );
}

export default ProductInformation;