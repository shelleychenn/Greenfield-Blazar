import React from 'react';
import StarRating from './StarRating.jsx';
import NameAndDate from './NameAndDate.jsx';
import SubmittedImages from './SubmittedImages.jsx';

const ReviewListTile = ({ review }) => {
  return (
    <div className="review-tile">
      <div className="review-tile-header">
        <StarRating value={review.rating} />
        <NameAndDate review={review} />
      </div>
      <div className="review-tile-body">
        <div className="review-tile-body-summary">
          {review.summary.slice(0, 60)}...
        </div>
        <br />
        ...{review.summary.slice(60)}
        <br />
        <br />
        {review.body}
        <div className="review-tile-image-section">
          <SubmittedImages review={review} />
        </div>
      </div>
    </div>
  );
};

export default ReviewListTile;
