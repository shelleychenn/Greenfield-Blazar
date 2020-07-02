import React from 'react';
import StarRating from './StarRating.jsx';
import NameAndDate from './NameAndDate.jsx';
import SubmittedImages from './SubmittedImages.jsx';
import Summary from './Summary.jsx';

const ReviewListTile = ({ review }) => {
  return (
    <div className="review-tile">
      <div className="review-tile-header">
        <StarRating value={review.rating} />
        <NameAndDate review={review} />
      </div>
      <div className="review-tile-body">
        <div className="review-tile-body-summary">
          <Summary review={review} />
        </div>
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
