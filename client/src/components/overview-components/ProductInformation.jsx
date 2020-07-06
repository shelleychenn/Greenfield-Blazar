import React from 'react';
import { useSelector } from 'react-redux';

const ProductInformation = () => {

  const productStyles = useSelector((state) => state.productStyles);
  const selectedStyle = useSelector((state) => state.selectedStyle);
  const productDetails = useSelector((state) => state.productInfo);
  const productReviews = useSelector((state) => state.productReviews);

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
