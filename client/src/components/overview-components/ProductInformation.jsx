import React, { useState, useEffect } from 'react';
import products from '../../../../_testApiData/_productsApi.js';
import reviews from '../../../../_testApiData/_reviewsApi.js';

const ProductInformation = () => {
  const [productDetails, setProductDetails] = useState();
  const [productStyles, setProductStyles] = useState();
  const [productReviews, setProductReviews] = useState();
  const [selectedStyle, setSelectedStyle] = useState();

  useEffect(() => {
    setProductDetails(products.productInformation);
    setProductStyles(products.productStyles);
    setProductReviews(reviews.selectedProductReviews.results);
    setSelectedStyle(!!productStyles && productStyles.results[0]);
  });

  const formatPrice = (price) => {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(
      price,
    );
  };

  return (
    <div className='productInformationComponent'>
      <div className='productInformation-container'>
        {!!productReviews && !!productReviews.length && (
          <div className='reviews-container'>
            <div>☆☆☆☆☆</div>
            {/* //! Link scrolls the page to the Ratings & Reviews */}
            <a href='.'>Read all {productReviews.length} reviews</a>
          </div>
        )}
        <p className='category'>{productDetails ? productDetails.category.toUpperCase() : null}</p>
        <h1>{productDetails ? productDetails.name : null}</h1>
        <div className='price-container'>
          {!!selectedStyle ? (
            selectedStyle.sale_price !== '0' ? (
              <>
                <p className='sales-price'>{formatPrice(selectedStyle.sale_price)}</p>
                <p className='pre-sales-price'>{formatPrice(selectedStyle.original_price)}</p>
              </>
            ) : (
              <p>{formatPrice(selectedStyle.original_price)}</p>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductInformation;
