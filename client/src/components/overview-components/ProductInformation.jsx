import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import StarRating from '../StarRating.jsx';

const ProductInformation = () => {

  const [ratingsAverage, setRatingsAverage] = useState();
  const productStyles = useSelector((state) => state.productStyles);
  const selectedStyle = useSelector((state) => state.selectedStyle);
  const productDetails = useSelector((state) => state.productInfo);
  const productReviews = useSelector((state) => state.productReviews);

  useEffect(() => {
    if (productReviews.reviews) {
      let avg = productReviews.reviews.reduce((acc, cur) => {
        acc += cur.rating;
        return acc;
      }, 0) / productReviews.reviews.length;
      setRatingsAverage(avg.toFixed(1));
    }
  }, [productReviews]);

  const formatPrice = (price) => {
    return Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumSignificantDigits: 5 }).format(
      price,
    );
  };

  return (
    <div className='productInformationComponent'>
      <div className='productInformation-container'>
        {!!productReviews && !!productReviews.reviews && !!productReviews.reviews.length && (
          <div className='overview-reviews-container'>
            <StarRating value={ratingsAverage} />
            <a href='#ratings-and-reviews'>Read all {productReviews.reviews.length} reviews</a>
          </div>
        )}
        <p className='category'>{!!Object.keys(productDetails).length ? productDetails.category.toUpperCase() : null}</p>
        <h1>{productDetails ? productDetails.name : null}</h1>
        <div className='price-container'>
          {!!Object.keys(selectedStyle).length ? (
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
