import React from 'react';
import ReviewListTile from './ReviewListTile.jsx';

// input: displayed product / (product id)

const ReviewList = ({ reviews }) => {
  return (
    <div className="review-list">
      {reviews.results.map((review) => (
        <ReviewListTile review={review} />
      ))}
    </div>
  );
};

export default ReviewList;
