import React from 'react';

const RatingBar = ({ percentage }) => {
  return (
    <div className="rating-bar-container">
      <div className="rating-bar-filler" style={{ width: `${percentage}%` }}>
        <span></span>
      </div>
    </div>
  );
};

export default RatingBar;
