import React from 'react';
import StarRating from '../StarRating.jsx';

const RatingSummary = ({ averageRating }) => {
  return (
    <div className="rating-summary">
      <div className="rating-average">
        <h1>{averageRating}</h1>
      </div>
      <div className="rating-average-stars">
        <StarRating value={averageRating} />
      </div>
    </div>
  );
};

export default RatingSummary;
