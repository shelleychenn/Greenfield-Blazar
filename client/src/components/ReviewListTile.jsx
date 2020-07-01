import React from 'react';
import StarRating from './StarRating.jsx';

const ReviewListTile = ({ review }) => {
  return (
    <div className="review-tile">
      <div className="review-tile-header">
        <StarRating value={review.rating} />
        {review.reviewer_name}, {review.date}
      </div>
      <div className="review-tile-body">
        <div className="review-tile-body-summary">
          {review.summary.slice(0, 60)}
        </div>
      </div>
    </div>
  );
};

export default ReviewListTile;
