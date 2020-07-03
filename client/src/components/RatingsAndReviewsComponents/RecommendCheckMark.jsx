import React from 'react';

const RecommendCheckMark = ({ review }) => {
  if (review.recommend > 0) {
    return <p>✓ I recommend this product</p>;
  } else {
    return null;
  }
};

export default RecommendCheckMark;
