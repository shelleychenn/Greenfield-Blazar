import React from 'react';

const RecommendCheckMark = ({ review }) => {
  if (review.recommend > 0) {
    return <p><img class='recommend-checkmark' src='/assets/checkmark-icon.png'/> I recommend this product</p>;
  } else {
    return null;
  }
};

export default RecommendCheckMark;
