import React from 'react';
import ReviewList from './RatingsAndReviewsComponents/ReviewList.jsx';

const RatingsAndReviews = ({ reviews }) => {
  return (
    <div className="ratings-and-reviews-container">
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default RatingsAndReviews;
