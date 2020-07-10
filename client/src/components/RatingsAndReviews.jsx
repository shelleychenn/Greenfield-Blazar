import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReviewList from './RatingsAndReviewsComponents/ReviewList.jsx';
import ReviewBreakdown from './RatingsAndReviewsComponents/ReviewBreakdown.jsx';

const RatingsAndReviews = () => {
  const newReview = useSelector((state) => {
    state.newReview;
  });
  const productReviews = useSelector((state) => state.productReviews);

  const [starCount, setStarCount] = useState(null);

  const handleStarFilter = (starCount) => {
    setStarCount(starCount);
  };

  if (
    productReviews &&
    productReviews.reviews &&
    productReviews.reviews.length &&
    productReviews.reviewsMetaData
  ) {
    let reviews = productReviews.reviews;
    if (starCount !== null) {
      reviews = reviews.filter((review) => {
        return review.rating === starCount;
      });
    }
    return (
      <>
        <div className="ratings-and-reviews-container">
        <h5 className="ratings-and-reviews-header" id='ratings-and-reviews'>RATINGS &amp; REVIEWS</h5>
          {/* Left side: ReviewBreakdown goes here */}
          <div className="ratings-and-reviews-left-container">
            <ReviewBreakdown
              reviews={productReviews.reviews}
              reviewsMetaData={productReviews.reviewsMetaData}
              handleStarFilter={handleStarFilter}
            />
          </div>
          {/* Right side: ReviewList goes here */}
          <div className="ratings-and-reviews-right-container">
            <ReviewList
              reviews={reviews}
              reviewsMetaData={productReviews.reviewsMetaData}
            />
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default RatingsAndReviews;
