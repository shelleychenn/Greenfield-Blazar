import React from 'react';
import ReviewList from './ReviewList.jsx';

const RatingsAndReviews = ({ review }) => {
  return (
    <div className="ratings-and-reviews-container">
      <ReviewList review={review} />
    </div>
  );
};

export default RatingsAndReviews;
