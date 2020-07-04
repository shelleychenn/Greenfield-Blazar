import React from 'react';

const RatingBar = ({ bgcolor, percentage, icon }) => {
  return (
    <div className="rating-bar-container">
      <div
        className="rating-bar-filler"
        style={{ width: `${percentage}%`, backgroundColor: bgcolor }}
      >
        <span className="rating-bar-icon">{icon}</span>
      </div>
    </div>
  );
};

export default RatingBar;

// ▼
