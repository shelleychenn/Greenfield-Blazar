import React from 'react';

const SellerResponse = ({ review }) => {
  if (review.response === null || review.response === '') {
    return null;
  } else {
    return (
      <div>
        <p className="seller-response-heading">Response:</p>
        <p>{review.response}</p>
      </div>
    );
  }
};

export default SellerResponse;
