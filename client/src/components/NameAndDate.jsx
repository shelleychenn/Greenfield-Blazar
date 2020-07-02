import React from 'react';

const NameAndDate = ({ review }) => {
  if (review.reviewer_name && review.date) {
    return (
      <div className="review-name-date">
        {review.reviewer_name}, {review.date}
      </div>
    );
  }
};

export default NameAndDate;
