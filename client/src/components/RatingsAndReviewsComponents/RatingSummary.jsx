import React from 'react';
import StarRating from '../StarRating.jsx';

const RatingSummary = ({ averageRating, reviewCounts }) => {
  return (
    <div className="rating-summary">
      <div className="rating-average">
        <h1>{averageRating}</h1>
      </div>
      <div className="rating-average-stars">
        <StarRating value={averageRating} /> ({reviewCounts})
      </div>
    </div>
  );
};

export default RatingSummary;
