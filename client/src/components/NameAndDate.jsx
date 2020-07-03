import React from 'react';

const NameAndDate = ({ review }) => {
  let months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  let dateDate = new Date(review.date);
  let month = months[dateDate.getMonth().toString()];
  let date = dateDate.getDate() + 1;
  let year = dateDate.getFullYear();

  if (review.reviewer_name && review.date) {
    return (
      <div className="review-name-date">
        {review.reviewer_name}, {month} {date}, {year}
      </div>
    );
  }
};

export default NameAndDate;
